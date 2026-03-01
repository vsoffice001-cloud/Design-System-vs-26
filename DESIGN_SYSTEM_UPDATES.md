# Design System Updates (Addendum to AI Context)

**Purpose:** This file patches `DESIGN_SYSTEM_AI_CONTEXT.md` (v3.2.1, 53KB) with all changes since that version. Read the main context first, then this file for the latest state.

**WHY this file exists:** The main AI context at 53KB exceeds the GitHub MCP API response limit (~30KB). It cannot be read or updated via Figma Make. This addendum ensures no information is lost while remaining maintainable.

**Current patch level:** v3.2.1 → v3.3.2  
**Date:** 2026-03-01

---

## Reading Order for AI Assistants

| Step | File | What You Get | Size |
|------|------|-------------|------|
| 1 | `DESIGN_SYSTEM_AI_CONTEXT.md` | Foundation rules (92-5-3, typography scale, page assembly, token cross-reference) | 53KB |
| 2 | **`DESIGN_SYSTEM_UPDATES.md`** (this file) | Patches to the above — secondary button, Badge migration, doc hierarchy | ~10KB |
| 3 | `COMPONENT_GUIDELINES_4WH.md` | 4W+H framework for every component with decision flowcharts | 28KB |
| 4 | `design-system-checklist.md` | File map — which files to import, in what order, 10 groups | 20KB |
| 5 | `QUICK_START_PROMPT.md` | Copy-paste prompt for fast Figma Make sessions | 6KB |
| 6 | `GITHUB_PUSH_GUIDE.md` | Push safety rules, barrel exports, commit format | 10KB |

**For quick sessions:** Skip to step 5 (QUICK_START_PROMPT.md).

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

**Dark mode secondary:** Unchanged — `bg-white/10`, white text, white border.

**Supersedes:** Any description in DESIGN_SYSTEM_AI_CONTEXT.md that says secondary has a static neutral style.

---

### 2. Documentation Created/Updated

| File | Status | What |
|------|--------|------|
| `design-system-checklist.md` v2.0 | **NEW** (`2ea1224a`) | File map — 45 files, 10 groups, 4W+H, barrel exports |
| `COMPONENT_GUIDELINES_4WH.md` | **UPDATED** (`85001016`) | Secondary two-state, StickyCTA/ContactModal/NextSectionCTA 4W+H |
| `QUICK_START_PROMPT.md` | **UPDATED** (`d25c7cb3`) | Page-level components, page shell template, secondary button |

---

### 3. Component/Hook/Section Coverage Gaps (Now Documented)

| Category | Items Added | Documented In |
|----------|------------|---------------|
| Page Components | Navbar, ContactModal, StickyCTA, NextSectionCTA, ReadingProgressBar, TableOfContents | 4WH.md + checklist |
| Hooks | useMagneticEffect, useReadingProgress, useSectionProgress | checklist Group 8 |
| Reference Sections | ClientContext, EngagementObjectives, ValuePillars, Testimonial | checklist Group 9 |

---

## v3.3.1–3.3.2 Changes (2026-03-01) — Badge CSS Migration

### 4. Badge.tsx CSS Custom Property Migration (COMPLETE)

**What:** Migrated Badge.tsx from hardcoded JS token objects to CSS custom properties. All 4 phases complete.

#### Migration Log

| Phase | Commit | What Changed | Files |
|-------|--------|-------------|-------|
| **1** | `20fe785f` | Added 17 `--badge-*` CSS variables (sizes, shapes, animation) | `theme.css` |
| **2** | `8ff0679a` | Badge.tsx consumes size/variant CSS vars, wired hover vars | `Badge.tsx` |
| **3** | `b65ba54e` | Added CSS color consumption rules (`.badge { color: var(--badge-text) }`) | `theme.css` |
| **4** | `58de9f24` | Removed inline colors, all styling via CSS custom properties | `Badge.tsx` |

#### Architecture (Final)

```
Badge.tsx (JS)                    theme.css (CSS)
──────────────────────────────    ──────────────────────────────
THEME_COLORS[theme][mode]         :root { --badge-sm-font: ... }
  ↓ selects values                .badge { color: var(--badge-text) }
  ↓ sets as inline CSS vars       .badge:not(.badge-minimal) {
style={{                            background-color: var(--badge-bg);
  '--badge-text': ...,            }
  '--badge-bg': ...,              .badge:hover {
  '--badge-border': ...,            background-color: var(--badge-hover-bg);
  '--badge-shimmer': ...,           border-color: var(--badge-hover-border);
  fontSize: var(--badge-sm-font)  }
}}                                .badge-shimmer {
                                    background: linear-gradient(...
                                      var(--badge-shimmer) ...);
                                  }
```

**WHY this pattern (not 22 CSS selector blocks):**
1. Badge theme is a runtime prop decision (11 themes × 2 modes)
2. Inline CSS vars avoid massive CSS selector explosion
3. CSS owns transitions/hover/animation behavior cleanly
4. No inline style specificity fights (no `backgroundColor:` etc.)

#### What Changed for Consumers

**Nothing.** All Badge props and wrappers work identically. The API is unchanged:
```tsx
// These all still work exactly the same:
<Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 1</Badge>
<SectionLabel theme="brand" fontWeight={600}>KEY INSIGHTS</SectionLabel>
<StatusBadge status="success">Completed</StatusBadge>
<ClickableBadge onClick={fn} theme="purple">Click me</ClickableBadge>
```

#### File Size Reduction

| File | Before | After | Saved |
|------|--------|-------|-------|
| `Badge.tsx` | 27KB | 22KB | 5KB (removed redundant comments, contrastRatio strings) |
| `theme.css` | 30KB | 25KB | 5KB (consolidated inline comments) |

#### Bug Fixed

CSS hover rules for `.badge:not(.badge-minimal):hover` were referencing `--badge-hover-bg` and `--badge-hover-border` but these variables were never set — making badge hover effects via CSS completely dead code. Now fully functional.

---

## Pending Migrations

| Task | Status | Details |
|------|--------|--------|
| Badge.tsx CSS custom properties | ✅ **Complete** (4 phases) | All sizing, shape, color, hover, shimmer via CSS custom properties |
| DESIGN_SYSTEM_AI_CONTEXT.md modularization | ❌ Not started | Split 53KB monolith into focused modules (requires local terminal) |

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

**Requires:** `git clone` + local editor to read 53KB file, extract sections, verify nothing lost.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v3.3.2 | 2026-03-01 | Badge CSS migration Phase 3-4 complete: all colors via CSS custom properties, shimmer via CSS, hover bug fixed, 10KB file size reduction |
| v3.3.1 | 2026-03-01 | Badge CSS migration Phase 1-2: 17 `--badge-*` tokens in theme.css, Badge.tsx consumes size/variant CSS vars |
| v3.3 | 2026-03-01 | Secondary button two-state, 6 page components + 3 hooks + 4 sections documented, checklist v2.0, 4WH + Quick Start updated |
| v3.2.1 | (previous) | Base version in DESIGN_SYSTEM_AI_CONTEXT.md |
