"use client";

import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";

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
  instant,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  instant: boolean;
}) {
  const animatedValue = useCountUp(value, start && !instant);
  const displayValue = instant && start ? value : animatedValue;
  const formattedValue =
    suffix === "$" ? `$${displayValue}` : `${displayValue}${suffix}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
      <p className="text-4xl font-black tracking-tighter text-accent sm:text-5xl">
        {formattedValue}
      </p>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
});

export function SocialProof() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [startCounter, setStartCounter] = useState(false);
  const [instantCounters, setInstantCounters] = useState(false);
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

  useLayoutEffect(() => {
    if (!isNarrowMotionViewport()) return;
    setInstantCounters(true);
    setStartCounter(true);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (isNarrowMotionViewport()) return;

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
    <section id="social-proof" ref={rootRef} className="relative isolate px-1 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-44 max-w-5xl rounded-full bg-primary/20 blur-3xl opacity-20" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {t.counters.map((counter) => (
            <CounterCard
              key={counter.label}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
              start={startCounter}
              instant={instantCounters}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.reviews.map((review) => (
            <article
              key={`${review.name}-${review.city}`}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/14 via-white/8 to-primary/22 text-sm font-black text-text-primary">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-white/60">{review.city}</p>
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
      </div>
    </section>
  );
}
