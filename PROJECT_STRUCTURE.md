# Project Structure & File Inventory

**Last Updated:** March 1, 2026 (post-cleanup)  
**Version:** 3.2.1  
**Total Files on GitHub:** ~90 files across 3 main directories

Complete file listing for the VS Design System project (case study web page + design system dashboard).  
This is the **single source of truth** for file inventory (replaces former GITHUB_REPO_MANIFEST.md).

---

## Directory Tree

```
vsoffice001-cloud/Design-System-vs-26/
├── src/
│   ├── app/
│   │   ├── App.tsx                          # Entry point (react-router-dom on GitHub)
│   │   ├── components/
│   │   │   ├── index.ts                     # Barrel exports for all components
│   │   │   │
│   │   │   ├── # ── CORE MOLECULES ──
│   │   │   ├── Button.tsx                   # 4 variants, 4 sizes, shimmer, arrow
│   │   │   ├── Badge.tsx                    # 11 themes, 4 sizes, 3 variants (132 combos)
│   │   │   ├── Label.tsx                    # Form-only <label> (NOT section headers)
│   │   │   ├── AnimatedArrow.tsx            # 2-arrow replacement animation
│   │   │   ├── CTALink.tsx                  # Text + arrow CTA (uses useShimmer)
│   │   │   ├── InlineLink.tsx               # Paragraph links (uses useShimmer)
│   │   │   │
│   │   │   ├── # ── LAYOUT & UTILITY MOLECULES ──
│   │   │   ├── Container.tsx                # Semantic width wrapper (5 presets)
│   │   │   ├── Navbar.tsx                   # Two-state responsive navbar
│   │   │   ├── ContactModal.tsx             # Contact form modal
│   │   │   ├── StickyCTA.tsx                # Floating CTA button
│   │   │   ├── ReadingProgressBar.tsx       # Scroll progress indicator
│   │   │   ├── TableOfContents.tsx          # Sidebar navigation
│   │   │   ├── NextSectionCTA.tsx           # Scroll-to-next prompt
│   │   │   ├── CodeBlockWithCopy.tsx        # Code display with copy
│   │   │   ├── CollapsibleSection.tsx       # Expandable content
│   │   │   ├── VariantSwitcher.tsx          # Component variant toggle
│   │   │   ├── SpacingHelpers.tsx           # Spacing utility components
│   │   │   │
│   │   │   ├── # ── RESOURCE SYSTEM MOLECULES ──
│   │   │   ├── ResourceCard.tsx             # 7-variant token-driven card
│   │   │   ├── SubtleVariantSwitcher.tsx    # Designer tool (lucide-react Settings)
│   │   │   │
│   │   │   ├── # ── CASE STUDY ORGANISMS ──
│   │   │   ├── HeroSection.tsx              # 1. Black hero
│   │   │   ├── ClientContextSection.tsx     # 2. White, sidebar layout
│   │   │   ├── ChallengesSection.tsx        # 3. Warm, dynamic cards
│   │   │   ├── EngagementObjectivesSection.tsx # 4. White, sticky sidebar
│   │   │   ├── MethodologySection.tsx       # 5. Warm, scroll timeline
│   │   │   ├── ImpactSection.tsx            # 6. White, counter metrics
│   │   │   ├── ValuePillarsSection.tsx      # 7. White, grid-12
│   │   │   ├── TestimonialSection.tsx       # 8. White, centered quote
│   │   │   ├── ResourcesSection.tsx         # 9. Dark gradient, Masonry
│   │   │   ├── FinalCTASection.tsx          # 10. White, conversion CTA
│   │   │   │
│   │   │   ├── # ── v3.3 LAYOUT COMPONENTS ──
│   │   │   ├── SectionHeading.tsx           # Reusable heading molecule
│   │   │   ├── SectionWrapper.tsx           # Section layout wrapper
│   │   │   ├── Card.tsx                     # Content container molecule
│   │   │   ├── ScrollToTop.tsx              # Floating scroll button
│   │   │   ├── ScrollProgress.tsx           # Generic progress bar
│   │   │   ├── iconColors.ts                # Semantic icon color constants
│   │   │   │
│   │   │   ├── # ── DASHBOARD SYSTEM ──
│   │   │   ├── DesignSystemDashboard.tsx    # Main dashboard (7 tabs)
│   │   │   ├── DesignSystemSidebar.tsx      # Dashboard sidebar nav
│   │   │   ├── FoundationsContent.tsx       # Typography, colors, spacing
│   │   │   ├── ComponentsContent.tsx        # Buttons, badges, links
│   │   │   ├── PatternsContent.tsx          # Page layouts, backgrounds
│   │   │   ├── MotionContent.tsx            # Motion & animation
│   │   │   ├── GuidelinesContent.tsx        # Accessibility, responsive
│   │   │   ├── ResourcesContent.tsx         # Downloads, code snippets
│   │   │   │
│   │   │   ├── # ── TOKEN SHOWCASES ──
│   │   │   ├── AllColorsPaletteContent.tsx
│   │   │   ├── AllTypographyTokensContent.tsx
│   │   │   ├── AllSpacingTokensContent.tsx
│   │   │   ├── AllBorderRadiusTokensContent.tsx
│   │   │   ├── AllElevationTokensContent.tsx
│   │   │   ├── AllLayoutGridTokensContent.tsx
│   │   │   │
│   │   │   ├── # ── SHOWCASE & DEMO ──
│   │   │   ├── ButtonDocumentation.tsx
│   │   │   ├── ButtonControlsGuide.tsx
│   │   │   ├── ButtonAnimationTest.tsx
│   │   │   ├── FigmaButtonComparison.tsx
│   │   │   ├── BadgeLabelsDocumentation.tsx
│   │   │   ├── BadgeShowcase.tsx
│   │   │   ├── LinksDocumentation.tsx
│   │   │   ├── LinkSystemDemo.tsx
│   │   │   ├── ShimmerDemo.tsx
│   │   │   ├── AnimatedArrowDemo.tsx
│   │   │   ├── AnimatedArrowQuickRef.tsx
│   │   │   ├── ArrowAnimationTest.tsx
│   │   │   │
│   │   │   ├── # ── SUBDIRECTORIES ──
│   │   │   ├── badges/
│   │   │   │   └── index.ts                 # Pure re-exports from Badge.tsx
│   │   │   ├── links/
│   │   │   │   └── README.md                # Link system overview
│   │   │   │
│   │   │   └── # ── INLINE DOCS (.md) ──
│   │   │       ├── ARROW_ANIMATION_BUG_FIX.md
│   │   │       ├── ARROW_ANIMATION_EXPLAINED.md
│   │   │       ├── BUTTON_SIZING_STRATEGY.md
│   │   │       ├── BUTTON_SYSTEM.md
│   │   │       ├── LINK_SYSTEM_DOCUMENTATION.md
│   │   │       ├── LINK_SYSTEM_QUICK_REFERENCE.md
│   │   │       ├── NAVBAR_RESPONSIVE.md
│   │   │       ├── NAVBAR_TWO_STATE_SYSTEM.md
│   │   │       ├── README_ANIMATED_ARROW.md
│   │   │       └── SHIMMER_ARROW_COMPATIBILITY_ANALYSIS.md
│   │   │
│   │   └── hooks/
│   │       ├── index.ts                     # Barrel exports for all hooks
│   │       ├── useShimmer.ts                # DO NOT DELETE (CTALink, InlineLink)
│   │       ├── useScrollAnimation.ts        # IntersectionObserver wrapper
│   │       ├── useScrollDirection.ts        # Detect scroll up/down
│   │       ├── useActiveSection.ts          # Track visible section
│   │       ├── useReadingProgress.ts        # Page scroll percentage
│   │       ├── useSectionProgress.ts        # Section scroll progress
│   │       ├── useHeroVisibility.ts         # Hero in viewport (navbar)
│   │       ├── useCounter.ts                # Animated number counting
│   │       ├── useMagneticEffect.ts         # Mouse-follow magnetic pull
│   │       └── useResponsiveGutter.ts       # 24/32px responsive Masonry spacing
│   │
│   ├── imports/                             # SVG path data from Figma
│   │   └── svg-*.ts (12 files)
│   │
│   └── styles/
│       ├── theme.css                        # All CSS custom properties (incl. 53 --rc-* tokens)
│       ├── fonts.css                        # DM Sans + Noto Serif imports
│       ├── index.css                        # CSS entry point
│       └── tailwind.css                     # Tailwind directives
│
├── # ── ROOT DOCUMENTATION ──
├── README.md                              # Project overview
├── DESIGN_SYSTEM_AI_CONTEXT.md            # Canonical AI context (v3.2.1)
├── QUICK_START_PROMPT.md                  # Short-form AI prompt
├── COMPONENT_GUIDELINES_4WH.md            # 4W+H for every component
├── BADGES_DOCUMENTATION.md                # Badge system docs (v2.1)
├── RESOURCE_CARD_DOCUMENTATION.md         # ResourceCard docs (v3.0)
├── TECHNICAL_HANDOVER.md                  # Technical handover (v1.1)
├── 14PX_DESIGN_SYSTEM_INTEGRATION.md      # Font integration decisions
├── GITHUB_PUSH_GUIDE.md                   # Push checklist by Atomic level
├── FIGMA_MAKE_IMPORT_PROMPTS.md           # Prompts for Figma Make imports
├── PROJECT_STRUCTURE.md                   # This file
├── package.json
├── postcss.config.mjs
└── vite.config.ts
```

---

## Case Study Section Order

```
 1. HeroSection              -> BLACK
 2. ClientContextSection     -> WHITE
 3. ChallengesSection        -> WARM (#f5f2f1)
 4. EngagementObjectives     -> WHITE
 5. MethodologySection       -> WARM
 6. ImpactSection            -> WHITE
 7. ValuePillarsSection      -> WHITE (border-t separator)
 8. TestimonialSection       -> WHITE (border-t separator)
 9. ResourcesSection         -> BLACK (dark gradient mesh)
10. FinalCTASection          -> WHITE (border-t separator)
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

### Link System Chain
```
CTALink.tsx ───┬─── useShimmer.ts (DO NOT DELETE)
InlineLink.tsx ─┘
```

### Badge System
```
Badge.tsx (canonical — 11 themes, 4 sizes, 3 variants)
  └── badges/index.ts (deprecated re-exports for backward compat)
```

---

## Files NOT on GitHub (Figma Make Only)

| Path | Reason |
|------|--------|
| `src/app/components/ui/` (48 files) | shadcn/ui scaffolding, zero imports |
| `src/app/components/figma/ImageWithFallback.tsx` | Protected system file |
| `src/app/components/design-system/` (5 files) | Showcase tools, never pushed |
| `src/imports/*.tsx` (16 files) | Figma frame imports |
| `src/app/App.tsx` (Figma version) | Renders DesignSystemDashboard directly |

---

## Intentional Exceptions (DO NOT "FIX")

1. **AllTypographyTokensContent.tsx** — Hardcoded values are intentional (demo purposes)
2. **ChallengesSection.tsx** — Two `1000px` references are JS card-width calc, not container constraints
3. **ContactModal.tsx** — `max-w-[500px]` is intentional modal width
4. **PatternsContent.tsx** — One `max-w-[1200px]` inside a demo code string literal
5. **useShimmer.ts** — Still actively used by CTALink.tsx and InlineLink.tsx, DO NOT DELETE

---

## App.tsx Routing Warning

- **GitHub version:** Uses `react-router-dom` with 4 routes
- **Figma Make version:** Renders `<DesignSystemDashboard />` directly
- **NEVER overwrite** the GitHub version from Figma Make

---

## Cleanup Changelog

| Date | Action | Files Affected |
|------|--------|----------------|
| Mar 1, 2026 | Phase 1: Deleted 4 stale AI context files | AI_CONTEXT_DESIGN_SYSTEM.md, AI_DESIGN_SYSTEM_PROMPT.md, DESIGN_SYSTEM_AI_PROMPT.md, README_AI_PORTABLE_SYSTEM.md |
| Mar 1, 2026 | Phase 2: Deleted duplicate inventory | GITHUB_REPO_MANIFEST.md |
| Mar 1, 2026 | Phase 4: Deleted 3 standalone badge impls (51.6KB dead code) | badges/SectionLabel.tsx, badges/ObjectivePill.tsx, badges/InfoCardLabel.tsx |
| Mar 1, 2026 | Phase 4: Simplified badges/index.ts to pure re-exports | badges/index.ts |
| Mar 1, 2026 | Phase 5: Deleted binary archive | Design system vs 26.zip |
| Mar 1, 2026 | Deleted orphan useResponsiveGutter.tsx | src/app/hooks/useResponsiveGutter.tsx |
| Mar 1, 2026 | Pushed 3 missing badge wrapper files | badges/SectionLabel.tsx, ObjectivePill.tsx, InfoCardLabel.tsx (then deleted as dead code) |
| Mar 1, 2026 | Replaced ResourceCard.tsx with token-driven version | src/app/components/ResourceCard.tsx |
| Mar 1, 2026 | Added 53 --rc-* tokens to theme.css | src/styles/theme.css |
| Mar 1, 2026 | Restored 6 v3.3 barrel exports | index.ts |
