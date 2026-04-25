"use client";

import { useEffect, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

import { LanguageSwitcher } from "./language-switcher";

const storageKey = "site-language";

function getLanguageFromStorage(): LanguageCode {
  if (typeof window === "undefined") return "ru";

  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }

  return "ru";
}

export function SiteHeader() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].header;

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0f0f0f]/85 px-4 backdrop-blur-md md:px-8">
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[1440px] items-center justify-between gap-3">
        <a
          href="#hero"
          className="text-sm font-black tracking-[0.08em] text-white sm:text-base"
        >
          ExamSpark
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <div className="hidden items-center gap-2 sm:gap-3 md:flex">
          <nav className="mr-2 flex items-center gap-4 text-sm text-white/75">
            <a href="#features" className="hover:text-accent">
              Features
            </a>
            <a href="#pricing" className="hover:text-accent">
              Pricing
            </a>
            <a href="#faq" className="hover:text-accent">
              FAQ
            </a>
          </nav>
          <LanguageSwitcher />
          <a
            href="#order-form"
            className="rounded-full bg-accent px-4 py-2 text-xs font-black text-black hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] sm:px-5 sm:text-sm"
          >
            {t.buyCta}
          </a>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-72 py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-3">
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-white/85">
            Features
          </a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-white/85">
            Pricing
          </a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-white/85">
            FAQ
          </a>
          <LanguageSwitcher />
          <a
            href="#order-form"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-sm font-black text-black"
          >
            {t.buyCta}
          </a>
        </div>
      </div>
    </header>
  );
}
