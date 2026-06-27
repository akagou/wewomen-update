# wewomen-update

**Live:** https://akagou.github.io/wewomen-update/

A modernization concept for the full **wewomen.fit** site — a "refresh" that keeps the brand's equity (the logo and the copy) and lifts the weight and date off the current execution. Uses the **canonical WeWomen colours** (green `#2E5650`, coral `#E07A5F`, cream) so it matches `free-library.html` and the funnel mockup. Display type is **Hedvig Letters Serif** + **Montserrat** body (Mercado was tried and cut as too decorative; the free-library page still runs Mercado, so propagate the new display face there for full consistency). The live Lovable homepage is still on the older Playfair + `#004D4D` teal look.

Self-contained: open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What changed vs. the live site

| | Live site | This concept |
|---|---|---|
| Layout | Centered single column, every section the same | Asymmetric editorial — hero split, alternating offer rows, event "ticket", featured-guide library |
| Section labels | Uppercase coral eyebrow over **every** section | Removed; headlines carry the page, one deliberate brand kicker in the hero |
| Display font | Playfair Display | **Hedvig Letters Serif** (warm, modern, credible) |
| Body font | Nunito Sans | **Figtree** (humanist text sans, built for reading) |
| Green / coral | `#004D4D` / `#E78B7E` (live) | `#1B5A4C` / `#ED7A57` (refined, brighter) |
| Imagery | Hero only; ~80% text on cream | Real photography in every section |
| Contrast | Coral text/links/eyebrows fail WCAG (~2.4:1) | All text ≥ 4.5:1 — verified AA |
| Motion | None | Purposeful reveals + parallax, reduced-motion safe |

See `PRODUCT.md` (strategy) and `DESIGN.md` (visual system, full token table).

## Images

- **Brand assets** (hero, group photo, logo) are loaded from the live `wewomen.fit` CDN — they're the real brand photography.
- **Stock photos** (the lifter, the two class shots, nutrition, the closing field) are verified Unsplash images standing in for sections that currently have none. **Swap these for WeWomen's own photography before going live.**

## Pages & architecture

Full multi-page static site — every page from the live site, rebuilt in the new system with all its content preserved:

- `index.html` — home
- `for-you.html` — event, programmes, in-person classes, testimonials, 1:1 coaching
- `corporate.html` — formats, workshop topics, impact, KLM testimonials
- `resources.html` — unlock band, filterable resource library
- `about.html` — story, mission, Sarah & Stef bios
- `contact.html` — contact methods + form

Shared `styles.css` (design system + components + floating-accent system) and `app.js` (header, mobile menu, scroll reveals, parallax, filters, form feedback) across all pages. Decorative floating shapes (rings, dots, blobs) recur page-to-page for a connected feel; every page verified at 1440 / 390 with no overflow, no console errors, WCAG AA contrast, and `prefers-reduced-motion` honoured.

Deployed to GitHub Pages from `main` (`.nojekyll`, relative asset paths).

## Status

Shipped. Next: swap the stock photos for WeWomen's own, and wire the forms to a real backend (currently front-end success states).
