/**
 * _base.tsx — Shared SVG primitives for the bespoke Abu Irfan icon set.
 *
 * Design system contract (RULES.md §ICONS):
 *  - 1.5px monoline stroke
 *  - `currentColor`, no fill
 *  - viewBox 0 0 24 24
 *  - rounded line caps + joins (architectural, soft technical drawing)
 *
 * `IconProps` is the shared prop surface every icon accepts so callers can
 * pass through arbitrary `<svg>` attributes (aria-label, onClick, role, etc.).
 */
import * as React from "react";

export interface IconProps {
  /** Rendered size in pixels for both width & height. @default 24 */
  size?: number;
  /** Tailwind / utility className applied to the `<svg>`. */
  className?: string;
}

export type IconComponentProps = IconProps &
  Omit<React.SVGProps<SVGSVGElement>, "className">;

/**
 * The common `<svg>` shell every icon shares. Keeps stroke / cap / join
 * conventions in one place so individual icons only declare geometry.
 */
export function SvgShell({
  size = 24,
  className,
  children,
  ...rest
}: IconComponentProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
    >
      {children}
    </svg>
  );
}
