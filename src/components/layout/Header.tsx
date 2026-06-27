"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { nav, contact, links, type NavItem } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

/**
 * Header.tsx — sticky CONDENSING site header.
 *
 * `position: sticky; top: 0; z-50` (never fixed). At the top of the page it is
 * h-20 (80px) on a transparent ground. Once the user scrolls past ~24px it
 * condenses to h-14 (56px) with a paper/blur surface + bottom border.
 *
 * A passive scroll listener toggles a `scrolled` boolean; the height/bg
 * transition with `transition-all duration-300 ease-smooth` (≤300ms rule).
 *
 * Desktop (lg+): left logo lockup, center Radix NavigationMenu (plain links
 * + mega-menu triggers), right phone link + Free Quote button.
 * Mobile (<lg): logo + hamburger; center nav and phone are hidden.
 */

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // set initial state (e.g. on a deep-linked reload)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 ease-smooth",
          scrolled
            ? "h-14 border-b border-border bg-paper/92 backdrop-blur-glass"
            : "h-20 border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-page flex h-full items-center justify-between gap-4">
          {/* Left — logo lockup */}
          <Link
            href="/"
            aria-label="Abu Irfan — home"
            className="group flex flex-col leading-none"
          >
            <span className="font-display font-semibold tracking-tight text-ink">
              ABU IRFAN
            </span>
            <span className="text-caption uppercase tracking-[0.2em] text-steel">
              Glass &amp; Aluminum
            </span>
          </Link>

          {/* Center — desktop nav (Radix NavigationMenu) */}
          <NavigationMenu.Root
            className="relative hidden lg:flex"
            aria-label="Primary"
          >
            <NavigationMenu.List className="flex items-center gap-1">
              {nav.map((item) => (
                <NavigationMenu.Item key={item.href}>
                  {item.children ? (
                    <>
                      <NavigationMenu.Trigger
                        className={cn(
                          "group relative inline-flex items-center gap-1 px-3 py-2",
                          "font-display text-small text-steel transition-colors duration-300 ease-smooth",
                          "hover:text-ink data-[state=open]:text-ink",
                          "focus-visible:outline-2 focus-visible:outline-brand-bright",
                        )}
                      >
                        <span className="relative">
                          {item.label}
                          {/* Bronze underline, slides in origin-left 0→1 */}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-smooth group-hover:scale-x-100 group-data-[state=open]:scale-x-100" />
                        </span>
                        <Icon
                          name="arrow-up-right"
                          size={14}
                          className="text-steel transition-transform duration-300 ease-smooth group-data-[state=open]:rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content>
                        <MegaMenu items={item.children} />
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative inline-flex items-center px-3 py-2",
                          "font-display text-small text-steel transition-colors duration-300 ease-smooth hover:text-ink",
                          "focus-visible:outline-2 focus-visible:outline-brand-bright",
                        )}
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-smooth group-hover:scale-x-100" />
                        </span>
                      </Link>
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>

            {/* Viewport hosts the active Content; positioned under the bar. */}
            <div className="absolute left-0 top-full flex w-full justify-center pt-3">
              <NavigationMenu.Viewport className="origin-top" />
            </div>
          </NavigationMenu.Root>

          {/* Right — phone (desktop) + CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={links.tel}
              className={cn(
                "hidden items-center gap-2 font-display text-small font-medium text-interactive xl:inline-flex",
                "transition-colors duration-300 ease-smooth hover:text-brand",
                "focus-visible:outline-2 focus-visible:outline-brand-bright",
              )}
            >
              <Icon name="phone" size={16} />
              {contact.phoneDisplay}
            </a>

            <Button href={links.whatsapp} size="sm" variant="primary">
              Free Quote
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink lg:hidden",
                "transition-colors duration-300 ease-smooth hover:bg-mist",
                "focus-visible:outline-2 focus-visible:outline-brand-bright",
              )}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export type { NavItem };
