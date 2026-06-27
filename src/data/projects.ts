export type ProjectCategory =
  | "Glass Rooms"
  | "Pergolas"
  | "Partitions"
  | "Commercial";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  year: number;
  /** Optional photo in /public/images/projects. Falls back to a gradient. */
  image?: string;
  imageAlt?: string;
  scope: string[];
  materials: string[];
  featured: boolean;
};

/**
 * Featured projects for the Home + Projects showcase.
 * Photos are royalty-free architectural placeholders — swap for real
 * client case-study imagery when supplied.
 */
export const projects: Project[] = [
  {
    slug: "jbr-glass-room",
    name: "Beachfront Glass Room",
    location: "JBR, Dubai",
    category: "Glass Rooms",
    year: 2025,
    image: "/images/projects/glass-rooms.jpg",
    imageAlt:
      "Bright glass room with a large aluminium-framed sliding door opening to an outdoor view.",
    scope: ["Design", "Fabrication", "Installation"],
    materials: ["Double-glazed units", "Thermal-break aluminium"],
    featured: true,
  },
  {
    slug: "palm-pergola",
    name: "Villa Rooftop Pergola",
    location: "Palm Jumeirah",
    category: "Pergolas",
    year: 2025,
    image: "/images/projects/pergola.jpg",
    imageAlt:
      "Outdoor aluminium pergola shading a modern patio against a clear sky.",
    scope: ["Site measure", "Custom fabrication", "Install"],
    materials: ["Powder-coated aluminium", "Adjustable louvres"],
    featured: true,
  },
  {
    slug: "business-bay-facade",
    name: "Office Tower Curtain Wall",
    location: "Business Bay",
    category: "Commercial",
    year: 2024,
    image: "/images/projects/curtain-wall.jpg",
    imageAlt:
      "Glass curtain-wall facade with a central sliding door in a bright, minimal interior.",
    scope: ["Facade engineering", "Glazing", "Sealing"],
    materials: ["Unitised curtain wall", "Reflective glass"],
    featured: true,
  },
  {
    slug: "difc-partitions",
    name: "Frameless Office Partitions",
    location: "DIFC",
    category: "Partitions",
    year: 2024,
    image: "/images/projects/partitions.jpg",
    imageAlt:
      "Bright minimalist interior with large windows and clean glass surfaces.",
    scope: ["Space planning", "Smart-glass supply", "Install"],
    materials: ["Toughened glass", "PDLC smart film"],
    featured: true,
  },
];

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Glass Rooms",
  "Pergolas",
  "Commercial",
  "Partitions",
];
