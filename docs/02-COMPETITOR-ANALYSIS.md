# Competitor Analysis — elegantrooms.ae

> Full teardown of the reference site, plus the result of the content-filter task.

## A. The "Create Your Dream Spaces" content filter — RESULT

You asked to **filter out the pages that contain this content block**:

> *"Create Your Dream Spaces with Elegant Glass Rooms Dubai … Why Glass Rooms Are Ideal for Dubai Climate (High temperatures 40°C+ / Dust and sand / indoor-outdoor living / Year-round usability) … Types Of Glass Rooms … Benefits of glass room in dubai … Custom Glass Room Designs for Dubai Villas … Get an Instant Quote …"*

### Answer: exactly ONE page contains that content.

| Page | URL | Contains the exact block? |
|---|---|---|
| **Glass Rooms Dubai** | `/glass-room-services-dubai/` | ✅ **YES — full match** |
| Sun Room | `/sun-room/` | ❌ has its own hero |
| Conservatory Room | `/conservatory-room/` | ❌ "Stylish Conservatory Room in Dubai" |
| Glass Skylights | `/glass-skylights/` | ❌ "Create Your Perfect Glass Skylight in Dubai" |
| Aluminium Pergolas | `/pergolas-dubai/` | ❌ "Perfect Aluminium Pergola in Dubai" |
| Patio Rooms | `/patio-rooms/` | ❌ "Get a Dream Patio Room in Dubai" |

**Conclusion:** The "Create Your Dream Spaces with Elegant Glass Rooms Dubai" template is the **Glass Room parent/hub page only**. Every other Glass-Room sub-service uses its own distinct hero and intro. We will use this hub-page structure as the model for our Glass Room landing page, then build dedicated, deeper pages for each sub-service.

---

## B. Site at a glance

| | |
|---|---|
| Pages (static) | **40** |
| Blog posts | **16** |
| Total indexed URLs | **56** |
| Stack | WordPress 6.9 + Elementor 4.0 + Hello Elementor theme |
| Fonts | Outfit, Nunito Sans, Roboto, Roboto Slab |
| Plugins (visible) | Elementor Pro, MetForm, Easy Accordion, Advanced Marquee, Trustindex reviews |
| Sitemaps | `post-sitemap.xml`, `page-sitemap.xml` |

## C. Information architecture (their mega-menu)

```
Home
Glass Room
 ├─ Glass Room (hub)        /glass-room-services-dubai/
 ├─ Sun Room                /sun-room/
 ├─ Conservatory Room       /conservatory-room/
 ├─ Aluminium Pergolas      /pergolas-dubai/
 ├─ Glass Skylights         /glass-skylights/
 └─ Patio Rooms             /patio-rooms/
Aluminium & Glass Works
 ├─ Aluminium Glass Works (hub)   /aluminium-glass-works-dubai/
 ├─ Glass Doors & Windows         /glass-doors-and-windows/
 ├─ Glass Partition               /glass-partition/
 ├─ Doors & Windows               /doors-windows/          (legacy/overlap)
 ├─ Sliding Doors                 /sliding-doors/
 ├─ Frameless Folding Doors       /frameless-folding-doors/
 ├─ Bi-Folding / Stackable Doors  /stackable-doors/
 ├─ Telescopic Door               /telescopic-door/
 ├─ Curtain Walls                 /curtain-walls/
 ├─ Laminated Glass               /laminated-glass/
 ├─ Double Glazed Glass           /double-glazed-glass/
 ├─ Staircase Glass               /staircase-glass/
 ├─ Smart Glass                   /smart-glass/
 ├─ ACP Cladding                  /acp-cladding/
 ├─ Dual Color Aluminum           /dual-color-aluminum/
 ├─ Thermal Break Aluminium       /thermal-break-aluminium/
 ├─ Fly Screen                    /fly-screen/
 └─ Pleated Mesh                  /pleated-mesh-versatile-mesh-solutions/
Civil Works
 ├─ Construction Works      /construction-works/
 ├─ Tiles & Floor           /tiles-and-floor-installation/
 ├─ Electrical Works        /electrical-works-fitting-and-fixing/
 ├─ Painting Works          /painting-works/
 └─ Landscaping             /landscaping/
HVAC
 ├─ Ductless AC             /ductless-ac-installation/
 ├─ Duct Type AC            /duct-types-ac-installation/
 ├─ Window AC               /window-ac-installation/
 ├─ Smart AC                /smart-ac-installation/
 └─ Weather Control         /all-types-of-weather-control-dervices/  (typo in URL)
Other: Blogs, Projects, Contact Us, About Us, Privacy Policy
```

## D. What they do well (match these)

1. **Clear service taxonomy** in a deep mega-menu — covers the full glass & aluminum scope.
2. **Glass Room hub page** with a strong narrative (definition → why-for-Dubai → types → benefits → custom → process → FAQ). Good skeleton to expand.
3. **FAQ accordion** on the hub page — good for SEO and user trust.
4. **Multiple CTAs** (Call / WhatsApp / Free Quote) and a floating quote popup.
5. **Project gallery** on every page and a dedicated Projects page.

## E. What they do poorly (our opportunities — exploit all)

| # | Weakness | Our move |
|---|---|---|
| 1 | **Thin content** — most service pages have only 1–3 unique sentences. | Each service page: full definition, scope, materials, use-cases, process, specs, FAQ (6–8 Qs). |
| 2 | **No FAQs on 35+ pages** (only 2 hub pages have them). | FAQ accordion on every service page (SEO + trust). |
| 3 | **Heavy boilerplate** — identical 11 Google reviews, identical gallery, identical "Why Choose" tiles on every page. | Unique proof per page; rotate testimonials; curated gallery per service. |
| 4 | **Copy-paste bugs** — e.g. ACP-cladding intro reuses conservatory copy; Construction page describes telescopic doors; duplicate "Premium Materials" headings; URL typo "dervices". | Clean, correct, page-specific copy. |
| 5 | **Keyword stuffing** & grammar errors throughout. | Natural, expert, well-edited copy. |
| 6 | **No real proof** — no stats, no team, no founding story, no certifications. | About page with real story, stats, team, certifications, process. |
| 7 | **Projects page is an unfiltered infinite image scroll** with SEO alt-text captions. | Filterable gallery (by category) → clickable case studies (location, scope, materials, before/after). |
| 8 | **No embedded Google Map** on contact page; quote form is only a popup. | Real on-page contact form + embedded map(s) + WhatsApp deep links. |
| 9 | **Generic design** — default Google Fonts, basic Elementor look, AI-template feel. | Bespoke design system: distinctive type, refined palette, custom motion (see `05-DESIGN-BRIEF.md`). |
| 10 | **Two inconsistent template generations** across pages (legacy vs new). | One unified, consistent design system applied everywhere. |

## F. Content gaps we can fill (quick wins for SEO + authority)
- Glass vs. aluminum material guides, UAE climate/thermal-break explainer, approvals & permits for Dubai, cost-factors pages, "how we work" process, FAQ library, glossary.
- Local pages: "Glass & Aluminum in Jebel Ali / Port Saeed / Dubai" for local SEO.

## G. Reference content
The harvested service-page content (definitions, scope, selling points, FAQ questions) is in `04-CONTENT-REFERENCE.md` — use it as raw input, rewrite for Abu Irfan, and expand.
