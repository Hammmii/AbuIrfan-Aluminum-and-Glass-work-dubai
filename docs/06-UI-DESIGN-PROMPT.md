# UI Design Prompt — Ready to Paste

> Copy everything in the **block below** (starting at "You are a senior product designer…") into your design AI (Figma AI / v0 / Lovable / Midjourney-for-UI / Claude / etc.). It is self-contained.

---

You are a senior product/brand designer at a top studio. Design a **premium, award-worthy marketing website** for a real client: **"Abu Irfan for Glass & Aluminum Co."** — a Dubai-based specialist that designs, fabricates, and installs glass & aluminum systems (glass rooms, pergolas, skylights, doors & windows, partitions, curtain walls, smart glass, ACP cladding) for villas, commercial buildings, and hospitality across the UAE.

This must look **custom-designed by a studio** — NOT like an Elementor template or "AI-generated" site. Restraint, craft, and confidence over decoration.

## BRAND & TONE
- Company: **Abu Irfan for Glass & Aluminum Co.**
- Personality: **Precise · Premium · Trustworthy**. Calm, architectural, light-filled, engineered.
- Concept: "Architectural clarity" — the site should feel like the product: light, transparent, precisely engineered, quietly premium. Glass + brushed metal, never glass + plastic.
- Voice: clear, expert, concrete (specs/materials), never hype or keyword-stuffed.

## CONTACT INFO TO USE ON THE SITE
- Phone: **+971 4 259 9536**
- Emails: info@abuirfan.com · hr@abuirfan.com · usama@abuirfan.com
- Address: Port Saeed, Jebel Ali, Dubai, UAE
- WhatsApp CTA + "Request a free quote" CTA on every page.

## TYPOGRAPHY (distinctive — NOT default/AI fonts)
Pair a characterful display face with a neutral text face:
- Headlines: **Clash Display** or **Bricolage Grotesque** (bold, tight tracking).
- Body/UI: **Satoshi**, **Hanken Grotesk**, or **Switzer**.
- Optional editorial accent: **Instrument Serif** / **Fraunces** italic for pull-quotes.
- Scale: Hero 72–96px · H1 48–56 · H2 32–40 · H3 24 · Body 16–18. Tabular figures for stats.
- **DO NOT use** Inter, Roboto, Poppins, Montserrat, Nunito, or Open Sans as primary faces.

## COLOR (cool glass + warm metal; one accent used sparingly)
- Ink/text: `#0F1419` · dark bands: `#1B232B`
- Light bg: `#F4F6F8` · surfaces: `#FFFFFF` · glass tint: `#DCE6EC`
- Secondary text/dividers: `#6B7785`
- Primary brand (deep architectural teal): `#143B49` · interactive teal: `#1E6E86`
- Premium metallic accent (sparingly — CTAs, fine details): `#B0894F` bronze
- WhatsApp success: `#2E7D5B`
- All body text ≥ AA contrast. Use glass-morphism (subtle blur + 1px hairline) only over imagery, never on text-heavy areas.

## ICONOGRAPHY & IMAGERY
- NO Font Awesome / Lucide outline icons in rounded squares. NO emoji.
- Custom thin monoline icons (1.5px stroke, consistent radius) or minimal technical line-drawings of real products (sliding-track detail, curtain-wall mullion). Numbered/typographic service cards are also fine.
- Photography: real architectural projects — bright, sharp, glass & aluminum. Generous imagery with parallax. No generic stock faces.

## MOTION (purposeful — light through glass + precision assembly)
- Scroll-reveal (staggered fade/translate-up, ~450ms, ease `cubic-bezier(0.22,1,0.36,1)`).
- Parallax on hero/project imagery; a light-refraction shimmer across glass in the hero.
- Magnetic hover on buttons/cards; bronze "fill-sweep" on primary CTA hover.
- Self-drawing thin metallic section dividers; counting-up stats; an animating line connecting the process timeline.
- Respect `prefers-reduced-motion`.

## LAYOUT
- 12-col grid, ~1280px max, generous gutters & whitespace, sections breathe.
- Editorial asymmetry: alternate image-left/text-right, offset & overlapping cards (not all centered).
- Small consistent radii (4–8px inputs/buttons, 12–16px cards) — not big bubbly corners. Minimal shadows.
- Sticky condensing header with a mega-menu (with small preview imagery per service).
- Mobile-first; sticky mobile CTA bar (Call · WhatsApp · Quote).

## PAGES TO DESIGN (deliver high-fidelity desktop + mobile for each)
1. **Home** — full-bleed hero w/ motion; trust strip (stats); core services grid; "built for the Dubai climate" band (heat 40°C+ · dust/sand · UV · humidity); process timeline (Consult → Design → Fabricate → Install → Handover); filterable project showcase; testimonial slider; FAQ teaser; CTA band.
2. **Service hub** (e.g., Glass Solutions / Aluminum & Glazing) — category hero; sub-service cards; climate callouts; mini showcase; CTA.
3. **Service detail** (e.g., Glass Rooms) — hero; overview; scope cards; why-for-Dubai; materials/options; process; filtered gallery; one testimonial; **FAQ accordion (6–8 Qs)**; CTA band. *(Model the narrative: definition → why ideal for Dubai climate → types → benefits → custom designs → process → FAQ.)*
4. **Projects** — **filterable** gallery (by category) → clickable case-study cards (location, scope, materials, before/after), lightbox.
5. **About** — real story, stats, team/workshop, process, certifications.
6. **Contact** — multi-field quote form (name, email, phone, service, message), embedded Google Map, all 3 emails, phone, WhatsApp deep-link, hours.

## GLOBAL ELEMENTS
- Header: logo, mega-menu, phone, "Free Quote" CTA.
- Footer: company links, services, contact block (phone + 3 emails + address), social, legal (Privacy, Terms).
- Persistent "Free Quote" + WhatsApp actions; floating quote button optional.

## HARD CONSTRAINTS — DO NOT
- No default Inter/Roboto/Geist look, no purple/blue "AI-gradient" hero, no emoji or stock outline-in-rounded-square icons, no dense boilerplate blocks, no big bubbly rounded everything, no heavy drop shadows, no auto-playing audio, no keyword-stuffed headings.

## OUTPUT
- High-fidelity desktop + mobile mockups for all 6 pages.
- A mini style guide: type scale, color tokens, spacing scale, button/input/card states, motion notes.
- Brief rationale (2–3 lines) per page on how the design signals "premium architectural clarity."

Aim for the polish of a high-end architecture studio or premium material brand site.

---

## How to use this prompt

- **For image-gen UI tools** (Midjourney/v0-style): paste the whole block; ask for hero + a service page first, iterate, then the rest.
- **For code-gen tools** (v0/Lovable/Claude/Next.js): paste it and ask for a React + Tailwind + Framer-Motion implementation using the exact tokens above; load Clash Display/Satoshi via Fontshare or Google Fonts CDN.
- **For Figma AI / a human designer:** paste it as the brief; attach `05-DESIGN-BRIEF.md` and the brand logo.
- Keep `05-DESIGN-BRIEF.md` and `03-SITE-STRUCTURE.md` handy to answer follow-up questions.
