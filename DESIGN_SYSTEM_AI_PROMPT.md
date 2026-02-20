# 🤖 DESIGN SYSTEM AI PROMPT
## For Team Members Using Figma Make

**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Purpose:** Copy-paste this prompt when creating NEW pages to ensure AI follows our design system

---

## ⚡ EXACT PROMPT TO USE

```
I'm building a new page using an established design system. This project has:

🎨 DESIGN SYSTEM SPECS:
- Black/white alternating sections (pure #000000 and #ffffff)
- Ken Bold Red (#b01f24) for CTAs ONLY
- Major Third typography scale (1.25 ratio)
- Minimalist editorial aesthetic
- Two core brand animations: shimmer (always on) + arrow (form/urgency redirects only)

📋 CRITICAL RULES:

1. TYPOGRAPHY:
   - Use CSS variables from theme.css (--text-xs through --text-3xl)
   - 14px for navigation: var(--text-nav)
   - 16px for body: var(--text-sm) 
   - 39px for section headings: var(--text-2xl)
   - Never use Tailwind font-size classes (text-2xl, text-lg, etc.)

2. BUTTONS:
   - Import Button from @/app/components/Button
   - Always use shimmer effect (automatically included)
   - Arrow animation ONLY for forms/urgent redirects (showArrow prop)
   - Default size: md (42px) for standard CTAs
   - Small size: sm (36px, 14px font) for navbars/compact UIs
   - Variants: primary (black), brand (red), secondary (outlined), ghost (transparent)

3. LINKS:
   - CTALink: For text+arrow combinations (auto-hover animation)
   - InlineLink: For paragraph links (brand red underline + warm-100 background on hover)
   - Never use plain <a> tags

4. COLORS:
   - Sections alternate: #000000 → #ffffff → #000000
   - Warm backgrounds: var(--bg-warm) #f5f2f1 for highlights
   - Red ONLY for CTAs: var(--brand-red) #b01f24
   - Never use Tailwind color classes for brand colors

5. SPACING:
   - Use spacing scale: space-1 through space-10 (4px to 96px)
   - Section padding: py-16 md:py-24 (64px to 96px)
   - Consistent gaps between elements

6. COMPONENTS TO USE:
   - Button (from @/app/components/Button)
   - CTALink (from @/app/components/CTALink) 
   - InlineLink (from @/app/components/InlineLink)
   - AnimatedArrow (imported in CTALink automatically)

❌ NEVER DO:
- Don't use text-xl, text-2xl Tailwind classes
- Don't use bg-red-600 or any Tailwind brand colors
- Don't create custom button styles (use Button component)
- Don't add arrow animation to non-form CTAs
- Don't use fonts other than DM Sans

✅ ALWAYS DO:
- Import components from @/app/components
- Use CSS variables for typography/colors
- Apply shimmer to ALL buttons (automatic)
- Keep sections alternating black/white
- Follow Major Third scale for hierarchy

Please build [YOUR PAGE DESCRIPTION] following these rules exactly.
```

---

## 📚 REFERENCE: Component Import Examples

```tsx
// ✅ CORRECT - Use design system components
import { Button } from '@/app/components/Button';
import { CTALink } from '@/app/components/CTALink';
import { InlineLink } from '@/app/components/InlineLink';

// Hero CTA - Form redirect (use arrow)
<Button variant="brand" size="lg" showArrow>
  Schedule Consultation
</Button>

// Standard CTA - No arrow (shimmer still active)
<Button variant="primary">
  Learn More
</Button>

// Small navbar button
<Button variant="brand" size="sm">
  Get Started
</Button>

// Text + arrow link (hover animation)
<CTALink href="/contact">
  Contact our team
</CTALink>

// Inline paragraph link
<p className="text-sm">
  Read our <InlineLink href="/case-study">latest case study</InlineLink> for details.
</p>
```

---

## 🎯 TYPOGRAPHY QUICK REFERENCE

```css
/* Use these CSS variables - NOT Tailwind classes */
--text-xs: 0.8rem;      /* 12.8px - Labels, metadata */
--text-sm: 1rem;        /* 16px - Body text ⭐ MOST USED */
--text-base: 1.25rem;   /* 20px - Large body, card titles */
--text-xl: 1.953rem;    /* 31.25px - Subsection headings (h3) */
--text-2xl: 2.441rem;   /* 39px - Section headings (h2) ⭐ */
--text-3xl: 3.052rem;   /* 48.8px - Hero headings (h1) ⭐ */

/* Custom sizes */
--text-nav: 0.875rem;   /* 14px - Navigation, TOC items */
--text-compact: 0.875rem; /* 14px - Compact body text */
--text-2xs: 0.75rem;    /* 12px - Micro labels */
```

**Example Usage:**
```tsx
// ✅ CORRECT
<h2 className="text-black" style={{ fontSize: 'var(--text-2xl)' }}>
  Section Heading
</h2>

<p className="text-sm">Body paragraph</p>

// ❌ WRONG - Don't use Tailwind font-size classes
<h2 className="text-2xl">Wrong</h2>
```

---

## 🎨 COLOR QUICK REFERENCE

```css
/* Brand Colors */
--brand-red: #b01f24;        /* CTAs only */
--brand-red-hover: #8f181d;  /* CTA hover */

/* Black & White */
--black: #000000;            /* Pure black sections */
--white: #ffffff;            /* Pure white sections */

/* Warm Highlights */
--bg-warm: #f5f2f1;          /* Highlighted sections */

/* Red Scale (50–900) — Brand red = --red-600 */
--red-50: #fef2f2;           /* Badge/alert backgrounds */
--red-600: #b01f24;          /* = --brand-red ⭐ */
--red-700: #8f181d;          /* = --brand-red-hover */

/* Accent Colors — Badges, data viz, section variety (full scales in theme.css) */
--purple-600: #806ce0;       /* Premium, insights */
--periwinkle-500: #c3c6f9;   /* Trust, reliability */
--coral-600: #ea7a5f;        /* Warmth, energy */
--perano-500: #dfeafa;       /* Calm, data */

/* Utility Colors — Semantic states only (full scales in theme.css) */
--green-500: #10b981;        /* Success */
--amber-500: #f59e0b;        /* Warning */
--rose-500: #f43f5e;         /* Error (NOT brand red) */
```

**Example Usage:**
```tsx
// ✅ CORRECT - Alternating sections
<section className="bg-black text-white py-24">
  Black section content
</section>

<section className="bg-white text-black py-24">
  White section content  
</section>

<section className="text-black py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
  Warm highlighted section
</section>

// ❌ WRONG - Don't use Tailwind brand colors
<button className="bg-red-600">Wrong</button>
```

---

## 🎬 ANIMATION RULES

### **Shimmer Effect:**
- ✅ **ALWAYS ACTIVE** on all buttons (automatic)
- No prop needed - it's our brand signature
- 700ms duration, left-to-right gradient sweep

### **Arrow Animation:**
- ✅ **ONLY** for buttons redirecting to:
  - Forms (contact, consultation, signup)
  - Pages with urgency (limited offers, events)
- ❌ **NEVER** for:
  - "Learn More" buttons
  - Documentation links
  - General navigation

**Example:**
```tsx
// ✅ Form redirect - Use arrow
<Button variant="brand" showArrow>
  Book Consultation
</Button>

// ❌ General action - No arrow (shimmer still active)
<Button variant="primary">
  View Portfolio
</Button>
```

---

## 📦 BUTTON SIZE STRATEGY

| **Size** | **Height** | **Font** | **Use Case** |
|----------|-----------|----------|--------------|
| `sm` | 36px | 14px | Navbar CTAs, compact UIs, TOC buttons |
| `md` | 42px | 16px | **DEFAULT** - Report pages, standard CTAs |
| `lg` | 48px | 18px | Homepage heroes, major landing pages |
| `xl` | 56px | 18px | Rare - Maximum impact events |

**Default Strategy:**
- 90% of buttons: Use `md` (no need to specify size prop)
- Homepage big heroes: Explicitly use `size="lg"`
- Navbar/compact: Use `size="sm"`

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ **MISTAKE 1: Using Tailwind font-size classes**
```tsx
// ❌ WRONG
<h2 className="text-2xl">Heading</h2>

// ✅ CORRECT
<h2 style={{ fontSize: 'var(--text-2xl)' }}>Heading</h2>
```

### ❌ **MISTAKE 2: Custom button styles**
```tsx
// ❌ WRONG
<button className="px-6 py-3 bg-red-600 text-white rounded">
  Click Me
</button>

// ✅ CORRECT
<Button variant="brand">
  Click Me
</Button>
```

### ❌ **MISTAKE 3: Arrow on non-form CTAs**
```tsx
// ❌ WRONG - "Learn More" shouldn't have arrow
<Button variant="primary" showArrow>
  Learn More
</Button>

// ✅ CORRECT
<Button variant="primary">
  Learn More
</Button>
```

### ❌ **MISTAKE 4: Plain anchor tags**
```tsx
// ❌ WRONG
<a href="/about" className="text-red-600">About Us</a>

// ✅ CORRECT - Use CTALink or InlineLink
<CTALink href="/about">About Us</CTALink>
```

### ❌ **MISTAKE 5: Hardcoded colors**
```tsx
// ❌ WRONG
<div className="bg-[#b01f24]">Red section</div>

// ✅ CORRECT
<div style={{ backgroundColor: 'var(--brand-red)' }}>Red section</div>
```

---

## 📂 FILE STRUCTURE

```
src/
├── app/
│   ├── components/
│   │   ├── Button.tsx          ← Main button component
│   │   ├── CTALink.tsx         ← Text + arrow links
│   │   ├── InlineLink.tsx      ← Paragraph links
│   │   ├── AnimatedArrow.tsx   ← Arrow animation (auto-imported)
│   │   └── ...
│   └── hooks/
│       └── useShimmer.ts       ← Shimmer effect hook
└── styles/
    └── theme.css               ← All design tokens (--text-*, --brand-*, etc.)
```

---

## ✅ PRE-FLIGHT CHECKLIST

Before submitting your page, verify:

- [ ] All typography uses CSS variables (--text-*)
- [ ] All buttons use Button component
- [ ] Arrow animation ONLY on form/urgency CTAs
- [ ] Links use CTALink or InlineLink (not <a>)
- [ ] Sections alternate black/white
- [ ] Red color ONLY for CTAs
- [ ] No Tailwind font-size classes (text-xl, text-2xl, etc.)
- [ ] No Tailwind brand color classes (bg-red-600, etc.)
- [ ] Spacing follows scale (py-16, md:py-24)
- [ ] Button sizes: md (default), sm (navbar), lg (big heroes)

---

## 🎯 PROMPT VARIATIONS FOR SPECIFIC PAGES

### **Landing Page:**
```
Build a landing page with:
- Hero section (black bg, white text, --text-3xl heading)
- 3-4 alternating black/white sections
- Brand red CTAs with arrows (form redirects only)
- Follow Major Third typography scale
- All buttons use Button component with shimmer
```

### **Dashboard/App Page:**
```
Build a dashboard with:
- Compact UI using size="sm" buttons (14px font)
- Navigation using var(--text-nav) for menu items
- White background (#ffffff)
- Brand red for primary actions only
- Use InlineLink for help text links
```

### **Form Page:**
```
Build a form page with:
- White background (#ffffff)
- Section heading: --text-2xl (39px)
- Labels: --text-xs (12.8px)
- Submit button: variant="brand" showArrow (form redirect)
- Cancel button: variant="secondary" (no arrow)
```

---

## 📞 NEED HELP?

**Design System Dashboard Location:**
`Dashboard → Foundations → Typography → Custom Font Sizes`
`Dashboard → Components → Buttons → All Documentation`
`Dashboard → Components → Links & CTAs`

**GitHub Repository:**
`vsoffice001-cloud/Design-System-vs-26`

**Key Documentation Files:**
- `/src/styles/theme.css` - All design tokens
- `/src/app/components/Button.tsx` - Button component
- `/DESIGN_SYSTEM_AI_PROMPT.md` - This file

---

**Last Updated:** 2026-02-20  
**Version:** 1.1.0  
**Status:** ✅ PRODUCTION READY