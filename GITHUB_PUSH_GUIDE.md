# GITHUB PUSH GUIDE
**How to Push Files Correctly to the `main` Branch**
**Version:** 1.1
**Date:** 2026-03-01
**For:** Team members, AI assistants, and contributors

---

## PURPOSE

This guide ensures that every file pushed to GitHub is:
1. Properly classified by Atomic Design level
2. Free of Figma Make-only dependencies
3. Registered in all required documentation and barrel exports
4. Accompanied by correct commit messages

**Read this BEFORE pushing anything.**

---

## TABLE OF CONTENTS

1. [The Golden Rule: What NOT to Push](#the-golden-rule-what-not-to-push)
2. [Pre-Push Checklist (Universal)](#pre-push-checklist-universal)
3. [Atomic Design Classification](#atomic-design-classification)
4. [Push Procedures by Level](#push-procedures-by-level)
5. [Documentation Update Matrix](#documentation-update-matrix)
6. [The figma:asset Problem](#the-figmaasset-problem)
7. [Barrel Export Registration](#barrel-export-registration)
8. [CSS Variable Registration](#css-variable-registration)
9. [Commit Message Format](#commit-message-format)
10. [Known Divergences Between Figma Make and GitHub](#known-divergences)
11. [Complete File Registry](#complete-file-registry)

---

## THE GOLDEN RULE: WHAT NOT TO PUSH

### NEVER push these to GitHub:

| File/Directory | Why |
|---|---|
| `src/app/App.tsx` (Figma Make version) | GitHub's App.tsx uses `react-router-dom` with route-based navigation. Figma Make's version renders `DesignSystemDashboard` directly. They are intentionally different. |
| `src/imports/*.tsx` (16 Figma frame files) | These are Figma Make environment imports. They don't resolve outside Figma Make. |
| `src/app/components/ui/*.tsx` (48 shadcn files) | Local shadcn/ui primitives. Used in Figma Make but not tracked on GitHub. |
| `src/app/components/figma/ImageWithFallback.tsx` | Protected Figma Make system file. |
| `pnpm-lock.yaml` | Protected system file. |
| Any file with unresolved `figma:asset/` imports | See The figma:asset Problem section. |

### ALWAYS push these (when changed):

| File | Why |
|---|---|
| `src/styles/theme.css` | Design tokens are the foundation of everything |
| `src/styles/fonts.css` | Font imports |
| `src/app/components/index.ts` | Barrel exports for components |
| `src/app/hooks/index.ts` | Barrel exports for hooks |
| Documentation `.md` files | Team and AI reference |

---

## PRE-PUSH CHECKLIST (UNIVERSAL)

Before pushing **any** file, verify ALL of the following:

### Step 1: Dependency Audit
- [ ] No `figma:asset/` imports
- [ ] All `src/imports/` dependencies also pushed (or replaced)
- [ ] No `src/app/components/ui/` dependencies (unless that ui/ file exists on GitHub)
- [ ] All custom component/hook imports exist on GitHub
- [ ] All CSS variables used are defined in `theme.css` on GitHub

### Step 2: Import Path Verification
- [ ] All imports use `@/app/components/` or `@/app/hooks/` aliases
- [ ] No imports reference `react-router-dom` (use `react-router` instead)
- [ ] All lucide-react icons are available

### Step 3: Classification
- [ ] You know which Atomic Design level this file belongs to
- [ ] You know which documentation files need updating

### Step 4: Registration
- [ ] Component exported from `src/app/components/index.ts`
- [ ] Hook exported from `src/app/hooks/index.ts`

### Step 5: Documentation
- [ ] `COMPONENT_GUIDELINES_4WH.md` has a 4W+H entry
- [ ] `GITHUB_REPO_MANIFEST.md` includes it

---

## ATOMIC DESIGN CLASSIFICATION

```
Q1: CSS variable, font, color, spacing token?  -> ATOM (Level 1)
Q2: Single-purpose UI component?               -> MOLECULE (Level 2)
Q3: Combines 3+ molecules into a section?       -> ORGANISM (Level 3)
Q4: Page skeleton defining section order?       -> TEMPLATE (Level 4)
Q5: Final page with real content?               -> PAGE (Level 5)
React hook?                                     -> UTILITY
Documentation/showcase component?               -> DOCUMENTATION
```

---

## PUSH PROCEDURES BY LEVEL

### Pushing an ATOM
```
1. Edit src/styles/theme.css
2. Search ALL components for references to the new/changed variable name
3. Verify no component references an undefined variable
4. Push theme.css + updated docs
5. Commit: "tokens(atom): add --variable-name for [purpose]"
```

### Pushing a MOLECULE
```
1. Verify NO figma:asset imports
2. Verify all dependencies exist on GitHub
3. Verify all CSS variables defined in theme.css
4. Add export to components/index.ts
5. Add 4W+H entry to COMPONENT_GUIDELINES_4WH.md
6. Update GITHUB_REPO_MANIFEST.md
7. Push: component + index.ts + docs
8. Commit: "feat(molecule): add ComponentName - [purpose]"
```

### Pushing an ORGANISM
```
1. LIST all dependencies (molecules, hooks, CSS vars, images, SVGs)
2. For EACH dependency, verify it exists on GitHub
3. If any uses figma:asset, resolve first
4. If new CSS variables needed, push theme.css first
5. If new hook needed, push hook first
6. Add export to components/index.ts
7. Add 4W+H entry
8. Update GITHUB_REPO_MANIFEST.md
9. Push: ALL new files together
10. Commit: "feat(organism): add SectionName - [purpose]"
```

**Dependency Tree Example (ResourcesSection):**
```
ResourcesSection.tsx
  +-- ResourceCard.tsx
  +-- Container.tsx
  +-- SubtleVariantSwitcher.tsx
  +-- useResponsiveGutter.ts
  +-- react-responsive-masonry (package.json)
  +-- 8 CSS variables in theme.css
```

### Pushing a HOOK
```
1. Verify no Figma Make-specific dependencies
2. Add export to hooks/index.ts
3. Push: hook + hooks/index.ts
4. Commit: "feat(hook): add useHookName - [purpose]"
```

---

## DOCUMENTATION UPDATE MATRIX

| What You Push | index.ts | hooks/index.ts | theme.css | 4WH.md | MANIFEST.md |
|---|---|---|---|---|---|
| CSS Variable | - | - | EDIT | - | UPDATE |
| Molecule | ADD | - | verify | ADD | UPDATE |
| Organism | ADD | - | verify/add | ADD | UPDATE |
| Hook | - | ADD | - | - | UPDATE |
| Doc Component | ADD | - | - | - | UPDATE |

---

## THE figma:asset PROBLEM

`figma:asset/` is a virtual module scheme that only works in Figma Make.

**Fix Option A:** Replace with Unsplash URLs (for placeholder images)
**Fix Option B:** Replace with local files in `/public/images/` (for brand assets)
**Fix Option C:** Make images prop-driven (for reusable components)

### Resolved (Mar 1, 2026)

| File | Fix Applied |
|---|---|
| `ResourcesSection.tsx` | 8 figma:asset imports replaced with Unsplash URL constants |
| `ClientContextSection.tsx` | Logo made prop-driven with text fallback |

---

## COMMIT MESSAGE FORMAT

```
type(scope): short description

Types: feat, fix, tokens, docs, refactor, chore, style
Scopes: atom, molecule, organism, template, page, hook, barrel
```

Examples:
```
feat(molecule): add Container layout wrapper with 5 width presets
feat(organism): add ResourcesSection with Masonry grid and 7 card variants
tokens(atom): add --text-primary, --text-secondary semantic colors
docs: update COMPONENT_GUIDELINES_4WH.md with ResourceCard 4W+H
```

---

## KNOWN DIVERGENCES

| Area | Figma Make | GitHub | Why |
|---|---|---|---|
| `App.tsx` | Renders `<DesignSystemDashboard />` | Uses `react-router-dom` routes | Different rendering contexts |
| `src/imports/` | 16 Figma frame `.tsx` files + SVGs | Only SVG path files | Figma frames are design-time artifacts |
| `src/app/components/ui/` | 48 shadcn/ui files | Not tracked | Local-only in Figma Make |
| Router package | `react-router` | `react-router-dom` | Figma Make environment constraint |

### Intentional Code Exceptions

| File | Exception | Why |
|---|---|---|
| AllTypographyTokensContent.tsx | Hardcoded values | Demo showing token values |
| ChallengesSection.tsx | JS card-width calc | CSS vars can't be used in complex Tailwind calcs |
| ContactModal.tsx | Fixed modal width | Independent of container system |
| PatternsContent.tsx | Demo code strings | Example code, not system rules |

---

## COMPLETE FILE REGISTRY

All files marked [x] are confirmed on GitHub as of March 1, 2026.

**Core Molecules:** [x] Button, Badge, Label, CTALink, InlineLink, AnimatedArrow
**Layout Molecules:** [x] Container, Navbar, ContactModal, StickyCTA, ReadingProgressBar, TableOfContents, CodeBlockWithCopy, CollapsibleSection, VariantSwitcher, SpacingHelpers
**Resource Molecules:** [x] ResourceCard, SubtleVariantSwitcher
**Organisms:** [x] HeroSection, ClientContextSection, ChallengesSection, EngagementObjectivesSection, MethodologySection, ImpactSection, ValuePillarsSection, TestimonialSection, ResourcesSection, FinalCTASection, NextSectionCTA
**Dashboard:** [x] DesignSystemDashboard, DesignSystemSidebar, FoundationsContent, ComponentsContent, PatternsContent, MotionContent, GuidelinesContent, ResourcesContent, all All*Content files, all documentation/showcase components
**Hooks:** [x] useShimmer, useScrollAnimation, useScrollDirection, useActiveSection, useReadingProgress, useSectionProgress, useHeroVisibility, useCounter, useMagneticEffect, useResponsiveGutter
**Tokens:** [x] theme.css, fonts.css
**Barrel Exports:** [x] components/index.ts, hooks/index.ts

---

*Last updated: 2026-03-01 by AI Assistant*
*All files verified on GitHub*