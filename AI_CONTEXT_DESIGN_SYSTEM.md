# 🤖 AI DESIGN SYSTEM CONTEXT
**Auto-Import This File Into New Figma Make Projects**

---

## 📌 PURPOSE
This file provides complete design system context to AI assistants when imported into new Figma Make projects. Copy the "AI SYSTEM PROMPT" section below into your new project's initial prompt.

---

## 🎯 AI SYSTEM PROMPT (COPY THIS)

```markdown
# DESIGN SYSTEM CONTEXT - Ken Bold Editorial Case Study

You are working with a professional design system. Follow these rules STRICTLY:

## 🎨 DESIGN PRINCIPLES

### Visual Identity
- **Aesthetic**: Minimalist editorial design (Stripe/Shopify quality)
- **Color Palette**: Pure black/white + Ken Bold Red (#b01f24) for CTAs ONLY
- **Typography**: Major Third scale (1.25 ratio), DM Sans font family
- **Spacing**: Base-10 system (4px increments)

### Brand Signatures (ALWAYS ACTIVE)
1. **✨ Shimmer Effect** - ALWAYS active on ALL buttons (signature animation)
2. **↗️ Arrow Animation** - ONLY on buttons redirecting to forms/urgent pages
   - Icon: `ArrowUpRight` from lucide-react (45° diagonal, NOT horizontal)
   - Animation: 2-arrow replacement (Arrow 1 exits top-right, Arrow 2 enters from bottom-left)
   - ❌ NEVER use `ArrowRight`, `ChevronRight`, or any horizontal arrow

---

## 🔤 TYPOGRAPHY SYSTEM

### Major Third Type Scale
- `--text-xs`: 12.8px - Labels, metadata, "CASE STUDY" badge
- `--text-sm`: 16px - Body text ⭐ MOST USED
- `--text-base`: 20px - Large body, card titles (4+ cards)
- `--text-xl`: 31.25px - Subsection headings (h3)
- `--text-2xl`: 39px - Section headings (h2) ⭐ STANDARD
- `--text-3xl`: 48.8px - Hero h1 ⭐ HERO ONLY

### Custom Sizes (Outside Scale)
- `--text-2xs`: 12px - Navbar, micro labels
- `--text-nav`: 14px - TOC items, compact navigation ⭐ NEW
- `--text-compact`: 14px - Dense cards, compact body

### When to Use What
✅ Section headings → `--text-2xl` (39px)
✅ Body paragraphs → `--text-sm` (16px)  
✅ Hero titles → `--text-3xl` (48.8px)
✅ TOC navigation → `--text-nav` (14px)
❌ NEVER use arbitrary px values
❌ NEVER use Tailwind font-size classes (text-2xl, text-lg, etc.)

---

## 🎨 COLOR SYSTEM

### Primary Colors
```css
--brand-red: #b01f24;        /* Ken Bold Red - CTAs ONLY */
--brand-red-hover: #8f181d;  /* Hover state */
--brand-red-active: #771419; /* Active state */
--black: #000000;            /* Primary text, hero backgrounds */
--white: #ffffff;            /* Primary backgrounds */
```

### Black Tints (Most Used)
```css
--black-50: #fafafa;   /* Subtle backgrounds */
--black-100: #f5f5f5;  /* Card backgrounds */
--black-200: #e5e5e5;  /* Borders */
--black-500: #737373;  /* Secondary text */
--black-800: #262626;  /* Strong text */
```

### Warm Off-White (Editorial Sections)
```css
--warm-300: #f5f2f1;  /* Challenges, Methodology sections */
--warm-500: #eae5e3;  /* Borders */
--warm-600: #d9d1ce;  /* Timeline base */
```

### Usage Rules
✅ Red (#b01f24) → CTAs, conversion moments ONLY
✅ Black/White → Primary UI, 90% of design
✅ Warm → Alternating editorial sections
❌ NEVER use arbitrary hex colors
❌ NEVER mix purple/blue/green (not in palette)

---

## 🔘 BUTTON SYSTEM

### Variants
1. **Primary** - Black solid, main actions
2. **Brand** - Red (#b01f24), CTAs/conversion ⭐ HIGH IMPACT
3. **Secondary** - Outlined, supporting actions
4. **Ghost** - Transparent, tertiary on dark backgrounds

### Sizes
- `sm`: 36px height, 14px font - Navbar, TOC buttons
- `md`: 42px height, 16px font - ⭐ DEFAULT (90% of buttons)
- `lg`: 48px height, 18px font - Homepage heroes ONLY
- `xl`: 56px height, 18px font - Rare, maximum impact

### Shimmer (ALWAYS ACTIVE)
```tsx
// ✨ Shimmer is AUTOMATIC - never disable
<Button variant="brand">Click Me</Button>
// Shimmer will animate on hover automatically
```

### Arrow Animation (CONDITIONAL)
```tsx
// ↗️ Show arrow for forms/urgent redirects (uses ArrowUpRight - 45° diagonal)
<Button variant="brand" showArrow>
  Schedule Demo
</Button>

// ❌ Don't use arrow for simple navigation
<Button variant="primary">
  Learn More
</Button>
```

### Arrow Rules
✅ Arrow uses `ArrowUpRight` from lucide-react (45° diagonal pointing up-right ↗️)
✅ Animation: 2-arrow replacement — Arrow 1 exits top-right, Arrow 2 enters from bottom-left
✅ `showArrow` prop on Button triggers AnimatedArrow component automatically
✅ CTALink component includes AnimatedArrow by default
❌ NEVER use `ArrowRight` (→) — horizontal arrows are NOT our brand
❌ NEVER use `ChevronRight` (›) — chevrons are NOT our brand
❌ NEVER manually import arrow icons — always use `showArrow` prop or `AnimatedArrow` component

### Usage Rules
✅ Default to `md` size unless specified
✅ Use `brand` variant sparingly (max 1-2 per screen)
✅ Always include shimmer (automatic)
✅ Arrow only for urgent CTAs
❌ NEVER use `lg` size by default
❌ NEVER disable shimmer

---

## 🏷️ BADGE SYSTEM

### Variants
1. **Minimal** - No background, text only (section labels)
2. **Rounded** - 5px radius, optional background (category tags)
3. **Pill** - Fully rounded, bordered (step numbers, objectives)

### Sizes (Reduced Heights - Major Third Scale)
- `xs`: 9-10px font, 18px height - Info card labels (tiny)
- `sm`: 11px font, 23px height - Section labels, pills ⭐ MOST USED
- `md`: 13px font, 29px height - Emphasized badges
- `lg`: 15px font, 35px height - Large interactive badges

### Themes (8 Total)
- `neutral` - Black/white based (default for most use)
- `warm` - Warm editorial (#faf9f8 bg, #a6968e text) - Challenges, Methodology
- `brand` - Ken Bold Red (#b01f24) - High-priority CTAs
- `success` - Green for positive states
- `warning` - Amber for caution
- `error` - Red for negative states
- `info` - Blue for informational (design system extension)
- `muted` - Low contrast for subtle badges (design system extension)

### Shimmer Animation ⭐ BRAND SIGNATURE
```tsx
// ✨ Shimmer is OPTIONAL but recommended for interactive badges
<Badge variant="pill" size="sm" theme="warm" bordered shimmer>
  Step 1
</Badge>
```

**Shimmer Behavior:**
- **Warm light mode:** Warm-tinted shimmer `rgba(168,150,142,0.12)` - Subtle, elegant
- **Other themes:** White shimmer with varying opacity
- **Animation:** LEFT → RIGHT sweep (700ms ease-out)
- **On unhover:** Instant reset (NO reverse animation)
- **Technical:** Controlled via CSS `:hover` states, no inline transition on base

### Design Principles
✅ **Flexbox centering** - Perfect icon + text alignment with 6px gap
✅ **Reduced heights** - Sleeker appearance (18px/23px/29px/35px)
✅ **Warm-tinted shimmer** - For warm theme (not harsh dark overlay)
✅ **Interactive states** - Hover effects on interactive badges
❌ **NEVER** use without proper theme
❌ **NEVER** use arbitrary heights or sizing

### Usage Examples

**Section Labels (Minimal):**
```tsx
<Badge variant="minimal" size="sm" theme="neutral">
  Challenges
</Badge>
```

**Step Numbers (Pill with Shimmer):**
```tsx
<Badge variant="pill" size="sm" theme="warm" bordered shimmer>
  Step 1
</Badge>
```

**Interactive Objectives:**
```tsx
<Badge variant="pill" size="sm" theme="neutral" bordered interactive>
  Objective 1
</Badge>
```

**Status Indicators:**
```tsx
<Badge variant="rounded" size="sm" theme="success" bordered>
  Completed
</Badge>
```

**Category Tags:**
```tsx
<Badge variant="rounded" size="sm" theme="neutral" bordered>
  Strategy
</Badge>
```

### Common Patterns
- **Section eyebrows**: `minimal` + `xs` or `sm` + `neutral`
- **Step indicators**: `pill` + `sm` + `warm` + `bordered` + `shimmer`
- **Objectives**: `pill` + `sm` + `neutral` + `bordered` + `interactive`
- **Info labels**: `minimal` + `xs` + `neutral` (client info cards)
- **Status badges**: `rounded` + `sm` + semantic theme + `bordered`

---

## 🔗 LINK SYSTEM

### Three Components

1. **Button** - Primary actions
   ```tsx
   <Button variant="brand" size="md">Get Started</Button>
   ```

2. **CTALink** - Text + Arrow CTAs
   ```tsx
   <CTALink href="/demo">Schedule a Demo</CTALink>
   ```

3. **InlineLink** - Paragraph links
   ```tsx
   <InlineLink href="/about">Learn more</InlineLink>
   ```

### Hover Behavior
- **Button**: Background darkens, shimmer animates
- **CTALink**: Text + arrow both darken together (unified hover)
- **InlineLink**: Red underline + warm background (#fef2f2)

---

## 📏 SPACING SYSTEM

### Base-10 Scale
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-24: 96px
```

### Usage
✅ Use tokens: `gap-4`, `p-6`, `mt-8`
✅ Stick to scale increments
❌ NEVER use arbitrary values: `gap-[17px]`

---

## 📐 LAYOUT SYSTEM

### Section Structure
```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
    <h2 className="text-2xl mb-6">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

### Container Widths
- Mobile: `px-4`
- Tablet: `px-6` (md breakpoint)
- Desktop: `px-8` (lg breakpoint)
- Max-width: `max-w-7xl` (1280px)

---

## 🎭 COMPONENT PATTERNS

### Section Heading
```tsx
<h2 className="text-2xl font-normal mb-6 text-black">
  Section Title
</h2>
```

### Body Paragraph
```tsx
<p className="text-sm text-black/70 leading-relaxed">
  Body content using --text-sm (16px)
</p>
```

### Card
```tsx
<div className="bg-white border border-black/8 rounded-lg p-6">
  <h3 className="text-xl font-semibold mb-3">Card Title</h3>
  <p className="text-sm text-black/70">Card content</p>
</div>
```

---

## ⚡ ANIMATION SYSTEM

### Shimmer (ALWAYS ACTIVE)
- Duration: 700ms
- Direction: Left to right gradient sweep
- Trigger: Always active on hover
- GPU-accelerated: Yes

### ↗️ Arrow Animation (CONDITIONAL)
- Icon: `ArrowUpRight` from lucide-react (45° diagonal, NOT ArrowRight/ChevronRight)
- Pattern: 2-arrow replacement (two overlapping ArrowUpRight icons)
- Duration: 300ms with cubic-bezier(0.4, 0, 0.2, 1) easing
- On hover: Arrow 1 exits via `translate(20px, -20px)` + fade out, Arrow 2 enters from `translate(-20px, 20px)` to center + fade in
- On unhover: Smooth reverse back to default positions
- Trigger: `showArrow` prop on Button, or automatic in CTALink
- Use: Forms, urgent CTAs, schedule demos
- ❌ NEVER use ArrowRight, ChevronRight, or horizontal arrows

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce`

---

## 🚨 CRITICAL RULES (NEVER BREAK)

### Typography
❌ NEVER use `text-2xl`, `text-lg` Tailwind classes
✅ ALWAYS use CSS variables: `var(--text-2xl)`

### Colors
❌ NEVER use arbitrary colors: `bg-[#123456]`
✅ ALWAYS use design tokens: `bg-brand-red`

### Spacing
❌ NEVER use arbitrary spacing: `gap-[17px]`
✅ ALWAYS use scale: `gap-4`, `gap-6`

### Buttons
❌ NEVER disable shimmer
❌ NEVER use `lg` size by default
✅ ALWAYS use `md` size unless specified
✅ ALWAYS keep shimmer active

### Arrows
❌ NEVER use `ArrowRight` or `ChevronRight` — our brand arrow is `ArrowUpRight` (45° diagonal ↗️)
❌ NEVER manually create arrow icons — use `showArrow` prop on Button or `AnimatedArrow` component
✅ ALWAYS use the `showArrow` prop for urgency CTAs (forms, demos, sign-ups)
✅ CTALink includes `AnimatedArrow` automatically — no extra setup needed

### Sections
❌ NEVER use `--text-3xl` for section headings
✅ ALWAYS use `--text-2xl` for h2 section headings
✅ ONLY use `--text-3xl` for hero h1

---

## 📦 COMPONENT USAGE EXAMPLES

### Hero Section
```tsx
<section className="bg-black text-white py-24 md:py-32">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h1 className="text-3xl font-normal mb-6">
      Hero Title
    </h1>
    <p className="text-sm text-white/80 mb-8 max-w-2xl">
      Hero description
    </p>
    <Button variant="brand" size="md">
      Get Started
    </Button>
  </div>
</section>
```

### Content Section
```tsx
<section className="py-16 md:py-24 bg-warm-300">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h2 className="text-2xl font-normal mb-6">
      Section Heading
    </h2>
    <p className="text-sm text-black/70 mb-8">
      Section content
    </p>
  </div>
</section>
```

---

## 🎯 IMPORT CHECKLIST

When starting a new project, ensure you have:

✅ Imported `theme.css` with all design tokens
✅ Imported core components:
   - Button.tsx
   - CTALink.tsx  
   - InlineLink.tsx
   - AnimatedArrow.tsx (for arrow animation)
✅ Set up font: DM Sans
✅ Verified shimmer animation works
✅ Tested responsive breakpoints

---

## 🔄 WORKFLOW

1. **Read this file FIRST** before building any UI
2. **Reference token values** - never guess
3. **Use components** - don't recreate buttons/links
4. **Test shimmer** - ensure it's always active
5. **Check responsive** - mobile-first approach

---

## 📞 QUICK REFERENCE

**Default Button:**
```tsx
<Button variant="brand">Click Me</Button>
// ✅ Uses md size (42px)
// ✅ Shimmer active automatically
```

**Section Heading:**
```tsx
<h2 className="text-2xl">Title</h2>
// ✅ Uses --text-2xl (39px)
```

**Body Text:**
```tsx
<p className="text-sm">Content</p>
// ✅ Uses --text-sm (16px)
```

---

**Last Updated:** 2026-02-18  
**Design System Version:** 2.0  
**Repository:** vsoffice001-cloud/Design-System-vs-26
```

---

## 📝 USAGE INSTRUCTIONS

### For New Figma Make Projects:

1. **Import from GitHub:**
   - Go to your GitHub repo: `vsoffice001-cloud/Design-System-vs-26`
   - Import the following files into your new Figma Make project:
     - `/src/styles/theme.css`
     - `/src/app/components/Button.tsx`
     - `/src/app/components/CTALink.tsx`
     - `/src/app/components/InlineLink.tsx`
     - `/src/app/components/AnimatedArrow.tsx`
     - `/src/app/hooks/useShimmer.ts`

2. **Copy AI System Prompt:**
   - Copy the entire "AI SYSTEM PROMPT" section above
   - Paste it into your first message to the AI in the new project
   - The AI will automatically follow all design system rules

3. **Verify Setup:**
   - Check that buttons have shimmer effect
   - Verify typography uses CSS variables
   - Test that colors match the palette

---

## 🎨 COLOR PALETTE REFERENCE (QUICK COPY)

```css
/* Ken Bold Red - CTAs ONLY */
--brand-red: #b01f24;
--brand-red-hover: #8f181d;
--brand-red-active: #771419;

/* Black & White */
--black: #000000;
--white: #ffffff;

/* Black Tints */
--black-50: #fafafa;
--black-100: #f5f5f5;
--black-200: #e5e5e5;
--black-500: #737373;
--black-800: #262626;

/* Warm Editorial */
--warm-300: #f5f2f1;
--warm-500: #eae5e3;
--warm-600: #d9d1ce;
```

---

## 📏 TYPOGRAPHY SCALE (QUICK COPY)

```css
/* Major Third Scale */
--text-xs: 0.8rem;      /* 12.8px */
--text-sm: 1rem;        /* 16px ⭐ MOST USED */
--text-base: 1.25rem;   /* 20px */
--text-xl: 1.953rem;    /* 31.25px */
--text-2xl: 2.441rem;   /* 39px ⭐ SECTIONS */
--text-3xl: 3.052rem;   /* 48.8px - HERO ONLY */

/* Custom Sizes */
--text-2xs: 0.75rem;    /* 12px */
--text-nav: 0.875rem;   /* 14px - Navigation */
--text-compact: 0.875rem; /* 14px - Compact body */
```

---

## 🔘 BUTTON SIZES (QUICK COPY)

```tsx
// Small - 36px height, 14px font
<Button size="sm">Navbar CTA</Button>

// Medium (DEFAULT) - 42px height, 16px font ⭐
<Button size="md">Standard Action</Button>

// Large - 48px height, 18px font (Heroes ONLY)
<Button size="lg">Homepage Hero</Button>

// Extra Large - 56px height, 18px font (Rare)
<Button size="xl">Maximum Impact</Button>
```

---

**Status:** ✅ READY FOR AI IMPORT  
**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Use:** Copy "AI SYSTEM PROMPT" section into new Figma Make projects