import { SvgShell, type IconComponentProps } from "./_base";

/**
 * SkylightIcon — angled roof panel (left pitch) with light rays entering.
 * Read as a pitched-roof skylight / rooflight.
 */
export function SkylightIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Roofline — angled pitch */}
      <path d="M3 11 L12 5 L21 11" />
      {/* Skylight frame inset in the pitch */}
      <path d="M7 10 L13 6.5 L17 9" />
      {/* Interior ceiling line */}
      <path d="M4 16 H20" />
      {/* Side walls */}
      <path d="M4 16 V11" />
      <path d="M20 16 V11" />
      {/* Light rays descending from the skylight */}
      <path d="M11 9.5 L9.5 14" />
      <path d="M13.5 8 L12.5 14" />
    </SvgShell>
  );
}
