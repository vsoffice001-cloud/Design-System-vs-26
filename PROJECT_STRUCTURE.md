# Project Structure & File Inventory

Complete file listing for the Case Study Design System project.
**Version:** 4.3 | **Last Updated:** 2026-03-17

---

## Project Overview

```
case-study-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── foundations/                    # ← NEW (v3.4) Modular Foundations sub-files
│   │   │   │   ├── FoundationsHelpers.tsx      #   Shared DocSection component
│   │   │   │   ├── ColorsContent.tsx           #   Color palette documentation (~35KB)
│   │   │   │   ├── TypographyContent.tsx       #   Typography scale documentation (~23KB)
│   │   │   │   ├── SpacingContent.tsx          #   Spacing system documentation (~8KB)
│   │   │   │   ├── LayoutGridContent.tsx       #   Layout & grid documentation (~25KB)
│   │   │   │   └── ElevationBorderRadius.tsx   #   Elevation + border-radius documentation (~17KB)
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx       #   [PROTECTED] Figma Make system file
│   │   │   ├── links/
│   │   │   │   └── README.md
│   │   │   ├── ui/                             #   48 shadcn/ui primitives (Figma Make only, not on GitHub)
│   │   │   │
│   │   │   ├── index.ts                        #   Barrel exports for all components
│   │   │   │
│   │   │   ├── FoundationsContent.tsx          #   Re-export hub (~1KB)
│   │   │   ├── DesignSystemDashboard.tsx        #   Main dashboard shell (7 tabs)
│   │   │   ├── DesignSystemSidebar.tsx          #   Dashboard navigation sidebar
│   │   │   ├── ComponentsContent.tsx            #   Components tab content
│   │   │   ├── PatternsContent.tsx              #   Patterns tab content
│   │   │   ├── MotionContent.tsx                #   Motion tab content
│   │   │   ├── GuidelinesContent.tsx            #   Guidelines tab content
│   │   │   ├── ResourcesContent.tsx             #   Resources tab content
│   │   │   │
│   │   │   ├── AllColorsPaletteContent.tsx
│   │   │   ├── AllTypographyTokensContent.tsx
│   │   │   ├── AllSpacingTokensContent.tsx
│   │   │   ├── AllLayoutGridTokensContent.tsx
│   │   │   ├── AllElevationTokensContent.tsx
│   │   │   ├── AllBorderRadiusTokensContent.tsx
│   │   │   │
│   │   │   ├── Button.tsx                       #   Button component (4 variants, 5 sizes, shimmer)
│   │   │   ├── Badge.tsx                        #   Badge system (11 themes, 10 wrappers)
│   │   │   ├── Label.tsx                        #   Form label component
│   │   │   ├── CTALink.tsx                      #   Text + arrow CTA link
│   │   │   ├── InlineLink.tsx                   #   Inline paragraph link
│   │   │   ├── AnimatedArrow.tsx                #   Arrow animation (internal dependency)
│   │   │   ├── Container.tsx                    #   Layout width wrapper (5 presets)
│   │   │   ├── Navbar.tsx                       #   Fixed navbar (2-state system)
│   │   │   ├── ContactModal.tsx                 #   Contact form modal
│   │   │   ├── StickyCTA.tsx                    #   Floating context-aware CTA
│   │   │   ├── ReadingProgressBar.tsx           #   Case-study progress bar
│   │   │   ├── NextSectionCTA.tsx               #   Scroll-to-next section button
│   │   │   ├── TableOfContents.tsx              #   Sidebar TOC with active tracking
│   │   │   ├── ResourceCard.tsx                 #   Content card (7 variants) — molecule-level, in root not /molecules/
│   │   │   ├── SubtleVariantSwitcher.tsx        #   Dev-only card style toggle
│   │   │   ├── CodeBlockWithCopy.tsx            #   Code display with copy button
│   │   │   ├── CollapsibleSection.tsx           #   Expandable content section
│   │   │   ├── VariantSwitcher.tsx              #   Component variant toggle
│   │   │   ├── SpacingHelpers.tsx               #   Spacing utility components
│   │   │   │
│   │   │   ├── HeroSection.tsx                  #   Case study hero (black bg)
│   │   │   ├── ClientContextSection.tsx         #   Client background (white bg)
│   │   │   ├── ChallengesSection.tsx            #   Problem statements (warm bg)
│   │   │   ├── EngagementObjectivesSection.tsx  #   Strategic objectives (white bg)
│   │   │   ├── MethodologySection.tsx           #   Process timeline (warm bg)
│   │   │   ├── ImpactSection.tsx                #   Results/metrics (white bg)
│   │   │   ├── ValuePillarsSection.tsx          #   Strategic pillars (white bg)
│   │   │   ├── TestimonialSection.tsx           #   Client quote (white bg)
│   │   │   ├── ResourcesSection.tsx             #   Content grid (black bg)
│   │   │   ├── FinalCTASection.tsx              #   Closing CTA (white bg)
│   │   │   │
│   │   │   ├── SectionHeading.tsx               #   Prop-driven section header
│   │   │   ├── SectionWrapper.tsx               #   Section layout wrapper
│   │   │   ├── Card.tsx                         #   Base card container
│   │   │   ├── Tooltip.tsx                      #   Hover tooltip
│   │   │   ├── ViewToggle.tsx                   #   Grid/list view toggle
│   │   │   ├── FadeInSection.tsx                #   Scroll-triggered fade-in
│   │   │   ├── ScrollProgress.tsx               #   Page scroll progress
│   │   │   ├── ScrollToTop.tsx                  #   Scroll-to-top button
│   │   │   ├── IconBadge.tsx                    #   Icon container with tinted bg
│   │   │   ├── CategoryListItem.tsx             #   Category row
│   │   │   │
│   │   │   ├── FilterCheckbox.tsx               #   Filter option (label + count)
│   │   │   ├── FilterChip.tsx                   #   Dismissible active filter pill
│   │   │   ├── FilterSearchInput.tsx            #   Search input with clear button
│   │   │   ├── FilterSectionHeader.tsx          #   Collapsible section header
│   │   │   ├── FilterCheckboxItem.tsx           #   Custom checkbox + label + count
│   │   │   ├── FilterIndustryItem.tsx           #   Expandable industry row
│   │   │   │
│   │   │   ├── FiltersDocumentation.tsx         #   Filter system docs page (~75KB, full interactive)
│   │   │   ├── ButtonDocumentation.tsx          #   Button showcase
│   │   │   ├── LinksDocumentation.tsx           #   Link system showcase
│   │   │   ├── BadgeLabelsDocumentation.tsx     #   Badge showcase
│   │   │   ├── BadgeShowcase.tsx                #   Badge visual gallery
│   │   │   ├── LinkSystemDemo.tsx               #   Interactive link demo
│   │   │   ├── ShimmerDemo.tsx                  #   Shimmer effect demo
│   │   │   ├── AnimatedArrowDemo.tsx            #   Arrow animation demo
│   │   │   ├── AnimatedArrowQuickRef.tsx        #   Arrow quick reference
│   │   │   ├── ButtonControlsGuide.tsx          #   Button control patterns
│   │   │   ├── FigmaButtonComparison.tsx        #   Figma vs code comparison
│   │   │   │
│   │   │   ├── SurveysDemoContent.tsx           #   Surveys home page demo
│   │   │   ├── SurveysListingDemoContent.tsx    #   Surveys listing page demo
│   │   │   ├── TemplateDemoContent.tsx          #   ProductPageTemplate demo
│   │   │   ├── ReportStorePage.tsx              #   RS template (home + listing)
│   │   │   ├── ReportStoreOrganismsShowcase.tsx #   RS organisms gallery
│   │   │   ├── DashboardLayout.tsx              #   Dashboard shell
│   │   │   │
│   │   │   ├── data.ts                          #   Centralized mock data
│   │   │   ├── iconColors.ts                    #   Icon color tokens
│   │   │   ├── industryIconMap.ts               #   Industry → icon mapping
│   │   │   │
│   │   │   ├── molecules/                       #   26 molecule components + index.ts barrel (v4.3)
│   │   │   │   ├── index.ts                     #   Barrel re-exports all 26 molecules
│   │   │   │   ├── ReportCard.tsx
│   │   │   │   ├── ReportGridCard.tsx           #   [DEPRECATED]
│   │   │   │   ├── StatCard.tsx
│   │   │   │   ├── DataHighlightCard.tsx
│   │   │   │   ├── AnalystPickCardB.tsx
│   │   │   │   ├── IndustryBadge.tsx
│   │   │   │   ├── CardMetaRow.tsx
│   │   │   │   ├── CardFooterRow.tsx
│   │   │   │   ├── CardReveal.tsx
│   │   │   │   ├── RevealImage.tsx
│   │   │   │   ├── SkeletonCard.tsx
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   ├── BackToTop.tsx
│   │   │   │   ├── HorizontalScroll.tsx
│   │   │   │   ├── ScrollFade.tsx
│   │   │   │   ├── CategoryListCard.tsx
│   │   │   │   ├── LoadMoreSentinel.tsx
│   │   │   │   ├── CompletionBadge.tsx
│   │   │   │   ├── SurveyCard.tsx
│   │   │   │   ├── ResponseChart.tsx
│   │   │   │   ├── QuestionPreview.tsx
│   │   │   │   ├── SurveySkeleton.tsx
│   │   │   │   ├── FilterAccordion.tsx
│   │   │   │   ├── SidebarPanel.tsx
│   │   │   │   ├── ActiveFilterChip.tsx
│   │   │   │   └── MobileFilterSheet.tsx
│   │   │   │
│   │   │   └── organisms/                       #   30 organism components + index.ts barrel (v4.3)
│   │   │       ├── index.ts                     #   Barrel re-exports all 30 organisms
│   │   │       ├── ProductHero.tsx
│   │   │       ├── FeaturedCarousel.tsx
│   │   │       ├── StatsRow.tsx
│   │   │       ├── BrowseGrid.tsx
│   │   │       ├── CTABanner.tsx
│   │   │       ├── ProductPageTemplate.tsx
│   │   │       ├── ReportStoreHero.tsx
│   │   │       ├── FeaturedResearch.tsx
│   │   │       ├── ListingToolbar.tsx
│   │   │       ├── CardListing.tsx
│   │   │       ├── FiltersPanel.tsx
│   │   │       ├── IndustrySidebar.tsx
│   │   │       ├── IndustryFocusBanner.tsx
│   │   │       ├── DailyDataHighlights.tsx
│   │   │       ├── AnalystPicks.tsx
│   │   │       ├── IndustrySectorsGrid.tsx
│   │   │       ├── KeyMarketIndicators.tsx
│   │   │       ├── RecommendedForYou.tsx
│   │   │       ├── CustomResearchCTA.tsx
│   │   │       ├── TrendingTopics.tsx
│   │   │       ├── TopDownloads.tsx
│   │   │       ├── RecentlyViewed.tsx
│   │   │       ├── UpcomingReports.tsx
│   │   │       ├── ResearchMethodology.tsx
│   │   │       ├── NewsletterSignup.tsx
│   │   │       ├── IndustrySpotlight.tsx
│   │   │       ├── ComparisonTable.tsx
│   │   │       ├── ReportPreview.tsx
│   │   │       ├── TestimonialsRS.tsx
│   │   │       └── QuickAccessBar.tsx
│   │   │
│   │   ├── hooks/                               #   14 custom hooks + index.ts barrel
│   │   │   ├── index.ts                         #   Barrel re-exports all 14 hooks
│   │   │   ├── useShimmer.ts                    #   [DO NOT DELETE]
│   │   │   ├── useScrollDirection.ts
│   │   │   ├── useHeroVisibility.ts
│   │   │   ├── useActiveSection.ts
│   │   │   ├── useCounter.ts
│   │   │   ├── useScrollAnimation.ts
│   │   │   ├── useResponsiveGutter.ts
│   │   │   ├── useReadingProgress.ts
│   │   │   ├── useSectionProgress.ts
│   │   │   ├── useMagneticEffect.ts
│   │   │   ├── useReportFilters.ts              #   v4.3 — filter state machine
│   │   │   ├── useProgressiveLoad.ts            #   v4.3 — infinite scroll
│   │   │   ├── useCrossfade.ts                  #   v4.3 — crossfade transitions
│   │   │   └── useMountTransition.ts            #   v4.3 — mount/unmount lifecycle
│   │   │
│   │   └── App.tsx                              #   Entry point
│   │
│   ├── design-system/                           #   Design system utilities
│   │   ├── index.ts
│   │   ├── tokens.ts
│   │   ├── ColorSwatch.tsx
│   │   ├── ComponentCard.tsx
│   │   ├── SpacingScale.tsx
│   │   ├── TypeScale.tsx
│   │   ├── EXAMPLES.tsx
│   │   └── README.md
│   │
│   ├── imports/                                 #   Figma assets
│   │   ├── svg-*.ts                             #   12 SVG path data files
│   │   └── *.tsx                                #   16 Figma frames (Figma Make only)
│   │
│   └── styles/
│       ├── fonts.css                            #   Font imports
│       ├── index.css                            #   CSS entry
│       ├── tailwind.css                         #   Tailwind base
│       ├── theme.css                            #   ALL design tokens (470+ properties)
│       └── report-store-additions.css            #   RS-specific CSS classes
│
├── DESIGN_SYSTEM_AI_CONTEXT.md                  #   AI reference (v4.3)
├── GITHUB_PUSH_GUIDE.md                         #   Push safety guide
├── GITHUB_REPO_MANIFEST.md                      #   Canonical file inventory
├── PROJECT_STRUCTURE.md                         #   This file
├── package.json
├── postcss.config.mjs
└── vite.config.ts
```

---

## Quick Stats

```
Total Atoms:          ~35 (18 core + 14 layout/utility + 3 data files)
Total Molecules:      26 in /molecules/ + 1 ResourceCard in root = 27 molecule-level components
Total Organisms:      40 (30 in /organisms/ + 10 case study in root)
Total Hooks:          14 (+ index.ts barrel = 15 files in /hooks/)
Total Documentation:  7+ AI context files + 6 reference docs
Total Code Files:     120+ TypeScript/TSX files
Design Tokens:        470+ CSS custom properties (theme.css)
Responsive Breakpoints: 4 (sm, md, lg, xl)
Color Palette:        9 color families (92 shades total)
Typography Scale:     9 levels (xs to 5xl) + 3 custom sizes
```

---

**v4.3 | March 17, 2026**
