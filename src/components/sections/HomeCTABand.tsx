import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { links } from "@/lib/site";

/**
 * HomeCTABand — primary conversion band.
 * Charcoal band, headline + supporting copy, quote + call CTAs.
 * Mirrored at the foot of every page later.
 */
export function HomeCTABand() {
  return (
    <Section variant="charcoal" padY="lg">
      <Reveal>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-small font-medium uppercase tracking-[0.18em] text-bronze">
              Ready to begin?
            </p>
            <h2 className="mt-4 text-h2">
              Start your project with a free consultation.
            </h2>
            <p className="mt-4 text-body text-mist/80">
              Tell us what you&apos;re planning — we typically respond within 48
              hours with next steps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={links.quote} size="lg">
              Request a quote
            </Button>
            <Button href={links.tel} variant="call" size="lg">
              Call now
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
