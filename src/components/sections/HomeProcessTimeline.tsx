"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/icons";
import { process } from "@/data/home";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * HomeProcessTimeline — 5 steps (Consult → Handover).
 * Desktop: horizontal; a bronze SVG line self-draws across as the section
 * scrolls into view (GSAP ScrollTrigger, scrub), nodes fade up in sequence.
 * Mobile: vertical list with a left rail (static).
 */
export function HomeProcessTimeline() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !desktopRef.current) return;
    const ctx = gsap.context(() => {
      const line = desktopRef.current!.querySelector<SVGPathElement>(
        "[data-line]",
      );
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: desktopRef.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.5,
          },
        });
      }
      gsap.from(".process-node", {
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, desktopRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-4 text-h2">One team, five disciplined steps.</h2>
        <p className="mt-4 text-body text-steel">
          From consultation to handover, the same people own your project — so
          quality never changes hands.
        </p>
      </header>

      {/* Desktop: horizontal timeline with self-drawing line */}
      <div ref={desktopRef} className="relative mt-14 hidden md:block">
        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-6 h-px w-full"
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
        >
          <path
            data-line
            d="M0 1 H100"
            className="stroke-bronze/50"
            strokeWidth={1.5}
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="relative grid grid-cols-5 gap-6">
          {process.map((step) => (
            <li key={step.index} className="process-node flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-paper">
                <Icon name={step.iconName} size={22} className="text-brand" />
              </div>
              <span className="mt-5 font-display text-small font-semibold text-bronze tnum">
                {step.index}
              </span>
              <h3 className="mt-1 text-h3">{step.title}</h3>
              <p className="mt-2 text-small text-steel">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical list with left rail */}
      <ol className="relative mt-12 space-y-8 border-l border-divider pl-8 md:hidden">
        {process.map((step) => (
          <li key={step.index} className="relative">
            <span className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border border-border bg-paper">
              <Icon name={step.iconName} size={16} className="text-brand" />
            </span>
            <span className="font-display text-small font-semibold text-bronze tnum">
              {step.index}
            </span>
            <h3 className="mt-0.5 text-h3">{step.title}</h3>
            <p className="mt-1.5 text-small text-steel">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
