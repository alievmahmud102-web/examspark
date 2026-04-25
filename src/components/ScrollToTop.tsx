"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-5 right-5 z-40 rounded-full border border-white/15 bg-[#1a1a1a]/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm",
        "transition-all duration-200 hover:border-accent hover:text-accent",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      ↑ Top
    </button>
  );
}
