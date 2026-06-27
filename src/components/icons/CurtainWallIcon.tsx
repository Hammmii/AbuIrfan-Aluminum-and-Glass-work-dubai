import { SvgShell, type IconComponentProps } from "./_base";

/**
 * CurtainWallIcon — facade grid of vertical mullions + horizontal transoms.
 */
export function CurtainWallIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Facade frame */}
      <path d="M3 3 H21 V21 H3 Z" />
      {/* Vertical mullions */}
      <path d="M9 3 V21" />
      <path d="M15 3 V21" />
      {/* Horizontal transoms */}
      <path d="M3 9 H21" />
      <path d="M3 15 H21" />
    </SvgShell>
  );
}
