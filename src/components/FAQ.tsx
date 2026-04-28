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
    <section id="faq" className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 space-y-4 sm:mb-8">
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="border-t border-white/5">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="border-b border-white/5 py-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-0 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={[
                      "text-sm font-bold tracking-tight transition-colors duration-300 sm:text-base",
                      isOpen ? "text-accent" : "text-white",
                    ].join(" ")}
                  >
                    {item.question}
                  </span>
                  <span
                    className={[
                      "text-xl font-light text-white/60 transition-transform duration-300",
                      isOpen ? "rotate-45 text-accent" : "rotate-0",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-48 pb-4" : "max-h-0",
                  ].join(" ")}
                >
                  <p className="max-w-3xl pr-8 text-sm leading-relaxed text-white/50">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
