# Design System — Core Rules & AI Checklist

**Module:** `ai-context/CORE.md`  
**Version:** 3.3.2  
**Date:** 2026-03-01  
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
- `COMPONENT_GUIDELINES_4WH.md` — 4W+H for every component with decision flowcharts
- `design-system-checklist.md` — File map (45 files, 10 groups)
- `QUICK_START_PROMPT.md` — Shortened copy-paste prompt
- `GITHUB_PUSH_GUIDE.md` — Push safety rules

---

## Checklist for AI

Before generating ANY code, verify:

- [ ] Read the relevant `ai-context/` module(s)
- [ ] Using correct typography tokens (`--text-sm`, `--text-2xl`)
- [ ] Using `--brand-red` ONLY for CTAs
- [ ] Button `size="md"` as default (NOT lg)
- [ ] `showArrow={true}` ONLY for urgency/forms
- [ ] Shimmer animation automatic (don't disable)
- [ ] Following section pattern (black/white/warm)
- [ ] Using correct component (Button vs CTALink vs InlineLink)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)
- [ ] Font family: Serif for headings, Sans for body/UI
- [ ] Badge uses theme prop (not inline colors)

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

### DO
1. Use `variant="brand"` ONLY for conversion CTAs
2. Use `size="md"` as default (42px height)
3. Use `--text-sm` (16px) for ALL body text
4. Use `--text-2xl` (39px) for ALL section headings
5. Use color tokens from theme.css
6. Use spacing scale (`--space-4`, `--space-6`, etc.)
7. Use CSS variables for font sizes
8. Let shimmer animation run (core brand identity)
9. Use Badge `theme` prop for colors (not inline styles)
10. Use `Container` component for width constraints

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

---

## Quick Links

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **Button Component:** `/src/app/components/Button.tsx`
- **Badge Component:** `/src/app/components/Badge.tsx`
- **Link Components:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`

---

## Learning Resources

1. **Read First:** This file + relevant `ai-context/` modules
2. **Component References:** `Button.tsx`, `Badge.tsx`, `CTALink.tsx`, `InlineLink.tsx`
3. **Section Examples:** `HeroSection.tsx`, `ChallengesSection.tsx`, `MethodologySection.tsx`
4. **Dashboard:** `DesignSystemDashboard.tsx` (visual reference), `FoundationsContent.tsx` (typography details)

---

**v3.3.2 | March 1, 2026 | Modularized from 53KB monolith**
