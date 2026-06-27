"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/icons";

/**
 * MegaMenu.tsx — the Radix NavigationMenu content panel for a nav item's children.
 *
 * Rendered inside a Radix `<NavigationMenu.Content>`. Lays the child links out in a
 * responsive 2–3 column grid; each cell shows the label (font-display) + optional
 * blurb (text-small text-steel) + an arrow that slides in on hover.
 *
 * Entrance: fade + translateY(-8px → 0), 200ms ease-smooth (≤300ms rule).
 * Reduced-motion: Radix's data-state transitions are disabled by the global
 * `prefers-reduced-motion` media query in globals.css, so no JS branch needed.
 *
 * Accessibility: the parent NavigationMenu (wired in Header) owns the
 * keyboard/focus model; the links here are plain, focusable anchors.
 */

export type MegaMenuItem = {
  label: string;
  href: string;
  blurb?: string;
};

export type MegaMenuProps = {
  items: MegaMenuItem[];
  className?: string;
};

export function MegaMenu({ items, className }: MegaMenuProps) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        // Paper surface, rounded card, single-layer shadow (RULES §SHADOWS).
        "absolute left-0 top-full mt-3 w-[min(640px,calc(100vw-2.5rem))] origin-top",
        "rounded-lg border border-border bg-paper p-3 shadow-card",
        // Radix data-state drives the enter animation (fade + translate-y).
        "data-[motion=from-start]:animate-fade-in data-[motion=from-start]:translate-y-[-8px]",
        "data-[motion=from-end]:animate-fade-in data-[motion=from-end]:translate-y-[-8px]",
        "data-[state=open]:animate-fade-in",
        className,
      )}
    >
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "group flex items-start justify-between gap-3 rounded-md px-3 py-2.5",
                "transition-colors duration-300 ease-smooth",
                "hover:bg-mist focus-visible:outline-2 focus-visible:outline-brand-bright",
              )}
            >
              <span className="min-w-0">
                <span className="block font-display text-small font-medium text-ink">
                  {item.label}
                </span>
                {item.blurb ? (
                  <span className="mt-0.5 block text-small text-steel">
                    {item.blurb}
                  </span>
                ) : null}
              </span>
              <Icon
                name="arrow-right"
                size={16}
                className={cn(
                  "mt-0.5 shrink-0 text-bronze",
                  "translate-x-[-4px] opacity-0 transition-all duration-300 ease-smooth",
                  "group-hover:translate-x-0 group-hover:opacity-100",
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </NavigationMenuPrimitive.Content>
  );
}
