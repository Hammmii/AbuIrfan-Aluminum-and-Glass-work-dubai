import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { FAQAccordion } from "@/components/ui/Accordion";
import { HomeCTABand } from "@/components/sections/HomeCTABand";
import { links } from "@/lib/site";
import { process } from "@/data/home";
import type { Service } from "@/data/services";

/**
 * ServiceDetail — the template for every /services/[slug] page.
 * Hero → overview + climate → scope → materials → process → FAQ → CTA.
 */
export function ServiceDetail({ service }: { service: Service }) {
  const categoryLabel =
    service.category === "glass" ? "Glass Solutions" : "Aluminium & Glazing";

  return (
    <>
      {/* Hero */}
      <Section variant="mist" padY="lg">
        <nav className="flex items-center gap-2 text-small text-steel" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/services" className="hover:text-ink">Services</Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{service.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{categoryLabel}</span>
            <h1 className="mt-4 text-h1">{service.name}</h1>
            <p className="mt-5 max-w-xl text-body-lg text-steel">{service.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={links.quote} size="lg">Request a quote</Button>
              <Button href={links.tel} variant="call" size="lg">Call now</Button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-border bg-glass">
              <Icon name={service.iconName} size={72} className="text-brand" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Overview + climate + scope */}
      <Section variant="light" padY="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-4 text-h2">What it is, and who it&apos;s for.</h2>
            <p className="mt-5 text-body text-steel">{service.overview}</p>

            <div className="mt-8 rounded-lg border border-divider bg-brand p-6">
              <div className="flex items-center gap-2 text-bronze">
                <Icon name="climate-heat" size={20} />
                <span className="text-small font-medium uppercase tracking-[0.18em]">
                  Engineered for the Gulf
                </span>
              </div>
              <p className="mt-3 text-body text-mist/90">{service.climateAdvantage}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="eyebrow">What&apos;s included</p>
            <ul className="mt-4 space-y-3">
              {service.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRightIcon size={18} className="mt-0.5 shrink-0 text-bronze" />
                  <span className="text-body text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Materials */}
      <Section variant="mist" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">Materials &amp; options</p>
          <h2 className="mt-4 text-h2">Choices, clearly laid out.</h2>
        </header>
        <StaggerGroup className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {service.materials.map((m) => (
            <StaggerItem key={m}>
              <div className="h-full bg-paper p-6">
                <span className="font-display text-body font-medium text-ink">{m}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Process */}
      <Section variant="light" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-h2">Consult to handover, one team.</h2>
        </header>
        <ol className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {process.map((step) => (
            <li key={step.index} className="flex flex-col">
              <Icon name={step.iconName} size={26} className="text-brand" />
              <span className="mt-4 font-display text-small font-semibold text-bronze tnum">
                {step.index}
              </span>
              <h3 className="mt-1 text-h3">{step.title}</h3>
              <p className="mt-2 text-small text-steel">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section variant="mist" padY="lg">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 text-h2">{service.name} — FAQs</h2>
          <div className="mt-8">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </Section>

      <HomeCTABand />
    </>
  );
}
