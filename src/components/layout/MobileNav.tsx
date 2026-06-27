"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { nav, contact, links } from "@/lib/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

/**
 * MobileNav.tsx — full-screen overlay nav for <lg viewports.
 *
 * Mount/unmount via Framer `AnimatePresence` (opacity + slight Y on the panel).
 * Nav links enter with a 60ms stagger (RULES §Animation staggerDelay).
 * Body scroll is locked while open via a document-level overflow toggle.
 *
 * Reduced-motion: when `prefers-reduced-motion` is set, the overlay renders
 * without transform/opacity animation and stagger is removed.
 *
 * Accessibility: the overlay is a labelled `role="dialog"`; Esc closes it
 * (handled by the Header's hamburger toggle / button consumers — here we
 * expose a Close button). Focus moves to the panel on open via autoFocus.
 */

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const reduce = useReducedMotion();

  // Lock body scroll while the overlay is open (simple, SSR-safe guard).
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc to close.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const panelVariants = reduce
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 1, transition: { duration: 0 } },
      }
    : {
        hidden: { opacity: 0, y: -12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
      };

  const itemVariants = reduce
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.06 },
        }),
      };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          tabIndex={-1}
          className={cn(
            "fixed inset-0 z-[60] flex flex-col bg-mist",
            "focus:outline-none",
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
        >
          {/* Top bar with close */}
          <div className="container-page flex h-20 items-center justify-between">
            <span className="font-display text-h3 font-semibold tracking-tight text-ink">
              ABU IRFAN
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border",
                "text-steel transition-colors duration-300 ease-smooth hover:text-ink",
                "focus-visible:outline-2 focus-visible:outline-brand-bright",
              )}
            >
              <Icon name="close" size={22} />
            </button>
          </div>

          {/* Nav links (staggered) */}
          <motion.nav
            aria-label="Primary"
            className="container-page flex flex-1 flex-col justify-center gap-1 py-8"
            initial="hidden"
            animate="visible"
          >
            {nav.map((item, i) => (
              <motion.div key={item.href} custom={i} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block border-b border-border py-4 font-display text-h3 font-medium text-ink",
                    "transition-colors duration-300 ease-smooth hover:text-brand",
                    "focus-visible:outline-2 focus-visible:outline-brand-bright",
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Bottom contact strip */}
          <div className="container-page border-t border-border py-6">
            <div className="flex flex-col gap-4">
              <a
                href={links.tel}
                className={cn(
                  "inline-flex items-center gap-2 font-display text-body font-medium text-ink",
                  "transition-colors duration-300 ease-smooth hover:text-brand",
                )}
              >
                <Icon name="phone" size={18} className="text-brand" />
                {contact.phoneDisplay}
              </a>
              <Button href={links.tel} variant="call" size="md" className="w-full">
                Call us
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
