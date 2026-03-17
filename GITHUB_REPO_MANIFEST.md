# GitHub Repository Manifest - Design System vs 26

**Last Updated:** March 17, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`  
**Design System Version:** v4.3

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
| `GITHUB_REPO_MANIFEST.md` | **This file** — Canonical repository inventory | Updated Mar 17 |

### Root - AI Context System (v4.3)

| File | Purpose | Version |
|------|---------|--------|
| `DESIGN_SYSTEM_AI_CONTEXT.md` | **Lightweight index** — points to 6 modules in `ai-context/` | v4.3 |
| `DESIGN_SYSTEM_UPDATES.md` | Changelog & migration log (v3.2.1 → v4.0) | **v4.0** |
| `COMPONENT_GUIDELINES_4WH.md` | 4W+H for Case Study DS components — 17 entries + 5 flowcharts | v3.3 |
| `REPORT_STORE_COMPONENTS_4WH.md` | **NEW** — 4W+H for Report Store atoms/molecules/organisms/templates — 22 entries + 4 flowcharts + page assembly checklist | **v4.0** |
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
| `CORE.md` | Overview, critical rules, AI checklist, common mistakes, quality metrics — **v4.3** | 9KB |
| `TYPOGRAPHY.md` | Font pairing (Serif/Sans/Mono), Major Third scale (1.25), custom sizes, weights | 4KB |
| `COLORS.md` | 92-5-3 hierarchy, brand/black/warm/red/accent/utility colors, section color recipe | 8KB |
| `COMPONENTS.md` | Button (4 variants + two-state secondary), Link system, Badge (CSS driven), Animation, Filter system (v4.3) | 7KB |
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
 │   │   ├── molecules/            # Molecules (26 files, v4.3)
 │   │   └── organisms/           # Organisms (30 files — 6 cross-pillar + 24 RS, v4.3)
 │   └── hooks/                     # Custom React hooks
 ├── design-system/                 # Design tokens & showcase components
 ├── imports/                       # SVG imports from Figma
 └── styles/                        # CSS files (theme, fonts, tailwind, report-store-additions)
```

---

## Case Study Section Order

```
 1. HeroSection              → BLACK
 2. ClientContextSection     → WHITE
 3. ChallengesSection        → WARM (#f5f2f1)
 4. EngagementObjectives     → WHITE
 5. MethodologySection       → WARM
 6. ImpactSection            → WHITE
 7. ValuePillarsSection      → WHITE (border-t separator)
 8. TestimonialSection       → WHITE (border-t separator)
 9. ResourcesSection         → BLACK (dark gradient mesh)
10. FinalCTASection          → WHITE (border-t separator)
```

## Report Store Section Order (v4.3)

```
Home Mode (10 self-contained organisms):
 1. ReportStoreHero           → BLACK (search bar, category links)
 2. QuickAccessBar            → SUBTLE (#fafafa)
 3. FeaturedResearch           → WHITE (HorizontalScroll + ReportCard)
 4. KeyMarketIndicators        → WARM (StatsRow → 4 StatCards)
 5. RecommendedForYou          → WHITE (BrowseGrid → ViewToggle + ReportCards)
 6. DailyDataHighlights        → WHITE + border (4 DataHighlightCards)
 7. AnalystPicks               → WARM (3 AnalystPickCardBs)
 8. IndustrySectorsGrid        → WHITE (14 industries, 7+7 split)
 9. ResearchMethodology        → WARM (5-step process)
10. CustomResearchCTA          → BLACK (CTABanner wrapper)

Listing Mode:
 IndustryFocusBanner → ListingToolbar → FiltersPanel + CardListing
```

---

## Filter System (v4.3 — 6 atoms + 4 molecules)

```
Atoms:
  FilterSearchInput.tsx ── lucide: Search, X
  FilterCheckbox.tsx ── standalone (label + count)
  FilterChip.tsx ── lucide: X (dismissible pill)
  FilterSectionHeader.tsx ── ChevronRight toggle, Badge count
  FilterCheckboxItem.tsx ── custom checkbox UI + label + count
  FilterIndustryItem.tsx ── expandable row with sub-items

Molecules:
  molecules/FilterAccordion.tsx ── FilterCheckbox, ChevronDown
  molecules/SidebarPanel.tsx ── standalone container
  molecules/ActiveFilterChip.tsx ── FilterChip bar + "Clear all"
  molecules/MobileFilterSheet.tsx ── full-screen mobile overlay
```

---

## `src/app/hooks/` (15 files)

| File | Purpose |
|------|--------|
| `index.ts` | Barrel export for all hooks |
| `useActiveSection.ts` | Track which section is currently visible |
| `useCounter.ts` | Animated counter for impact metrics |
| `useHeroVisibility.ts` | Detect if hero section is in viewport |
| `useMagneticEffect.ts` | Magnetic cursor effect for buttons |
| `useReadingProgress.ts` | Page reading progress percentage |
| `useResponsiveGutter.ts` | Responsive pixel-based gutter (24/32px) |
| `useScrollAnimation.ts` | Scroll-triggered animations |
| `useScrollDirection.ts` | Detect scroll up/down direction |
| `useSectionProgress.ts` | Section scroll progress tracking |
| `useShimmer.ts` | **DO NOT DELETE** — Used by CTALink.tsx & InlineLink.tsx |
| `useReportFilters.ts` | **v4.3** — Report Store filter state |
| `useProgressiveLoad.ts` | **v4.3** — IntersectionObserver-based infinite scroll |
| `useCrossfade.ts` | **v4.3** — Crossfade transition between content swaps |
| `useMountTransition.ts` | **v4.3** — Mount/unmount lifecycle with CSS transition support |

---

## Key Intentional Exceptions (DO NOT "FIX")

1. **AllTypographyTokensContent.tsx** — Hardcoded values are intentional (demo)
2. **ChallengesSection.tsx** — `1000px` is JS card-width calc, not container
3. **ContactModal.tsx** — `max-w-[500px]` is intentional modal width
4. **PatternsContent.tsx** — `max-w-[1200px]` inside demo code string
5. **useShimmer.ts** — Actively used by CTALink + InlineLink, DO NOT DELETE
6. **FigmaButtonComparison.tsx line 76** — Static `<ArrowUpRight>` in raw `<a>` tag is intentional gap documentation

---

## Version History

| Date | Changes |
|------|---------|
| Mar 17, 2026 | **v4.3 DS Audit:** 5 code fixes (arrow prop, hex→rgba, hex→var), documentation v4.3 (CORE.md, COMPONENTS.md, AI_CONTEXT, MANIFEST), FiltersDocumentation enhanced |
| Mar 13, 2026 | **v4.3 Report Store Architecture:** Monolithic → organism architecture. 4 hooks, 9 organisms, `ReportStorePage.tsx` template |
| Mar 11, 2026 | **v4.2 Filter System:** 3 atoms + 3 molecules extracted from monolithic code |
| Mar 11, 2026 | **v4.1 ReportCard grid+list:** Unified card with `layout` prop |
| Mar 11, 2026 | **v4.1 Molecule Push:** 3 atoms, 14 molecules, 1 shim |
| Mar 10, 2026 | **v4.0 Report Store Components:** 4WH doc, evolved Button/SectionHeading/Card |
| Mar 6, 2026 | **v3.4.0 FoundationsContent Modular Split** |
| Mar 1, 2026 | **v3.3.2 AI Context Modularization + Badge CSS Migration** |

---

**Total Files on GitHub:** ~152 files across 8 directories
