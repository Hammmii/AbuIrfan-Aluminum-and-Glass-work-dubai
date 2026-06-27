import { Reveal } from "@/components/motion/Reveal";
import { site, contact, links } from "@/lib/site";

/**
 * Placeholder Home hero — proves the design-system foundation is live
 * (tokens, fonts, motion, container). The full Home page sections ship in
 * Phase 3–4 per PROJECT_PLAN.md §7 Page 1.
 */

const stats = [
  { value: "18+", label: "Years of craft" },
  { value: "2,400+", label: "Projects delivered" },
  { value: "UAE-wide", label: "Coverage" },
];

export default function HomePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Ambient glass-tint backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 0%, var(--color-glass) 0%, transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(20,59,73,0.06) 0%, transparent 50%)",
        }}
      />

      <section className="container-page flex min-h-dvh flex-col justify-center py-32">
        <Reveal>
          <span className="eyebrow">{site.tagline}</span>
        </Reveal>

        <Reveal delay={0.05} className="mt-6 max-w-4xl">
          <h1 className="text-hero leading-[1.02]">
            Where light meets
            <br />
            <span className="text-brand">precision engineering.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 max-w-xl">
          <p className="text-body-lg text-steel">{site.positioning}</p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-4">
          {/* Primary CTA — bronze fill-sweep (signature interaction) */}
          <a
            href={links.whatsapp}
            className="group relative inline-flex items-center overflow-hidden rounded-button border border-brand px-7 py-3.5 font-display text-small font-medium text-brand transition-colors duration-300 hover:text-paper"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-smooth group-hover:scale-x-100"
            />
            <span className="relative z-10">Request a free quote</span>
          </a>

          {/* Secondary ghost CTA */}
          <a
            href={links.tel}
            className="group inline-flex items-center gap-2 py-2 font-display text-small font-medium text-interactive transition-colors hover:text-brand"
          >
            <span className="relative">
              {contact.phoneDisplay}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-interactive transition-all duration-300 ease-smooth group-hover:w-full" />
            </span>
          </a>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={0.24} className="mt-16">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dt className="font-display text-h3 font-semibold text-brand tnum">
                  {s.value}
                </dt>
                <dd className="text-small text-steel">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </main>
  );
}
