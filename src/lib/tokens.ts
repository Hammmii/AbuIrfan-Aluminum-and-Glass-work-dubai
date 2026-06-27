/**
 * tokens.ts — Single source of truth for the Abu Irfan design system.
 * Concept: "Architectural Clarity" — glass + brushed metal, quiet premium.
 *
 * Every color/type/motion value in the product MUST trace back to a token here.
 * Mirrors the CSS custom properties in src/app/globals.css and the Tailwind
 * theme in tailwind.config.ts. Change in all three places, never just one.
 */

export const colors = {
  // Neutrals
  ink: "#0F1419", // primary text / dark headings
  charcoal: "#1B232B", // dark band backgrounds
  mist: "#F4F6F8", // page background (light)
  paper: "#FFFFFF", // cards / surfaces
  glass: "#DCE6EC", // glass-tint surfaces, subtle panels
  steel: "#6B7785", // secondary text, dividers

  // Brand
  brand: "#143B49", // deep architectural teal — primary brand
  brandBright: "#1E6E86", // hover / interactive teal

  // Accents
  bronze: "#B0894F", // premium metallic accent — use SPARINGLY
  whatsapp: "#2E7D5B", // WhatsApp / success states

  // Functional
  border: "rgba(107, 119, 133, 0.2)",
  divider: "rgba(176, 137, 79, 0.25)",
} as const;

export const typography = {
  display: "'Clash Display', sans-serif", // headings
  body: "'Satoshi', system-ui, sans-serif", // body / UI
  accent: "'Instrument Serif', Georgia, serif", // pull-quotes only
} as const;

/** Fluid type scale (desktop). All sizes are clamp()-based where it matters. */
export const scale = {
  hero: "clamp(2.75rem, 8vw, 6rem)", // 44–96px
  h1: "clamp(2.5rem, 5vw, 3.5rem)", // 40–56px
  h2: "clamp(1.75rem, 3.5vw, 2.5rem)", // 28–40px
  h3: "1.5rem", // 24px
  bodyLg: "1.125rem", // 18px
  body: "1.0625rem", // 17px
  small: "0.875rem", // 14px
  caption: "0.75rem", // 12px
} as const;

/** 4px-base spacing grid. Accepted section rhythm values. */
export const spacing = {
  sectionXl: "128px",
  sectionLg: "96px",
  sectionMd: "64px",
  sectionSm: "48px",
} as const;

export const radii = {
  input: "4px",
  button: "6px",
  card: "12px",
  cardLg: "16px",
  pill: "999px", // WhatsApp button only
} as const;

/** Shadows: max ONE layer, max 12px blur. No stacked shadows. */
export const shadows = {
  card: "0 1px 2px rgba(15, 20, 25, 0.04)",
  cardHover: "0 8px 24px rgba(15, 20, 25, 0.08)",
  focus: "0 0 0 3px rgba(30, 110, 134, 0.3)",
} as const;

export const easing = {
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)", // primary — reveal, hover
  out: "cubic-bezier(0.0, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
} as const;

/** Motion timings — enforced across Framer variants and GSAP sequences. */
export const animation = {
  revealDuration: 0.45, // seconds — scroll reveal
  staggerDelay: 0.06, // seconds — between staggered children
  parallaxFactor: 0.12, // max 0.15 — hero parallax depth
  countUpDuration: 1.8, // seconds — stat count-up
  hoverMaxMs: 300, // hover transitions never exceed this
} as const;

export const layout = {
  maxWidth: "1280px",
  gutter: "32px",
  headerHeight: "80px",
  headerHeightCompact: "56px",
} as const;
