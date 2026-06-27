"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useMagnetic } from "@/hooks/useMagneticHover";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

/**
 * Button.tsx — the signature Abu Irfan CTA.
 *
 * Variants (all colors from tokens, all transitions ≤300ms ease-smooth):
 *
 *  primary   — transparent body, 1.5px brand border, brand text. On hover a
 *              bronze overlay (`bg-bronze`) scales X 0→1 from the LEFT
 *              (origin-left) while the text lifts to -1px and flips to paper.
 *              This mirrors the bronze-sweep CTA in src/app/page.tsx.
 *
 *  secondary — interactive-text link with an underline that grows 0→100% width
 *              on hover (mirrors the phone-link pattern in page.tsx).
 *
 *  ghost     — steel text on a subtle border; hover → ink text + stronger border.
 *
 *  call      — call-green pill (`rounded-pill`) with paper text + a
 *              `<PhoneIcon />`. A subtle `animate-pulse-ring` plays on hover
 *              (the keyframe already lives in tailwind.config.ts). Use for
 *              tel: "Call now" CTAs.
 *
 * `magnetic` (default true for primary & call) wires the `useMagnetic` hook,
 * which is automatically disabled when `useReducedMotion()` is true.
 *
 * Renders an `<a>` when `href` is provided, otherwise a `<button>`.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "call";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  /** Apply the magnetic-hover drift. Defaults true for primary & call. */
  magnetic?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href" | "className">;

/**
 * Framer Motion redefines these DOM handlers with PanInfo signatures. We omit
 * them from the `rest` spread onto `motion.a` / `motion.button` so the types
 * stay assignable — no `any`, no casts-to-unknown. A CTA never uses HTML5 DnD.
 */
type MotionConflictKeys =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDragExit"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";
type MotionSafeAnchor = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  MotionConflictKeys
>;
type MotionSafeButton = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  MotionConflictKeys
>;

const sizeFor: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-caption",
  md: "px-6 py-3 text-small",
  lg: "px-7 py-3.5 text-small",
};

/**
 * Builds the inner JSX for each variant. Split out so the anchor and button
 * branches share one source of truth for the visual treatment.
 */
function renderVariant(
  variant: ButtonVariant,
  size: ButtonSize,
  children: React.ReactNode,
  className: string,
) {
  switch (variant) {
    case "primary":
      // Bronze fill-sweep — signature interaction. Matches src/app/page.tsx.
      return (
        <span
          className={cn(
            "group relative inline-flex items-center justify-center overflow-hidden rounded-button border border-brand font-display text-small font-medium text-brand transition-colors duration-300 ease-smooth hover:-translate-y-px hover:text-paper",
            sizeFor[size],
            className,
          )}
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-smooth group-hover:scale-x-100"
          />
          <span className="relative z-10">{children}</span>
        </span>
      );

    case "secondary":
      // Underline-grow link — matches the phone-link pattern in page.tsx.
      return (
        <span
          className={cn(
            "group inline-flex items-center gap-2 py-2 font-display font-medium text-interactive transition-colors duration-300 ease-smooth hover:text-brand",
            sizeFor[size],
            className,
          )}
        >
          <span className="relative">
            {children}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-interactive transition-all duration-300 ease-smooth group-hover:w-full" />
          </span>
        </span>
      );

    case "ghost":
      return (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-button border border-border font-display font-medium text-steel transition-colors duration-300 ease-smooth hover:border-brand hover:text-ink",
            sizeFor[size],
            className,
          )}
        >
          {children}
        </span>
      );

    case "call":
      return (
        <span
          className={cn(
            "group inline-flex items-center justify-center gap-2 rounded-pill bg-call font-display font-medium text-paper transition-colors duration-300 ease-smooth hover:animate-pulse-ring",
            sizeFor[size],
            className,
          )}
        >
          <PhoneIcon size={16} className="shrink-0" />
          <span>{children}</span>
        </span>
      );
  }
}

/**
 * Button — anchor or button depending on `href`.
 *
 * The outer element is a Framer `motion.a` / `motion.button` so the magnetic
 * spring transform can drive `style.x` / `style.y` dynamically (the only inline
 * style allowed under RULES.md: a dynamically-calculated transform).
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  magnetic,
  className,
  children,
  ...rest
}: ButtonProps) {
  const reduce = useReducedMotion();
  const enableMagnetic = (magnetic ?? (variant === "primary" || variant === "call")) && !reduce;

  // The hook generic is inferred from which element we render. We keep two
  // instances so each branch returns the correctly-typed ref + handlers.
  const anchorMag = useMagnetic<HTMLAnchorElement>();
  const buttonMag = useMagnetic<HTMLButtonElement>();

  const inner = renderVariant(variant, size, children, className ?? "");

  if (href) {
    const mag = enableMagnetic ? anchorMag : null;
    return (
      <motion.a
        href={href}
        ref={mag?.ref ?? null}
        style={mag?.motionStyle}
        onMouseMove={mag?.onMouseMove}
        onMouseLeave={mag?.onMouseLeave}
        className="inline-flex"
        {...(rest as MotionSafeAnchor)}
      >
        {inner}
      </motion.a>
    );
  }

  const mag = enableMagnetic ? buttonMag : null;
  return (
    <motion.button
      type="button"
      ref={mag?.ref ?? null}
      style={mag?.motionStyle}
      onMouseMove={mag?.onMouseMove}
      onMouseLeave={mag?.onMouseLeave}
      className="inline-flex"
      {...(rest as MotionSafeButton)}
    >
      {inner}
    </motion.button>
  );
}
