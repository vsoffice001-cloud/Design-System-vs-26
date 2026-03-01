# DESIGN SYSTEM - AI CONTEXT FILE
**Version:** 3.3  
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

---

## QUICK LINKS

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **Component Library:** `/src/app/components/index.ts`
- **Button:** `/src/app/components/Button.tsx`
- **Icon Colors:** `/src/app/components/iconColors.ts`
- **Container:** `/src/app/components/Container.tsx`
- **SectionWrapper:** `/src/app/components/SectionWrapper.tsx`
- **SectionHeading:** `/src/app/components/SectionHeading.tsx`
- **Card:** `/src/app/components/Card.tsx`
- **ResourceCard:** `/src/app/components/ResourceCard.tsx`
- **ScrollToTop:** `/src/app/components/ScrollToTop.tsx`
- **ScrollProgress:** `/src/app/components/ScrollProgress.tsx`
- **Links:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Hooks:** `/src/app/hooks/index.ts`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`

---

**Last Updated:** 2026-03-01  
**Maintained By:** Design System Team  
**Version:** 3.3 — Added 92-5-3 Color Usage Guide, icon colors, gradient workaround, layout/scroll components
