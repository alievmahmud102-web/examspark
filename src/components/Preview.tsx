"use client";

import { useEffect, useState } from "react";

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

export function Preview() {
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

  const t = translations[language].preview;

  return (
    <section id="preview" className="px-1 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-4 sm:mb-10">
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">{t.sectionSubtitle}</p>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.screens.map((screen, index) => (
            <li
              key={screen.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white/80"
            >
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-accent">
                {index + 1}
              </span>
              {screen.name}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm text-zinc-500">{t.liveDemoNote}</p>
      </div>
    </section>
  );
}
