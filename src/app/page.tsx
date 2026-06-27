import { HomeHero } from "@/components/sections/HomeHero";
import { HomeStatsBand } from "@/components/sections/HomeStatsBand";
import { HomeServicesGrid } from "@/components/sections/HomeServicesGrid";
import { HomeClimateBand } from "@/components/sections/HomeClimateBand";
import { HomeProcessTimeline } from "@/components/sections/HomeProcessTimeline";
import { HomeProjectShowcase } from "@/components/sections/HomeProjectShowcase";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { HomeFAQAccordion } from "@/components/sections/HomeFAQAccordion";
import { HomeCTABand } from "@/components/sections/HomeCTABand";

/**
 * Home — composed in the order defined by PROJECT_PLAN.md §7 Page 1.
 * Sections are individually reviewed against RULES.md before shipping.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatsBand />
      <HomeServicesGrid />
      <HomeClimateBand />
      <HomeProcessTimeline />
      <HomeProjectShowcase />
      <HomeTestimonials />
      <HomeFAQAccordion />
      <HomeCTABand />
    </>
  );
}
