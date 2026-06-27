# wewomen-update

A modernization concept for the **wewomen.fit** homepage — a "refresh" that keeps the brand's existing equity (teal `#004D4D` + coral `#E78B7E`, the Playfair display serif, the logo, and the copy) and lifts the weight and date off the current execution.

Self-contained: open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What changed vs. the live site

| | Live site | This concept |
|---|---|---|
| Layout | Centered single column, every section the same | Asymmetric editorial — hero split, alternating offer rows, event "ticket", featured-guide library |
| Section labels | Uppercase coral eyebrow over **every** section | Removed; headlines carry the page, one deliberate brand kicker in the hero |
| Body font | Nunito Sans | **Hanken Grotesk** (Playfair kept for display) |
| Background | Warm cream `#F9F8F6` | Fresh near-white `#F9FCFC` |
| Imagery | Hero only; ~80% text on cream | Real photography in every section |
| Contrast | Coral text/links/eyebrows fail WCAG (~2.4:1) | All text ≥ 4.5:1 — verified AA |
| Motion | None | Purposeful reveals + parallax, reduced-motion safe |

See `PRODUCT.md` (strategy) and `DESIGN.md` (visual system, full token table).

## Images

- **Brand assets** (hero, group photo, logo) are loaded from the live `wewomen.fit` CDN — they're the real brand photography.
- **Stock photos** (the lifter, the two class shots, nutrition, the closing field) are verified Unsplash images standing in for sections that currently have none. **Swap these for WeWomen's own photography before going live.**

## Status

Homepage only, as a direction to react to. Next: subpages (For You / Corporate / Resources), real photography, and a build/deploy path.
