# DESIGN SYSTEM - AI CONTEXT FILE
**Version:** 3.2  
**Date:** 2026-02-28  
**Purpose:** Complete 4W+H documentation for AI tools to automatically apply this design system

---

## 🎯 CRITICAL: READ THIS FIRST

**This file is the SINGLE SOURCE OF TRUTH for AI assistants building pages with our design system.**

When any team member asks you to build a page, component, or feature:
1. ✅ **ALWAYS read this file first**
2. ✅ **Apply ALL rules automatically**
3. ✅ **Reference component documentation**
4. ✅ **Use exact tokens and patterns**

---

## 📋 TABLE OF CONTENTS

1. [Design System Overview](#design-system-overview)
2. [Typography System](#typography-system)
3. [Color System](#color-system)
4. [Spacing System](#spacing-system)
5. [Button System](#button-system)
6. [Link System](#link-system)
7. [Layout System](#layout-system)
8. [Animation System](#animation-system)
9. [Component Library](#component-library)
10. [AI Implementation Prompts](#ai-implementation-prompts)

---

## DESIGN SYSTEM OVERVIEW

### **WHY**
Creates consistency, speeds development, ensures quality, enables team scalability, and provides single source of truth.

### **WHAT**
Minimalist editorial design system with black/white alternating sections, Major Third typography (1.25 ratio), Ken Bold Red (#b01f24) for CTAs only.

### **WHEN**
Use for ALL pages, components, and features in this project.

### **WHEN NOT**
Never deviate unless explicitly requested by user with clear reasoning.

### **WHERE**
Repository: `vsoffice001-cloud/Design-System-vs-26`  
Dashboard: `/src/app/components/DesignSystemDashboard.tsx`

### **HOW**
Import components from `/src/app/components/`, use CSS variables from `theme.css`, follow Atomic Design methodology.

---

## TYPOGRAPHY SYSTEM

### **Font Pairing System (Two-Font Strategy)**

#### **WHY**
Contrast pairing creates editorial authority (Serif headings) while maintaining functional clarity (Sans body/UI). This is a proven editorial pattern used by NYT, Medium, and Stripe.

#### **WHAT**
```css
--font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'Noto Serif', Georgia, 'Times New Roman', serif;
--font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
```

#### **WHEN**
- ✅ **Serif** (`var(--font-serif)`) → h1-h3 headings, display text, hero titles, testimonial quotes, large editorial numbers
- ✅ **Sans** (`var(--font-sans)`) → Body text, buttons, badges, labels, navigation, forms, tooltips, card descriptions
- ✅ **Mono** (`var(--font-mono)`) → Code blocks, data tables, technical/metric values

#### **WHEN NOT**
- ❌ NEVER use Serif for body text, buttons, labels, navigation, or any UI chrome
- ❌ NEVER use Sans for hero headings or section titles
- ❌ NEVER mix more than 2 custom typefaces

#### **Component-to-Font Mapping**
| Component | Font Family | Reason |
|-----------|------------|--------|
| Hero h1, Section h2, h3 | `--font-serif` | Editorial authority |
| Testimonial quotes | `--font-serif` | Literary feel |
| Large display numbers | `--font-serif` | Visual weight |
| Body paragraphs | `--font-sans` | Readability |
| Buttons (all variants) | `--font-sans` | UI clarity |
| Badge / SectionLabel | `--font-sans` | Functional labels |
| Navigation / TOC | `--font-sans` | Compact readability |
| Form labels / inputs | `--font-sans` | Form UX |
| Card descriptions | `--font-sans` | Density |
| Code blocks | `--font-mono` | Monospace alignment |
| Metric values | `--font-mono` | Tabular data |

---

### **Major Third Scale (1.25 Ratio)**

#### **WHY**
Mathematical progression creates harmonious visual hierarchy. 1.25× ratio provides clear size distinction while maintaining readability.

#### **WHAT**
```css
--text-xs: 0.8rem;      /* 12.8px - Labels, metadata, categories */
--text-sm: 1rem;        /* 16px - Body text, descriptions ⭐ MOST USED */
--text-base: 1.25rem;   /* 20px - Large body, card titles */
--text-lg: 1.563rem;    /* 25px - Card titles (2-3 cards) */
--text-xl: 1.953rem;    /* 31.25px - Subsection headings (h3) */
--text-2xl: 2.441rem;   /* 39px - Section headings (h2) ⭐ */
--text-3xl: 3.052rem;   /* 48.8px - Hero h1 ⭐ HERO ONLY */
--text-4xl: 3.815rem;   /* 61px - Extra large (challenge numbers) */
--text-5xl: 4.768rem;   /* 76.3px - Massive (rarely used) */
```

#### **WHEN**
- ✅ Use `--text-sm` (16px) for ALL body text, paragraphs, descriptions
- ✅ Use `--text-2xl` (39px) for ALL section headings (h2)
- ✅ Use `--text-3xl` (48.8px) ONLY for hero h1 and final CTA
- ✅ Use `--text-xs` (12.8px) for labels, metadata, section eyebrows

#### **WHEN NOT**
- ❌ Don't use hardcoded font sizes unless spatial constraints require it
- ❌ Don't use `--text-3xl` for regular section headings (reserved for heroes)
- ❌ Don't skip scale levels (e.g., don't jump from xs to xl)

---

### **Custom Font Sizes (Outside Scale)**

#### **WHY**
Navigation, compact UIs, and spatial constraints need specific pixel sizes not in the mathematical scale.

#### **WHAT**
```css
--text-2xs: 0.75rem;     /* 12px - Navbar, micro labels */
--text-compact: 0.875rem; /* 14px - Compact body text */
--text-nav: 0.875rem;    /* 14px - Navigation, TOC items */
```

#### **WHEN**
- ✅ `--text-nav`: TOC item titles, CTA descriptions, navigation menus
- ✅ `--text-compact`: Challenge cards (4+), dense content areas
- ✅ `--text-2xs`: Navbar text, copyright, micro labels

#### **WHEN NOT**
- ❌ Don't use for standard section headings (use scale)
- ❌ Don't use for body paragraphs (use `--text-sm`)

---

### **Font Weights**

```css
--font-weight-normal: 400;  /* Body text, paragraphs */
--font-weight-medium: 500;  /* Not used - skip */
--font-weight-semibold: 600; /* Headings, labels, emphasis */
```

#### **WHEN**
- ✅ Use 400 for all body text and descriptions
- ✅ Use 600 for headings, navigation, labels, buttons

---

## COLOR SYSTEM

### **Primary Brand Colors**

#### **WHY**
Pure black/white creates editorial minimalism, Ken Bold Red provides strategic accent for CTAs only.

#### **WHAT**
```css
--brand-red: #b01f24;        /* Ken Bold Red - PRIMARY BRAND */
--brand-red-hover: #8f181d;  /* Hover state */
--brand-red-active: #771419; /* Active/pressed state */

--black: #000000;            /* Pure black */
--white: #ffffff;            /* Pure white */
```

#### **WHEN**
- ✅ Use `--brand-red` ONLY for CTAs and conversion buttons
- ✅ Use `--black` for primary buttons, text, hero backgrounds
- ✅ Use `--white` for standard section backgrounds

#### **WHEN NOT**
- ❌ **NEVER use red for decorative purposes** (CTAs only!)
- ❌ Don't use red for borders, icons, or general accents
- ❌ Don't use gray - use black tints instead

---

### **Black Tints (White Mixed In)**

```css
--black-50: #fafafa;   /* Near white - Very subtle backgrounds */
--black-100: #f5f5f5;  /* Card backgrounds */
--black-200: #e5e5e5;  /* Borders, dividers */
--black-300: #d4d4d4;  /* Disabled states */
--black-400: #a3a3a3;  /* Placeholder text */
--black-500: #737373;  /* Secondary text */
--black-600: #525252;  /* Body text alternative */
--black-700: #404040;  /* Headings alternative */
--black-800: #262626;  /* Strong text */
--black-900: #171717;  /* Deep backgrounds */
```

#### **WHEN**
- ✅ Use `black/70` for body text opacity
- ✅ Use `black/50` for secondary text
- ✅ Use `black/8` for subtle borders

---

### **Warm Palette (Highlighted Sections)**

```css
--warm-100: #fcfbfa;   /* Very subtle */
--warm-200: #f9f7f6;   /* Soft card backgrounds */
--warm-300: #f5f2f1;   /* BASE - Section backgrounds */
--warm-500: #eae5e3;   /* Borders */
--warm-600: #d9d1ce;   /* Timeline base */
--warm-700: #c8bcb8;   /* Timeline nodes */
```

#### **WHEN**
- ✅ Use for Challenges section background
- ✅ Use for Methodology section background
- ✅ Use for alternating section pattern

#### **WHEN NOT**
- ❌ Don't use for hero sections (use pure black)
- ❌ Don't use for final CTA (use pure black)

---

### **Red Scale (Full Tints & Shades)**

The brand red is `--red-600`. The full 50–900 scale provides lighter tints for backgrounds/badges and darker shades for hover/active states.

```css
--red-50: #fef2f2;     /* Lightest - Subtle backgrounds, alert highlights */
--red-100: #fee2e2;    /* Very light - Notice backgrounds, hover states */
--red-200: #fecaca;    /* Light - Disabled states, soft accents */
--red-300: #fca5a7;    /* Medium light - Borders, dividers */
--red-400: #f87176;    /* Medium - Icons, secondary buttons */
--red-500: #dc3238;    /* Standard - Links, active states */
--red-600: #b01f24;    /* PRIMARY BRAND (= --brand-red) - CTAs, buttons ⭐ */
--red-700: #8f181d;    /* Hover (= --brand-red-hover) */
--red-800: #771419;    /* Active (= --brand-red-active) */
--red-900: #5f1014;    /* Darkest - Text on light, deep emphasis */
```

#### **WHEN**
- ✅ Use `--red-50` through `--red-200` for Badge `brand` theme backgrounds
- ✅ Use `--red-600` (`--brand-red`) for CTAs only
- ✅ Use `--red-700`/`--red-800` for hover/active states

#### **WHEN NOT**
- ❌ Don't use mid-range reds (300–500) for decorative UI — they're for specific badge/status use cases only

---

### **Accent Colors (Decorative Palette)**

Four accent families for badges, data visualization, and section variety. Each has a full 50–900 scale in `theme.css`.

#### **Purple** — Premium, Innovation, Insights
```css
--purple-50: #f7f6fe;   /* Lightest backgrounds */
--purple-500: #9488ec;  /* Standard interactive */
--purple-600: #806ce0;  /* BASE - Premium features, insights */
--purple-900: #483c80;  /* Darkest text/accents */
```

#### **Periwinkle** — Trust, Reliability, Soft Accents
```css
--periwinkle-50: #fafbfe;   /* Lightest backgrounds */
--periwinkle-500: #c3c6f9;  /* BASE - Trust indicators */
--periwinkle-600: #a7abf0;  /* Standard interactive */
--periwinkle-900: #5a5fa0;  /* Darkest text */
```

#### **Coral/Terracotta** — Warmth, Energy, Approachability
```css
--coral-50: #fffbf9;    /* Warmest white */
--coral-500: #f99b85;   /* Bright coral accent */
--coral-600: #ea7a5f;   /* BASE - Terracotta coral */
--coral-900: #a23f2d;   /* Burnt terracotta */
```

#### **Perano (Light Blue)** — Calm, Professional, Data
```css
--perano-50: #fcfdfe;    /* Barely visible backgrounds */
--perano-500: #dfeafa;   /* BASE - Data sections, calm backgrounds */
--perano-600: #c8dff5;   /* Borders, dividers */
--perano-900: #6b94c0;   /* Darkest text */
```

#### **WHEN**
- ✅ Use for Badge component themes (`purple`, `periwinkle`, `coral`, `info`)
- ✅ Use for data visualization differentiation
- ✅ Use for section variety in dashboard views
- ✅ Use full 50–900 scales from `theme.css` when needed

#### **WHEN NOT**
- ❌ Don't use accent colors for primary CTAs (use `--brand-red`)
- ❌ Don't use accent colors for main section backgrounds (use black/white/warm)
- ❌ Don't mix more than 2–3 accent families in a single view

---

### **Utility Colors (Semantic States)**

Three utility families for success/warning/error states. Each has a full 50–900 scale in `theme.css`. These are **distinct from the decorative accent palette** — use them only for semantic meaning.

#### **Green** — Success, Growth, Positive Outcomes
```css
--green-50: #ecfdf5;     /* Success backgrounds */
--green-500: #10b981;    /* BASE - Success messages */
--green-600: #059669;    /* Impact metrics */
--green-900: #064e3b;    /* Success text on light */
```

#### **Amber** — Warning, Attention, Caution
```css
--amber-50: #fffbeb;     /* Warning backgrounds */
--amber-500: #f59e0b;    /* BASE - Warning messages */
--amber-600: #d97706;    /* Warning buttons */
--amber-900: #78350f;    /* Warning text on light */
```

#### **Rose** — Error, Validation, Destructive (DISTINCT from Brand Red)
```css
--rose-50: #fff1f2;      /* Error backgrounds */
--rose-500: #f43f5e;     /* BASE - Error messages */
--rose-600: #e11d48;     /* Destructive actions, delete */
--rose-900: #881337;     /* Error text on light */
```

#### **WHEN**
- ✅ Use for Badge component themes (`success`, `warning`, `error`)
- ✅ Use for form validation states
- ✅ Use for toast/alert feedback messages
- ✅ Use for status indicators and metric callouts

#### **WHEN NOT**
- ❌ Don't use `--rose-*` as a substitute for `--brand-red` — they serve different purposes
- ❌ Don't use semantic colors decoratively (green for "nature", amber for "sunshine", etc.)
- ❌ Don't mix semantic colors with accent colors in the same component

---

### **Complete Color Reference**

For full 50–900 scales of all 10 color families (red, warm, purple, periwinkle, coral, perano, green, amber, rose, black), see:
- **Source of truth:** `/src/styles/theme.css`
- **Visual reference:** Dashboard → Foundations → Complete Color Palette (`AllColorsPaletteContent.tsx`)

---

## SPACING SYSTEM

### **Base-10 Scale**

#### **WHY**
Predictable 4px increments create rhythm, make design decisions faster, ensure visual harmony.

#### **WHAT**
```css
--space-1: 0.25rem;  /* 4px - Tight spacing */
--space-2: 0.5rem;   /* 8px - Compact */
--space-3: 0.75rem;  /* 12px - Small gaps */
--space-4: 1rem;     /* 16px - Default */
--space-6: 1.5rem;   /* 24px - Medium */
--space-8: 2rem;     /* 32px - Large */
--space-12: 3rem;    /* 48px - Section spacing */
--space-16: 4rem;    /* 64px - Large sections */
--space-20: 5rem;    /* 80px - Very large */
--space-24: 6rem;    /* 96px - Maximum */
```

#### **WHEN**
- ✅ Use `--space-12` (48px) for spacing between sections
- ✅ Use `--space-6` (24px) for spacing within sections
- ✅ Use `--space-4` (16px) for element spacing

#### **WHEN NOT**
- ❌ Don't use arbitrary values (stick to scale)
- ❌ Don't use Tailwind spacing classes that break scale

---

## BUTTON SYSTEM

### **WHY**
Buttons are primary interaction points. Need clear hierarchy, consistent sizing, accessible states.

### **WHAT**

#### **Variants:**
```tsx
variant="primary"   // Black - Main actions
variant="brand"     // Red (#b01f24) - CTAs ONLY
variant="secondary" // White + warm border - Supporting actions
variant="ghost"     // Transparent - Tertiary on dark backgrounds
```

#### **Sizes:**
```tsx
size="sm"  // 36px height, 14px font - Navbar, compact UIs
size="md"  // 42px height, 16px font - DEFAULT ⭐
size="lg"  // 48px height, 18px font - Big heroes only
size="xl"  // 56px height, 20px font - Rare, maximum impact
```

### **WHEN**
```tsx
// ✅ Report page hero - Use md (default)
<Button variant="brand">View Full Report</Button>

// ✅ Homepage hero - Use lg
<Button variant="brand" size="lg">Get Started</Button>

// ✅ Navbar CTA - Use sm
<Button variant="brand" size="sm">Sign Up</Button>

// ✅ Supporting action - Use secondary
<Button variant="secondary">Learn More</Button>
```

### **WHEN NOT**
```tsx
// ❌ Don't use brand variant for non-CTA actions
<Button variant="brand">Edit Profile</Button> // WRONG

// ❌ Don't use lg as default
<Button variant="primary" size="lg">Submit</Button> // WRONG (use md)

// ❌ Don't use red for everything
<Button variant="brand">Cancel</Button> // WRONG (use secondary)
```

### **SHIMMER ANIMATION**

#### **WHY**
Our signature brand identity - like Apple's animations or Stripe's polish.

#### **WHAT**
Always active on ALL buttons. 700ms duration, gradient sweep left-to-right.

#### **WHEN**
- ✅ **ALWAYS** - Shimmer is automatic on every button

#### **WHEN NOT**
- ❌ Never disable shimmer (it's core brand identity)

---

## LINK SYSTEM

### **WHY**
Three distinct link types for different contexts: buttons with actions, text+arrow CTAs, and inline paragraph links.

### **WHAT**

#### **1. Button Component**
```tsx
<Button variant="brand">Action Link</Button>
```
- For form submissions, navigation, primary actions
- Has shimmer animation (always active)

#### **2. CTALink Component**
```tsx
<CTALink href="#section">Explore Our Work</CTALink>
```
- For text + arrow combinations
- Unified hover: text AND arrow both get brand red
- Arrow moves right 4px on hover

#### **3. InlineLink Component**
```tsx
<InlineLink href="#details">learn more</InlineLink>
```
- For links within paragraphs
- Brand red underline
- Warm background on hover

### **WHEN**
```tsx
// ✅ Navigation to forms/pages with urgency
<Button variant="brand" showArrow>Unlock Full Report</Button>

// ✅ Exploratory navigation, "learn more" style
<CTALink href="#methodology">See How We Did It</CTALink>

// ✅ Inline paragraph interlinking
Read our <InlineLink href="#case-study">detailed case study</InlineLink> for more.
```

### **WHEN NOT**
```tsx
// ❌ Don't use Button for exploratory links
<Button variant="secondary">Learn More</Button> // WRONG - use CTALink

// ❌ Don't use CTALink for primary conversions
<CTALink href="/signup">Sign Up Now</CTALink> // WRONG - use Button

// ❌ Don't use InlineLink standalone
<InlineLink href="/about">About Us</InlineLink> // WRONG - use CTALink
```

---

## ANIMATION SYSTEM

### **Arrow Animation**

#### **WHY**
Creates urgency and directs attention to forms/conversion points. Differentiates from general navigation.

#### **WHAT**
```tsx
showArrow={true}  // Adds animated arrow to button
```

#### **WHEN**
- ✅ Use ONLY for buttons that redirect to forms or pages with urgency
- ✅ Examples: "Unlock Full Report", "Schedule Demo", "Get Started"

#### **WHEN NOT**
- ❌ Don't use for general navigation ("Learn More", "View Details")
- ❌ Don't use for secondary actions ("Cancel", "Back")

### **Shimmer Animation**

#### **WHY**
Core brand signature - always present, creates polish and premium feel.

#### **WHAT**
Always active on all buttons. 700ms sweep animation.

#### **WHEN**
- ✅ **ALWAYS** - Automatic on every button

---

## COMPONENT LIBRARY

### **Available Components**

#### **Foundations (Auto-import from theme.css)**
```tsx
// Typography - use CSS variables
font-size: var(--text-sm);    // Body text
font-size: var(--text-2xl);   // Section headings
font-size: var(--text-nav);   // Navigation (14px)

// Colors
color: var(--brand-red);       // CTAs only
background: var(--black);      // Hero sections
background: var(--warm-300);   // Highlighted sections
```

#### **Buttons**
```tsx
import { Button } from '@/app/components/Button';

<Button 
  variant="primary | secondary | ghost | brand"
  size="sm | md | lg | xl"
  loading={boolean}
  disabled={boolean}
  icon={<IconComponent />}
  iconPosition="left | right"
  showArrow={boolean}  // ONLY for conversion/urgency
>
  Button Text
</Button>
```

#### **Links**
```tsx
import { CTALink } from '@/app/components/CTALink';
import { InlineLink } from '@/app/components/InlineLink';

<CTALink href="#section">Explore Our Work</CTALink>
<InlineLink href="#details">learn more</InlineLink>
```

#### **Animated Arrow (Standalone)**
```tsx
import { AnimatedArrow } from '@/app/components/AnimatedArrow';

<AnimatedArrow 
  variant="brand | black | white"
  size="sm | md | lg"
/>
```

#### **Badges & Section Labels**
```tsx
import { Badge, SectionLabel } from '@/app/components/Badge';

// Badge (pill-shaped indicators) — 3 variants, 4 sizes, 11 themes
<Badge 
  variant="minimal | rounded | pill"
  size="xs | sm | md | lg"
  theme="neutral | warm | brand | coral | purple | periwinkle | info | success | warning | error | muted"
  mode="light | dark"
  bordered={boolean}
  shimmer={boolean}
  interactive={boolean}
  fontWeight={400 | 500 | 600}
>
  BADGE TEXT
</Badge>

// SectionLabel (text-only marker above headings)
<SectionLabel theme="brand" fontWeight={600}>KEY INSIGHTS</SectionLabel>
<h2>Market Analysis Results</h2>

// ChapterLabel (direct Badge usage — no wrapper)
<Badge variant="minimal" size="sm" theme="brand" fontWeight={600}
  style={{ marginBottom: '12px' }}>
  CHAPTER 1 - INDUSTRY ANALYSIS
</Badge>
<h2>Understanding the Market Landscape</h2>
```

#### **Form Labels**
```tsx
import { Label } from '@/app/components/Label';

// Semantic <label> for forms (NOT for section headers)
<Label htmlFor="email" required>Email Address</Label>
<input id="email" type="email" />

// Variants: default | secondary | required
// Props: htmlFor, variant, required, helperText, className
```

---

## LAYOUT SYSTEM

### **Container Width System**

#### **WHY**
Consistent content width constraints ensure optimal readability and visual rhythm. Based on Baymard Institute research: 50-75 characters per line is the optimal reading range.

#### **WHAT**
```css
--container-page: 75rem;       /* 1200px - Full page shell, hero backgrounds, navbar */
--container-content: 62.5rem;  /* 1000px - Standard sections, card grids, main content */
--container-narrow: 56.25rem;  /* 900px  - CTAs, testimonials, focused content */
--container-prose: 43.75rem;   /* 700px  - Paragraph text, body copy (~65-70 chars) */
--container-compact: 37.5rem;  /* 600px  - Tight descriptions, methodology blurbs */
```

#### **WHEN**
| Token | Use Case |
|-------|----------|
| `--container-page` | Outer page shell, full-width heroes, navigation |
| `--container-content` | Standard section content, card grids, main content |
| `--container-narrow` | Focused CTAs, testimonials, forms |
| `--container-prose` | Long-form paragraphs (optimal line length ~65-70 chars at 16px) |
| `--container-compact` | Short descriptions, methodology blurbs (~55-60 chars at 20px) |

#### **WHEN NOT**
- ❌ Don't use `--container-page` for body text (too wide, causes reader fatigue)
- ❌ Don't use `--container-compact` for card grids (too narrow for multi-column)
- ❌ Don't hardcode `max-w-[1200px]` — use `max-w-[var(--container-page)]` instead

#### **HOW**
```tsx
// Standard section layout
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-[var(--container-content)]">
    {/* Section content */}
  </div>
</section>

// Prose/paragraph content (optimal readability)
<div className="mx-auto max-w-[var(--container-prose)]">
  <p className="text-sm text-black/70 leading-relaxed">
    Long-form paragraph content...
  </p>
</div>
```

---

### **Responsive Padding System (Mobile-First)**

#### **WHY**
Progressive enhancement from mobile to desktop. Tighter padding on mobile maximizes content area; generous padding on desktop creates editorial white space.

#### **WHAT**
```css
/* Horizontal Padding */
--padding-mobile: 1rem;    /* 16px - Mobile (0-639px) — Edge-to-edge feel */
--padding-tablet: 1.5rem;  /* 24px - Tablet (640-1023px) — Breathing room */
--padding-desktop: 2rem;   /* 32px - Desktop (1024px+) — Generous margins */

/* Section Vertical Spacing */
--section-py-mobile: 3rem;   /* 48px - py-12 */
--section-py-tablet: 4rem;   /* 64px - sm:py-16 */
--section-py-desktop: 5rem;  /* 80px - md:py-20 */
```

#### **WHEN**
```tsx
// Standard responsive section
<section className="py-12 sm:py-16 md:py-20">
  <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-[var(--container-content)]">
    {/* Content */}
  </div>
</section>
```

#### **Mobile-First UX Laws**
- **Fitts's Law**: Touch targets min 44px, generous tap spacing on mobile
- **Miller's Law**: Reduce visible options on small screens (progressive disclosure)
- **Hick's Law**: Simpler choices on mobile = faster decisions
- **Proximity**: Tighter grouping on mobile to show relationships in limited space
- **Content stacking**: 1-column below 640px, 2-col at 768px, multi-col at 1024px+

---

### **Section Pattern**

#### **WHY**
Creates rhythm and visual interest through alternating backgrounds.

#### **WHAT**
```tsx
// Black sections (hero moments)
<section className="bg-black text-white py-24">
  {/* Hero, Final CTA */}
</section>

// White sections (standard content)
<section className="bg-white py-20">
  {/* Objectives, Impact, Testimonial */}
</section>

// Warm sections (highlighted content)
<section className="bg-warm-300 py-20">
  {/* Challenges, Methodology, Value Pillars */}
</section>
```

#### **WHEN**
- ✅ Hero: Black background
- ✅ Objectives: White background
- ✅ Challenges: Warm background (`--warm-300`)
- ✅ Methodology: Warm background
- ✅ Impact: White background
- ✅ Value Pillars: Warm background
- ✅ Testimonial: White background
- ✅ Resources: Black background
- ✅ Final CTA: Black background

---

## AI IMPLEMENTATION PROMPTS

### **FOR TEAM MEMBERS: Copy-Paste These Exact Prompts**

See `/AI_DESIGN_SYSTEM_PROMPT.md` for full copy-paste prompts covering:
- Building a New Page
- Adding a CTA Button
- Creating a Section
- Typography Sizing
- Color Usage
- Button vs CTALink Decision
- Complete Page Build

---

## 🎓 LEARNING RESOURCES

### **For AI Understanding:**

1. **Read First:**
   - `/DESIGN_SYSTEM_AI_CONTEXT.md` (this file)
   - `/src/styles/theme.css` (all tokens)

2. **Component References:**
   - `/src/app/components/Button.tsx`
   - `/src/app/components/CTALink.tsx`
   - `/src/app/components/InlineLink.tsx`
   - `/src/app/components/ButtonDocumentation.tsx`

3. **Section Examples:**
   - `/src/app/components/HeroSection.tsx`
   - `/src/app/components/ChallengesSection.tsx`
   - `/src/app/components/MethodologySection.tsx`

4. **Dashboard:**
   - `/src/app/components/DesignSystemDashboard.tsx` (visual reference)
   - `/src/app/components/FoundationsContent.tsx` (typography details)

---

## ✅ CHECKLIST FOR AI

Before generating ANY code, verify:

- [ ] Read `/DESIGN_SYSTEM_AI_CONTEXT.md`
- [ ] Using correct typography tokens (--text-sm, --text-2xl)
- [ ] Using correct font families (Serif for headings, Sans for body/UI)
- [ ] Using container width tokens (not hardcoded max-widths)
- [ ] Using --brand-red ONLY for CTAs
- [ ] Button size="md" as default (NOT lg)
- [ ] showArrow={true} ONLY for urgency/forms
- [ ] Shimmer animation automatic (don't disable)
- [ ] Following section pattern (black/white/warm)
- [ ] Using semantic component (Button vs CTALink vs InlineLink)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)
- [ ] Responsive padding (px-4 sm:px-6 md:px-8)

---

## 🚨 COMMON MISTAKES TO AVOID

### **❌ DON'T:**
1. Use `--brand-red` for anything except CTA buttons
2. Use `size="lg"` as default (use `size="md"`)
3. Add `showArrow={true}` to every button (only urgency)
4. Use `--text-3xl` for section headings (only hero h1)
5. Use hardcoded colors instead of tokens
6. Use arbitrary spacing (stick to scale)
7. Use Tailwind `text-2xl` classes (use CSS variables)
8. Disable shimmer animation (always active)
9. Use Sans for headings or Serif for body text
10. Hardcode container max-widths instead of using tokens

### **✅ DO:**
1. Use `variant="brand"` ONLY for conversion CTAs
2. Use `size="md"` as default (42px height)
3. Use `--text-sm` (16px) for ALL body text
4. Use `--text-2xl` (39px) for ALL section headings
5. Use color tokens from theme.css
6. Use spacing scale (--space-4, --space-6, etc.)
7. Use CSS variables for font sizes
8. Let shimmer animation run (core brand identity)
9. Use `--font-serif` for headings, `--font-sans` for body/UI
10. Use `--container-*` tokens for max-widths

---

## 📊 QUALITY METRICS

AI-generated code should score:

- ✅ Token Usage: 100% (no hardcoded values)
- ✅ Component Reuse: 90%+ (import from library)
- ✅ Color Compliance: 100% (red for CTAs only)
- ✅ Typography Compliance: 100% (correct scale + font pairing)
- ✅ Accessibility: WCAG AA minimum
- ✅ Performance: 60fps animations
- ✅ Documentation: 4W+H framework applied

---

## 🔗 QUICK LINKS

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **Button Component:** `/src/app/components/Button.tsx`
- **Link Components:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`

---

**Last Updated:** 2026-02-28  
**Maintained By:** Design System Team  
**Version:** 3.2 - Complete 4W+H Integration + Font Pairing + Container Width + Full Color Palette Documentation