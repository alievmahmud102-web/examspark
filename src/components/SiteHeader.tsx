"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
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

const navKeys = [
  { href: "#features", key: "features" as const },
  { href: "#pricing", key: "pricing" as const },
  { href: "#faq", key: "faq" as const },
];

function navLinkClassName() {
  return [
    "text-sm font-medium text-white/70 transition-colors",
    "hover:text-white",
  ].join(" ");
}

function ctaClassName() {
  return [
    "inline-flex shrink-0 items-center justify-center rounded-full border border-white/35",
    "bg-transparent px-5 py-2 text-sm font-semibold text-white no-underline",
    "transition-colors hover:border-white/55 hover:bg-white/10",
  ].join(" ");
}

export function SiteHeader() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sync = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", sync);
    window.addEventListener("languageChange", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("languageChange", sync);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const t = translations[language];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-4 sm:px-5">
        <a
          href="#hero"
          className="font-[family-name:var(--font-unbounded)] text-base font-extrabold tracking-tight text-white no-underline"
          onClick={closeMenu}
        >
          Language Vision
        </a>

        {/* Desktop: навигация + язык + CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Main">
            {navKeys.map(({ href, key }) => (
              <a key={key} href={href} className={navLinkClassName()}>
                {t.nav[key]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <a href="#order-form" className={ctaClassName()}>
              {t.header.buyCta}
            </a>
          </div>
        </div>

        {/* Mobile: только гамбургер */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-label={t.header.menuOpenLabel}
        >
          <Menu size={22} strokeWidth={2} aria-hidden />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-[100] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={[
            "absolute inset-0 bg-black/70 transition-opacity",
            menuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={closeMenu}
          aria-label={t.header.menuCloseLabel}
        />
        <div
          className={[
            "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-white/10 bg-black px-5 pb-8 pt-4 shadow-2xl transition-transform duration-200 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/5"
              onClick={closeMenu}
              aria-label={t.header.menuCloseLabel}
            >
              <X size={22} strokeWidth={2} aria-hidden />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1" aria-label="Main">
            {navKeys.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className="rounded-lg px-2 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                onClick={closeMenu}
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-white/40">
              {t.header.languageGroupLabel}
            </p>
            <LanguageSwitcher />
          </div>

          <a
            href="#order-form"
            className={`${ctaClassName()} mt-8 w-full justify-center py-3`}
            onClick={closeMenu}
          >
            <span className="sm:hidden">{t.header.buyCtaShort}</span>
            <span className="hidden sm:inline">{t.header.buyCta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
