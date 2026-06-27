import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { HomeCTABand } from "@/components/sections/HomeCTABand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of glass & aluminium projects across Dubai and the UAE — glass rooms, pergolas, curtain walls, partitions and cladding. Filter by category and open any project for the details.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Section variant="mist" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-4 text-h1">
            Projects built to be seen through glass.
          </h1>
          <p className="mt-5 text-body-lg text-steel">
            A selection of glass &amp; aluminium work across Dubai and the UAE.
            Filter by category and open any project for the details.
          </p>
        </header>

        <div className="mt-14">
          <ProjectsGallery />
        </div>
      </Section>

      <HomeCTABand />
    </>
  );
}
