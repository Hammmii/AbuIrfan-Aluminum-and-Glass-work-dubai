import { SvgShell, type IconComponentProps } from "./_base";

/**
 * DesignIcon — T-square crossed with a drafting triangle.
 */
export function DesignIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* T-square blade (horizontal) */}
      <path d="M2 7 H22" />
      {/* T-square stem */}
      <path d="M12 7 V20" />
      {/* T-square head */}
      <path d="M8 7 V4 H16 V7" />
      {/* Drafting triangle overlay */}
      <path d="M4 20 L18 6 L18 20 Z" />
    </SvgShell>
  );
}
