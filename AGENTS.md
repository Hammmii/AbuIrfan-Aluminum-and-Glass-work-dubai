# AGENTS.md — Ownership & Model Strategy

## Model strategy (client direction)

| Work type | Model | Why |
|---|---|---|
| Design direction, token & animation decisions, architecture, **code review** | **GLM-5** (strongest) | Judgment calls that define the product must be high-reasoning. |
| Implementation, boilerplate, mechanical codegen (icons, repeated components) | **Haiku** subagents | Speed on well-specified, parallelizable work. |

Haiku output is always reviewed against `RULES.md` before it lands on `main`.

## Responsibility map

### DESIGN_SYSTEM
Owns: `src/lib/tokens.ts`, `src/app/globals.css`, `tailwind.config.ts`, `_fonts.css`, `src/components/icons/`
- Single source of truth for tokens; 1.5px monoline SVG icon set; typography scale.
- Rule: no token change without updating tokens.ts, globals.css, AND tailwind.config.ts.

### ANIMATION
Owns: `src/lib/animations.ts`, `src/components/motion/`, `src/hooks/useMagneticHover.ts`, `src/hooks/useReducedMotion.ts`
- Framer variant library; GSAP ScrollTrigger sequences; magnetic hover; bronze sweep; glass shimmer; self-drawing dividers + timeline line.
- Rule: every variant has a reduced-motion fallback. No GSAP + Framer on the same element.

### LAYOUT
Owns: `src/components/layout/`, `src/app/layout.tsx`, Header, Footer, MegaMenu, MobileNav, MobileCtaBar
- 12-column grid; sticky condensing header; mega-menu with preview imagery; mobile sticky CTA bar; floating quote button.
- Rule: header uses `position: sticky` not `fixed`. Mega-menu on Radix NavigationMenu.

### PAGE
Owns: `src/app/<route>/page.tsx`, `src/components/sections/`
- Compose sections in order; pass correct data props; page-level GSAP context with cleanup; ISR/SSG where useful.
- Rule: pages contain no inline styles; all section spacing from the token scale.

### COMPONENT
Owns: `src/components/ui/`
- Atomic UI: Button, Badge, Card, Input, Accordion, Lightbox; service/project/testimonial cards; filterable gallery.
- Rule: every component typed with a TS props interface; no `any`.

### CONTENT
Owns: `src/data/`, all copy
- All website copy in an expert, concrete, non-hype voice; service definitions; FAQs; meta titles/descriptions.
- Rule: never keyword-stuff; never reuse competitor boilerplate verbatim.
