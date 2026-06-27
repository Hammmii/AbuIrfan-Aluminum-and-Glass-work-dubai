import type { IconName } from "@/components/icons";

export type ServiceCategory = "glass" | "aluminium";

export type Service = {
  slug: string;
  name: string;
  /** One-line descriptor for the services grid card. */
  shortDesc: string;
  category: ServiceCategory;
  iconName: IconName;
  href: string;
  /** One-line engineering reason it suits the Gulf climate. */
  climateAdvantage: string;
};

/**
 * The eight core services shown on the Home services grid (4×2 desktop).
 * Copy is expert and concrete — never keyword-stuffed (RULES.md).
 * Full long-form detail + FAQs ship with the service detail pages (Phase 5).
 */
export const services: Service[] = [
  {
    slug: "glass-rooms",
    name: "Glass Rooms",
    shortDesc: "Year-round, light-filled extensions for villas and terraces.",
    category: "glass",
    iconName: "glass-room",
    href: "/glass-rooms",
    climateAdvantage: "Thermal glazing keeps a glass room usable through a Dubai summer.",
  },
  {
    slug: "aluminium-pergolas",
    name: "Aluminium Pergolas",
    shortDesc: "Rust-proof shade structures for rooftops, gardens and terraces.",
    category: "glass",
    iconName: "pergola",
    href: "/aluminium-pergolas",
    climateAdvantage: "Powder-coated aluminium shrugs off heat, dust and coastal humidity.",
  },
  {
    slug: "glass-skylights",
    name: "Glass Skylights",
    shortDesc: "Roof glazing that floods interiors with natural daylight.",
    category: "glass",
    iconName: "skylight",
    href: "/glass-skylights",
    climateAdvantage: "Weather-rated sealing stands up to sudden Gulf downpours.",
  },
  {
    slug: "doors-and-windows",
    name: "Doors & Windows",
    shortDesc: "Sliding, folding and telescopic systems with clean sightlines.",
    category: "aluminium",
    iconName: "door-window",
    href: "/doors-and-windows",
    climateAdvantage: "Thermal-break frames stop heat transfer at the metal.",
  },
  {
    slug: "glass-partitions",
    name: "Glass Partitions",
    shortDesc: "Frameless and smart-glass dividers that keep spaces open.",
    category: "aluminium",
    iconName: "partition",
    href: "/glass-partitions",
    climateAdvantage: "Switchable smart glass adds instant privacy without blinds.",
  },
  {
    slug: "curtain-walls",
    name: "Curtain Walls",
    shortDesc: "Aluminium-and-glass facades for commercial buildings.",
    category: "aluminium",
    iconName: "curtain-wall",
    href: "/curtain-walls",
    climateAdvantage: "High-performance sealing against wind, heat and sand.",
  },
  {
    slug: "acp-cladding",
    name: "ACP Cladding",
    shortDesc: "Aluminium composite panel facades — durable, contemporary.",
    category: "aluminium",
    iconName: "acp-cladding",
    href: "/acp-cladding",
    climateAdvantage: "UV-stable finishes that hold colour under intense sun.",
  },
  {
    slug: "smart-glass",
    name: "Smart Glass",
    shortDesc: "PDLC switchable glass — transparent to opaque on demand.",
    category: "glass",
    iconName: "smart-glass",
    href: "/glass-partitions",
    climateAdvantage: "Cuts glare and solar gain while preserving the view.",
  },
];
