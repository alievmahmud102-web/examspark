"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  BarChart3,
  Brain,
  Calendar,
  Languages,
  MessageSquare,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

const featureIcons: LucideIcon[] = [
  Brain,
  BarChart3,
  Calendar,
  MousePointerClick,
  MessageSquare,
  Languages,
];

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

export function Features() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [visible, setVisible] = useState<boolean[]>(Array(6).fill(false));
  const cardsRef = useRef<Array<HTMLElement | null>>([]);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisible((prev) => {
            if (prev[index]) return prev;

            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const t = translations[language].features;
  const cards = useMemo(
    () =>
      t.cards.map((card, index) => ({
        ...card,
        icon: featureIcons[index] ?? "✨",
      })),
    [t.cards],
  );

  return (
    <section id="features" className="px-1 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-4 sm:mb-10">
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            (() => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  ref={(node) => {
                    cardsRef.current[index] = node;
                  }}
                  data-index={index}
                  className={[
                    "group rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm",
                    "transition duration-500 ease-in-out hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_0_0_1px_rgba(163,230,53,0.08),0_26px_70px_rgba(163,230,53,0.06)]",
                    visible[index]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0",
                  ].join(" ")}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/14 text-text-primary transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 blur-[1px]"
                      />
                      <Icon
                        className="relative"
                        size={18}
                        strokeWidth={2.2}
                        opacity={0.92}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 min-h-[3.25rem] text-lg font-bold leading-tight tracking-tight text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/60">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
