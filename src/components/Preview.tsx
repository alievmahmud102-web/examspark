"use client";

import { motion } from "framer-motion";
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
  const reveal = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="preview" className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8 max-w-[52ch] space-y-4 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-[0.42fr_0.58fr] md:gap-6">
          <motion.nav
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.screens.map((screen, index) => {
              const isActive = index === activeScreen;
              return (
                <button
                  key={screen.name}
                  type="button"
                  onClick={() => setActiveScreen(index)}
                  className={[
                    "flex w-full items-center justify-between rounded-xl border px-5 py-3.5 text-left",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? [
                          "border-accent text-accent",
                          "bg-accent/12 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_60%)]",
                        ].join(" ")
                      : "border-white/10 bg-[#1a1a1a] text-white/85 hover:border-white/18 hover:text-white/92 hover:bg-white/[0.02]",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  <span className="font-semibold tracking-tight">{screen.name}</span>
                  <span className="text-xs text-white/40">0{index + 1}</span>
                </button>
              );
            })}
          </motion.nav>

          <motion.div
            className="relative isolate flex min-h-[320px] items-center justify-center py-6 sm:min-h-[420px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-[62%] -translate-y-[52%] rounded-full bg-primary/16 blur-3xl sm:h-48 sm:w-48" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-[8%] -translate-y-[18%] rounded-full bg-accent/14 blur-3xl sm:h-56 sm:w-56" />

            <motion.div
              className="relative w-full max-w-[640px] [perspective:1800px]"
              whileHover={{ rotateX: 3, rotateY: -6, y: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <div className="absolute inset-x-[11%] bottom-[-20px] h-12 rounded-full bg-black/65 blur-2xl sm:h-16" />

              <div className="relative mx-auto rounded-[28px] border border-white/12 bg-[#111111] p-2 shadow-2xl shadow-black/70 [transform:rotateX(8deg)_rotateY(-12deg)_rotateZ(1deg)] sm:p-3">
                <div className="rounded-[24px] border border-white/10 bg-[#151515] p-3 sm:p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0d0d0d] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 h-2 w-24 rounded-full bg-white/10 sm:w-32" />
                  </div>

                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 22, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="preview-fade min-h-[250px] rounded-[22px] border border-white/10 bg-[#0f0f0f] p-3 sm:min-h-[320px] sm:p-4"
                  >
                    {activeScreen === 0 && (
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-primary/60 via-primary/35 to-accent/25 p-3 shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="h-6 w-6 rounded-full bg-white/12 shadow-sm" />
                              <div className="space-y-1">
                                <div className="h-2 w-24 rounded bg-white/25" />
                                <div className="h-2 w-16 rounded bg-white/16" />
                              </div>
                            </div>
                            <div className="h-7 w-20 rounded-full bg-accent/25 shadow-sm" />
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-6 w-6 rounded-full bg-white/10" />
                                <div className="h-2 w-20 rounded bg-white/18" />
                              </div>
                              <div className="mt-3 space-y-2">
                                <div className="h-2 w-full rounded bg-white/14" />
                                <div className="h-2 w-5/6 rounded bg-white/10" />
                              </div>
                              <div className="mt-3 h-7 rounded-lg bg-primary/18" />
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="flex items-center justify-between gap-3">
                              <div className="h-2 w-24 rounded bg-white/18" />
                              <div className="h-2 w-10 rounded bg-white/10" />
                            </div>
                            <div className="mt-3 space-y-2">
                              <div className="h-2 w-full rounded bg-white/14" />
                              <div className="h-2 w-11/12 rounded bg-white/12" />
                              <div className="h-2 w-4/5 rounded bg-white/10" />
                            </div>
                            <div className="mt-3 h-20 rounded-xl bg-gradient-to-br from-primary/35 to-accent/18" />
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-20 rounded bg-white/18" />
                              <div className="h-2 w-10 rounded bg-white/10" />
                            </div>
                            <div className="mt-3 space-y-2">
                              <div className="h-9 rounded-xl bg-white/6" />
                              <div className="h-9 rounded-xl bg-white/6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 1 && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="h-8 w-40 rounded-xl bg-accent/22 shadow-[0_10px_24px_rgba(0,0,0,0.55)]" />
                          <div className="h-8 w-24 rounded-xl bg-white/6 shadow-[0_10px_24px_rgba(0,0,0,0.55)]" />
                        </div>

                        <div className="space-y-2">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-6 w-6 rounded-full bg-white/10" />
                                <div className="space-y-1">
                                  <div className="h-2 w-28 rounded bg-white/18" />
                                  <div className="h-2 w-20 rounded bg-white/10" />
                                </div>
                              </div>
                              <div className="h-6 w-16 rounded-full bg-primary/18" />
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr]">
                          <div className="rounded-2xl border border-white/10 bg-primary/22 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="h-2 w-24 rounded bg-white/20" />
                            <div className="mt-3 h-12 rounded-xl bg-white/8" />
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="h-2 w-20 rounded bg-white/18" />
                            <div className="mt-3 space-y-2">
                              <div className="h-2 w-full rounded bg-white/12" />
                              <div className="h-2 w-5/6 rounded bg-white/10" />
                              <div className="h-2 w-2/3 rounded bg-white/8" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                          <div className="flex items-center justify-between">
                            <div className="h-2 w-28 rounded bg-white/18" />
                            <div className="h-2 w-10 rounded bg-white/10" />
                          </div>
                          <div className="mt-3 h-16 rounded-xl bg-white/6" />
                        </div>
                      </div>
                    )}

                    {activeScreen === 2 && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <div className="h-8 w-28 rounded-full border border-accent/30 bg-accent/16 shadow-[0_10px_24px_rgba(0,0,0,0.55)]" />
                          <div className="h-8 w-24 rounded-full border border-white/10 bg-white/5 shadow-[0_10px_24px_rgba(0,0,0,0.55)]" />
                          <div className="h-8 w-24 rounded-full border border-white/10 bg-white/5 shadow-[0_10px_24px_rgba(0,0,0,0.55)]" />
                        </div>

                        <div className="space-y-2">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              <div className="min-w-0 flex-1 space-y-2">
                                <div className="h-2 w-2/3 rounded bg-white/16" />
                                <div className="h-2 w-5/6 rounded bg-white/10" />
                              </div>
                              <div className="h-7 w-20 rounded-xl bg-white/6" />
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl border border-white/10 bg-primary/18 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="h-2 w-16 rounded bg-white/20" />
                            <div className="mt-3 h-10 rounded-xl bg-white/8" />
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="h-2 w-20 rounded bg-white/18" />
                            <div className="mt-3 h-10 rounded-xl bg-white/8" />
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <div className="h-2 w-16 rounded bg-white/18" />
                            <div className="mt-3 h-10 rounded-xl bg-white/8" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 3 && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[0, 1].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                          >
                            <div className="flex items-center gap-2">
                              <span className="h-7 w-7 rounded-full bg-white/10" />
                              <div className="min-w-0 flex-1 space-y-2">
                                <div className="h-2 w-2/3 rounded bg-white/22" />
                                <div className="h-2 w-1/2 rounded bg-accent/35" />
                              </div>
                            </div>
                            <div className="mt-3 space-y-2">
                              <div className="h-2 w-full rounded bg-white/12" />
                              <div className="h-2 w-5/6 rounded bg-white/10" />
                              <div className="h-2 w-2/3 rounded bg-white/8" />
                            </div>
                          </div>
                        ))}

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)] sm:col-span-2">
                          <div className="flex items-center justify-between">
                            <div className="h-2 w-24 rounded bg-white/20" />
                            <div className="h-2 w-10 rounded bg-white/10" />
                          </div>
                          <div className="mt-3 grid gap-2 sm:grid-cols-3">
                            <div className="h-10 rounded-xl bg-white/6" />
                            <div className="h-10 rounded-xl bg-white/6" />
                            <div className="h-10 rounded-xl bg-white/6" />
                          </div>
                          <div className="mt-3 h-12 rounded-xl bg-accent/14" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="mx-auto mt-3 h-3 w-[32%] rounded-full bg-white/6" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <p
          id="demo"
          className="mt-4 inline-flex items-center gap-2 text-sm text-white/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/45" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent/70" />
          </span>
          {t.liveDemoNote}
        </p>
      </div>
    </section>
  );
}
