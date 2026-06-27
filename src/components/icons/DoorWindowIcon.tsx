import { SvgShell, type IconComponentProps } from "./_base";

/**
 * DoorWindowIcon — sliding door / window system with a bottom track line.
 */
export function DoorWindowIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Outer frame */}
      <path d="M3 4 H21 V17 H3 Z" />
      {/* Central meeting stile (two sliding leaves) */}
      <path d="M12 4 V17" />
      {/* Handle on the active leaf */}
      <path d="M10 10.5 V13" />
      {/* Bottom track */}
      <path d="M2 17 H22" />
      <path d="M2 19.5 H22" />
      {/* Track tick */}
      <path d="M12 17 V19.5" />
    </SvgShell>
  );
}
