import { SvgShell, type IconComponentProps } from "./_base";

/**
 * InstallIcon — wrench engaging a right-angle frame corner.
 */
export function InstallIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Frame corner (bracket) */}
      <path d="M3 21 H9 V15" />
      <path d="M3 21 V15" />
      {/* Wrench shaft (diagonal) */}
      <path d="M10 14 L18 6" />
      {/* Open jaw */}
      <path d="M18 6 L21 3 L19 1 L16 4" />
      <path d="M16 4 L18 6" />
      {/* Box end at other side of jaw */}
      <path d="M7.5 16.5 L9.5 14.5" />
    </SvgShell>
  );
}
