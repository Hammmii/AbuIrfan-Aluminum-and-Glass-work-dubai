import { SvgShell, type IconComponentProps } from "./_base";

/**
 * MailIcon — minimal envelope, flap as a single chevron line.
 */
export function MailIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M3 6 H21 V18 H3 Z" />
      <path d="M3 7 L12 13 L21 7" />
    </SvgShell>
  );
}
