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
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm"
      aria-label="Language switcher"
    >
      {supportedLanguages.map((item) => {
        const isActive = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleChange(item)}
            className={[
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isActive
                ? "bg-accent text-black shadow-[0_0_18px_rgba(163,230,53,0.35)]"
                : "text-white/80 hover:bg-primary hover:text-white",
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
