"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  projects,
  projectFilters,
  type ProjectCategory,
} from "@/data/projects";

const toneFor: Record<ProjectCategory, string> = {
  "Glass Rooms": "from-glass to-brand/30",
  Pergolas: "from-brand/20 to-bronze/30",
  Partitions: "from-brand/10 to-glass",
  Commercial: "from-charcoal to-brand/40",
};

/**
 * HomeProjectShowcase — filterable featured projects.
 * Real photography pending; each card renders a tasteful gradient placeholder
 * keyed to category until /public/images/projects/* exist.
 */
export function HomeProjectShowcase() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section variant="light" padY="lg">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 text-h2">Projects built to be seen through glass.</h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cx(
                  "rounded-pill border px-4 py-2 text-caption font-medium uppercase tracking-[0.04em] transition-colors duration-300 ease-smooth",
                  active
                    ? "border-bronze bg-bronze text-paper"
                    : "border-border bg-paper text-steel hover:border-brand hover:text-ink",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>
      </header>

      <motion.div
        layout
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.a
              key={p.slug}
              href="/projects"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block overflow-hidden rounded-lg border border-border"
            >
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-br ${toneFor[p.category]}`}
              >
                {/* Mullion hint overlay */}
                <div
                  aria-hidden
                  className="h-full w-full opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "25% 100%",
                  }}
                />
              </div>

              <span className="absolute left-4 top-4 rounded-pill bg-paper/90 px-3 py-1 text-caption font-medium uppercase tracking-[0.04em] text-ink backdrop-blur">
                {p.category}
              </span>

              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/85 to-transparent p-5 opacity-0 transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-h3 text-paper">{p.name}</h3>
                    <p className="text-small text-mist/80">
                      {p.location} · {p.year}
                    </p>
                  </div>
                  <ArrowUpRightIcon
                    size={20}
                    className="shrink-0 text-bronze transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-12">
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 font-display text-small font-medium text-brand"
        >
          View all projects
          <ArrowRightIconLocal />
        </a>
      </Reveal>
    </Section>
  );
}

// Local helpers kept inline to avoid an extra import churn.
function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
function ArrowRightIconLocal() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand transition-transform duration-300 ease-smooth group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
