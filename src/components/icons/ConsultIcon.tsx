import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ConsultIcon — minimal speech / chat line (consultation).
 */
export function ConsultIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Chat bubble */}
      <path d="M4 5 H20 V15 H9 L5 19 V15 H4 Z" />
      {/* Message lines */}
      <path d="M8 9 H16" />
      <path d="M8 12 H13" />
    </SvgShell>
  );
}
