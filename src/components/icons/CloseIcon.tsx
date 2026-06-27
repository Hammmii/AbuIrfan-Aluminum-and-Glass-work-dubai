import { SvgShell, type IconComponentProps } from "./_base";

/**
 * CloseIcon — a single X (dismiss / close).
 */
export function CloseIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M5 5 L19 19" />
      <path d="M19 5 L5 19" />
    </SvgShell>
  );
}
