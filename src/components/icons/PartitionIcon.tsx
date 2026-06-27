import { SvgShell, type IconComponentProps } from "./_base";

/**
 * PartitionIcon — vertical folding / stacking glass partition panels.
 */
export function PartitionIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Top & bottom rails */}
      <path d="M3 5 H21" />
      <path d="M3 19 H21" />
      {/* Vertical panel leaves */}
      <path d="M6 5 V19" />
      <path d="M10 5 V19" />
      <path d="M14 5 V19" />
      <path d="M18 5 V19" />
      {/* Diagonal fold hint on centre leaf */}
      <path d="M10 5 L14 19" />
    </SvgShell>
  );
}
