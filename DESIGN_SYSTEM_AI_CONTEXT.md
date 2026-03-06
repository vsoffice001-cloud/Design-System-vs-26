# DESIGN SYSTEM — AI CONTEXT

**Version:** 3.4.0  
**Date:** 2026-03-06  
**Architecture:** Modular (6 focused files in `ai-context/`)

---

## This File Is Now a Lightweight Index

The original 53KB monolith has been split into 6 focused modules, each under 10KB and fully readable via the GitHub API. All content from v3.2 plus v3.3–3.3.2 patches has been merged into the relevant modules.

---

## Module System

| # | File | Content | Size |
|---|------|---------|------|
| 1 | [`ai-context/CORE.md`](ai-context/CORE.md) | Overview, critical rules, AI checklist, common mistakes, quality metrics | 5KB |
| 2 | [`ai-context/TYPOGRAPHY.md`](ai-context/TYPOGRAPHY.md) | Font pairing (Serif/Sans/Mono), Major Third scale (1.25), custom sizes, weights | 4KB |
| 3 | [`ai-context/COLORS.md`](ai-context/COLORS.md) | 92-5-3 hierarchy, brand/black/warm/red/accent/utility colors, section color recipe | 8KB |
| 4 | [`ai-context/COMPONENTS.md`](ai-context/COMPONENTS.md) | Button (4 variants + two-state secondary), Link system, Badge (CSS custom property driven), Animation | 7KB |
| 5 | [`ai-context/LAYOUT.md`](ai-context/LAYOUT.md) | Spacing scale, 5 container widths, responsive padding, section pattern, page assembly guide | 7KB |
| 6 | [`ai-context/PROMPTS.md`](ai-context/PROMPTS.md) | 7 copy-paste AI implementation prompts | 6KB |

**Total:** ~37KB across 6 files (down from 53KB monolith)

---

## Reading Order for AI Assistants

| Step | File | When |
|------|------|------|
| 1 | `ai-context/CORE.md` | **Always** — rules, checklist, mistakes |
| 2 | Relevant module(s) | Based on task — typography, colors, components, layout |
| 3 | `COMPONENT_GUIDELINES_4WH.md` | When building/modifying specific components |
| 4 | `design-system-checklist.md` | When importing files or pushing to GitHub |
| 5 | `QUICK_START_PROMPT.md` | For fast sessions (copy-paste the prompt) |

---

## Companion Docs

| File | What | Size |
|------|------|------|
| `COMPONENT_GUIDELINES_4WH.md` | 4W+H for every component, decision flowcharts | 28KB |
| `design-system-checklist.md` | File map — 51 files, 11 groups, barrel exports | 22KB |
| `QUICK_START_PROMPT.md` | Shortened copy-paste AI prompt | 6KB |
| `GITHUB_PUSH_GUIDE.md` | Push safety, never-push list, commit format | 10KB |
| `BADGES_DOCUMENTATION.md` | Badge system deep-dive (v3.0) | 12KB |
| `RESOURCE_CARD_DOCUMENTATION.md` | ResourceCard deep-dive (v3.0) | 42KB |
| `GITHUB_REPO_MANIFEST.md` | Canonical file registry | 17KB |

---

## Key Architecture: Dashboard Foundations (v3.4.0)

The Foundations tab content lives in **modular sub-files** under `src/app/components/foundations/`:

| File | Content | Size |
|------|---------|------|
| `FoundationsHelpers.tsx` | Shared components (DocSection, ColorCard, etc.) | 5KB |
| `ColorsContent.tsx` | Color system documentation | 36KB |
| `TypographyContent.tsx` | Typography documentation | 23KB |
| `SpacingContent.tsx` | Spacing documentation | 3KB |
| `LayoutGridContent.tsx` | Layout & grid documentation | 25KB |
| `ElevationBorderRadius.tsx` | Elevation & border radius documentation | 17KB |

**Import path:** `@/app/components/FoundationsContent` (re-export hub — no import changes needed)

---

## Migration History

| Version | What |
|---------|------|
| v3.2 (Feb 28) | Original monolith (53KB) — typography, colors, spacing, buttons, links, layout, prompts |
| v3.3 (Mar 1) | Added: 92-5-3 Color Usage Guide, Page Assembly Guide, Token Cross-Reference, secondary button two-state |
| v3.3.1 (Mar 1) | Added: Component-level recipes for 7 section types |
| v3.3.2 (Mar 1) | Badge CSS migration complete; **AI Context modularized into 6 files** |
| v3.4.0 (Mar 6) | **FoundationsContent.tsx split** into 6 modular sub-files in `foundations/`; Dashboard alignment all 5 phases pushed to GitHub |

The `DESIGN_SYSTEM_UPDATES.md` addendum file is no longer needed for patching — all patches have been merged into the modules. It is kept as a changelog/migration log.

---

**v3.4.0 | Updated March 6, 2026 | FoundationsContent split: 110KB → 6 modular sub-files**
