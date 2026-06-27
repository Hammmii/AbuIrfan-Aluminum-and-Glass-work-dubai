import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/icons";
import { climate } from "@/data/home";

/**
 * HomeClimateBand — "Engineered for the Dubai climate".
 * Deep-teal brand band, editorial asymmetry: thesis left, 2×2 challenge grid
 * right. Each cell pairs the Gulf challenge with our engineering response.
 */
export function HomeClimateBand() {
  return (
    <Section variant="brand" padY="lg">
      <div className="grid items-start gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <Reveal>
          <p className="text-small font-medium uppercase tracking-[0.18em] text-bronze">
            Engineered for here
          </p>
          <h2 className="mt-4 text-h2">
            Built for the Dubai climate — not against it.
          </h2>
          <p className="mt-5 text-body text-mist/80">
            Heat, dust, UV and coastal humidity decide whether a system lasts
            five years or fifty. Every product we make is specified for the
            Gulf first — the engineering you don&apos;t see is what keeps it
            looking the way you do.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg bg-paper/10 sm:grid-cols-2">
          {climate.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="h-full bg-brand p-7">
                <Icon name={c.iconName} size={28} className="text-bronze" />
                <p className="mt-5 font-display text-small font-semibold text-bronze">
                  {c.stat}
                </p>
                <h3 className="mt-1 text-h3 text-paper">{c.title}</h3>
                <p className="mt-3 text-small text-mist/80">{c.response}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
