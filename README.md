# Abu Irfan — Glass & Aluminum · Website

Premium marketing website for **ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST.**, Dubai. Design concept: **"Architectural Clarity"** — light, transparent, precisely engineered, quietly premium.

> **Status:** Phase 0 (foundation) complete. Home page proof-of-concept in progress.
> **Scope (v1):** Home page first, then scale to Services / Projects / About / Contact.

## Stack

Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS v3 · Framer Motion · GSAP + ScrollTrigger · Lenis · Radix UI · self-hosted Clash Display + Satoshi.

## Getting started

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

Requires Node 18.17+.

## Project structure

```
src/
├── app/                  # Next.js App Router (layout, page, globals, fonts)
├── components/
│   ├── ui/               # atomic components (Button, Card, …)
│   ├── layout/           # Header, Footer, MegaMenu, MobileNav
│   ├── sections/         # page-level section blocks
│   ├── motion/           # Reveal, SmoothScroll (Lenis+GSAP)
│   └── icons/            # custom 1.5px monoline SVG system
├── hooks/                # useReducedMotion, useMagneticHover
├── lib/                  # tokens, animations, cn, site config
└── data/                 # services, projects, FAQs (content)
public/fonts/             # self-hosted woff2 (Clash Display, Satoshi)
docs/                     # brand briefs, competitor analysis, design system
PROJECT_PLAN.md           # full production blueprint (single source of truth)
CLAUDE.md · RULES.md · AGENTS.md   # operating rules
```

## Design system

- **Type:** Clash Display (display) · Satoshi (body) · Instrument Serif (pull-quotes)
- **Brand:** deep teal `#143B49` / interactive `#1E6E86` · bronze accent `#B0894F` (sparingly) · Call `#2E7D5B`
- **Motion:** reveal `0.45s` `cubic-bezier(0.22,1,0.36,1)`, 60ms stagger, parallax ≤0.15, all gated on `prefers-reduced-motion`

All tokens live in `src/lib/tokens.ts` and mirror the CSS variables in `src/app/globals.css`.

## Documentation

| Doc | Purpose |
|---|---|
| `PROJECT_PLAN.md` | Production blueprint — phases, tokens, components, build sequence |
| `docs/00–06` | Overview, brand, competitors, site structure, content, design brief, UI prompt |
| `CLAUDE.md` | Operating manual + rules |
| `RULES.md` | Hard design + code constraints |
| `AGENTS.md` | Ownership + model strategy |

## Git

Remote: `https://github.com/Hammmii/AbuIrfan-Aluminum-and-Glass-work-dubai.git`
Conventional Commits, pushed at every milestone. See `CLAUDE.md` → Git & GitHub workflow.
