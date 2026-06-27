import { SvgShell, type IconComponentProps } from "./_base";

/**
 * WhatsappIcon — bespoke stylized "W" mark inside a circle.
 *
 * Follows the Abu Irfan icon contract (RULES.md §ICONS): 1.5px stroke,
 * `currentColor`, no fill, viewBox 0 0 24 24, rounded caps + joins.
 *
 * Intentionally NOT the official WhatsApp brand glyph — a custom monoline
 * W formed from two chevrons, ringed by a thin circle. No rounded-square
 * container, no trademark fill.
 */
export function WhatsappIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Ring (open at top-right to read as a chat halo) */}
      <path d="M12 3 A9 9 0 1 0 21 12" />
      {/* Custom W — asymmetric chevrons */}
      <path d="M7 9 L9.5 16 L12 10.5 L14.5 16 L17 9" />
    </SvgShell>
  );
}
