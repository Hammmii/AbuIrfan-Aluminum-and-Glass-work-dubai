import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/icons";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import {
  services,
  serviceHref,
  servicesByCategory,
  type Service,
} from "@/data/services";
import { HomeCTABand } from "@/components/sections/HomeCTABand";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Glass rooms, pergolas, skylights, doors & windows, partitions, curtain walls, cladding and smart glass — designed, fabricated and installed by one in-house team across Dubai and the UAE.",
  alternates: { canonical: "/services" },
};

function CategorySection({
  title,
  blurb,
  items,
}: {
  title: string;
  blurb: string;
  items: Service[];
}) {
  return (
    <section aria-label={title}>
      <Reveal>
        <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-h2">{title}</h2>
          <p className="max-w-md text-small text-steel">{blurb}</p>
        </div>
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <StaggerItem key={s.slug} className="h-full">
            <a
              href={serviceHref(s.slug)}
              className="group flex h-full flex-col bg-paper p-7 transition-colors duration-300 ease-smooth hover:bg-mist"
            >
              <Icon name={s.iconName} size={28} className="text-brand" />
              <h3 className="mt-6 text-h3">{s.name}</h3>
              <p className="mt-2 flex-1 text-small text-steel">{s.shortDesc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-bronze">
                Learn more
                <ArrowRightIcon
                  size={16}
                  className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
                />
              </span>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

export default function ServicesHubPage() {
  return (
    <>
      <Section variant="mist" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h1 className="mt-4 text-h1">
            Glass &amp; aluminium systems, delivered as one.
          </h1>
          <p className="mt-5 text-body-lg text-steel">
            One in-house team owns every project from first measure to final
            handover — across residential villas, commercial buildings and
            hospitality. Explore the full range below.
          </p>
        </header>

        <div className="mt-16 space-y-16">
          <CategorySection
            title="Glass Solutions"
            blurb="Light-filled, climate-controlled extensions and features for villas and hospitality."
            items={servicesByCategory("glass")}
          />
          <CategorySection
            title="Aluminium & Glazing"
            blurb="Doors, partitions, facades and cladding — engineered systems for the Gulf."
            items={servicesByCategory("aluminium")}
          />
        </div>

        <p className="mt-16 text-small text-steel">
          {services.length} specialist services, all under one roof.
        </p>
      </Section>

      <HomeCTABand />
    </>
  );
}
