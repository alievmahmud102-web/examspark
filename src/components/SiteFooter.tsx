"use client";

import { useEffect, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

const PHONE_DISPLAY = "+998 90 926 24 26";
const PHONE_TEL = "tel:+998909262426";
const TELEGRAM_URL = "https://t.me/+998909262426";
const INSTAGRAM_URL = "https://instagram.com/language_vision";

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
    const sync = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", sync);
    window.addEventListener("languageChange", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("languageChange", sync);
    };
  }, []);

  const f = translations[language].footer;

  return (
    <footer id="contacts" className="border-t border-white/10 px-4 py-12 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2 text-sm text-zinc-400">
          <p className="text-xs uppercase tracking-wider text-zinc-500">IELTS</p>
          <p>{f.address}</p>
          <p>
            <span className="text-zinc-500">{f.phoneLabel}: </span>
            <a href={PHONE_TEL} className="text-text-primary/90 underline-offset-2 hover:text-accent hover:underline">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary/85 underline-offset-2 hover:text-accent hover:underline"
          >
            {f.telegramLabel}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary/85 underline-offset-2 hover:text-accent hover:underline"
          >
            {f.languagesLabel}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-zinc-600">{f.rights}</p>
    </footer>
  );
}
