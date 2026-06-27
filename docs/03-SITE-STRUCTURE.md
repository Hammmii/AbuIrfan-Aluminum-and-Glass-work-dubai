# Site Structure — Abu Irfan for Glass & Aluminum Co.

> Proposed information architecture & URL map. Final scope to confirm with client.
> Principle: **focus & depth over sprawl.** We lead with Glass & Aluminum (the core business). Civil Works & HVAC are secondary (verify the client even offers these before building pages for them).

## Navigation (header mega-menu)

```
Home
Glass Solutions              (hub: /glass-solutions/)
 ├─ Glass Rooms              /glass-rooms/
 ├─ Aluminium Pergolas       /aluminium-pergolas/
 ├─ Glass Skylights          /glass-skylights/
 ├─ Conservatory Rooms       /conservatory-rooms/
 └─ Sun Rooms                /sun-rooms/
Aluminum & Glazing           (hub: /aluminum-glazing/)
 ├─ Doors & Windows          /doors-and-windows/
 │    ├─ Sliding Doors       /sliding-doors/
 │    ├─ Folding / Bi-fold  /folding-doors/
 │    └─ Telescopic Doors    /telescopic-doors/
 ├─ Glass Partitions         /glass-partitions/   (incl. smart glass)
 ├─ Curtain Walls & Facades  /curtain-walls/
 ├─ Glass Types              /glass-types/        (laminated, double-glazed, toughened)
 ├─ ACP Cladding             /acp-cladding/
 ├─ Aluminum Systems         /aluminum-systems/   (thermal-break, dual-color)
 ├─ Staircase & Balustrade   /staircase-glass/
 └─ Fly & Mesh Screens       /mesh-screens/
Projects                     /projects/
About                        /about/
Blogs                        /blog/
Contact                      /contact/
```

> Consolidations vs. the competitor: merged overlapping "Doors & Windows" legacy pages; grouped glass types under one hub; grouped aluminum tech (thermal-break, dual-color) under one page. Cleaner, less duplicate-content risk.

## Footer

- Company: About, Projects, Blog, Contact, Careers (hr@abuirfan.com)
- Services: the hubs above
- Legal: Privacy Policy, Terms & Conditions
- Contact block: phone, 3 emails, address(es), social icons
- CTA: "Request a free quote" + WhatsApp button

## Secondary services (confirm before building)

If the client does **not** actually offer Civil Works / HVAC, **drop these** (do not copy the competitor's bloated catalog). If they do, keep them condensed:

```
Fit-Out & Civil Works   (single hub: /fit-out-and-civil-works/)
 ├─ Construction & Renovation
 ├─ Tiling & Flooring
 ├─ Electrical Works
 ├─ Painting
 └─ Landscaping
HVAC (optional)         (single hub: /hvac/)
 ├─ Ducted / Ductless / Window / Smart AC
```

Recommendation: for v1, build **one combined "Fit-Out & Civil Works" hub** and **one "HVAC" hub** rather than 10 thin pages — then split into sub-pages only if SEO demand justifies it.

## Full proposed sitemap (v1, core)

| # | Page | URL | Priority |
|---|---|---|---|
| 1 | Home | `/` | P0 |
| 2 | Glass Solutions hub | `/glass-solutions/` | P0 |
| 3 | Glass Rooms | `/glass-rooms/` | P0 |
| 4 | Aluminium Pergolas | `/aluminium-pergolas/` | P1 |
| 5 | Glass Skylights | `/glass-skylights/` | P1 |
| 6 | Conservatory Rooms | `/conservatory-rooms/` | P2 |
| 7 | Sun Rooms | `/sun-rooms/` | P2 |
| 8 | Aluminum & Glazing hub | `/aluminum-glazing/` | P0 |
| 9 | Doors & Windows | `/doors-and-windows/` | P0 |
| 10 | Sliding Doors | `/sliding-doors/` | P1 |
| 11 | Folding / Bi-fold Doors | `/folding-doors/` | P1 |
| 12 | Telescopic Doors | `/telescopic-doors/` | P1 |
| 13 | Glass Partitions | `/glass-partitions/` | P0 |
| 14 | Curtain Walls & Facades | `/curtain-walls/` | P1 |
| 15 | Glass Types | `/glass-types/` | P1 |
| 16 | ACP Cladding | `/acp-cladding/` | P1 |
| 17 | Aluminum Systems | `/aluminum-systems/` | P1 |
| 18 | Staircase & Balustrade | `/staircase-glass/` | P2 |
| 19 | Mesh Screens | `/mesh-screens/` | P2 |
| 20 | Projects | `/projects/` | P0 |
| 21 | About | `/about/` | P0 |
| 22 | Blog | `/blog/` | P1 |
| 23 | Contact | `/contact/` | P0 |
| 24 | Privacy Policy | `/privacy-policy/` | P1 |
| 25 | Terms & Conditions | `/terms/` | P1 |
| 26 | Thank-you (post-form) | `/thank-you/` | P2 |
| 27–31 | Fit-Out & Civil Works hub + sub | `/fit-out-and-civil-works/` (+ subs) | P3 (if offered) |
| 32 | HVAC hub | `/hvac/` | P3 (if offered) |

**Core scope: ~25 pages** (vs the competitor's 40) — fewer, deeper, higher quality. Each P0/P1 page follows the standard section template below.

## Standard service-page template (every page gets this)

1. Hero — H1, subhead, 2 CTAs (Quote / WhatsApp), background imagery
2. Overview — what it is + who it's for (1 short paragraph)
3. Scope / what's included (cards or list)
4. Why it matters in Dubai (climate callouts: heat, dust, UV, humidity)
5. Materials & options (glass/aluminum types, finishes)
6. Our process (consult → design → fabricate → install → handover)
7. Project showcase (service-filtered gallery)
8. Testimonial (relevant to this service)
9. FAQ accordion (6–8 Qs)
10. CTA band (Quote + phone + WhatsApp)

## URL rules
- Lowercase, kebab-case, trailing slash, no stopwords, no typos.
- Group under hubs; breadcrumbs on every sub-page.
- Redirects planned for any future restructures.
