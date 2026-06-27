# CLAUDE.md — Abu Irfan Glass & Aluminum Website

> Read this first, every session. It is the operating manual for anyone (human or agent) working on this codebase.

## Project context

Premium, information-led **marketing website** for **ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST.** — a Dubai-based glass & aluminum design, fabrication, installation & maintenance company. This is **not** e-commerce. Goals: establish premium credibility, capture qualified leads (quote / call), rank locally.

**North Star — "Architectural Clarity."** The site should feel like the product: light passing through precisely engineered glass, brushed-metal edges, quiet confidence. No noise, no hype, just craft.

Full briefs live in `PROJECT_PLAN.md` and `docs/`. This file is the rulebook.

## Stack

- **Next.js 14** (App Router) · **TypeScript** (strict) · **Tailwind CSS v3** (extend, never override core)
- **Framer Motion** (component animation) · **GSAP + ScrollTrigger** (scroll choreography) · **Lenis** (smooth scroll)
- **Radix UI** primitives (Dialog, Accordion, NavigationMenu) · `clsx` + `tailwind-merge`
- Fonts self-hosted: **Clash Display** (display) + **Satoshi** (body) via `@font-face` in `src/app/_fonts.css`; **Instrument Serif** via `next/font/google`.

## Non-negotiable rules

1. **NEVER** use Inter, Roboto, Poppins, Montserrat, Nunito, or Open Sans as primary type.
2. **NEVER** use Lucide / Font Awesome outline icons in rounded-square containers. **NEVER** add emoji to UI copy.
3. **ALL** colors come from tokens (`src/lib/tokens.ts` ↔ CSS vars in `globals.css` ↔ Tailwind theme). No hardcoded hex in components.
4. **ALL** animations must check `useReducedMotion()` and disable non-essential motion when set.
5. Every interactive element has a visible `:focus-visible` state (2px `--color-brand-bright` outline).
6. Contrast: body text ≥ 4.5:1, large text ≥ 3:1.
7. Mobile-first: build the mobile layout, then enhance for desktop.
8. TypeScript strict, no `any`. No inline styles except dynamically-calculated transforms (parallax).
9. `next/image` for all images (explicit width/height or `fill` + `sizes`).
10. A phone **Call** CTA (`tel:`) + "Request a free quote" reachable from every page. (WhatsApp removed per client direction — no messaging integration.)

## File creation rules

- Components: `PascalCase.tsx` in `src/components/<category>/` (`ui/`, `layout/`, `sections/`, `motion/`, `icons/`).
- Hooks: `camelCase.ts` in `src/hooks/`.
- Sections: `<Page><Section>.tsx` (e.g. `HomeHero.tsx`).
- Never create an animated component without exporting / wiring its reduced-motion fallback.

## Git & GitHub workflow  ⭐ (client requirement)

This project is tracked in GitHub and **must be kept in sync with frequent, organised commits.**

- **Remote:** `https://github.com/Hammmii/AbuIrfan-Aluminum-and-Glass-work-dubai.git` (origin)
- **Commit cadence:** commit at every phase / milestone and after each meaningful, self-contained change (a finished component, a completed section, a verified fix). Never leave the repo in a broken state on `main`.
- **Conventional Commits** format: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:` — e.g. `feat(home): hero section with bronze-sweep CTA`.
- **Push** to `origin` after each commit (or batch of related commits) so GitHub stays current.
- **Branching:** short-lived `feat/*` branches for larger work are welcome; small changes may go straight to `main`.
- **Never commit secrets or `.env*.local`.** Keep `.env.example` for shared keys only.
- Keep the repo **organised**: meaningful commit messages, clean tree, docs current.

## Model strategy

Per client direction: **design direction, token/animation decisions, and code review stay on the strongest model (GLM-5).** **Implementation / boilerplate coding is delegated to Haiku subagents** for speed, then reviewed against `RULES.md` before merging.

## Where to look

- `src/lib/tokens.ts` — every color / type / motion value (before touching any color or type).
- `src/lib/animations.ts` — before writing any animation.
- `src/lib/site.ts` — contact info, nav, deep-link helpers.
- `RULES.md` — hard design + code constraints.
- `AGENTS.md` — who owns what, and the model split.
- `PROJECT_PLAN.md` §10 — current build phase.
