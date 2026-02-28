# GitHub Repository Manifest - Design System vs 26

**Last Updated:** February 28, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`

This document lists every file in the GitHub repository, organized by directory, with purpose and status notes. Use this as a reference when syncing between Figma Make and GitHub.

---

## Root Directory

| File | Purpose | Status |
|------|---------|--------|
| `.gitignore` | Git ignore rules | Stable |
| `.npmrc` | npm registry config | Stable |
| `package.json` | Project dependencies & scripts | Stable |
| `postcss.config.mjs` | PostCSS configuration | Stable |
| `vite.config.ts` | Vite build configuration | Stable |
| `Design system vs 26.zip` | Original project archive | Archive |
| `README.md` | Project readme | Stable |
| `GITHUB_REPO_MANIFEST.md` | **This file** - Repository inventory | Updated Feb 28, 2026 |

### Root - AI Context Files (v3.2)

| File | Purpose | Version |
|------|---------|--------|
| `AI_CONTEXT_DESIGN_SYSTEM.md` | Primary AI context - full system reference | v3.2 (Font Pairing + Container + Responsive) |
| `AI_DESIGN_SYSTEM_PROMPT.md` | AI prompt instructions for code generation | v3.2 |
| `DESIGN_SYSTEM_AI_CONTEXT.md` | Alternative AI context format | v3.2 |

### Root - Design System Reference Docs

| File | Purpose |
|------|--------|
| `14PX_DESIGN_SYSTEM_INTEGRATION.md` | 14px base font integration decisions |
| `COMPONENT_GUIDELINES_4WH.md` | Component guidelines (What/Why/When/How) |
| `DESIGN_SYSTEM_AI_PROMPT.md` | Design system AI prompt (4th doc) |
| `FIGMA_MAKE_IMPORT_PROMPTS.md` | Prompts for importing Figma frames |
| `QUICK_START_PROMPT.md` | Quick start AI prompt |
| `README_AI_PORTABLE_SYSTEM.md` | AI portable system guide |

---

## `src/` Directory Structure

```
src/
 +-- app/
 |   +-- App.tsx                    # Main app entry (uses react-router-dom)
 |   +-- components/                # All UI components
 |   +-- hooks/                     # Custom React hooks
 +-- design-system/                 # Design tokens & showcase components
 +-- imports/                       # SVG imports from Figma
 +-- styles/                        # CSS files (theme, fonts, tailwind)
```

---

## `src/app/App.tsx`

Main application entry point using `react-router-dom` with routes:
- `/` - DesignSystemDashboard
- `/figma-comparison` - FigmaButtonComparison
- `/shimmer-demo` - ShimmerDemo
- `/arrow-animation-test` - ArrowAnimationTest

---

## `src/app/hooks/` (10 files)

| File | Purpose |
|------|--------|
| `index.ts` | Barrel export for all hooks |
| `useActiveSection.ts` | Track which section is currently visible |
| `useCounter.ts` | Animated counter for impact metrics |
| `useHeroVisibility.ts` | Detect if hero section is in viewport |
| `useMagneticEffect.ts` | Magnetic cursor effect for buttons |
| `useReadingProgress.ts` | Page reading progress percentage |
| `useScrollAnimation.ts` | Scroll-triggered animations |
| `useScrollDirection.ts` | Detect scroll up/down direction |
| `useSectionProgress.ts` | Section scroll progress tracking |
| `useShimmer.ts` | **DO NOT DELETE** - Used by CTALink.tsx & InlineLink.tsx |

---

## `src/app/components/` - Core Components

### Case Study Page Sections

| File | Purpose |
|------|--------|
| `HeroSection.tsx` | Hero section with animated title |
| `ClientContextSection.tsx` | Client context with sidebar |
| `ChallengesSection.tsx` | Challenges cards (intentional 1000px JS calc) |
| `MethodologySection.tsx` | Methodology timeline |
| `EngagementObjectivesSection.tsx` | Engagement objectives |
| `ImpactSection.tsx` | Impact metrics with counters |
| `TestimonialSection.tsx` | Client testimonial |
| `ValuePillarsSection.tsx` | Value pillars section |
| `ResourcesSection.tsx` | Resources section |
| `FinalCTASection.tsx` | Final call-to-action |

### Design System Dashboard

| File | Purpose |
|------|--------|
| `DesignSystemDashboard.tsx` | Main dashboard with sidebar navigation |
| `DesignSystemSidebar.tsx` | Sidebar navigation component |
| `FoundationsContent.tsx` | Foundations tab (typography, colors, layout) |
| `ComponentsContent.tsx` | Components tab (buttons, badges, links) |
| `GuidelinesContent.tsx` | Guidelines tab |
| `PatternsContent.tsx` | Patterns tab (intentional demo `max-w-[1200px]`) |
| `ResourcesContent.tsx` | Resources tab |
| `MotionContent.tsx` | Motion & animation tab |

### Interactive Components

| File | Purpose |
|------|--------|
| `Button.tsx` | **Core** - Full button system (4 variants, 4 sizes, shimmer, arrow) |
| `Badge.tsx` | **Core** - Unified badge system (11 themes, 4 sizes, 3 variants, 132 combos) |
| `Label.tsx` | **Separate** - Form-only `<label>` component |
| `AnimatedArrow.tsx` | **Core** - 2-arrow replacement animation (Button.tsx dependency) |
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

### Showcase & Demo Components

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

### Token Showcase Components

| File | Purpose |
|------|--------|
| `AllColorsPaletteContent.tsx` | Full color palette display |
| `AllTypographyTokensContent.tsx` | Typography tokens (intentionally hardcoded for demo) |
| `AllSpacingTokensContent.tsx` | Spacing tokens display |
| `AllBorderRadiusTokensContent.tsx` | Border radius tokens |
| `AllElevationTokensContent.tsx` | Elevation/shadow tokens |
| `AllLayoutGridTokensContent.tsx` | Layout grid tokens |

### Barrel Export

| File | Purpose |
|------|--------|
| `index.ts` | Barrel export for all components |

### Documentation (`.md` files in components/)

| File | Purpose |
|------|--------|
| `ARROW_ANIMATION_BUG_FIX.md` | Arrow animation bug fix documentation |
| `ARROW_ANIMATION_EXPLAINED.md` | Arrow animation technical explanation |
| `BUTTON_SIZING_STRATEGY.md` | Button size hierarchy guide |
| `BUTTON_SYSTEM.md` | Button system documentation |
| `LINK_SYSTEM_DOCUMENTATION.md` | Link & CTA system full docs |
| `LINK_SYSTEM_QUICK_REFERENCE.md` | Link system quick reference |
| `NAVBAR_RESPONSIVE.md` | Navbar responsive breakpoints |
| `NAVBAR_TWO_STATE_SYSTEM.md` | Navbar two-state system |
| `README_ANIMATED_ARROW.md` | AnimatedArrow README |
| `SHIMMER_ARROW_COMPATIBILITY_ANALYSIS.md` | Shimmer+Arrow compatibility proof |

### Subdirectories in components/

| Directory | Purpose | On GitHub? |
|-----------|---------|------------|
| `links/` | Link system README | Yes |
| `figma/` | ImageWithFallback (Figma Make system) | No - Figma Make only |
| `ui/` | 48 shadcn/ui components | No - Install locally via shadcn CLI |

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

| File | Purpose |
|------|--------|
| `svg-71vexskqy2.ts` | SVG import |
| `svg-9iiezc6pcw.ts` | SVG import |
| `svg-bveak849j8.ts` | SVG import |
| `svg-fodxwe3cpi.ts` | SVG import |
| `svg-oz6ytj1r6m.ts` | SVG import |
| `svg-prdxovizgq.ts` | SVG import |
| `svg-qr93jqxq2j.ts` | SVG import |
| `svg-rxclv7oc08.ts` | SVG import |
| `svg-tdw4zdqe35.ts` | SVG import |
| `svg-wnwh09scro.ts` | SVG import |
| `svg-y9b0h1ep1a.ts` | SVG import |
| `svg-yymkswet8x.ts` | SVG import |

**Note:** 16 additional `.tsx` Figma frame imports exist locally in Figma Make but are NOT on GitHub (they are environment-specific).

---

## `src/styles/` (4 files)

| File | Purpose | Key Contents |
|------|---------|-------------|
| `theme.css` | All CSS custom properties | Font Pairing System, Container Widths, Responsive Padding, Typography Scale (Major Third 1.25), Color System (92-5-3 hierarchy), Button Size System, Badge Animations |
| `fonts.css` | Font imports only | DM Sans (body/UI), Noto Serif (headings/display) |
| `index.css` | CSS entry point | Imports |
| `tailwind.css` | Tailwind directives | Base layer |

---

## Files NOT on GitHub (Figma Make Only)

| File/Directory | Reason |
|----------------|--------|
| `src/app/components/figma/ImageWithFallback.tsx` | Figma Make system component |
| `src/app/components/ui/` (48 shadcn files) | Install via shadcn CLI locally |
| `src/imports/*.tsx` (16 Figma frame imports) | Figma Make environment-specific |
| `src/app/test-link-system.tsx` | Development scratch file |

---

## Key Migration Notes

### Intentional Exceptions (DO NOT "FIX")

1. **AllTypographyTokensContent.tsx** - Hardcoded values are intentional (demo purposes)
2. **ChallengesSection.tsx** - Two `1000px` references (lines ~85/88) are JS card-width calc, not container constraints
3. **ContactModal.tsx** - `max-w-[500px]` is intentional modal width
4. **PatternsContent.tsx** - One `max-w-[1200px]` inside a demo code string literal
5. **useShimmer.ts** - Still actively used by CTALink.tsx and InlineLink.tsx, DO NOT DELETE

### App.tsx Differences

- **GitHub version:** Uses `react-router-dom` with 4 routes (correct for VS Code project)
- **Figma Make version:** Simplified `<DesignSystemDashboard />` (correct for Figma Make environment)
- **DO NOT overwrite** the GitHub version from Figma Make

### Color System

- All 53 broken `--accent-red` CSS variable references migrated to `--brand-red`
- 9 incorrect Ken Bold Red hex values fixed
- 30 utility color tokens added to `theme.css`
- Brand Red `#b01f24` for CTAs only (5% usage)

---

## Sync Checklist

When syncing from Figma Make to GitHub:

1. **Always verify** App.tsx differences (routing vs simple render)
2. **Never push** `figma/ImageWithFallback.tsx` or `ui/` directory
3. **Never push** `src/imports/*.tsx` Figma frame files
4. **Always push** component `.tsx` changes and `.md` documentation updates
5. **Always push** `theme.css` and `fonts.css` token changes
6. **Always push** the 3 AI context `.md` files when updated
7. **Check** for new hooks in `src/app/hooks/` that need syncing

---

## Version History

| Date | Version | Changes |
|------|---------|--------|
| Feb 28, 2026 | v3.2 | Font Pairing + Container Width + Responsive Padding tokens; 11 process artifacts deleted; AnimatedArrow + design-system showcase components + 10 doc .md files pushed |

---

**Total Files on GitHub:** ~95 files across 4 main directories  
**Total Commits (this session):** ~18 commits (3 AI context updates + 11 deletions + 4 component/doc pushes)
