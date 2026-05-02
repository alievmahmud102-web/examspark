/** Совпадает с Tailwind `md` (768px): телефоны и узкие окна */
export const narrowMotionMediaQuery = "(max-width: 767px)" as const;

export function isNarrowMotionViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(narrowMotionMediaQuery).matches;
}
