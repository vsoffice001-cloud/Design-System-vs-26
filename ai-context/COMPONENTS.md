# Design System — Component Systems

**Module:** `ai-context/COMPONENTS.md`  
**Version:** 3.3.2  
**Source of truth:** `/src/app/components/`  
**Detailed 4W+H:** `COMPONENT_GUIDELINES_4WH.md`

---

## Button System

### Variants

```tsx
variant="primary"   // Black - Main actions
variant="brand"     // Red (#b01f24) - CTAs ONLY
variant="secondary" // Two-state (neutral rest → brand-red hover)
variant="ghost"     // Transparent - Tertiary on dark backgrounds
```

### Sizes

| Size | Height | Font | Use For |
|------|--------|------|---------|
| `sm` | 36px | 14px | Navbar CTA |
| `md` | 42px | 16px | **DEFAULT** — 90% of buttons |
| `lg` | 48px | 18px | Homepage hero only |
| `xl` | 56px | 20px | Rare, maximum impact |

### Secondary Button Two-State (v3.3)

| Property | Resting | Hover |
|----------|---------|-------|
| Border | `rgba(0,0,0,0.12)` neutral | `#b01f24` brand red |
| Text | `rgba(0,0,0,0.7)` neutral | `#b01f24` brand red |
| Shimmer | White sweep `rgba(255,255,255,0.8)` | Red-tinted `rgba(176,31,36,0.08)` |
| Shadow | `0 2px 8px rgba(0,0,0,0.04)` | `0 4px 16px rgba(176,31,36,0.12)` |
| Arrow | `rgba(0,0,0,0.7)` | `var(--brand-red)` |
| Transition | — | `300ms ease-out` |

**Dark mode secondary:** Unchanged — `bg-white/10`, white text, white border.

### Usage

```tsx
import { Button } from '@/app/components/Button';

// Standard CTA (most common)
<Button variant="brand">Get Started</Button>

// Urgency CTA with animated arrow
<Button variant="brand" showArrow>Schedule Demo</Button>

// Hero CTA (big pages only)
<Button variant="brand" size="lg" showArrow>Transform Business</Button>

// Navbar (compact)
<Button variant="brand" size="sm">Sign Up</Button>

// Secondary (two-state: neutral at rest, brand-red on hover)
<Button variant="secondary">Learn More</Button>
<Button variant="secondary" showArrow>Explore Features</Button>
```

---

## Link System

Three components for different contexts:

| Component | When | Example |
|-----------|------|---------|
| `Button` | Primary actions, form submits, conversions | `<Button variant="brand">Sign Up</Button>` |
| `CTALink` | Text + arrow, exploratory navigation | `<CTALink href="#method">See How</CTALink>` |
| `InlineLink` | Within paragraph text | `our <InlineLink href="#study">case study</InlineLink>` |

### Decision Flowchart

```
Is it a primary action (form submit, main CTA)?
 → YES: <Button>
 → NO: Is it text + arrow CTA ("Learn More ->")?
        → YES: <CTALink>
        → NO: Is it within paragraph text?
               → YES: <InlineLink>
               → NO: <CTALink> or <Button>
```

### WHEN NOT
- Don't use `Button` for exploratory links (use `CTALink`)
- Don't use `CTALink` for primary conversions (use `Button`)
- Don't use `InlineLink` standalone (use `CTALink`)

---

## Animation System

### Shimmer Animation
**What:** Always-active sweep on ALL buttons. 700ms duration, gradient left-to-right.  
**Rule:** NEVER disable shimmer — it's core brand identity.

### Arrow Animation
**What:** `showArrow={true}` adds animated ArrowUpRight (45° diagonal).  
**Rule:** ONLY for buttons redirecting to forms/pages with urgency.  
**Examples:** "Unlock Full Report", "Schedule Demo", "Get Started"  
**NEVER:** "Learn More", "View Details", "Cancel", "Back"  
**NEVER:** Use ArrowRight or ChevronRight — always ArrowUpRight.

---

## Badge System (v3.3.2 — CSS Custom Property Driven)

### Architecture

```
Badge.tsx (JS)                    theme.css (CSS)
──────────────────────────────    ──────────────────────────────
THEME_COLORS[theme][mode]         .badge { color: var(--badge-text) }
  ↓ sets inline CSS vars           .badge:hover {
style={{                            background: var(--badge-hover-bg)
  '--badge-text': ...,            }
  '--badge-bg': ...,              .badge-shimmer { uses --badge-shimmer }
  '--badge-border': ...,
}}
```

JS selects theme colors → sets as CSS custom properties → CSS rules consume them.

### Props

```tsx
<Badge
  variant="minimal | rounded | pill"     // Shape (default: minimal)
  size="xs | sm | md | lg"               // Size (default: sm)
  theme="neutral | warm | brand | coral | purple | periwinkle |
         success | warning | error | info | muted"  // 11 themes
  mode="light | dark"                    // Background context
  bordered={boolean}                     // Show border
  shimmer={boolean}                      // Shimmer animation
  interactive={boolean}                  // Hover states
  fontWeight={400 | 500 | 600}           // Weight override
  uppercase={boolean}                    // Force uppercase (default: true)
>
  BADGE TEXT
</Badge>
```

### Convenience Wrappers (10)

```tsx
import {
  Badge, SectionLabel, StepPill, ObjectivePill, ObjectivePillInteractive,
  InfoCardLabel, CategoryBadge, StatusBadge, InfoBadge, MutedBadge, ClickableBadge,
} from '@/app/components/Badge';

// Section label above headings
<SectionLabel theme="brand" fontWeight={600}>KEY INSIGHTS</SectionLabel>

// Step pill in methodology
<StepPill stepNumber={1} />

// Status indicator
<StatusBadge status="success">COMPLETE</StatusBadge>

// Chapter label
<Badge variant="minimal" size="sm" theme="brand" fontWeight={600}>CHAPTER 1</Badge>

// Clickable badge
<ClickableBadge onClick={fn} theme="purple">Filter</ClickableBadge>
```

### Badge Theme Selection

| Context | Theme | Example |
|---------|-------|---------|
| Section headers | `neutral` or `brand` | `<SectionLabel>CHALLENGES</SectionLabel>` |
| Methodology steps | `warm` | `<StepPill stepNumber={1} />` |
| Success state | `success` | `<StatusBadge status="success">Done</StatusBadge>` |
| Warning state | `warning` | `<StatusBadge status="warning">Pending</StatusBadge>` |
| Premium features | `purple` | `<CategoryBadge theme="purple">Pro</CategoryBadge>` |
| Trust indicators | `periwinkle` | `<CategoryBadge theme="periwinkle">Verified</CategoryBadge>` |
| Energy/warmth | `coral` | `<CategoryBadge theme="coral">Hot</CategoryBadge>` |
| De-emphasized | `muted` | `<MutedBadge>Deprecated</MutedBadge>` |

**Full docs:** `BADGES_DOCUMENTATION.md` (v3.0)

---

## Form Labels

```tsx
import { Label } from '@/app/components/Label';

// Semantic <label> for forms (NOT for section headers)
<Label htmlFor="email" required>Email Address</Label>
<input id="email" type="email" />

// Variants: default | secondary | required
// Props: htmlFor, variant, required, helperText, className
```

---

## Component Quick Reference

```tsx
// Foundations (CSS variables from theme.css)
font-size: var(--text-sm);    // Body text
font-size: var(--text-2xl);   // Section headings
color: var(--brand-red);       // CTAs only
background: var(--warm-300);   // Highlighted sections

// Buttons
import { Button } from '@/app/components/Button';

// Links
import { CTALink } from '@/app/components/CTALink';
import { InlineLink } from '@/app/components/InlineLink';

// Arrow (internal — don't use directly)
import { AnimatedArrow } from '@/app/components/AnimatedArrow';

// Badges
import { Badge, SectionLabel, StepPill, StatusBadge } from '@/app/components/Badge';

// Form labels
import { Label } from '@/app/components/Label';
```

---

**v3.3.2 | Part of [ai-context/](.) module system**
