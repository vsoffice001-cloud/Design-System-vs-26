# Design System v26

> **Professional Design System Dashboard** — A comprehensive design system built with React, TypeScript, and Tailwind CSS v4, featuring elite design patterns from Stripe, Shopify, and Material Design.

## 🎯 Overview

This design system showcases a minimalist editorial aesthetic with:
- **Black/white alternating sections** for visual rhythm
- **Major Third typography scale** (1.25 ratio) for harmonious hierarchy
- **Ken Bold Red (#b01f24)** as the primary brand CTA color
- **Sophisticated interaction design** with shimmer effects and animated arrows
- **Three-pillar architecture** — Consulting (Case Study), Research (Report Store), Surveys
- **Atomic Design methodology** — 35 atoms, 26 molecules, 40 organisms, templates

## 📚 Documentation Structure

### AI Context & Reference Docs (read in this order)

| # | File | What | Size |
|---|------|------|------|
| 1 | `DESIGN_SYSTEM_AI_CONTEXT.md` | Index → 6 modules in `ai-context/` (typography, colors, components, layout, prompts) | 3KB index |
| 1a | `ai-context/*.md` | Modular AI context (CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT, PROMPTS) | ~56KB total |
| 2 | `DESIGN_SYSTEM_UPDATES.md` | Changelog & migration log (v3.2 → v4.3) | ~8KB |
| 3 | `COMPONENT_GUIDELINES_4WH.md` | 4W+H for Case Study DS components — 22+ entries + decision flowcharts | 28KB |
| 4 | `REPORT_STORE_COMPONENTS_4WH.md` | 4W+H for Report Store atoms/molecules/organisms/templates — 22 entries | 33KB |
| 5 | `FILTER_SEARCH_SYSTEM_4WH.md` | 4W+H for filter system atoms + molecules | ~10KB |
| 6 | `design-system-checklist.md` | File map — 165 files, 11 groups, barrel export checklist | v3.0 |
| 7 | `QUICK_START_PROMPT.md` | Copy-paste prompt for fast AI sessions | 6KB |
| 8 | `GITHUB_PUSH_GUIDE.md` | Push safety — never-push list, atomic classification, commit format | v2.0 |

### Supplementary Docs

| File | What |
|------|------|
| `GITHUB_REPO_MANIFEST.md` | Canonical file registry — every file, dependency chains, sync checklist |
| `PROJECT_STRUCTURE.md` | Complete project file tree with annotations |
| `BADGES_DOCUMENTATION.md` | Badge system deep-dive (v3.0 — 11 themes, 3 variants, CSS custom property driven) |
| `RESOURCE_CARD_DOCUMENTATION.md` | ResourceCard deep-dive (7 variants, 53 CSS tokens) |
| `14PX_DESIGN_SYSTEM_INTEGRATION.md` | 14px base font-size integration notes (archived — see ai-context/TYPOGRAPHY.md) |
| `FIGMA_MAKE_IMPORT_PROMPTS.md` | Prompts for importing Figma frames |

### Dashboard Sections

The design system dashboard is organized into 7 main sections:

1. **Overview** — Introduction, design principles, architecture
2. **Foundations** — Typography, colors, spacing, grid, elevation
3. **Components** — Reusable UI components with live examples
4. **Patterns** — Common UI patterns and best practices
5. **Motion** — Animation guidelines and micro-interactions
6. **Guidelines** — Design and development standards
7. **Resources** — Assets, downloads, and additional materials

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
git clone https://github.com/vsoffice001-cloud/Design-System-vs-26.git
cd Design-System-vs-26
pnpm install
pnpm dev
```

## 🛠️ Tech Stack

- **React 18.3** — UI library
- **TypeScript** — Type safety
- **Vite 6.3** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS framework
- **Radix UI** — Accessible component primitives
- **Lucide React** — Icon library
- **Motion** — Animation library (formerly Framer Motion)
- **React Router** — Client-side routing

## 📁 Project Structure

```
Design-System-vs-26/
├── ai-context/                        # Modular AI context (6 files, ~56KB)
│   ├── CORE.md                        # Rules, checklist, mistakes, component inventory
│   ├── TYPOGRAPHY.md                  # Font pairing, Major Third scale, custom sizes
│   ├── COLORS.md                      # 92-5-3 hierarchy, RS color patterns
│   ├── COMPONENTS.md                  # Button, Link, Badge, Filter, Molecules, Organisms
│   ├── LAYOUT.md                      # Spacing, containers, SectionWrapper, page assembly
│   └── PROMPTS.md                     # 12 copy-paste AI prompts
├── src/
│   ├── app/
│   │   ├── components/                # React components (~165 files)
│   │   │   ├── foundations/           # Modular Foundations sub-files (v3.4)
│   │   │   │   ├── FoundationsHelpers.tsx
│   │   │   │   ├── ColorsContent.tsx (~35KB)
│   │   │   │   ├── TypographyContent.tsx (~23KB)
│   │   │   │   ├── SpacingContent.tsx (~8KB)
│   │   │   │   ├── LayoutGridContent.tsx (~25KB)
│   │   │   │   └── ElevationBorderRadius.tsx (~17KB)
│   │   │   ├── molecules/             # 26 molecule components (v4.3)
│   │   │   │   ├── ReportCard.tsx     # Canonical report card (grid + list)
│   │   │   │   ├── StatCard.tsx       # Market stat card with growth
│   │   │   │   ├── SkeletonCard.tsx   # Loading skeleton (grid + list)
│   │   │   │   ├── HorizontalScroll.tsx # Card carousel with drag
│   │   │   │   ├── ScrollFade.tsx     # Pill/tab overflow with fade
│   │   │   │   └── ... (21 more)
│   │   │   ├── organisms/             # 30 organism components (v4.3)
│   │   │   │   ├── ProductHero.tsx    # Cross-pillar hero section
│   │   │   │   ├── FeaturedCarousel.tsx # Cross-pillar carousel
│   │   │   │   ├── ReportStoreHero.tsx # RS hero (search, categories)
│   │   │   │   ├── CardListing.tsx    # RS paginated card grid
│   │   │   │   ├── FiltersPanel.tsx   # RS filter sidebar
│   │   │   │   └── ... (25 more)
│   │   │   ├── ui/                    # Radix UI components (Figma Make only)
│   │   │   └── figma/                 # ImageWithFallback shim
│   │   └── hooks/                     # Custom React hooks (14 hooks)
│   ├── design-system/                 # Design tokens (tokens.ts)
│   ├── imports/                       # Figma imports and SVG assets
│   └── styles/                        # Global styles and theme
│       ├── fonts.css                  # Font imports (DM Sans + Noto Serif)
│       ├── report-store-additions.css # RS CSS classes, focus-visible, skeleton
│       ├── tailwind.css               # Tailwind configuration
│       └── theme.css                  # CSS custom properties (470+ tokens)
├── DESIGN_SYSTEM_AI_CONTEXT.md        # Index → ai-context/ modules (v4.3)
├── DESIGN_SYSTEM_UPDATES.md           # Changelog (v3.2 → v4.3)
├── COMPONENT_GUIDELINES_4WH.md        # 4W+H — Case Study components (v4.3)
├── REPORT_STORE_COMPONENTS_4WH.md     # 4W+H — Report Store components (v4.0)
├── FILTER_SEARCH_SYSTEM_4WH.md        # 4W+H — Filter system (v4.3)
├── design-system-checklist.md         # File map (v3.0 — 165 files, 11 groups)
├── QUICK_START_PROMPT.md              # Copy-paste AI prompt (v4.3)
├── GITHUB_PUSH_GUIDE.md               # Push safety guide (v2.0)
├── GITHUB_REPO_MANIFEST.md            # Canonical repository inventory
├── PROJECT_STRUCTURE.md               # Full file tree with annotations
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

### Architecture: Atomic Design with Three Pillars

```
┌─────────────────────────────────────────────────────────────────┐
│                    VS DESIGN SYSTEM (Unified)                    │
│                                                                  │
│  Foundations: Colors, Typography, Spacing, Layout, Motion, A11y  │
│  Shared Atoms: Button, Badge, CTALink, Card, Container, etc.    │
│  Shared Hooks: useShimmer, useScrollDirection, useCounter, etc.  │
│                                                                  │
├────────────────────┬─────────────────────┬──────────────────────┤
│   CONSULTING       │    RESEARCH         │    SURVEYS            │
│   (Case Study)     │    (Report Store)   │    (TBD)              │
│   Page: DISPLAY    │    Page: PRODUCT    │    Page: PRODUCT      │
│   10 organisms     │    24 organisms     │    Reuses RS patterns │
│   ✅ COMPLETE      │    ✅ COMPLETE      │    🟡 IN PROGRESS     │
└────────────────────┴─────────────────────┴──────────────────────┘
```

### FoundationsContent Modular Split (v3.4)

The former 110KB `FoundationsContent.tsx` monolith was split into 6 modular files under `foundations/`. The original file is now a ~1KB re-export hub so all existing imports remain unchanged.

**Import rule:** Always import via `@/app/components/FoundationsContent` (the hub), never directly from `foundations/`.

## 🎨 Design Tokens

### Typography Scale (Major Third 1.25 Ratio)

```css
--text-xs: 0.8rem;      /* 12.8px — Labels, metadata */
--text-sm: 1rem;        /* 16px  — Standard body (90% of text) */
--text-base: 1.25rem;   /* 20px  — Large body, card titles (4+) */
--text-lg: 1.563rem;    /* 25px  — Card titles (2-3) */
--text-xl: 1.953rem;    /* 31.25px — Subsection h3 */
--text-2xl: 2.441rem;   /* 39px  — Section h2 */
--text-3xl: 3.052rem;   /* 48.8px — Hero h1 ONLY */
```

### Color System (92-5-3 Hierarchy)

| Tier | Usage | Colors |
|------|-------|--------|
| Foundation (92%) | Page structure | Black `#000000`, White `#ffffff`, Warm `#f5f2f1` |
| Brand (5%) | CTAs only | Ken Bold Red `#b01f24` |
| Accent (3%) | Shadows & highlights | Purple `#806ce0`, Periwinkle `#c3c6f9`, Coral, Perano |

## ✨ Core Components

### Button System (v4.0)
- **4 variants**: Primary, Secondary (two-state), Ghost, Brand
- **5 sizes**: XS (28px), Small (36px), Medium (42px), Large (48px), XL
- **Always-active shimmer** effect as brand identity
- **Animated arrow** for urgency CTAs (ArrowUpRight diagonal)
- **Secondary two-state**: Neutral at rest → Brand-red on hover
- **iconOnly mode** for compact icon buttons

### Badge System (v3.3.2 — CSS Custom Property Driven)
- **11 themes**: neutral, warm, brand, coral, purple, periwinkle, success, warning, error, info, muted
- **3 variants**: minimal, rounded, pill
- **4 sizes**: xs, sm, md, lg
- **All styling via `--badge-*` CSS custom properties**
- 10 convenience wrappers (SectionLabel, StepPill, StatusBadge, etc.)

### Card System (v4.0+)
- **Card** — Base container (3 variants: white/warm/outlined, ref-based hover)
- **ReportCard** — Canonical report card with `layout="grid"` and `layout="list"`
- **StatCard** — Market stat card with growth indicator
- **DataHighlightCard** — Data point card with value + trend
- **AnalystPickCardB** — Expert recommendation card
- **ResourceCard** — 7-variant content card for case study sections

### Layout Components (v4.0)
- **SectionHeading** — Prop-driven heading (title, label, subtitle, action, endSlot)
- **SectionWrapper** — Section layout wrapper (background, spacing, maxWidth)
- **Container** — Layout width wrapper (5 presets)
- **ViewToggle** — Grid/list view toggle with warm pill
- **FadeInSection** — Scroll-triggered fade-in wrapper

### Page-Level Components
- **Navbar** — Fixed top, expanded/compact states, section pills
- **ReadingProgressBar** — Section-specific progress for case studies
- **ScrollToTop** — Floating back-to-top with Motion animations
- **StickyCTA** — Context-aware floating CTA per section
- **ContactModal** — Accessible contact form overlay

### Molecules (26 in `/components/molecules/`)
Reusable compositions of 2-3 atoms:
- **ReportCard, StatCard, DataHighlightCard, AnalystPickCardB** — Card molecules
- **SkeletonCard, EmptyState** — Loading/empty states
- **HorizontalScroll, ScrollFade** — Scroll patterns
- **CardReveal, RevealImage** — Entrance animations
- **FilterAccordion, SidebarPanel, ActiveFilterChip, MobileFilterSheet** — Filter molecules
- **SurveyCard, CompletionBadge, ResponseChart** — Survey molecules

### Organisms (30 in `/components/organisms/`)
Complete page sections:
- **6 cross-pillar** — ProductHero, FeaturedCarousel, StatsRow, BrowseGrid, CTABanner, ProductPageTemplate
- **24 Report Store** — ReportStoreHero, FeaturedResearch, CardListing, FiltersPanel, IndustrySectorsGrid, and 19 more

## 🎯 Brand Identity Signatures

1. **Shimmer Effect** — Always active on ALL buttons (never disable)
2. **Arrow Animation** — Only on buttons redirecting to forms/pages (urgency)
3. **Two-State Secondary** — Neutral rest → Brand-red hover transition

## 📊 Quick Stats

```
Total Atoms:           ~35 (18 core + 14 layout/utility + 3 data files)
Total Molecules:       26 (in /molecules/)
Total Organisms:       40 (30 in /organisms/ + 10 case study in root)
Total Hooks:           14
Total Documentation:   6 AI context modules + 8 reference docs
Total Code Files:      ~165 TypeScript/TSX files
Design Tokens:         470+ CSS custom properties (theme.css)
Color Palette:         9 families (92 shades total)
Typography Scale:      9 levels (xs to 5xl) + 3 custom sizes
```

## 📄 License

Proprietary - Design system for internal use

## 👥 Authors

**vsoffice001-cloud** — Design System Team

---

**Built with elite design system patterns | DS v4.3 | Updated 2026-03-18**
