import { SvgShell, type IconComponentProps } from "./_base";

/**
 * PhoneIcon — handset, 1.5px monoline, no filled areas.
 */
export function PhoneIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M5 4 H8 L9.5 8 L7.5 9.5 A11 11 0 0 0 14.5 16.5 L16 14.5 L20 16 V19 A1 1 0 0 1 19 20 A16 16 0 0 1 4 5 A1 1 0 0 1 5 4 Z" />
    </SvgShell>
  );
}
