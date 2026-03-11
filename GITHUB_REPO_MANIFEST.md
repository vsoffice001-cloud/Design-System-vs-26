# GitHub Repository Manifest - Design System vs 26

**Last Updated:** March 10, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`  
**Design System Version:** v4.0

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
| `GITHUB_REPO_MANIFEST.md` | **This file** — Canonical repository inventory | Updated Mar 10 |

### Root - AI Context System (v4.0)

| File | Purpose | Version |
|------|---------|--------|
| `DESIGN_SYSTEM_AI_CONTEXT.md` | **Lightweight index** — points to 6 modules in `ai-context/` | v3.4.0 (3KB index) |
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
 │   │   └── foundations/           # Modular Foundations tab content (v3.4.0)
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

### ResourcesSection (most complex organism)
```
ResourcesSection.tsx
  ├── ResourceCard.tsx (7 card variants, 53 --rc-* CSS tokens)
  ├── Container.tsx (layout wrapper, 5 width presets)
  ├── SubtleVariantSwitcher.tsx (designer tool)
  ├── useResponsiveGutter.ts (24/32px responsive, 640px breakpoint)
  ├── react-responsive-masonry (npm)
  ├── Button.tsx (CTA button)
  └── theme.css (--rc-* token block)
```

### Navbar (second most complex)
```
Navbar.tsx
  ├── Button.tsx
  ├── ContactModal.tsx
  ├── useScrollDirection.ts
  └── useHeroVisibility.ts
```

### Link System
```
CTALink.tsx ───┬─── useShimmer.ts (DO NOT DELETE)
InlineLink.tsx ─┘
```

### Badge System
```
Badge.tsx (canonical — 11 themes, 4 sizes, 3 variants, CSS custom property driven)
  ├── theme.css (--badge-* size/shape/animation tokens + color consumption rules)
  └── badges/index.ts (deprecated re-exports for backward compat)
```

### Foundations Content (v3.4.0 — Modular)
```
DesignSystemDashboard.tsx
  └── FoundationsContent.tsx (re-export hub, ~1KB)
        ├── foundations/FoundationsHelpers.tsx
        ├── foundations/ColorsContent.tsx (36KB)
        ├── foundations/TypographyContent.tsx (23KB)
        ├── foundations/SpacingContent.tsx (3KB)
        ├── foundations/LayoutGridContent.tsx (25KB)
        ├── foundations/ElevationBorderRadius.tsx (17KB)
        ├── AllColorsPaletteContent.tsx
        ├── AllTypographyTokensContent.tsx
        ├── AllSpacingTokensContent.tsx
        ├── AllLayoutGridTokensContent.tsx
        ├── AllElevationTokensContent.tsx
        └── AllBorderRadiusTokensContent.tsx
```

---

## `src/app/App.tsx`

Main application entry point using `react-router-dom` with routes:
- `/` → DesignSystemDashboard
- `/figma-comparison` → FigmaButtonComparison
- `/shimmer-demo` → ShimmerDemo
- `/arrow-animation-test` → ArrowAnimationTest

**IMPORTANT:** GitHub version uses `react-router-dom` routing. Figma Make version renders `<DesignSystemDashboard />` directly. **Never overwrite GitHub version from Figma Make.**

---

## `src/app/hooks/` (11 files)

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

---

## `src/app/components/` — Core Components

### Case Study Page Sections (10 organisms)

| File | Background | Notes |
|------|-----------|-------|
| `HeroSection.tsx` | BLACK | Animated title |
| `ClientContextSection.tsx` | WHITE | Sidebar layout, prop-driven logo |
| `ChallengesSection.tsx` | WARM | Intentional 1000px JS calc |
| `EngagementObjectivesSection.tsx` | WHITE | Sticky sidebar |
| `MethodologySection.tsx` | WARM | Scroll timeline |
| `ImpactSection.tsx` | WHITE | Counter metrics |
| `ValuePillarsSection.tsx` | WHITE | Grid-12 |
| `TestimonialSection.tsx` | WHITE | Centered quote |
| `ResourcesSection.tsx` | BLACK | Masonry grid, Unsplash URLs |
| `FinalCTASection.tsx` | WHITE | Conversion CTA |

### Interactive Components (16 molecules)

| File | Purpose |
|------|--------|
| `Button.tsx` | **Core v4.0** — 4 variants, **5 sizes (xs/sm/md/lg/xl)**, shimmer, arrow, secondary two-state, **iconOnly, brand gradient** |
| `Badge.tsx` | **Core** — 11 themes, 4 sizes, 3 variants — CSS custom property driven |
| `Label.tsx` | Form-only `<label>` component |
| `AnimatedArrow.tsx` | 2-arrow replacement animation (Button.tsx dep) |
| `CTALink.tsx` | Unified hover CTA link (uses useShimmer) |
| `InlineLink.tsx` | Paragraph interlinking (uses useShimmer) |
| `Navbar.tsx` | Responsive two-state navbar |
| `ContactModal.tsx` | Contact form modal (intentional max-w-[500px]) |
| `StickyCTA.tsx` | Sticky CTA button |
| `ReadingProgressBar.tsx` | Reading progress indicator |
| `TableOfContents.tsx` | Table of contents navigation |
| `NextSectionCTA.tsx` | Next section CTA link |
| `CollapsibleSection.tsx` | Expandable/collapsible section |
| `CodeBlockWithCopy.tsx` | Code block with copy button |
| `SpacingHelpers.tsx` | Spacing utility components |
| `VariantSwitcher.tsx` | Component variant switcher UI |

### Layout & Section Components (v4.0)

| File | Purpose |
|------|--------|
| `SectionHeading.tsx` | **v4.0** — Prop-driven heading molecule (title/subtitle/label/action/endSlot/labelPulse) |
| `SectionWrapper.tsx` | Page section layout wrapper |
| `Card.tsx` | **v4.0** — Content container (ref-based hover, as prop, onClick, typed shadow/border maps) |
| `ScrollToTop.tsx` | Floating scroll button (Motion) |
| `ScrollProgress.tsx` | Generic scroll progress bar |
| `iconColors.ts` | Semantic icon color constants |

### Resource System Components

| File | Purpose |
|------|--------|
| `Container.tsx` | Semantic layout wrapper (5 width presets) |
| `ResourceCard.tsx` | Content card molecule (7 variants, 2 styles, 2 modes) |
| `SubtleVariantSwitcher.tsx` | Designer tool (lucide-react Settings) |

### Design System Dashboard (8 files + 6 foundations sub-files)

| File | Purpose |
|------|--------|
| `DesignSystemDashboard.tsx` | Main dashboard with sidebar navigation |
| `DesignSystemSidebar.tsx` | Sidebar navigation component |
| `FoundationsContent.tsx` | **Re-export hub** (~1KB) |
| `ComponentsContent.tsx` | Components tab (buttons, badges, links) |
| `GuidelinesContent.tsx` | Guidelines tab |
| `PatternsContent.tsx` | Patterns tab (intentional `max-w-[1200px]` in demo string) |
| `ResourcesContent.tsx` | Resources tab |
| `MotionContent.tsx` | Motion & animation tab |

### `foundations/` — Modular Foundations Content (v3.4.0)

| File | Content | Size |
|------|---------|------|
| `FoundationsHelpers.tsx` | Shared components: DocSection, InfoBlock, ColorCard, TextColorCard, CodeExample, TypeScaleDemo | 5KB |
| `ColorsContent.tsx` | Color system (11 sections) | 36KB |
| `TypographyContent.tsx` | Type Scale, Font Pairing, Font Weights, Custom Font Sizes | 23KB |
| `SpacingContent.tsx` | Spacing Scale, Visual Rhythm | 3KB |
| `LayoutGridContent.tsx` | Container Widths, Grid System, Breakpoints | 25KB |
| `ElevationBorderRadius.tsx` | Shadow System, Border Radius Scale | 17KB |

### Token Showcase Components (6 files)

| File | Purpose |
|------|--------|
| `AllColorsPaletteContent.tsx` | Full color palette display |
| `AllTypographyTokensContent.tsx` | Typography tokens (intentionally hardcoded for demo) |
| `AllSpacingTokensContent.tsx` | Spacing tokens display |
| `AllBorderRadiusTokensContent.tsx` | Border radius tokens |
| `AllElevationTokensContent.tsx` | Elevation/shadow tokens |
| `AllLayoutGridTokensContent.tsx` | Layout grid tokens |

### Showcase & Demo Components (12 files)

| File | Purpose |
|------|--------|
| `ButtonDocumentation.tsx` | Button component documentation page |
| `ButtonControlsGuide.tsx` | Interactive button controls guide |
| `ButtonAnimationTest.tsx` | Button animation test page |
| `FigmaButtonComparison.tsx` | Figma vs code button comparison |
| `BadgeLabelsDocumentation.tsx` | Badge & labels documentation |
| `BadgeShowcase.tsx` | Badge component showcase |
| `LinksDocumentation.tsx` | Links system documentation page |
| `LinkSystemDemo.tsx` | Link system demo page |
| `ShimmerDemo.tsx` | Shimmer effect demo page |
| `AnimatedArrowDemo.tsx` | Arrow animation demos |
| `AnimatedArrowQuickRef.tsx` | Arrow quick reference card |
| `ArrowAnimationTest.tsx` | Arrow animation test page |

### Barrel Export & Subdirectories

| File | Purpose |
|------|--------|
| `index.ts` | Barrel export for all components |
| `badges/index.ts` | Pure re-exports from Badge.tsx (backward compat) |
| `links/README.md` | Link & CTA component system overview |

---

## `src/design-system/` (8 files)

| File | Purpose |
|------|--------|
| `tokens.ts` | All design tokens as TypeScript constants |
| `index.ts` | Barrel export |
| `EXAMPLES.tsx` | Usage examples |
| `ColorSwatch.tsx` | Color swatch display components |
| `ComponentCard.tsx` | Component showcase card wrappers |
| `SpacingScale.tsx` | Spacing scale visualization |
| `TypeScale.tsx` | Typography scale visualization |
| `README.md` | Design system components guide |

---

## `src/imports/` (12 SVG files)

SVG path data files used by components: `svg-*.ts` (12 files)

---

## `src/styles/` (5 files)

| File | Purpose | Key Contents |
|------|---------|-------------|
| `theme.css` | All CSS custom properties | Font Pairing, Containers, Typography Scale, Color System (92-5-3), Button tokens, Badge tokens, ResourceCard tokens |
| `report-store-additions.css` | **NEW v4.0** — Report Store CSS classes | `:focus-visible` ring, `.scrollbar-hide`, `.img-zoom`, `.container-padding`, `.glass-header`, `.card-reveal`, `.skeleton-shimmer`, `@keyframes fadeUp/marquee/skeleton-pulse`, `prefers-reduced-motion` blocks, `--radius-element/--radius-inner` tokens |
| `fonts.css` | Font imports only | DM Sans (body/UI), Noto Serif (headings/display) |
| `index.css` | CSS entry point | Imports |
| `tailwind.css` | Tailwind directives | Base layer |

---

## Files NOT on GitHub (Figma Make Environment Only)

| File/Directory | Reason |
|----------------|--------|
| `src/app/components/figma/ImageWithFallback.tsx` | Figma Make system component (protected) |
| `src/app/components/ui/` (48 shadcn files) | Figma Make scaffolding — zero imports |
| `src/imports/*.tsx` (16 Figma frame imports) | Figma Make environment-specific |

---

## Key Migration Notes

### Intentional Exceptions (DO NOT "FIX")

1. **AllTypographyTokensContent.tsx** — Hardcoded values are intentional (demo)
2. **ChallengesSection.tsx** — `1000px` is JS card-width calc, not container
3. **ContactModal.tsx** — `max-w-[500px]` is intentional modal width
4. **PatternsContent.tsx** — `max-w-[1200px]` inside demo code string
5. **useShimmer.ts** — Actively used by CTALink + InlineLink, DO NOT DELETE

### SectionHeading v4.0 BREAKING CHANGE

The SectionHeading API changed from children-based to prop-based:
```tsx
// OLD (v3.4)
<SectionHeading level={2} eyebrow="X">Title</SectionHeading>

// NEW (v4.0)
<SectionHeading level={2} label="X" title="Title" />
```
Existing case study section files that use the old API need updating.

---

## Sync Checklist (Figma Make → GitHub)

1. **Always verify** App.tsx differences — never overwrite GitHub version
2. **Never push** `figma/ImageWithFallback.tsx`, `ui/` directory, or `src/imports/*.tsx` Figma frames
3. **Always push** component `.tsx` changes and `.md` documentation updates
4. **Always push** `theme.css`, `report-store-additions.css`, and `fonts.css` token changes
5. **Always push** AI context `.md` files when updated
6. **Check** for new hooks in `src/app/hooks/` that need syncing
7. **Refer to** `GITHUB_PUSH_GUIDE.md` for the complete pre-push checklist
8. **Large files (>44KB):** Split into sub-files before pushing (proven push ceiling is ~44KB)

---

## Cleanup Changelog

| Date | Action | Files Affected |
|------|--------|----------------|
| Mar 10, 2026 | **v4.0 Report Store sync** — 3 docs, 3 evolved components, 1 CSS additions file | REPORT_STORE_COMPONENTS_4WH.md, DESIGN_SYSTEM_UPDATES.md, ai-context/CORE.md, Button.tsx, SectionHeading.tsx, Card.tsx, report-store-additions.css |
| Mar 6, 2026 | FoundationsContent.tsx split into 6 modular sub-files in `foundations/` | FoundationsContent.tsx, foundations/*.tsx (6 files) |
| Mar 6, 2026 | Dashboard alignment plan: all 5 phases pushed to GitHub | PatternsContent, LinksDocumentation, ButtonDocumentation, DesignSystemDashboard, FoundationsContent |
| Mar 1, 2026 | AI Context modularized (53KB → 6 modules in `ai-context/`) | DESIGN_SYSTEM_AI_CONTEXT.md, ai-context/*.md |
| Mar 1, 2026 | Badge CSS migration Phase 1–4 | theme.css, Badge.tsx |
| Mar 1, 2026 | Doc consolidation: BADGES_DOCUMENTATION v3.0, TECHNICAL_HANDOVER deprecated | 3 root .md files |
| Mar 1, 2026 | Deleted 4 stale AI context files, 3 standalone badge impls (51.6KB dead code) | 7 files |

---

## Version History

| Date | Changes |
|------|---------||
| Mar 10, 2026 | **v4.0 Report Store Components:** `REPORT_STORE_COMPONENTS_4WH.md` (33KB, 22 components, 4 flowcharts); `report-store-additions.css` (4KB, 10 new CSS classes); Button.tsx v4.0 (xs size, brand, iconOnly); SectionHeading.tsx v4.0 (prop-driven API, action/slots); Card.tsx v4.0 (ref-based hover, as/onClick); `CORE.md` v4.0 (Report Store reading order); `DESIGN_SYSTEM_UPDATES.md` v4.0 changelog |
| Mar 6, 2026 | **v3.4.0 FoundationsContent Modular Split:** 110KB monolith → 6 sub-files in `foundations/`; Dashboard alignment all 5 phases on GitHub |
| Mar 1, 2026 | **v3.3.2 AI Context Modularization:** 53KB → 6 modules in `ai-context/`; Badge CSS Migration (4 phases); Doc consolidation |
| Mar 1, 2026 | **v3.3 Secondary Button:** Two-state secondary; ResourcesSection system (11 files, 53 tokens) |
| Feb 28, 2026 | v3.3 sync: 6 new layout components, 4WH docs, barrel exports |
| Feb 28, 2026 | v3.2 sync: Font Pairing + Container Width tokens, AnimatedArrow, 10 doc .md files |

---

**Total Files on GitHub:** ~120 files across 6 directories (root, ai-context, src/app, src/app/components/foundations, src/design-system, src/styles)
