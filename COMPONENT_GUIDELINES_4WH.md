# 🧩 COMPONENT GUIDELINES - 4W+H Framework
**Complete Reference for All Design System Components**

---

## 📌 PURPOSE
This document provides the 4W+H (Why, What, When, When Not, How) framework for EVERY component in the design system. Use this as a reference when building new pages.

**Companion docs:**
- `design-system-checklist.md` — File map with reading order (which files to import, in what order)
- `DESIGN_SYSTEM_AI_CONTEXT.md` — Source of truth for rules, tokens, page assembly
- `QUICK_START_PROMPT.md` — Copy-paste prompt for fast Figma Make sessions

---

## 🔘 BUTTON COMPONENT

### WHY
Buttons are the primary interaction mechanism for user actions. Consistent button design ensures users immediately recognize clickable actions and understand their hierarchy.

### WHAT
A versatile button component with 4 variants (primary, brand, secondary, ghost), 4 sizes (sm, md, lg, xl), and signature shimmer animation that's always active. The secondary variant features a **two-state design** (v3.3) that transitions from neutral to brand-red on hover.

### WHEN
✅ Use for primary actions (submit forms, CTAs, navigation)
✅ Use `brand` variant for conversion moments (max 1-2 per screen)
✅ Use `md` size for 90% of buttons (default)
✅ Use `sm` size for navbar CTAs and TOC buttons
✅ Use `lg` size ONLY for homepage heroes
✅ Use `secondary` for supporting actions alongside brand/primary buttons

### WHEN NOT
❌ Don't use `lg` size by default (dilutes impact)
❌ Don't disable shimmer animation (brand signature)
❌ Don't use multiple brand buttons in same section
❌ Don't use for inline text links (use InlineLink instead)

### HOW
```tsx
<Button variant="brand" size="md">Get Started</Button>
<Button variant="brand" size="md" showArrow>Schedule Demo</Button>
<Button variant="secondary" size="md">Learn More</Button>
```

### Secondary Variant — Two-State Design (v3.3)

The secondary button (light background) uses a deliberate two-state interaction pattern:

| Property | State 1 (Resting) | State 2 (Hover) |
|----------|-------------------|------------------|
| Border | `rgba(0,0,0,0.12)` neutral | `#b01f24` brand red |
| Text color | `rgba(0,0,0,0.7)` neutral | `#b01f24` brand red |
| Shimmer | White sweep (`rgba(255,255,255,0.8)`) | Red-tinted sweep (`rgba(176,31,36,0.08)`) |
| Box shadow | `0 2px 8px rgba(0,0,0,0.04)` subtle | `0 4px 16px rgba(176,31,36,0.12)` red-tinted |
| Transition | — | `300ms ease-out` on color, border, shadow |

**WHY this design:** The resting state is intentionally muted so it doesn't compete with brand/primary buttons. On hover, the brand-red reveal creates a "warming" effect that signals the button's importance without overwhelming the page at rest.

**Arrow behavior:** When `showArrow` is true, the arrow color also transitions:
- Resting: `rgba(0,0,0,0.7)` (matches text)
- Hover: `var(--brand-red)` (matches text)

**Dark mode secondary** (`background="dark"`) is unchanged: `bg-white/10`, white text, white border.

```tsx
// Light background (two-state)
<Button variant="secondary">Learn More</Button>

// With arrow (two-state + arrow color transition)
<Button variant="secondary" showArrow>Explore Features</Button>

// Dark background (unchanged)
<Button variant="secondary" background="dark">Learn More</Button>
```

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

### WHEN NOT
❌ Don't use for paragraph inline links (use InlineLink)
❌ Don't use for primary buttons (use Button)
❌ Don't use in navigation menus (use InlineLink)

### HOW
```tsx
<CTALink href="/demo" className="text-white">Schedule a Demo</CTALink>
<CTALink href="/features">Explore All Features</CTALink>
```

---

## 🔗 INLINELINK COMPONENT

### WHY
Paragraph links need distinct visual treatment to stand out from surrounding text while maintaining readability.

### WHAT
An inline text link component for use within paragraphs. Features red underline and warm background hover effect.

### WHEN
✅ Use within paragraph text
✅ Use for "Learn more" references
✅ Use for cross-references between sections

### WHEN NOT
❌ Don't use for standalone CTAs (use CTALink or Button)
❌ Don't use for primary navigation
❌ Don't use when you need an arrow (use CTALink)

### HOW
```tsx
<p>Our methodology is based on industry best practices.{' '}
  <InlineLink href="/methodology">Learn more about our approach</InlineLink>
  {' '}in our comprehensive guide.
</p>
```

---

## ➡️ ANIMATEDARROW COMPONENT

### WHY
Arrow animations provide visual feedback for directional navigation and urgent CTAs.

### WHAT
An animated arrow icon that slides right on hover. Used exclusively with CTAs that redirect to forms or urgent pages.

### WHEN
✅ Use with CTALink component
✅ Use with Button when `showArrow` is true
✅ Use for form submissions and urgent CTAs

### WHEN NOT
❌ Don't use for simple navigation links
❌ Don't use within paragraph text
❌ Don't use without a corresponding CTA

### HOW
```tsx
<CTALink href="/demo">Schedule Demo</CTALink>
<Button variant="brand" showArrow>Get Started</Button>
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

## 📊 SECTION COMPONENTS

### HERO SECTION

✅ Use `--text-3xl` for h1 (ONLY place to use this size)
✅ Always black background with white text
✅ Max 2 CTAs

### CONTENT SECTION

✅ Use `--text-2xl` for h2 section headings
✅ Use `--text-sm` for body paragraphs
✅ Alternate backgrounds: white → warm-300 → white

### CARD COMPONENT (Inline Pattern)

✅ Use `--text-base` (20px) for card titles when 4+ cards
✅ Use `--text-lg` (25px) for card titles when 2-3 cards
✅ Use `--text-compact` (14px) for card body when 4+ cards

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

## 📱 NAVBAR COMPONENT

### WHY
Navigation provides consistent site-wide wayfinding. The two-state system creates visual hierarchy and saves space.

### WHAT
Fixed top navbar with two states: expanded (at top) and compact (scrolled). Uses black background with white text.

### WHEN
✅ Use on every page for consistency
✅ Use `--text-2xs` (12px) for nav links
✅ Use Button `size="sm"` for navbar CTA

### WHEN NOT
❌ Don't use transparent background
❌ Don't use large buttons in navbar
❌ Don't exceed 5-6 nav links

---

## 📋 TABLE OF CONTENTS

### WHY
Long-form content needs navigation. TOC provides quick access and shows reading progress.

### WHEN
✅ Use for pages with 5+ sections
✅ Use `--text-nav` (14px) for TOC item titles
✅ Highlight active section as user scrolls

### WHEN NOT
❌ Don't use on short pages (< 5 sections)
❌ Don't show on mobile (use hamburger menu)

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

## 📦 CONTAINER COMPONENT

### WHY
Repeated `max-w-[var(--container-content)] mx-auto px-4 sm:px-6 md:px-8` patterns across every section violate DRY and create inconsistency risks. A single wrapper component provides one source of truth for content width and padding.

### WHAT
A semantic layout wrapper with 5 width presets mapping to CSS variables:
- `page` (1200px) — Full page shell, hero backgrounds, navbar
- `content` (1000px, default) — Standard sections, card grids
- `narrow` (900px) — CTAs, testimonials, focused content
- `prose` (700px) — Long-form text, paragraph measure
- `compact` (600px) — Descriptions, methodology text

### WHEN
✅ Use as the outermost content wrapper in every section
✅ Use when you need consistent responsive padding (px-4 / px-6 / px-8)
✅ Use to enforce max-width constraints

### WHEN NOT
❌ Don't use for elements that need full-bleed (backgrounds, hero images)
❌ Don't nest Containers inside Containers
❌ Don't use for modal/overlay content (modals have their own width system)

### HOW
```tsx
import { Container } from './Container';

<Container>                          {/* Default 1000px */}
  <h2>Section Heading</h2>
</Container>

<Container width="narrow">           {/* 900px for CTAs */}
  <CTABlock />
</Container>

<Container as="article" width="prose" className="py-20">
  <p>Long-form content...</p>
</Container>
```

---

## 🃏 RESOURCECARD COMPONENT

### WHY
A resources/blog grid needs visual variety — a single card style creates monotony in a Masonry layout. Different content types need distinct visual emphasis while maintaining design system consistency.

### WHAT
A versatile content card with 7 layout variants, 2 card styles, and 2 color modes:

**Variants:** `standard`, `full-featured`, `minimal`, `category-featured`, `clean`, `featured-focus`, `latest`
**Card Styles:** `default` (no border), `bordered` (frosted glass border)
**Color Modes:** `light`, `dark`

### WHEN
✅ Use in ResourcesSection Masonry grid
✅ Use for blog listings, article grids, case study collections
✅ Mix 3-4 variant types within a grid for visual rhythm
✅ Use `full-featured` for the primary/hero card (max 1 per grid)
✅ Use `clean` for text-heavy content that doesn't need an image

### WHEN NOT
❌ Don't use for product/e-commerce cards (different purpose)
❌ Don't use all cards as `full-featured` — creates visual overload
❌ Don't mix more than 4 variant types in one grid (creates chaos)
❌ Don't use outside of a grid context (cards need siblings for visual rhythm)

### HOW
```tsx
import { ResourceCard } from './ResourceCard';

<ResourceCard
  image="https://..."
  category="TECHNOLOGY"
  date="Jan 15, 2024"
  title="Article Title"
  description="Brief description..."
  variant="standard"
  cardStyle="bordered"
  mode="dark"
/>

<ResourceCard
  image="https://..."
  category="INSIGHTS"
  date="Jan 18, 2024"
  title="Featured Article"
  description="..."
  type="article"
  isFeatured={true}
  variant="full-featured"
  mode="dark"
/>
```

---

## ⚙️ SUBTLEVARIANTSWITCHER COMPONENT

### WHY
During design review, stakeholders and developers need to quickly compare visual variants of a section without editing code. This tool provides a non-intrusive toggle that doesn't disrupt page layout.

### WHAT
A small floating pill positioned at the corner of a section. Shows the current variant label, expands on hover to reveal all options with descriptions. Uses lucide-react `Settings` icon.

### WHEN
✅ Use in sections with multiple visual modes (e.g., card styles in ResourcesSection)
✅ Use during design review sessions to compare variants
✅ Enable via `enableVariantSwitcher` prop on parent sections

### WHEN NOT
❌ Don't use in production end-user builds
❌ Don't use when there's only one variant (nothing to switch)
❌ Don't use inside scroll-locked containers
❌ Don't use for functionality that end-users should access (this is a designer tool)

### HOW
```tsx
import { SubtleVariantSwitcher } from './SubtleVariantSwitcher';

<div className="relative">
  <SubtleVariantSwitcher
    sectionName="Resources"
    currentVariant={cardStyle}
    variants={[
      { id: 'default', label: 'Default', description: 'No border, transparent' },
      { id: 'bordered', label: 'Bordered', description: 'Light border with frost' },
    ]}
    onVariantChange={(id) => setCardStyle(id)}
    position="top-right"
    theme="dark"
  />
</div>
```

---

## 🧩 useResponsiveGutter HOOK

### WHY
Masonry libraries (react-responsive-masonry) require pixel-based gutter values, not CSS classes. A hook encapsulates the responsive logic (24px mobile, 32px desktop) so the gutter matches the design system's spacing scale.

### WHAT
A custom React hook that returns a number (pixels) for the current breakpoint:
- Mobile (< 640px): returns `24`
- Desktop (≥ 640px): returns `32`

Uses `window.matchMedia` with resize listener for real-time updates.

### WHEN
✅ Use when a library requires pixel-based spacing values (not CSS classes)
✅ Use with Masonry grids, carousel gaps, or any JS-driven layout
✅ Use when responsive spacing needs to be calculated in JavaScript

### WHEN NOT
❌ Don't use when Tailwind responsive classes work (e.g., `gap-6 md:gap-8`)
❌ Don't use for simple CSS-based layouts
❌ Don't use for spacing that CSS variables can handle

### HOW
```tsx
import { useResponsiveGutter } from '@/app/hooks/useResponsiveGutter';

function MyMasonryGrid() {
  const gutter = useResponsiveGutter(); // 24 or 32

  return (
    <Masonry gutter={`${gutter}px`}>
      {items.map(item => <Card key={item.id} {...item} />)}
    </Masonry>
  );
}
```

---

## 🎯 STICKYCTA COMPONENT

### WHY
Report/case-study pages have multiple sections, each with different conversion opportunities. A static CTA misses context. StickyCTA adapts its message based on which section the user is reading.

### WHAT
A floating brand-red button fixed to the bottom-right. Changes text and icon based on `useActiveSection()`. Expands on hover to reveal the full CTA text with a tooltip description. Hidden during hero and final-CTA sections.

### WHEN
✅ Use on report/case-study pages with multiple defined sections
✅ Use when you want context-aware conversion prompts
✅ Place once at page root (self-positions via CSS fixed)

### WHEN NOT
❌ Don't use on pages without section-based navigation
❌ Don't use alongside another floating CTA (conflicts with ScrollToTop positioning)
❌ Don't use on mobile-first pages (desktop-only component via `hidden lg:block`)

### HOW
```tsx
import { StickyCTA } from '@/app/components/StickyCTA';

// Place at page root — no props needed
<StickyCTA />
```

Requires sections with `id` attributes matching the internal `sectionCTAs` mapping.

---

## 📨 CONTACTMODAL COMPONENT

### WHY
Contact forms need consistent modal behavior: escape-to-close, body scroll lock, backdrop click dismiss, accessible focus trapping, and success state feedback.

### WHAT
A modal overlay with a 4-field contact form (name, email, company, message). 500px max-width, 10px border-radius, success checkmark animation.

### WHEN
✅ Use for "Contact Us" / "Get in Touch" / "Schedule Demo" actions
✅ Trigger from Button onClick or StickyCTA

### WHEN NOT
❌ Don't use for inline forms (embed directly in section)
❌ Don't use for complex multi-step forms (build a dedicated page)

### HOW
```tsx
import { ContactModal } from '@/app/components/ContactModal';

const [isOpen, setIsOpen] = useState(false);

<Button variant="brand" onClick={() => setIsOpen(true)}>Contact Us</Button>
<ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

---

## ⬇️ NEXTSECTIONCTA COMPONENT

### WHY
Between long sections, users need directional guidance to continue scrolling. A subtle "next section" prompt reduces bounce rate and guides the reading flow.

### WHAT
A centered button with an uppercase label and bouncing ChevronDown icon. Smooth-scrolls to the target section.

### WHEN
✅ Use between sections to guide reading flow
✅ Use `darkMode` prop when placed on a black background

### WHEN NOT
❌ Don't use at the bottom of the last section (nowhere to go)
❌ Don't use between every section (overuse dilutes effectiveness)

### HOW
```tsx
import { NextSectionCTA } from '@/app/components/NextSectionCTA';

<NextSectionCTA targetId="methodology" label="Our Approach" />
<NextSectionCTA targetId="impact" label="See Results" darkMode />
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

### "Which Progress/Scroll Hook Should I Use?"

```
Do I need to know which section is visible?
├─ YES → Use useActiveSection()
└─ NO ↓

Do I need progress between two specific sections?
├─ YES → Use useSectionProgress('start-id', 'end-id')
└─ NO ↓

Do I need generic 0-100% reading progress?
├─ YES → Use useReadingProgress()
└─ NO ↓

Do I need to detect scroll direction (up/down)?
├─ YES → Use useScrollDirection()
└─ NO ↓

Do I need to know if the hero is visible?
├─ YES → Use useHeroVisibility()
└─ NO → No scroll hook needed
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
❌ Hardcoding secondary button colors instead of using variant prop

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
- [ ] New components registered in barrel exports (`index.ts`)
- [ ] ScrollProgress vs ReadingProgressBar — only one per page

---

**Last Updated:** 2026-03-01  
**Design System Version:** 3.3  
**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Use:** Reference this guide when building new components/pages  
**File Map:** See `design-system-checklist.md` for complete reading-order file list
