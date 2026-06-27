import { SvgShell, type IconComponentProps } from "./_base";

/**
 * GlassRoomIcon — rectangular glass enclosure with pitched roof lines.
 * Architectural elevation of a standalone glass room.
 */
export function GlassRoomIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Roof apex + pitches */}
      <path d="M4 9 L12 4 L20 9" />
      {/* Enclosure walls */}
      <path d="M6 9 V19 H18 V9" />
      {/* Glazing mullion lines */}
      <path d="M12 9 V19" />
      <path d="M6 14 H18" />
    </SvgShell>
  );
}
