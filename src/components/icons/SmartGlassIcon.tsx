import { SvgShell, type IconComponentProps } from "./_base";

/**
 * SmartGlassIcon — switchable glass panel with a signal / toggle wave.
 */
export function SmartGlassIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Glass panel */}
      <path d="M3 5 H17 V19 H3 Z" />
      {/* Toggle / signal wave emanating from panel */}
      <path d="M17 9 Q19.5 9 19.5 11.5 Q19.5 14 22 14" />
      <path d="M17 6.5 Q22 6.5 22 11.5" strokeOpacity={0.5} />
      {/* Active dot (state) */}
      <path d="M6 9.5 H14" />
      <path d="M6 14.5 H11" />
    </SvgShell>
  );
}
