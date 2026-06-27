import { SvgShell, type IconComponentProps } from "./_base";

/**
 * FabricateIcon — precision gear with evenly spaced teeth + centre bore.
 */
export function FabricateIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Gear body — 8 teeth as a star-ish path */}
      <path d="M12 2 L13.3 4.2 L15.7 3.4 L15.6 5.9 L18.1 6.5 L16.9 8.7 L18.9 10.3 L16.9 11.9 L18.1 14.1 L15.6 14.7 L15.7 17.2 L13.3 16.4 L12 18.6 L10.7 16.4 L8.3 17.2 L8.4 14.7 L5.9 14.1 L7.1 11.9 L5.1 10.3 L7.1 8.7 L5.9 6.5 L8.4 5.9 L8.3 3.4 L10.7 4.2 Z" />
      {/* Centre bore */}
      <path d="M9.7 10.3 A2.6 2.6 0 1 0 14.3 10.3 A2.6 2.6 0 1 0 9.7 10.3 Z" />
    </SvgShell>
  );
}
