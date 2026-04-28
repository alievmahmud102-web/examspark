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

export function SiteFooter() {
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

  const t = translations[language].footer;

  return (
    <footer className="mt-14 px-4 pb-6 pt-0 md:px-8">
      <div className="h-px w-full bg-white/10" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 pt-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p className="text-zinc-400">{t.rights.replace(/202\d/g, "2026")}</p>
        <div className="flex flex-wrap items-center gap-5 md:justify-end">
          <a
            href="https://t.me/aviron153"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/85 hover:text-accent"
          >
            {t.telegramLabel}: @aviron153
          </a>
          <p className="text-white/70">
            {t.languagesLabel}: <span className="text-white">RU / EN / UZ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
