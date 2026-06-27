import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Section.tsx — page-section wrapper.
 *
 * Establishes the vertical rhythm of a page band and its background surface.
 * Centers its content with the global `.container-page` utility (1280px + gutters).
 *
 * Background variants map to design tokens (RULES.md: colors via tokens only):
 *   light    → paper surface
 *   mist     → mist surface (page background tone)
 *   dark     → charcoal band
 *   charcoal → charcoal band (alias)
 *   brand    → brand band (deep teal)
 *
 * Dark / charcoal / brand bands default their text to paper/mist and their
 * headings to paper, so child content reads correctly without per-section fixes.
 *
 * padY: lg=96px / md=64px / sm=48px on desktop, halved on mobile (RULES.md §SPACING).
 */

export type SectionVariant = "light" | "mist" | "dark" | "charcoal" | "brand";
export type SectionPadY = "sm" | "md" | "lg";

export type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
  variant?: SectionVariant;
  padY?: SectionPadY;
};

const surfaceFor: Record<SectionVariant, string> = {
  light: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  dark: "bg-charcoal text-mist",
  charcoal: "bg-charcoal text-mist",
  brand: "bg-brand text-mist",
};

const padYFor: Record<SectionPadY, string> = {
  // Desktop value halved on mobile (mobile-first). RULES.md §SPACING requires a
  // 48px mobile floor on *section* rhythm, so lg never drops below 48px mobile.
  sm: "py-6 md:py-12", // 24px / 48px
  md: "py-8 md:py-16", // 32px / 64px
  lg: "py-12 md:py-24", // 48px / 96px
};

/**
 * Section — semantic landmark. Renders a <section role="region"> by default.
 * Pass `as="div"` when nesting sections or when the element is purely structural.
 */
export function Section({
  id,
  className,
  children,
  as = "section",
  variant = "light",
  padY = "lg",
}: SectionProps) {
  const Tag = as;
  const isDarkBand = variant === "dark" || variant === "charcoal" || variant === "brand";

  return (
    <Tag
      {...(as === "section" ? { role: "region" } : {})}
      id={id}
      className={cn(
        "w-full",
        surfaceFor[variant],
        padYFor[padY],
        // On dark bands, force headings + body to readable light tones.
        isDarkBand && "[&_*:is(h1,h2,h3,h4,h5)]:text-paper",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </Tag>
  );
}
