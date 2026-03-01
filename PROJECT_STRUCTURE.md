# Project Structure & File Inventory

**Last Updated:** March 1, 2026  
**Total Files on GitHub:** ~106 files across 4 main directories

Complete file listing for the VS Design System project (case study web page + design system dashboard).

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
│   │   │   ├── AnimatedArrow.tsx             # 2-arrow replacement animation
│   │   │   ├── CTALink.tsx                   # Text + arrow CTA (uses useShimmer)
│   │   │   ├── InlineLink.tsx                # Paragraph links (uses useShimmer)
│   │   │   │
│   │   │   ├── # ── LAYOUT & UTILITY MOLECULES ──
│   │   │   ├── Container.tsx                # Semantic width wrapper (5 presets)
│   │   │   ├── Navbar.tsx                    # Two-state responsive navbar
│   │   │   ├── ContactModal.tsx              # Contact form modal
│   │   │   ├── StickyCTA.tsx                 # Floating CTA button
│   │   │   ├── ReadingProgressBar.tsx        # Scroll progress indicator
│   │   │   ├── TableOfContents.tsx           # Sidebar navigation
│   │   │   ├── NextSectionCTA.tsx            # Scroll-to-next prompt
│   │   │   ├── CodeBlockWithCopy.tsx         # Code display with copy
│   │   │   ├── CollapsibleSection.tsx        # Expandable content
│   │   │   ├── VariantSwitcher.tsx           # Component variant toggle
│   │   │   ├── SpacingHelpers.tsx            # Spacing utility components
│   │   │   │
│   │   │   ├── # ── RESOURCE SYSTEM MOLECULES ──
│   │   │   ├── ResourceCard.tsx              # 7-variant content card
│   │   │   ├── SubtleVariantSwitcher.tsx     # Designer tool (lucide-react Settings)
│   │   │   │
│   │   │   ├── # ── CASE STUDY ORGANISMS ──
│   │   │   ├── HeroSection.tsx               # 1. Black hero
│   │   │   ├── ClientContextSection.tsx      # 2. White, sidebar layout
│   │   │   ├── ChallengesSection.tsx         # 3. Warm, dynamic cards
│   │   │   ├── EngagementObjectivesSection.tsx # 4. White, sticky sidebar
│   │   │   ├── MethodologySection.tsx        # 5. Warm, scroll timeline
│   │   │   ├── ImpactSection.tsx             # 6. White, counter metrics
│   │   │   ├── ValuePillarsSection.tsx       # 7. White, grid-12
│   │   │   ├── TestimonialSection.tsx        # 8. White, centered quote
│   │   │   ├── ResourcesSection.tsx          # 9. Dark gradient, Masonry
│   │   │   ├── FinalCTASection.tsx           # 10. White, conversion CTA
│   │   │   │
│   │   │   ├── # ── v3.3 LAYOUT COMPONENTS ──
│   │   │   ├── SectionHeading.tsx            # Reusable heading molecule
│   │   │   ├── SectionWrapper.tsx            # Section layout wrapper
│   │   │   ├── Card.tsx                      # Content container molecule
│   │   │   ├── ScrollToTop.tsx               # Floating scroll button
│   │   │   ├── ScrollProgress.tsx            # Generic progress bar
│   │   │   ├── iconColors.ts                 # Semantic icon color constants
│   │   │   │
│   │   │   ├── # ── DASHBOARD SYSTEM ──
│   │   │   ├── DesignSystemDashboard.tsx     # Main dashboard (7 tabs)
│   │   │   ├── DesignSystemSidebar.tsx       # Dashboard sidebar nav
│   │   │   ├── FoundationsContent.tsx        # Typography, colors, spacing
│   │   │   ├── ComponentsContent.tsx         # Buttons, badges, links
│   │   │   ├── PatternsContent.tsx           # Page layouts, backgrounds
│   │   │   ├── MotionContent.tsx             # Motion & animation
│   │   │   ├── GuidelinesContent.tsx         # Accessibility, responsive
│   │   │   ├── ResourcesContent.tsx          # Downloads, code snippets
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
│   │   │   └── ArrowAnimationTest.tsx
│   │   │
│   │   └── hooks/
│   │       ├── index.ts                     # Barrel exports for all hooks
│   │       ├── useShimmer.ts                # DO NOT DELETE (CTALink, InlineLink)
│   │       ├── useScrollAnimation.ts         # IntersectionObserver wrapper
│   │       ├── useScrollDirection.ts         # Detect scroll up/down
│   │       ├── useActiveSection.ts           # Track visible section
│   │       ├── useReadingProgress.ts         # Page scroll percentage
│   │       ├── useSectionProgress.ts         # Section scroll progress
│   │       ├── useHeroVisibility.ts          # Hero in viewport (navbar)
│   │       ├── useCounter.ts                 # Animated number counting
│   │       ├── useMagneticEffect.ts          # Mouse-follow magnetic pull
│   │       └── useResponsiveGutter.ts        # Responsive Masonry spacing
│   │
│   ├── design-system/                       # Design tokens & showcase
│   │   ├── tokens.ts, index.ts, EXAMPLES.tsx
│   │   ├── ColorSwatch.tsx, ComponentCard.tsx
│   │   ├── SpacingScale.tsx, TypeScale.tsx
│   │   └── README.md
│   │
│   ├── imports/                             # SVG path data from Figma
│   │   └── svg-*.ts (12 files)
│   │
│   └── styles/
│       ├── theme.css                        # All CSS custom properties
│       ├── fonts.css                        # DM Sans + Noto Serif imports
│       ├── index.css                        # CSS entry point
│       └── tailwind.css                     # Tailwind directives
│
├── # ── ROOT DOCUMENTATION ──
├── DESIGN_SYSTEM_AI_CONTEXT.md           # Primary AI context (v3.2)
├── AI_CONTEXT_DESIGN_SYSTEM.md           # Alt AI context
├── AI_DESIGN_SYSTEM_PROMPT.md            # AI code gen prompts
├── COMPONENT_GUIDELINES_4WH.md          # 4W+H for every component
├── GITHUB_PUSH_GUIDE.md                 # Push checklist by Atomic level
├── GITHUB_REPO_MANIFEST.md              # GitHub file inventory
├── PROJECT_STRUCTURE.md                 # This file
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
  ├── ResourceCard.tsx (7 card variants)
  ├── Container.tsx (layout wrapper)
  ├── SubtleVariantSwitcher.tsx (designer tool)
  ├── useResponsiveGutter.ts (24/32px responsive)
  ├── react-responsive-masonry (npm)
  ├── Button.tsx (CTA button)
  └── 8 CSS variables from theme.css
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

---

## Files NOT on GitHub (Figma Make Only)

| Path | Reason |
|------|--------|
| `src/app/components/ui/` (48 files) | shadcn/ui scaffolding, zero imports |
| `src/app/components/figma/ImageWithFallback.tsx` | Protected system file |
| `src/imports/*.tsx` (16 files) | Figma frame imports |
| `src/app/App.tsx` (Figma version) | Renders DesignSystemDashboard directly |

---

**See `GITHUB_REPO_MANIFEST.md` for the authoritative per-file inventory with status notes.**