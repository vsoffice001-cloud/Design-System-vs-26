# DESIGN SYSTEM - AI CONTEXT FILE
**Version:** 3.2.1  
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

## COLOR SYSTEM

### **Primary Brand Colors**
```css
--brand-red: #b01f24;        /* Ken Bold Red - CTAs ONLY */
--brand-red-hover: #8f181d;
--brand-red-active: #771419;
--black: #000000;
--white: #ffffff;
```

### **Semantic Text Colors**
```css
--text-primary: #000000;              /* Primary text on light backgrounds */
--text-secondary: rgba(0, 0, 0, 0.60); /* Secondary/description text */
```

### **Warm Palette (Highlighted Sections)**
```css
--warm-300: #f5f2f1;   /* BASE - Section backgrounds */
--warm-500: #eae5e3;   /* Borders */
--warm-600: #d9d1ce;   /* Timeline base */
--warm-700: #c8bcb8;   /* Timeline nodes */
```

### **Label Colors**
```css
--label-on-black: rgba(255, 255, 255, 0.40);
--label-on-white: rgba(0, 0, 0, 0.40);
```

### **Background Compositions**
```css
--bg-composition-warm-editorial: linear-gradient(180deg, #faf9f8 0%, #f5f2f1 40%, #faf9f8 100%);
```

### **Accent & Utility Colors**
Full 50-900 scales for Purple, Periwinkle, Coral, Perano, Green, Amber, Rose defined in `theme.css`.
- Use for Badge themes, data visualization, semantic states
- NEVER use for primary CTAs (use `--brand-red`)

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
variant="secondary" // White + warm border - Supporting actions
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
- [ ] Following section pattern (black/white/warm)
- [ ] Using semantic component (Button vs CTALink vs InlineLink)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)
- [ ] Responsive padding (px-4 sm:px-6 md:px-8) or Container component

---

## COMMON MISTAKES TO AVOID

1. Use `--brand-red` for anything except CTA buttons
2. Use `size="lg"` as default (use `size="md"`)
3. Add `showArrow={true}` to every button (only urgency)
4. Use `--text-3xl` for section headings (only hero h1)
5. Use hardcoded colors instead of tokens
6. Use arbitrary spacing (stick to scale)
7. Use Tailwind `text-2xl` classes (use CSS variables)
8. Disable shimmer animation (always active)
9. Use Sans for headings or Serif for body text
10. Hardcode container max-widths instead of using Container component or tokens

---

## QUICK LINKS

- **Repository:** `vsoffice001-cloud/Design-System-vs-26`
- **Theme Tokens:** `/src/styles/theme.css`
- **Component Library:** `/src/app/components/index.ts`
- **Button:** `/src/app/components/Button.tsx`
- **Container:** `/src/app/components/Container.tsx`
- **ResourceCard:** `/src/app/components/ResourceCard.tsx`
- **Links:** `/src/app/components/CTALink.tsx`, `/src/app/components/InlineLink.tsx`
- **Hooks:** `/src/app/hooks/index.ts`
- **Dashboard:** `/src/app/components/DesignSystemDashboard.tsx`

---

**Last Updated:** 2026-03-01  
**Maintained By:** Design System Team  
**Version:** 3.2.1 - Added Container, ResourceCard, SubtleVariantSwitcher, useResponsiveGutter