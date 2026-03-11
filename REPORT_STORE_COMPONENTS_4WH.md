# Report Store Components - 4W+H Framework
## Complete Reference for Building Product Pages with the Ken Bold Design System

**Version:** 4.0 (March 2026)
**Source Page:** Report Store (Ken Research)
**Design System:** Ken Bold DS v4.0
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
| Atom | `Tooltip` | Universal - any page |
| Atom | `ViewToggle` | Universal - any listing page |
| Atom | `FadeInSection` | Universal - any page |
| Molecule | `CardReveal` | Universal - any card grid |
| Molecule | `RevealImage` | Universal - any page with images |
| Molecule | `SkeletonCard` | Universal - any async data page |
| Molecule | `EmptyState` | Universal - any filterable listing |
| Molecule | `BackToTop` | Universal - any long page |
| Molecule | `HorizontalScroll` | Universal - any card carousel |
| Molecule | `ScrollFade` | Universal - any overflow tabs/pills |
| Molecule | `IndustryBadge` (EyebrowLabel) | Universal - any card/listing |
| Molecule | `CardMetaRow` (MetaRow) | Universal - any card with metadata |
| Molecule | `CardFooterRow` | Universal - any card with date |
| Molecule | `ReportGridCard` | Reusable - report/content grid card |
| Molecule | `StatCard` | Reusable - data visualization card |
| Molecule | `DataHighlightCard` | Reusable - stat highlight card |
| Molecule | `AnalystPickCardB` | Reusable - curated/expert card |

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
- Don't use on touch-only mobile (no hover) -- pair with another pattern
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
| `count` | number | - | Optional item count (shown on sm+) |
| `countLabel` | string | `'items'` | Label after count |

### WHEN
- Use on any listing page with card content (reports, articles, case studies)
- Use when both list and grid layouts are supported
- Use in combination with sort controls in a toolbar

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

const [viewMode, setViewMode] = useState<ViewMode>('list');

<ViewToggle
  viewMode={viewMode}
  onViewModeChange={setViewMode}
  count={filteredReports.length}
  countLabel="reports"
/>
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
- Don't use inside cards (use CardReveal instead -- lighter)
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
Cards and listings need a consistent text-only eyebrow label above titles. This is NOT a chip or badge with background -- it is a subtle category identifier that sits at the top of card content areas.

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
Atomic level: **Molecule** (composed atom). Used in ReportGridCard, AnalystPickCardB, ResourceCard.

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
Atomic level: **Molecule**. Used in ReportGridCard, AnalystPickCardB, ResourceCard.

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

### WHEN NOT
- Don't use with CardMetaRow Variant B (date is already inline there)
- Don't use when date is not relevant to the content

### WHERE
Atomic level: **Molecule**. Used in ReportGridCard (Variant A only).

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
- Use around each card in a grid listing (wrap each ResourceCard/ReportGridCard)
- Use with stagger: `delay={index * 50}` capped at first 8 cards
- Use for any individual card that needs entrance animation

### WHEN NOT
- Don't use for entire sections (use FadeInSection instead)
- Don't use for above-the-fold cards (they should be immediately visible)
- Don't nest CardReveal inside FadeInSection (double animation)

### WHERE
Atomic level: **Molecule**. Used in App.tsx listing mode around each ResourceCard.

### HOW
```tsx
import { CardReveal } from './molecules';

{filteredReports.map((report, idx) => (
  <CardReveal key={report.id} delay={idx < 8 ? idx * 50 : 0}>
    <ResourceCard variant="grid" report={report} />
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
- Use the same variant as the final card (grid skeleton for grid view, list for list view)
- Show 6-12 skeletons matching the expected grid layout

### WHEN NOT
- Don't use indefinitely (always resolve to real content or EmptyState)
- Don't mix skeleton variants (all grid or all list in one view)

### WHERE
Atomic level: **Molecule**. Used in App.tsx listing mode during loading states.

### HOW
```tsx
import { SkeletonCard } from './molecules';

{isLoading && Array.from({ length: 6 }).map((_, i) => (
  <SkeletonCard key={i} variant="grid" aspectRatio="16/9" />
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
- Don't use alongside ScrollToTop from the DS (pick one -- BackToTop is mobile-aware)

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
- Don't use for simple tag/pill scrolling (use ScrollFade -- simpler)
- Don't use for vertical content
- Don't use when native `overflow-x: auto` works fine (no hover shadows to clip)

### WHERE
Atomic level: **Molecule**. Used in HomeSectionsA/B for card carousels.

### HOW
```tsx
import { HorizontalScroll } from './molecules';

<HorizontalScroll fadeBg="white" gap="gap-4">
  {reports.map(r => (
    <div key={r.id} className="flex-shrink-0 w-64">
      <ReportGridCard {...r} />
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

## ReportGridCard

### WHY
A standalone grid card composition used across multiple home page sections. Simpler API than ResourceCard -- just pass flat props instead of a report object.

### WHAT
Card anatomy: **16:9 image** (with gradient overlay + optional badge) > **IndustryBadge eyebrow** > **title** (2-line clamp) > **CardMetaRow** > **CardFooterRow** (Variant A only). Uses Card component for container.

### WHEN
- Use in horizontal carousels and curated grids on home pages
- Use when you need a simple card with flat props (not a complex report object)
- Use with `metaVariant="A"` (projection + region + date) or `"B"` (region + date only)

### WHEN NOT
- Don't use in the main listing grid (use ResourceCard with `variant="grid"` there)
- Don't use when you need list/compact/featured variants (use ResourceCard)

### WHERE
Atomic level: **Molecule** (organism-level composition). Used in home page carousels.

### HOW
```tsx
import { ReportGridCard } from './molecules';

<ReportGridCard
  id={report.id} image={report.image} title={report.title}
  industry={report.industry} subcat={report.subcat}
  projection={report.projection} region={report.region}
  date={report.date} onClick={handleView}
  aspectRatio="16/9" metaVariant="A"
/>
```

---

## StatCard

### WHY
Market indicator sections need a consistent card layout for displaying key statistics with growth metrics, descriptions, and CTAs.

### WHAT
Card anatomy: **Category badge** (coral/rounded) + **content icon** > **serif value** (Major Third xl) > **label** > **growth metric** (green chip with CAGR Tooltip) > **description** (2-line clamp) > **footer CTA** (secondary xs button).

### WHEN
- Use for Key Market Indicators, Trending Statistics sections
- Use when displaying numeric values with growth rates
- Use in grids of 2-4 cards

### WHEN NOT
- Don't use for content cards (reports, articles) -- use ReportGridCard
- Don't use for simple stat numbers without descriptions -- too heavy

### WHERE
Atomic level: **Molecule**. Used in TrendingStatistics section.

### HOW
```tsx
import { StatCard } from './molecules';

<StatCard category="Healthcare" value="$133.4B" label="AI in Healthcare Market"
  growth="38.4%" metric="2024-2030" description="Driven by diagnostic AI adoption..."
  onClick={() => handleView('healthcare-ai')} />
```

---

## DataHighlightCard

### WHY
Daily data feeds need compact, data-first cards that prioritize the numeric value over descriptions.

### WHAT
Compact card: **time label** + **Zap icon** > **serif value** > **title** > **growth badge** (green chip) > **footer** (source + arrow).

### WHEN
- Use for Daily Data Highlights, Market Pulse sections
- Use for real-time or frequently updated data points
- Use in grids of 3-6 compact cards

### WHEN NOT
- Don't use for detailed content (too compact)
- Don't use when growth data is unavailable

### WHERE
Atomic level: **Molecule**. Used in DailyDataHighlights section.

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
- Don't use for algorithmic recommendations (use ReportGridCard)

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
| `xs` size | 28px height, 12px font -- for compact card CTAs |
| `brand` variant | Red gradient shimmer -- for high-impact CTAs |
| `iconOnly` mode | Square button (width = height) for icon-only buttons |
| `type` prop | `'button' \| 'submit' \| 'reset'` for form integration |
| `fullWidth` responsive | `w-full sm:w-auto` -- full on mobile, auto on desktop |

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
| `level` prop | `1 \| 2 \| 3` -- renders correct h1/h2/h3 tag |
| `action` prop | `{ text, onClick }` -- right-aligned CTALink |
| `endSlot` prop | ReactNode -- right-aligned custom content (hidden mobile) |
| `labelEndSlot` prop | ReactNode -- beside label (collapses below heading on mobile) |
| `labelPulse` prop | boolean -- animated green dot before label |
| `title` as prop | string -- heading text is now a prop, not children |
| `subtitle` prop | string -- description below heading |
| `spacing` prop | `'default' \| 'compact'` -- controls bottom margin |

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

**Key pattern:** Dropdown `onBlur` uses `relatedTarget`-based container check -- NOT `setTimeout`.

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

**Mode 1 -- Home (Discovery):** Curated editorial sections when no filters are active.
**Mode 2 -- Listing (Filtered):** Sidebar + card grid when industry/filters/search is active.

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
      Right: Sort toolbar + ViewToggle + card grid + pagination

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

## Card Anatomy Standard (GridCard)

### WHY
Every grid card across the page must follow the same visual anatomy for consistency.

### WHAT
The canonical grid card anatomy:

```
1. Image (16:9 aspect ratio)
   - overflow-hidden for img-zoom
   - gradient overlay (bottom 1/3)
   - optional badge (top-left)
2. Content padding (p-4, gap-2.5)
   a. IndustryBadge eyebrow (subcat or industry)
   b. Title (2-line clamp, --text-nav, font-weight 500)
   c. CardMetaRow (projection + region OR region + date)
   d. CardFooterRow (date -- Variant A only)
```

### What is NOT in the card
- No tables/figures meta
- No spacer div
- No border-top divider
- No View Report button (removed from grid variant)

---

# DECISION FLOWCHARTS

---

## Which Card Component Should I Use?

```
Am I building a horizontal carousel?
  YES -> Use ReportGridCard (simpler API, flat props)
  NO  |

Am I building a main listing grid/list?
  YES -> Use ResourceCard with variant="grid" or variant="list"
  NO  |

Am I showing a featured/hero card?
  YES -> Use ResourceCard with variant="featured"
  NO  |

Am I showing a ranked list (top downloads)?
  YES -> Use ResourceCard with variant="compact"
  NO  |

Am I showing analyst recommendations?
  YES -> Use AnalystPickCardB
  NO  |

Am I showing key statistics?
  YES -> Use StatCard
  NO  |

Am I showing real-time data points?
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
  YES -> Use SkeletonCard (match variant to view mode)
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
   - Add FiltersPanel for desktop filters
   - Add MobileFilterBar + MobileFilterSheet for mobile
   - Add SkeletonCard for loading states
   - Add EmptyState for zero results
   - Add BackToTop for long scrolling

4. For editorial/content pages:
   - Use FeaturedResearch pattern for hero + side grid
   - Use HorizontalScroll for card carousels
   - Use ScrollFade for tab bars
   - Use StatCard / DataHighlightCard for data sections

5. Final checks:
   - All icons use iconColors.content or iconColors.utility
   - All cards follow the standard anatomy (no rogue dividers/buttons)
   - Touch targets meet 44px minimum on mobile
   - SkeletonCard variant matches view mode
   - EmptyState has recovery action
   - BackToTop positioned to clear MobileFilterBar
   - prefers-reduced-motion respected
   - focus-visible rings on all interactive elements
```

---

**Last Updated:** March 10, 2026
**Design System Version:** 4.0
**Repository:** vsoffice001-cloud/Design-System-vs-26
**Companion Docs:** `COMPONENT_GUIDELINES_4WH.md`, `ai-context/CORE.md`
