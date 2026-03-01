# Design System Updates (Changelog & Migration Log)

**Purpose:** Historical changelog documenting all changes since v3.2.1. All patches have been **merged into the `ai-context/` modules** — this file is now a pure changelog.

**Current version:** v3.3.2  
**Date:** 2026-03-01

---

## Reading Order for AI Assistants

The AI Context has been **modularized**. Read these instead of a single large file:

| Step | File | What You Get |
|------|------|-------------|
| 1 | `ai-context/CORE.md` | Critical rules, AI checklist, common mistakes |
| 2 | `ai-context/TYPOGRAPHY.md` | Font pairing, Major Third scale |
| 3 | `ai-context/COLORS.md` | 92-5-3 color hierarchy, all color families |
| 4 | `ai-context/COMPONENTS.md` | Button, Link, Badge, Animation systems |
| 5 | `ai-context/LAYOUT.md` | Spacing, containers, sections, page assembly |
| 6 | `ai-context/PROMPTS.md` | Copy-paste AI prompts |
| 7 | `COMPONENT_GUIDELINES_4WH.md` | 4W+H for every component |
| 8 | `design-system-checklist.md` | File map (45 files, 10 groups) |

---

## v3.3.2 Changes (2026-03-01)

### 1. AI Context Modularization (COMPLETE)

The 53KB monolith `DESIGN_SYSTEM_AI_CONTEXT.md` has been split into 6 focused modules in `ai-context/`:

| Module | Size | Content |
|--------|------|---------|
| `CORE.md` | 5KB | Overview, checklist, mistakes, quality metrics |
| `TYPOGRAPHY.md` | 4KB | Font pairing, scale, custom sizes, weights |
| `COLORS.md` | 8KB | 92-5-3, brand/black/warm/red/accent/utility |
| `COMPONENTS.md` | 7KB | Button (two-state), Link, Badge (CSS), Animation |
| `LAYOUT.md` | 7KB | Spacing, containers, responsive, sections, page assembly |
| `PROMPTS.md` | 6KB | 7 AI implementation prompts |

**Total:** ~37KB across 6 readable files (was 53KB unreadable monolith).

### 2. Badge.tsx CSS Custom Property Migration (COMPLETE)

| Phase | Commit | What Changed | Files |
|-------|--------|-------------|-------|
| **1** | `20fe785f` | Added 17 `--badge-*` CSS variables | `theme.css` |
| **2** | `8ff0679a` | Badge.tsx consumes CSS vars for sizes/shapes | `Badge.tsx` |
| **3** | `b65ba54e` | CSS color consumption rules | `theme.css` |
| **4** | `58de9f24` | All colors via CSS custom properties | `Badge.tsx` |

**Architecture:** JS selects theme colors → sets as inline CSS custom properties (`--badge-text`, `--badge-bg`, `--badge-border`, `--badge-shimmer`) → CSS rules consume them for base + hover + shimmer states.

**Bug fixed:** CSS hover rules for badges were dead code (vars never set). Now functional.

### 3. Documentation Consolidation

| File | Action |
|------|--------|
| `BADGES_DOCUMENTATION.md` | Rewritten to v3.0 (18KB→12KB) — aligned with CSS migration |
| `TECHNICAL_HANDOVER.md` | Marked historical with staleness warnings (19KB→6KB) |
| `PROJECT_STRUCTURE.md` | Deleted — merged into `GITHUB_REPO_MANIFEST.md` |
| `design-system-checklist.md` | Updated to v2.1 — Badge migration status fixed |
| `README.md` | Updated to v3.3.2, removed stale refs |

---

## v3.3 Changes (2026-03-01)

### 4. Secondary Button — Two-State Design

| Property | Resting | Hover |
|----------|---------|-------|
| Border | `rgba(0,0,0,0.12)` | `#b01f24` brand red |
| Text | `rgba(0,0,0,0.7)` | `#b01f24` brand red |
| Shimmer | White `rgba(255,255,255,0.8)` | Red-tinted `rgba(176,31,36,0.08)` |
| Shadow | `0 2px 8px rgba(0,0,0,0.04)` | `0 4px 16px rgba(176,31,36,0.12)` |
| Transition | — | `300ms ease-out` |

**Dark mode secondary:** Unchanged.

### 5. Documentation Created/Updated

| File | What |
|------|------|
| `design-system-checklist.md` v2.0 | File map (45 files, 10 groups) |
| `COMPONENT_GUIDELINES_4WH.md` | Secondary two-state, 3 new component entries |
| `QUICK_START_PROMPT.md` | Page-level components, page shell template |

---

## All Migrations Complete

| Task | Status |
|------|--------|
| Badge.tsx CSS custom properties | ✅ Complete (4 phases) |
| AI Context modularization | ✅ Complete (6 modules) |
| Doc consolidation | ✅ Complete (5 files updated/deleted) |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v3.3.2 | 2026-03-01 | AI Context modularized (53KB→6×6KB modules); Badge CSS migration Phase 1-4; Doc consolidation (BADGES v3.0, TECHNICAL deprecated, PROJECT_STRUCTURE deleted, checklist v2.1, README v3.3.2) |
| v3.3 | 2026-03-01 | Secondary button two-state; 92-5-3 Color Usage Guide; Page Assembly Guide; Token Cross-Reference; checklist v2.0; 6 page components + 3 hooks documented |
| v3.2.1 | (previous) | Base version in original AI Context monolith |
