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

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-1 pb-8 pt-6 sm:pt-10 md:pt-16"
    >
      <div className="hero-blob pointer-events-none absolute left-[-180px] top-[-130px] -z-10 h-[420px] w-[420px] rounded-full blur-3xl md:left-[48%] md:top-[-180px] md:h-[520px] md:w-[520px]" />

      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6 lg:gap-12">
        <div className="space-y-7">
          <h1 className="max-w-4xl text-4xl leading-[1.02] font-black text-white sm:text-5xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold tracking-wide text-black hover:shadow-[0_0_26px_rgba(163,230,53,0.45)]"
            >
              {t.ctaDemo}
            </a>
            <a
              href="#order-form"
              className="inline-flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 px-6 py-3 text-sm font-bold tracking-wide text-white hover:bg-primary/85"
            >
              {t.ctaBuy}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] md:ml-auto">
          <div className="mockup-float relative overflow-hidden rounded-[22px] border border-white/15 bg-[#141414] p-3 shadow-[0_34px_80px_rgba(124,58,237,0.26)] sm:p-4">
            <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e0e0e] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-2 h-2 w-24 rounded-full bg-white/10" />
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-4 w-2/3 rounded bg-accent/85" />
                <div className="h-3 w-full rounded bg-white/20" />
                <div className="h-3 w-5/6 rounded bg-white/12" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-primary/60 to-accent/25" />
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-1/2 rounded bg-white/20" />
                  <div className="mt-3 h-14 rounded-lg bg-primary/35" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-3 w-2/3 rounded bg-white/20" />
                  <div className="mt-3 h-9 rounded-lg bg-accent/40" />
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
