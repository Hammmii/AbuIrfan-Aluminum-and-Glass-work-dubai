import { SvgShell, type IconComponentProps } from "./_base";

/**
 * ArrowUpRightIcon — diagonal arrow pointing to the upper-right.
 */
export function ArrowUpRightIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      <path d="M7 17 L17 7" />
      <path d="M8 7 H17 V16" />
    </SvgShell>
  );
}
