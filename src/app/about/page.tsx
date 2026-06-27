import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { HomeStatsBand } from "@/components/sections/HomeStatsBand";
import { HomeCTABand } from "@/components/sections/HomeCTABand";
import { site, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abu Irfan is a Dubai-based glass & aluminium specialist with an in-house team for design, fabrication and installation — engineered for the Gulf climate, finished to a standard you can see and feel.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Precision",
    body: "Every system is measured, specified and assembled exactly — the details are where good work becomes great.",
  },
  {
    title: "Craftsmanship",
    body: "Clean finishes, true alignments, and materials chosen to last. The standard is visible in every joint.",
  },
  {
    title: "Reliability",
    body: "One accountable team from consultation to handover, and aftercare on call. We do what we say.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="mist" padY="lg">
        <header className="max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-h1">Precision you can see and feel.</h1>
          <p className="mt-6 text-body-lg text-steel">{site.positioning}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={links.quote} size="lg">Request a quote</Button>
            <Button href="/projects" variant="secondary" size="lg" magnetic={false}>View projects</Button>
          </div>
        </header>
      </Section>

      {/* Story */}
      <Section variant="light" padY="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-h2">One team, start to finish.</h2>
            <div className="mt-5 space-y-4 text-body text-steel">
              <p>
                Abu Irfan was founded on a simple idea: that glass and aluminium
                work should be owned by one accountable team — design,
                fabrication and installation under one roof — instead of passed
                between contractors who blame each other when something is off.
              </p>
              <p>
                We specify every system for the Gulf first: thermal-break frames,
                double-glazing, UV-stable finishes and weather-rated sealing
                against heat, dust and humidity. That engineering is what keeps a
                glass room cool in August and a facade sealed through a sandstorm.
              </p>
              <p>
                The result is work finished to a standard you can see and feel —
                across residential villas, commercial buildings and hospitality
                throughout Dubai and the UAE.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-glass to-brand/25">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(20,59,73,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,59,73,0.12) 1px, transparent 1px)",
                  backgroundSize: "25% 12.5%",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-bronze/70" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section variant="mist" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-4 text-h2">Three standards, never compromised.</h2>
        </header>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div>
                <span className="font-display text-small font-semibold text-bronze tnum">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-h3">{v.title}</h3>
                <p className="mt-3 text-body text-steel">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <HomeStatsBand />
      <HomeCTABand />
    </>
  );
}
