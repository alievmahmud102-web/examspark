"use client";

import { useEffect } from "react";

import { supportedLanguages, type LanguageCode } from "@/i18n/translations";

const storageKey = "site-language";

function readLang(): LanguageCode {
  if (typeof window === "undefined") return "ru";
  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }
  return "ru";
}

/**
 * Синхронизирует `<html lang>` с выбранным языком (localStorage + событие languageChange).
 */
export function DocumentLang() {
  useEffect(() => {
    const apply = () => {
      const code = readLang();
      document.documentElement.lang = code;
    };

    apply();
    window.addEventListener("languageChange", apply);
    window.addEventListener("storage", apply);
    return () => {
      window.removeEventListener("languageChange", apply);
      window.removeEventListener("storage", apply);
    };
  }, []);

  return null;
}
