# Design System v26

> **Professional Design System Dashboard** — A comprehensive design system built with React, TypeScript, and Tailwind CSS v4, featuring elite design patterns from Stripe, Shopify, and Material Design.

## 🎯 Overview

This design system showcases a minimalist editorial aesthetic with:
- **Black/white alternating sections** for visual rhythm
- **Major Third typography scale** (1.25 ratio) for harmonious hierarchy
- **Ken Bold Red (#b01f24)** as the primary brand CTA color
- **Sophisticated interaction design** with shimmer effects and animated arrows

## 📚 Documentation Structure

### AI Context & Reference Docs (read in this order)

| # | File | What | Size |
|---|------|------|------|
| 1 | `DESIGN_SYSTEM_AI_CONTEXT.md` | Index → 6 modules in `ai-context/` (typography, colors, components, layout, prompts) | 3KB index |
| 1a | `ai-context/*.md` | Modular AI context (CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT, PROMPTS) | ~37KB total |
| 2 | `DESIGN_SYSTEM_UPDATES.md` | Changelog & migration log (v3.2.1 → v3.4) | ~5KB |
| 3 | `COMPONENT_GUIDELINES_4WH.md` | 4W+H framework for every component with decision flowcharts | 28KB |
| 4 | `design-system-checklist.md` | File map — which files to import, in what order, 11 groups, ~76 files | 20KB |
| 5 | `QUICK_START_PROMPT.md` | Copy-paste prompt for fast AI sessions | 6KB |
| 6 | `GITHUB_PUSH_GUIDE.md` | Push safety — never-push list, barrel exports, commit format | 10KB |

### Supplementary Docs

| File | What |
|------|------|
| `GITHUB_REPO_MANIFEST.md` | Canonical file registry — every file, dependency chains, sync checklist |
| `BADGES_DOCUMENTATION.md` | Badge system deep-dive (v3.0 — 11 themes, 3 variants, CSS custom property driven) |
| `RESOURCE_CARD_DOCUMENTATION.md` | ResourceCard deep-dive (7 variants, 53 CSS tokens) |
| `14PX_DESIGN_SYSTEM_INTEGRATION.md` | 14px base font-size integration notes |
| `FIGMA_MAKE_IMPORT_PROMPTS.md` | Prompts for importing Figma frames |
| `TECHNICAL_HANDOVER.md` | Technical handover — historical reference only (Feb 17 content) |

### Dashboard Sections

The design system dashboard is organized into 7 main sections:

1. **Overview** — Introduction and design principles
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
├── ai-context/                        # Modular AI context (6 files)
│   ├── CORE.md                        # Rules, checklist, mistakes
│   ├── TYPOGRAPHY.md                  # Font pairing, scale
│   ├── COLORS.md                      # 92-5-3, all color families
│   ├── COMPONENTS.md                  # Button, Link, Badge, Animation
│   ├── LAYOUT.md                      # Spacing, containers, sections
│   └── PROMPTS.md                     # AI implementation prompts
├── src/
│   ├── app/
│   │   ├── components/       # React components (~76 files)
│   │   │   ├── foundations/  # Modular Foundations sub-files (v3.4)
│   │   │   │   ├── FoundationsHelpers.tsx
│   │   │   │   ├── ColorsContent.tsx (~35KB)
│   │   │   │   ├── TypographyContent.tsx (~23KB)
│   │   │   │   ├── SpacingContent.tsx (~8KB)
│   │   │   │   ├── LayoutGridContent.tsx (~25KB)
│   │   │   │   └── ElevationBorderRadius.tsx (~17KB)
│   │   │   ├── ui/          # Radix UI components (Figma Make only)
│   │   │   └── figma/       # Figma import utilities
│   │   └── hooks/           # Custom React hooks (10 hooks)
│   ├── design-system/       # Design tokens (tokens.ts)
│   ├── imports/             # Figma imports and SVG assets
│   └── styles/              # Global styles and theme
│       ├── fonts.css        # Font imports (DM Sans + Noto Serif)
│       ├── tailwind.css     # Tailwind configuration
│       └── theme.css        # CSS custom properties
├── DESIGN_SYSTEM_AI_CONTEXT.md    # Index → ai-context/ modules (v3.4)
├── DESIGN_SYSTEM_UPDATES.md       # Changelog (v3.4)
├── COMPONENT_GUIDELINES_4WH.md    # 4W+H component reference
├── design-system-checklist.md     # File map (v2.2, 11 groups, ~76 files)
├── QUICK_START_PROMPT.md          # Copy-paste AI prompt
├── GITHUB_PUSH_GUIDE.md           # Push safety guide
├── package.json
├── vite.config.ts
└── postcss.config.mjs
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

### Button System (v3.3)
- **4 variants**: Primary, Secondary (two-state), Ghost, Brand
- **4 sizes**: Small (36px), Medium (42px), Large (48px), XL
- **Always-active shimmer** effect as brand identity
- **Animated arrow** for urgency CTAs (ArrowUpRight diagonal)
- **Secondary two-state**: Neutral at rest → Brand-red on hover

### Badge System (v3.3.2 — CSS Custom Property Driven)
- **11 themes**: neutral, warm, brand, coral, purple, periwinkle, success, warning, error, info, muted
- **3 variants**: minimal, rounded, pill
- **4 sizes**: xs, sm, md, lg
- **All styling via `--badge-*` CSS custom properties**
- 9 convenience wrappers (SectionLabel, StepPill, StatusBadge, etc.)

### Page-Level Components
- **Navbar** — Fixed top, expanded/compact states, section pills
- **ReadingProgressBar** — Section-specific progress for case studies
- **ScrollToTop** — Floating back-to-top with Motion animations
- **StickyCTA** — Context-aware floating CTA per section
- **ContactModal** — Accessible contact form overlay

## 🎯 Brand Identity Signatures

1. **Shimmer Effect** — Always active on ALL buttons (never disable)
2. **Arrow Animation** — Only on buttons redirecting to forms/pages (urgency)
3. **Two-State Secondary** — Neutral rest → Brand-red hover transition

## 📄 License

Proprietary - Design system for internal use

## 👥 Authors

**vsoffice001-cloud** — Design System Team

---

**Built with elite design system patterns | DS v3.4 | Updated 2026-03-06**
