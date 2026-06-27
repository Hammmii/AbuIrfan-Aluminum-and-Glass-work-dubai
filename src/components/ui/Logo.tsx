import { cn } from "@/lib/cn";

/**
 * Logo — the Abu Irfan mark + wordmark.
 *
 * Mark concept ("Architectural Clarity"): a glass pane (square) with a
 * centre mullion and a bronze light-refraction slash corner-to-corner.
 * Frame/mullion inherit `currentColor`; the slash uses the bronze token.
 * No hardcoded hex (RULES.md).
 */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        role="presentation"
      >
        {/* Glass pane */}
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Centre mullion */}
        <line
          x1="20"
          y1="6.5"
          x2="20"
          y2="33.5"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Light-refraction slash (bronze accent) */}
        <line
          x1="6"
          y1="34"
          x2="34"
          y2="6"
          stroke="var(--color-bronze)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-h3 font-semibold tracking-tight">
            ABU IRFAN
          </span>
          <span className="text-caption uppercase tracking-[0.2em] text-steel">
            Glass &amp; Aluminum
          </span>
        </span>
      )}
    </span>
  );
}
