/**
 * site.ts — Business + navigation config (source of truth for contact info).
 * Open items flagged in PROJECT_PLAN still pending client confirmation:
 *  - Confirm single vs two addresses (Port Saeed vs Jebel Ali) + Maps pins
 *  - Confirm business hours
 *
 * Note: WhatsApp was removed per client direction — all conversion CTAs route
 * to a phone call (tel:) or the /contact quote form.
 */

export const site = {
  /** Full legal name (use in footer/legal/metadata). */
  name: "ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST.",
  /** Short brand mark (logo lockup). */
  shortName: "Abu Irfan",
  domain: "abuirfan.com",
  url: "https://abuirfan.com",
  tagline: "Dubai's Glass & Aluminum Specialists",
  positioning:
    "We craft precision glass and aluminum solutions that bring light, openness, and lasting value to every space — engineered for the Dubai climate, finished to a standard you can see and feel.",
} as const;

export const contact = {
  phoneDisplay: "+971 4 259 9536",
  phoneHref: "+97142599536",
  emails: {
    general: "info@abuirfan.com",
    hr: "hr@abuirfan.com",
    sales: "usama@abuirfan.com",
  },
  address: {
    line: "Port Saeed, Dubai, UAE",
  },
  hours: "Sun–Thu, 9:00–18:00 (GST)",
} as const;

/** Deep-link helpers used across CTAs. */
export const links = {
  tel: `tel:${contact.phoneHref}`,
  mail: (to: keyof typeof contact.emails = "general") =>
    `mailto:${contact.emails[to]}`,
  /** Quote form route (built in Phase 7). */
  quote: "/contact",
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Optional mega-menu children, grouped by category. */
  children?: { label: string; href: string; blurb?: string }[];
};

/** Primary navigation. Service hubs resolve to /services; details to /services/[slug]. */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Glass Solutions",
    href: "/services",
    children: [
      { label: "Glass Rooms", href: "/services/glass-rooms", blurb: "Year-round light-filled extensions" },
      { label: "Aluminium Pergolas", href: "/services/aluminium-pergolas", blurb: "Shade structures for villas & terraces" },
      { label: "Glass Skylights", href: "/services/glass-skylights", blurb: "Roof glazing that floods interiors with light" },
      { label: "Conservatory Rooms", href: "/services/conservatory-rooms", blurb: "Glass-enclosed indoor-outdoor retreats" },
      { label: "Sun Rooms", href: "/services/sun-rooms", blurb: "Climate-controlled sun-drenched spaces" },
      { label: "Smart Glass", href: "/services/smart-glass", blurb: "Switchable privacy glass" },
    ],
  },
  {
    label: "Aluminum & Glazing",
    href: "/services",
    children: [
      { label: "Doors & Windows", href: "/services/doors-and-windows" },
      { label: "Glass Partitions", href: "/services/glass-partitions" },
      { label: "Curtain Walls & Facades", href: "/services/curtain-walls" },
      { label: "Glass Types", href: "/services/glass-types" },
      { label: "ACP Cladding", href: "/services/acp-cladding" },
      { label: "Aluminum Systems", href: "/services/aluminum-systems" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
