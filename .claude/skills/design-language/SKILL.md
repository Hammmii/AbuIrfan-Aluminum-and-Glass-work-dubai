---
name: design-language
description: Enforce an impeccable, cohesive UI design language — strict 4px/8px spacing grid, a unified semantic color palette, and WCAG AAA-accessible contrast. Apply when building or reviewing any UI/layout.
---

# Impeccable Design Language

Enforce strict spacing, typography, and cohesive UI styling across the whole interface.

## Spacing
- Always use a strict 4px / 8px grid scale (`space-y-2`, `space-y-4`, `gap-4`, `p-4`, `p-8`).
- Never use arbitrary off-grid values (e.g. `p-5`, `mt-7`, `13px`).
- Keep vertical rhythm consistent within and between sections.

## Color
- Stick to a single unified semantic palette: Primary, Secondary, Muted, Destructive, and Border.
- Reference design tokens / CSS variables, not raw hex, so theming stays consistent.
- Never introduce one-off colors that duplicate an existing token.

## Accessibility
- All text must meet WCAG **AAA** contrast (7:1 for body text; 4.5:1 minimum for large text).
- Validate contrast in both light and dark themes.
- Never ship a layout without flex/grid wrappers — every component must be responsive by default.
