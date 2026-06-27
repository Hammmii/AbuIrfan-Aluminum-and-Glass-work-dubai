"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { links } from "@/lib/site";
import { Icon } from "@/components/icons";

/**
 * MobileCtaBar.tsx — sticky bottom call-to-action bar, MOBILE ONLY (`lg:hidden`).
 *
 * Three equal-width buttons: Call / WhatsApp / Get Quote. Fixed to the bottom
 * edge, paper/blur surface, top border. All transitions ≤300ms ease-smooth.
 *
 * The WhatsApp button uses the whatsapp-green token; the others are tonal.
 * Icon-only affordances carry aria-labels.
 */

export function MobileCtaBar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "border-t border-border bg-paper/95 backdrop-blur-glass",
        "grid grid-cols-3",
      )}
    >
      {/* Call */}
      <Link
        href={links.tel}
        aria-label="Call Abu Irfan"
        className={cn(
          "flex flex-col items-center justify-center gap-0.5 py-2.5",
          "font-display text-caption font-medium text-steel",
          "transition-colors duration-300 ease-smooth hover:text-ink",
          "focus-visible:outline-2 focus-visible:outline-brand-bright",
        )}
      >
        <Icon name="phone" size={20} className="text-brand" />
        Call
      </Link>

      {/* WhatsApp */}
      <Link
        href={links.whatsapp}
        aria-label="Message Abu Irfan on WhatsApp"
        className={cn(
          "flex flex-col items-center justify-center gap-0.5 border-x border-border py-2.5",
          "font-display text-caption font-medium text-whatsapp",
          "transition-colors duration-300 ease-smooth hover:brightness-95",
          "focus-visible:outline-2 focus-visible:outline-brand-bright",
        )}
      >
        <Icon name="whatsapp" size={20} />
        WhatsApp
      </Link>

      {/* Get Quote */}
      <Link
        href="/contact"
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
