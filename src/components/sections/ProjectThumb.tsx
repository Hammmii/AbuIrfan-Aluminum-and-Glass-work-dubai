import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/data/projects";

const toneFor: Record<ProjectCategory, string> = {
  "Glass Rooms": "from-glass to-brand/30",
  Pergolas: "from-brand/20 to-bronze/30",
  Partitions: "from-brand/10 to-glass",
  Commercial: "from-charcoal to-brand/40",
};

/**
 * ProjectThumb — fills its (relative, sized) parent with either the project's
 * photo (next/image, object-cover) or a category-keyed gradient placeholder.
 * Used by HomeProjectShowcase + ProjectsGallery cards and lightbox.
 */
export function ProjectThumb({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? project.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn("absolute inset-0 bg-gradient-to-br", toneFor[project.category], className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />
    </div>
  );
}
