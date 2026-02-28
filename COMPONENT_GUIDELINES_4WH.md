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

### CARD COMPONENT (Inline Pattern)

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

## 🎨 ICON COLOR SYSTEM

### WHY
Without a classification system, developers make ad-hoc icon color decisions. A TrendingUp icon might be black in one place and purple in another. The icon color system enforces one rule: "Does this icon represent CONTENT or a UI CONTROL?"

### WHAT
Two semantic constants: `iconColors.content` (#806ce0 periwinkle) for content/feature icons, `iconColors.utility` (#737373 gray) for navigation/control icons.

### WHEN
✅ Use for EVERY Lucide icon placement — no exceptions
✅ Use `iconColors.content` for feature icons (Sparkles, TrendingUp, Target)
✅ Use `iconColors.utility` for control icons (ChevronDown, X, Search, Filter)
✅ Use `iconColors.content` for ChevronRight when used as a decorative bullet pointer

### WHEN NOT
❌ Don't use purple (#806ce0) as solid backgrounds, full-opacity text, or borders
❌ Don't use arbitrary icon colors — always reference iconColors
❌ Don't use brand red for icons (reserved for CTAs only)

### HOW
```tsx
import { iconColors } from '@/app/components/iconColors';

// Content icon (feature/data)
<BarChart3 color={iconColors.content} size={20} />

// Utility icon (navigation/control)
<ChevronDown color={iconColors.utility} size={20} />

// Icon container with 10% opacity background
<div style={{ background: 'rgba(128, 108, 224, 0.1)' }}>
  <Target color={iconColors.content} size={24} />
</div>
```

---

## 📐 SECTIONHEADING COMPONENT

### WHY
Section headings need consistent font sizes, font families, line heights, and responsive scaling. Without SectionHeading, every section hand-codes these values differently.

### WHAT
A heading molecule that pairs an optional eyebrow label with a semantically correct heading tag (h1/h2/h3). Enforces Major Third scale and the serif/sans font rule.

### WHEN
✅ Use for every section title on a page
✅ Use `level={1}` for hero headline ONLY (one per page)
✅ Use `level={2}` for major section headings (multiple per page)
✅ Use `level={3}` for subsection headings within a section
✅ Use `eyebrow` prop for category labels above headings

### WHEN NOT
❌ Don't use `level={1}` for anything other than the hero
❌ Don't use for inline text emphasis (use `<strong>`)
❌ Don't use for badge/label text (use Badge or SectionLabel)
❌ Don't use for navigation items

### HOW
```tsx
import { SectionHeading } from '@/app/components/SectionHeading';

// Section heading with eyebrow
<SectionHeading level={2} eyebrow="MARKET INSIGHTS" align="center">
  AI in Healthcare: A $45B Opportunity
</SectionHeading>

// Left-aligned subsection
<SectionHeading level={3} align="left">
  Regional Analysis
</SectionHeading>

// Hero (once per page)
<SectionHeading level={1} eyebrow="GLOBAL AI MARKET 2024">
  The Definitive Healthcare AI Report
</SectionHeading>
```

**Props:**
- `level`: 1 | 2 | 3 (default: 2)
- `children`: heading text
- `eyebrow`: optional small text above heading
- `align`: 'left' | 'center' | 'right' (default: 'center')
- `className`: additional CSS classes

---

## 📦 CARD COMPONENT (Reusable)

### WHY
Content blocks need consistent border-radius, shadow, padding, and hover behavior. Without Card, every content box is hand-coded with inconsistent styling.

### WHAT
A generic content container with built-in variant, padding, shadow, and hover systems. Always uses 10px border-radius (large tier).

### WHEN
✅ Use for grouped information in grids (features, FAQs, metrics)
✅ Use `variant="white"` on warm/colored section backgrounds
✅ Use `variant="warm"` on white section backgrounds
✅ Use `hover` prop for interactive card grids
✅ Use `shadow="sm"` for subtle cards, `shadow="lg"` for featured cards

### WHEN NOT
❌ Don't use for full-width page sections (use SectionWrapper)
❌ Don't use for inline elements (use Badge or SectionLabel)
❌ Don't mix border-radius — Card always uses 10px
❌ Don't exceed 6 cards per row without adjusting the grid

### HOW
```tsx
import { Card } from '@/app/components/Card';

// Standard feature card
<Card variant="white" padding="md" shadow="sm" hover>
  <h3 className="text-base font-semibold mb-3">Feature Title</h3>
  <p className="text-sm text-black/70">Description...</p>
</Card>

// Warm background card (for white sections)
<Card variant="warm" padding="lg" shadow="none">
  <p className="text-sm">Testimonial text...</p>
</Card>

// Outlined card
<Card variant="outlined" padding="sm">
  <p className="text-sm">Compact content</p>
</Card>
```

**Props:**
- `variant`: 'white' | 'warm' | 'outlined' (default: 'white')
- `padding`: 'sm' (16px) | 'md' (24px) | 'lg' (32px) (default: 'md')
- `shadow`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `hover`: boolean (default: false)
- `className`: additional CSS classes

---

## 📐 SECTIONWRAPPER COMPONENT

### WHY
Page sections need consistent background alternation, vertical rhythm, horizontal gutters, and max-width constraints. Without SectionWrapper, every section has different padding, widths, and spacing.

### WHAT
A layout wrapper that wraps content in a `<section>` with background color, vertical padding, horizontal padding, and max-width. Defines the repeating page skeleton.

### WHEN
✅ Use for EVERY top-level section on a page
✅ Alternate backgrounds: white → warm → white → warm → black (CTA)
✅ Use `spacing="lg"` for most sections (default)
✅ Use `maxWidth="content"` (1000px) for pure reading sections
✅ Use `maxWidth="wide"` (1200px) for sections with grids/sidebars (default)
✅ Use `id` prop for anchor link navigation

### WHEN NOT
❌ Don't use for inner card containers (use Card)
❌ Don't use for inline content blocks
❌ Don't use for fixed/sticky elements (they have their own positioning)
❌ Don't skip background alternation (breaks visual rhythm)

### HOW
```tsx
import { SectionWrapper } from '@/app/components/SectionWrapper';
import { SectionHeading } from '@/app/components/SectionHeading';

// Standard section
<SectionWrapper background="warm" spacing="lg" id="highlights">
  <SectionHeading level={2} eyebrow="KEY FINDINGS">
    Report Highlights
  </SectionHeading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Cards */}
  </div>
</SectionWrapper>

// Edge-to-edge section (sidebar layout)
<SectionWrapper className="!py-0" background="white">
  <div className="flex">
    <aside className="border-r py-10">sidebar</aside>
    <main className="py-10 px-6">content</main>
  </div>
</SectionWrapper>
```

**Props:**
- `background`: 'white' | 'warm' | 'black' | 'periwinkle' | 'coral' (default: 'white')
- `spacing`: 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')
- `maxWidth`: 'content' (1000px) | 'wide' (1200px) | 'full' (default: 'wide')
- `className`: additional CSS classes on the `<section>`
- `id`: HTML id for anchor linking

---

## ⬆️ SCROLLTOTOP COMPONENT

### WHY
Long-form content pages can exceed 10,000px. Without a scroll-to-top button, users must manually scroll back, creating friction and increasing bounce rate.

### WHAT
A circular floating action button fixed to the bottom-right. Appears after 400px of scroll, uses Motion for enter/exit animations.

### WHEN
✅ Use on any page where content exceeds ~2 viewport heights
✅ Use on report landing pages, case studies, long documentation
✅ Place once at the page layout level (self-positions via CSS fixed)

### WHEN NOT
❌ Don't use on short pages that don't scroll
❌ Don't use on pages with sticky sidebar navigation
❌ Don't change the color — black is correct (92% utility tier)

### HOW
```tsx
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <>
      <main>...</main>
      <ScrollToTop />
    </>
  );
}
```

No props required.

---

## 📊 SCROLLPROGRESS COMPONENT (Generic)

### WHY
Long-form content users need a visual signal of scroll depth. The progress bar subtly encourages continued scrolling toward conversion CTAs at the page bottom.

### WHAT
A 3px bar fixed to the top of the viewport. Fills left-to-right based on total document scroll. Uses brand red.

**Note:** `ReadingProgressBar.tsx` is the case-study-specific version (uses `useSectionProgress` + `useHeroVisibility`). `ScrollProgress.tsx` is the generic version for any page.

### WHEN
✅ Use on report landing pages, case studies, long documentation
✅ Use when you want generic scroll-based progress (not section-specific)
✅ Place once before any other content (self-positions via CSS fixed)

### WHEN NOT
❌ Don't use on short pages
❌ Don't use on dashboards with fixed-height panels
❌ Don't use alongside ReadingProgressBar (pick one)

### HOW
```tsx
import { ScrollProgress } from '@/app/components/ScrollProgress';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <header>...</header>
      <main>...</main>
    </>
  );
}
```

No props required.

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

### "Which Layout Component Should I Use?"

```
Am I wrapping a full page section?
├─ YES → Use <SectionWrapper>
└─ NO ↓

Am I wrapping content in a bounded box?
├─ YES → Use <Card>
└─ NO ↓

Am I creating a section title?
├─ YES → Use <SectionHeading>
└─ NO → Use plain HTML elements
```

---

### "Which Scroll Component Should I Use?"

```
Do I need a scroll-to-top button?
├─ YES → Use <ScrollToTop>
└─ NO ↓

Do I need a generic scroll progress bar?
├─ YES → Use <ScrollProgress>
└─ NO ↓

Do I need section-specific reading progress?
├─ YES → Use <ReadingProgressBar>
└─ NO → Neither needed
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

### Icons
❌ Using arbitrary icon colors instead of `iconColors.content` / `iconColors.utility`
❌ Using brand red for icons
❌ Using purple as solid backgrounds or borders

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

- [ ] All headings use CSS variables or SectionHeading component
- [ ] All buttons have shimmer active
- [ ] Brand red used sparingly (CTAs only)
- [ ] Spacing uses base-10 scale tokens
- [ ] Responsive breakpoints tested
- [ ] Arrow animation only on urgent CTAs
- [ ] Section backgrounds alternate (white/warm)
- [ ] Typography follows Major Third scale
- [ ] No arbitrary colors or sizes
- [ ] All icons use `iconColors.content` or `iconColors.utility`
- [ ] Cards use `<Card>` component (not hand-coded containers)
- [ ] Page sections use `<SectionWrapper>` (not hand-coded `<section>`)

---

**Last Updated:** 2026-02-28  
**Design System Version:** 3.3  
**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Use:** Reference this guide when building new components/pages
