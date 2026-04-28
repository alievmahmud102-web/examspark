"use client";

import { FormEvent, useEffect, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

function getLanguageFromStorage(): LanguageCode {
  if (typeof window === "undefined") return "ru";

  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }

  return "ru";
}

export function RegisterForm() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].registerForm;
  const invalidContactMessage: Record<LanguageCode, string> = {
    ru: "Введите корректный телефон или Telegram (минимум 5 символов).",
    en: "Please enter a valid phone or Telegram (at least 5 characters).",
    uz: "Telefon yoki Telegramni to‘g‘ri kiriting (kamida 5 belgi).",
  };

  const validate = () => {
    const nextErrors: { name?: string; contact?: string } = {};

    if (!name.trim()) nextErrors.name = t.nameRequired;
    if (!contact.trim()) nextErrors.contact = t.contactRequired;
    if (contact.trim() && contact.trim().length < 5) {
      nextErrors.contact = invalidContactMessage[language];
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendError("");
    setIsSuccess(false);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          lang: language,
        }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        const payload = (() => {
          try {
            return JSON.parse(text) as unknown;
          } catch {
            return null;
          }
        })();
        console.error("Contact form request failed", {
          status: response.status,
          payload: payload ?? text,
        });
        const serverError =
          payload && typeof payload === "object" && payload !== null
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (payload as any).error
            : undefined;

        setSendError(
          typeof serverError === "string"
            ? serverError
            : `${t.sendError} (HTTP ${response.status})`,
        );
        return;
      }

      setName("");
      setContact("");
      setErrors({});
      setIsSuccess(true);
    } catch (error) {
      console.error("Contact form request error", error);
      setSendError(`${t.sendError} (Network error)`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order-form" className="px-1 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-8">
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">{t.sectionSubtitle}</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white/90">
                {t.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.namePlaceholder}
                className={[
                  "w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none",
                  "focus:ring-2",
                  errors.name
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400/25"
                    : "border-white/15 focus:border-accent focus:ring-accent/35",
                ].join(" ")}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact" className="text-sm text-white/90">
                {t.contactLabel}
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder={t.contactPlaceholder}
                className={[
                  "w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none",
                  "focus:ring-2",
                  errors.contact
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400/25"
                    : "border-white/15 focus:border-accent focus:ring-accent/35",
                ].join(" ")}
                aria-invalid={Boolean(errors.contact)}
              />
              {errors.contact && <p className="text-sm text-red-400">{errors.contact}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-accent px-6 py-3 text-base font-bold text-dark-bg disabled:cursor-not-allowed disabled:opacity-70 hover:shadow-[0_0_24px_rgba(163,230,53,0.42)]"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </form>

          {isSuccess && <p className="mt-4 text-sm text-accent/60">{t.success}</p>}
          {sendError && <p className="mt-3 text-sm text-red-400">{sendError}</p>}
        </div>
      </div>
    </section>
  );
}
