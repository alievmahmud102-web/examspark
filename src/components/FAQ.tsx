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

export function FAQ() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].faq;

  return (
    <section id="faq" className="px-1 py-14 sm:py-20">
      <div className="mb-8 space-y-4 sm:mb-10">
        <h2 className="text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          {t.sectionTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t.sectionSubtitle}
        </p>
      </div>

      <div className="space-y-3">
        {t.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="rounded-2xl border border-white/12 bg-[#1a1a1a] px-4 py-3 sm:px-5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-1 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <span className="text-xl font-light text-accent">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              <div
                className={[
                  "overflow-hidden transition-all duration-300 ease-out",
                  isOpen ? "max-h-48 pt-2" : "max-h-0",
                ].join(" ")}
              >
                <p className="text-sm leading-relaxed text-zinc-300">{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
