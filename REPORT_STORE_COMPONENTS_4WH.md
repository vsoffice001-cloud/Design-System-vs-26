# Report Store Components - 4W+H Framework
## Complete Reference for Building Product Pages with the Ken Bold Design System

**Version:** 4.1 (March 2026)
**Source Page:** Report Store (Ken Research)
**Design System:** Ken Bold DS v4.1
**Architecture:** Atomic Design (Atoms > Molecules > Organisms > Templates)

---

## PURPOSE

This document extends `COMPONENT_GUIDELINES_4WH.md` with every component created or evolved during the Report Store page build. These components are **production-tested across 6 device breakpoints** (XS 320px through 2XL 1440px+) and ready for reuse on any Ken Research product page: Insights, Survey, Consulting, report detail pages, research pillar pages, or landing pages.

**Reading order:**
1. `ai-context/CORE.md` - Critical rules (always)
2. `COMPONENT_GUIDELINES_4WH.md` - Original DS components
3. **This file** - Report Store additions & evolutions
4. `ai-context/COMPONENTS.md`, `LAYOUT.md`, `COLORS.md` - Token details

---

## WHAT'S NEW vs WHAT EVOLVED

### New Components (not in original DS)

| Tier | Component | Reusability |
|------|-----------|-------------|
| Atom | `Tooltip` | Universal — any page |
| Atom | `ViewToggle` | Universal — any listing page |
| Atom | `FadeInSection` | Universal — any page |
| Molecule | `CardReveal` | Universal — any card grid |
| Molecule | `RevealImage` | Universal — any page with images |
| Molecule | `SkeletonCard` | Universal — any async data page |
| Molecule | `EmptyState` | Universal — any filterable listing |
| Molecule | `BackToTop` | Universal — any long page |
| Molecule | `HorizontalScroll` | Universal — any card carousel |
| Molecule | `ScrollFade` | Universal — any overflow tabs/pills |
| Molecule | `IndustryBadge` (EyebrowLabel) | Universal — any card/listing |
| Molecule | `CardMetaRow` (MetaRow) | Universal — any card with metadata |
| Molecule | `CardFooterRow` | Universal — any card with date |
| **Organism** | **`ReportCard`** ★ | **Canonical — grid + list layouts** |
| ~~Organism~~ | ~~`ReportGridCard`~~ | **@deprecated** — wrapper → `ReportCard layout="grid"` |
| Molecule | `StatCard` | Reusable — data visualization card |
| Molecule | `DataHighlightCard` | Reusable — stat highlight card |
| Molecule | `AnalystPickCardB` | Reusable — curated/expert card |

### Evolved Components (Report Store version is canonical)

| Component | What Changed |
|-----------|-------------|
| `Button.tsx` | Added `xs` size, `brand` variant, `iconOnly`, `type` prop |
| `Badge.tsx` | Added `fontWeight` prop (400 or 600) |
| `SectionHeading.tsx` | Added `level`, `endSlot`, `labelEndSlot`, `labelPulse`, `action` with CTALink |
| `Card.tsx` | Ref-based hover (better perf), `as` prop, `onClick` |
| `Container.tsx` | Uses `.container-padding` CSS class, `maxWidth` preset names |

---

## NEW CSS CLASSES (theme.css additions)

These classes were created during the Report Store build and should be in every page's `theme.css`:

| Class | Purpose | Use Case |
|-------|---------|----------|
| `.img-zoom` | Image scale(1.05) on `.group:hover` | Any card/thumbnail with hover zoom |
| `.card-reveal` + `.is-visible` | IO-triggered opacity+translateY entrance | Card grid entrance animations |
| `.skeleton-shimmer` | Gradient sweep loading pulse | Skeleton loading placeholders |
| `.glass-header` | Glassmorphism nav (`blur(12px) saturate(1.4)`) | Sticky navigation headers |
| `.container-padding` | Responsive px (16/24/32px) at mobile/tablet/desktop | Any Container-wrapped content |
| `.scrollbar-hide` | Hide native scrollbar | Horizontal scroll containers |
| `@keyframes fadeUp` | Opacity 0 + translateY(10px) to visible | Card/element entrance |
| `@keyframes ripple` | Button click ripple effect | Button clicks |
| `:focus-visible` ring | 2px solid brand-red, 2px offset | Keyboard accessibility |
| `@media (prefers-reduced-motion)` | Disables all custom animations | Accessibility compliance |

---

# ATOMS

---

## Tooltip

### WHY
Interactive elements need contextual help. Without a tooltip system, developers use browser `title` attributes (ugly, slow delay, unstyled) or build one-off tooltips that get clipped by `overflow: hidden` parents. Tooltip uses a React portal to render at `document.body` level, so it is never clipped.

### WHAT
A portal-based tooltip that appears on hover/focus with a dark bubble, directional arrow, and smooth fade animation. Repositions on scroll while visible.

**Visual:** `rgba(0,0,0,0.88)` background, `var(--badge-xs-font)` text, 4px radius, arrow indicator.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | Tooltip content |
| `position` | `'top' \| 'bottom'` | `'top'` | Position relative to trigger |
| `children` | ReactNode | required | Trigger element |

### WHEN
- Use for icon-only buttons that need labels (ViewToggle, sort buttons)
- Use for abbreviated data that needs explanation (CAGR, growth metrics)
- Use for truncated text that needs full display
- Use when hover context helps but a permanent label would clutter

### WHEN NOT
- Don't use for critical information (tooltips are hidden by default)
- Don't use on touch-only mobile (no hover) — pair with another pattern
- Don't use for long text (keep under 8 words)
- Don't use on elements that already have visible labels

### WHERE
Atomic level: **Atom**. Used inside ViewToggle, StatCard, CardMetaRow, and any icon button.

### HOW
```tsx
import { Tooltip } from './Tooltip';

<Tooltip text="List view">
  <button aria-label="List view"><LayoutList /></button>
</Tooltip>

<Tooltip text="Compound Annual Growth Rate">
  <span>CAGR</span>
</Tooltip>
```

---

## ViewToggle

### WHY
Listing pages need a way to switch between list and grid views. Without a standard toggle, each page builds a custom one with inconsistent sizing, styling, and touch targets.

### WHAT
A compact pill-shaped toggle with list/grid icon buttons. Uses warm-300 container with white-active + shadow for selected state. Built-in Tooltip labels. Optional item count display.

**Touch target pattern:** `w-9 h-9 sm:w-7 sm:h-7` (44px on mobile, 28px on desktop).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `viewMode` | `'list' \| 'grid'` | required | Current active view |
| `onViewModeChange` | function | required | Mode change callback |
| `count` | number | — | Optional item count (shown on sm+) |
| `countLabel` | string | `'items'` | Label after count |

### WHEN
- Use on any listing page with card content (reports, articles, case studies)
- Use when both list and grid layouts are supported
- Use in combination with sort controls in a toolbar
- Use with `ReportCard` — ViewToggle's `viewMode` maps directly to ReportCard's `layout` prop

### WHEN NOT
- Don't use if only one view mode exists
- Don't use inside cards or nested components
- Don't use for more than 2 modes (list/grid only)

### WHERE
Atomic level: **Atom**. Used in listing mode toolbar.

### HOW
```tsx
import { ViewToggle } from './ViewToggle';
import type { ViewMode } from './ViewToggle';
import { ReportCard } from './molecules';

const [viewMode, setViewMode] = useState<ViewMode>('grid');

<ViewToggle
  viewMode={viewMode}
  onViewModeChange={setViewMode}
  count={filteredReports.length}
  countLabel="reports"
/>

{/* viewMode maps directly to ReportCard layout */}
{reports.map(r => (
  <ReportCard key={r.id} layout={viewMode} {...r} />
))}
```

---

## FadeInSection

### WHY
Page sections appearing instantly on scroll feels jarring. A consistent IntersectionObserver-based fade creates a polished editorial feel. Without this wrapper, each section hand-codes its own IO logic.

### WHAT
A div wrapper that uses IntersectionObserver to fade-in children when they enter the viewport. Supports stagger delays and respects `prefers-reduced-motion`.

**Animation:** `opacity 0 -> 1`, `translateY(16px) -> 0`, `0.6s cubic-bezier(0.16, 1, 0.3, 1)`.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | number | 0 | Stagger delay in ms |
| `direction` | `'up' \| 'none'` | `'up'` | Animation direction |
| `threshold` | number | 0.1 | IO threshold (0-1) |

### WHEN
- Use to wrap each `SectionWrapper` on the page for section-level reveals
- Use for staggered card grid entrances (combine with `delay` prop)
- Use for any content block that should animate in on scroll

### WHEN NOT
- Don't use for above-the-fold content (should be immediately visible)
- Don't use inside cards (use CardReveal instead — lighter)
- Don't nest FadeInSection inside FadeInSection

### WHERE
Atomic level: **Atom**. Used in App.tsx to wrap each SectionWrapper in home mode.

### HOW
```tsx
import { FadeInSection } from './FadeInSection';

<FadeInSection>
  <SectionWrapper bg="white">
    <FeaturedResearch />
  </SectionWrapper>
</FadeInSection>

<FadeInSection delay={100}>
  <SectionWrapper bg="neutral50">
    <IndustrySectorsGrid />
  </SectionWrapper>
</FadeInSection>
```

---

# MOLECULES

---

## IndustryBadge (EyebrowLabel)

### WHY
Cards and listings need a consistent text-only eyebrow label above titles. This is NOT a chip or badge with background — it is a subtle category identifier that sits at the top of card content areas.

### WHAT
A `<span>` with uppercase text, `--text-2xs` (12px), `rgba(0,0,0,0.4)` color, `0.06em` letter-spacing, block truncate. No background, no border, no padding.

### WHEN
- Use as the first element in any card's content area (above title)
- Use for industry/category/subcategory labels
- Use when you need a subtle label that does not compete with the title

### WHEN NOT
- Don't use when you need a visible chip/tag (use Badge component)
- Don't use for interactive elements (not clickable)
- Don't use for more than one line (truncates)

### WHERE
Atomic level: **Molecule** (composed atom). Used in ReportCard, AnalystPickCardB, ResourceCard.

### HOW
```tsx
import { IndustryBadge } from './molecules';

<IndustryBadge>Healthcare</IndustryBadge>
<IndustryBadge>{report.subcat || report.industry}</IndustryBadge>
```

---

## CardMetaRow

### WHY
Cards need inline metadata rows (projection, region, date) with consistent icon sizing, colors, spacing, and dot separators. Without this, every card hand-codes its own meta row with inconsistent icon colors and spacing.

### WHAT
An inline row with two layout variants:

| Variant | Layout | Use Case |
|---------|--------|----------|
| **A** (default) | TrendingUp (green) projection + MapPin (gray) region | Cards with forecast data |
| **B** (compact) | MapPin region + Calendar date | Cards without projection data |

**Icons:** TrendingUp uses `--green-600`, MapPin/Calendar use `iconColors.utility`. Middot separator between items. Font size `--text-2xs`.

### WHEN
- Use in any card that displays region, projection, or date metadata
- Use Variant A when projection data is available
- Use Variant B when no projection exists (collapses region + date into one row)

### WHEN NOT
- Don't use for long descriptions (this is for compact meta only)
- Don't use outside of card components
- Don't mix variants within the same card

### WHERE
Atomic level: **Molecule**. Used in ReportCard, AnalystPickCardB, ResourceCard.

### HOW
```tsx
import { CardMetaRow } from './molecules';

<CardMetaRow projection="$133.4B by 2030" region="Global" variant="A" />
<CardMetaRow region="India" date="Dec 2024" variant="B" />
```

---

## CardFooterRow

### WHY
Cards need a consistent bottom row showing the publication date. This standardizes the Calendar icon, color, spacing, and font size so every card footer looks identical.

### WHAT
A flex row with Calendar icon (`iconColors.utility`) + date text. Font size `--text-2xs`, color `text-black/35`. Pinned to bottom via `mt-auto`.

### WHEN
- Use as the last element in card content areas when date needs separate display
- Use with CardMetaRow Variant A (which shows projection + region, leaving date for footer)
- Used in ReportCard `layout="grid"` with metaVariant A

### WHEN NOT
- Don't use with CardMetaRow Variant B (date is already inline there)
- Don't use when date is not relevant to the content
- Not used in ReportCard `layout="list"` (date appears in right column instead)

### WHERE
Atomic level: **Molecule**. Used in ReportCard (grid layout, Variant A only).

### HOW
```tsx
import { CardFooterRow } from './molecules';
<CardFooterRow date="Dec 2024" />
```

---

## CardReveal

### WHY
Card grids need staggered entrance animations when scrolling. Each card should fade in with a slight delay after the previous one. Without this, all cards in a row appear simultaneously, which feels flat.

### WHAT
A div wrapper using IntersectionObserver that applies `.card-reveal` / `.card-reveal.is-visible` CSS classes. Supports stagger via `delay` prop. Once visible, stays visible. Respects `prefers-reduced-motion`.

**Animation:** `opacity 0, translateY(12px)` to `opacity 1, translateY(0)` over `0.45s cubic-bezier(0.16, 1, 0.3, 1)`.

### WHEN
- Use around each card in a grid listing (wrap each ReportCard)
- Use with stagger: `delay={index * 50}` capped at first 8 cards
- Use for any individual card that needs entrance animation

### WHEN NOT
- Don't use for entire sections (use FadeInSection instead)
- Don't use for above-the-fold cards (they should be immediately visible)
- Don't nest CardReveal inside FadeInSection (double animation)

### WHERE
Atomic level: **Molecule**. Used in App.tsx listing mode around each ReportCard.

### HOW
```tsx
import { CardReveal } from './molecules';
import { ReportCard } from './molecules';

{filteredReports.map((report, idx) => (
  <CardReveal key={report.id} delay={idx < 8 ? idx * 50 : 0}>
    <ReportCard layout={viewMode} {...report} />
  </CardReveal>
))}
```

---

## RevealImage

### WHY
Images loading in causes a visual pop when they appear. RevealImage wraps ImageWithFallback with a smooth opacity transition from a neutral placeholder background to the loaded image.

### WHAT
An `<img>` wrapper that shows a neutral background (`rgba(0,0,0,0.04)`) while loading, then fades the image in at `opacity 0 -> 1` over `0.4s`.

### WHEN
- Use for any image that loads asynchronously (Unsplash URLs, CDN images)
- Use inside cards where image load delay is noticeable

### WHEN NOT
- Don't use for critical above-the-fold hero images (use standard `<img>` with preload)
- Don't use for SVGs or icons (they load instantly)

### WHERE
Atomic level: **Molecule**. Available for any card or content image.

### HOW
```tsx
import { RevealImage } from './molecules';

<RevealImage src={report.image} alt={report.title} className="w-full h-full object-cover img-zoom" />
```

---

## SkeletonCard

### WHY
During data loading, empty space or spinners feel broken. Skeleton placeholders that match the exact shape of the final content create perceived performance and reduce layout shift.

### WHAT
Shimmer loading placeholders in two variants matching the card anatomy:
- **Grid:** Vertical card with image placeholder + badge/title/meta shims
- **List:** Horizontal card with side image + text column + right column shims

Uses `.skeleton-shimmer` CSS class (animated gradient from `--warm-300` to `--warm-400`).

### WHEN
- Use during initial page load, filter changes, or Load More transitions
- Use the same variant as the current ViewToggle mode (`variant={viewMode}`)
- Show 6-12 skeletons matching the expected grid layout

### WHEN NOT
- Don't use indefinitely (always resolve to real content or EmptyState)
- Don't mix skeleton variants (all grid or all list in one view)

### WHERE
Atomic level: **Molecule**. Used in App.tsx listing mode during loading states.

### HOW
```tsx
import { SkeletonCard } from './molecules';

{/* Match skeleton variant to ViewToggle's viewMode */}
{isLoading && Array.from({ length: 6 }).map((_, i) => (
  <SkeletonCard key={i} variant={viewMode} aspectRatio="16/9" />
))}
```

---

## EmptyState

### WHY
When filters return zero results, blank space is confusing. EmptyState provides a clear message with an icon and an action to recover.

### WHAT
A centered message block with dashed border (`--warm-500`), warm-300 background, Search icon, message text, and optional action button. Uses `fadeUp` entrance animation.

### WHEN
- Use when filter/search results return zero items
- Use when a section has no content to display
- Always provide an `onAction` callback to help users recover

### WHEN NOT
- Don't use for error states (use a different error component)
- Don't use when data is loading (use SkeletonCard)
- Don't use for permanent empty sections (remove the section instead)

### WHERE
Atomic level: **Molecule**. Used when `filteredReports.length === 0`.

### HOW
```tsx
import { EmptyState } from './molecules';

<EmptyState
  message="No reports match your current filters."
  actionLabel="Clear all filters"
  onAction={() => clearAllFilters()}
/>
```

---

## BackToTop

### WHY
Long listing pages (50+ reports) can exceed 10,000px. Users need a quick way to return to the top without endless scrolling.

### WHAT
A circular floating button that appears after 600px scroll. Uses fade + scale entrance animation. Positioned to avoid conflict with MobileFilterBar.

**Positioning:** Mobile `bottom-16 right-4` (clears MobileFilterBar floating pill). Desktop `bottom-6 right-6`.

### WHEN
- Use on any page with content exceeding 2 viewport heights
- Use on listing pages, report catalogs, long editorial pages
- Place once at page root (self-positions via CSS fixed)

### WHEN NOT
- Don't use on short single-screen pages
- Don't use alongside ScrollToTop from the DS (pick one — BackToTop is mobile-aware)

### WHERE
Atomic level: **Molecule**. Used in App.tsx at page root level.

### HOW
```tsx
import { BackToTop } from './molecules';
<BackToTop />
<BackToTop threshold={400} />
```

---

## HorizontalScroll

### WHY
Card carousels need horizontal scrolling but native `overflow-x: auto/hidden/scroll` forces `overflow-y` to change too, clipping card shadows and hover-lift transforms. HorizontalScroll uses `overflow-x: clip; overflow-y: visible` with `translateX`-based scrolling to solve this.

### WHAT
A transform-based horizontal scroll container with: button navigation (chevrons appear on hover), trackpad/wheel support, touch drag with momentum, mouse drag, gradient edge fades.

### WHEN
- Use for horizontal card carousels where cards have hover effects (shadow lift, image zoom)
- Use for Recommended For You, Trending style horizontal card rows
- Use when cards need `overflow-y: visible` for shadows

### WHEN NOT
- Don't use for simple tag/pill scrolling (use ScrollFade — simpler)
- Don't use for vertical content
- Don't use when native `overflow-x: auto` works fine (no hover shadows to clip)

### WHERE
Atomic level: **Molecule**. Used in HomeSectionsA/B for card carousels.

### HOW
```tsx
import { HorizontalScroll } from './molecules';
import { ReportCard } from './molecules';

<HorizontalScroll fadeBg="white" gap="gap-4">
  {reports.map(r => (
    <div key={r.id} className="flex-shrink-0 w-64">
      <ReportCard layout="grid" {...r} />
    </div>
  ))}
</HorizontalScroll>
```

---

## ScrollFade

### WHY
Horizontal tab bars, filter pills, and tag rows often overflow on mobile. They need native scroll with edge fade indicators to show there is more content.

### WHAT
A lightweight wrapper using native `overflow-x: auto` with hidden scrollbar. Detects scroll position to show/hide gradient edge fades. Optional hover-revealed chevron buttons.

### WHEN
- Use for horizontal tab bars, filter pill rows, tag lists
- Use when content may overflow horizontally on smaller screens
- Use `showButtons` for wider bars where mouse navigation helps

### WHEN NOT
- Don't use for card carousels with hover effects (use HorizontalScroll)
- Don't use when content always fits (no overflow)

### WHERE
Atomic level: **Molecule**. Used for subcategory pills, region tabs.

### HOW
```tsx
import { ScrollFade } from './molecules';

<ScrollFade fadeBg="var(--warm-200)" showButtons>
  <div className="flex gap-2 whitespace-nowrap">
    {subcategories.map(sub => (
      <button key={sub} className="px-3 py-1.5 rounded-full">{sub}</button>
    ))}
  </div>
</ScrollFade>
```

---

# ORGANISMS

---

## ReportCard ★ (Canonical — Grid + List Layouts)

### WHY
The Report Store has two view modes controlled by ViewToggle: **grid** (vertical card stack) and **list** (horizontal card row). Originally `ReportGridCard` only supported the grid layout — so ViewToggle could switch modes but there was no list card to render. `ReportCard` unifies both layouts in a single component with a shared props interface, ensuring:

1. **ViewToggle ↔ ReportCard ↔ SkeletonCard** are all aligned on `"grid" | "list"` values
2. One component, one data shape — no prop mapping between two different card components
3. Grid layout is identical to the original ReportGridCard (zero visual regression)
4. List layout follows B2B market research listing conventions (thumbnail + content + CTA)

### WHAT
A dual-layout card organism that renders either a vertical grid card or a horizontal list card based on the `layout` prop.

**Grid layout (default):**
```
┌────────────────────┐
│ ┌────────────────┐ │
│ │   16:9 IMAGE   │ │  ← overflow-hidden, img-zoom on group:hover
│ │   + gradient   │ │  ← gradient overlay bottom 1/3
│ └────────────────┘ │  ← optional overlayBadge
│  INDUSTRY BADGE    │  ← IndustryBadge (subcat || industry)
│  Report Title      │  ← h4, 2-line clamp, --text-nav
│  +12% · Region     │  ← CardMetaRow variant A or B
│  📅 March 2026     │  ← CardFooterRow (variant A only)
└────────────────────┘
```

**List layout:**
```
┌──────────────────────────────────────────────────────┐
│ ┌──────┐  INDUSTRY BADGE                  Mar 2026  │
│ │      │  Report Title That Can             +12.4%  │
│ │  IMG │  Span Two Lines                            │
│ │      │  Optional description...    [View Report →]│
│ └──────┘  Region · Meta (mt-auto)                   │
└──────────────────────────────────────────────────────┘
  80px mob   ← Content fills center →  ← Right column (sm+)
  144px desk                              hidden on mobile
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | string | required | Unique report identifier |
| `image` | string | required | Image URL |
| `title` | string | required | Report title (2-line clamp) |
| `industry` | string | required | Primary industry name |
| `subcat` | string | — | Subcategory (preferred over industry for badge) |
| `projection` | string \| null | — | Growth projection (e.g., "$133.4B by 2030") |
| `region` | string | required | Geographic region |
| `date` | string | required | Publication date |
| `onClick` | `(id: string) => void` | — | Click handler |
| **`layout`** | **`'grid' \| 'list'`** | **`'grid'`** | **Visual layout mode** |
| `overlayBadge` | ReactNode | — | Badge overlay on image (e.g., "New") |
| `aspectRatio` | string | `'16/9'` | Image aspect ratio (grid only) |
| `className` | string | — | Additional CSS classes |
| `metaVariant` | `'A' \| 'B'` | `'A'` | CardMetaRow layout variant |
| `description` | string | — | Short description (list layout only, 1-line clamp) |
| `ctaLabel` | string | `'View Report'` | CTA button text (list layout only) |

**Composition (what it uses internally):**
- `Card` (v4.0 base container with hover)
- `ImageWithFallback` (image with shim)
- `IndustryBadge` (eyebrow label)
- `CardMetaRow` (projection/region/date row)
- `CardFooterRow` (date footer — grid layout only)
- `Button` (CTA — list layout only, variant="secondary" size="xs" showArrow)
- `TrendingUp` icon (projection badge — list layout right column)

### WHEN
- Use for **all report card rendering** on the Report Store — both discovery (home carousels) and listing (filtered grid/list)
- Use `layout="grid"` for vertical card grids and horizontal carousels
- Use `layout="list"` for compact list views in the listing mode
- Use with ViewToggle: `<ReportCard layout={viewMode} />`
- Use with SkeletonCard: `<SkeletonCard variant={viewMode} />`
- Use with CardReveal for entrance animations

### WHEN NOT
- Don't use for analyst recommendation cards (use AnalystPickCardB — different anatomy)
- Don't use for statistic/metric cards (use StatCard or DataHighlightCard)
- Don't use for ResourceCard's 7-variant system in the case study DS (that's a separate component)
- Don't pass `description` or `ctaLabel` when `layout="grid"` (they're ignored)

### WHERE
Atomic level: **Organism** (composes 6 sub-components). Lives in `molecules/ReportCard.tsx`.

Used in:
- Home mode carousels (FeaturedResearch, RecommendedForYou) with `layout="grid"`
- Listing mode card grid with `layout={viewMode}` (toggleable)
- Any future product page that lists research reports

### HOW

**Basic grid usage (equivalent to old ReportGridCard):**
```tsx
import { ReportCard } from './molecules';

<ReportCard
  id="r1" image="/img/report.jpg" title="AI in Healthcare Market Report"
  industry="Healthcare" subcat="Digital Health"
  projection="$133.4B by 2030" region="Global" date="Dec 2024"
  onClick={handleView} metaVariant="A"
/>
```

**List layout:**
```tsx
<ReportCard
  layout="list"
  id="r1" image="/img/report.jpg" title="AI in Healthcare Market Report"
  industry="Healthcare" subcat="Digital Health"
  projection="$133.4B by 2030" region="Global" date="Dec 2024"
  description="Comprehensive analysis of AI adoption in healthcare diagnostics and treatment."
  ctaLabel="View Report" onClick={handleView}
/>
```

**With ViewToggle (the canonical pattern):**
```tsx
import { ViewToggle } from './ViewToggle';
import type { ViewMode } from './ViewToggle';
import { ReportCard, SkeletonCard, CardReveal, EmptyState } from './molecules';

const [viewMode, setViewMode] = useState<ViewMode>('grid');

{/* Toolbar */}
<ViewToggle viewMode={viewMode} onViewModeChange={setViewMode}
  count={reports.length} countLabel="reports" />

{/* Card grid — layout synced with viewMode */}
<div className={viewMode === 'grid'
  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
  : 'flex flex-col gap-3'
}>
  {isLoading
    ? Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} variant={viewMode} />
      ))
    : reports.length === 0
    ? <EmptyState message="No reports found." actionLabel="Clear filters" onAction={clearFilters} />
    : reports.map((r, idx) => (
        <CardReveal key={r.id} delay={idx < 8 ? idx * 50 : 0}>
          <ReportCard layout={viewMode} {...r} onClick={handleView} />
        </CardReveal>
      ))
  }
</div>
```

### ALIGNMENT TABLE

All three components use the same `"grid" | "list"` value:

| Component | Prop | Controls |
|-----------|------|----------|
| `ViewToggle` | `viewMode: 'grid' \| 'list'` | User switches mode |
| `ReportCard` | `layout: 'grid' \| 'list'` | Renders correct card layout |
| `SkeletonCard` | `variant: 'grid' \| 'list'` | Renders matching loading skeleton |

### MIGRATION FROM ReportGridCard

```tsx
// BEFORE (grid-only, @deprecated)
import { ReportGridCard } from './molecules/ReportGridCard';
<ReportGridCard id="1" image="..." title="..." industry="..." region="..." date="..." />

// AFTER (grid + list)
import { ReportCard } from './molecules';
<ReportCard layout="grid" id="1" image="..." title="..." industry="..." region="..." date="..." />
<ReportCard layout="list" id="1" image="..." title="..." industry="..." region="..." date="..." />
```

`ReportGridCard` still works (thin wrapper that passes `layout="grid"`), but new code should always use `ReportCard`.

---

## ReportGridCard ~~(Organism)~~ → @deprecated Wrapper

### WHY (Deprecated)
Originally the only report card component. **Replaced by `ReportCard`** which supports both grid AND list layouts. ReportGridCard now exists solely as a backward-compatible wrapper.

### WHAT (Now)
A thin function component that spreads all props to `<ReportCard layout="grid" />`. Zero logic of its own.

### WHEN
- **Don't use in new code.** Import `ReportCard` instead.
- Only remains for existing consumers that haven't migrated yet.

### WHERE
File: `molecules/ReportGridCard.tsx`. Exported from barrel with `@deprecated` JSDoc.

### HOW (Migration)
```tsx
// OLD
import { ReportGridCard } from './molecules';
<ReportGridCard id="1" image="..." title="..." ... />

// NEW — drop-in replacement
import { ReportCard } from './molecules';
<ReportCard id="1" image="..." title="..." ... />  // layout defaults to "grid"
```

---

## StatCard

### WHY
Market indicator sections need a consistent card layout for displaying key statistics with growth metrics, descriptions, and CTAs.

### WHAT
Card anatomy: **Category badge** (coral/rounded) + **content icon** > **serif value** (Major Third xl) > **label** > **growth metric** (green chip with CAGR Tooltip) > **description** (2-line clamp) > **footer CTA** (secondary xs button).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `category` | string | required | Badge label (e.g., "Healthcare") |
| `value` | string | required | Serif display value (e.g., "$133.4B") |
| `label` | string | required | Value description (e.g., "AI in Healthcare Market") |
| `description` | string | required | 2-line clamp detail text |
| `growth` | string | required | Growth percentage (e.g., "38.4%") |
| `metric` | string | required | Growth period (e.g., "2024-2030") |
| `icon` | ReactNode | BarChart3 | Override content icon |
| `className` | string | — | Additional CSS classes |
| `onClick` | `() => void` | — | Click handler |

### WHEN
- Use for Key Market Indicators, Trending Statistics sections
- Use when displaying numeric values with growth rates
- Use in grids of 2-4 cards

### WHEN NOT
- Don't use for content cards (reports, articles) — use ReportCard
- Don't use for simple stat numbers without descriptions — too heavy

### WHERE
Atomic level: **Molecule**. Used in TrendingStatistics section.

### HOW
```tsx
import { StatCard } from './molecules';

<StatCard
  category="Healthcare"
  value="$133.4B"
  label="AI in Healthcare Market"
  growth="38.4%"
  metric="2024-2030"
  description="Driven by diagnostic AI adoption and personalized medicine platforms."
  onClick={() => handleView('healthcare-ai')}
/>
```

---

## DataHighlightCard

### WHY
Daily data feeds need compact, data-first cards that prioritize the numeric value over descriptions. Unlike StatCard (which has a category badge, description paragraph, and CTA button), DataHighlightCard is minimal: value → title → growth → source.

### WHAT
Compact card: **time label** + **Zap icon** > **serif value** > **title** > **growth badge** (green chip with TrendingUp) > **footer** (source text + ArrowRight icon, border-top divider).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | required | Serif display value (e.g., "$2.4T") |
| `title` | string | required | Metric name (e.g., "Global Cloud Computing") |
| `source` | string | required | Data source (e.g., "Gartner", "IDC") |
| `growth` | string | required | Growth rate (e.g., "+18.2%") |
| `time` | string | required | Time label (e.g., "Today", "This Week") |
| `icon` | ReactNode | Zap | Override header icon |
| `className` | string | — | Additional CSS classes |
| `onClick` | `() => void` | — | Click handler |

**Visual differences from StatCard:**

| Feature | StatCard | DataHighlightCard |
|---------|----------|-------------------|
| Category badge | ✅ Coral rounded badge | ❌ None |
| Header icon | BarChart3 (in purple container) | Zap (inline, no container) |
| Value font size | `--text-xl` (Major Third) | `--text-base` (smaller) |
| Description | ✅ 2-line clamp paragraph | ❌ None |
| CTA button | ✅ "View Reports" secondary xs | ❌ None (ArrowRight hint) |
| Footer | Border-top + Button | Border-top + source + arrow |
| Padding | Card `padding="sm"` preset | Manual `padding: 14px` |
| Weight | Heavy (6 content layers) | Light (4 content layers) |

### WHEN
- Use for Daily Data Highlights, Market Pulse, data feed sections
- Use for real-time or frequently updated data points
- Use in grids of 3-6 compact cards
- Use when the numeric value is the hero (not the description)

### WHEN NOT
- Don't use for detailed content with descriptions (use StatCard)
- Don't use when growth data is unavailable (growth badge is a key visual element)
- Don't use for report cards (use ReportCard)

### WHERE
Atomic level: **Molecule**. Used in DailyDataHighlights section.

### HOW
```tsx
import { DataHighlightCard } from './molecules';

<DataHighlightCard
  time="Today"
  value="$2.4T"
  title="Global Cloud Computing Market"
  growth="+18.2%"
  source="Gartner"
  onClick={() => handleView('cloud-computing')}
/>

{/* In a grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {highlights.map(h => (
    <DataHighlightCard key={h.id} {...h} />
  ))}
</div>
```

---

## AnalystPickCardB

### WHY
Expert curation sections need a card that puts the analyst voice first (blockquote) with an embedded report mini-card, creating trust through attribution.

### WHAT
Card anatomy: **Analyst header** (initials avatar + name/role + Expert Pick coral badge) > **blockquote** (coral left-border, 3-line clamp) > **embedded mini-card** (portrait image + IndustryBadge + title + CardMetaRow B) > **footer** (LikeCounter + Explore Resources button).

### WHEN
- Use for Analyst Picks, Expert Recommendations sections
- Use when content has analyst attribution and quotes
- Use in grids of 2-3 cards

### WHEN NOT
- Don't use without analyst data (name, role, quote)
- Don't use for algorithmic recommendations (use ReportCard)

### WHERE
Atomic level: **Molecule**. Used in AnalystPicksSection.

### HOW
```tsx
import { AnalystPickCardB } from './molecules';

<AnalystPickCardB id="pick-1" image={report.image} title={report.title}
  industry="Healthcare" region="Global" date="Dec 2024"
  quote="This report redefines how we approach market sizing..."
  analystName="Dr. Sarah Chen" analystRole="Senior Research Analyst"
  analystInitials="SC" onClick={handleClick} />
```

---

# EVOLVED ATOMS (Report Store versions are canonical)

---

## Button (v4.0 - Evolved)

### What Changed from DS v3.4

| Addition | Description |
|----------|-------------|
| `xs` size | 28px height, 12px font — for compact card CTAs |
| `brand` variant | Red gradient shimmer — for high-impact CTAs |
| `iconOnly` mode | Square button (width = height) for icon-only buttons |
| `type` prop | `'button' \| 'submit' \| 'reset'` for form integration |
| `fullWidth` responsive | `w-full sm:w-auto` — full on mobile, auto on desktop |

### New Size: xs

| Property | Value |
|----------|-------|
| Height | 28px (h-7) |
| Padding-X | 0.75rem |
| Min-Width | 56px |
| Font Size | `--text-2xs` (12px) |
| Border Radius | `--radius-element` (5px) |

### WHEN to use xs
- Card footer CTAs (View Report, Explore Resources)
- ReportCard list layout CTA button
- Inline actions within tight layouts
- Secondary actions that should not compete with primary buttons

### WHEN NOT
- Don't use for primary page CTAs (too small)
- Don't use in hero sections
- Don't use for standalone actions

```tsx
<Button variant="secondary" size="xs" showArrow>View Report</Button>
<Button variant="ghost" size="sm" iconOnly icon={<Filter />} ariaLabel="Filter" />
```

---

## SectionHeading (v4.0 - Evolved)

### What Changed from DS v3.4

| Addition | Description |
|----------|-------------|
| `level` prop | `1 \| 2 \| 3` — renders correct h1/h2/h3 tag |
| `action` prop | `{ text, onClick }` — right-aligned CTALink |
| `endSlot` prop | ReactNode — right-aligned custom content (hidden mobile) |
| `labelEndSlot` prop | ReactNode — beside label (collapses below heading on mobile) |
| `labelPulse` prop | boolean — animated green dot before label |
| `title` as prop | string — heading text is now a prop, not children |
| `subtitle` prop | string — description below heading |
| `spacing` prop | `'default' \| 'compact'` — controls bottom margin |

### Heading Font
Font family `--font-serif`, weight `--font-weight-normal` (400), responsive size `clamp(1.375rem, 3vw, 1.875rem)`, color `rgba(0,0,0,0.88)`, tracking `[-0.01em]`.

### HOW (v4.0)
```tsx
<SectionHeading label="What's Hot" title="Trending Topics"
  subtitle="Research areas gaining traction this quarter"
  action={{ text: "View All Topics", onClick: handleClick }} labelPulse />

<SectionHeading label="Reports" title="Industry Reports"
  endSlot={<ViewToggle viewMode={mode} onViewModeChange={setMode} />}
  labelEndSlot={<Badge variant="rounded" size="xs" theme="brand" bordered>New</Badge>} />
```

---

# ORGANISMS (Page-Specific Patterns)

---

## Header (Report Store Navigation)

### WHY
The Report Store needs a multi-tier navigation distinct from the case study Navbar. It includes a top utility bar, main nav with industry dropdown, search, and mobile hamburger menu.

### WHAT
Three-tier header: (1) Top utility bar (trust message + contact, lg+ only), (2) Main navigation with logo + nav links + industry dropdown + contact CTA, (3) Mobile menu overlay with full nav + search.

**Key pattern:** Dropdown `onBlur` uses `relatedTarget`-based container check — NOT `setTimeout`.

### WHEN
- Use for Report Store and similar multi-section product pages
- Use when you need industry dropdown navigation

### WHEN NOT
- Don't use for case study pages (use Navbar from DS repo)
- Don't use for single-section landing pages (too heavy)

---

## MobileFilterBar + MobileFilterSheet

### WHY
Mobile users need filter access without scrolling back to the top. A floating bottom pill provides always-available filter access, and the full-screen sheet provides a spacious filter editing experience.

### WHAT
**MobileFilterBar:** Dark floating pill (`rgba(10,10,10,0.88)`, blur(20px)) centered at bottom of viewport. Shows active filter count.

**MobileFilterSheet:** Full-screen drawer with collapsible accordion sections, per-section active counts, scrollable content with sticky header/footer, sort toggle, focus trap.

### WHEN
- Use on any listing/catalog page with filters
- Use below `lg` breakpoint (hidden on desktop where sidebar filters exist)

### WHEN NOT
- Don't show on desktop (desktop has FiltersPanel sidebar)
- Don't use for pages without filtering capability

---

# TEMPLATES (Page Assembly Patterns)

---

## Report Store Page Template

### WHY
Product listing pages need a standardized assembly pattern that handles two modes: discovery (home) and filtered listing.

### WHAT
A dual-mode page template:

**Mode 1 — Home (Discovery):** Curated editorial sections when no filters are active.
**Mode 2 — Listing (Filtered):** Sidebar + card grid when industry/filters/search is active.

### Page Assembly

```
Header (sticky, glass-header)
HeroSection (dark, globe, search)

IF home mode:
  SectionWrapper(white)     > FeaturedResearch
  SectionWrapper(neutral50) > IndustrySectorsGrid
  SectionWrapper(white)     > RecommendedForYou
  SectionWrapper(neutral50) > AnalystPicksSection
  ... alternating white/neutral50 ...
  CustomResearchCTA (dark)

IF listing mode:
  ListingContextBanner (industry hero + filter chips)
  Container(page)
    2-column grid (lg):
      Left: IndustrySidebar (desktop filters)
      Right: Sort toolbar + ViewToggle + ReportCard grid/list + pagination

Footer (dark)
MobileFilterBar (floating, < lg)
MobileFilterSheet (drawer overlay)
BackToTop (floating)
Toaster (sonner)
```

### Background Alternation

| Surface | Token | Usage |
|---------|-------|-------|
| Hero/CTA/Footer | `bg="black"` | Dark impact sections |
| Odd sections | `bg="white"` | Primary content |
| Even sections | `bg="neutral50"` (`--warm-200`) | Visual rhythm break |

---

## Card Anatomy Standard

### WHY
Every report card across the page must follow the same visual anatomy for consistency across both grid and list layouts.

### WHAT — Grid Layout
The canonical grid card anatomy (ReportCard `layout="grid"`):

```
1. Image (16:9 aspect ratio)
   - overflow-hidden for img-zoom
   - gradient overlay (bottom 1/3)
   - optional overlayBadge (top-left)
2. Content padding (p-4, gap-2.5)
   a. IndustryBadge eyebrow (subcat or industry)
   b. Title (2-line clamp, --text-nav, font-weight 500)
   c. CardMetaRow (projection + region OR region + date)
   d. CardFooterRow (date — Variant A only)
```

### WHAT — List Layout
The canonical list card anatomy (ReportCard `layout="list"`):

```
1. Horizontal flex container
   a. Thumbnail (w-20 sm:w-28 md:w-36, self-stretch)
      - overflow-hidden for img-zoom
      - optional overlayBadge (top-left)
   b. Content column (flex-1, py-3 px-3 sm:px-4, gap-1.5)
      - IndustryBadge eyebrow
      - Title (2-line clamp, --text-nav)
      - Description (1-line clamp, sm+ only, optional)
      - CardMetaRow (mt-auto, pinned to bottom)
   c. Right column (hidden sm:flex, flex-col, items-end, py-3 pr-4)
      - Date (--text-2xs, top)
      - Projection badge (TrendingUp green, middle, if present)
      - CTA Button (secondary xs showArrow, bottom)
```

### What is NOT in either card layout
- No tables/figures meta
- No spacer div
- No border-top divider inside content area
- Grid: No "View Report" button (CTA is in list layout only)
- List: No CardFooterRow (date is in right column)
- List: No image gradient overlay (image is too small)

---

# DECISION FLOWCHARTS

---

## Which Card Component Should I Use?

```
Am I showing report/content cards?
  YES |
      Am I in a horizontal carousel on the home page?
        YES -> Use ReportCard layout="grid" (simpler, in flex-shrink-0 wrapper)
        NO  |
      Am I in the main listing grid/list with ViewToggle?
        YES -> Use ReportCard layout={viewMode} (grid or list, synced with toggle)
        NO  |
      Am I showing a featured/hero card?
        YES -> Use ResourceCard with variant="featured" (case study DS)
        NO  |
      Am I showing a ranked list (top downloads)?
        YES -> Use ResourceCard with variant="compact" (case study DS)
        NO  -> Use ReportCard layout="grid" (safe default)
  NO  |

Am I showing analyst recommendations?
  YES -> Use AnalystPickCardB
  NO  |

Am I showing key statistics with descriptions and CTAs?
  YES -> Use StatCard
  NO  |

Am I showing compact real-time data points?
  YES -> Use DataHighlightCard
  NO  -> Use Card component directly with custom content
```

---

## Which Scroll Component Should I Use?

```
Does the content have card hover effects (shadows, lift)?
  YES -> Use HorizontalScroll (transform-based, overflow-y visible)
  NO  |

Is it a simple tab bar, tag row, or pill strip?
  YES -> Use ScrollFade (native scroll, edge fades)
  NO  |

Do I need a scroll-to-top button?
  YES -> Is it a listing page with MobileFilterBar?
           YES -> Use BackToTop (mobile-aware positioning)
           NO  -> Use ScrollToTop from DS repo (Motion-based)
  NO  -> No scroll component needed
```

---

## Which Loading State Should I Use?

```
Is data loading for a card grid?
  YES -> Use SkeletonCard with variant matching ViewToggle's viewMode
         (variant="grid" for grid mode, variant="list" for list mode)
  NO  |

Did filters return zero results?
  YES -> Use EmptyState with clear-filters action
  NO  |

Is a section loading?
  YES -> Use SkeletonCard array matching expected layout
  NO  -> No loading state needed
```

---

## Which Animation Wrapper Should I Use?

```
Am I animating an entire page section?
  YES -> Use FadeInSection (heavier, section-level)
  NO  |

Am I animating individual cards in a grid?
  YES -> Use CardReveal with stagger delay
  NO  |

Am I animating an image load?
  YES -> Use RevealImage
  NO  -> No animation wrapper needed
```

---

## Am I Building a New Page? Complete Checklist

```
1. Start with page template:
   - Import Header + Footer (or Navbar for case study)
   - Define sections with SectionWrapper (alternating bg)
   - Wrap each section in FadeInSection

2. For each section:
   - Use SectionHeading for title/subtitle/label/action
   - Use Container for width constraint
   - Choose appropriate card components (see card flowchart)

3. For listing/catalog pages:
   - Add ViewToggle for list/grid switch
   - Add ReportCard with layout={viewMode} for cards
   - Add SkeletonCard with variant={viewMode} for loading
   - Add FiltersPanel for desktop filters
   - Add MobileFilterBar + MobileFilterSheet for mobile
   - Add EmptyState for zero results
   - Add BackToTop for long scrolling
   - Wrap each card in CardReveal for entrance animations

4. For editorial/content pages:
   - Use FeaturedResearch pattern for hero + side grid
   - Use HorizontalScroll for card carousels
   - Use ScrollFade for tab bars
   - Use StatCard / DataHighlightCard for data sections

5. Final checks:
   - All icons use iconColors.content or iconColors.utility
   - All report cards use ReportCard (not deprecated ReportGridCard)
   - Touch targets meet 44px minimum on mobile
   - SkeletonCard variant matches ViewToggle viewMode
   - EmptyState has recovery action
   - BackToTop positioned to clear MobileFilterBar
   - prefers-reduced-motion respected
   - focus-visible rings on all interactive elements
```

---

## Component Triad: ViewToggle ↔ ReportCard ↔ SkeletonCard

These three components are designed to work as a unified system. Their mode/layout/variant values are intentionally aligned:

```
ViewToggle.viewMode ───→ ReportCard.layout ───→ card renders in matching format
         │
         └──────────→ SkeletonCard.variant ──→ loading skeleton matches format

  "grid"  ─→  layout="grid"   ─→  Vertical card (image top, content bottom)
              variant="grid"  ─→  Vertical skeleton

  "list"  ─→  layout="list"   ─→  Horizontal card (thumbnail left, content+CTA right)
              variant="list"  ─→  Horizontal skeleton
```

This alignment means you can use a single `viewMode` state variable to drive all three:

```tsx
const [viewMode, setViewMode] = useState<ViewMode>('grid');

<ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
{isLoading
  ? <SkeletonCard variant={viewMode} />
  : <ReportCard layout={viewMode} {...report} />
}
```

---

**Last Updated:** March 11, 2026
**Design System Version:** 4.1
**Repository:** vsoffice001-cloud/Design-System-vs-26
**Companion Docs:** `COMPONENT_GUIDELINES_4WH.md`, `ai-context/CORE.md`
