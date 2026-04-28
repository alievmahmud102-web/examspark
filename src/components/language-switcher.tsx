"use client";

import { useState } from "react";

import { supportedLanguages, type LanguageCode } from "@/i18n/translations";

const storageKey = "site-language";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return "ru";
    }

    const saved = localStorage.getItem(storageKey);

    if (saved && supportedLanguages.includes(saved as LanguageCode)) {
      return saved as LanguageCode;
    }

    return "ru";
  });

  const handleChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
    window.dispatchEvent(new Event("languageChange"));
  };

  return (
    <div className="inline-flex items-center gap-2" aria-label="Language switcher">
      {supportedLanguages.map((item) => {
        const isActive = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleChange(item)}
            className={[
              "text-xs font-medium uppercase tracking-tight",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isActive
                ? "text-text-primary/90"
                : "text-text-primary/45 hover:text-text-primary/75",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
