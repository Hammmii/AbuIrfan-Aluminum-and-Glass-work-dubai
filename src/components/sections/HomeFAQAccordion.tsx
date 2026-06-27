"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faqs";

/**
 * HomeFAQAccordion — Radix single-type accordion, custom-styled.
 * Six general FAQs surfaced on Home; full FAQ library ships later.
 */
export function HomeFAQAccordion() {
  return (
    <Section variant="mist" padY="lg">
      <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 text-h2">Answers before you ask.</h2>
          <p className="mt-4 text-body text-steel">
            The essentials on how we work, what we cover, and what to expect.
            Still unsure? We&apos;re a message away.
          </p>
          <Button href="/contact" variant="secondary" size="md" magnetic={false} className="mt-6">
            Talk to us
          </Button>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Accordion.Item
                key={f.question}
                value={`item-${i}`}
                className="border-b border-border first:border-t"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-body font-medium text-ink transition-colors duration-200 hover:text-brand">
                    {f.question}
                    <span
                      aria-hidden
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-bronze transition-transform duration-300 ease-smooth group-data-[state=open]:rotate-45"
                    >
                      <span className="absolute h-px w-3 bg-current" />
                      <span className="absolute h-3 w-px bg-current" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 text-body text-steel">{f.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </Section>
  );
}
