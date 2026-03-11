# Design System Updates & Changelog

**Repository:** vsoffice001-cloud/Design-System-vs-26
**Current Version:** v4.0

---

## v4.0 — Report Store Components & Page Template (March 10, 2026)

### Overview
The Report Store page build stress-tested the design system across 6 device breakpoints (XS 320px through 2XL 1440px+), resulting in 17 new components, 5 evolved components, 10 new CSS classes, and the first reusable page template pattern.

### New Components

**Atoms (3):**
- `Tooltip.tsx` — Portal-based tooltip (never clipped by overflow:hidden)
- `ViewToggle.tsx` — List/Grid toggle pill with Tooltip labels
- `FadeInSection.tsx` — IO-based section entrance animation

**Molecules (14):**
- `CardReveal.tsx` — IO-based card entrance with stagger delay
- `RevealImage.tsx` — Fade-in image load wrapper
- `SkeletonCard.tsx` — Grid/list loading placeholders (skeleton-shimmer)
- `EmptyState.tsx` — No-results state with recovery action
- `BackToTop.tsx` — Floating scroll-to-top (mobile-aware positioning)
- `HorizontalScroll.tsx` — Transform-based carousel (overflow-y visible for card shadows)
- `ScrollFade.tsx` — Native scroll with edge fades for tabs/pills
- `IndustryBadge.tsx` — Text-only eyebrow label (renameable to EyebrowLabel)
- `CardMetaRow.tsx` — Icon+text metadata row (2 variants: A=projection+region, B=region+date)
- `CardFooterRow.tsx` — Calendar icon + date footer
- `ReportGridCard.tsx` — Standalone grid card composition
- `StatCard.tsx` — Key market indicator card
- `DataHighlightCard.tsx` — Compact data highlight card
- `AnalystPickCardB.tsx` — Expert curation card with blockquote

### Evolved Components (backward compatible)

| Component | Changes |
|-----------|--------|
| `Button.tsx` | Added `xs` size (28px), `brand` variant (red gradient), `iconOnly` mode, `type` prop |
| `Badge.tsx` | Added `fontWeight` prop (400 or 600) |
| `SectionHeading.tsx` | Added `level` (h1/h2/h3), `action` (CTALink), `endSlot`, `labelEndSlot`, `labelPulse`, `title`/`subtitle` as props |
| `Card.tsx` | Ref-based hover (better perf), `as` prop, `onClick` |
| `Container.tsx` | Uses `.container-padding` CSS class |

### New CSS Classes (theme.css)

- `.img-zoom` — Image scale(1.05) on group:hover
- `.card-reveal` + `.is-visible` — IO-triggered card entrance
- `.skeleton-shimmer` + `@keyframes skeleton-pulse` — Loading shimmer
- `.glass-header` — Glassmorphism nav (blur + saturate)
- `.container-padding` — Responsive padding (16/24/32px)
- `.scrollbar-hide` — Hide native scrollbar
- `@keyframes fadeUp`, `ripple`, `marquee` — Entrance/interaction/infinite scroll
- `:focus-visible` ring system — Brand-red keyboard focus
- `@media (prefers-reduced-motion)` blocks — Accessibility

### New Documentation

- `REPORT_STORE_COMPONENTS_4WH.md` — Complete 4W+H for all 22 components + decision flowcharts
- `REPORT_STORE_PAGE_DOCUMENTATION.md` — Full page documentation (in Figma Make)

### Page Template Pattern

First documented page template: **Report Store dual-mode template**
- Mode 1 (Home): Curated editorial sections with alternating bg
- Mode 2 (Listing): Sidebar filters + card grid with sort/view toggle
- Mobile: MobileFilterBar (floating pill) + MobileFilterSheet (full-screen drawer)

---

## v3.4.0 — FoundationsContent Modular Split (March 6, 2026)

- Split 110KB FoundationsContent.tsx monolith into 6 sub-files in `foundations/`
- FoundationsHelpers, ColorsContent, TypographyContent, SpacingContent, LayoutGridContent, ElevationBorderRadius
- Re-export hub preserves all imports
- Dashboard alignment: all 5 phases pushed to GitHub

## v3.3.2 — AI Context Modularization (March 1, 2026)

- Split 53KB DESIGN_SYSTEM_AI_CONTEXT.md into 6 modules in `ai-context/`
- CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT, PROMPTS
- Updated index to 3KB lightweight pointer
- Badge CSS migration (4 phases): all styling via CSS custom properties
- Doc consolidation: BADGES_DOCUMENTATION v3.0, TECHNICAL_HANDOVER deprecated
- Deleted 4 stale AI context files, 3 standalone badge impls (51.6KB dead code)

## v3.3 — Secondary Button Two-State (March 1, 2026)

- Secondary button: neutral rest -> brand-red hover
- ResourcesSection system (11 files): Container, ResourceCard, SubtleVariantSwitcher
- 53 `--rc-*` tokens in theme.css
- 6 new layout components, 4WH docs, barrel exports

## v3.2 — Font Pairing & Container Width (February 28, 2026)

- DM Sans + Noto Serif font pairing
- 5 container width presets
- AnimatedArrow component
- 10 inline documentation .md files

---

**Last Updated:** March 10, 2026
