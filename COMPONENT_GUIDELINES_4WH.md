# COMPONENT GUIDELINES - 4W+H Framework
**Complete Reference for All Design System Components**

---

## PURPOSE
This document provides the 4W+H (Why, What, When, When Not, How) framework for EVERY component in the design system. Use this as a reference when building new pages.

---

## BUTTON COMPONENT

### WHY
Buttons are the primary interaction mechanism for user actions. Consistent button design ensures users immediately recognize clickable actions and understand their hierarchy.

### WHAT
A versatile button component with 4 variants (primary, brand, secondary, ghost), 4 sizes (sm, md, lg, xl), and signature shimmer animation that's always active.

### WHEN
- Use for primary actions (submit forms, CTAs, navigation)
- Use `brand` variant for conversion moments (max 1-2 per screen)
- Use `md` size for 90% of buttons (default)
- Use `sm` size for navbar CTAs and TOC buttons
- Use `lg` size ONLY for homepage heroes

### WHEN NOT
- Don't use `lg` size by default (dilutes impact)
- Don't disable shimmer animation (brand signature)
- Don't use multiple brand buttons in same section
- Don't use for inline text links (use InlineLink instead)

### HOW
```tsx
<Button variant="brand" size="md">Get Started</Button>
<Button variant="brand" size="md" showArrow>Schedule Demo</Button>
<Button variant="secondary" size="md">Learn More</Button>
```

---

## CTALINK COMPONENT

### WHY
Text-based CTAs with arrows need unified hover behavior. This component ensures the text and arrow darken together, creating a cohesive interactive experience.

### WHAT
A text + animated arrow link component specifically for call-to-action links. Features unified hover state where both text and arrow transition together.

### WHEN
- Use for text-based CTAs (e.g., "Schedule a Demo ->")
- Use in hero sections for secondary CTAs
- Use in content sections for "Learn More" links

### WHEN NOT
- Don't use for paragraph inline links (use InlineLink)
- Don't use for primary buttons (use Button)
- Don't use in navigation menus (use InlineLink)

### HOW
```tsx
<CTALink href="/demo" className="text-white">Schedule a Demo</CTALink>
<CTALink href="/features">Explore All Features</CTALink>
```

---

## INLINELINK COMPONENT

### WHY
Paragraph links need distinct visual treatment to stand out from surrounding text while maintaining readability.

### WHAT
An inline text link component for use within paragraphs. Features red underline and warm background hover effect.

### WHEN
- Use within paragraph text
- Use for "Learn more" references
- Use for cross-references between sections

### WHEN NOT
- Don't use for standalone CTAs (use CTALink or Button)
- Don't use for primary navigation
- Don't use when you need an arrow (use CTALink)

### HOW
```tsx
<p>Our methodology is based on industry best practices.{' '}
  <InlineLink href="/methodology">Learn more about our approach</InlineLink>
  {' '}in our comprehensive guide.
</p>
```

---

## ANIMATEDARROW COMPONENT

### WHY
Arrow animations provide visual feedback for directional navigation and urgent CTAs.

### WHAT
An animated arrow icon that slides right on hover. Used exclusively with CTAs that redirect to forms or urgent pages.

### WHEN
- Use with CTALink component
- Use with Button when `showArrow` is true
- Use for form submissions and urgent CTAs

### WHEN NOT
- Don't use for simple navigation links
- Don't use within paragraph text
- Don't use without a corresponding CTA

### HOW
```tsx
<CTALink href="/demo">Schedule Demo</CTALink>
<Button variant="brand" showArrow>Get Started</Button>
```

---

## LOGO COMPONENT (Design System Primitive)

### WHY
The Ken Research logo was duplicated across 4+ files (NavLayout, Footer, MobileMenu, LogoButton) with inconsistent sizing, different SVG sources, and scattered dimension constants. A single DS primitive eliminates all duplication and provides one source of truth for brand rendering. The component uses the original Figma SVG paths directly, so there's zero visual drift from the approved brand mark.

### WHAT
A design system primitive that renders the Ken Research logo with:
- **5 size variants** (xs/sm/md/lg/xl) — height-driven, width scales proportionally via aspect ratios
- **3 display modes** (full/mark/wordmark) — full = K mark + "KEN RESEARCH" text, mark = K icon only, wordmark = text only
- **3 color variants** (default/white/mono) — adapts to light backgrounds, dark backgrounds, or single-color contexts (print)

Internally composed of two sub-components (LogoMark + LogoWordmark) rendering inline SVGs from constant path data. Zero external dependencies.

### WHEN
- Use everywhere the Ken Research logo appears — navbar, footer, mobile menu, auth pages, loading screens, email templates
- Use `size="sm"` for navbar (mobile + desktop, 20px height)
- Use `size="lg"` for footer (32px height)
- Use `size="md"` for desktop sticky headers, email headers (24px height)
- Use `size="xl"` for hero sections, splash screens (48px height)
- Use `display="mark"` for favicon-sized contexts, sidebar collapsed state, loading spinners
- Use `display="wordmark"` for tight horizontal spaces, breadcrumbs
- Use `color="white"` on dark backgrounds (hero sections, dark cards)
- Use `color="mono"` for print, partner logo rows, single-color contexts

### WHEN NOT
- Don't hardcode SVG paths or dimensions outside this component — use `<Logo>` instead
- Don't override the aspect ratio via CSS (the component preserves Figma-accurate proportions)
- Don't use `size="xl"` in constrained spaces (it's 48px tall)
- Don't create separate logo components for different contexts — use props
- Don't use `figma:asset` or `src/imports/` logo files — they are now dead code

### HOW
```tsx
import { Logo } from '@/design-system/components/Logo';

// Navbar (inside LogoButton atom)
<LogoButton onClick={() => navigate('/')}>
  <Logo size="sm" />
</LogoButton>

// Footer
<Logo size="lg" />

// Dark background hero
<Logo size="xl" color="white" />

// Print / partner row
<Logo size="sm" color="mono" />

// Icon only (loading screen, sidebar collapsed)
<Logo display="mark" size="xl" />

// Custom className passthrough
<Logo size="md" className="opacity-80" />
```

**CSS Token Sync:** `--logo-height-xs` through `--logo-height-xl` in `theme.css` mirror `layout.logo.*` in `tokens.ts` and `SIZE_CONFIG` in `Logo.tsx`. Change one, change all three.

**File:** `src/design-system/components/Logo.tsx`
**Barrel:** `src/design-system/index.ts` (exported as `Logo`)
**Consumers:** NavLayout, Footer, LogoButton (via children prop)

---

## SECTION COMPONENTS

### HERO SECTION
- Use `--text-3xl` for h1 (ONLY place to use this size)
- Always black background with white text
- Max 2 CTAs

### CONTENT SECTION
- Use `--text-2xl` for h2 section headings
- Use `--text-sm` for body paragraphs
- Alternate backgrounds: white -> warm-300 -> white

### CARD COMPONENT
- Use `--text-base` (20px) for card titles when 4+ cards
- Use `--text-lg` (25px) for card titles when 2-3 cards
- Use `--text-compact` (14px) for card body when 4+ cards

---

## NAVBAR COMPONENT

### WHY
Navigation provides consistent site-wide wayfinding. The two-state system creates visual hierarchy and saves space.

### WHAT
Fixed top navbar with two states: expanded (at top) and compact (scrolled). Uses black background with white text.

### WHEN
- Use on every page for consistency
- Use `--text-2xs` (12px) for nav links
- Use Button `size="sm"` for navbar CTA

### WHEN NOT
- Don't use transparent background
- Don't use large buttons in navbar
- Don't exceed 5-6 nav links

---

## TABLE OF CONTENTS

### WHY
Long-form content needs navigation. TOC provides quick access and shows reading progress.

### WHEN
- Use for pages with 5+ sections
- Use `--text-nav` (14px) for TOC item titles
- Highlight active section as user scrolls

### WHEN NOT
- Don't use on short pages (< 5 sections)
- Don't show on mobile (use hamburger menu)

---

## CONTAINER COMPONENT

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
- Use as the outermost content wrapper in every section
- Use when you need consistent responsive padding (px-4 / px-6 / px-8)
- Use to enforce max-width constraints

### WHEN NOT
- Don't use for elements that need full-bleed (backgrounds, hero images)
- Don't nest Containers inside Containers
- Don't use for modal/overlay content (modals have their own width system)

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

## RESOURCECARD COMPONENT

### WHY
A resources/blog grid needs visual variety — a single card style creates monotony in a Masonry layout. Different content types need distinct visual emphasis while maintaining design system consistency.

### WHAT
A versatile content card with 7 layout variants, 2 card styles, and 2 color modes:

**Variants:** `standard`, `full-featured`, `minimal`, `category-featured`, `clean`, `featured-focus`, `latest`
**Card Styles:** `default` (no border), `bordered` (frosted glass border)
**Color Modes:** `light`, `dark`

### WHEN
- Use in ResourcesSection Masonry grid
- Use for blog listings, article grids, case study collections
- Mix 3-4 variant types within a grid for visual rhythm
- Use `full-featured` for the primary/hero card (max 1 per grid)
- Use `clean` for text-heavy content that doesn't need an image

### WHEN NOT
- Don't use for product/e-commerce cards (different purpose)
- Don't use all cards as `full-featured` — creates visual overload
- Don't mix more than 4 variant types in one grid (creates chaos)
- Don't use outside of a grid context (cards need siblings for visual rhythm)

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

## SUBTLEVARIANTSWITCHER COMPONENT

### WHY
During design review, stakeholders and developers need to quickly compare visual variants of a section without editing code. This tool provides a non-intrusive toggle that doesn't disrupt page layout.

### WHAT
A small floating pill positioned at the corner of a section. Shows the current variant label, expands on hover to reveal all options with descriptions. Uses lucide-react `Settings` icon.

### WHEN
- Use in sections with multiple visual modes (e.g., card styles in ResourcesSection)
- Use during design review sessions to compare variants
- Enable via `enableVariantSwitcher` prop on parent sections

### WHEN NOT
- Don't use in production end-user builds
- Don't use when there's only one variant (nothing to switch)
- Don't use inside scroll-locked containers
- Don't use for functionality that end-users should access (this is a designer tool)

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

## useResponsiveGutter HOOK

### WHY
Masonry libraries (react-responsive-masonry) require pixel-based gutter values, not CSS classes. A hook encapsulates the responsive logic (24px mobile, 32px desktop) so the gutter matches the design system's spacing scale.

### WHAT
A custom React hook that returns a number (pixels) for the current breakpoint:
- Mobile (< 640px): returns `24`
- Desktop (>= 640px): returns `32`

Uses `window.matchMedia` with resize listener for real-time updates.

### WHEN
- Use when a library requires pixel-based spacing values (not CSS classes)
- Use with Masonry grids, carousel gaps, or any JS-driven layout
- Use when responsive spacing needs to be calculated in JavaScript

### WHEN NOT
- Don't use when Tailwind responsive classes work (e.g., `gap-6 md:gap-8`)
- Don't use for simple CSS-based layouts
- Don't use for spacing that CSS variables can handle

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

## QUICK CHECKLIST (Every Component Build)

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

**Last Updated:** 2026-03-01  
**Design System Version:** 3.2  
**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Use:** Reference this guide when building new components/pages
