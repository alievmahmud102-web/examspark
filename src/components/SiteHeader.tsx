"use client";

import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
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

const navKeys = [
  { href: "#hero", key: "home" as const },
  { href: "#features", key: "features" as const },
  { href: "#pricing", key: "pricing" as const },
  { href: "#order-form", key: "contacts" as const },
];

export function SiteHeader() {
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

  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0f]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-5">
        <a
          href="#hero"
          className="font-[family-name:var(--font-unbounded)] text-sm font-extrabold tracking-tight text-text-primary sm:text-base"
        >
          Language Vision
        </a>

        <nav
          className="order-3 flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:order-none sm:flex-1 sm:justify-center md:w-auto"
          aria-label="Main"
        >
          {navKeys.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-text-primary/75 transition-colors hover:bg-white/5 hover:text-text-primary sm:text-sm"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <a
            href="#order-form"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-bold text-dark-bg no-underline hover:brightness-105 sm:px-5 sm:text-sm"
          >
            {t.header.buyCta}
          </a>
        </div>
      </div>
    </header>
  );
}
