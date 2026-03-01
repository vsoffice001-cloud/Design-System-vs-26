# DESIGN SYSTEM - AI CONTEXT FILE
**Version:** 3.3.2  
**Date:** 2026-03-01  
**Purpose:** Complete 4W+H documentation for AI tools to automatically apply this design system

---

## CRITICAL: READ THIS FIRST

**This file is the SINGLE SOURCE OF TRUTH for AI assistants building pages with our design system.**

When any team member asks you to build a page, component, or feature:
1. **ALWAYS read this file first**
2. **Apply ALL rules automatically**
3. **Reference component documentation**
4. **Use exact tokens and patterns**

---

## TABLE OF CONTENTS

1. [Design System Overview](#design-system-overview)
2. [Typography System](#typography-system)
3. [Color System — The 92-5-3 Rule](#color-system)
4. [Spacing System](#spacing-system)
5. [Button System](#button-system)
6. [Link System](#link-system)
7. [Layout System](#layout-system)
8. [Animation System](#animation-system)
9. [Component Library](#component-library)
10. [Token Cross-Reference & Usage Rules](#token-cross-reference)
11. [Page Assembly Guide — Reports / Product Pages](#page-assembly-guide)
12. [AI Implementation Prompts](#ai-implementation-prompts)

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
- **Serif** (`var(--font-serif)`) → h1-h3 headings, display text, hero titles, testimonial quotes, large editorial numbers
- **Sans** (`var(--font-sans)`) → Body text, buttons, badges, labels, navigation, forms, tooltips, card descriptions
- **Mono** (`var(--font-mono)`) → Code blocks, data tables, technical/metric values

#### **WHEN NOT**
- NEVER use Serif for body text, buttons, labels, navigation, or any UI chrome
- NEVER use Sans for hero headings or section titles
- NEVER mix more than 2 custom typefaces

---

### **Major Third Scale (1.25 Ratio)**

```css
--text-xs: 0.8rem;      /* 12.8px - Labels, metadata, categories */
--text-sm: 1rem;        /* 16px - Body text, descriptions (MOST USED) */
--text-base: 1.25rem;   /* 20px - Large body, card titles */
--text-lg: 1.563rem;    /* 25px - Card titles (2-3 cards) */
--text-xl: 1.953rem;    /* 31.25px - Subsection headings (h3) */
--text-2xl: 2.441rem;   /* 39px - Section headings (h2) */
--text-3xl: 3.052rem;   /* 48.8px - Hero h1 (HERO ONLY) */
--text-4xl: 3.815rem;   /* 61px - Extra large (challenge numbers) */
--text-5xl: 4.768rem;   /* 76.3px - Massive (rarely used) */
```

### **Custom Font Sizes (Outside Scale)**
```css
--text-2xs: 0.75rem;     /* 12px - Navbar, micro labels */
--text-compact: 0.875rem; /* 14px - Compact body text */
--text-nav: 0.875rem;    /* 14px - Navigation, TOC items */
```

---

## COLOR SYSTEM — THE 92-5-3 RULE

### **WHY**
The 92-5-3 hierarchy ensures that 92% of the page surface uses neutral foundation colors, 5% uses brand red for conversion CTAs, and 3% uses accent colors for depth and personality. Without this constraint, pages become visually noisy, CTAs lose impact, and brand identity dilutes.

---

### **Foundation Tier (92% of Page Surface)**

The vast majority of every page is black, white, and warm off-white.

```css
--black: #000000;        /* Hero backgrounds, primary text */
--white: #ffffff;        /* Section backgrounds, card backgrounds */
--warm-300: #f5f2f1;     /* BASE - Alternating section backgrounds */
--warm-500: #eae5e3;     /* Borders, dividers */
--warm-600: #d9d1ce;     /* Timeline base lines */
--warm-700: #c8bcb8;     /* Timeline nodes, muted borders */
```

**Usage Rules:**
- ✅ ALL section backgrounds: black, white, or warm-300 (alternating)
- ✅ ALL body text: black on light backgrounds, white on dark backgrounds
- ✅ ALL utility/navigation elements (ScrollToTop, breadcrumbs, pagination): black/white
- ✅ Borders and dividers: warm-500 or warm-600
- ❌ Never use gray-scale colors outside the warm palette (no #ccc, #999, etc.)

### **Semantic Text Colors**
```css
--text-primary: #000000;              /* Primary text on light backgrounds */
--text-secondary: rgba(0, 0, 0, 0.60); /* Secondary/description text */
--label-on-black: rgba(255, 255, 255, 0.40); /* Labels on dark backgrounds */
--label-on-white: rgba(0, 0, 0, 0.40);       /* Labels on light backgrounds */
```

---

### **Brand Red Tier (5% of Page Surface)**

Ken Bold Red is reserved EXCLUSIVELY for conversion CTAs.

```css
--brand-red: #b01f24;        /* Primary - CTA buttons, progress bars */
--brand-red-hover: #8f181d;  /* Hover state */
--brand-red-active: #771419; /* Active/pressed state */
/* Gradient: #b01f24 → #c62d31 (brand button background) */
```

**Usage Rules:**
- ✅ `Button variant="brand"` — conversion CTAs ("Download Report", "Get Started")
- ✅ `ScrollProgress` bar color — engagement signal
- ✅ Brand button shadow: `rgba(176, 31, 36, 0.15)`
- ❌ Never use for borders, backgrounds, decorative elements
- ❌ Never use for icons (icons use purple or gray)
- ❌ Never use more than 1-2 brand buttons per viewport

---

### **Accent Tier (3% of Page Surface)**

Accent colors add depth through low-opacity treatments only.

```css
/* Primary accent — content/feature icons */
--purple-600: #806ce0;     /* Periwinkle-400: icon stroke color */

/* Supporting accents — badges, data viz, subtle highlights */
--periwinkle-500: #c3c6f9; /* Trust indicators, badge themes */
--perano-500: #dfeafa;     /* Data section highlights */
--coral-500: #ea7a5f;      /* Secondary button hover shimmer */
```

Full 50-900 scales for Purple, Periwinkle, Coral, Perano, Green, Amber, Rose are defined in `theme.css`. Use for Badge themes and data visualization ONLY.

---

### **Element-Color Classification Rule**

Before assigning a color to ANY element, classify it first:

| Element Type | Color Tier | Color | Examples |
|---|---|---|---|
| **Structural / Utility** | 92% Foundation | black/white | ScrollToTop, pagination, breadcrumbs, scroll indicators, separators |
| **Conversion CTA** | 5% Brand Red | #b01f24 | "Download Report", "Get Started", "Subscribe" buttons |
| **Content/Feature Icons** | 3% Accent | #806ce0 (stroke) | Sparkles, TrendingUp, Target, BarChart3, BookOpen, Lightbulb |
| **Utility/Navigation Icons** | 92% Foundation | #737373 (gray) | ChevronDown, X, Search, Filter, Menu, Settings |
| **Decorative Accents** | 3% Accent | RGBA low-opacity | Shadow tints, icon container fills, subtle highlights |

---

### **Purple (#806ce0) Usage Boundaries**

Purple is the highest-risk accent color. These boundaries are non-negotiable:

✅ **ALLOWED:**
- Icon stroke color: `color={iconColors.content}` or `color="#806ce0"`
- Icon container backgrounds at 10% opacity: `rgba(128, 108, 224, 0.1)`
- Shadow tints at 6% opacity: `rgba(128, 108, 224, 0.06)`
- Badge component internal themes (inside Badge.tsx only)

❌ **FORBIDDEN:**
- Solid button/element backgrounds
- Full-opacity text color (except Badge internals)
- Full-opacity borders
- Section backgrounds
- Any usage above 12% opacity outside of Badge.tsx

**Hardcoded Hex Exception:** The ONLY intentional hardcoded hex values in `.tsx` files are inside `Badge.tsx`, which is a design-system atom defining its own internal theme color configs.

---

### **⚠️ Gradient Stop Workaround (Critical Technical Constraint)**

Tailwind CSS gradient stop classes (`from-[...]`, `via-[...]`, `to-[...]`) are **broken** in this environment. All gradients MUST use inline styles with RGBA values.

```tsx
// ❌ BROKEN — Tailwind gradient classes don't work
<div className="bg-gradient-to-br from-[#806ce0]/10 to-transparent" />

// ✅ CORRECT — Inline style with RGBA
<div style={{ background: 'linear-gradient(135deg, rgba(128, 108, 224, 0.12) 0%, rgba(223, 234, 250, 0.08) 100%)' }} />

// ✅ CORRECT — Solid warm gradient for editorial sections
<div style={{ background: 'linear-gradient(180deg, #faf9f8 0%, #f5f2f1 40%, #faf9f8 100%)' }} />
```

**Common gradient patterns:**
```tsx
// Purple accent glow (for icon containers, card accents)
background: 'rgba(128, 108, 224, 0.1)'

// Purple shadow
boxShadow: '0 4px 16px rgba(128, 108, 224, 0.06)'

// Warm editorial gradient (section background)
background: 'linear-gradient(180deg, #faf9f8 0%, #f5f2f1 40%, #faf9f8 100%)'

// Periwinkle-to-transparent card accent
background: 'linear-gradient(135deg, rgba(243, 244, 255, 0.5), rgba(250, 250, 250, 0.3))'
borderColor: 'rgba(235, 237, 251, 0.5)'

// Dark section mesh background
background: 'linear-gradient(135deg, #0e0b1c 0%, #07080f 50%, #090b12 100%)'
```

---

### **Secondary Button — Warm Tone (NOT Periwinkle)**

The secondary button uses a warm-toned border and coral shimmer accent. This is an intentional design decision — the secondary button is NOT blue/purple.

```tsx
// Secondary button styling (from Button.tsx)
border: 'border-black/20'  // Light backgrounds
border: 'border-white/20'  // Dark backgrounds
hover shimmer: '#ea7a5f'   // Coral accent (NOT periwinkle)
```

**Consistent instances (do NOT change these):**
1. `Button.tsx` — core secondary variant definition
2. `NewHeader.tsx` — hand-coded secondary button
3. `ChapterMethodology.tsx` — hand-coded secondary button
4. `ChapterExtendedTOC.tsx` — hand-coded secondary button

---

### **🎨 Section-by-Section Color Recipe (Reports / Product Pages)**

When building a report landing page or product page, follow this exact color sequence:

```
┌─────────────────────────────────────────────────────────────┐
│ SCROLL PROGRESS BAR          bg: var(--brand-red)  z-9999  │
├─────────────────────────────────────────────────────────────┤
│ NAVBAR                       bg: black  text: white        │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION                 bg: BLACK                     │
│   h1: white (--text-3xl)                                   │
│   description: rgba(255,255,255,0.7)                       │
│   CTA: Button variant="brand" (red)                        │
│   Secondary: Button variant="secondary" (warm border)      │
│   Badges: mode="dark" theme="neutral"                      │
│   Stats numbers: white, serif light                        │
│   Icons in stats: #806ce0 (periwinkle)                     │
├─────────────────────────────────────────────────────────────┤
│ SECTION 2                    bg: WHITE                     │
│   h2: black (--text-2xl)                                   │
│   body: var(--text-primary) or var(--text-secondary)       │
│   Icons: #806ce0 (content) or #737373 (utility)            │
│   Cards: bg-white, border warm-500                         │
├─────────────────────────────────────────────────────────────┤
│ SECTION 3                    bg: WARM (#f5f2f1)            │
│   h2: black (--text-2xl)                                   │
│   body: var(--text-primary) or var(--text-secondary)       │
│   Cards: bg-white (pop against warm bg)                    │
│   Icon containers: rgba(128, 108, 224, 0.1) + shadow 0.06 │
├─────────────────────────────────────────────────────────────┤
│ SECTION 4                    bg: WHITE                     │
│   (same as Section 2 — continue alternating)               │
├─────────────────────────────────────────────────────────────┤
│ SECTION 5                    bg: WARM (#f5f2f1)            │
│   (same as Section 3 — continue alternating)               │
├─────────────────────────────────────────────────────────────┤
│ ...continue white/warm alternation...                      │
├─────────────────────────────────────────────────────────────┤
│ RESOURCES / FEATURED         bg: BLACK (gradient mesh)     │
│   h2: white                                                │
│   Cards: dark mode with frosted borders                    │
│   Category badges: mode="dark"                             │
├─────────────────────────────────────────────────────────────┤
│ FINAL CTA SECTION            bg: WHITE or WARM             │
│   h2: black (--text-2xl)                                   │
│   CTA: Button variant="brand" (red, max 1-2)               │
│   Secondary: Button variant="secondary" (warm border)      │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                       bg: BLACK  text: white        │
└─────────────────────────────────────────────────────────────┘
```

**Color Budget Per Section:**

| Element | Color | Opacity | Tier |
|---|---|---|---|
| Section background | black / white / warm-300 | 100% | 92% |
| Heading text | black or white | 100% | 92% |
| Body text | var(--text-primary) | 100% | 92% |
| Description text | var(--text-secondary) | 60% | 92% |
| Label text | --label-on-black or --label-on-white | 40% | 92% |
| Card backgrounds | white or warm-300 | 100% | 92% |
| Card borders | warm-500 (#eae5e3) | 100% | 92% |
| Brand CTA button | #b01f24 | 100% | 5% |
| Brand button shadow | rgba(176, 31, 36, 0.15) | 15% | 5% |
| Content icons | #806ce0 | 100% stroke | 3% |
| Icon container bg | rgba(128, 108, 224, 0.1) | 10% | 3% |
| Icon shadow | rgba(128, 108, 224, 0.06) | 6% | 3% |
| Badge accent themes | varies per theme | varies | 3% |

---

### **Background Compositions**
```css
--bg-composition-warm-editorial: linear-gradient(180deg, #faf9f8 0%, #f5f2f1 40%, #faf9f8 100%);
```

---

## SPACING SYSTEM

### **Section Composition Tokens**
```css
--section-py-standard: 3rem;           /* 48px mobile, 64px@640px, 80px@768px */
--section-header-mb: 3rem;             /* Gap after section header block */
--pair-label-heading: 0.75rem;         /* Gap between label and heading */
--pair-heading-description: 1rem;      /* Gap between heading and description */
--text-measure: 43.75rem;             /* 700px max width for text blocks */
```

---

## BUTTON SYSTEM

### **Variants:**
```tsx
variant="primary"   // Black - Main actions
variant="brand"     // Red (#b01f24) - CTAs ONLY
variant="secondary" // White + warm border + coral shimmer - Supporting actions
variant="ghost"     // Transparent - Tertiary on dark backgrounds
```

### **Sizes:**
```tsx
size="sm"  // 36px - Navbar, compact UIs
size="md"  // 42px - DEFAULT
size="lg"  // 48px - Big heroes only
size="xl"  // 56px - Rare, maximum impact
```

### **Rules:**
- Use `brand` variant ONLY for conversion CTAs
- Use `md` as default size (NOT lg)
- `showArrow={true}` ONLY for urgency/forms
- Shimmer animation is ALWAYS active (never disable)
- Secondary button uses warm border + coral shimmer (#ea7a5f), NOT periwinkle

---

## LINK SYSTEM

```tsx
// 1. Button - Primary actions, form submissions
<Button variant="brand">Action Link</Button>

// 2. CTALink - Text + arrow, exploratory navigation
<CTALink href="#section">Explore Our Work</CTALink>

// 3. InlineLink - Within paragraphs
<InlineLink href="#details">learn more</InlineLink>
```

---

## LAYOUT SYSTEM

### **Container Width System**

```css
--container-page: 75rem;       /* 1200px - Full page shell, hero backgrounds, navbar */
--container-content: 62.5rem;  /* 1000px - Standard sections, card grids (DEFAULT) */
--container-narrow: 56.25rem;  /* 900px  - CTAs, testimonials, focused content */
--container-prose: 43.75rem;   /* 700px  - Paragraph text (~65-70 chars at 16px) */
--container-compact: 37.5rem;  /* 600px  - Tight descriptions, methodology blurbs */
```

### **Container Component (Preferred Method)**

The `Container` component wraps the max-width + responsive padding pattern into a reusable molecule:

```tsx
import { Container } from '@/app/components/Container';

// Default (1000px content width)
<section className="bg-white" style={{ paddingTop: 'var(--section-py-standard)', paddingBottom: 'var(--section-py-standard)' }}>
  <Container>
    <h2>Section Heading</h2>
    <p>Content here...</p>
  </Container>
</section>

// Narrow for focused CTAs (900px)
<Container maxWidth="narrow">
  <CTABlock />
</Container>

// Prose for long-form text (700px)
<Container maxWidth="prose">
  <p>Long-form content with optimal line length...</p>
</Container>
```

**Props:** `maxWidth` ('page' | 'content' | 'narrow' | 'prose' | 'compact'), `className`

**WHEN:** Use as the outermost content wrapper in every section. Replaces manual `mx-auto px-4 sm:px-6 md:px-8 max-w-[...]` patterns.

**WHEN NOT:** Don't use for full-bleed elements. Don't nest Containers.

### **Responsive Padding System**
```css
--padding-mobile: 1rem;    /* 16px - Mobile (0-639px) */
--padding-tablet: 1.5rem;  /* 24px - Tablet (640-1023px) */
--padding-desktop: 2rem;   /* 32px - Desktop (1024px+) */
```

### **Section Pattern**
```
Hero           -> BLACK
ClientContext  -> WHITE
Challenges     -> WARM (#f5f2f1)
Objectives     -> WHITE
Methodology    -> WARM
Impact         -> WHITE
ValuePillars   -> WHITE
Testimonial    -> WHITE
Resources      -> BLACK (gradient mesh)
FinalCTA       -> WHITE
```

---

## ANIMATION SYSTEM

- **Shimmer:** Always active on all buttons. 700ms sweep. Core brand identity.
- **Arrow:** `showArrow={true}` ONLY for urgency/forms. Arrow slides right 4px on hover.
- **Badge Shimmer:** 700ms sweep on hover. Parent hover triggers (methodology cards, objective cards).

---

## COMPONENT LIBRARY

### **Buttons**
```tsx
import { Button } from '@/app/components/Button';

<Button variant="primary | secondary | ghost | brand" size="sm | md | lg | xl"
  loading={boolean} disabled={boolean} icon={<Icon />} showArrow={boolean}>
  Button Text
</Button>
```

### **Links**
```tsx
import { CTALink } from '@/app/components/CTALink';
import { InlineLink } from '@/app/components/InlineLink';

<CTALink href="#section">Explore Our Work</CTALink>
<InlineLink href="#details">learn more</InlineLink>
```

### **Animated Arrow**
```tsx
import { AnimatedArrow } from '@/app/components/AnimatedArrow';
<AnimatedArrow size={16} color="white" />
```

### **Badges & Section Labels**
```tsx
import { Badge, SectionLabel } from '@/app/components/Badge';

<Badge variant="minimal | rounded | pill" size="xs | sm | md | lg"
  theme="neutral | warm | brand | coral | purple | periwinkle | info | success | warning | error | muted"
  mode="light | dark" bordered shimmer interactive>
  BADGE TEXT
</Badge>

<SectionLabel theme="brand" fontWeight={600}>KEY INSIGHTS</SectionLabel>
```

### **Form Labels**
```tsx
import { Label } from '@/app/components/Label';
<Label htmlFor="email" required>Email Address</Label>
```

### **Icon Color System**
```tsx
import { iconColors } from '@/app/components/iconColors';

// Content/feature icons — ALWAYS periwinkle
<BarChart3 color={iconColors.content} size={20} />  // #806ce0
<Target color={iconColors.content} size={24} />

// Utility/navigation icons — ALWAYS gray
<ChevronDown color={iconColors.utility} size={20} /> // #737373
<X color={iconColors.utility} size={20} />

// Icon container with accent background
<div className="rounded-[10px] p-3" style={{
  background: 'rgba(128, 108, 224, 0.1)',
  boxShadow: '0 4px 16px rgba(128, 108, 224, 0.06)'
}}>
  <Sparkles color={iconColors.content} size={24} />
</div>
```

### **Layout Components**
```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Card } from '@/app/components/Card';
import { Container } from '@/app/components/Container';

// Full section
<SectionWrapper background="warm" spacing="lg" id="highlights">
  <SectionHeading level={2} eyebrow="KEY FINDINGS">Report Highlights</SectionHeading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card variant="white" padding="md" shadow="sm" hover>...</Card>
  </div>
</SectionWrapper>
```

### **Scroll Components**
```tsx
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { ScrollProgress } from '@/app/components/ScrollProgress';

// Place once at page level
<ScrollProgress />  {/* 3px brand-red bar at top */}
<main>...</main>
<ScrollToTop />     {/* Floating button, appears after 400px */}
```

### **Container (Layout Wrapper)**
```tsx
import { Container } from '@/app/components/Container';

<Container maxWidth="content">         {/* 1000px - DEFAULT */}
  {/* Section content */}
</Container>

<Container maxWidth="prose">           {/* 700px - Long-form text */}
  <p>Paragraph content...</p>
</Container>
```
**Props:** `maxWidth` ('page' | 'content' | 'narrow' | 'prose' | 'compact'), `className`, `children`

### **ResourceCard (Content Card)**
```tsx
import { ResourceCard } from '@/app/components/ResourceCard';

<ResourceCard
  image="https://..."
  category="TECHNOLOGY"
  date="Jan 15, 2024"
  title="Article Title"
  description="Brief description..."
  variant="standard | full-featured | minimal | category-featured | clean | featured-focus | latest"
  cardStyle="default | bordered"
  mode="light | dark"
  type="article | report | whitepaper | video | podcast"
  isFeatured={boolean}
/>
```
**7 layout variants** for Masonry visual variety. Use in ResourcesSection or any blog/article grid.

### **SubtleVariantSwitcher (Designer Tool)**
```tsx
import { SubtleVariantSwitcher } from '@/app/components/SubtleVariantSwitcher';

<SubtleVariantSwitcher
  sectionName="Resources"
  currentVariant={cardStyle}
  variants={[{ id: 'default', label: 'Default', description: '...' }]}
  onVariantChange={(id) => setCardStyle(id)}
  position="top-right | top-left | bottom-right | bottom-left"
  theme="light | dark"
/>
```
**Designer/developer tool only** — not for end users. Uses lucide-react `Settings` icon.

### **Custom Hooks**
```tsx
import { useShimmer } from '@/app/hooks';         // Shimmer CSS (CTALink, InlineLink)
import { useResponsiveGutter } from '@/app/hooks'; // 24px mobile / 32px desktop
import { useScrollAnimation } from '@/app/hooks';  // IntersectionObserver wrapper
import { useScrollDirection } from '@/app/hooks';  // Detect scroll up/down
import { useActiveSection } from '@/app/hooks';    // Track visible section
import { useReadingProgress } from '@/app/hooks';  // Page scroll percentage
import { useHeroVisibility } from '@/app/hooks';   // Hero in viewport (navbar)
import { useCounter } from '@/app/hooks';          // Animated number counting
import { useMagneticEffect } from '@/app/hooks';   // Mouse-follow magnetic pull
import { useSectionProgress } from '@/app/hooks';  // Section scroll progress
```

**useResponsiveGutter** — Returns pixel-based gutter value for Masonry grids:
- Mobile (< 640px): `24` pixels
- Desktop (≥ 640px): `32` pixels
- Use when a library requires pixel values (not CSS classes)
- DON'T use when Tailwind `gap-*` classes work

---

## 🗂️ TOKEN CROSS-REFERENCE & USAGE RULES

Token **values** live in source files. This section tells you **where to find them** and adds **usage decision guides** that don't exist anywhere else in the repo.

### **Source File Map**

| Token Category | Source File | What It Contains |
|---|---|---|
| Colors, shadows, radius, spacing, opacity, z-index, easing, duration | `src/design-system/tokens.ts` | All raw values as TS constants |
| CSS custom properties (colors, typography, containers) | `src/styles/theme.css` | CSS variables consumed by components |
| Card variants, padding, shadow, hover | `src/app/components/Card.tsx` | JSDoc + `CardProps` interface |
| Badge 11 themes, 3 variants, 4 sizes, convenience wrappers | `src/app/components/Badge.tsx` | Full THEME_COLORS map + use-case guide in header |
| SectionWrapper backgrounds, spacing tiers, maxWidth | `src/app/components/SectionWrapper.tsx` | JSDoc + `SectionWrapperProps` interface |
| SectionHeading levels, eyebrow, alignment | `src/app/components/SectionHeading.tsx` | JSDoc + `SectionHeadingProps` interface |
| Icon color constants | `src/app/components/iconColors.ts` | `content: '#806ce0'`, `utility: '#737373'` |
| Showcase / token visualization | `src/app/components/All*Content.tsx` | 6 showcase components (Colors, Typography, Spacing, BorderRadius, Elevation, LayoutGrid) |

**Rule:** Never duplicate token values in this file. Read the source. This section only adds decision logic.

---

### **🎯 Shadow / Elevation Usage Guide**

> **Values:** See `tokens.ts` → `shadows` object for exact CSS.  
> **Card integration:** `Card` component exposes `shadow` prop ('none' | 'sm' | 'md' | 'lg').

| Level | When to Use | Example Elements |
|---|---|---|
| `none` | Flat elements, no depth needed | Cards inside already-elevated containers, minimal list items |
| `sm` | Resting state, gentle separation | Default cards at rest, static content blocks, bordered elements |
| `md` | Raised state, focused content | **DEFAULT for Card** — standard content cards, feature cards |
| `lg` | High emphasis, hero-level content | Cards on hover (via `Card hover` prop), modals, dropdowns, popovers |
| `brandButton` | Brand CTA buttons ONLY | `Button variant="brand"` — auto-applied by Button.tsx, never manual |
| `accent.purple` | Icon containers with periwinkle accent | `boxShadow: '0 8px 24px rgba(128, 108, 224, 0.06)'` — icon holder glow |
| `accent.warm` | Warm-toned subtle depth | `boxShadow: '0 4px 12px rgba(217, 209, 206, 0.08)'` — editorial warmth |

**Rules:**
- ✅ Card's `shadow` prop handles sm/md/lg automatically — prefer it over manual boxShadow
- ✅ Card's `hover` prop auto-upgrades shadow to lg on hover — don't add manual hover shadows
- ✅ Use `accent.purple` shadow ONLY on icon containers that also have `rgba(128, 108, 224, 0.1)` background
- ❌ Never use `brandButton` shadow manually — it's baked into `Button.tsx`
- ❌ Never stack multiple shadow types on the same element

---

### **📐 Border Radius Usage Guide**

> **Values:** See `tokens.ts` → `borderRadius` object.  
> **Rule:** Never mix radius sizes within the same component.

| Tier | Value | When to Use | Applied By |
|---|---|---|---|
| `image` | `2.5px` | Photos, thumbnails, visual media, hero images | Manual `rounded-[2.5px]` or inline style |
| `small` | `5px` | Buttons, small interactive elements, badges (`rounded` variant), input fields | `Button.tsx` (auto), `Badge variant="rounded"` (auto) |
| `large` | `10px` | Cards, containers, modals, icon containers, dropdown panels | `Card.tsx` (auto `rounded-[10px]`), manual for custom containers |
| `pill` | `9999px` | Pill badges, toggle switches, fully-rounded elements | `Badge variant="pill"` (auto) |

**Rules:**
- ✅ Use `Card` component for content containers — it auto-applies `rounded-[10px]`
- ✅ Use `Badge variant="rounded"` for 5px, `Badge variant="pill"` for full-round
- ✅ `Button.tsx` handles its own radius — never override it
- ❌ Never use `rounded-lg`, `rounded-xl`, or other Tailwind radius classes — use exact pixel values
- ❌ Never put `rounded-[10px]` on an image (use `rounded-[2.5px]`)
- ❌ Never put `rounded-[2.5px]` on a card (use `rounded-[10px]` or `Card` component)

---

### **🏷️ Badge Theme Selection Guide (Report / Product Pages)**

> **Full theme color configs:** See `Badge.tsx` → `THEME_COLORS` object.  
> **Convenience wrappers:** See `Badge.tsx` → `SectionLabel`, `StepPill`, `CategoryBadge`, `StatusBadge`, etc.

#### When to Use Each Theme:

| Theme | Use For | Section Context | Example |
|---|---|---|---|
| `neutral` | Default — no semantic meaning | Everywhere (safe default) | `<Badge theme="neutral">OVERVIEW</Badge>` |
| `brand` | Report/product page section labels | Section eyebrows on report pages | `<SectionLabel theme="brand">KEY FINDINGS</SectionLabel>` |
| `warm` | Step numbers, methodology sequences | Methodology, process sections | `<StepPill stepNumber={1} />` |
| `purple` | Innovation, insights, premium content | Feature highlights, premium badges | `<Badge theme="purple" bordered>AI-POWERED</Badge>` |
| `periwinkle` | Trust, reliability, calm indicators | Trust signals, certifications | `<Badge theme="periwinkle" bordered>VERIFIED</Badge>` |
| `coral` | Warmth, energy, engagement | Engagement metrics, warm CTAs | `<Badge theme="coral" bordered>TRENDING</Badge>` |
| `info` | Informational, data-related | Data sections, statistics context | `<Badge theme="info" bordered>DATA POINT</Badge>` |
| `success` | Positive status, completed states | Status indicators, results | `<StatusBadge status="success">COMPLETED</StatusBadge>` |
| `warning` | Caution, attention needed | Alerts, important notes | `<StatusBadge status="warning">REVIEW</StatusBadge>` |
| `error` | Negative status, critical issues | Error states, critical alerts | `<StatusBadge status="error">FAILED</StatusBadge>` |
| `muted` | De-emphasized, deprecated, optional | Archived content, legacy items | `<MutedBadge>DEPRECATED</MutedBadge>` |

#### Report Page Section → Badge Theme Mapping:

| Page Section | SectionLabel Theme | Card Badges | Why |
|---|---|---|---|
| Hero | `neutral` mode="dark" | `neutral` mode="dark" | Hero uses neutral to keep focus on h1 + CTA |
| Content sections | `brand` | `neutral` or `purple` | Brand red label = "this is our report content" |
| Methodology | `brand` or `warm` | `warm` (StepPill) | Warm for sequential warmth, brand for authority |
| Metrics / Impact | `brand` | `info` or `success` | Data context = info; positive results = success |
| Testimonial | `neutral` | — | Minimal chrome — let the quote speak |
| Resources (dark) | `neutral` mode="dark" | `neutral` mode="dark" | Dark bg, keep badges understated |
| Final CTA | `brand` | — | Match report identity in closing |

#### `mode` Decision:

| Section Background | Badge `mode` |
|---|---|
| Black / dark gradient | `mode="dark"` |
| White / warm (#f5f2f1) | `mode="light"` (default, can omit) |

---

### **📦 Card Variant → Background Pairing**

> **Full props:** See `Card.tsx` → `CardProps` interface.

| Section Background | Card `variant` | Why |
|---|---|---|
| `warm` (#f5f2f1) | `variant="white"` | White cards pop against warm — visual separation |
| `white` | `variant="warm"` or `variant="outlined"` | Warm/outlined gives subtle depth without sameness |
| `black` | Don't use `Card` — hand-code dark cards | Card.tsx has no dark variant; use custom frosted-glass styles |

**Default props for most cards:** `padding="md"` `shadow="sm"` (or `shadow="md"` for emphasis) `hover` for interactive cards.

---

## 📚 PAGE ASSEMBLY GUIDE — REPORTS / PRODUCT PAGES

This section tells you exactly **which components, elements, props, typography tokens, hooks, and grid patterns** to use when building a report landing page or product page. Combine this with the [Color Recipe](#section-by-section-color-recipe) above for the full picture.

### **Canonical Reference:** Healthcare AI Market Analysis Landing Page

---

### **Page-Level Scaffold**

Every report/product page follows this outer structure:

```tsx
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { Navbar } from '@/app/components/Navbar';

export default function ReportPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Section components in order */}
        <HeroSection />
        <ContextSection />
        <HighlightsSection />
        <MethodologySection />
        <ImpactSection />
        <TestimonialSection />
        <ResourcesSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
```

**Page-level hooks (wire in the layout component or individual sections):**
- `useScrollDirection()` — for navbar compact/expanded state
- `useActiveSection()` — for TOC highlighting (if TOC sidebar is present)
- `useHeroVisibility()` — for navbar style changes when hero scrolls out

---

### **1. HERO SECTION (bg: BLACK)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Badge } from '@/app/components/Badge';
import { Button } from '@/app/components/Button';
import { iconColors } from '@/app/components/iconColors';
import { TrendingUp, BarChart3, Globe } from 'lucide-react';

<SectionWrapper background="black" spacing="xl" id="hero">
  {/* Eyebrow badge */}
  <Badge variant="pill" size="sm" theme="neutral" mode="dark" bordered>
    MARKET INTELLIGENCE 2024
  </Badge>

  {/* Headline — ONLY place to use level={1} */}
  <SectionHeading level={1} align="center">
    Global AI in Healthcare Market Analysis
  </SectionHeading>

  {/* Description — sans-serif, white at 70% opacity */}
  <p className="font-sans max-w-[var(--text-measure)] mx-auto text-center"
     style={{ fontSize: 'var(--text-sm)', color: 'rgba(255, 255, 255, 0.7)' }}>
    Comprehensive market analysis covering diagnostics, drug discovery...
  </p>

  {/* CTA pair — max 2 buttons */}
  <div className="flex gap-4 justify-center">
    <Button variant="brand" size="md" showArrow>Download Full Report</Button>
    <Button variant="secondary" size="md">Talk to an Analyst</Button>
  </div>

  {/* Stats row — serif numbers, sans labels, periwinkle icons */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
    {stats.map(stat => (
      <div key={stat.id} className="text-center">
        <TrendingUp color={iconColors.content} size={20} className="mx-auto mb-2" />
        <span className="font-serif" style={{ fontSize: 'var(--text-lg)', color: '#ffffff' }}>
          {stat.value}
        </span>
        <span className="font-sans" style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>
          {stat.label}
        </span>
      </div>
    ))}
  </div>
</SectionWrapper>
```

**Key rules:**
- `SectionHeading level={1}` — ONE per page, nowhere else
- `Badge mode="dark"` on black backgrounds
- Stats numbers: `font-serif` + `--text-lg` (25px)
- Stats labels: `font-sans` + `--text-xs` (12.8px)
- Stat icons: `iconColors.content` (#806ce0)
- Max 2 buttons, `brand` + `secondary` pairing

---

### **2. CONTENT + CARD GRID SECTION (bg: WHITE or WARM, alternating)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { SectionLabel } from '@/app/components/Badge';
import { Card } from '@/app/components/Card';
import { iconColors } from '@/app/components/iconColors';
import { Target, Sparkles, Lightbulb } from 'lucide-react';

<SectionWrapper background="warm" spacing="lg" id="highlights">
  {/* Eyebrow label + heading */}
  <SectionHeading level={2} eyebrow="KEY FINDINGS" align="center">
    Report Highlights
  </SectionHeading>

  {/* Description under heading */}
  <p className="font-sans text-center max-w-[var(--text-measure)] mx-auto"
     style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
    Our analysis reveals three transformative trends...
  </p>

  {/* Card grid — 3 columns on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {highlights.map(item => (
      <Card key={item.id} variant="white" padding="md" shadow="sm" hover>
        {/* Icon container with periwinkle accent */}
        <div className="rounded-[10px] p-3 w-fit mb-4" style={{
          background: 'rgba(128, 108, 224, 0.1)',
          boxShadow: '0 4px 16px rgba(128, 108, 224, 0.06)'
        }}>
          <Target color={iconColors.content} size={24} />
        </div>

        {/* Card title — serif for 2-3 cards, sans for 4+ */}
        <h3 className="font-serif" style={{ fontSize: 'var(--text-lg)' }}>
          {item.title}
        </h3>

        {/* Card body */}
        <p className="font-sans" style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)'
        }}>
          {item.description}
        </p>
      </Card>
    ))}
  </div>
</SectionWrapper>
```

**Key rules:**
- `SectionWrapper background` alternates: `"white"` → `"warm"` → `"white"` → ...
- Cards on warm bg: `variant="white"` (pop). Cards on white bg: `variant="warm"` or `variant="outlined"`
- **2-3 cards:** title = `font-serif` + `--text-lg` (25px)
- **4+ cards:** title = `font-sans` + `--text-base` (20px), body = `--text-compact` (14px)
- Icon containers: rounded-[10px], `rgba(128, 108, 224, 0.1)` bg, `0.06` shadow
- Grid: `grid-cols-1 md:grid-cols-2` (2 cards), `md:grid-cols-3` (3 cards), `md:grid-cols-2 lg:grid-cols-4` (4 cards)

---

### **3. METHODOLOGY / TIMELINE SECTION (bg: WARM)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Badge } from '@/app/components/Badge';
import { Card } from '@/app/components/Card';
import { iconColors } from '@/app/components/iconColors';
import { CheckCircle } from 'lucide-react';

<SectionWrapper background="warm" spacing="lg" id="methodology">
  <SectionHeading level={2} eyebrow="OUR APPROACH" align="center">
    Research Methodology
  </SectionHeading>

  {/* Numbered step cards */}
  <div className="space-y-6 mt-10 max-w-[var(--container-content)] mx-auto">
    {steps.map((step, i) => (
      <Card key={step.id} variant="white" padding="lg" shadow="sm">
        <div className="flex gap-6 items-start">
          {/* Step number badge */}
          <Badge variant="rounded" size="md" theme="purple" mode="light">
            {String(i + 1).padStart(2, '0')}
          </Badge>

          <div>
            <h3 className="font-serif" style={{ fontSize: 'var(--text-xl)' }}>
              {step.title}
            </h3>
            <p className="font-sans mt-2" style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-secondary)'
            }}>
              {step.description}
            </p>

            {/* Checklist items with periwinkle icons */}
            <ul className="mt-4 space-y-2">
              {step.items.map(item => (
                <li key={item} className="flex gap-2 items-center font-sans"
                    style={{ fontSize: 'var(--text-compact)' }}>
                  <CheckCircle color={iconColors.content} size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    ))}
  </div>
</SectionWrapper>
```

**Key rules:**
- Step numbers: `Badge variant="rounded" theme="purple"`
- Checklist icons: `iconColors.content` (periwinkle), NOT green
- Step titles: `font-serif` + `--text-xl` (31.25px)
- Checklist text: `font-sans` + `--text-compact` (14px)

---

### **4. METRICS / IMPACT SECTION (bg: WHITE)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Card } from '@/app/components/Card';
import { iconColors } from '@/app/components/iconColors';
import { useCounter } from '@/app/hooks';
import { TrendingUp, DollarSign, Users, Globe } from 'lucide-react';

<SectionWrapper background="white" spacing="lg" id="impact">
  <SectionHeading level={2} eyebrow="MARKET IMPACT" align="center">
    Key Market Metrics
  </SectionHeading>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
    {metrics.map(metric => {
      const count = useCounter(metric.target, 2000); // 2s animation
      return (
        <Card key={metric.id} variant="warm" padding="md" shadow="none">
          {/* Icon */}
          <TrendingUp color={iconColors.content} size={20} className="mb-3" />

          {/* Animated number — serif, large */}
          <span className="font-serif" style={{ fontSize: 'var(--text-2xl)' }}>
            {metric.prefix}{count}{metric.suffix}
          </span>

          {/* Label — sans, small, muted */}
          <span className="font-sans" style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-secondary)'
          }}>
            {metric.label}
          </span>
        </Card>
      );
    })}
  </div>
</SectionWrapper>
```

**Key rules:**
- Metric numbers: `font-serif` + `--text-2xl` (39px) or `--text-4xl` (61px) for hero-level metrics
- Metric labels: `font-sans` + `--text-xs` (12.8px)
- `useCounter` hook for animated counting on scroll-in
- Cards on white bg: `variant="warm"` or `variant="outlined"`
- Numbers are ALWAYS black (on light bg) or white (on dark bg) — never red

---

### **5. TESTIMONIAL / QUOTE SECTION (bg: WHITE or WARM)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { Container } from '@/app/components/Container';

<SectionWrapper background="white" spacing="lg" id="testimonial">
  <Container maxWidth="narrow">
    {/* Quote text — serif, italic, large */}
    <blockquote className="font-serif text-center" style={{
      fontSize: 'var(--text-xl)',
      lineHeight: '1.6'
    }}>
      "This analysis transformed our strategic approach to healthcare AI investments..."
    </blockquote>

    {/* Attribution — sans, muted */}
    <p className="text-center mt-6 font-sans" style={{
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }}>
      — Dr. Sarah Chen, Chief Innovation Officer, MedTech Corp
    </p>
  </Container>
</SectionWrapper>
```

**Key rules:**
- Quote text: `font-serif` + `--text-xl` (31.25px)
- Attribution: `font-sans` + `--text-sm` (16px) + `--text-secondary` color
- `Container maxWidth="narrow"` (900px) for focused reading
- No Card wrapper needed — testimonials stand alone

---

### **6. RESOURCES / FEATURED GRID (bg: BLACK with gradient mesh)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { ResourceCard } from '@/app/components/ResourceCard';
import { useResponsiveGutter } from '@/app/hooks';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

<SectionWrapper background="black" spacing="lg" id="resources">
  <SectionHeading level={2} eyebrow="RELATED RESEARCH" align="center">
    Featured Resources
  </SectionHeading>

  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
    <Masonry gutter={`${useResponsiveGutter()}px`}>
      {resources.map(resource => (
        <ResourceCard
          key={resource.id}
          image={resource.image}
          category={resource.category}
          date={resource.date}
          title={resource.title}
          description={resource.description}
          variant={resource.variant}  {/* Mix 3-4 variants */}
          cardStyle="bordered"         {/* Frosted glass on dark bg */}
          mode="dark"
        />
      ))}
    </Masonry>
  </ResponsiveMasonry>
</SectionWrapper>
```

**Key rules:**
- `SectionWrapper background="black"` with optional gradient mesh overlay
- All ResourceCards: `mode="dark"` + `cardStyle="bordered"` on dark backgrounds
- Mix 3-4 variants: `standard`, `full-featured` (max 1), `minimal`, `clean`
- Grid: `ResponsiveMasonry` + `Masonry` (NOT CSS grid) for varied card heights
- `useResponsiveGutter()` for pixel-based responsive gaps

---

### **7. FINAL CTA SECTION (bg: WHITE or WARM)**

```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';
import { Button } from '@/app/components/Button';
import { CTALink } from '@/app/components/CTALink';
import { Container } from '@/app/components/Container';

<SectionWrapper background="white" spacing="xl" id="cta">
  <Container maxWidth="narrow">
    <SectionHeading level={2} eyebrow="GET STARTED" align="center">
      Ready to Transform Your Strategy?
    </SectionHeading>

    <p className="text-center font-sans max-w-[var(--container-compact)] mx-auto"
       style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
      Download the complete report or speak with our analysts.
    </p>

    {/* CTA pair */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Button variant="brand" size="md" showArrow>Download Full Report</Button>
      <Button variant="secondary" size="md">Schedule a Briefing</Button>
    </div>

    {/* Optional text CTA */}
    <div className="text-center mt-6">
      <CTALink href="/methodology">Learn About Our Methodology</CTALink>
    </div>
  </Container>
</SectionWrapper>
```

**Key rules:**
- `Container maxWidth="narrow"` for focused CTA
- `spacing="xl"` for extra breathing room
- Max 2 buttons: `brand` (primary conversion) + `secondary` (alternative)
- Optional `CTALink` below for low-commitment action
- `showArrow` on the brand button ONLY if it leads to a form

---

### **Component Selection Quick Reference**

| Need | Component | Key Props |
|---|---|---|
| Full page section wrapper | `SectionWrapper` | `background`, `spacing`, `id` |
| Section title + optional eyebrow | `SectionHeading` | `level` (1/2/3), `eyebrow`, `align` |
| Content container (cards, grids) | `Card` | `variant`, `padding`, `shadow`, `hover` |
| Max-width content wrapper | `Container` | `maxWidth` (page/content/narrow/prose/compact) |
| Category label above heading | `SectionLabel` (from Badge.tsx) | `theme`, `fontWeight` |
| Inline status/category tag | `Badge` | `variant`, `size`, `theme`, `mode` |
| Primary conversion CTA | `Button variant="brand"` | `size="md"`, `showArrow` (urgency only) |
| Secondary action | `Button variant="secondary"` | `size="md"` |
| Text + arrow CTA | `CTALink` | `href` |
| Inline paragraph link | `InlineLink` | `href` |
| Content/feature icon color | `iconColors.content` | `#806ce0` |
| Utility/nav icon color | `iconColors.utility` | `#737373` |
| Scroll-to-top FAB | `ScrollToTop` | (no props) |
| Scroll depth bar | `ScrollProgress` | (no props) |
| Resource/blog card grid | `ResourceCard` | `variant`, `cardStyle`, `mode` |
| Masonry gutter | `useResponsiveGutter()` | returns 24 or 32 (px) |
| Animated metric numbers | `useCounter()` | `(target, duration)` |

---

### **Typography Token Quick Reference (Per Element)**

| Element | Font | Token | Size |
|---|---|---|---|
| Hero h1 | Serif | `--text-3xl` | 48.8px |
| Section h2 | Serif | `--text-2xl` | 39px |
| Subsection h3 | Serif | `--text-xl` | 31.25px |
| Card title (2-3 cards) | Serif | `--text-lg` | 25px |
| Card title (4+ cards) | Sans | `--text-base` | 20px |
| Body text | Sans | `--text-sm` | 16px |
| Card body (4+ cards) | Sans | `--text-compact` | 14px |
| TOC / Nav items | Sans | `--text-nav` | 14px |
| Labels, metadata | Sans | `--text-xs` | 12.8px |
| Navbar links | Sans | `--text-2xs` | 12px |
| Metric numbers | Serif | `--text-2xl` to `--text-4xl` | 39-61px |
| Metric labels | Sans | `--text-xs` | 12.8px |
| Testimonial quote | Serif | `--text-xl` | 31.25px |
| Testimonial attribution | Sans | `--text-sm` | 16px |

---

## AI IMPLEMENTATION PROMPTS

See `/AI_DESIGN_SYSTEM_PROMPT.md` for full copy-paste prompts.

---

## CHECKLIST FOR AI

Before generating ANY code, verify:

- [ ] Using correct typography tokens (--text-sm, --text-2xl)
- [ ] Using correct font families (Serif for headings, Sans for body/UI)
- [ ] Using Container component or container width tokens (not hardcoded max-widths)
- [ ] Using --brand-red ONLY for CTAs
- [ ] Button size="md" as default (NOT lg)
- [ ] showArrow={true} ONLY for urgency/forms
- [ ] Shimmer animation automatic (don't disable)
- [ ] Following section pattern (black/white/warm alternating)
- [ ] Using semantic component (Button vs CTALink vs InlineLink)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)
- [ ] Responsive padding (px-4 sm:px-6 md:px-8) or Container component
- [ ] All icons use `iconColors.content` (#806ce0) or `iconColors.utility` (#737373)
- [ ] All gradients use inline styles with RGBA (NOT Tailwind gradient classes)
- [ ] Purple used at ≤12% opacity only (except icon stroke and Badge internals)
- [ ] Secondary buttons use warm border + coral shimmer (NOT periwinkle)
- [ ] Each section uses correct components from Page Assembly Guide
- [ ] SectionHeading level={1} used ONCE (hero only)
- [ ] Card variant matches section background (white cards on warm bg, warm cards on white bg)
- [ ] Shadow level matches element importance (sm resting, md default, lg emphasis/hover)
- [ ] Border radius matches element type (2.5px images, 5px buttons/badges, 10px cards)
- [ ] Badge theme matches section context (see Badge Theme Selection Guide)

---

## COMMON MISTAKES TO AVOID

1. ❌ Use `--brand-red` for anything except CTA buttons
2. ❌ Use `size="lg"` as default (use `size="md"`)
3. ❌ Add `showArrow={true}` to every button (only urgency)
4. ❌ Use `--text-3xl` for section headings (only hero h1)
5. ❌ Use hardcoded colors instead of tokens
6. ❌ Use arbitrary spacing (stick to scale)
7. ❌ Use Tailwind `text-2xl` classes (use CSS variables)
8. ❌ Disable shimmer animation (always active)
9. ❌ Use Sans for headings or Serif for body text
10. ❌ Hardcode container max-widths instead of using Container component or tokens
11. ❌ Use Tailwind gradient stop classes (`from-[...]`, `to-[...]`) — they're broken
12. ❌ Use arbitrary icon colors — always use `iconColors.content` or `iconColors.utility`
13. ❌ Use periwinkle/purple for secondary button styling — it uses warm/coral tones
14. ❌ Use purple at full opacity for backgrounds, text, or borders
15. ❌ Hand-code `<section>` tags instead of using `<SectionWrapper>`
16. ❌ Hand-code headings instead of using `<SectionHeading>`
17. ❌ Hand-code content boxes instead of using `<Card>`
18. ❌ Use `SectionHeading level={1}` more than once per page
19. ❌ Use `rounded-lg` or Tailwind radius classes instead of exact pixel values (2.5/5/10px)
20. ❌ Apply `shadow="lg"` as default — use `shadow="sm"` or `shadow="md"`
21. ❌ Apply manual `boxShadow` when `Card`'s `shadow` prop handles it
22. ❌ Use random Badge themes — match theme to section context per Badge Selection Guide

---

## QUICK LINKS

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **TypeScript Tokens:** `/src/design-system/tokens.ts`
- **Component Library:** `/src/app/components/index.ts`
- **Button:** `/src/app/components/Button.tsx`
- **Icon Colors:** `/src/app/components/iconColors.ts`
- **Container:** `/src/app/components/Container.tsx`
- **SectionWrapper:** `/src/app/components/SectionWrapper.tsx`
- **SectionHeading:** `/src/app/components/SectionHeading.tsx`
- **Card:** `/src/app/components/Card.tsx`
- **Badge (+ SectionLabel):** `/src/app/components/Badge.tsx`
- **ResourceCard:** `/src/app/components/ResourceCard.tsx`
- **ScrollToTop:** `/src/app/components/ScrollToTop.tsx`
- **ScrollProgress:** `/src/app/components/ScrollProgress.tsx`
- **Links:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Hooks:** `/src/app/hooks/index.ts`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`
- **Token Showcases:** `/src/app/components/All*Content.tsx` (6 files)

---

**Last Updated:** 2026-03-01  
**Maintained By:** Design System Team  
**Version:** 3.3.2 — Added Token Cross-Reference & Usage Rules (shadow/elevation guide, border radius guide, badge theme selection matrix, card-background pairing)
