import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ArrowRightIcon — thin arrow, open head (no boxed / filled head).
 */
export function ArrowRightIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M3 12 H21" />
      <path d="M15 6 L21 12 L15 18" />
    </SvgShell>
  );
}
