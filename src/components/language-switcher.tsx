"use client";

import { useEffect, useState } from "react";

import {
  languageNativeNames,
  supportedLanguages,
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

export function LanguageSwitcher() {
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

  const handleChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
    window.dispatchEvent(new Event("languageChange"));
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1"
      role="group"
      aria-label="Language"
    >
      {supportedLanguages.map((item) => {
        const isActive = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleChange(item)}
            title={languageNativeNames[item]}
            className={[
              "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide sm:px-3 sm:text-xs",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isActive
                ? "bg-accent/20 text-accent"
                : "text-text-primary/50 hover:bg-white/5 hover:text-text-primary/85",
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
