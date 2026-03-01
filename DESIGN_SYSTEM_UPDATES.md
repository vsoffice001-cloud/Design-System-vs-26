# Design System Updates (Addendum to AI Context)

**Purpose:** This file patches `DESIGN_SYSTEM_AI_CONTEXT.md` (v3.2.1, 53KB) with all changes since that version. Read the main context first, then this file for the latest state.

**WHY this file exists:** The main AI context at 53KB exceeds the GitHub MCP API response limit (~30KB). It cannot be read or updated via Figma Make. This addendum ensures no information is lost while remaining maintainable.

**Current patch level:** v3.2.1 → v3.3.1  
**Date:** 2026-03-01

---

## Reading Order for AI Assistants

When building a new page, read these docs in this exact order:

| Step | File | What You Get | Size |
|------|------|-------------|------|
| 1 | `DESIGN_SYSTEM_AI_CONTEXT.md` | Foundation rules (92-5-3, typography scale, page assembly, token cross-reference) | 53KB |
| 2 | **`DESIGN_SYSTEM_UPDATES.md`** (this file) | Patches to the above — secondary button, Badge migration, doc hierarchy | ~10KB |
| 3 | `COMPONENT_GUIDELINES_4WH.md` | 4W+H framework for every component with decision flowcharts | 28KB |
| 4 | `design-system-checklist.md` | File map — which files to import, in what order, 10 groups | 20KB |
| 5 | `QUICK_START_PROMPT.md` | Copy-paste prompt for fast Figma Make sessions | 6KB |
| 6 | `GITHUB_PUSH_GUIDE.md` | Push safety rules, barrel exports, commit format | 10KB |

**For quick sessions:** Skip to step 5 (QUICK_START_PROMPT.md) and copy-paste the prompt block.

---

## v3.3 Changes (2026-03-01)

### 1. Secondary Button — Two-State Design

**Commit:** `432f176e` (Button.tsx SHA: `c5c1a061`)  
**What changed:** The `secondary` variant on light backgrounds now uses a two-state interaction pattern.

| Property | State 1 (Resting) | State 2 (Hover) |
|----------|-------------------|------------------|
| Border | `rgba(0,0,0,0.12)` neutral | `#b01f24` brand red |
| Text color | `rgba(0,0,0,0.7)` neutral | `#b01f24` brand red |
| Shimmer | White sweep `rgba(255,255,255,0.8)` | Red-tinted sweep `rgba(176,31,36,0.08)` |
| Box shadow | `0 2px 8px rgba(0,0,0,0.04)` | `0 4px 16px rgba(176,31,36,0.12)` |
| Arrow color | `rgba(0,0,0,0.7)` | `var(--brand-red)` |
| Transition | — | `300ms ease-out` |

**Design reasoning:** Resting state is intentionally muted so secondary doesn't compete with brand/primary. On hover, the brand-red reveal creates a "warming" effect that signals importance without overwhelming at rest.

**Dark mode secondary:** Unchanged — `bg-white/10`, white text, white border.

**Supersedes:** Any description in DESIGN_SYSTEM_AI_CONTEXT.md that says secondary has a static neutral style. The secondary variant is now a dynamic two-state component.

---

### 2. New Documentation Files

| File | Status | What |
|------|--------|------|
| `design-system-checklist.md` v2.0 | **NEW** (commit `2ea1224a`) | Complete file map — 45 files across 10 groups with 4W+H reasoning, proper markdown tables, barrel export instructions |
| `COMPONENT_GUIDELINES_4WH.md` | **UPDATED** (commit `85001016`) | Added secondary two-state section, 4W+H for StickyCTA/ContactModal/NextSectionCTA, scroll hook decision flowchart |
| `QUICK_START_PROMPT.md` | **UPDATED** (commit `d25c7cb3`) | Added page-level components section, page shell template, secondary button examples |

---

### 3. Component Coverage Gaps (Now Documented)

These components existed in the codebase but were missing from the AI context docs. They are now fully documented in `COMPONENT_GUIDELINES_4WH.md` and `design-system-checklist.md`:

| Component | What It Does | 4W+H Entry |
|-----------|-------------|------------|
| `Navbar.tsx` | Fixed top nav — expanded/compact states, section pills, mobile hamburger | ✅ Added |
| `ContactModal.tsx` | Contact form modal — 4 fields, escape close, body scroll lock | ✅ Added |
| `StickyCTA.tsx` | Context-aware floating CTA — adapts text per active section | ✅ Added |
| `NextSectionCTA.tsx` | "Scroll to next" button — label + bouncing chevron | ✅ Added |
| `ReadingProgressBar.tsx` | Case-study progress — useSectionProgress + useHeroVisibility | ✅ Added |
| `TableOfContents.tsx` | Sidebar TOC — active section highlighting | ✅ Added |

### 4. Hook Coverage Gaps (Now Documented)

| Hook | What It Does | Documented In |
|------|-------------|---------------|
| `useMagneticEffect.ts` | Magnetic hover (element follows cursor slightly) | checklist Group 8 |
| `useReadingProgress.ts` | Generic 0-100% reading progress | checklist Group 8 |
| `useSectionProgress.ts` | Section-range progress (start ID to end ID) | checklist Group 8 |

### 5. Reference Section Coverage Gaps (Now Documented)

| Section | Pattern | Documented In |
|---------|---------|---------------|
| `ClientContextSection.tsx` | Context/background narrative with prose width | checklist Group 9 |
| `EngagementObjectivesSection.tsx` | Numbered objectives with StepPill badges | checklist Group 9 |
| `ValuePillarsSection.tsx` | Value proposition grid with feature icons | checklist Group 9 |
| `TestimonialSection.tsx` | Social proof with serif quotes | checklist Group 9 |

---

## v3.3.1 Changes (2026-03-01) — Badge CSS Migration Phase 1-2

### 6. Badge.tsx CSS Custom Property Migration (Phases 1-2 of 4)

**What:** Migrating Badge.tsx from hardcoded JS token objects to CSS custom properties in theme.css.

#### Migration Log

| Phase | Commit | What Changed | Risk | Status |
|-------|--------|-------------|------|--------|
| **1** | `20fe785f` | Added 15 `--badge-*` CSS variables to theme.css (sizes + variants) | Zero (additive) | ✅ Done |
| **2** | `8ff0679a` | Badge.tsx now consumes `--badge-*` size/variant tokens from CSS | Low (same values) | ✅ Done |
| **3** | — | Add `--badge-[theme]-[mode]-*` color tokens to theme.css | Zero (additive) | ⏳ Next |
| **4** | — | Badge.tsx consumes color tokens, remove THEME_COLORS JS object | Medium (176 values) | ⏳ Planned |

#### Phase 1 Details: theme.css tokens added

```css
/* 12 size variables (4 sizes × 3 properties) */
--badge-xs-font, --badge-xs-py, --badge-xs-px, --badge-xs-tracking
--badge-sm-font, --badge-sm-py, --badge-sm-px, --badge-sm-tracking
--badge-md-font, --badge-md-py, --badge-md-px, --badge-md-tracking
--badge-lg-font, --badge-lg-py, --badge-lg-px, --badge-lg-tracking

/* 3 shape variables */
--badge-radius-minimal: 0px
--badge-radius-rounded: 5px
--badge-radius-pill: 9999px

/* 2 animation variables */
--badge-transition-duration: 300ms
--badge-shimmer-duration: 700ms
```

#### Phase 2 Details: Badge.tsx refactored

- `SIZE_TOKENS` JS object → `SIZE_CSS_VARS` (references `var(--badge-*)` variables)
- `VARIANT_TOKENS` JS object → `VARIANT_CSS_VARS` (references `var(--badge-radius-*)` variables)
- Transition durations now use `var(--badge-transition-duration)`
- **Bug fix:** `--badge-hover-bg` and `--badge-hover-border` are now set as inline CSS custom properties on each badge element, which means the CSS hover rules in theme.css (`.badge:not(.badge-minimal):hover`) **now actually work**. Previously these were dead CSS rules referencing undefined variables.
- `BADGE_TOKENS` export updated to reflect new structure (`sizeVars`, `variantVars`, `themes`)

#### Phase 3-4 Plan: Color Token Migration

**Approach:** Use inline CSS custom properties (set per-instance) rather than 22 CSS selector blocks.

Badge.tsx currently sets `--badge-hover-bg` and `--badge-hover-border` as inline CSS vars (Phase 2 fix). Phase 3-4 will extend this pattern to all color properties:

```tsx
// Phase 4 target — Badge sets theme colors as CSS custom properties:
style={{
  '--badge-bg': colorTokens.background,
  '--badge-border': colorTokens.border,
  '--badge-text': colorTokens.text,
  '--badge-hover-bg': colorTokens.hoverBackground,
  '--badge-hover-border': colorTokens.hoverBorder,
  '--badge-shimmer': colorTokens.shimmer,
}}

// theme.css consumes them:
.badge { 
  background-color: var(--badge-bg);
  border-color: var(--badge-border);
  color: var(--badge-text);
}
.badge:hover {
  background-color: var(--badge-hover-bg);
  border-color: var(--badge-hover-border);
}
```

**Decision:** Keep THEME_COLORS in JS (not move 176 values to CSS selector blocks) because:
1. Badge theme is prop-driven (runtime JS decision)
2. Inline CSS vars give same override capability without massive CSS
3. Consistent with how hover-bg/hover-border already works (Phase 2)

---

## Pending Migrations

| Task | Status | Details |
|------|--------|--------|
| Badge.tsx CSS custom properties (sizes/variants) | ✅ Phase 1-2 done | `--badge-*` tokens in theme.css, Badge.tsx consuming them |
| Badge.tsx CSS custom properties (colors) | ⏳ Phase 3-4 next | Inline CSS var pattern for all color properties |
| DESIGN_SYSTEM_AI_CONTEXT.md modularization | ❌ Not started | Split 53KB monolith into focused modules (see plan below) |

### Modularization Plan for DESIGN_SYSTEM_AI_CONTEXT.md

**Problem:** At 53KB, the file exceeds API read limits. No AI tool can read, update, or verify it remotely.

**Proposed split:**

| New File | Content from AI Context | Est. Size |
|----------|------------------------|-----------|
| `DESIGN_RULES.md` | 92-5-3 color hierarchy, font pairing rules, spacing rules, border-radius tiers | ~8KB |
| `TOKEN_CROSS_REFERENCE.md` | Complete token table (CSS vars ↔ JS constants ↔ pixel values) | ~10KB |
| `PAGE_ASSEMBLY_GUIDE.md` | Section ordering, background alternation, responsive breakpoints, page skeleton patterns | ~8KB |
| `COMPONENT_GUIDELINES_4WH.md` | Already exists — absorb remaining component details from AI Context | ~30KB |
| `design-system-checklist.md` | Already exists — the file map | ~20KB |

**How to execute:** Requires `git clone` + local editor to read the 53KB file, extract sections, verify nothing is lost, then push the split files. Cannot be done via Figma Make API.

**When:** Next session with terminal/local file access.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v3.3.1 | 2026-03-01 | Badge CSS migration Phase 1-2: 15 `--badge-*` tokens added to theme.css, Badge.tsx refactored to consume CSS vars for sizes/variants, hover CSS bug fixed |
| v3.3 | 2026-03-01 | Secondary button two-state, 6 missing page components documented, 3 missing hooks documented, 4 missing reference sections documented, checklist v2.0 created, 4WH + Quick Start updated |
| v3.2.1 | (previous) | Base version in DESIGN_SYSTEM_AI_CONTEXT.md |
