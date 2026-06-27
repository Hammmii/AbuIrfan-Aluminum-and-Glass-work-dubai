"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { stats, coverageStat } from "@/data/home";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** rAF count-up with easeOutCubic; jumps to target instantly under reduced motion. */
function useCountUp(target: number, run: boolean, durationMs = 1800) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, durationMs, reduce]);

  return value;
}

function StatItem({
  stat,
  run,
}: {
  stat: { value: number; suffix: string; label: string; format?: "compact" };
  run: boolean;
}) {
  const value = useCountUp(stat.value, run);
  const display = stat.format === "compact" ? value.toLocaleString() : String(value);
  return (
    <div className="flex flex-col">
      <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none text-paper tnum">
        {display}
        {stat.suffix}
      </span>
      <span className="mt-3 text-small text-mist/60">{stat.label}</span>
    </div>
  );
}

/** HomeStatsBand — charcoal band, four stats, count-up on viewport entry. */
export function HomeStatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Section variant="charcoal" padY="md">
      <div
        ref={ref}
        className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-divider"
      >
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} run={inView} />
        ))}
        <div className="flex flex-col md:pl-8">
          <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none text-bronze">
            {coverageStat.value}
          </span>
          <span className="mt-3 text-small text-mist/60">{coverageStat.label}</span>
        </div>
      </div>
    </Section>
  );
}
