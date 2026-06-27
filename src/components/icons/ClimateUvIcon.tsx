import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ClimateUvIcon — sun with wavy (UV wavelength) rays.
 */
export function ClimateUvIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Sun disc */}
      <path d="M9 8 A3.5 3.5 0 1 0 9 15 A3.5 3.5 0 1 0 9 8 Z" />
      {/* Straight ray (left) */}
      <path d="M3 11.5 H4.5" />
      {/* Wavy UV rays (top / right) */}
      <path d="M9 2 V3.5" />
      <path d="M13 5.2 Q13.7 4.6 14.4 5.2 Q15.1 5.8 15.8 5.2" />
      <path d="M16.5 9 Q17.2 8.4 17.9 9 Q18.6 9.6 19.3 9" />
      <path d="M18 14 Q18.7 13.4 19.4 14 Q20.1 14.6 20.8 14" />
    </SvgShell>
  );
}
