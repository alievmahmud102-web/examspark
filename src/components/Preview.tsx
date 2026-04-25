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

export function Preview() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].preview;

  return (
    <section id="preview" className="px-1 py-14 sm:py-20">
      <div className="mb-8 space-y-4 sm:mb-10">
        <h2 className="text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          {t.sectionTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t.sectionSubtitle}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[0.42fr_0.58fr] md:gap-6">
        <nav className="space-y-2">
          {t.screens.map((screen, index) => {
            const isActive = index === activeScreen;
            return (
              <button
                key={screen.name}
                type="button"
                onClick={() => setActiveScreen(index)}
                className={[
                  "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left",
                  "transition-all duration-300",
                  isActive
                    ? "border-accent bg-accent/12 text-accent"
                    : "border-white/10 bg-[#1a1a1a] text-white/85 hover:border-primary",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <span className="font-semibold">{screen.name}</span>
                <span className="text-xs text-white/40">0{index + 1}</span>
              </button>
            );
          })}
        </nav>

        <div className="rounded-2xl border border-white/15 bg-[#141414] p-3 sm:p-4">
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e0e0e] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-2 h-2 w-28 rounded-full bg-white/10" />
          </div>

          <div
            key={activeScreen}
            className="preview-fade min-h-[270px] rounded-xl border border-white/10 bg-[#101010] p-3 sm:min-h-[320px]"
          >
            {activeScreen === 0 && (
              <div className="space-y-3">
                <div className="h-16 rounded-xl bg-gradient-to-r from-primary/65 to-accent/40" />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="h-20 rounded-lg bg-white/8" />
                  <div className="h-20 rounded-lg bg-white/8" />
                  <div className="h-20 rounded-lg bg-white/8" />
                </div>
                <div className="h-24 rounded-xl bg-white/6" />
              </div>
            )}

            {activeScreen === 1 && (
              <div className="space-y-3">
                <div className="h-10 w-3/4 rounded-lg bg-accent/30" />
                <div className="space-y-2">
                  <div className="h-11 rounded-xl bg-white/7" />
                  <div className="h-11 rounded-xl bg-white/7" />
                  <div className="h-11 rounded-xl bg-white/7" />
                </div>
                <div className="h-12 w-1/2 rounded-xl bg-primary/40" />
              </div>
            )}

            {activeScreen === 2 && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="h-8 w-24 rounded-full bg-accent/30" />
                  <div className="h-8 w-24 rounded-full bg-white/10" />
                  <div className="h-8 w-24 rounded-full bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-14 rounded-xl bg-white/8" />
                  <div className="h-14 rounded-xl bg-white/8" />
                  <div className="h-14 rounded-xl bg-white/8" />
                </div>
              </div>
            )}

            {activeScreen === 3 && (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2 rounded-xl bg-white/7 p-3">
                  <div className="h-3 w-2/3 rounded bg-white/35" />
                  <div className="h-3 w-1/2 rounded bg-accent/45" />
                  <div className="h-12 rounded-lg bg-white/10" />
                </div>
                <div className="space-y-2 rounded-xl bg-white/7 p-3">
                  <div className="h-3 w-1/2 rounded bg-white/35" />
                  <div className="h-3 w-2/3 rounded bg-accent/45" />
                  <div className="h-12 rounded-lg bg-white/10" />
                </div>
                <div className="space-y-2 rounded-xl bg-white/7 p-3 sm:col-span-2">
                  <div className="h-3 w-1/3 rounded bg-white/35" />
                  <div className="h-3 w-1/4 rounded bg-accent/45" />
                  <div className="h-12 rounded-lg bg-white/10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <p id="demo" className="mt-4 text-sm text-white/65">
        {t.liveDemoNote}
      </p>
    </section>
  );
}
