"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { site, contact, links } from "@/lib/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "18+", label: "Years" },
  { value: "2,400+", label: "Projects" },
  { value: "UAE", label: "Coverage" },
];

/**
 * HomeHero — the thesis of the site.
 *
 * Layout: asymmetric — editorial text left, an architectural glass-interior
 * photo right (with a single light-refraction shimmer sweep + bronze edge).
 *
 * Motion: sequenced entrance on mount (eyebrow → headline → body → CTAs →
 * stats), then a slow parallax on scroll (12% visual / -6% text). All
 * disabled under prefers-reduced-motion.
 */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVisual = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mist pt-32 pb-20 md:pt-40 md:pb-32"
      aria-label="Introduction"
    >
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 85% 0%, var(--color-glass) 0%, transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(20,59,73,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Text column */}
        <motion.div style={reduce ? undefined : { y: yText }}>
          <motion.p
            className="eyebrow"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          >
            {site.tagline}
          </motion.p>

          <motion.h1
            className="mt-6 text-hero"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          >
            Where light meets
            <br />
            <span className="text-brand">precision engineering.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-body-lg text-steel"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.35 }}
          >
            {site.positioning}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
          >
            <Button href={links.quote} size="lg">
              Request a free quote
            </Button>
            <Button href={links.tel} variant="secondary" size="lg" magnetic={false}>
              {contact.phoneDisplay}
            </Button>
          </motion.div>

          <motion.dl
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-border pt-7"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2.5">
                <dt className="font-display text-h3 font-semibold text-brand tnum">
                  {s.value}
                </dt>
                <dd className="text-small text-steel">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual column — real architectural glass-interior photo */}
        <motion.div
          className="relative hidden lg:block"
          style={reduce ? undefined : { y: yVisual }}
          initial={reduce ? undefined : { opacity: 0, scale: 1.05 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          aria-hidden
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-glass">
            <Image
              src="/images/hero.jpg"
              alt="Bright minimal interior with a glass desk beside a floor-to-ceiling window — precision glass & aluminium work."
              fill
              priority
              sizes="45vw"
              className="object-cover"
            />
            {/* Single light-refraction shimmer sweep */}
            {!reduce && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)]" />
              </div>
            )}
            {/* Bronze accent edge */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-bronze/70" />
          </div>

          {/* Floating spec chip */}
          <div className="absolute -bottom-5 -left-5 rounded-md border border-border bg-paper px-5 py-3 shadow-card">
            <p className="font-display text-small font-semibold text-ink">
              Thermal-break · Double-glazed
            </p>
            <p className="text-caption text-steel">Specified for the Gulf climate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
