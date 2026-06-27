"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  projects,
  projectFilters,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

const toneFor: Record<ProjectCategory, string> = {
  "Glass Rooms": "from-glass to-brand/30",
  Pergolas: "from-brand/20 to-bronze/30",
  Partitions: "from-brand/10 to-glass",
  Commercial: "from-charcoal to-brand/40",
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * ProjectsGallery — filterable grid with a Radix Dialog lightbox.
 * Real photography pending; cards + lightbox render gradient placeholders.
 */
export function ProjectsGallery() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [active, setActive] = useState<Project | null>(null);

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const on = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={on}
              className={cx(
                "rounded-pill border px-4 py-2 text-caption font-medium uppercase tracking-[0.04em] transition-colors duration-300 ease-smooth",
                on
                  ? "border-bronze bg-bronze text-paper"
                  : "border-border bg-paper text-steel hover:border-brand hover:text-ink",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.button
              key={p.slug}
              layout
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative block overflow-hidden rounded-lg border border-border text-left"
            >
              <div
                className={`aspect-[4/3] w-full bg-gradient-to-br ${toneFor[p.category]}`}
              >
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
                  <ArrowUpRightIcon size={20} className="shrink-0 text-bronze" />
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <Dialog.Root
        open={!!active}
        onOpenChange={(o) => !o && setActive(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-charcoal/70 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[71] w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-border bg-paper shadow-card-hover focus:outline-none"
            aria-describedby={undefined}
          >
            <div className="grid md:grid-cols-2">
              {/* Visual */}
              <div
                className={cn(
                  "relative aspect-[4/3] md:aspect-auto bg-gradient-to-br",
                  active ? toneFor[active.category] : "",
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px)",
                    backgroundSize: "20% 100%",
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-7 md:p-9">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close"
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-steel transition-colors duration-300 ease-smooth hover:text-ink focus-visible:outline-2 focus-visible:outline-brand-bright"
                  >
                    <CloseIcon size={18} />
                  </button>
                </Dialog.Close>

                <span className="inline-flex rounded-pill border border-border px-3 py-1 text-caption font-medium uppercase tracking-[0.04em] text-bronze">
                  {active?.category}
                </span>
                <Dialog.Title className="mt-4 text-h2">
                  {active?.name}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-small text-steel">
                  {active?.location} · {active?.year}
                </Dialog.Description>

                <div className="mt-7">
                  <p className="text-small font-medium uppercase tracking-[0.18em] text-steel">
                    Scope of work
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {active?.scope.map((s) => (
                      <li key={s} className="text-body text-ink">
                        — {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-small font-medium uppercase tracking-[0.18em] text-steel">
                    Materials
                  </p>
                  <p className="mt-2 text-body text-ink">
                    {active?.materials.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
