# GitHub Repository Manifest - Design System vs 26

**Last Updated:** March 1, 2026  
**Branch:** `main`  
**Repo:** `vsoffice001-cloud/Design-System-vs-26`  
**Design System Version:** v3.3.2

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
| `README.md` | Project readme (v3.3 doc hierarchy) | Updated Mar 1 |
| `GITHUB_REPO_MANIFEST.md` | **This file** — Repository inventory | Updated Mar 1 |

### Root - AI Context Files (v3.3.2)

| File | Purpose | Version |
|------|---------|--------|
| `DESIGN_SYSTEM_AI_CONTEXT.md` | Primary AI context — 92-5-3, typography, page assembly, token cross-reference | v3.3.2 (53KB, read-only via API) |
| `DESIGN_SYSTEM_UPDATES.md` | Versioned patches to AI Context — secondary button, Badge migration log | v3.3.2 |
| `COMPONENT_GUIDELINES_4WH.md` | 4W+H for every component — 17 entries + 5 flowcharts | v3.3 |
| `design-system-checklist.md` | File map — 45 files, 10 groups, barrel export instructions | v2.0 |
| `QUICK_START_PROMPT.md` | Copy-paste prompt for fast AI sessions | v3.3 |
| `GITHUB_PUSH_GUIDE.md` | Push checklist by Atomic level, merge safety, commit format | v1.3 |

### Root - Design System Reference Docs

| File | Purpose | Status |
|------|---------|--------|
| `BADGES_DOCUMENTATION.md` | Badge system documentation | **v3.0** — aligned with CSS migration |
| `RESOURCE_CARD_DOCUMENTATION.md` | ResourceCard deep-dive (7 variants, 53 tokens) | v3.0 |
| `14PX_DESIGN_SYSTEM_INTEGRATION.md` | 14px base font integration decisions | Stable |
| `FIGMA_MAKE_IMPORT_PROMPTS.md` | Prompts for importing Figma frames | Stable |
| `PROJECT_STRUCTURE.md` | Complete file tree inventory | v3.2.1 |
| `TECHNICAL_HANDOVER.md` | Technical handover — **historical reference only** (Feb 17 content, staleness warnings added) | Deprecated |

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

## `src/app/App.tsx`

Main application entry point using `react-router-dom` with routes:
- `/` - DesignSystemDashboard
- `/figma-comparison` - FigmaButtonComparison
- `/shimmer-demo` - ShimmerDemo
- `/arrow-animation-test` - ArrowAnimationTest

**IMPORTANT:** The GitHub version uses `react-router-dom` routing. The Figma Make version renders `<DesignSystemDashboard />` directly. **Never overwrite the GitHub version from Figma Make.**

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
| `useResponsiveGutter.ts` | Responsive pixel-based gutter (24px mobile / 32px desktop) |
| `useScrollAnimation.ts` | Scroll-triggered animations |
| `useScrollDirection.ts` | Detect scroll up/down direction |
| `useSectionProgress.ts` | Section scroll progress tracking |
| `useShimmer.ts` | **DO NOT DELETE** — Used by CTALink.tsx & InlineLink.tsx |

---

## `src/app/components/` - Core Components

### Case Study Page Sections

| File | Purpose | Notes |
|------|---------|-------|
| `HeroSection.tsx` | Hero section with animated title | |
| `ClientContextSection.tsx` | Client context with sidebar | Logo prop-driven |
| `ChallengesSection.tsx` | Challenges cards (intentional 1000px JS calc) | |
| `MethodologySection.tsx` | Methodology timeline | |
| `EngagementObjectivesSection.tsx` | Engagement objectives | |
| `ImpactSection.tsx` | Impact metrics with counters | |
| `TestimonialSection.tsx` | Client testimonial | |
| `ValuePillarsSection.tsx` | Value pillars section | |
| `ResourcesSection.tsx` | Resources Masonry grid | Unsplash URLs |
| `FinalCTASection.tsx` | Final call-to-action | |

### Interactive Components

| File | Purpose |
|------|--------|
| `Button.tsx` | **Core** — 4 variants, 4 sizes, shimmer, arrow, secondary two-state (v3.3) |
| `Badge.tsx` | **Core** — 11 themes, 4 sizes, 3 variants — **CSS custom property driven** (v3.3.2) |
| `Label.tsx` | Form-only `<label>` component |
| `AnimatedArrow.tsx` | 2-arrow replacement animation (Button.tsx dependency) |
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

### Dashboard, Showcase, Token Components

_(Same as before — DesignSystemDashboard, Sidebar, 6 content tabs, 6 token showcases, 12 demo/showcase components)_

### Barrel Export

| File | Purpose |
|------|--------|
| `index.ts` | Barrel export for all components |

---

## `src/styles/` (4 files)

| File | Purpose | Key Contents |
|------|---------|-------------|
| `theme.css` | All CSS custom properties | Font Pairing, Containers, Typography Scale (Major Third 1.25), Color System (92-5-3), Button tokens, **Badge tokens (`--badge-*` size/shape/animation)**, Badge color consumption rules, ResourceCard tokens (`--rc-*`), `--text-primary`/`--text-secondary`, responsive `--section-py-standard` |
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

### App.tsx Differences

- **GitHub:** `react-router-dom` with 4 routes
- **Figma Make:** Renders `<DesignSystemDashboard />` directly
- **NEVER overwrite** GitHub version from Figma Make

---

## Version History

| Date | Changes |
|------|---------|
| Mar 1, 2026 | **v3.3.2 Doc Consolidation:** BADGES_DOCUMENTATION.md rewritten to v3.0 (aligned with CSS migration, 18KB→12KB); TECHNICAL_HANDOVER.md marked as historical with staleness warnings (19KB→6KB); MANIFEST updated with all migration entries |
| Mar 1, 2026 | **v3.3.2 Badge CSS Migration (4 phases):** Phase 1: 17 `--badge-*` tokens added to theme.css; Phase 2: Badge.tsx consumes CSS vars for sizes/shapes; Phase 3: CSS color consumption rules added; Phase 4: All Badge colors via CSS custom properties, removed inline styles. Bug fix: CSS hover rules now functional. File reduction: Badge 27→22KB, theme 30→25KB |
| Mar 1, 2026 | **v3.3 AI Context Addendum:** Created DESIGN_SYSTEM_UPDATES.md (patches for 53KB AI Context); Updated README.md with doc hierarchy; Updated GITHUB_PUSH_GUIDE.md v1.3 with checklist cross-refs |
| Mar 1, 2026 | **v3.3 Documentation:** design-system-checklist v2.0 (45 files, 10 groups); COMPONENT_GUIDELINES_4WH.md updated (secondary two-state, 4W+H for StickyCTA/ContactModal/NextSectionCTA); QUICK_START_PROMPT.md updated |
| Mar 1, 2026 | **v3.3 Secondary Button:** Two-state secondary (neutral rest → brand-red hover) |
| Mar 1, 2026 | **v3.3.2 Token Cross-Reference:** Shadow usage guide, border radius decision table, badge theme selection matrix |
| Mar 1, 2026 | **v3.3.1 Page Assembly Guide:** Component-level recipes for 7 section types |
| Mar 1, 2026 | **v3.3 Color Usage Guide:** 92-5-3 Color Usage Guide for reports/product pages |
| Mar 1, 2026 | **ResourcesSection system (11 files):** Container, ResourceCard, SubtleVariantSwitcher, useResponsiveGutter, 53 `--rc-*` tokens |
| Feb 28, 2026 | v3.3 sync: 6 new layout components, 4WH docs, barrel exports |
| Feb 28, 2026 | v3.2 sync: Font Pairing + Container Width + Responsive Padding tokens, AnimatedArrow, 10 doc .md files |

---

**Total Files on GitHub:** ~106 files across 4 main directories
