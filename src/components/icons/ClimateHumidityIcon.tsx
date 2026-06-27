import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ClimateHumidityIcon — water drop with a percent mark (humidity control).
 */
export function ClimateHumidityIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Drop outline */}
      <path d="M12 3 C8 8 6 11 6 14 A6 6 0 0 0 18 14 C18 11 16 8 12 3 Z" />
      {/* Percent mark inside */}
      <path d="M9.5 12 L14.5 16" />
      <path d="M9.5 12 L9.51 12" />
      <path d="M14.5 16 L14.51 16" />
    </SvgShell>
  );
}
