import { SvgShell, type IconComponentProps } from "./_base";

/**
 * GlassTypeIcon — stacked layered glass panes (laminated / double-glazed unit).
 */
export function GlassTypeIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Three stacked panes, offset to read as depth */}
      <path d="M4 7 H18 V19 H4 Z" />
      <path d="M6 5 H20 V17 H18" />
      <path d="M8 3 H20 V5" />
      {/* Interlayer seal hint */}
      <path d="M4 13 H18" />
    </SvgShell>
  );
}
