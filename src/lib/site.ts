/**
 * site.ts — Business + navigation config (source of truth for contact info).
 * Open items flagged in PROJECT_PLAN still pending client confirmation:
 *  - WhatsApp mobile number (the landline below is NOT a wa.me number)
 *  - Single vs two addresses (Port Saeed vs Jebel Ali) + Maps pins
 */

export const site = {
  name: "Abu Irfan for Glass & Aluminum Co.",
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
  // TODO(client): replace with the actual WhatsApp mobile number.
  whatsappNumber: "97142599536",
  whatsappMessage:
    "Hi Abu Irfan, I'd like to request a free quote for a glass & aluminum project.",
  emails: {
    general: "info@abuirfan.com",
    hr: "hr@abuirfan.com",
    sales: "usama@abuirfan.com",
  },
  address: {
    line: "Port Saeed, Jebel Ali, Dubai, UAE",
    // TODO(client): confirm one or two locations + exact street/plot + Maps link.
  },
  hours: "Sun–Thu, 9:00–18:00 (GST)",
} as const;

/** Deep-link helpers used across CTAs. */
export const links = {
  tel: `tel:${contact.phoneHref}`,
  mail: (to: keyof typeof contact.emails = "general") =>
    `mailto:${contact.emails[to]}`,
  whatsapp: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`,
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Optional mega-menu children, grouped by category. */
  children?: { label: string; href: string; blurb?: string }[];
};

/** Primary navigation (kept shallow for the Home-page proof; expand later). */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Glass Solutions",
    href: "/glass-solutions",
    children: [
      { label: "Glass Rooms", href: "/glass-rooms", blurb: "Year-round light-filled extensions" },
      { label: "Aluminium Pergolas", href: "/aluminium-pergolas", blurb: "Shade structures for villas & terraces" },
      { label: "Glass Skylights", href: "/glass-skylights", blurb: "Roof glazing that floods interiors with light" },
      { label: "Conservatory Rooms", href: "/conservatory-rooms", blurb: "Glass-enclosed indoor-outdoor retreats" },
      { label: "Sun Rooms", href: "/sun-rooms", blurb: "Climate-controlled sun-drenched spaces" },
    ],
  },
  {
    label: "Aluminum & Glazing",
    href: "/aluminum-glazing",
    children: [
      { label: "Doors & Windows", href: "/doors-and-windows" },
      { label: "Glass Partitions", href: "/glass-partitions" },
      { label: "Curtain Walls & Facades", href: "/curtain-walls" },
      { label: "Glass Types", href: "/glass-types" },
      { label: "ACP Cladding", href: "/acp-cladding" },
      { label: "Aluminum Systems", href: "/aluminum-systems" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
