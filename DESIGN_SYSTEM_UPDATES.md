# Design System Updates (Addendum to AI Context)

**Purpose:** This file patches `DESIGN_SYSTEM_AI_CONTEXT.md` (v3.2.1, 53KB) with all changes since that version. Read the main context first, then this file for the latest state.

**WHY this file exists:** The main AI context at 53KB exceeds the GitHub MCP API response limit (~30KB). It cannot be read or updated via Figma Make. This addendum ensures no information is lost while remaining maintainable.

**Current patch level:** v3.2.1 → v3.3  
**Date:** 2026-03-01

---

## Reading Order for AI Assistants

When building a new page, read these docs in this exact order:

| Step | File | What You Get | Size |
|------|------|-------------|------|
| 1 | `DESIGN_SYSTEM_AI_CONTEXT.md` | Foundation rules (92-5-3, typography scale, page assembly, token cross-reference) | 53KB |
| 2 | **`DESIGN_SYSTEM_UPDATES.md`** (this file) | Patches to the above — secondary button, new components, doc hierarchy | ~8KB |
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

## Pending Migrations

| Task | Status | Details |
|------|--------|--------|
| Badge.tsx CSS custom properties | ❌ Not started | Migrate hardcoded `SIZE_TOKENS` / `THEME_COLORS` to `--badge-*` tokens in theme.css |
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
| v3.3 | 2026-03-01 | Secondary button two-state, 6 missing page components documented, 3 missing hooks documented, 4 missing reference sections documented, checklist v2.0 created, 4WH + Quick Start updated |
| v3.2.1 | (previous) | Base version in DESIGN_SYSTEM_AI_CONTEXT.md |
