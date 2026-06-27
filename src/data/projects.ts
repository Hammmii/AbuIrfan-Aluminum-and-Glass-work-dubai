export type ProjectCategory =
  | "Glass Rooms"
  | "Pergolas"
  | "Skylights"
  | "Partitions"
  | "Commercial"
  | "Hospitality";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  year: number;
  /** Real photography pending from client — the showcase renders a tasteful
   * gradient placeholder until /public/images/projects/* assets exist. */
  image?: string;
  scope: string[];
  materials: string[];
  featured: boolean;
};

/**
 * Featured projects for the Home showcase. Replace imagery + specifics with
 * real client case studies when supplied (PROJECT_PLAN §12).
 */
export const projects: Project[] = [
  {
    slug: "jbr-glass-room",
    name: "Beachfront Glass Room",
    location: "JBR, Dubai",
    category: "Glass Rooms",
    year: 2025,
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
    scope: ["Space planning", "Smart-glass supply", "Install"],
    materials: ["Toughened glass", "PDLC smart film"],
    featured: true,
  },
  {
    slug: "emirates-hills-skylight",
    name: "Villa Skylight Atrium",
    location: "Emirates Hills",
    category: "Skylights",
    year: 2024,
    scope: ["Structural opening", "Skylight glazing"],
    materials: ["Laminated safety glass", "Self-cleaning coating"],
    featured: true,
  },
  {
    slug: "marina-hotel-cladding",
    name: "Boutique Hotel Cladding",
    location: "Dubai Marina",
    category: "Hospitality",
    year: 2023,
    scope: ["Facade design", "ACP fabrication", "Install"],
    materials: ["Fire-rated ACP", "Dual-colour finish"],
    featured: true,
  },
];

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Glass Rooms",
  "Pergolas",
  "Commercial",
  "Hospitality",
];
