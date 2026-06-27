# wewomen-update

A modernization concept for the **wewomen.fit** homepage — a "refresh" that keeps the brand's equity (the logo and the copy) and lifts the weight and date off the current execution. Skinned to the **canonical WeWomen brand** (Mercado serif, green `#2E5650`, Montserrat, coral `#E07A5F`) so it matches `free-library.html` and the funnel mockup — the live Lovable homepage is still on the older Playfair + `#004D4D` teal look.

Self-contained: open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What changed vs. the live site

| | Live site | This concept |
|---|---|---|
| Layout | Centered single column, every section the same | Asymmetric editorial — hero split, alternating offer rows, event "ticket", featured-guide library |
| Section labels | Uppercase coral eyebrow over **every** section | Removed; headlines carry the page, one deliberate brand kicker in the hero |
| Display font | Playfair Display | **Mercado** (the brand's own serif — matches the other pages) |
| Body font | Nunito Sans | **Montserrat** |
| Green / coral | `#004D4D` / `#E78B7E` (live) | `#2E5650` / `#E07A5F` (canonical brand) |
| Imagery | Hero only; ~80% text on cream | Real photography in every section |
| Contrast | Coral text/links/eyebrows fail WCAG (~2.4:1) | All text ≥ 4.5:1 — verified AA |
| Motion | None | Purposeful reveals + parallax, reduced-motion safe |

See `PRODUCT.md` (strategy) and `DESIGN.md` (visual system, full token table).

## Images

- **Brand assets** (hero, group photo, logo) are loaded from the live `wewomen.fit` CDN — they're the real brand photography.
- **Stock photos** (the lifter, the two class shots, nutrition, the closing field) are verified Unsplash images standing in for sections that currently have none. **Swap these for WeWomen's own photography before going live.**

## Status

Homepage only, as a direction to react to. Next: subpages (For You / Corporate / Resources), real photography, and a build/deploy path.
