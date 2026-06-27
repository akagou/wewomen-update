# Design

The redesign **keeps the brand's equity** and modernizes everything around it: asymmetric editorial layouts (no centered monotony), real photography below the fold, fixed contrast, and purposeful motion. It uses the **canonical WeWomen colour palette** (green `#2E5650`, coral `#E07A5F`, cream) shared with `free-library.html` and the funnel mockup. Display type is **Hedvig Letters Serif** — Mercado was tried and cut as too decorative; note the free-library page still runs Mercado, so the display face should be propagated there for full consistency. The goal is "they redesigned it," not "is this still the same brand?"

## Theme

Light, fresh, editorial. A clean off-white canvas (`#F8FBF9`, a whisper of green — replaces the old warm cream), a **richer pine green** as the ink and structure, **coral** as the single energising accent, soft sage and a warm coral band for rhythm. Scene: a woman reading on her phone in good morning light — calm, credible, warmth carried by photography and the coral, not by a beige wash.

## Color

Refined WeWomen palette. Strategy: **restrained** — green + neutral surfaces carry the page, coral is the accent allowed to breathe. Green goes full-bleed for two committed bands (event surface, footer). (Evolves the canonical green/coral: green richened from `#2E5650`, cream → cleaner off-white, and the old brick-rose link collapsed into a deep terracotta of the coral's own hue — one warm family, not two reds.)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#F8FBF9` | Page background — clean fresh off-white |
| `--surface` | `#EAF1ED` | Alt section bands — soft sage |
| `--surface-warm` | `#FBECE4` | Warm coral band (session replay) |
| `--green` | `#1C5046` | Brand green (richer pine) — headings, primary buttons, structure |
| `--green-deep` | `#143A33` | Footer / deep bands |
| `--green-900` | `#0E2B26` | Darkest — text on coral |
| `--ink` | `#21302C` | Heading/strong text (~13:1) |
| `--ink-soft` | `#45585A` | Body text (~7:1) |
| `--coral` | `#E07A5F` | Accent — fills, shapes, underlines, hover |
| `--coral-ink` | `#A8472B` | Coral **as text/links** — deep terracotta, same hue (~5.6:1) |
| `--cream` | `#FAF9F6` | Text on green/dark |

Per-category library accents: Nutrition `#A8442F`, Movement `#8A6D2E`, Stress&Sleep `#4D6788`, Recovery/Hormone `#1C5046`.

**Contrast rules (load-bearing — the live site fails these):**
- Coral is never used as body text or links on a light background. For coral-coloured text use `--coral-ink`.
- Coral buttons use `--green-900` text (~5.1:1), never white (white-on-coral is ~3:1).
- Primary buttons are green fill + `--cream` text (~8.7:1).

A side-by-side of the current vs refined palette lives in `palette-compare.html`.

## Typography

Contrast-axis pairing: a characterful display serif against a clean geometric-humanist sans.

- **Display / headings:** **Hedvig Letters Serif** (Google Fonts, single weight 400 — all serif text is set to 400 to avoid faux-bold). Warm, modern, credible. Used with restraint: one strong headline per section, single colour, `letter-spacing: -0.015em`, `text-wrap: balance`. Emphasis comes from a coral underline wash, not a second colour. (Replaces the live site's Playfair Display and the rejected Mercado. Easy swaps: **Spectral** for more serious/literary, **Gloock** for more elegant/dramatic.)
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
