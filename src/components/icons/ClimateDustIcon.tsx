import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ClimateDustIcon — flowing wind line with particle dots (dust filtration).
 */
export function ClimateDustIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Primary wind curve */}
      <path d="M3 8 H14 A2.5 2.5 0 1 0 11.5 5.5" />
      {/* Secondary wind curve */}
      <path d="M3 13 H17 A2.5 2.5 0 1 1 14.5 15.5" />
      {/* Base flow line */}
      <path d="M3 18 H12" />
      {/* Particulate dots */}
      <path d="M17 4 L17.01 4" />
      <path d="M20 7 L20.01 7" />
      <path d="M18 17 L18.01 17" />
      <path d="M21 14 L21.01 14" />
    </SvgShell>
  );
}
