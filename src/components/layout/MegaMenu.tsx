"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/icons";

export type MegaMenuItem = { label: string; href: string; blurb?: string };
export type MegaMenuProps = { items: MegaMenuItem[]; className?: string };

/**
 * MegaMenu — the link card rendered INSIDE a Radix NavigationMenu.Content.
 *
 * The Header owns the Radix structure (Item → Trigger + Content, and the
 * Viewport that hosts/animates the active Content). This component must NOT
 * render its own <Content> — that would nest a Content outside an Item and
 * throw "NavigationMenuContent must be used within NavigationMenuItem".
 */
export function MegaMenu({ items, className }: MegaMenuProps) {
  return (
    <div
      className={cn(
        "w-[min(640px,calc(100vw-2.5rem))] rounded-lg border border-border bg-paper p-3 shadow-card",
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
    </div>
  );
}
