import dynamic from "next/dynamic";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeServicesGrid } from "@/components/sections/HomeServicesGrid";
import { HomeClimateBand } from "@/components/sections/HomeClimateBand";
import { HomeCTABand } from "@/components/sections/HomeCTABand";

// Below-fold, client-heavy sections are split into separate chunks (SSR kept on
// for SEO). Defers their JS until after initial hydration, trimming First Load.
const HomeStatsBand = dynamic(() =>
  import("@/components/sections/HomeStatsBand").then((m) => m.HomeStatsBand),
);
const HomeProcessTimeline = dynamic(() =>
  import("@/components/sections/HomeProcessTimeline").then(
    (m) => m.HomeProcessTimeline,
  ),
);
const HomeProjectShowcase = dynamic(() =>
  import("@/components/sections/HomeProjectShowcase").then(
    (m) => m.HomeProjectShowcase,
  ),
);
const HomeTestimonials = dynamic(() =>
  import("@/components/sections/HomeTestimonials").then(
    (m) => m.HomeTestimonials,
  ),
);
const HomeFAQAccordion = dynamic(() =>
  import("@/components/sections/HomeFAQAccordion").then(
    (m) => m.HomeFAQAccordion,
  ),
);

/**
 * Home — composed in the order defined by PROJECT_PLAN.md §7 Page 1.
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
