"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

    if (isTouch) return;

    const root = document.documentElement;
    const onMove = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      style={{
        background:
          "radial-gradient(280px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(124,58,237,0.15), rgba(124,58,237,0) 70%)",
      }}
    />
  );
}
