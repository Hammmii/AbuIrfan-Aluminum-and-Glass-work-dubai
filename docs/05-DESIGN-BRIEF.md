# Design Brief — Abu Irfan for Glass & Aluminum Co.

> The visual + interaction system. Goal: a calm, architectural, premium site that feels **designed by a studio**, not assembled from an Elementor kit.

## 1. Design direction

**"Architectural clarity."** The site should feel like the product itself: **light, transparent, precisely engineered, and quietly premium.** Think glass-and-brushed-metal, not glass-and-plastic. Reference the restraint of high-end architecture studios and premium material brands — generous white space, strong type, one confident accent, and photography doing the heavy lifting.

Mood words: **clarity · precision · light · structure · warmth** (a touch, to avoid cold).

## 2. Typography (distinctive — NOT default Google/Inter/Roboto)

Pair a **characterful display face** with a **neutral, highly-legible text face**. Recommended:

| Role | Recommended faces | Why |
|---|---|---|
| Display / Headlines | **Clash Display** or **Bricolage Grotesque** (free, Fontshare) | Geometric, modern, distinctive — instantly reads "design-forward," not AI-default. |
| Body / UI text | **Satoshi**, **Hanken Grotesk**, or **Switzer** | Clean grotesque, excellent legibility, pairs with the display face. |
| Editorial accent (optional) | **Instrument Serif** or **Fraunces** italic | For pull-quotes / stat callouts — adds craft and warmth. |

Type scale (desktop): Hero 64–96px · H1 48–56 · H2 32–40 · H3 24 · Body 16–18 · Small 14. Tight heading tracking, generous line-height in body. Use **tabular figures** for stats/prices.

❌ **Do not use:** Inter, Roboto, Poppins, Montserrat, Nunito, Open Sans, or any "AI-default" rounded geometric as the primary face.

## 3. Color palette

Cool glass + warm metal = balance. One cool primary, one warm metallic accent, restrained neutrals.

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0F1419` | Primary text / dark sections |
| `--charcoal` | `#1B232B` | Dark band backgrounds |
| `--mist` | `#F4F6F8` | Page background (light) |
| `--paper` | `#FFFFFF` | Cards / surfaces |
| `--glass` | `#DCE6EC` | Glass-tint surfaces, subtle panels |
| `--steel` | `#6B7785` | Secondary text, dividers |
| `--brand` (primary) | `#143B49` | Deep architectural teal — primary brand |
| `--brand-bright` | `#1E6E86` | Hover / interactive teal |
| `--bronze` (accent) | `#B0894F` | Premium metallic accent (CTAs, details) — *use sparingly* |
| `--success` | `#2E7D5B` | WhatsApp / success states |

Contrast: all body text ≥ AA (4.5:1). Bronze is for accents/large text only, never body.

### Optional: glass-morphism done right
Use sparingly for overlays/cards over imagery: `background: rgba(255,255,255,0.06)` + `backdrop-filter: blur(16px)` + 1px `rgba(255,255,255,0.15)` border. Never on text-heavy areas. Must remain legible.

## 4. Iconography (custom, not AI-emoji)

- **No Font Awesome / Lucide outline icons in rounded squares.** No emoji.
- Use **thin, custom, architecturally-drawn line icons** (1.5px stroke, consistent corner radius) OR minimal **monoline technical drawings** of the actual products (a section detail of a sliding track, a curtain-wall mullion).
- Optionally commission a small **bespoke icon set** for the 6–8 core services.
- Service cards can use a **numbered / typographic** treatment instead of icons.

## 5. Motion (purposeful — explains the product)

Motion themes: **light moving through glass**, and **precision assembly**.

- **Scroll-reveal** — content fades/translates up subtly as it enters (staggered, 400–600ms, `cubic-bezier(0.22,1,0.36,1)`).
- **Parallax on hero/project imagery** — slow drift; glass reflections suggesting depth.
- **Magnetic buttons** + hover lift on cards; CTA fill animations (bronze sweep).
- **Hero:** a subtle light-refraction/shimmer across glass imagery; headline words reveal on load.
- **Section dividers:** a thin metallic line that "draws" itself on scroll.
- **Process/timeline:** numbers count up; steps connect with an animating line.
- **Reduce motion:** respect `prefers-reduced-motion` — disable parallax/shimmer for accessibility.
- Stack suggestion: **GSAP + ScrollTrigger** (or Framer Motion / Lenis for smooth scroll) on a React/Next.js build; lightweight if static.

## 6. Layout & grid

- 12-column grid, max content width ~1280px, generous gutters (24–32px).
- Lots of **negative space**; sections breathe. Avoid the competitor's dense, busy blocks.
- **Asymmetric / editorial** section layouts (not all centered) — image-left/text-right alternation, offset images, overlapping cards.
- Corner radii: small & consistent (`4–8px` for inputs/buttons, `12–16px` for cards) — *not* big bubbly rounded everything.
- Sticky header that condenses on scroll; mega-menu with preview imagery.

## 7. Components to design

Hero (full-bleed w/ motion) · service mega-menu · service hub cards · climate-benefit strip · materials/options grid · process timeline · filterable project gallery + case-study card · testimonial slider · FAQ accordion · CTA band · quote form (multi-field) · sticky mobile CTA bar (Call / WhatsApp / Quote) · footer.

## 8. Do / Don't (quick reference)

✅ **Do:** bespoke type pairing · one accent color used sparingly · real photography · generous whitespace · custom line icons · purposeful scroll motion · strong typographic hierarchy · mobile-first.

❌ **Don't:** Inter/Roboto defaults · gradient-purple "AI" hero · emoji or stock outline icons in rounded squares · dense boilerplate blocks · big bubbly rounded corners everywhere · excessive drop shadows · auto-playing video/audio · keyword-stuffed headings.

## 9. Deliverables expected from design
- High-fidelity desktop + mobile mockups for: Home, a Service hub, a Service detail, Projects, About, Contact.
- A mini style guide (type scale, color tokens, spacing, button states, motion notes).
- Component states (hover/focus/active) — accessibility-ready.
