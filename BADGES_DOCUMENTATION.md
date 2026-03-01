# Badge System Documentation

**Component:** `src/app/components/Badge.tsx`  
**Version:** 3.0  
**Date:** March 1, 2026  
**Architecture:** CSS Custom Property Driven (migrated from hardcoded JS)

---

## Overview

The Badge system is a **unified, flexible component** supporting all label and pill variants across the editorial design system. One component, 11 themes, 4 sizes, 3 variants = 132 possible combinations.

### Design Principles

- **Single Source of Truth** — One component, all variants
- **CSS Custom Property Driven** — Sizes, shapes, and colors via `--badge-*` tokens
- **WCAG AAA Compliant** — All theme/mode combinations tested for contrast
- **Performance Optimized** — Pure CSS animations, shimmer via CSS gradient

### Architecture

```
Badge.tsx (JS)                    theme.css (CSS)
──────────────────────────────    ──────────────────────────────
THEME_COLORS[theme][mode]         :root { --badge-sm-font: var(--text-xs) }
  ↓ selects values                .badge { color: var(--badge-text) }
  ↓ sets as inline CSS vars       .badge:not(.badge-minimal) {
style={{                            background-color: var(--badge-bg);
  '--badge-text': ...,            }
  '--badge-bg': ...,              .badge:hover {
  '--badge-border': ...,            background-color: var(--badge-hover-bg);
  '--badge-shimmer': ...,         }
  fontSize: var(--badge-sm-font)  .badge-shimmer {
}}                                  background: linear-gradient(
                                      ... var(--badge-shimmer) ...);
                                  }
```

**JS selects** theme colors → **sets as CSS custom properties** → **CSS rules consume** them for base, hover, and shimmer states.

---

## Props

```typescript
interface BadgeProps {
  children: ReactNode;
  variant?: 'minimal' | 'rounded' | 'pill';  // Shape (default: 'minimal')
  size?: 'xs' | 'sm' | 'md' | 'lg';          // Size (default: 'sm')
  theme?: BadgeTheme;                         // Color theme (default: 'neutral')
  mode?: 'light' | 'dark';                    // Background mode (default: 'light')
  bordered?: boolean;                         // Show border (default: false)
  shimmer?: boolean;                          // Shimmer animation (default: false)
  interactive?: boolean;                      // Hover states (default: false)
  uppercase?: boolean;                        // Force uppercase (default: true)
  letterSpacing?: string;                     // Custom spacing override
  fontWeight?: 400 | 500 | 600;              // Weight override
  as?: 'span' | 'div' | 'p';                 // HTML tag (default: 'span')
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  onClick?: () => void;
}

type BadgeTheme =
  | 'neutral'     // Black/white (default)
  | 'warm'        // Editorial warm palette
  | 'brand'       // Ken Bold Red (#b01f24)
  | 'coral'       // Coral/Terracotta
  | 'purple'      // Premium, Innovation
  | 'periwinkle'  // Trust, Reliability
  | 'success'     // Green positive
  | 'warning'     // Amber caution
  | 'error'       // Red negative
  | 'info'        // Blue informational
  | 'muted';      // Deliberately subdued
```

### fontWeight Guidance

| Weight | When to use |
|--------|------------|
| `400` | Body-context badges, subtle labels, info card labels |
| `500` | Default for pill/rounded badges, category tags (default) |
| `600` | Section labels, chapter labels, headings context |

---

## Variants

### Minimal (Section Labels)
No background, no border, no padding. For section eyebrow labels.

```tsx
<Badge variant="minimal" size="sm" theme="neutral">Challenges</Badge>
```

| Property | Value |
|----------|-------|
| Border radius | `var(--badge-radius-minimal)` = 0px |
| Padding | 0px |
| Background | transparent |
| Default weight | 400 |

### Rounded (Category Tags)
5px radius with optional background and border.

```tsx
<Badge variant="rounded" size="sm" theme="neutral" bordered>Strategy</Badge>
```

| Property | Value |
|----------|-------|
| Border radius | `var(--badge-radius-rounded)` = 5px |
| Padding | Size-based (CSS vars) |
| Background | Theme-based |
| Default weight | 500 |

### Pill (Step Numbers, Objectives)
Fully rounded, usually bordered.

```tsx
<Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 1</Badge>
```

| Property | Value |
|----------|-------|
| Border radius | `var(--badge-radius-pill)` = 9999px |
| Padding | Size-based (CSS vars) |
| Background | Theme-based |
| Default weight | 500 |

---

## Sizes (CSS Custom Properties)

All size tokens are defined in `theme.css` as `--badge-*` CSS custom properties.

| Size | Font | Padding (V × H) | Letter Spacing | Est. Height | CSS Vars |
|------|------|-----------------|----------------|-------------|----------|
| `xs` | `clamp(9px, 0.8vw, 10px)` | 4px × 12px | 1.2px | ~18px | `--badge-xs-font`, `--badge-xs-py`, `--badge-xs-px` |
| `sm` | `var(--text-xs)` (12.8px) | 6px × 14px | 1.8px | ~23px | `--badge-sm-font`, `--badge-sm-py`, `--badge-sm-px` |
| `md` | 13px | 8px × 18px | 2px | ~29px | `--badge-md-font`, `--badge-md-py`, `--badge-md-px` |
| `lg` | 15px | 10px × 22px | 2.2px | ~35px | `--badge-lg-font`, `--badge-lg-py`, `--badge-lg-px` |

---

## Themes (11 Total)

Each theme has **light** and **dark** mode variants. All colors are applied via CSS custom properties set by Badge.tsx.

| Theme | Light Text | Dark Text | Use Case |
|-------|-----------|-----------|----------|
| `neutral` | `rgba(0,0,0,0.6)` | `rgba(255,255,255,0.9)` | General labels, section headers |
| `warm` | `var(--warm-900)` | `var(--warm-50)` | Editorial content, methodology |
| `brand` | `var(--brand-red)` | `rgba(255,200,200,0.95)` | CTAs, featured — use sparingly |
| `coral` | `var(--coral-900)` | `rgba(255,235,228,0.95)` | Warmth, energy, approachability |
| `purple` | `var(--purple-900)` | `rgba(239,237,253,0.95)` | Premium, innovation, insights |
| `periwinkle` | `var(--periwinkle-900)` | `rgba(245,246,253,0.95)` | Trust, reliability, calm |
| `success` | `rgba(21,128,61,1)` | `rgba(187,247,208,1)` | Positive states, completed |
| `warning` | `rgba(146,64,14,1)` | `rgba(254,243,199,1)` | Caution, attention |
| `error` | `rgba(153,27,27,1)` | `rgba(254,202,202,1)` | Negative states, failures |
| `info` | `rgba(34,139,230,1)` | `rgba(200,220,255,0.95)` | Informational, data |
| `muted` | `rgba(0,0,0,0.35)` | `rgba(255,255,255,0.5)` | Deprecated, de-emphasized |

---

## Convenience Wrappers (9 Total)

All wrappers are exported from `Badge.tsx`. No separate files.

### SectionLabel
For page section headers. Default fontWeight: 600.

```tsx
import { SectionLabel } from '@/app/components/Badge';

<SectionLabel>Challenges</SectionLabel>
<SectionLabel theme="brand" fontWeight={600}>KEY INSIGHTS</SectionLabel>
<SectionLabel mode="dark">Client Context</SectionLabel>
```

### StepPill
For methodology steps. Pre-configured: pill, sm, warm, bordered, shimmer.

```tsx
import { StepPill } from '@/app/components/Badge';

<StepPill stepNumber={1} />
<StepPill stepNumber={2} active />
```

### ObjectivePill
For engagement objectives. Optional interactive mode.

```tsx
import { ObjectivePill } from '@/app/components/Badge';

<ObjectivePill objectiveNumber={1} />
<ObjectivePill objectiveNumber={2} interactive onClick={() => {}} />
```

### ObjectivePillInteractive
Legacy interactive version with shimmer. Size: md.

```tsx
import { ObjectivePillInteractive } from '@/app/components/Badge';

<ObjectivePillInteractive number="1" />
<ObjectivePillInteractive number="2" label="Goal" />
```

### InfoCardLabel
For metadata labels. Size: xs, opacity: 0.7.

```tsx
import { InfoCardLabel } from '@/app/components/Badge';

<InfoCardLabel>Client</InfoCardLabel>
```

### CategoryBadge
For content categorization. Rounded, bordered.

```tsx
import { CategoryBadge } from '@/app/components/Badge';

<CategoryBadge>Strategy</CategoryBadge>
<CategoryBadge theme="purple">Insights</CategoryBadge>
```

### StatusBadge
For status indicators. Rounded, bordered, status-themed.

```tsx
import { StatusBadge } from '@/app/components/Badge';

<StatusBadge status="success">Completed</StatusBadge>
<StatusBadge status="warning">In Progress</StatusBadge>
<StatusBadge status="error">Failed</StatusBadge>
```

### InfoBadge
For informational content. Uses `info` theme.

```tsx
import { InfoBadge } from '@/app/components/Badge';

<InfoBadge>New</InfoBadge>
```

### MutedBadge
For deliberately subdued content. Opacity: 0.7.

```tsx
import { MutedBadge } from '@/app/components/Badge';

<MutedBadge>Deprecated</MutedBadge>
```

### ClickableBadge
For interactive, clickable badges. Pill, bordered, shimmer.

```tsx
import { ClickableBadge } from '@/app/components/Badge';

<ClickableBadge onClick={() => {}} theme="purple">Click me</ClickableBadge>
```

---

## Quick Reference

| Use Case | Variant | Size | Theme | Bordered | Shimmer | Wrapper |
|----------|---------|------|-------|----------|---------|--------|
| Section headers | minimal | sm | neutral | false | false | `SectionLabel` |
| Step numbers | pill | sm | warm | true | true | `StepPill` |
| Objectives | pill | sm | neutral | true | interactive | `ObjectivePill` |
| Info labels | minimal | xs | neutral | false | false | `InfoCardLabel` |
| Category tags | rounded | sm | any | true | false | `CategoryBadge` |
| Success status | rounded | sm | success | true | false | `StatusBadge` |
| Warning status | rounded | sm | warning | true | false | `StatusBadge` |
| Error status | rounded | sm | error | true | false | `StatusBadge` |
| Informational | rounded | sm | info | true | false | `InfoBadge` |
| Deprecated items | rounded | sm | muted | true | false | `MutedBadge` |
| Clickable actions | pill | sm | any | true | true | `ClickableBadge` |

---

## CSS Custom Properties Reference

All badge tokens in `theme.css`:

```css
/* Size tokens */
--badge-xs-font, --badge-xs-py, --badge-xs-px, --badge-xs-tracking
--badge-sm-font, --badge-sm-py, --badge-sm-px, --badge-sm-tracking
--badge-md-font, --badge-md-py, --badge-md-px, --badge-md-tracking
--badge-lg-font, --badge-lg-py, --badge-lg-px, --badge-lg-tracking

/* Shape tokens */
--badge-radius-minimal: 0px
--badge-radius-rounded: 5px
--badge-radius-pill: 9999px

/* Animation tokens */
--badge-transition-duration: 300ms
--badge-shimmer-duration: 700ms

/* Per-instance color tokens (set by Badge.tsx inline) */
--badge-text       /* Consumed by .badge { color } */
--badge-bg         /* Consumed by .badge:not(.badge-minimal) { background-color } */
--badge-border     /* Consumed by .badge { border-color } */
--badge-border-width
--badge-hover-bg   /* Consumed by .badge:hover { background-color } */
--badge-hover-border
--badge-shimmer    /* Consumed by .badge-shimmer { gradient } */
```

---

## Import Path

```tsx
// All exports from one file:
import { 
  Badge,
  SectionLabel, StepPill, ObjectivePill, ObjectivePillInteractive,
  InfoCardLabel, CategoryBadge, StatusBadge, InfoBadge, MutedBadge, ClickableBadge,
  BADGE_TOKENS,
  type BadgeProps, type BadgeVariant, type BadgeSize, type BadgeTheme, type BadgeMode,
} from '@/app/components/Badge';

// Legacy re-exports (backward compat, same components):
import { SectionLabel } from '@/app/components/badges';
```

---

## Best Practices

### DO
- Use convenience wrappers for common patterns
- Use `mode="dark"` on dark backgrounds, `mode="light"` on light
- Use `bordered` with pill and rounded variants
- Use `shimmer` sparingly for emphasis (step pills, CTAs)
- Use `fontWeight={600}` for section labels in heading context

### DON'T
- Override colors with inline styles (`style={{ color: '#ff0000' }}`) — use themes
- Use `shimmer` on every badge — it loses impact
- Skip `bordered` on pill badges — they look incomplete
- Use `Badge` for clickable actions — use `Button` instead
- Mix font size Tailwind classes with Badge — use `size` prop

---

## Related Documentation

- **Source code:** `src/app/components/Badge.tsx`
- **CSS tokens:** `src/styles/theme.css` (search `BADGE SIZE & SHAPE`)
- **Migration log:** `DESIGN_SYSTEM_UPDATES.md` (v3.3.1–3.3.2)
- **4W+H reference:** `COMPONENT_GUIDELINES_4WH.md` (Badge section)
- **CardBadge overlay:** `RESOURCE_CARD_DOCUMENTATION.md` (Badge Overlay System)
- **File map:** `design-system-checklist.md` (Group 2: Core Molecules)

---

**v3.0 | March 1, 2026 | Aligned with Badge CSS custom property migration (Phase 1–4)**
