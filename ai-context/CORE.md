# Design System — Core Rules & AI Checklist

**Module:** `ai-context/CORE.md`  
**Version:** 4.0  
**Date:** 2026-03-10  
**Part of:** [DESIGN_SYSTEM_AI_CONTEXT.md](../DESIGN_SYSTEM_AI_CONTEXT.md) modularization

---

## CRITICAL: READ THIS FIRST

**This module system is the SINGLE SOURCE OF TRUTH for AI assistants building pages with our design system.**

When any team member asks you to build a page, component, or feature:
1. Read `ai-context/CORE.md` (this file) for rules and checklist
2. Read the relevant module(s) for details
3. Apply ALL rules automatically
4. Use exact tokens and patterns

---

## Design System Overview

### WHY
Creates consistency, speeds development, ensures quality, enables team scalability, single source of truth.

### WHAT
Minimalist editorial design system with black/white alternating sections, Major Third typography (1.25 ratio), Ken Bold Red (#b01f24) for CTAs only.

### WHEN
Use for ALL pages, components, and features in this project.

### WHEN NOT
Never deviate unless explicitly requested by user with clear reasoning.

### WHERE
Repository: `vsoffice001-cloud/Design-System-vs-26`  
Dashboard: `/src/app/components/DesignSystemDashboard.tsx`

### HOW
Import components from `/src/app/components/`, use CSS variables from `theme.css`, follow Atomic Design methodology.

---

## Module Index

| Module | Content | When to Read |
|--------|---------|-------------|
| [`CORE.md`](CORE.md) | This file — overview, checklist, mistakes | Always |
| [`TYPOGRAPHY.md`](TYPOGRAPHY.md) | Font pairing, Major Third scale, weights | Any text/heading work |
| [`COLORS.md`](COLORS.md) | 92-5-3 hierarchy, all color families, usage rules | Any color decisions |
| [`COMPONENTS.md`](COMPONENTS.md) | Button, Link, Badge, Animation systems | Any interactive element |
| [`LAYOUT.md`](LAYOUT.md) | Spacing, containers, responsive padding, section pattern | Any layout/section work |
| [`PROMPTS.md`](PROMPTS.md) | Copy-paste prompts for common tasks | Quick AI sessions |

**Companion docs:**
- `COMPONENT_GUIDELINES_4WH.md` — 4W+H for every Case Study DS component with decision flowcharts
- `REPORT_STORE_COMPONENTS_4WH.md` — **4W+H for Report Store atoms, molecules, organisms, templates** (v4.0)
- `design-system-checklist.md` — File map (76+ files, 11 groups)
- `QUICK_START_PROMPT.md` — Shortened copy-paste prompt
- `GITHUB_PUSH_GUIDE.md` — Push safety rules

### Reading Order for Building NEW Pages

1. **Always:** `ai-context/CORE.md` (this file)
2. **Foundation tokens:** `ai-context/TYPOGRAPHY.md`, `COLORS.md`, `LAYOUT.md`
3. **Original DS components:** `COMPONENT_GUIDELINES_4WH.md` (Button, Badge, Link, Card, Container, SectionHeading, SectionWrapper, Navbar, etc.)
4. **Report Store components:** `REPORT_STORE_COMPONENTS_4WH.md` (Tooltip, ViewToggle, FadeInSection, CardReveal, SkeletonCard, EmptyState, HorizontalScroll, ScrollFade, StatCard, etc.)
5. **Interactive elements:** `ai-context/COMPONENTS.md` (Button variants, animation rules)
6. **Quick reference:** `QUICK_START_PROMPT.md`

---

## Component Inventory (v4.0)

### Atoms (15)
Button, Badge, AnimatedArrow, CTALink, InlineLink, Label, Container, SectionHeading, SectionWrapper, Card, **Tooltip**, **ViewToggle**, **FadeInSection**, iconColors

### Molecules (20+)
ResourceCard, ReportGridCard, StatCard, DataHighlightCard, AnalystPickCardB, IndustryBadge, CardMetaRow, CardFooterRow, CardReveal, RevealImage, SkeletonCard, EmptyState, BackToTop, HorizontalScroll, ScrollFade, CollapsibleSection, CodeBlockWithCopy, SpacingHelpers, VariantSwitcher

### Organisms (Case Study)
HeroSection, ClientContextSection, ChallengesSection, EngagementObjectivesSection, MethodologySection, ImpactSection, ValuePillarsSection, TestimonialSection, ResourcesSection, FinalCTASection, Navbar, ContactModal, StickyCTA

### Organisms (Report Store)
Header, HeroSection, Footer, FiltersPanel, MobileFilterBar, MobileFilterSheet, IndustrySidebar, FeaturedResearch, IndustrySectorsGrid, ListingContextBanner, CustomResearchCTA

### Templates
- **Case Study:** Black/White/Warm alternating, ReadingProgressBar, StickyCTA, Navbar
- **Report Store:** Dual-mode (home/listing), Header+Footer, MobileFilterBar, BackToTop

---

## Checklist for AI

Before generating ANY code, verify:

- [ ] Read the relevant `ai-context/` module(s)
- [ ] Read `REPORT_STORE_COMPONENTS_4WH.md` for listing/catalog page components
- [ ] Using correct typography tokens (`--text-sm`, `--text-2xl`)
- [ ] Using `--brand-red` ONLY for CTAs
- [ ] Button `size="md"` as default (NOT lg)
- [ ] Button `size="xs"` ONLY for card footer CTAs
- [ ] `showArrow={true}` ONLY for urgency/forms
- [ ] Shimmer animation automatic (don't disable)
- [ ] Following section pattern (black/white/warm for case study; black/white/neutral50 for listing)
- [ ] Using correct component (Button vs CTALink vs InlineLink)
- [ ] Using correct card (ResourceCard vs ReportGridCard vs StatCard — see flowchart)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)
- [ ] Font family: Serif for headings, Sans for body/UI
- [ ] Badge uses theme prop (not inline colors)
- [ ] Icons use `iconColors.content` or `iconColors.utility`
- [ ] Touch targets meet 44px minimum on mobile
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] `:focus-visible` rings on all interactive elements

---

## Common Mistakes to Avoid

### DON'T
1. Use `--brand-red` for anything except CTA buttons
2. Use `size="lg"` as default (use `size="md"`)
3. Add `showArrow={true}` to every button (only urgency)
4. Use `--text-3xl` for section headings (only hero h1)
5. Use hardcoded colors instead of tokens
6. Use arbitrary spacing (stick to scale)
7. Use Tailwind `text-2xl` classes (use CSS variables)
8. Disable shimmer animation (always active)
9. Use Serif font for body text, buttons, or labels
10. Use Sans font for hero headings or section titles
11. Put "View Report" buttons inside grid cards (removed in v4.0 audit)
12. Put divider lines inside grid cards (removed in v4.0 audit)
13. Mix HorizontalScroll and ScrollFade (different use cases — see flowchart)
14. Nest CardReveal inside FadeInSection (double animation)
15. Use BackToTop AND ScrollToTop together (pick one per page)

### DO
1. Use `variant="brand"` ONLY for conversion CTAs
2. Use `size="md"` as default (42px height)
3. Use `size="xs"` for card footer CTAs (28px height)
4. Use `--text-sm` (16px) for ALL body text
5. Use `--text-2xl` (39px) for ALL section headings
6. Use color tokens from theme.css
7. Use spacing scale (`--space-4`, `--space-6`, etc.)
8. Use CSS variables for font sizes
9. Let shimmer animation run (core brand identity)
10. Use Badge `theme` prop for colors (not inline styles)
11. Use `Container` component for width constraints
12. Use `FadeInSection` to wrap each page section for scroll reveals
13. Use `CardReveal` with stagger delay for card grid entrances
14. Use `SkeletonCard` for loading states, `EmptyState` for zero results
15. Use `ScrollFade` for pill/tab overflow, `HorizontalScroll` for card carousels

---

## Quality Metrics

AI-generated code should score:

- Token Usage: 100% (no hardcoded values)
- Component Reuse: 90%+ (import from library)
- Color Compliance: 100% (red for CTAs only)
- Typography Compliance: 100% (correct scale usage)
- Accessibility: WCAG AAA (all color combos tested)
- Performance: 60fps animations
- Documentation: 4W+H framework applied
- Mobile: 44px touch targets, responsive padding
- Motion: prefers-reduced-motion honored

---

## Quick Links

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **Button Component:** `/src/app/components/Button.tsx`
- **Badge Component:** `/src/app/components/Badge.tsx`
- **Link Components:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`
- **Report Store 4WH:** `REPORT_STORE_COMPONENTS_4WH.md`
- **Original DS 4WH:** `COMPONENT_GUIDELINES_4WH.md`

---

## Learning Resources

1. **Read First:** This file + relevant `ai-context/` modules
2. **Case Study Components:** `COMPONENT_GUIDELINES_4WH.md` (Button, Badge, CTALink, Card, Container, SectionHeading, etc.)
3. **Report Store Components:** `REPORT_STORE_COMPONENTS_4WH.md` (Tooltip, ViewToggle, CardReveal, SkeletonCard, HorizontalScroll, StatCard, etc.)
4. **Section Examples (Case Study):** `HeroSection.tsx`, `ChallengesSection.tsx`, `MethodologySection.tsx`
5. **Section Examples (Report Store):** `Header.tsx`, `FeaturedResearch.tsx`, `IndustryReportSection.tsx`, `MobileFilterBar.tsx`
6. **Dashboard:** `DesignSystemDashboard.tsx` (visual reference)
7. **Decision Flowcharts:** End of both 4WH docs

---

**v4.0 | March 10, 2026 | Updated for Report Store page components**
