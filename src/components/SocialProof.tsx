"use client";

import { memo, useEffect, useRef, useState } from "react";

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

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const duration = 900;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value;
}

const CounterCard = memo(function CounterCard({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const animatedValue = useCountUp(value, start);

  return (
    <div className="rounded-2xl border border-white/12 bg-[#1a1a1a] p-5">
      <p className="text-4xl font-black text-accent sm:text-5xl">
        {animatedValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
});

export function SocialProof() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [startCounter, setStartCounter] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

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
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setStartCounter(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const t = translations[language].socialProof;

  return (
    <section id="social-proof" ref={rootRef} className="px-1 py-14 sm:py-20">
      <div className="grid gap-4 sm:grid-cols-3">
        {t.counters.map((counter) => (
          <CounterCard
            key={counter.label}
            value={counter.value}
            suffix={counter.suffix}
            label={counter.label}
            start={startCounter}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {t.reviews.map((review) => (
          <article
            key={`${review.name}-${review.city}`}
            className="rounded-2xl border border-white/12 bg-[#1a1a1a] p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-black text-black">
                {review.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-zinc-400">{review.city}</p>
              </div>
            </div>

            <div className="mb-3 flex gap-1 text-accent" aria-label="5 of 5 stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="text-sm leading-relaxed text-zinc-300">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
