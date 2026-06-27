import { SvgShell, type IconComponentProps } from "./_base";

/**
 * HandoverIcon — a key resting over a minimal house outline (project handover).
 */
export function HandoverIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* House outline */}
      <path d="M3 11 L12 4 L21 11" />
      <path d="M5 11 V20 H19 V11" />
      {/* Key ring (top-left, overlapping the house) */}
      <path d="M6.5 9.5 A2 2 0 1 0 9.5 6.5" />
      {/* Key shaft + teeth */}
      <path d="M9.5 6.5 L15 12" />
      <path d="M13 10 L14.5 11.5" />
      <path d="M15 12 L16.5 10.5" />
    </SvgShell>
  );
}
