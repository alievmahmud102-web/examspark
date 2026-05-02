"use client";

import { useEffect, useRef, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";
import { isNarrowMotionViewport } from "@/lib/breakpoints";

const storageKey = "site-language";

function getLanguageFromStorage(): LanguageCode {
  if (typeof window === "undefined") return "ru";

  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }

  return "ru";
}

export function Pricing() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (isNarrowMotionViewport()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setIsVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const t = translations[language].pricing;
  const recommendedLabel: Record<LanguageCode, string> = {
    ru: "Рекомендуем",
    en: "Recommended",
    uz: "Tavsiya etiladi",
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={[
        "px-1 py-16 transition-all duration-700 ease-in-out sm:py-24",
        "max-md:translate-y-0 max-md:opacity-100 max-md:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-4 sm:mb-12">
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] ring-1 ring-primary/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.08),transparent_45%)]" />
          <div className="grid gap-4 rounded-[27px] bg-dark-bg/90 p-5 backdrop-blur-sm sm:p-7 lg:grid-cols-[1fr_0.34fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-tight text-dark-bg">
                  {recommendedLabel[language]}
                </span>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <p className="text-5xl font-black leading-none tracking-tighter text-text-primary sm:text-6xl">
                  {t.price}
                </p>
                <p className="mb-1 text-xl text-zinc-500 line-through sm:text-2xl">
                  {t.freelancerPrice}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-base font-semibold text-white">{t.includedTitle}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {t.includedItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#order-form"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-bold text-dark-bg sm:w-auto sm:min-w-[320px]"
              >
                {t.cta}
              </a>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <ul className="space-y-3">
                {t.trustItems.map((item) => (
                  <li key={item} className="text-sm text-zinc-300">
                    <span className="mr-2 text-accent">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
