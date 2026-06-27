import { SvgShell, type IconComponentProps } from "./_base";

/**
 * AluminiumSystemIcon — frame cross-section showing a thermal-break gap.
 * Read as a cut-through of an aluminium profile (two chambers separated by
 * a polyamide thermal break).
 */
export function AluminiumSystemIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Outer profile wall */}
      <path d="M5 4 H17 V20 H5 Z" />
      {/* Inner chamber 1 */}
      <path d="M7 6 V18 H11 V6 Z" />
      {/* Inner chamber 2 */}
      <path d="M13 6 V18 H15 V6 Z" />
      {/* Thermal break gap (dashed polyamide strip) */}
      <path d="M11 7 L13 7" strokeDasharray="1.5 1.5" />
      <path d="M11 17 L13 17" strokeDasharray="1.5 1.5" />
    </SvgShell>
  );
}
