import { SvgShell, type IconComponentProps } from "./_base";

/**
 * LocationPinIcon — minimal architectural pin (map marker) with a hollow head.
 */
export function LocationPinIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Pin head */}
      <path d="M12 3 A6 6 0 0 1 18 9 C18 13 12 21 12 21 C12 21 6 13 6 9 A6 6 0 0 1 12 3 Z" />
      {/* Inner ring */}
      <path d="M12 7 A2.5 2.5 0 1 0 12 12 A2.5 2.5 0 1 0 12 7 Z" />
    </SvgShell>
  );
}
