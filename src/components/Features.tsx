"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

const featureIcons = ["🧠", "📈", "🗓️", "📌", "💬", "🌍"];

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
      <div className="mb-8 space-y-4 sm:mb-10">
        <h2 className="text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl">
          {t.sectionTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t.sectionSubtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.title}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            data-index={index}
            className={[
              "rounded-2xl border border-transparent bg-[#1a1a1a] p-5",
              "transition duration-500 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[0_18px_50px_rgba(124,58,237,0.22)]",
              visible[index]
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-xl text-accent">
              {card.icon}
            </div>
            <h3 className="mb-2 text-lg leading-tight text-white">{card.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
