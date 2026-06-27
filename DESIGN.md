# Design

The redesign **keeps the brand's equity** and modernizes everything around it: asymmetric editorial layouts (no centered monotony), real photography below the fold, fixed contrast, and purposeful motion. It is skinned to the **canonical WeWomen brand** — Mercado serif, green `#2E5650`, Montserrat, coral `#E07A5F` — so it matches `free-library.html` and the funnel mockup, NOT the older live Lovable homepage (which still runs Playfair + `#004D4D` teal). The goal is "they redesigned it," not "is this still the same brand?"

## Theme

Light, warm, editorial. Brand **cream** canvas (`#FAF8F4`), deep **green** as the ink and structural colour, **coral** as the single energising accent, with soft sage and warm bands for rhythm. Scene: a woman reading on her phone in good daylight — calm, credible, warmth carried by photography and the coral, not by visual noise.

## Color

Canonical WeWomen tokens (shared with the free-library + funnel pages). Strategy: **restrained** — green + neutral surfaces carry the page, coral is the ≤10% accent. Green goes full-bleed for two committed bands (event surface, footer).

| Token | Value | Role |
|---|---|---|
| `--bg` | `#FAF8F4` | Page background — brand cream |
| `--surface` | `#EEF2EF` | Alt section bands — soft sage |
| `--surface-warm` | `#F7ECE4` | Warm accent band (session replay) |
| `--green` | `#2E5650` | Brand green — headings, primary buttons, structure |
| `--green-deep` | `#234740` | Footer / deep bands |
| `--green-900` | `#1C3A34` | Darkest — text on coral |
| `--ink` | `#2C3531` | Heading/strong text (~11:1) |
| `--ink-soft` | `#4D5B5E` | Body text (~6.7:1) |
| `--coral` | `#E07A5F` | Accent — fills, shapes, underlines, hover |
| `--rose` | `#B04646` | Coral **as text/links** on light — darkened to pass AA (~5.2:1) |
| `--cream` | `#FAF8F4` | Text on green/dark |

Per-category accents (matching the free-library library): Nutrition `#A8442F`, Movement `#8A6D2E`, Stress&Sleep `#4D6788`, Recovery/Hormone `#2E5650`.

**Contrast rules (load-bearing — the live site fails these):**
- Coral is never used as body text or links on a light background. For coral-coloured text use `--rose`.
- Coral buttons use `--green-900` text (~4.2:1, passes large-text AA), never white (white-on-coral is ~3:1).
- Primary buttons are green fill + `--cream` text (~7.7:1).

## Typography

Contrast-axis pairing: a characterful display serif against a clean geometric-humanist sans.

- **Display / headings:** **Mercado** (the brand's custom serif, bundled at `fonts/Mercado.otf`). Used with restraint: one strong headline per section, single colour, `letter-spacing: -0.02em`, `text-wrap: balance`. Emphasis comes from a coral underline wash, not a second colour. (This replaces the live site's Playfair Display — the most dated element — and matches the brand's other pages.)
- **Body / UI:** **Montserrat** (400–700). Carries all body, labels, nav, buttons. Body max width 65ch; `text-wrap: pretty` on long prose.
- **Scale:** fluid `clamp()`, ratio ≈1.25. H1 `clamp(2.6rem, 6vw, 5rem)` (under the 6rem ceiling). Section headings `clamp(2rem, 4vw, 3.25rem)`.
- No repeating uppercase eyebrow over sections. Where a section label helps, it is integrated (a coral tick + short label inline), not stamped above every heading.

## Layout

- Mobile-first. Content max-width ~1180px; generous, **consistent** section rhythm via `--section-y: clamp(5rem, 10vw, 8.5rem)` (fixes the previous random gaps).
- **Asymmetric editorial** is the default, replacing the centered single column: hero split, alternating image/text rows for the two offers, an offset overlapping testimonial, an event "ticket" banner, a featured + list layout for the guide library.
- Cards used only where a catalog genuinely calls for it (the free-guide library), and even there sizes are varied (one featured + compact list) to avoid an identical grid.
- Spacing, radius, shadow, and z-index are all tokenised scales.

## Components

- **Buttons:** primary (teal fill / cream text), warm (coral fill / teal-900 text), and text-link (coral-ink with an animated underline). Min height 44px, `:focus-visible` ring.
- **Header:** transparent over hero, solidifies to `--bg` + subtle border on scroll; coral "Live · Jul 2" pill; mobile `<dialog>` menu.
- **Event banner:** date block (Playfair numerals) + details + reserve CTA, on `--surface`.
- **Editorial offer rows:** image in a rounded frame with a soft coral/teal shape behind, alternating side.
- **Testimonial:** large decorative coral quote mark + Playfair pull-quote, overlapping brand photo.
- **Guide library:** one featured guide + a compact list of the rest, real topic imagery.
- **Newsletter band:** atmospheric photo + teal scrim, high-contrast inputs with visible labels.

## Imagery

Authentic photography of real women is the primary warming device. The brand's own assets (`hero`, `group-laughing`, logo) lead; verified stock fills sections that currently have none. All decorative shapes are CSS; no colored block ever stands in for a photo. Alt text is written in brand voice.

## Motion

Purposeful, restrained, accessibility-first. A subtle first-load settle on the hero; on-scroll reveals that **enhance already-visible content** (content is fully visible without JS); hover micro-interactions (button lift, underline grow, image scale). Gentle hero parallax. Every effect has a `prefers-reduced-motion: reduce` path that crossfades or disables. Easing: ease-out (quart/expo); no bounce.
