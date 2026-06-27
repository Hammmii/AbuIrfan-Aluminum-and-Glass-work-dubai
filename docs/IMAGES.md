# Images to supply

The site ships with **zero required image files** — every visual currently uses
on-brand gradient + mullion placeholders or custom icons, so it looks complete
as-is. The list below is the **minimal** set of real photos to drop in when
you have them. Keep counts low on purpose (each is one file to source).

> All photos: bright, sharp, architectural — glass & aluminum, Dubai context.
> Drop into `/public/images/...` and update the matching `image` field in
> `src/data/*.ts`. Recommended formats: **WebP** or **AVIF**, ~1600px wide.

## Priority (Home page)

| # | Where | Path to create | Data field |
|---|---|---|---|
| 1 | Project: Beachfront Glass Room | `/public/images/projects/jbr-glass-room.jpg` | `projects[0].image` |
| 2 | Project: Villa Rooftop Pergola | `/public/images/projects/palm-pergola.jpg` | `projects[1].image` |
| 3 | Project: Office Tower Curtain Wall | `/public/images/projects/business-bay-facade.jpg` | `projects[2].image` |
| 4 | Project: Frameless Office Partitions | `/public/images/projects/difc-partitions.jpg` | `projects[3].image` |

That's **4 photos** to make the Projects showcase use real imagery.
(The hero uses a CSS glass-facade composition — no photo needed.)

## Optional (later pages)

- **About** — 1 workshop / fabrication shot + 1 team shot (when the About page is built).
- **Service detail pages** — 1 hero photo per service (7 total), only if you want imagery on those pages.
- **OG/social image** — 1 × 1200×630 for link previews (`/public/og.png`).

## Logo

- Vector logo (SVG/AI) + PNG variants + favicon. Until supplied, the header &
  footer use the typographic "ABU IRFAN" lockup.
