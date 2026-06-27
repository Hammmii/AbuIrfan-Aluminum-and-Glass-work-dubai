/**
 * animations.ts — Framer Motion variant library.
 * Motion theme: light moving through glass + precision assembly.
 *
 * Rules (from RULES.md):
 * - Reveal: opacity 0→1, translateY 24px→0, 0.45s, ease smooth.
 * - Stagger children: 60ms.
 * - Hover: max 300ms, no spring bounce.
 * - Every variant must degrade gracefully when prefers-reduced-motion is set
 *   (handled by the <Reveal> wrapper / useReducedMotion, not duplicated here).
 *
 * NOTE: Framer Motion's `ease` requires a NUMERIC cubic-bezier tuple
 * `[x1, y1, x2, y2]` — NOT the CSS string `"cubic-bezier(...)"`. The string
 * form lives in tokens.ts `easing.smooth` for CSS transitions only.
 */

import { animation } from "./tokens";

/** Primary easing for all Framer transitions (numeric tuple, not CSS string). */
const SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade + rise on enter. The workhorse reveal. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: animation.revealDuration, ease: SMOOTH },
  },
};

/** Pure opacity fade — for overlays, images, dividers. */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: animation.revealDuration, ease: SMOOTH },
  },
};

/** Stronger rise for hero-scale entrances. */
export const riseLarge = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SMOOTH },
  },
};

/** Parent container that staggers its children by 60ms. */
export const staggerContainer = (stagger: number = animation.staggerDelay) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

/**
 * Light-refraction shimmer sweeping across glass imagery.
 * Used on hero image (single occurrence) — drives x from -100% → 200%.
 */
export const glassShimmer = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: "200%",
    opacity: [0, 0.6, 0],
    transition: {
      duration: 1.4,
      ease: SMOOTH,
      delay: 0.8,
      times: [0, 0.5, 1],
    },
  },
};

/**
 * Bronze "fill-sweep" on primary CTA hover.
 * A ::before layer scales X 0→1 from the left; text flips to white.
 */
export const bronzeSweep = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.28, ease: SMOOTH },
  },
};

/** Magnetic card/button — x/y are driven dynamically by useMagnetic(). */
export const magneticRest = {
  rest: { x: 0, y: 0 },
};

/**
 * Shared viewport config for whileInView reveals.
 * `once: true` — reveal plays a single time, no re-trigger on scroll-up.
 */
export const viewportOnce = { once: true, amount: 0.3 } as const;
