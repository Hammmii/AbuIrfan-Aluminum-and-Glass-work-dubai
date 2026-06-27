import { SvgShell, type IconComponentProps } from "./_base";

/**
 * StaircaseIcon — flight of steps with a glass balustrade line on top.
 */
export function StaircaseIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Tread / riser profile (going up-left to down-right) */}
      <path d="M3 20 H8 V15 H12 V11 H16 V7 H20 V3" />
      {/* Floor line */}
      <path d="M3 20 H21" />
      {/* Glass balustrade running above the stair edge */}
      <path d="M8 15 L12 11 L16 7 L20 3" />
      {/* Top handrail */}
      <path d="M20 1.5 L20 3" />
    </SvgShell>
  );
}
