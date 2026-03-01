# GitHub Repository Manifest - Design System vs 26

**Last Updated:** March 1, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`  
**Design System Version:** v3.3.2

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
| `GITHUB_REPO_MANIFEST.md` | **This file** — Canonical repository inventory | Updated Mar 1 |

### Root - AI Context System (v3.3.2 — Modularized)

| File | Purpose | Version |
|------|---------|--------|
| `DESIGN_SYSTEM_AI_CONTEXT.md` | **Lightweight index** — points to 6 modules in `ai-context/` | v3.3.2 (3KB index) |
| `DESIGN_SYSTEM_UPDATES.md` | Changelog & migration log (v3.2.1 → v3.3.2) | v3.3.2 |
| `COMPONENT_GUIDELINES_4WH.md` | 4W+H for every component — 17 entries + 5 flowcharts | v3.3 |
| `design-system-checklist.md` | File map — 45 files, 10 groups, barrel export instructions | v2.1 |
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
| `CORE.md` | Overview, critical rules, AI checklist, common mistakes, quality metrics | 5KB |
| `TYPOGRAPHY.md` | Font pairing (Serif/Sans/Mono), Major Third scale (1.25), custom sizes, weights | 4KB |
| `COLORS.md` | 92-5-3 hierarchy, brand/black/warm/red/accent/utility colors, section color recipe | 8KB |
| `COMPONENTS.md` | Button (4 variants + two-state secondary), Link system, Badge (CSS driven), Animation | 7KB |
| `LAYOUT.md` | Spacing scale, 5 container widths, responsive padding, section pattern, page assembly | 7KB |
| `PROMPTS.md` | 7 copy-paste AI implementation prompts | 6KB |

**Total:** ~37KB (down from 53KB monolith)

---

## `src/` Directory Structure

```
src/
 ├── app/
 │   ├── App.tsx                    # Main app entry (uses react-router-dom)
 │   ├── components/                # All UI components
 │   └── hooks/                     # Custom React hooks
 ├── design-system/                 # Design tokens & showcase components
 ├── imports/                       # SVG imports from Figma
 └── styles/                        # CSS files (theme, fonts, tailwind)
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
| `Button.tsx` | **Core** — 4 variants, 4 sizes, shimmer, arrow, secondary two-state |
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

### Layout & Section Components (v3.3)

| File | Purpose |
|------|--------|
| `SectionHeading.tsx` | Reusable heading molecule |
| `SectionWrapper.tsx` | Page section layout wrapper |
| `Card.tsx` | Content container molecule |
| `ScrollToTop.tsx` | Floating scroll button (Motion) |
| `ScrollProgress.tsx` | Generic scroll progress bar |
| `iconColors.ts` | Semantic icon color constants |

### Resource System Components

| File | Purpose |
|------|--------|
| `Container.tsx` | Semantic layout wrapper (5 width presets) |
| `ResourceCard.tsx` | Content card molecule (7 variants, 2 styles, 2 modes) |
| `SubtleVariantSwitcher.tsx` | Designer tool (lucide-react Settings) |

### Design System Dashboard (8 files)

| File | Purpose |
|------|--------|
| `DesignSystemDashboard.tsx` | Main dashboard with sidebar navigation |
| `DesignSystemSidebar.tsx` | Sidebar navigation component |
| `FoundationsContent.tsx` | Foundations tab (typography, colors, layout) |
| `ComponentsContent.tsx` | Components tab (buttons, badges, links) |
| `GuidelinesContent.tsx` | Guidelines tab |
| `PatternsContent.tsx` | Patterns tab (intentional `max-w-[1200px]` in demo string) |
| `ResourcesContent.tsx` | Resources tab |
| `MotionContent.tsx` | Motion & animation tab |

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

### Inline Documentation (10 `.md` files)

| File | Purpose |
|------|--------|
| `ARROW_ANIMATION_BUG_FIX.md` | Arrow animation bug fix |
| `ARROW_ANIMATION_EXPLAINED.md` | Arrow animation technical explanation |
| `BUTTON_SIZING_STRATEGY.md` | Button size hierarchy guide |
| `BUTTON_SYSTEM.md` | Button system documentation |
| `LINK_SYSTEM_DOCUMENTATION.md` | Link & CTA system full docs |
| `LINK_SYSTEM_QUICK_REFERENCE.md` | Link system quick reference |
| `NAVBAR_RESPONSIVE.md` | Navbar responsive breakpoints |
| `NAVBAR_TWO_STATE_SYSTEM.md` | Navbar two-state system |
| `README_ANIMATED_ARROW.md` | AnimatedArrow README |
| `SHIMMER_ARROW_COMPATIBILITY_ANALYSIS.md` | Shimmer+Arrow compatibility proof |

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

## `src/styles/` (4 files)

| File | Purpose | Key Contents |
|------|---------|-------------|
| `theme.css` | All CSS custom properties | Font Pairing, Containers, Typography Scale (Major Third 1.25), Color System (92-5-3), Button tokens, **Badge tokens** (`--badge-*` size/shape/animation + color consumption rules), ResourceCard tokens (`--rc-*`), `--text-primary`/`--text-secondary`, responsive `--section-py-standard` |
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

---

## Sync Checklist (Figma Make → GitHub)

1. **Always verify** App.tsx differences — never overwrite GitHub version
2. **Never push** `figma/ImageWithFallback.tsx`, `ui/` directory, or `src/imports/*.tsx` Figma frames
3. **Always push** component `.tsx` changes and `.md` documentation updates
4. **Always push** `theme.css` and `fonts.css` token changes
5. **Always push** AI context `.md` files when updated
6. **Check** for new hooks in `src/app/hooks/` that need syncing
7. **Refer to** `GITHUB_PUSH_GUIDE.md` for the complete pre-push checklist

---

## Cleanup Changelog

| Date | Action | Files Affected |
|------|--------|----------------|
| Mar 1, 2026 | AI Context modularized (53KB → 6 modules in `ai-context/`) | DESIGN_SYSTEM_AI_CONTEXT.md, ai-context/*.md |
| Mar 1, 2026 | Deleted PROJECT_STRUCTURE.md (merged into MANIFEST) | PROJECT_STRUCTURE.md |
| Mar 1, 2026 | Badge CSS migration Phase 1–4 | theme.css, Badge.tsx |
| Mar 1, 2026 | Doc consolidation: BADGES_DOCUMENTATION v3.0, TECHNICAL_HANDOVER deprecated | 3 root .md files |
| Mar 1, 2026 | Phase 1: Deleted 4 stale AI context files | AI_CONTEXT_DESIGN_SYSTEM.md, AI_DESIGN_SYSTEM_PROMPT.md, DESIGN_SYSTEM_AI_PROMPT.md, README_AI_PORTABLE_SYSTEM.md |
| Mar 1, 2026 | Phase 4: Deleted 3 standalone badge impls (51.6KB dead code) | badges/SectionLabel.tsx, ObjectivePill.tsx, InfoCardLabel.tsx |
| Mar 1, 2026 | Phase 5: Deleted binary archive | Design system vs 26.zip |
| Mar 1, 2026 | Deleted orphan useResponsiveGutter.tsx | src/app/hooks/useResponsiveGutter.tsx |

---

## Version History

| Date | Changes |
|------|---------|
| Mar 1, 2026 | **v3.3.2 AI Context Modularization:** Split 53KB monolith into 6 modules in `ai-context/` (CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT, PROMPTS); updated DESIGN_SYSTEM_AI_CONTEXT.md to 3KB index; marked DESIGN_SYSTEM_UPDATES.md as pure changelog |
| Mar 1, 2026 | **v3.3.2 Inventory Consolidation:** Merged PROJECT_STRUCTURE.md into MANIFEST; deleted PROJECT_STRUCTURE.md |
| Mar 1, 2026 | **v3.3.2 Doc Consolidation:** BADGES_DOCUMENTATION.md v3.0; TECHNICAL_HANDOVER.md deprecated; checklist v2.1 |
| Mar 1, 2026 | **v3.3.2 Badge CSS Migration (4 phases):** All Badge styling via CSS custom properties |
| Mar 1, 2026 | **v3.3 AI Context Addendum:** DESIGN_SYSTEM_UPDATES.md, README doc hierarchy, GITHUB_PUSH_GUIDE v1.3 |
| Mar 1, 2026 | **v3.3 Documentation:** design-system-checklist v2.0, 4WH updated, QUICK_START updated |
| Mar 1, 2026 | **v3.3 Secondary Button:** Two-state secondary (neutral rest → brand-red hover) |
| Mar 1, 2026 | **ResourcesSection system (11 files):** Container, ResourceCard, SubtleVariantSwitcher, useResponsiveGutter, 53 `--rc-*` tokens |
| Feb 28, 2026 | v3.3 sync: 6 new layout components, 4WH docs, barrel exports |
| Feb 28, 2026 | v3.2 sync: Font Pairing + Container Width tokens, AnimatedArrow, 10 doc .md files |

---

**Total Files on GitHub:** ~111 files across 5 directories (root, ai-context, src/app, src/design-system, src/styles)
