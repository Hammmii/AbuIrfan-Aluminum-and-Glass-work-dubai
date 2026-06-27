import type { IconName } from "@/components/icons";

export type ServiceCategory = "glass" | "aluminium";

export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  iconName: IconName;
  /** One-line card descriptor. */
  shortDesc: string;
  /** Hero subhead. */
  tagline: string;
  /** Overview paragraph (definition + who it's for). */
  overview: string;
  /** What's included. */
  scope: string[];
  /** Material / option choices. */
  materials: string[];
  /** One-line Gulf-climate engineering response. */
  climateAdvantage: string;
  faqs: ServiceFAQ[];
};

/** Route helper — service detail pages live under /services/[slug]. */
export const serviceHref = (slug: string) => `/services/${slug}`;

/**
 * Twelve core services. Copy is expert and concrete — never keyword-stuffed
 * (RULES.md). Rewritten from docs/04-CONTENT-REFERENCE; no competitor reuse.
 */
export const services: Service[] = [
  {
    slug: "glass-rooms",
    name: "Glass Rooms",
    category: "glass",
    iconName: "glass-room",
    shortDesc: "Year-round, light-filled extensions for villas and terraces.",
    tagline: "Bring the outdoors in — usable through a Dubai summer.",
    overview:
      "A glass room is a fully enclosed, sun-drenched extension that blends indoor comfort with outdoor openness. We design, fabricate and install each one to your property — sized, glazed and finished for how you actually live.",
    scope: [
      "Site measure & structural check",
      "Custom frame design",
      "Double-glazed wall & roof units",
      "Thermal-break aluminium framing",
      "Integrated doors & ventilation",
    ],
    materials: [
      "Toughened double-glazed glass",
      "Thermal-break aluminium frames",
      "Frameless or framed options",
      "Tinted / solar-control glazing",
    ],
    climateAdvantage:
      "Thermal glazing and sealed framing keep a glass room cool and usable even at 40°C+.",
    faqs: [
      {
        q: "Do glass rooms get too hot in a Dubai summer?",
        a: "Not when specified correctly. With solar-control double-glazing and thermal-break framing, a glass room stays comfortable and usable year-round.",
      },
      {
        q: "How long does installation take?",
        a: "After design and fabrication, most residential glass rooms install in a few days on site.",
      },
      {
        q: "Can it be used year-round?",
        a: "Yes — that is the point. Properly engineered, a glass room is a usable space through every season.",
      },
    ],
  },
  {
    slug: "aluminium-pergolas",
    name: "Aluminium Pergolas",
    category: "glass",
    iconName: "pergola",
    shortDesc: "Rust-proof shade structures for rooftops, gardens and terraces.",
    tagline: "Architectural shade that never rusts.",
    overview:
      "An aluminium pergola is an open-beam shade structure for villas, rooftops, terraces and hospitality spaces. Powder-coated aluminium is rust-proof and low-maintenance, with optional adjustable louvres for sun and rain control.",
    scope: [
      "Site measure & layout",
      "Column & beam engineering",
      "Powder-coated fabrication",
      "Adjustable louvre option",
      "Install & anchoring",
    ],
    materials: [
      "Powder-coated aluminium",
      "Adjustable louvre blades",
      "Integrated drainage",
      "Integrated lighting ready",
    ],
    climateAdvantage:
      "Marine-grade aluminium shrugs off heat, dust and coastal humidity without rust.",
    faqs: [
      {
        q: "Will an aluminium pergola rust?",
        a: "No. Powder-coated aluminium is corrosion-resistant, which is why it outperforms steel on the coast.",
      },
      {
        q: "Can the louvres handle rain?",
        a: "Adjustable louvres close to shed rain, with integrated drainage to manage runoff.",
      },
      {
        q: "Is it suitable for a rooftop?",
        a: "Yes — we engineer the anchoring and load for each location, including rooftops and terraces.",
      },
    ],
  },
  {
    slug: "glass-skylights",
    name: "Glass Skylights",
    category: "glass",
    iconName: "skylight",
    shortDesc: "Roof glazing that floods interiors with natural daylight.",
    tagline: "Daylight, drawn precisely into the room.",
    overview:
      "Glass skylights bring controlled natural light into homes and commercial spaces, reducing reliance on artificial lighting. We fabricate weather-rated units that seal against the Gulf's sudden downpours.",
    scope: [
      "Roof opening & structural prep",
      "Skylight frame fabrication",
      "Glazing & sealing",
      "Optional opening / venting mechanism",
    ],
    materials: [
      "Laminated safety glass",
      "Self-cleaning coating",
      "Thermal-break frame",
      "Solar-control option",
    ],
    climateAdvantage:
      "Weather-rated sealing handles intense sun and sudden heavy rain without leaking.",
    faqs: [
      {
        q: "Will a skylight make the room hotter?",
        a: "With solar-control and laminated glazing, heat and glare are controlled while still gaining daylight.",
      },
      {
        q: "Do they leak in heavy rain?",
        a: "Properly engineered sealing and drainage prevent leaks — even in sudden downpours.",
      },
      {
        q: "Can skylights be opened?",
        a: "Yes, venting/openable units are available where the roof design allows.",
      },
    ],
  },
  {
    slug: "conservatory-rooms",
    name: "Conservatory Rooms",
    category: "glass",
    iconName: "conservatory",
    shortDesc: "Glass-enclosed retreats that blend indoors and garden.",
    tagline: "A light-filled room that feels like the garden.",
    overview:
      "A conservatory is a glass-enclosed living space that bridges indoors and nature — ideal as a retreat, lounge or plant room. Popular in upscale Dubai villas, each is finished to match the property.",
    scope: [
      "Design & layout",
      "Glazed wall + pitched roof",
      "Thermal framing",
      "Finishing to property",
    ],
    materials: [
      "Double-glazed walls",
      "Glazed pitched roof",
      "Thermal-break frame",
      "Solar-control glazing",
    ],
    climateAdvantage:
      "Double-glazing and solar control keep the space temperate for plants and people alike.",
    faqs: [
      {
        q: "What is a conservatory room used for?",
        a: "Typically a lounge, dining space, or plant room — a bright transition between home and garden.",
      },
      {
        q: "Is it different from a glass room?",
        a: "Conservatories usually feature a pitched glazed roof and a more garden-oriented feel; we'll recommend the right fit.",
      },
      {
        q: "Will it suit a Dubai villa?",
        a: "Yes — they are a popular addition to upscale villa gardens when properly climate-specified.",
      },
    ],
  },
  {
    slug: "sun-rooms",
    name: "Sun Rooms",
    category: "glass",
    iconName: "sun-room",
    shortDesc: "Climate-controlled, sun-drenched rooms for year-round use.",
    tagline: "Sun on your terms, all year.",
    overview:
      "A sun room is a climate-controlled, glass-rich extension designed for comfortable year-round use. Engineered glazing manages heat and glare so the room stays bright without overheating.",
    scope: [
      "Design & orientation",
      "Glazed envelope",
      "Thermal framing",
      "Ventilation / climate prep",
    ],
    materials: [
      "Solar-control double-glazing",
      "Thermal-break frames",
      "Tinted / reflective options",
      "Venting integration",
    ],
    climateAdvantage:
      "Solar-control glazing manages heat and glare so the room stays bright without overheating.",
    faqs: [
      {
        q: "What makes a sun room different?",
        a: "Sun rooms prioritise year-round, climate-controlled comfort with managed solar gain.",
      },
      {
        q: "Will it overheat?",
        a: "Solar-control glazing and ventilation keep it comfortable even in direct sun.",
      },
      {
        q: "Can it be used as a daily living space?",
        a: "Yes — that is the intent: a bright, usable room for every season.",
      },
    ],
  },
  {
    slug: "doors-and-windows",
    name: "Doors & Windows",
    category: "aluminium",
    iconName: "door-window",
    shortDesc: "Sliding, folding and telescopic systems with clean sightlines.",
    tagline: "Openings that move smoothly and seal tight.",
    overview:
      "We fabricate and install aluminium doors and windows — sliding, folding, telescopic and fixed — with clean sightlines and secure, weather-rated sealing. Every system is sized to the opening.",
    scope: [
      "Site measure",
      "Frame fabrication",
      "Glazing & hardware",
      "Track & sealing install",
    ],
    materials: [
      "Thermal-break aluminium",
      "Toughened / laminated glass",
      "Premium tracked hardware",
      "Dual-colour finish option",
    ],
    climateAdvantage:
      "Thermal-break frames and weather sealing stop heat and dust at the opening.",
    faqs: [
      {
        q: "Sliding, folding or telescopic — which do I need?",
        a: "It depends on the opening width and how you want to use it. Sliding suits wide views; folding and telescopic clear the opening fully.",
      },
      {
        q: "Are they secure?",
        a: "Yes — multi-point locking and laminated glass options provide strong security.",
      },
      {
        q: "Will they keep the heat out?",
        a: "Thermal-break frames with double-glazing significantly reduce heat transfer.",
      },
    ],
  },
  {
    slug: "glass-partitions",
    name: "Glass Partitions",
    category: "aluminium",
    iconName: "partition",
    shortDesc: "Frameless and smart-glass dividers that keep spaces open.",
    tagline: "Divide a space without closing it in.",
    overview:
      "Glass partitions zone offices and homes while preserving light and openness. Choose frameless toughened glass for minimalism, aluminium-framed for structure, or smart glass for instant privacy.",
    scope: [
      "Layout & zoning plan",
      "Glass / frame fabrication",
      "Smart-glass wiring (optional)",
      "Install & sealing",
    ],
    materials: [
      "Toughened frameless glass",
      "Aluminium-framed systems",
      "PDLC switchable smart glass",
      "Double-glazed acoustic option",
    ],
    climateAdvantage:
      "Smart glass cuts glare on demand; acoustic glazing keeps spaces quiet.",
    faqs: [
      {
        q: "What is smart glass?",
        a: "PDLC switchable glass toggles between transparent and opaque on demand — instant privacy with no blinds.",
      },
      {
        q: "Are glass partitions soundproof?",
        a: "Double-glazed acoustic partitions greatly reduce sound transfer between spaces.",
      },
      {
        q: "Can partitions be reconfigured later?",
        a: "Framed systems are more reconfigurable; frameless are typically permanent. We'll advise per space.",
      },
    ],
  },
  {
    slug: "curtain-walls",
    name: "Curtain Walls & Facades",
    category: "aluminium",
    iconName: "curtain-wall",
    shortDesc: "Aluminium-and-glass facades for commercial buildings.",
    tagline: "The building's face, engineered to perform.",
    overview:
      "Curtain walls are non-structural aluminium-and-glass facade systems that deliver maximum natural light and a strong architectural statement for commercial buildings. We engineer them for wind, heat and weather.",
    scope: [
      "Facade engineering",
      "System fabrication",
      "Glazing & mullions",
      "Weather sealing & install",
    ],
    materials: [
      "Unitised / stick systems",
      "High-performance reflective glass",
      "Thermal-broken mullions",
      "Pressure-equalised sealing",
    ],
    climateAdvantage:
      "Pressure-equalised sealing and thermal-broken mullions handle wind, heat and sand.",
    faqs: [
      {
        q: "What is a curtain wall?",
        a: "A non-structural aluminium-and-glass facade that hangs off the building's frame, maximising light and appearance.",
      },
      {
        q: "Is it suitable for tall buildings?",
        a: "Yes — engineered for wind load and storey-drift, including unitised systems for towers.",
      },
      {
        q: "How is it maintained?",
        a: "Designed for external cleaning access and replaceable glazing units where needed.",
      },
    ],
  },
  {
    slug: "glass-types",
    name: "Glass Types",
    category: "aluminium",
    iconName: "glass-type",
    shortDesc: "Laminated, double-glazed, toughened and tinted options.",
    tagline: "The right glass for the right job.",
    overview:
      "We supply and install the full range of performance glass — laminated for safety, double-glazed for insulation, toughened for strength, and tinted or reflective for solar control. We specify per use-case.",
    scope: [
      "Use-case specification",
      "Glass supply",
      "Cutting & edging",
      "Install & sealing",
    ],
    materials: [
      "Laminated (safety / UV / acoustic)",
      "Double-glazed (insulation)",
      "Toughened / tempered",
      "Tinted / reflective (solar)",
    ],
    climateAdvantage:
      "Laminated and reflective glazing cut UV, glare and heat while preserving light.",
    faqs: [
      {
        q: "Which glass is best for Dubai heat?",
        a: "Double-glazed units with solar-control or reflective coating perform best in the Gulf.",
      },
      {
        q: "What is laminated glass for?",
        a: "Safety (shatter resistance), UV reduction, and acoustic insulation.",
      },
      {
        q: "Is toughened glass necessary?",
        a: "For doors, low-level panels and large spans, yes — it is required for safety.",
      },
    ],
  },
  {
    slug: "acp-cladding",
    name: "ACP Cladding",
    category: "aluminium",
    iconName: "acp-cladding",
    shortDesc: "Aluminium composite panel facades — durable, contemporary.",
    tagline: "A clean, contemporary exterior that lasts.",
    overview:
      "Aluminium Composite Panel (ACP) cladding gives buildings a durable, modern facade with strong weather protection. We fabricate and install fire-rated, UV-stable panels in a range of finishes.",
    scope: [
      "Facade design & detailing",
      "Panel fabrication",
      "Sub-frame & fixing",
      "Install & jointing",
    ],
    materials: [
      "Fire-rated ACP cores",
      "UV-stable PVDF finish",
      "Dual-colour option",
      "Aluminium sub-frame",
    ],
    climateAdvantage:
      "UV-stable finishes hold colour and resist the intense Gulf sun.",
    faqs: [
      {
        q: "Is ACP cladding safe?",
        a: "We specify fire-rated cores to meet building-code requirements.",
      },
      {
        q: "Will the colour fade?",
        a: "UV-stable PVDF finishes resist fading under intense sun.",
      },
      {
        q: "Can it be used on existing buildings?",
        a: "Yes — it is a common retrofit to refresh and protect an older facade.",
      },
    ],
  },
  {
    slug: "aluminum-systems",
    name: "Aluminum Systems",
    category: "aluminium",
    iconName: "aluminium-system",
    shortDesc: "Thermal-break and dual-colour aluminium systems.",
    tagline: "Aluminium, specified for performance.",
    overview:
      "Our aluminium systems include thermal-break frames (an insulating barrier that stops heat conducting through the metal) and dual-colour finishing (different colours inside and out). Both are engineered for the Gulf.",
    scope: [
      "System specification",
      "Thermal-break selection",
      "Dual-colour finishing",
      "Fabrication & install",
    ],
    materials: [
      "Thermal-break aluminium",
      "Polyamide insulating barrier",
      "Dual-colour powder coat",
      "Marine-grade option",
    ],
    climateAdvantage:
      "The thermal break stops heat at the metal, keeping interiors cool and bills low.",
    faqs: [
      {
        q: "What is thermal-break aluminium?",
        a: "A polyamide barrier inside the frame that stops heat conducting through the metal — essential in the Gulf.",
      },
      {
        q: "What is dual-colour?",
        a: "Powder-coating the inside and outside faces different colours to match interior and exterior design.",
      },
      {
        q: "Is aluminium better than uPVC?",
        a: "For structural strength, slim sightlines and longevity in the Gulf, aluminium is generally preferred.",
      },
    ],
  },
  {
    slug: "smart-glass",
    name: "Smart Glass",
    category: "glass",
    iconName: "smart-glass",
    shortDesc: "PDLC switchable glass — transparent to opaque on demand.",
    tagline: "Privacy at the flick of a switch.",
    overview:
      "Smart glass uses PDLC technology to switch between transparent and opaque on demand, giving instant privacy without blinds. Ideal for partitions, meeting rooms and premium residential spaces.",
    scope: [
      "Application specification",
      "PDLC glass supply",
      "Wiring & control integration",
      "Install & commissioning",
    ],
    materials: [
      "PDLC switchable laminate",
      "Toughened base glass",
      "Wall / remote / app control",
      "Dimmable option",
    ],
    climateAdvantage:
      "In its opaque state, smart glass also reduces solar glare and heat gain.",
    faqs: [
      {
        q: "How does smart glass work?",
        a: "An electrical current through the PDLC layer toggles it from opaque to transparent instantly.",
      },
      {
        q: "Does it use much power?",
        a: "No — the PDLC layer draws very little power when in its transparent state.",
      },
      {
        q: "Can it be retrofitted?",
        a: "Switchable film can be applied to existing glass; full smart-glass units are best installed new.",
      },
    ],
  },
];

export const servicesByCategory = (cat: ServiceCategory) =>
  services.filter((s) => s.category === cat);
