import { SvgShell, type IconComponentProps } from "./_base";

/**
 * MeshScreenIcon — fine insect-mesh / security mesh grid.
 */
export function MeshScreenIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Frame */}
      <path d="M3 3 H21 V21 H3 Z" />
      {/* Fine mesh — verticals */}
      <path d="M7 3 V21" />
      <path d="M11 3 V21" />
      <path d="M15 3 V21" />
      <path d="M19 3 V21" />
      {/* Fine mesh — horizontals */}
      <path d="M3 7 H21" />
      <path d="M3 11 H21" />
      <path d="M3 15 H21" />
      <path d="M3 19 H21" />
    </SvgShell>
  );
}
