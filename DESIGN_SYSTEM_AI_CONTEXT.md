# DESIGN SYSTEM - AI CONTEXT FILE
**Version:** 2.0  
**Date:** 2026-02-13  
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
variant="secondary" // Outlined - Supporting actions
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

---

## LAYOUT SYSTEM

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

---

### **🎯 Prompt 1: Building a New Page**

```
I need to build a new page following our design system. Please:

1. ✅ Read /DESIGN_SYSTEM_AI_CONTEXT.md FIRST
2. ✅ Use typography tokens from theme.css:
   - --text-sm (16px) for body text
   - --text-2xl (39px) for section headings (h2)
   - --text-3xl (48.8px) ONLY for hero h1
3. ✅ Use color tokens:
   - --brand-red (#b01f24) ONLY for CTAs
   - --black for hero sections
   - --warm-300 for highlighted sections
4. ✅ Use Button component:
   - variant="brand" ONLY for conversion CTAs
   - size="md" as default (42px height)
   - showArrow={true} ONLY for urgency/forms
5. ✅ Use CTALink for exploratory navigation
6. ✅ Follow section pattern (black → white → warm alternating)

Reference files:
- /src/app/components/Button.tsx
- /src/app/components/CTALink.tsx
- /src/styles/theme.css
```

---

### **🎯 Prompt 2: Adding a CTA Button**

```
Add a CTA button following our design system:

✅ Use Button component from /src/app/components/Button.tsx
✅ Use variant="brand" (Ken Bold Red #b01f24)
✅ Use size="md" (42px height) - DO NOT use lg unless homepage hero
✅ Add showArrow={true} ONLY if redirecting to form/urgency page
✅ Shimmer animation is automatic (always active)

Example for conversion:
<Button variant="brand" showArrow>Get Started Free</Button>

Example for exploration:
<CTALink href="#learn-more">Learn More</CTALink>

DO NOT use red for non-CTA purposes.
```

---

### **🎯 Prompt 3: Creating a Section**

```
Create a new section following our design system pattern:

1. ✅ Choose background:
   - bg-black text-white: For hero moments
   - bg-white: For standard content
   - bg-warm-300: For highlighted/alternating sections

2. ✅ Typography:
   - Section heading: var(--text-2xl) 39px
   - Body text: var(--text-sm) 16px
   - Labels: var(--text-xs) 12.8px

3. ✅ Spacing:
   - py-24 (96px) for hero sections
   - py-20 (80px) for standard sections
   - mb-12 (48px) between major elements
   - mb-6 (24px) within sections

4. ✅ Read /src/app/components/HeroSection.tsx for reference

Reference: /DESIGN_SYSTEM_AI_CONTEXT.md
```

---

### **🎯 Prompt 4: Typography Sizing**

```
Apply correct typography sizing from our design system:

✅ DO USE (Most Common):
- var(--text-sm) 16px: ALL body text, paragraphs, descriptions
- var(--text-2xl) 39px: ALL section headings (h2)
- var(--text-xs) 12.8px: Labels, metadata, section eyebrows

✅ SPECIAL CASES:
- var(--text-3xl) 48.8px: ONLY hero h1 and final CTA heading
- var(--text-nav) 14px: TOC items, navigation menus
- var(--text-compact) 14px: Compact cards with 4+ items

❌ DO NOT USE:
- Hardcoded pixel values (unless spatial constraint)
- text-3xl for regular section headings (reserved for heroes)
- Random font sizes not in scale

Reference: /src/styles/theme.css lines 23-31
```

---

### **🎯 Prompt 5: Color Usage**

```
Apply colors following our strict design system rules:

✅ Ken Bold Red (#b01f24):
- ONLY for CTA buttons (variant="brand")
- ONLY for primary conversion actions
- Example: "Get Started", "Unlock Report", "Schedule Demo"

✅ Black (#000000):
- Primary buttons (variant="primary")
- Hero section backgrounds
- Final CTA backgrounds
- Body text

✅ Warm (#f5f2f1):
- Challenges section background
- Methodology section background
- Alternating section pattern

❌ NEVER:
- Red for decorative purposes
- Red for borders, icons, general accents
- Gray (use black tints: black/70, black/50, black/8)

Reference: /DESIGN_SYSTEM_AI_CONTEXT.md → Color System
```

---

### **🎯 Prompt 6: Button vs CTALink Decision**

```
Choose the correct link component:

✅ Use <Button variant="brand" showArrow>:
- Form submissions
- Account creation / signup
- Download reports (urgency)
- Schedule meetings
- Primary conversions
Example: <Button variant="brand" showArrow>Get Started Free</Button>

✅ Use <CTALink>:
- Exploratory navigation
- "Learn more" style links
- Section jumping
- Non-urgent discovery
Example: <CTALink href="#methodology">See How We Did It</CTALink>

✅ Use <InlineLink>:
- Links WITHIN paragraphs
- Interlinking content
- Secondary references
Example: Read our <InlineLink href="#study">case study</InlineLink>

Reference: /src/app/components/LinksDocumentation.tsx
```

---

### **🎯 Prompt 7: Complete Page Build**

```
Build a complete page with our design system. Follow this checklist:

STRUCTURE:
✅ Import components from /src/app/components/
✅ Follow section alternating pattern (black → white → warm)
✅ Use semantic HTML (section, h1, h2, h3, p)

TYPOGRAPHY:
✅ var(--text-3xl) for hero h1 ONLY
✅ var(--text-2xl) for ALL section h2
✅ var(--text-sm) for ALL body text
✅ Font weight 600 for headings, 400 for body

COLORS:
✅ --brand-red ONLY for CTA buttons
✅ --black for hero backgrounds
✅ --warm-300 for alternating sections

COMPONENTS:
✅ <Button variant="brand"> for conversion CTAs
✅ <CTALink> for exploratory navigation
✅ <InlineLink> for in-paragraph links

ANIMATIONS:
✅ Shimmer on all buttons (automatic)
✅ showArrow={true} ONLY for urgency/forms

FILES TO READ:
1. /DESIGN_SYSTEM_AI_CONTEXT.md (this file)
2. /src/styles/theme.css (tokens)
3. /src/app/components/Button.tsx (button component)
4. /src/app/components/HeroSection.tsx (section reference)
```

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
- [ ] Using --brand-red ONLY for CTAs
- [ ] Button size="md" as default (NOT lg)
- [ ] showArrow={true} ONLY for urgency/forms
- [ ] Shimmer animation automatic (don't disable)
- [ ] Following section pattern (black/white/warm)
- [ ] Using semantic component (Button vs CTALink vs InlineLink)
- [ ] Spacing from base-10 scale
- [ ] No hardcoded values (use tokens)

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

### **✅ DO:**
1. Use `variant="brand"` ONLY for conversion CTAs
2. Use `size="md"` as default (42px height)
3. Use `--text-sm` (16px) for ALL body text
4. Use `--text-2xl` (39px) for ALL section headings
5. Use color tokens from theme.css
6. Use spacing scale (--space-4, --space-6, etc.)
7. Use CSS variables for font sizes
8. Let shimmer animation run (core brand identity)

---

## 📊 QUALITY METRICS

AI-generated code should score:

- ✅ Token Usage: 100% (no hardcoded values)
- ✅ Component Reuse: 90%+ (import from library)
- ✅ Color Compliance: 100% (red for CTAs only)
- ✅ Typography Compliance: 100% (correct scale usage)
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

**Last Updated:** 2026-02-13  
**Maintained By:** Design System Team  
**Version:** 2.0 - Complete 4W+H Integration
