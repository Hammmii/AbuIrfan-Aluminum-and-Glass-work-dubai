import { SvgShell, type IconComponentProps } from "./_base";

/**
 * SunRoomIcon — room outline with a sun arc above (sunroom / solarium).
 */
export function SunRoomIcon(props: IconComponentProps) {
  return (
    <SvgShell {...props}>
      {/* Sun arc */}
      <path d="M8.5 5 A3.5 3.5 0 0 1 15.5 5" />
      {/* Sun rays */}
      <path d="M12 1.5 V3" />
      <path d="M5.5 3.5 L6.5 4.3" />
      <path d="M18.5 3.5 L17.5 4.3" />
      {/* Room */}
      <path d="M4 10 V20 H20 V10" />
      {/* Glazing mullions */}
      <path d="M12 10 V20" />
      <path d="M4 15 H20" />
    </SvgShell>
  );
}
