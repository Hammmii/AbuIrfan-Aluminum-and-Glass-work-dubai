"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/cn";

export type FAQItem = { q: string; a: string };

/**
 * FAQAccordion — generic Radix single-type accordion, custom-styled.
 * Used on service detail pages, About, and a future FAQ library.
 */
export function FAQAccordion({
  items,
  className,
}: {
  items: FAQItem[];
  className?: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("w-full", className)}
    >
      {items.map((f, i) => (
        <Accordion.Item
          key={f.q}
          value={`item-${i}`}
          className="border-b border-border first:border-t"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-body font-medium text-ink transition-colors duration-200 hover:text-brand">
              {f.q}
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
            <p className="pb-6 pr-8 text-body text-steel">{f.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
