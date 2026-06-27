---
name: design-guidelines
description: Web design verification checklist to run before completing any layout change — confirms responsiveness, clear interactive states, and an organic, professional, non-generic result.
---

# Web Design Verification Rules

Before completing any layout change, verify each of the following.

## 1. Fully responsive
- Use `sm:`, `md:`, and `lg:` Tailwind breakpoints systematically.
- Check mobile, tablet, and desktop widths — no horizontal overflow, no broken stacks.
- Images and media scale within their containers.

## 2. Interactive states
- Every interactive element has clear `hover:`, `active:`, and `focus-visible:` states.
- Disabled and loading states are visually distinct from the default.
- Focus rings are visible for keyboard navigation.

## 3. Organic & professional
- The result looks intentional and entirely non-generic (no default-browser look).
- Spacing, alignment, and rhythm are consistent across the section.
- No orphaned or misaligned elements at any breakpoint.
