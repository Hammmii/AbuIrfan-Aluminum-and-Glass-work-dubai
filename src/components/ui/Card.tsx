import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Card.tsx — base content card with the hover system.
 *
 * Default surface: token border, paper background, no shadow, rounded-lg (12px).
 *
 * Interactive hover (RULES.md-compliant, ≤320ms ease-smooth):
 *   - border shifts to a bronze tint
 *   - card lifts -translate-y-1
 *   - gains the single-layer `shadow-card-hover`
 *
 * `mediaClassName` is applied to an inner media wrapper so callers can attach
 * a scale-on-hover (e.g. an image): the card sets `group`, and media can use
 * `group-hover:scale-[1.03]` (kept ≤1.05 per RULES.md). Pass the scale utility
 * via `mediaClassName` to opt in — the base card does not assume media exists.
 *
 * Renders as `div` | `article`, or an `<a>` when `href` is set (whole-card link).
 */

export type CardProps = {
  as?: "div" | "article" | "a";
  href?: string;
  interactive?: boolean;
  className?: string;
  /** Classes applied to the inner media wrapper (enables group-hover scaling). */
  mediaClassName?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "className">;

/**
 * Shared inner content so the three render targets stay in sync.
 * `mediaClassName` only renders a wrapper when provided — keeps the DOM lean
 * for cards without media.
 */
function CardInner({
  mediaClassName,
  children,
}: {
  mediaClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {mediaClassName ? (
        <div className={cn("overflow-hidden transition-transform duration-300 ease-smooth", mediaClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
}

export function Card({
  as = "div",
  href,
  interactive = false,
  className,
  mediaClassName,
  children,
  ...rest
}: CardProps) {
  // Whole-card link → render an anchor regardless of `as`.
  const Tag = href ? "a" : as;

  const base = cn(
    "group block rounded-lg border border-border bg-paper",
    interactive &&
      "transition-[transform,border-color,box-shadow] duration-300 ease-smooth hover:-translate-y-1 hover:border-bronze/50 hover:shadow-card-hover",
    className,
  );

  if (Tag === "a") {
    return (
      <a href={href} className={base} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <CardInner mediaClassName={mediaClassName}>{children}</CardInner>
      </a>
    );
  }

  const Component = Tag as React.ElementType;
  return (
    <Component className={base} {...rest}>
      <CardInner mediaClassName={mediaClassName}>{children}</CardInner>
    </Component>
  );
}
