"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { links } from "@/lib/site";
import { Icon } from "@/components/icons";

/**
 * MobileCtaBar — sticky bottom call-to-action bar, MOBILE ONLY (`lg:hidden`).
 *
 * Two equal-width buttons: Call (tel:) / Get Quote (/contact). Fixed to the
 * bottom edge, paper/blur surface, top border. Transitions ≤300ms ease-smooth.
 * Icon affordances carry aria-labels.
 */
export function MobileCtaBar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "border-t border-border bg-paper/95 backdrop-blur-glass",
        "grid grid-cols-2",
      )}
    >
      {/* Call */}
      <Link
        href={links.tel}
        aria-label="Call Abu Irfan"
        className={cn(
          "flex flex-col items-center justify-center gap-0.5 py-2.5",
          "font-display text-caption font-medium text-call",
          "transition-colors duration-300 ease-smooth hover:brightness-95",
          "focus-visible:outline-2 focus-visible:outline-brand-bright",
        )}
      >
        <Icon name="phone" size={20} />
        Call
      </Link>

      {/* Get Quote */}
      <Link
        href={links.quote}
        aria-label="Request a free quote"
        className={cn(
          "flex flex-col items-center justify-center gap-0.5 py-2.5",
          "font-display text-caption font-medium text-paper",
          "bg-brand transition-colors duration-300 ease-smooth hover:bg-brand-bright",
          "focus-visible:outline-2 focus-visible:outline-brand-bright",
        )}
      >
        <Icon name="arrow-right" size={20} />
        Get Quote
      </Link>
    </div>
  );
}
