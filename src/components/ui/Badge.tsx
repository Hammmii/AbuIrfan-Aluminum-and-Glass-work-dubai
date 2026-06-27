import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Badge.tsx — small inline pill label.
 *
 * A compact, tinted pill for status / category / metadata chips.
 * Small radius, subtle background tint derived from a token at low alpha,
 * tiny caption-size text. Sits inline; does not wrap block content.
 *
 * Colors are token-derived via Tailwind alpha modifiers (v3.4 color-mix):
 *   bronze → bronze accent (premium, use sparingly)
 *   steel  → neutral muted chip
 *   brand  → deep teal chip
 */

export type BadgeVariant = "bronze" | "steel" | "brand";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantFor: Record<BadgeVariant, string> = {
  // bg tint + readable text from the same token family.
  bronze: "bg-bronze/10 text-bronze",
  steel: "bg-steel/10 text-steel",
  brand: "bg-brand/10 text-brand",
};

export function Badge({ children, variant = "bronze", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-button px-2.5 py-1 font-display text-caption font-medium leading-none",
        variantFor[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
