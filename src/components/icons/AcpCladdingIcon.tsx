import { SvgShell, type IconComponentProps } from "./_base";

/**
 * AcpCladdingIcon — aluminium composite panel facade stack (rainscreen).
 * Overlapping cassette panels with a reveal line.
 */
export function AcpCladdingIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Facade boundary */}
      <path d="M4 3 V21 H20 V3" />
      {/* Cassette panel rows */}
      <path d="M4 8 H20" />
      <path d="M4 13 H20" />
      <path d="M4 18 H20" />
      {/* Offset reveals (interlocking cassettes) */}
      <path d="M12 3 V8" />
      <path d="M8 8 V13" />
      <path d="M16 13 V18" />
      <path d="M12 18 V21" />
    </SvgShell>
  );
}
