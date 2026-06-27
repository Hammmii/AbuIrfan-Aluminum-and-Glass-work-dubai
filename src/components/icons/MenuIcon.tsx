import { SvgShell, type IconComponentProps } from "./_base";

/**
 * MenuIcon — three thin horizontal lines (hamburger).
 */
export function MenuIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M3 7 H21" />
      <path d="M3 12 H21" />
      <path d="M3 17 H21" />
    </SvgShell>
  );
}
