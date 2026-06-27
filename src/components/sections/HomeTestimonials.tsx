"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HomeTestimonials — single large quote, auto-advances every 5s, manual dots.
 * Pull-quotes set in Instrument Serif italic for craft + warmth.
 */
export function HomeTestimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => go(index + 1), 5000);
    return () => clearInterval(id);
  }, [index, go, reduce]);

  const t = testimonials[index];

  return (
    <Section variant="mist" padY="lg">
      <figure className="mx-auto max-w-3xl text-center">
        <span
          aria-hidden
          className="font-serif text-[5rem] leading-none text-bronze"
        >
          &ldquo;
        </span>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-[clamp(1.4rem,3vw,1.6rem)] italic leading-snug text-ink">
              {t.quote}
            </p>
            <figcaption className="mt-8 text-small text-steel">
              <span className="font-display font-semibold text-ink">
                {t.name}
              </span>{" "}
              · {t.role}
            </figcaption>
          </motion.blockquote>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => go(i)}
              className="group p-1"
            >
              <span
                className={
                  "block h-1.5 rounded-pill transition-all duration-300 ease-smooth " +
                  (i === index ? "w-8 bg-bronze" : "w-1.5 bg-border group-hover:bg-steel")
                }
              />
            </button>
          ))}
        </div>
      </figure>
    </Section>
  );
}
