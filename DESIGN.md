# Design

The redesign **keeps the brand's existing equity** — teal + coral + a warm neutral, the Playfair display serif, the logo, and the copy — and modernizes everything around it: a cleaner neutral, a contemporary body sans, asymmetric editorial layouts (no centered monotony), real photography below the fold, fixed contrast, and purposeful motion. The goal is "they redesigned it," not "is this still the same brand?"

## Theme

Light, warm, editorial. A fresh near-white canvas (cleaner and brighter than the previous warm cream), deep teal as the ink and structural colour, coral as the single energising accent. Scene: a woman reading on her phone in good daylight — the page should feel like clear morning light, calm and credible, with warmth carried by photography and the coral, not by a beige background.

## Color

OKLCH-defined, evolved from the live brand colours (`#004D4D` teal, `#E78B7E` coral). Strategy: **restrained** — teal + warm-neutral surfaces carry the page, coral is the ≤10% accent. Teal is allowed to go full-bleed for one or two committed bands (event, footer).

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(0.992 0.003 190)` ≈ `#F9FCFC` | Page background — fresh near-white, whisper of teal (replaces warm cream `#F9F8F6`) |
| `--surface` | `oklch(0.971 0.012 190)` ≈ `#E9F2F1` | Alt section bands — pale teal mist |
| `--surface-warm` | `oklch(0.955 0.022 45)` ≈ `#FBEDE6` | One warm accent band (session replay) |
| `--teal` | `#004D4D` | Brand teal — headings accents, primary buttons, structure |
| `--teal-deep` | `#013B3B` | Footer / deep bands |
| `--teal-900` | `#002E2E` | Darkest text-on-coral (passes AA on coral) |
| `--ink` | `oklch(0.30 0.03 195)` ≈ `#1E3A38` | Body text on light (~10:1) |
| `--coral` | `#E78B7E` | Accent — fills, shapes, underlines, hover |
| `--coral-ink` | `oklch(0.52 0.13 32)` ≈ `#A8432F` | Coral **as text/links** on light — darkened to pass AA (≥4.5:1) |
| `--cream` | `#FBFCFC` | Text on teal/dark |

**Contrast rules (load-bearing — the live site fails these):**
- Coral is never used as body text or links on a light background. For coral-coloured text use `--coral-ink`.
- Coral buttons use `--teal-900` text (≈5.4:1), never white (white-on-coral is ~2.5:1).
- Primary buttons are teal fill + `--cream` text (~9:1).

## Typography

Contrast-axis pairing: a high-contrast didone serif against a clean humanist grotesque.

- **Display / headings:** **Playfair Display** (kept — brand identity), 500–700. Used with restraint: one strong headline per section, `letter-spacing: -0.02em`, `text-wrap: balance`. The dated colour-split headline treatment is dropped — headings are a single colour; emphasis comes from a coral underline mark, not a second colour.
- **Body / UI:** **Hanken Grotesk** (replaces Nunito Sans), 400–700. Warm, modern, highly legible; carries all body, labels, nav, buttons. Body max width 65ch; `text-wrap: pretty` on long prose.
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
