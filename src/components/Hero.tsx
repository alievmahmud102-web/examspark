"use client";

import { useEffect, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

function getLanguageFromStorage(): LanguageCode {
  if (typeof window === "undefined") {
    return "ru";
  }

  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }

  return "ru";
}

export function Hero() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].hero;
  const accentPhrases: Record<LanguageCode, string> = {
    ru: "3-6",
    en: "3-6",
    uz: "3-6",
  };
  const trustLines: Record<LanguageCode, string> = {
    ru: "★ Более 500+ учеников уже улучшили свои результаты IELTS",
    en: "★ Over 500+ students already improved their IELTS results",
    uz: "★ 500+ o'quvchi IELTS natijalarini allaqachon yaxshiladi",
  };
  const accentPhrase = accentPhrases[language];
  const [titlePrefix, titleSuffix = ""] = t.title.split(accentPhrase);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-1 pb-8 pt-6 sm:pt-10 md:pt-16"
    >
      <div className="hero-blob pointer-events-none absolute left-[-180px] top-[-130px] -z-10 h-[420px] w-[420px] rounded-full blur-3xl md:left-[48%] md:top-[-180px] md:h-[520px] md:w-[520px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6 lg:gap-12">
        <div className="space-y-7">
          <h1 className="max-w-4xl text-4xl leading-[1.15] font-black tracking-tighter text-text-primary sm:text-5xl sm:leading-[1.12] lg:text-7xl lg:leading-[1.08]">
            {titleSuffix ? (
              <>
                {titlePrefix}
                <span className="text-accent">{accentPhrase}</span>
                {titleSuffix}
              </>
            ) : (
              t.title
            )}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-text-primary/85 sm:text-lg">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#order-form"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-tight text-dark-bg hover:brightness-105 hover:shadow-[0_0_26px_rgba(163,230,53,0.45)]"
            >
              {t.ctaDemo}
            </a>
            <a
              href="https://t.me/+998909262426"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium tracking-tight text-text-primary hover:bg-white/8 hover:border-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ctaBuy}
            </a>
          </div>

          <p className="text-sm tracking-wide text-text-primary/80">
            {trustLines[language]}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] md:ml-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_25%_30%,rgba(163,230,53,0.22),transparent_55%),radial-gradient(circle_at_78%_22%,rgba(124,58,237,0.26),transparent_55%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[34px] bg-[radial-gradient(circle_at_30%_35%,rgba(163,230,53,0.14),transparent_60%),radial-gradient(circle_at_78%_25%,rgba(124,58,237,0.18),transparent_60%)] blur-2xl"
          />

          <div className="mockup-float relative overflow-hidden rounded-[22px] border border-white/10 bg-[#141414] p-3 shadow-[0_34px_80px_rgba(124,58,237,0.26)] sm:p-4">
            <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e0e0e] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-2 h-2 w-24 rounded-full bg-white/14" />
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-4 w-2/3 rounded bg-accent/90" />
                <div className="h-3 w-full rounded bg-white/24" />
                <div className="h-3 w-5/6 rounded bg-white/14" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-primary/70 to-accent/30" />
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-1/2 rounded bg-white/24" />
                  <div className="mt-3 h-14 rounded-lg bg-primary/45" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-2/3 rounded bg-white/24" />
                  <div className="mt-3 h-9 rounded-lg bg-accent/50" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(163,230,53,0.13),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(124,58,237,0.2),transparent_35%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
