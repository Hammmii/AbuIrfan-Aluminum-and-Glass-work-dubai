import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ConservatoryIcon — glass room with a tall peaked (gabled) roof.
 * Distinguished from GlassRoom by a full triangle gable + taller pitch.
 */
export function ConservatoryIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Gable roof */}
      <path d="M3 11 L12 3 L21 11" />
      <path d="M3 11 H21" />
      {/* Walls */}
      <path d="M5 11 V20 H19 V11" />
      {/* Glazing divisions */}
      <path d="M12 3 V20" />
      <path d="M5 15.5 H19" />
    </SvgShell>
  );
}
