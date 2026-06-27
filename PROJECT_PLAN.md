# Abu Irfan Glass & Aluminum Co. — Production Website Project Plan

> **Scope:** Premium marketing website · 6 pages · Full animation system · Production-grade code  
> **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP  
> **Target:** Award-worthy, studio-crafted, zero template feel

---

## 0. Project Philosophy & North Star

Every decision in this project flows from one concept: **"Architectural Clarity."**

The site should feel like the product itself — light passing through precisely engineered glass, brushed metal edges, quiet confidence. No noise. No hype. Just craft.

**Anti-patterns to eliminate at every review:**
- Inter/Roboto/Poppins anywhere in the design
- Rounded-square icon containers
- Generic gradient hero backgrounds
- Dense boilerplate text blocks
- Heavy drop shadows
- "AI-generated" motion (everything bouncing at once)
- Purple/blue color drift

---

## 1. Repository & Tooling Setup

### 1.1 Project Scaffold

```
abu-irfan-web/
├── .claude/
│   ├── AGENTS.md              ← Agent roles & responsibilities
│   ├── RULES.md               ← Hard constraints Claude must follow
│   └── COMPONENT_SPEC.md      ← Per-component animation/design spec
├── src/
│   ├── app/                   ← Next.js 14 App Router pages
│   ├── components/
│   │   ├── ui/                ← Atomic: Button, Badge, Tag, Input, Card
│   │   ├── layout/            ← Header, Footer, MobileNav, MegaMenu
│   │   ├── sections/          ← Page-level section blocks
│   │   ├── motion/            ← Reusable animation wrappers
│   │   └── icons/             ← Custom SVG monoline icon system
│   ├── hooks/                 ← useReducedMotion, useMagneticHover, useScrollProgress
│   ├── lib/
│   │   ├── tokens.ts          ← Single source of truth for all design tokens
│   │   ├── animations.ts      ← GSAP timelines + Framer variants library
│   │   └── fonts.ts           ← Fontshare/Next font config
│   ├── styles/
│   │   ├── globals.css        ← CSS custom properties + base resets
│   │   └── animations.css     ← CSS keyframes for non-JS animations
│   └── data/                  ← Services, projects, FAQs, testimonials JSON
├── public/
│   ├── fonts/                 ← Self-hosted: Clash Display, Satoshi
│   └── images/
│       ├── projects/
│       └── services/
├── .cursor/rules              ← Cursor IDE rules file
├── CLAUDE.md                  ← Claude Code project instructions
└── tailwind.config.ts         ← Extended with brand tokens
```

### 1.2 Package Selection (Justified)

| Package | Purpose | Why This, Not Alternatives |
|---|---|---|
| `next@14` (App Router) | Framework | RSC for SEO-critical pages, streaming, ISR for projects |
| `framer-motion@11` | UI animations | Variants system, layout animations, scroll-linked motion |
| `gsap@3` + ScrollTrigger | Complex scroll sequences | Pinned sections, SVG line drawing, parallax precision |
| `@studio-freight/lenis` | Smooth scroll | Real inertia scrolling, integrates with GSAP ScrollTrigger |
| `@radix-ui/react-*` | Accessible primitives | Dialog (lightbox), Accordion (FAQ), NavigationMenu (mega-menu) |
| `next-sanity` (optional) | CMS | Projects & testimonials editable by client without deploy |
| `sharp` | Image optimization | Next.js image pipeline for architectural photography |
| `clsx` + `tailwind-merge` | Class utilities | Variant composition without conflicts |
| `react-intersection-observer` | Scroll triggers | Lightweight alternative for simple reveal-on-scroll |

---

## 2. Rules & Agent Files

### 2.1 `CLAUDE.md` — Top-Level Claude Code Instructions

```markdown
# CLAUDE.md — Abu Irfan Website

## Project Context
Premium marketing website for Abu Irfan for Glass & Aluminum Co., Dubai.
Design concept: "Architectural Clarity" — precise, light-filled, engineered.

## Non-Negotiable Rules
1. NEVER use Inter, Roboto, Poppins, Montserrat, Nunito, Open Sans as primary type.
2. NEVER use generic Lucide outline icons in rounded-square containers.
3. NEVER add emoji to UI copy.
4. ALL colors must come from tokens.ts — no hardcoded hex values in components.
5. ALL animations must check useReducedMotion() and disable if true.
6. Every interactive element must have visible focus state (outline: 2px solid #1E6E86).
7. Contrast ratio: body text ≥ 4.5:1, large text ≥ 3:1. Run axe-core in dev.
8. Mobile-first: build mobile layout first, then enhance for desktop.
9. No component ships without its animation spec implemented.
10. WhatsApp CTA (+971XXXXXXXXX deep-link) appears on every page.

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS (extend, never override core)
- Framer Motion for component-level animation
- GSAP + ScrollTrigger for scroll-choreographed sequences
- Lenis for smooth scroll

## File Creation Rules
- Components: PascalCase.tsx in /src/components/[category]/
- Hooks: camelCase.ts in /src/hooks/
- Sections: [PageName][SectionName].tsx
- Never create a component without exporting its animation variants

## When Stuck on Design
Reference: src/lib/tokens.ts for all values.
Reference: COMPONENT_SPEC.md for per-component animation behavior.
Reference: AGENTS.md to know which agent handles what.
```

### 2.2 `AGENTS.md` — Multi-Agent Responsibility Map

```markdown
# AGENTS.md

## Agent: DESIGN_SYSTEM_AGENT
Owns: tokens.ts, globals.css, tailwind.config.ts, fonts.ts, icons/
Responsibilities:
- Define and maintain the single source of truth for all design tokens
- Create and refine the SVG monoline icon system (1.5px stroke, consistent radius)
- Typography scale implementation (Clash Display + Satoshi)
- Ensure CSS custom properties cascade correctly
Rules: No token changes without updating BOTH tokens.ts AND tailwind.config.ts

## Agent: ANIMATION_AGENT
Owns: animations.ts, motion/ components, hooks/useMagneticHover.ts, hooks/useReducedMotion.ts
Responsibilities:
- Framer Motion variant library (fade-up, stagger, shimmer, sweep)
- GSAP ScrollTrigger sequences (hero parallax, line drawing, count-up stats)
- Magnetic hover system for buttons and cards
- Bronze fill-sweep CTA animation
- Glass shimmer / light-refraction effect
- Section divider self-draw animation
Rules: Every animation variant has a `reducedMotion` fallback. No GSAP + Framer overlap on same element.

## Agent: LAYOUT_AGENT
Owns: layout/ components, app/layout.tsx, Header, Footer, MegaMenu, MobileNav
Responsibilities:
- 12-column grid system
- Sticky condensing header (full → compact on scroll, height 80px → 56px)
- Mega-menu with service preview images
- Mobile sticky CTA bar (Call · WhatsApp · Quote)
- Floating quote button
Rules: Header uses CSS position:sticky not fixed. Mega-menu uses Radix NavigationMenu.

## Agent: PAGE_AGENT
Owns: app/[page]/page.tsx, sections/
Responsibilities:
- Compose page sections in correct order
- Pass correct data props to each section
- Implement page-level scroll choreography via GSAP context
- Handle ISR / SSG for project pages
Rules: Pages contain NO inline styles. All section spacing from spacing scale in tokens.ts.

## Agent: COMPONENT_AGENT
Owns: components/ui/, individual complex components
Responsibilities:
- All atomic UI components (Button, Badge, Card, Input, Accordion, Lightbox)
- Service cards, project cards, testimonial cards
- FAQ accordion with animated open/close
- Filterable project gallery with Framer layout animations
Rules: Every component is typed with TypeScript props interface. No 'any' types.

## Agent: CONTENT_AGENT
Owns: data/ JSON files, all copy in components
Responsibilities:
- Write all website copy (no keyword stuffing, expert voice)
- Services descriptions, service detail pages, FAQ content
- Project case study content structure
- Meta titles/descriptions for SEO
Rules: Voice: clear, expert, concrete. Never hype. Use technical language where accurate.
```

### 2.3 `RULES.md` — Hard Design & Code Constraints

```markdown
# RULES.md — Hard Constraints

## Design Constraints
- COLOR: Only use tokens from the 12-token palette. No opacity hacks to invent new colors.
- TYPOGRAPHY: Clash Display (headings) + Satoshi (body). Load via @fontface from /public/fonts/.
- RADII: buttons/inputs: 4–6px. Cards: 12px. Full round: only WhatsApp button.
- SHADOWS: box-shadow max 1 layer, max 12px blur. No stacked shadows.
- GLASSMORPHISM: backdrop-blur only over imagery/dark bands. NEVER on white/light backgrounds.
- ICONS: Only /src/components/icons/. SVG, 1.5px stroke, viewBox 24x24, no fill.
- SPACING: Use 4px base grid. Accepted values: 4,8,12,16,20,24,32,40,48,64,80,96,128px.
- SECTIONS: Min padding-y: 80px desktop, 48px mobile.

## Animation Constraints
- Scroll reveal: opacity 0→1, translateY 24px→0, duration 450ms, cubic-bezier(0.22,1,0.36,1)
- Stagger children: 60ms between items
- Parallax depth: max 0.15 factor (15% of scroll distance). Never dizzying.
- Hover transitions: max 300ms. No spring physics on hover (too bouncy).
- Page transitions: Framer Motion AnimatePresence, opacity + slight Y shift only.
- Count-up stats: triggered once on viewport entry. Duration 1.8s.
- GSAP: Always use gsap.context() for cleanup. Always kill() on component unmount.
- NO: bounce easing, spin animations, scale > 1.05 on hover.

## Code Constraints
- TypeScript strict mode. No implicit any.
- Zero inline styles except when dynamically calculated (parallax transforms).
- Tailwind: use @apply in CSS only for repeated patterns (>3 uses). Prefer utility classes.
- Images: Always next/image with explicit width/height or fill + sizes.
- Accessibility: aria-label on all icon-only buttons. role="region" on major sections.
- Performance: Lighthouse ≥ 90 all categories. Images: webp/avif, lazy below fold.
- No CSS-in-JS. No styled-components. Tailwind + CSS modules if needed.
```

---

## 3. Design Token System (`tokens.ts`)

```typescript
// src/lib/tokens.ts — Single source of truth

export const colors = {
  // Backgrounds
  bgLight: '#F4F6F8',
  bgWhite: '#FFFFFF',
  bgDark: '#1B232B',
  glassTint: '#DCE6EC',

  // Text
  ink: '#0F1419',
  secondary: '#6B7785',

  // Brand
  brandDeep: '#143B49',
  brandInteractive: '#1E6E86',

  // Accents
  bronze: '#B0894F',
  whatsapp: '#2E7D5B',
} as const;

export const typography = {
  display: "'Clash Display', sans-serif",
  body: "'Satoshi', sans-serif",
  accent: "'Instrument Serif', serif", // pull-quotes only
} as const;

export const scale = {
  hero: 'clamp(56px, 8vw, 96px)',
  h1: 'clamp(40px, 5vw, 56px)',
  h2: 'clamp(28px, 3.5vw, 40px)',
  h3: '24px',
  body: '17px',
  small: '14px',
} as const;

export const spacing = {
  // Section vertical rhythm
  sectionLg: '96px',
  sectionMd: '64px',
  sectionSm: '48px',
} as const;

export const easing = {
  smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
  out: 'cubic-bezier(0.0, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

export const animation = {
  revealDuration: 0.45,
  staggerDelay: 0.06,
  parallaxFactor: 0.12,
  countUpDuration: 1.8,
} as const;
```

---

## 4. Animation System Architecture

### 4.1 Framer Motion Variant Library (`animations.ts`)

```typescript
// src/lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 }
  }
};

export const glassShimmer = {
  // Light-refraction shimmer across hero glass
  initial: { x: '-100%', opacity: 0 },
  animate: {
    x: '200%',
    opacity: [0, 0.6, 0],
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.8 }
  }
};

export const bronzeSweep = {
  // CTA button fill on hover
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
  }
};

export const magneticCard = {
  rest: { x: 0, y: 0 },
  // x/y calculated dynamically from mouse position in hook
};
```

### 4.2 GSAP Sequences

```
ScrollTrigger Sequences (GSAP):

HERO PARALLAX
  - background image: y = scrollY * 0.12 (moves slower than page)
  - hero text: y = scrollY * -0.06 (moves slightly faster, creates depth)
  - trigger: scrub: 1 (smooth)

STATS COUNT-UP
  - Each number counts from 0 to target value
  - trigger: once: true, start: "top 80%"
  - duration: 1.8s, ease: "power2.out"

PROCESS TIMELINE LINE DRAW
  - SVG path from 0% to 100% stroke-dashoffset
  - trigger: scrub: 0.5
  - line connects 5 milestone nodes
  - each node: scale 0→1 + opacity fade as line reaches it

SECTION DIVIDER SELF-DRAW
  - Thin horizontal metallic line (1px, bronze tint)
  - Draws left→right over 600ms as section enters viewport
  - trigger: once per section

PROJECT CARDS STAGGER
  - Cards fly in from slight Y offset with stagger 60ms
  - trigger: "top 75%", once: true
```

### 4.3 Hover Effect Specifications

```
BUTTON — Primary CTA (bronze sweep)
  Default: bg transparent, border 1.5px #143B49, text #143B49
  Hover:   bronze (#B0894F) fills from left (scaleX transform on ::before)
           text transitions to white
           subtle lift: translateY(-1px)
  Active:  translateY(0), slight darken on bronze
  Timing:  280ms cubic-bezier(0.22,1,0.36,1)

BUTTON — Secondary (ghost/outline)
  Default: text #1E6E86, underline offset 3px
  Hover:   underline animates in (width 0→100%)
  Timing:  220ms ease

CARD — Service / Project
  Default: border 1px solid rgba(107,119,133,0.2), shadow: none
  Hover:   border-color #B0894F (bronze, 0.4 opacity)
           translateY(-4px)
           subtle glass: backdrop-blur(0) → backdrop-blur(4px) if over image
           inner image: scale(1.0) → scale(1.03)
  Timing:  320ms cubic-bezier(0.22,1,0.36,1)

MAGNETIC HOVER — Applied to: primary CTA buttons, project cards
  Logic: on mousemove, calculate distance from element center
         apply max ±12px x/y transform (reduces as cursor moves away)
         on mouseleave: spring back, tension: 300, friction: 25
  Implementation: useMagneticHover custom hook → Framer Motion spring

NAV LINK — Header
  Default: color #6B7785
  Hover:   color #0F1419
           1px bronze underline slides in from left
  Active/Current: color #143B49, underline persistent
  Timing:  200ms

HEADER — Condensing on Scroll
  At top:    height 80px, bg transparent (logo full, links visible)
  Scrolled:  height 56px, bg rgba(255,255,255,0.92) + backdrop-blur(12px)
             smooth transition 300ms
  Border:    1px solid rgba(220,230,236,0.6) bottom border appears
```

---

## 5. Custom Icon System

All icons are custom SVG, monoline, 1.5px stroke, `currentColor`, viewBox="0 0 24 24".

```
Icon Set Required:
  glass-room.svg       — Rectangular frame with roof lines
  pergola.svg          — Open grid canopy with columns
  skylight.svg         — Diamond/angled frame with light rays
  door-window.svg      — Sliding track detail with frame
  partition.svg        — Vertical panel lines
  curtain-wall.svg     — Grid of mullion lines (architectural)
  smart-glass.svg      — Panel with wave/signal lines
  acp-cladding.svg     — Layered panel stack
  consult.svg          — Circle with chat line (minimal)
  design.svg           — T-square / drafting angle
  fabricate.svg        — Gear with precise teeth
  install.svg          — Wrench + frame corner
  handover.svg         — Key with architectural house
  climate-heat.svg     — Thermometer with sun
  climate-dust.svg     — Wind with particle dots
  climate-uv.svg       — UV wavelength line
  climate-humidity.svg — Water drop with percentage
  location-pin.svg     — Minimal architectural pin
  phone.svg            — Handset, 1.5px, no filled areas
  whatsapp.svg         — W in circle (custom, not brand logo)
  email.svg            — Envelope, minimal
  arrow-right.svg      — Thin, no arrowhead box
```

Icon component wrapper:
```tsx
// src/components/icons/Icon.tsx
// Props: name, size (16|20|24|32), color (inherits currentColor)
// Lazy-loads SVG sprite sheet or individual imports
```

---

## 6. Component Specifications

### 6.1 Global Header (`Header.tsx`)

**Desktop:**
- Logo left (SVG), Nav center (6 items), Phone + "Free Quote" button right
- Mega-menu on hover: full-width panel, 3 columns, service preview images (120×80px), brief desc
- Mega-menu animation: fade + translateY(-8px)→0, 200ms
- Condenses on scroll: 80px → 56px, bg transparent → frosted glass

**Mobile:**
- Logo left, hamburger right (animated: 3 lines → X)
- Full-screen overlay nav with staggered link entries
- Sticky bottom bar: [📞 Call] [💬 WhatsApp] [Get Quote]

### 6.2 Hero Section (`HeroSection.tsx`)

**Layout:** Full viewport height, image right 60% of width, text left

**Anatomy:**
```
[Eyebrow tag: "Dubai's Glass & Aluminum Specialists"]
[H1: "Where Light Meets\nPrecision Engineering"]  ← Clash Display, 72–96px
[Body: Expert 2-line descriptor, Satoshi]
[2 CTAs: "Request Free Quote" (bronze sweep) + "View Projects" (ghost)]
[Trust strip below: 3 stats inline — 18+ Years · 2,400+ Projects · Dubai & UAE]
```

**Hero Animations (sequenced, not simultaneous):**
1. `0ms`: Hero image fades in with subtle scale 1.05→1.0
2. `200ms`: Eyebrow tag slides up
3. `350ms`: H1 line 1 slides up
4. `450ms`: H1 line 2 slides up (staggered feel)
5. `600ms`: Body text fades up
6. `750ms`: CTAs fade up
7. `900ms`: Trust stats count up
8. `1000ms`: Glass shimmer sweeps across hero image (single occurrence)
9. `ongoing`: Subtle parallax on scroll

**Glass Shimmer Effect:**
```css
/* Pseudo-element on hero image container */
::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255,255,255,0.12) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  animation: shimmer 1.4s cubic-bezier(0.22,1,0.36,1) 1s forwards;
}
@keyframes shimmer { to { transform: translateX(200%); } }
```

### 6.3 Stats Band (`StatsBand.tsx`)

4 stats across full-width band, `#1B232B` background.

```
[18+]       [2,400+]    [15+]       [UAE-Wide]
Years       Projects    Services    Coverage
```

- Numbers: Clash Display, 56px, white
- Labels: Satoshi, 14px, #6B7785
- Dividers: 1px vertical, rgba(176,137,79,0.3) bronze
- Animation: count-up triggered on viewport entry, once

### 6.4 Services Grid (`ServicesGrid.tsx`)

8 services in a 4×2 grid (desktop), 2×4 (tablet), 1×8 (mobile).

Each card:
```
[Custom SVG icon, 32px]
[Service name, H3, Clash Display]
[1-line descriptor, Satoshi 15px, secondary color]
[→ Learn more, bronze text, animated underline]
```

Card hover: border bronze, lift 4px, magnetic.

### 6.5 Climate Band (`ClimateBand.tsx`)

Full-width, `#143B49` (deep teal) background. Editorial asymmetry.

```
Left (40%):
  "Engineered for the\nDubai Climate"
  Satoshi body, 2 lines

Right (60%): 4 climate challenges in 2×2 grid
  [Heat 40°C+]  [Dust & Sand]
  [UV Intensity] [Humidity]
  Each with icon + stat + 1-line engineering response
```

### 6.6 Process Timeline (`ProcessTimeline.tsx`)

5 steps: Consult → Design → Fabricate → Install → Handover

Desktop: Horizontal, connected by GSAP-drawn SVG line
Mobile: Vertical with connecting line on left

```
Each node:
  [Number 01–05, bronze, Clash Display]
  [Step name, H3]
  [2-line description, Satoshi body]
  [Icon from icon system]
```

GSAP: Line draws as user scrolls through section (ScrollTrigger scrub).
Each step node scales in as line reaches it.

### 6.7 Project Showcase (`ProjectShowcase.tsx`)

**Filter bar:** Category pills (All · Glass Rooms · Pergolas · Commercial · Hospitality)
- Active filter: bronze background, white text
- Filter animation: Framer Motion `layout` prop for smooth reflow

**Grid:** Masonry-style, alternating card sizes. 3 columns desktop, 2 tablet, 1 mobile.

Each card:
```
[Project image, 16:10 ratio, scale on hover]
[Category badge, top-left overlay]
[Project name + location, bottom overlay on hover (slides up)]
```

Click → Lightbox (Radix Dialog):
```
[Full image left 55%]
[Details right 45%]:
  Project name, Location, Year
  Category badges
  Scope of work (bullet list)
  Materials used
  Client quote (Instrument Serif italic)
```

### 6.8 Testimonials (`TestimonialsSlider.tsx`)

Single large quote, centered, auto-advance (5s), manual dots.

```
[Large " typographic opener, bronze, 80px]
[Quote text, Instrument Serif italic, 24px, max-width 680px]
[— Client Name, Position, Company]
[Project reference link]
[Navigation dots]
```

Transition: Cross-fade, 400ms.

### 6.9 FAQ Accordion (`FAQAccordion.tsx`)

Radix Accordion, custom styled.

```
[Q: text left, + / − right]
[Answer slides open: max-height animation, 300ms ease]
[Divider line between each Q]
[Bronze accent on active Q indicator]
```

### 6.10 CTA Band (`CTABand.tsx`)

Full-width, alternates between `#143B49` and `#1B232B` per page context.

```
[Eyebrow: "Ready to Begin?"]
[H2: "Start Your Project with a Free Consultation"]
[2 CTAs: "Request Quote" (bronze) + WhatsApp button (green)]
[Supporting text: phone number, 48hr response promise]
```

---

## 7. Page-by-Page Build Plan

### Page 1: Home (`/`)

**Sections (in order):**
1. `HeroSection` — Full viewport, image-right layout
2. `TrustStrip` — Logos of certifications/associations (subtle)
3. `StatsBand` — 4 key stats
4. `ServicesGrid` — 8 services, 4×2
5. `ClimateBand` — "Engineered for Dubai" editorial section
6. `ProcessTimeline` — 5-step, GSAP line draw
7. `ProjectShowcase` — Filterable, 6 featured projects
8. `TestimonialsSlider` — 3 testimonials
9. `FAQTeaser` — 4 FAQ items + "See all FAQs" link
10. `CTABand` — Primary conversion

**Page-level GSAP context:** ScrollTrigger for hero parallax + timeline draw. Cleanup on unmount.

**SEO:** Title: "Glass Rooms, Pergolas & Aluminum Systems Dubai | Abu Irfan"
Meta: Concrete, includes Dubai, UAE, key services.

---

### Page 2: Services Hub (`/services`)

**Sections:**
1. `PageHero` — "Our Services" · H1 · breadcrumb
2. `ServicesIntro` — 2-column: value statement left, key capabilities right
3. `ServiceCategoryCards` — 2 main categories: Glass Solutions + Aluminum & Glazing
   Each card: large image, category name, sub-service list, CTA
4. `SubServiceGrid` — All 8 services detailed (image + name + 2-line desc + link)
5. `ClimateBand` — Abbreviated version
6. `CTABand`

---

### Page 3: Service Detail (`/services/[slug]`)

**Template sections (model: Glass Rooms):**
1. `ServiceHero` — Full-width image, service name overlay, breadcrumb
2. `ServiceOverview` — Definition + why ideal for Dubai, 2-column
3. `ScopeCards` — What's included: 4–6 cards (design, fabrication, glazing, framing, etc.)
4. `ClimateFit` — Specific climate advantages of this product
5. `MaterialsOptions` — Types of glass/aluminum options available, with specs
6. `ProcessSteps` — Abbreviated 4-step for this specific service
7. `ServiceGallery` — Filtered gallery (this service only), lightbox
8. `TestimonialSingle` — One relevant client quote
9. `FAQAccordion` — 6–8 service-specific FAQs
10. `CTABand`

**7 service detail pages to create:**
- `/services/glass-rooms`
- `/services/pergolas`
- `/services/skylights`
- `/services/doors-windows`
- `/services/partitions`
- `/services/curtain-walls`
- `/services/acp-cladding`

*(Smart glass can be a sub-section of glass rooms or its own page)*

---

### Page 4: Projects (`/projects`)

**Sections:**
1. `PageHero` — "Our Projects" · count badge · intro line
2. `FilterBar` — Pills: All · Glass Rooms · Pergolas · Skylights · Commercial · Hospitality · Villas
3. `ProjectGrid` — Masonry, Framer Motion `AnimatePresence` for filter transitions
4. `ProjectCard` — Image, category, name, location, click → Lightbox
5. `CTABand` — "Have a project in mind?"

**Lightbox content per project:**
- Before/after slider (if available)
- Project specs: Location, Scope, Duration, Materials
- Key challenges + Abu Irfan solutions
- Client testimonial excerpt

---

### Page 5: About (`/about`)

**Sections:**
1. `AboutHero` — Company name + founding statement, editorial image of workshop
2. `OurStory` — 3-paragraph narrative (not a list), image right
3. `StatsBand` — Same stats, different context ("What we've built")
4. `ValuesSection` — 3 core values (Precision · Quality · Reliability) — typographic, no icons
5. `TeamSection` — Key team members with photos (if provided), minimal cards
6. `WorkshopSection` — Workshop/fabrication process, image-heavy, editorial layout
7. `CertificationsSection` — Logos/badges of relevant certifications, UAE compliance
8. `CTABand`

---

### Page 6: Contact (`/contact`)

**Sections:**
1. `ContactHero` — "Let's Talk About Your Project" · minimal, airy
2. `ContactLayout` — 2-column: Form left, Info right
3. `QuoteForm`:
   - Name (text)
   - Email (email)
   - Phone (tel, with UAE flag prefix)
   - Service of Interest (select dropdown with all 8 services)
   - Project Location/Type (text)
   - Budget Range (optional select)
   - Message (textarea, 4 rows)
   - Submit: "Send Enquiry" (bronze sweep button)
   - Under submit: "Or contact us directly via WhatsApp" + WhatsApp deep-link
4. `ContactInfo` (right column):
   - Phone with click-to-call
   - 3 email addresses with labels (General · HR · Sales)
   - Physical address with Google Maps link
   - Business hours
   - WhatsApp QR code (optional)
5. `MapEmbed` — Google Maps embed, Port Saeed, Jebel Ali, Dubai
6. `ContactCTA` — Simple "We respond within 48 hours" promise strip

---

## 8. Style Guide Reference

### Type Scale

| Token | Size | Weight | Face | Tracking | Usage |
|---|---|---|---|---|---|
| `hero` | clamp(56,8vw,96px) | 600 | Clash Display | -0.03em | Hero H1 |
| `h1` | clamp(40,5vw,56px) | 600 | Clash Display | -0.02em | Page titles |
| `h2` | clamp(28,3.5vw,40px) | 500 | Clash Display | -0.01em | Section heads |
| `h3` | 24px | 500 | Clash Display | 0 | Card titles |
| `body-lg` | 18px | 400 | Satoshi | 0 | Lead text |
| `body` | 17px | 400 | Satoshi | 0 | Body copy |
| `small` | 14px | 400 | Satoshi | 0.01em | Labels, captions |
| `caption` | 12px | 500 | Satoshi | 0.04em | Tags, badges (uppercase) |
| `pull-quote` | 22–24px | 400 italic | Instrument Serif | 0 | Testimonials |
| `stat` | 48–56px | 600 | Clash Display | -0.03em | Number stats |

### Color Tokens

```css
:root {
  --color-ink: #0F1419;
  --color-secondary: #6B7785;
  --color-bg-light: #F4F6F8;
  --color-bg-white: #FFFFFF;
  --color-bg-dark: #1B232B;
  --color-glass-tint: #DCE6EC;
  --color-brand-deep: #143B49;
  --color-brand-interactive: #1E6E86;
  --color-bronze: #B0894F;
  --color-whatsapp: #2E7D5B;
  --color-border: rgba(107, 119, 133, 0.2);
  --color-divider: rgba(176, 137, 79, 0.25);
}
```

### Button States

| Variant | Default | Hover | Active | Focus | Disabled |
|---|---|---|---|---|---|
| Primary | bronze text, bronze border | bronze fill, white text, lift -1px | no lift, 5% darker bronze | 2px outline #1E6E86 offset 2px | 40% opacity |
| Secondary | #1E6E86 text, no border | underline grows | underline + slight darken | 2px outline | 40% opacity |
| Ghost | #6B7785 text, light border | #0F1419 text, stronger border | slight bg tint | 2px outline | 40% opacity |
| Whatsapp | #2E7D5B fill, white text | 10% darken | 15% darken | 2px outline green | 40% opacity |

### Spacing Scale (4px base)

```
4  8  12  16  20  24  32  40  48  64  80  96  128  160  192
```

Section padding-y: 80px desktop / 48px mobile (minimum)

---

## 9. SEO & Performance Strategy

### SEO
- `next/metadata` API for each page
- Structured data: `LocalBusiness` schema (address, phone, services)
- `Service` schema for each service page
- Open Graph images: generated with `@vercel/og` or static per page
- Sitemap: `next-sitemap` package
- Robots.txt: allow all
- Canonical URLs on all pages
- Internal linking: every service page links to Projects (filtered), Contact

### Performance Targets
- Lighthouse Performance: ≥ 90
- LCP: < 2.5s (hero image: priority load, explicit dimensions)
- CLS: < 0.1 (explicit image sizes, no layout shift from fonts)
- FID/INP: < 200ms (minimal JS on initial load, animation code-split)
- Font loading: `font-display: swap`, preload Clash Display 600 + Satoshi 400

### Image Strategy
- All architectural photos: WebP + AVIF via Next.js Image
- Hero image: priority={true}, sizes="100vw"
- Below-fold images: lazy load, `sizes` prop tuned to layout
- Placeholder: blur placeholder with `blurDataURL`

---

## 10. Build Sequence (Ordered for Claude Code Sessions)

### Phase 0: Foundation (Session 1)
```
1. scaffold Next.js 14 project with TypeScript
2. install all packages
3. configure tailwind.config.ts with all brand tokens
4. create src/lib/tokens.ts
5. create src/lib/animations.ts (variant library)
6. configure fonts (self-host Clash Display + Satoshi)
7. set globals.css (CSS custom properties, resets, base type)
8. create useReducedMotion hook
9. create useMagneticHover hook
10. setup Lenis + GSAP ScrollTrigger integration
```

### Phase 1: Design System (Session 2)
```
11. Create all 22 SVG icons in /src/components/icons/
12. Icon.tsx wrapper component
13. Button.tsx (all variants, bronze sweep animation)
14. Badge.tsx, Tag.tsx
15. Card.tsx (base, with hover system)
16. Input.tsx, Select.tsx, Textarea.tsx (form elements)
17. Section.tsx wrapper (consistent padding, max-width)
```

### Phase 2: Layout (Session 3)
```
18. Header.tsx (desktop: sticky condensing)
19. MegaMenu.tsx (Radix NavigationMenu, preview images)
20. MobileNav.tsx (full-screen overlay)
21. MobileCtaBar.tsx (sticky bottom)
22. Footer.tsx (4-column, all contact info)
23. app/layout.tsx (Header + Footer, Lenis wrapper)
```

### Phase 3: Shared Sections (Session 4)
```
24. HeroSection.tsx (full animation sequence)
25. StatsBand.tsx (count-up GSAP)
26. ClimateBand.tsx
27. ProcessTimeline.tsx (GSAP line draw)
28. CTABand.tsx
29. TestimonialsSlider.tsx
30. FAQAccordion.tsx (Radix)
```

### Phase 4: Home Page (Session 5)
```
31. ServicesGrid.tsx
32. ProjectShowcase.tsx (filterable, Framer layout)
33. ProjectCard.tsx
34. Lightbox.tsx (Radix Dialog)
35. FAQTeaser.tsx
36. app/page.tsx (compose all sections, GSAP context)
```

### Phase 5: Services Pages (Session 6–7)
```
37. ServiceHero.tsx
38. ScopeCards.tsx
39. MaterialsOptions.tsx
40. ServiceGallery.tsx
41. app/services/page.tsx
42. app/services/[slug]/page.tsx
43. Create data/services.ts with all 7 service definitions
44. Generate all 7 service detail pages
```

### Phase 6: Projects Page (Session 8)
```
45. FilterBar.tsx (animated pills)
46. ProjectGrid.tsx (masonry, AnimatePresence)
47. ProjectLightbox.tsx (before/after slider)
48. Create data/projects.ts (10–15 sample projects)
49. app/projects/page.tsx
```

### Phase 7: About & Contact (Session 9)
```
50. AboutHero.tsx, OurStory.tsx, ValuesSection.tsx
51. CertificationsSection.tsx
52. app/about/page.tsx
53. QuoteForm.tsx (with validation, Zod schema)
54. ContactInfo.tsx
55. MapEmbed.tsx
56. app/contact/page.tsx
```

### Phase 8: Polish & QA (Session 10)
```
57. Audit all animations against reduced-motion
58. Lighthouse audit — fix all < 90 scores
59. Accessibility audit (axe-core, keyboard nav, screen reader)
60. Mobile QA: all breakpoints (375, 430, 768, 1024, 1280, 1440)
61. Cross-browser: Chrome, Safari, Firefox, Edge
62. Form submission (connect to email service or Formspree)
63. Meta tags and OG images for all 6 pages
64. Generate sitemap
65. Final design review against RULES.md checklist
```

---

## 11. Quality Checklist (Per Component Review)

Before any component is considered complete:

**Design:**
- [ ] Colors sourced only from tokens.ts
- [ ] Typography from approved font stack
- [ ] Spacing on 4px grid
- [ ] Hover state implemented and tested
- [ ] Focus state visible (2px #1E6E86 outline)
- [ ] Mobile layout reviewed at 375px

**Animation:**
- [ ] Entry animation implemented
- [ ] Reduced-motion fallback (no animation, instant)
- [ ] Hover animation: max 300ms
- [ ] GSAP context created and cleanup on unmount
- [ ] No simultaneous animations (sequenced intent)

**Code:**
- [ ] TypeScript props interface exported
- [ ] No `any` types
- [ ] No inline styles (except dynamic transforms)
- [ ] next/image for all images
- [ ] aria-label on icon-only buttons
- [ ] No hardcoded hex values

**Performance:**
- [ ] Images: WebP, lazy below fold, priority on LCP
- [ ] No render-blocking scripts
- [ ] Animation code-split if large

---

## 12. Content Structure (`data/` files)

### `data/services.ts`
```typescript
interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: IconName;
  heroImage: string;
  climateAdvantage: string;
  scopeItems: ScopeItem[];
  materials: MaterialOption[];
  faqs: FAQ[];
  relatedProjects: string[]; // project slugs
}
```

### `data/projects.ts`
```typescript
interface Project {
  slug: string;
  name: string;
  location: string; // "JBR, Dubai"
  category: ProjectCategory;
  year: number;
  scope: string[];
  materials: string[];
  images: ProjectImage[];
  clientQuote?: Quote;
  featured: boolean;
}
```

### `data/faqs.ts`
```typescript
interface FAQ {
  question: string;
  answer: string;
  category: 'general' | ServiceSlug;
}
```

---

## 13. WhatsApp Integration

Every page:
```
WhatsApp deep-link: https://wa.me/971XXXXXXXXX?text=Hi%20Abu%20Irfan%2C%20I%27d%20like%20to%20request%20a%20free%20quote.
```

Pre-filled message: "Hi Abu Irfan, I'd like to request a free quote for [auto-populated if on service page]."

WhatsApp button style:
- Round pill, `#2E7D5B` background, white text + WhatsApp icon
- Subtle pulse animation (shadow ring) on hero and CTA band
- Floating button: bottom-right, fixed, appears after 3s scroll, 56px diameter

---

## 14. Animation Choreography Map (Visual Reference)

```
PAGE LOAD SEQUENCE (Home):
  0ms    ─── Header fades in (links + logo)
  100ms  ─── Hero image appears (opacity + slight scale)
  300ms  ─── Hero eyebrow slides up
  450ms  ─── Hero H1 line 1 slides up
  550ms  ─── Hero H1 line 2 slides up
  700ms  ─── Hero body text fades up
  800ms  ─── Hero CTAs slide up (staggered 60ms)
  1000ms ─── Shimmer sweeps across hero glass
  1200ms ─── Stats count up (if visible)

ON SCROLL:
  Hero parallax: continuous scrub (12% factor)
  Section entry: each section triggers fade-up stagger
  Stats section: count-up (once)
  Process timeline: line draws with scroll position
  Section dividers: draw left-to-right on entry

HOVER SYSTEM:
  Buttons: bronze fill sweep (280ms)
  Cards: lift + border-bronze + inner image scale (320ms)
  Magnetic: real-time mouse tracking (spring physics)
  Nav links: underline slide (200ms)
```

---

## 15. Deployment & Environment

```
Hosting: Vercel (recommended for Next.js)
Domains: abuirfan.com (primary)
Preview: [branch].abuirfan.vercel.app

Environment Variables:
  NEXT_PUBLIC_SITE_URL=https://abuirfan.com
  NEXT_PUBLIC_WHATSAPP_NUMBER=971XXXXXXXXX
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (Google Analytics 4)
  CONTACT_FORM_EMAIL=info@abuirfan.com
  RESEND_API_KEY= (or Formspree endpoint)

Analytics: GA4 + Vercel Analytics
Error tracking: Sentry (optional)
```

---

## 16. Session-Start Checklist for Claude Code

At the start of every Claude Code session, reference:

1. `CLAUDE.md` — project rules and stack
2. `AGENTS.md` — which agent role you're in
3. `RULES.md` — hard design + code constraints
4. `src/lib/tokens.ts` — before touching any color or type
5. `src/lib/animations.ts` — before writing any animation code
6. Current phase from Section 10 of this plan

---

*This document is the single source of truth for the Abu Irfan website project. Every design decision, animation, component, and code pattern flows from the "Architectural Clarity" concept and the brand tokens defined above.*
