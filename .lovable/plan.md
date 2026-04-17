
Build a single landing page styled exactly like the reference (LAYER-X // NEURAL INTERFACE), but using the uploaded red-tinted portrait as the hero background and a red color theme instead of gold.

**Layout (full-viewport hero, src/routes/index.tsx)**
- Background: uploaded red portrait image, full-bleed cover, with a subtle dark vignette/gradient overlay on the left for text legibility.
- Top-left: "LAYER-X //" / "NEURAL" / "INTERFACE" — large, thin, wide tech display font (Chakra Petch or similar from Google Fonts), all caps.
- Below headline: short paragraph ("Engineered with high-res optics and a zero-gravity frame…") + 3 small circular outline icon buttons.
- Top-right: "1/26" pagination indicator with thin divider line and "NEXT PRODUCT" label, monospace style.
- Mid-right: "TECHNICAL SPECS" block with 4 rows (Optics / Logic / Motion / Build) separated by thin red-tinted dividers.
- Bottom-left: frosted glass card "MS-01: NEURAL CORE" with thumbnail, description, and "Add to Cart" pill button.
- Bottom-right: pill-shaped tags — "8K RAW", "A+", "ULTRA-WIDE", "NEURAL-SYNC".

**Styling**
- Color palette: deep red/black background tones, off-white text, red accent (#ff3a3a-ish) for highlights and dividers — replacing the gold/amber of the reference.
- Fonts (Google Fonts via link tags in route head): Chakra Petch for display headlines + tags, Inter for body, JetBrains Mono for small labels/specs.
- Frosted glass: backdrop-blur with translucent dark-red tint and subtle border.
- Thin 1px hairline borders in red/white-low-opacity throughout.

**Assets**
- Copy uploaded red portrait into `src/assets/hero-red.jpg` and import it.

**Meta**
- Update head() title/description/og to "LAYER-X // Neural Interface".

No additional routes, no backend, single-page implementation.
