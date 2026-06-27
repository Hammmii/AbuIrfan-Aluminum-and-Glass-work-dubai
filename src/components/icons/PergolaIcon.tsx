import { SvgShell, type IconComponentProps } from "./_base";

/**
 * PergolaIcon — open beam canopy resting on two columns.
 * Thin technical elevation of a slatted aluminium pergola.
 */
export function PergolaIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Support columns */}
      <path d="M5 21 V8" />
      <path d="M19 21 V8" />
      {/* Top canopy beam */}
      <path d="M3 8 H21" />
      {/* Slatted rafters */}
      <path d="M5 5 H19" />
      <path d="M5 11 H19" />
      {/* Rafter ends dropped (depth cue) */}
      <path d="M7 8 V11" />
      <path d="M12 8 V11" />
      <path d="M17 8 V11" />
    </SvgShell>
  );
}
