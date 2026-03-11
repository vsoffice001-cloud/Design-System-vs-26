# GitHub Repository Manifest - Design System vs 26

**Last Updated:** March 11, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`  
**Design System Version:** v4.2

Canonical file inventory for the entire repository. Use this when syncing between Figma Make and GitHub.

---

## Root Directory

| File | Purpose | Status |
|------|---------|--------|
| `.gitignore` | Git ignore rules | Stable |
| `.npmrc` | npm registry config | Stable |
| `package.json` | Project dependencies & scripts | Stable |
| `postcss.config.mjs` | PostCSS configuration | Stable |
| `vite.config.ts` | Vite build configuration | Stable |
| `README.md` | Project readme (v3.3.2) | Updated Mar 1 |
| `GITHUB_REPO_MANIFEST.md` | **This file** — Canonical repository inventory | Updated Mar 11 |

### Root - AI Context System (v4.0)

| File | Purpose | Version |
|------|---------|--------|
| `DESIGN_SYSTEM_AI_CONTEXT.md` | **Lightweight index** — points to 6 modules in `ai-context/` | v3.4.0 (3KB index) |
| `DESIGN_SYSTEM_UPDATES.md` | Changelog & migration log (v3.2.1 → v4.0) | **v4.0** |
| `COMPONENT_GUIDELINES_4WH.md` | 4W+H for Case Study DS components — 17 entries + 5 flowcharts | v3.3 |
| `REPORT_STORE_COMPONENTS_4WH.md` | **v4.2** — 4W+H for Report Store components — 32+ entries + 5 flowcharts + interaction state matrix + filter system architecture | **v4.2** |
| `design-system-checklist.md` | File map — 52 files, 11 groups, barrel export instructions | v2.2 |
| `QUICK_START_PROMPT.md` | Copy-paste prompt for fast AI sessions | v3.3.2 |
| `GITHUB_PUSH_GUIDE.md` | Push checklist by Atomic level, merge safety, commit format | v1.3 |

### Root - Design System Reference Docs

| File | Purpose | Status |
|------|---------|--------|
| `BADGES_DOCUMENTATION.md` | Badge system documentation | **v3.0** — aligned with CSS migration |
| `RESOURCE_CARD_DOCUMENTATION.md` | ResourceCard deep-dive (7 variants, 53 tokens) | v3.0 |
| `14PX_DESIGN_SYSTEM_INTEGRATION.md` | 14px base font integration decisions | Stable |
| `FIGMA_MAKE_IMPORT_PROMPTS.md` | Prompts for importing Figma frames | Stable |
| `TECHNICAL_HANDOVER.md` | Technical handover — **historical reference only** | Deprecated |

---

## `ai-context/` — Modular AI Context (6 files)

Split from the original 53KB `DESIGN_SYSTEM_AI_CONTEXT.md` monolith. Each file is under 10KB and fully readable via the GitHub API.

| File | Content | Size |
|------|---------|------|
| `CORE.md` | Overview, critical rules, AI checklist, common mistakes, quality metrics — **v4.0 with Report Store references** | 9KB |
| `TYPOGRAPHY.md` | Font pairing (Serif/Sans/Mono), Major Third scale (1.25), custom sizes, weights | 4KB |
| `COLORS.md` | 92-5-3 hierarchy, brand/black/warm/red/accent/utility colors, section color recipe | 8KB |
| `COMPONENTS.md` | Button (4 variants + two-state secondary), Link system, Badge (CSS driven), Animation | 7KB |
| `LAYOUT.md` | Spacing scale, 5 container widths, responsive padding, section pattern, page assembly | 7KB |
| `PROMPTS.md` | 7 copy-paste AI implementation prompts | 6KB |

**Total:** ~41KB

---

## `src/` Directory Structure

```
src/
 ├── app/
 │   ├── App.tsx                    # Main app entry (uses react-router-dom)
 │   ├── components/                # All UI components
 │   │   ├── figma/                 # ImageWithFallback shim
 │   │   ├── foundations/           # Modular Foundations tab content (v3.4.0)
 │   │   └── molecules/            # Report Store molecules (v4.2)
 │   └── hooks/                     # Custom React hooks
 ├── design-system/                 # Design tokens & showcase components
 ├── imports/                       # SVG imports from Figma
 └── styles/                        # CSS files (theme, fonts, tailwind, report-store-additions)
```

---

## Report Store Section Order (v4.0)

```
Home Mode (discovery):
 1. Header                   → WHITE (glass-header)
 2. HeroSection              → BLACK (globe, search)
 3. FeaturedResearch          → WHITE
 4. IndustrySectorsGrid       → NEUTRAL50 (--warm-200)
 5. RecommendedForYou         → WHITE
 6. AnalystPicksSection       → NEUTRAL50
 7. TrendingStatistics        → WHITE
 8. DailyDataHighlights       → NEUTRAL50
 9. CustomResearchCTA         → BLACK
10. Footer                    → BLACK

Listing Mode (filtered):
 Header → HeroSection → ListingContextBanner → Sidebar + CardGrid → Footer
```

---

## Key Dependency Chains

### Filter System (v4.2 — most complex interaction system)
```
useReportFilters.ts (hook — all filter state + cascade logic)
  ├── IndustrySidebar.tsx (organism, lg+ only)
  │     ├── SidebarPanel.tsx (container: sticky, elevation, header/footer)
  │     ├── FilterSearchInput.tsx (atom: search within filters)
  │     ├── FilterAccordion.tsx[sidebar] × 4 sections
  │     │     └── FilterCheckbox.tsx × N per section
  │     └── Industry tree rows (custom expand/collapse/select)
  ├── MobileFilterBar.tsx (floating pill, <lg only)
  │     └── Opens MobileFilterSheet
  ├── MobileFilterSheet.tsx (organism, <lg only)
  │     ├── FilterAccordion.tsx[sheet] × 5 sections
  │     │     └── FilterChip.tsx × N per section
  │     └── Button.tsx[brand] "Show Results"
  └── ListingContextBanner.tsx (organism)
        ├── Zone A: Industry hero + subcategory pills
        └── Zone B: Color-coded removable filter chips
```

### Report Store Card System (v4.1)
```
ReportCard.tsx (canonical — grid + list layouts)
  ├── Card.tsx (v4.0 base container)
  ├── Button.tsx (list layout CTA)
  ├── ImageWithFallback (figma/ shim)
  ├── IndustryBadge.tsx (subcategory label)
  ├── CardMetaRow.tsx (A/B meta variants)
  ├── CardFooterRow.tsx (date row)
  └── iconColors.ts (lucide icon colors)

ReportGridCard.tsx ── @deprecated wrapper → ReportCard layout="grid"

ViewToggle.tsx ──── controls layout prop on ReportCard
SkeletonCard.tsx ─── mirrors grid + list loading states
```

---

## `src/app/components/` — Core Components

### Report Store Atoms (v4.2 — 6 files)

| File | Purpose |
|------|--------|
| `Tooltip.tsx` | Portal-based tooltip (document.body level, never clipped by overflow:hidden) |
| `ViewToggle.tsx` | List/grid view toggle with warm pill container, 44px mobile touch targets |
| `FadeInSection.tsx` | IntersectionObserver wrapper for scroll-triggered fade-in |
| **`FilterCheckbox.tsx`** | **Custom checkbox with 6 interaction states, ARIA, keyboard. Used in filter panels, TOC, settings.** |
| **`FilterChip.tsx`** | **Toggle chip with active/inactive states, 40px touch target. Used in mobile filter sheets.** |
| **`FilterSearchInput.tsx`** | **Compact search input for filtering within panels. Border darkens on content.** |

### `molecules/` — Report Store Molecules (v4.2 — 19 files)

| File | Atomic Level | Purpose |
|------|-------------|--------|
| `index.ts` | Barrel | Re-exports all molecules + types |
| `IndustryBadge.tsx` | Atom | Text-only industry/subcategory eyebrow label |
| `CardMetaRow.tsx` | Molecule | Inline meta row with A/B variants |
| `CardFooterRow.tsx` | Molecule | Date footer with Calendar icon |
| `CardReveal.tsx` | Molecule | IO-based card entrance animation with stagger delay |
| `RevealImage.tsx` | Molecule | Smooth blur-to-sharp image reveal on load |
| `EmptyState.tsx` | Molecule | No-results state with icon, message, optional action |
| `BackToTop.tsx` | Molecule | Floating scroll-to-top button |
| `SkeletonCard.tsx` | Molecule | Shimmer loading placeholders (grid + list variants) |
| `HorizontalScroll.tsx` | Molecule | Transform-based carousel |
| `ScrollFade.tsx` | Molecule | Native scroll wrapper with edge fade masks |
| **`ReportCard.tsx`** | **Organism** | **Canonical report card: `layout="grid"` or `layout="list"`** |
| `ReportGridCard.tsx` | Wrapper | **@deprecated** — thin wrapper → `ReportCard layout="grid"` |
| `StatCard.tsx` | Molecule | Market indicator card |
| `DataHighlightCard.tsx` | Molecule | Daily data card |
| `AnalystPickCardB.tsx` | Molecule | Expert pick card |
| **`FilterAccordion.tsx`** | **Molecule** | **Unified collapsible section (sidebar + sheet variants). Replaces two duplicated FilterSection implementations.** |
| **`SidebarPanel.tsx`** | **Molecule** | **Reusable sticky sidebar container. Handles positioning, elevation, header/footer/scroll zones. For filters, TOC, side nav, settings.** |
| **`ActiveFilterChip.tsx`** | **Molecule** | **Removable color-coded filter chip. 6 type colors (gray, purple, green, blue, amber).** |

---

## Cleanup Changelog

| Date | Action | Files Affected |
|------|--------|----------------|
| Mar 11, 2026 | **v4.2 Filter System Extraction** — Extracted 3 atoms (FilterCheckbox, FilterChip, FilterSearchInput) and 3 molecules (FilterAccordion, SidebarPanel, ActiveFilterChip) from monolithic IndustrySidebar/MobileFilterSheet. Full 4W+H documentation with interaction state matrix, filter architecture diagram, and decision flowchart. | FilterCheckbox.tsx, FilterChip.tsx, FilterSearchInput.tsx, molecules/FilterAccordion.tsx, molecules/SidebarPanel.tsx, molecules/ActiveFilterChip.tsx, molecules/index.ts, REPORT_STORE_COMPONENTS_4WH.md (v4.2), GITHUB_REPO_MANIFEST.md |
| Mar 11, 2026 | **ReportCard grid+list** — Unified card with `layout` prop; ReportGridCard → deprecated wrapper | ReportCard.tsx (new), ReportGridCard.tsx (refactored), molecules/index.ts |
| Mar 11, 2026 | **v4.1 Molecule Push** — 3 atoms, 14 molecules, 1 shim, barrel exports updated | Tooltip.tsx, ViewToggle.tsx, FadeInSection.tsx, molecules/*.tsx (14), figma/ImageWithFallback.tsx, molecules/index.ts, components/index.ts |
| Mar 10, 2026 | **v4.0 Report Store sync** — 3 docs, 3 evolved components, 1 CSS additions file | REPORT_STORE_COMPONENTS_4WH.md, DESIGN_SYSTEM_UPDATES.md, ai-context/CORE.md, Button.tsx, SectionHeading.tsx, Card.tsx, report-store-additions.css |
| Mar 6, 2026 | **v3.4.0 FoundationsContent Modular Split** | FoundationsContent.tsx, foundations/*.tsx (6 files) |
| Mar 1, 2026 | **v3.3.2 AI Context Modularization + Badge CSS Migration** | 7 files deleted, ai-context/*.md, theme.css, Badge.tsx |

---

## Version History

| Date | Changes |
|------|---------||
| Mar 11, 2026 | **v4.2 Filter & Search System:** Extracted & documented 6 new components from monolithic filter code (FilterCheckbox, FilterChip, FilterSearchInput atoms; FilterAccordion, SidebarPanel, ActiveFilterChip molecules). Full 4W+H with interaction state matrix (11 controls × 6 states), filter architecture diagram, component composition tree, cross-platform parity table, and "Which Filter Component?" decision flowchart. Refactored IndustrySidebar and MobileFilterSheet to compose from extracted atoms/molecules. |
| Mar 11, 2026 | **v4.1 ReportCard grid+list:** Unified `ReportCard.tsx` with `layout` prop; `ReportGridCard` deprecated |
| Mar 11, 2026 | **v4.1 Molecule Push:** 3 atoms, 14 molecules, 1 shim, barrel exports |
| Mar 10, 2026 | **v4.0 Report Store Components:** 4WH doc, CSS additions, evolved Button/SectionHeading/Card |
| Mar 6, 2026 | **v3.4.0 FoundationsContent Modular Split** |
| Mar 1, 2026 | **v3.3.2 AI Context Modularization + Badge CSS Migration** |

---

**Total Files on GitHub:** ~148 files across 8 directories
