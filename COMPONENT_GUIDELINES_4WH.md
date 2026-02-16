# 🧩 COMPONENT GUIDELINES - 4W+H Framework
**Complete Reference for All Design System Components**

---

## 📌 PURPOSE
This document provides the 4W+H (Why, What, When, When Not, How) framework for EVERY component in the design system. Use this as a reference when building new pages.

---

## 🔘 BUTTON COMPONENT

### WHY
Buttons are the primary interaction mechanism for user actions. Consistent button design ensures users immediately recognize clickable actions and understand their hierarchy.

### WHAT
A versatile button component with 4 variants (primary, brand, secondary, ghost), 4 sizes (sm, md, lg, xl), and signature shimmer animation that's always active.

### WHEN
✅ Use for primary actions (submit forms, CTAs, navigation)
✅ Use `brand` variant for conversion moments (max 1-2 per screen)
✅ Use `md` size for 90% of buttons (default)
✅ Use `sm` size for navbar CTAs and TOC buttons
✅ Use `lg` size ONLY for homepage heroes

### WHEN NOT
❌ Don't use `lg` size by default (dilutes impact)
❌ Don't disable shimmer animation (brand signature)
❌ Don't use multiple brand buttons in same section
❌ Don't use for inline text links (use InlineLink instead)

### HOW
```tsx
// Standard CTA (most common)
<Button variant="brand" size="md">
  Get Started
</Button>

// With arrow (forms/urgent CTAs)
<Button variant="brand" size="md" showArrow>
  Schedule Demo
</Button>

// Navbar button
<Button variant="brand" size="sm">
  Sign Up
</Button>

// Secondary action
<Button variant="secondary" size="md">
  Learn More
</Button>
```

**Props:**
- `variant`: 'primary' | 'brand' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `showArrow`: boolean (use for urgent CTAs)
- `icon`: ReactNode (lucide-react icons)
- `loading`: boolean
- `disabled`: boolean

---

## 🔗 CTALINK COMPONENT

### WHY
Text-based CTAs with arrows need unified hover behavior. This component ensures the text and arrow darken together, creating a cohesive interactive experience.

### WHAT
A text + animated arrow link component specifically for call-to-action links. Features unified hover state where both text and arrow transition together.

### WHEN
✅ Use for text-based CTAs (e.g., "Schedule a Demo →")
✅ Use in hero sections for secondary CTAs
✅ Use in content sections for "Learn More" links
✅ Use when you need text + arrow combination

### WHEN NOT
❌ Don't use for paragraph inline links (use InlineLink)
❌ Don't use for primary buttons (use Button)
❌ Don't use in navigation menus (use InlineLink)

### HOW
```tsx
// Hero section CTA
<CTALink href="/demo" className="text-white">
  Schedule a Demo
</CTALink>

// Content section CTA
<CTALink href="/features">
  Explore All Features
</CTALink>

// With custom styling
<CTALink 
  href="/pricing" 
  className="text-brand-red font-semibold"
>
  View Pricing Plans
</CTALink>
```

**Props:**
- `href`: string (required)
- `children`: ReactNode (the link text)
- `className`: string (optional styling)

---

## 🔗 INLINELINK COMPONENT

### WHY
Paragraph links need distinct visual treatment to stand out from surrounding text while maintaining readability. The red underline + warm hover creates a polished, editorial feel.

### WHAT
An inline text link component for use within paragraphs. Features red underline and warm background hover effect (#fef2f2).

### WHEN
✅ Use within paragraph text
✅ Use for "Learn more" references
✅ Use for cross-references between sections
✅ Use in table of contents items

### WHEN NOT
❌ Don't use for standalone CTAs (use CTALink or Button)
❌ Don't use for primary navigation (use nav links)
❌ Don't use when you need an arrow (use CTALink)

### HOW
```tsx
// Within paragraph
<p className="text-sm">
  Our methodology is based on industry best practices.{' '}
  <InlineLink href="/methodology">Learn more about our approach</InlineLink>
  {' '}in our comprehensive guide.
</p>

// In list items
<li className="text-sm">
  <InlineLink href="/resources">Download resources</InlineLink>
</li>

// Table of contents
<InlineLink href="#section-2">
  Client Context & Background
</InlineLink>
```

**Props:**
- `href`: string (required)
- `children`: ReactNode (the link text)

---

## ➡️ ANIMATEDARROW COMPONENT

### WHY
Arrow animations provide visual feedback for directional navigation and urgent CTAs. The subtle slide animation guides users toward important actions.

### WHAT
An animated arrow icon that slides right on hover. Used exclusively with CTAs that redirect to forms or urgent pages.

### WHEN
✅ Use with CTALink component
✅ Use with Button when `showArrow` is true
✅ Use for form submissions ("Submit →")
✅ Use for urgent CTAs ("Schedule Demo →")

### WHEN NOT
❌ Don't use for simple navigation links
❌ Don't use within paragraph text
❌ Don't use without a corresponding CTA

### HOW
```tsx
// Standalone (rare - usually via CTALink)
<AnimatedArrow className="text-brand-red" />

// With CTALink (automatic)
<CTALink href="/demo">
  Schedule Demo {/* Arrow auto-included */}
</CTALink>

// With Button
<Button variant="brand" showArrow>
  Get Started {/* Arrow auto-included */}
</Button>
```

**Props:**
- `className`: string (for color/size customization)

---

## 📊 SECTION COMPONENTS

### HERO SECTION

#### WHY
The hero section is the first impression - it must immediately communicate value and guide users to primary actions.

#### WHAT
Full-width section with large heading (--text-3xl), subheading, and primary CTA. Always uses black background with white text.

#### WHEN
✅ Use as the first section of any page
✅ Use --text-3xl for h1 (ONLY place to use this size)
✅ Use brand button for primary CTA

#### WHEN NOT
❌ Don't use --text-3xl anywhere else
❌ Don't use warm background (always black)
❌ Don't include more than 2 CTAs

#### HOW
```tsx
<section className="bg-black text-white py-24 md:py-32">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h1 className="text-3xl font-normal mb-6">
      Transform Your Business
    </h1>
    <p className="text-sm text-white/80 mb-8 max-w-2xl">
      Comprehensive case study analysis
    </p>
    <div className="flex gap-4">
      <Button variant="brand" size="md">
        Get Started
      </Button>
      <CTALink href="/demo" className="text-white">
        Watch Demo
      </CTALink>
    </div>
  </div>
</section>
```

---

### CONTENT SECTION

#### WHY
Content sections provide structured information with clear hierarchy and alternating backgrounds for visual rhythm.

#### WHAT
Standard section with h2 heading (--text-2xl), body text (--text-sm), and optional card grid. Alternates between white and warm-300 backgrounds.

#### WHEN
✅ Use --text-2xl for h2 section headings
✅ Use --text-sm for body paragraphs
✅ Alternate backgrounds: white → warm-300 → white

#### WHEN NOT
❌ Don't use --text-3xl for section headings
❌ Don't use arbitrary font sizes
❌ Don't skip background alternation

#### HOW
```tsx
<section className="py-16 md:py-24 bg-warm-300">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h2 className="text-2xl font-normal mb-6">
      Section Heading
    </h2>
    <p className="text-sm text-black/70 mb-8">
      Section description
    </p>
    {/* Content grid/cards */}
  </div>
</section>
```

---

### CARD COMPONENT

#### WHY
Cards group related information and provide visual containers for modular content.

#### WHAT
White background container with border, rounded corners, and consistent padding. Used for challenges, features, testimonials.

#### WHEN
✅ Use for grouped information (3-4 items)
✅ Use --text-base (20px) for card titles when 4+ cards
✅ Use --text-lg (25px) for card titles when 2-3 cards
✅ Use --text-compact (14px) for card body when 4+ cards

#### WHEN NOT
❌ Don't use for single items (use section instead)
❌ Don't mix card title sizes within same section
❌ Don't exceed 6 cards per row without grid adjustment

#### HOW
```tsx
{/* 4+ Cards - Compact sizing */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map(card => (
    <div key={card.id} className="bg-white border border-black/8 rounded-lg p-6">
      <h3 className="text-base font-semibold mb-3">
        {card.title}
      </h3>
      <p className="text-compact text-black/70">
        {card.description}
      </p>
    </div>
  ))}
</div>

{/* 2-3 Cards - Larger sizing */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {cards.map(card => (
    <div key={card.id} className="bg-white border border-black/8 rounded-lg p-8">
      <h3 className="text-lg font-semibold mb-4">
        {card.title}
      </h3>
      <p className="text-sm text-black/70">
        {card.description}
      </p>
    </div>
  ))}
</div>
```

---

## 📱 NAVBAR COMPONENT

### WHY
Navigation provides consistent site-wide wayfinding. The two-state system (scrolled/top) creates visual hierarchy and saves space.

### WHAT
Fixed top navbar with two states: expanded (at top) and compact (scrolled). Uses black background with white text.

### WHEN
✅ Use on every page for consistency
✅ Use --text-2xs (12px) for nav links
✅ Use Button size="sm" for navbar CTA
✅ Show expanded state at page top
✅ Collapse to compact when user scrolls down

### WHEN NOT
❌ Don't use transparent background
❌ Don't use large buttons in navbar
❌ Don't exceed 5-6 nav links

### HOW
```tsx
<nav className={`fixed top-0 w-full z-50 transition-all ${
  isScrolled ? 'h-16' : 'h-20'
} bg-black text-white`}>
  <div className="container mx-auto px-4 h-full flex items-center justify-between">
    <div className="font-bold">Logo</div>
    <div className="flex items-center gap-6">
      <a href="#features" className="text-2xs hover:text-white/80">
        Features
      </a>
      <a href="#pricing" className="text-2xs hover:text-white/80">
        Pricing
      </a>
      <Button variant="brand" size="sm">
        Get Started
      </Button>
    </div>
  </div>
</nav>
```

---

## 📋 TABLE OF CONTENTS

### WHY
Long-form content needs navigation. TOC provides quick access to sections and shows reading progress.

### WHAT
Sticky sidebar navigation with numbered items, active state highlighting, and compact "Unlock" CTA.

### WHEN
✅ Use for pages with 5+ sections
✅ Use --text-nav (14px) for TOC item titles
✅ Use Button size="sm" for "Unlock" CTA
✅ Highlight active section as user scrolls

### WHEN NOT
❌ Don't use on short pages (< 5 sections)
❌ Don't use large font sizes
❌ Don't show on mobile (use hamburger menu)

### HOW
```tsx
<div className="sticky top-24 hidden lg:block">
  <div className="border border-black/10 rounded-lg p-6">
    <h3 className="text-xs uppercase tracking-wide mb-4">
      Table of Contents
    </h3>
    {sections.map((section, idx) => (
      <InlineLink 
        key={section.id}
        href={`#${section.id}`}
        className={activeSection === section.id ? 'font-semibold' : ''}
      >
        <span className="text-nav">
          {String(idx + 1).padStart(2, '0')}. {section.title}
        </span>
      </InlineLink>
    ))}
    <div className="mt-6 pt-6 border-t border-black/10">
      <p className="text-nav mb-3">
        165+ pages of comprehensive analysis
      </p>
      <Button variant="brand" size="sm" fullWidth>
        Unlock Full Report
      </Button>
    </div>
  </div>
</div>
```

---

## 🎨 LAYOUT PATTERNS

### CONTAINER

#### WHY
Consistent container widths create visual rhythm and ensure content is readable across devices.

#### WHAT
Responsive container with max-width and horizontal padding.

#### HOW
```tsx
<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
  {/* Content */}
</div>
```

**Breakpoints:**
- Mobile: px-4 (16px)
- Tablet: px-6 (24px)
- Desktop: px-8 (32px)
- Max-width: max-w-7xl (1280px)

---

### SECTION SPACING

#### WHY
Consistent vertical rhythm creates comfortable reading flow.

#### WHAT
Responsive padding for section spacing.

#### HOW
```tsx
<section className="py-16 md:py-24">
  {/* Content */}
</section>
```

**Values:**
- Mobile: py-16 (64px)
- Desktop: py-24 (96px)

---

### GRID LAYOUTS

#### WHY
Grid systems provide flexible, responsive layouts for card-based content.

#### WHAT
CSS Grid with responsive columns.

#### HOW
```tsx
{/* 3-column grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

{/* 2-column grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

{/* 4-column grid (dense) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## ✨ ANIMATION COMPONENTS

### SHIMMER EFFECT

#### WHY
Brand signature animation that adds polish and sets us apart from competitors.

#### WHAT
Always-active gradient sweep animation on all buttons.

#### WHEN
✅ ALWAYS active on buttons (automatic)
✅ Respects prefers-reduced-motion

#### WHEN NOT
❌ NEVER disable (brand signature)

#### HOW
```tsx
// Automatic - no prop needed
<Button variant="brand">
  Click Me {/* Shimmer animates on hover */}
</Button>
```

---

### ARROW ANIMATION

#### WHY
Directional feedback for urgent CTAs guides users toward conversion actions.

#### WHAT
Subtle slide-right animation (4px translateX) on hover.

#### WHEN
✅ Use for form CTAs ("Submit →")
✅ Use for schedule/demo CTAs
✅ Use for urgent conversion moments

#### WHEN NOT
❌ Don't use for simple navigation
❌ Don't use on every link

#### HOW
```tsx
// Via Button
<Button variant="brand" showArrow>
  Schedule Demo
</Button>

// Via CTALink
<CTALink href="/demo">
  Book a Call
</CTALink>
```

---

## 🎯 DECISION FLOWCHARTS

### "Which Link Component Should I Use?"

```
Is it a primary action (form submit, main CTA)?
├─ YES → Use <Button>
└─ NO ↓

Is it text + arrow CTA ("Learn More →")?
├─ YES → Use <CTALink>
└─ NO ↓

Is it within paragraph text?
├─ YES → Use <InlineLink>
└─ NO → Use <CTALink> or <Button>
```

---

### "Which Button Size Should I Use?"

```
Is it in the navbar?
├─ YES → Use size="sm"
└─ NO ↓

Is it the homepage hero?
├─ YES → Use size="lg"
└─ NO ↓

Is it anywhere else?
└─ YES → Use size="md" (DEFAULT)
```

---

### "Which Typography Token Should I Use?"

```
Is it the hero h1?
├─ YES → Use var(--text-3xl) 48.8px
└─ NO ↓

Is it a section h2 heading?
├─ YES → Use var(--text-2xl) 39px
└─ NO ↓

Is it a subsection h3?
├─ YES → Use var(--text-xl) 31.25px
└─ NO ↓

Is it body paragraph text?
├─ YES → Use var(--text-sm) 16px
└─ NO ↓

Is it a TOC item or navbar link?
├─ YES → Use var(--text-nav) 14px
└─ NO ↓

Is it a compact card (4+ cards)?
├─ YES → Use var(--text-compact) 14px
└─ NO → Use var(--text-sm) 16px
```

---

## 🚨 COMMON MISTAKES TO AVOID

### Typography
❌ Using `text-2xl` Tailwind class instead of `var(--text-2xl)`
❌ Using `--text-3xl` for section headings (only for hero h1)
❌ Using arbitrary px values: `fontSize: '24px'`

### Colors
❌ Using arbitrary hex: `bg-[#123456]`
❌ Using purple/blue/green (not in palette)
❌ Overusing brand red (CTAs only)

### Buttons
❌ Disabling shimmer animation
❌ Using `lg` size by default
❌ Multiple brand buttons in same section

### Spacing
❌ Using arbitrary values: `gap-[17px]`
❌ Not using base-10 scale
❌ Inconsistent section padding

---

## ✅ PRODUCTION CHECKLIST

Before pushing to production, verify:

- [ ] All headings use CSS variables (no Tailwind size classes)
- [ ] All buttons have shimmer active
- [ ] Brand red used sparingly (CTAs only)
- [ ] Spacing uses base-10 scale tokens
- [ ] Responsive breakpoints tested
- [ ] Arrow animation only on urgent CTAs
- [ ] Section backgrounds alternate (white/warm)
- [ ] Typography follows Major Third scale
- [ ] No arbitrary colors or sizes

---

**Last Updated:** 2026-02-13  
**Design System Version:** 2.0  
**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Use:** Reference this guide when building new components/pages
