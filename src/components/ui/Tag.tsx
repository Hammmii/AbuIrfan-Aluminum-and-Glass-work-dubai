import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Tag.tsx — uppercase eyebrow label.
 *
 * Mirrors the `.eyebrow` component class in globals.css: small, uppercase,
 * widely tracked, steel tone. Use it as a section/page label above a heading.
 *
 * Rendered as a <span> so it stays inline with its siblings; for a standalone
 * landmark eyebrow wrap it in the appropriate heading region.
 */
export type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        // Mirrors .eyebrow (text-small, font-medium, uppercase) + 0.18em tracking.
        "eyebrow",
        className,
      )}
    >
      {children}
    </span>
  );
}
