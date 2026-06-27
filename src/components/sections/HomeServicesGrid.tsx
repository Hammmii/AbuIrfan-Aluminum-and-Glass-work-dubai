import { Section } from "@/components/ui/Section";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/icons";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { services } from "@/data/services";

/**
 * HomeServicesGrid — 8 core disciplines in a 4×2 grid (desktop).
 * Hairline-divided cards (architectural), hover lifts to mist + bronze arrow.
 */
export function HomeServicesGrid() {
  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 text-h2">
          Glass &amp; aluminium systems, delivered as one.
        </h2>
        <p className="mt-4 text-body text-steel">
          Eight core disciplines under a single in-house team — design,
          fabrication and installation, accountable from first measure to
          final handover.
        </p>
      </header>

      <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <StaggerItem key={s.slug} className="h-full">
            <a
              href={s.href}
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
    </Section>
  );
}
