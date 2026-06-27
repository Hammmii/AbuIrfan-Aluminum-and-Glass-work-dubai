# RULES.md — Hard Constraints

Non-negotiable design + code constraints. Every component must pass these before it ships.

## Design constraints

- **COLOR:** Only tokens from the palette in `src/lib/tokens.ts` (mirrored as CSS vars in `globals.css`). No opacity hacks to invent new colors. No hardcoded hex in components.
- **TYPOGRAPHY:** Clash Display (headings) + Satoshi (body) + Instrument Serif (pull-quotes only). Self-hosted via `@font-face`.
- **RADII:** inputs `4px`, buttons `6px`, cards `12px`, card-large `16px`. Full pill (`999px`) is the Call button only.
- **SHADOWS:** max one layer, max 12px blur. No stacked shadows.
- **GLASSMORPHISM:** `backdrop-blur` only over imagery / dark bands. NEVER on white / light / text-heavy areas.
- **ICONS:** only custom SVGs in `src/components/icons/`. 1.5px stroke, `currentColor`, `viewBox="0 0 24 24"`, no fill. No Lucide / Font Awesome / emoji.
- **SPACING:** 4px base grid. Section padding-y: `96px` desktop / `48px` mobile (minimum).
- **IMAGERY:** real architectural photography only (placeholder stock until client supplies real assets).

## Animation constraints

- Scroll reveal: opacity `0→1`, translateY `24px→0`, `0.45s`, `cubic-bezier(0.22,1,0.36,1)`.
- Stagger children: `0.06s` between items.
- Parallax depth: max `0.12–0.15` factor. Never dizzying.
- Hover transitions: max `300ms`. No spring physics on hover (too bouncy).
- Count-up stats: triggered once on viewport entry, `1.8s`.
- GSAP: always wrap in `gsap.context()` and `kill()` / revert on unmount.
- Every animation has a reduced-motion fallback (instant / static).
- **NO:** bounce easing, spin animations, `scale > 1.05` on hover, everything animating at once.

## Code constraints

- TypeScript strict mode. No implicit `any`, no `any` types.
- Zero inline styles except dynamically-calculated transforms (parallax, magnetic).
- Tailwind: prefer utility classes; `@apply` only for patterns reused >3 times.
- Accessibility: `aria-label` on icon-only buttons; `role="region"` on major sections; semantic landmarks.
- Performance: Lighthouse ≥ 90 all categories. Images WebP/AVIF via `next/image`; lazy below fold; LCP image `priority`.
- No CSS-in-JS. No styled-components. Tailwind + CSS only.

## Git constraints (client requirement)

- Commit at every phase / milestone; keep `main` green and buildable.
- Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`).
- Push to `origin` after each meaningful commit.
- Never commit secrets or `.env*.local`.
- Keep the tree organised and docs current.

## Quality checklist (per component)

- [ ] Colors from tokens only
- [ ] Typography from approved stack
- [ ] Spacing on 4px grid
- [ ] Hover + focus-visible states implemented and tested
- [ ] Entry animation + reduced-motion fallback
- [ ] Reviewed at 375px (mobile)
- [ ] No `any`, no hardcoded hex, no inline styles (except dynamic transforms)
- [ ] `next/image` used for imagery
