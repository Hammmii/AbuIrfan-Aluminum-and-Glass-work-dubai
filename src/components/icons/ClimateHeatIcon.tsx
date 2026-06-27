import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ClimateHeatIcon — thermometer beside a small sun (thermal control).
 */
export function ClimateHeatIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Thermometer body */}
      <path d="M10 4 A2 2 0 0 1 12 6 V14 A3 3 0 1 1 8 14 V6 A2 2 0 0 1 10 4 Z" />
      {/* Mercury column */}
      <path d="M10 13 V7" />
      {/* Sun (right) */}
      <path d="M17 8 A3 3 0 1 0 17 14" />
      <path d="M19.5 11 H22" />
      <path d="M17 5 V6.5" />
      <path d="M20.5 7.2 L19.6 8.1" />
    </SvgShell>
  );
}
