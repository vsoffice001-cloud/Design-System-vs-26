# Report Store Components - 4W+H Framework
## Complete Reference for Building Product Pages with the Ken Bold Design System

**Version:** 4.2 (March 2026)
**Source Page:** Report Store (Ken Research)
**Design System:** Ken Bold DS v4.2
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
| **Atom** | **`FilterCheckbox`** | **Universal — any filter panel, TOC, settings, sidebar list** |
| **Atom** | **`FilterChip`** | **Universal — any multi-select chip group, mobile filter sheet** |
| **Atom** | **`FilterSearchInput`** | **Universal — any panel-level search-within-content** |
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
| **Molecule** | **`FilterAccordion`** | **Universal — any collapsible section in sidebars/sheets** |
| **Molecule** | **`SidebarPanel`** | **Universal — any sticky sidebar container (filters, TOC, nav, settings)** |
| **Molecule** | **`ActiveFilterChip`** | **Universal — any removable filter tag display** |
| **Organism** | **`ReportCard`** ★ | **Canonical — grid + list layouts** |
| ~~Organism~~ | ~~`ReportGridCard`~~ | **@deprecated** — wrapper → `ReportCard layout="grid"` |
| Molecule | `StatCard` | Reusable — data visualization card |
| Molecule | `DataHighlightCard` | Reusable — stat highlight card |
| Molecule | `AnalystPickCardB` | Reusable — curated/expert card |
| **Organism** | **`IndustrySidebar`** | **Reusable — desktop filter panel (composes SidebarPanel + FilterAccordion + FilterCheckbox + FilterSearchInput)** |
| **Organism** | **`MobileFilterSheet`** | **Reusable — mobile filter drawer (composes FilterAccordion sheet + FilterChip)** |
| **Molecule** | **`MobileFilterBar`** | **Universal — floating filter access pill for mobile** |
| **Organism** | **`ListingContextBanner`** | **Reusable — industry hero banner + active filter chips** |
| **Hook** | **`useReportFilters`** | **Reusable — filter state, cascade logic, search, sort, pagination** |

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
| `.scrollbar-hide` | Hide native scrollbar | Horizontal scroll containers, sidebar panels |
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
Atomic level: **Atom**. Used inside ViewToggle, StatCard, CardMetaRow, FilterAccordion, and any icon button.

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

## FilterCheckbox

### WHY
Filter panels, TOC navigation, settings panels, and any sidebar list need checkboxes. Without a DS-level checkbox, each panel builds its own with inconsistent box sizing, border colors, hover effects, and accessibility. FilterCheckbox is the canonical checkbox control for all sidebar and panel contexts.

### WHAT
A custom checkbox row with 6 interaction states, ARIA compliance, keyboard support, and optional count badge.

**Visual spec:**
- Box: 16×16px, `--radius-inner` (2.5px), 1.5px border
- Row: full-width, 6px 16px padding, optional 28px left-indent for nesting
- Count: right-aligned, tabular-nums, pill background when checked

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | required | Display label |
| `checked` | boolean | required | Controlled checked state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number \| string | — | Right-aligned count or text |
| `indented` | boolean | false | Indent for nested items (subcategories) |
| `disabled` | boolean | false | Disabled state |
| `className` | string | — | Additional CSS classes |

**Interaction States:**

| State | Box | Row Background | Left Border | Label Color |
|-------|-----|---------------|-------------|-------------|
| Default | white bg, 18% border, inset shadow | transparent | transparent | 50% black |
| Hover | — | `rgba(0,0,0,0.025)` | — | — |
| Checked | `--text-primary` fill, white Check ✓ | `rgba(0,0,0,0.03)` | 2px solid 60% black | 85% black |
| Checked+Hover | — | stays 3% | — | — |
| Focus-Visible | — | — | — | 2px brand-red ring (global CSS) |
| Disabled | 50% opacity | — | — | not-allowed cursor |

### WHEN
- Use inside FilterAccordion sections for multi-select filters (tags, regions, years)
- Use for TOC checkable items
- Use for settings toggle lists
- Use for any list where users select multiple items

### WHEN NOT
- Don't use for single-select (use radio buttons or FilterChip)
- Don't use for mobile touch contexts (use FilterChip — larger touch target)
- Don't use standalone outside a panel/list context

### WHERE
Atomic level: **Atom**. File: `FilterCheckbox.tsx`. Used in IndustrySidebar.

### HOW
```tsx
import { FilterCheckbox } from './FilterCheckbox';

<FilterCheckbox label="Global" checked={selectedRegions.has('Global')}
  onToggle={() => toggleRegion('Global')} count={42} />

<FilterCheckbox label="AI & Machine Learning" checked={true}
  onToggle={() => toggle('AI')} indented />

<FilterCheckbox label="Locked Section" disabled />
```

---

## FilterChip

### WHY
Mobile filter sheets, tag clouds, and any multi-select chip group need a consistent toggle chip. Without a DS atom, each sheet builds its own with inconsistent touch targets, active states, and label truncation.

### WHAT
A pill-shaped toggle button with active/inactive states, optional count, and 40px minimum height for mobile touch compliance.

**Visual spec:**
- Radius: `--radius-element` (5px)
- Min height: 40px (padding brings effective touch target to 44px)
- Active: 6% bg, 20% border, shadow-sm, 600 weight, Check icon prefix
- Inactive: white bg, 8% border, 55% text, 400 weight

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | required | Display label |
| `active` | boolean | required | Controlled active state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number \| string | — | Count displayed after label |
| `disabled` | boolean | false | Disabled state |
| `className` | string | — | Additional CSS classes |

**Interaction States:**

| State | Background | Border | Text | Weight | Icon |
|-------|-----------|--------|------|--------|------|
| Default | white | 8% | 55% black | 400 | none |
| Hover | 4% | 14% | — | — | — |
| Active | 6% | 20% | `--text-primary` | 600 | Check ✓ |
| Active+Hover | 8% | 20% | — | — | — |
| Focus-Visible | — | — | — | — | 2px brand-red ring |
| Pressed | scale(0.97) | — | — | — | — |

### WHEN
- Use in MobileFilterSheet for industry, region, year, sort selections
- Use for tag clouds and multi-select chip groups
- Use when mobile touch targets need to be large (40px+ height)

### WHEN NOT
- Don't use in desktop sidebar panels (use FilterCheckbox — more compact)
- Don't use for single items (use a button)
- Don't use for non-toggle actions (use Button)

### WHERE
Atomic level: **Atom**. File: `FilterChip.tsx`. Used in MobileFilterSheet.

### HOW
```tsx
import { FilterChip } from './FilterChip';

<div className="flex flex-wrap gap-2">
  {industries.map(ind => (
    <FilterChip key={ind.name} label={ind.name}
      active={selected === ind.name} onToggle={() => select(ind.name)}
      count={ind.count} />
  ))}
</div>
```

---

## FilterSearchInput

### WHY
Sidebar filter panels with many options (14 industries, 260+ subcategories, 50+ tags) need a way to search within the panel. Without a DS atom, each panel inlines its own search JSX with inconsistent border states and clear button behavior.

### WHAT
A compact search input with Search icon, placeholder, typing indicator (border darkens), and X clear button.

**Visual spec:**
- Font: `--text-2xs` (12px) — compact for sidebar use
- Border: `rgba(0,0,0,0.08)` default → `rgba(0,0,0,0.2)` when has value
- Radius: `--radius-inner` (2.5px)
- Clear button: appears only when value is non-empty

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | required | Controlled value |
| `onChange` | `(value: string) => void` | required | Change handler |
| `onClear` | `() => void` | — | Optional clear callback |
| `placeholder` | string | `'Search filters...'` | Placeholder text |
| `ariaLabel` | string | `'Search filter options'` | Aria label |
| `className` | string | — | Additional CSS classes |

**Interaction States:**

| State | Border | Icon | Clear Button |
|-------|--------|------|-------------|
| Empty | 8% | utility gray | hidden |
| Typing | 20% (darker) | utility gray | visible |
| Focused | 20% | — | — |
| Focus-Within | brand-red ring (container) | — | — |

### WHEN
- Use in IndustrySidebar for search-within-filters
- Use in any panel with 8+ items that need quick filtering
- Use in TOC panels for search-within-sections

### WHEN NOT
- Don't use for page-level search (use HeroSection search bar — larger)
- Don't use for forms (use standard input components)
- Don't use when the list has <8 items (visual scanning is faster)

### WHERE
Atomic level: **Atom**. File: `FilterSearchInput.tsx`. Used in IndustrySidebar.

### HOW
```tsx
import { FilterSearchInput } from './FilterSearchInput';

const [query, setQuery] = useState('');

<FilterSearchInput value={query} onChange={setQuery}
  placeholder="Search industries..." />
```

---

# MOLECULES

---

## FilterAccordion

### WHY
Filter panels need collapsible sections with icons, labels, active counts, and expand/collapse animation. Previously, `FilterSection` was defined as a local function inside **both** IndustrySidebar AND MobileFilterSheet — two separate implementations of the same pattern with different prop signatures. FilterAccordion unifies them with a `variant` prop.

### WHAT
A collapsible section header + content area with two visual variants:

**Sidebar variant (desktop):**
```
┌──────────────────────────────────┐
│ [icon] INDUSTRIES       (3) ▶ │  ← uppercase, 2xs, bordered icon box, chevron-right
├──────────────────────────────────┤
│  (collapsible children)       │  ← maxHeight 0→600px, 200ms
└──────────────────────────────────┘
```

**Sheet variant (mobile):**
```
┌──────────────────────────────────┐
│ (●) Industry           (3) ▼ │  ← normal-case, nav size, tinted circle, chevron-down
├──────────────────────────────────┤
│  (flex-wrap gap-2 chips)      │  ← maxHeight 0→600px, 300ms cubic-bezier
└──────────────────────────────────┘
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | ReactNode | required | Section icon |
| `label` | string | required | Section label |
| `isOpen` | boolean | required | Controlled open state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number | — | Active selection count (badge appears when >0) |
| `children` | ReactNode | required | Collapsible content |
| `disabled` | boolean | false | Disabled state (sidebar only) |
| `disabledHint` | string | — | Hint text below disabled header |
| `variant` | `'sidebar' \| 'sheet'` | `'sidebar'` | Visual variant |
| `className` | string | — | Additional CSS classes |

**Sidebar variant interaction states:**

| State | Background | Icon Box | Label Color | Badge |
|-------|-----------|----------|-------------|-------|
| Default (closed) | transparent | 8% border, white bg | 45% | hidden |
| Open | 1.5% bg | — | — | hidden |
| Hover | 4% bg | — | — | — |
| Active (has selections) | 2.5% bg | 20% border, 4% bg | 70% | black pill w/ count |
| Disabled | 1.5% bg, 55% opacity | — | — | Lock icon |

### WHEN
- Use in IndustrySidebar for filter section grouping
- Use in MobileFilterSheet for mobile filter sections
- Use for any accordion in sidebar panels (settings, nav groups)
- Use `variant="sidebar"` for desktop side panels
- Use `variant="sheet"` for mobile drawers and bottom sheets

### WHEN NOT
- Don't use for page-level accordions/FAQs (use CollapsibleSection — different visual weight)
- Don't use for single non-collapsible sections

### WHERE
Atomic level: **Molecule**. File: `molecules/FilterAccordion.tsx`. Used in IndustrySidebar and MobileFilterSheet.

### HOW
```tsx
import { FilterAccordion } from './molecules';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterChip } from './FilterChip';

{/* Desktop sidebar */}
<FilterAccordion variant="sidebar" icon={<MapPin />} label="Regions"
  isOpen={open} onToggle={toggle} count={selectedRegions.size}>
  {regions.map(r => (
    <FilterCheckbox key={r} label={r} checked={selected.has(r)} onToggle={() => toggle(r)} />
  ))}
</FilterAccordion>

{/* Mobile sheet */}
<FilterAccordion variant="sheet" icon={<MapPin />} label="Region"
  isOpen={open} onToggle={toggle} count={selectedRegions.length}>
  {regions.map(r => (
    <FilterChip key={r} label={r} active={selected.includes(r)} onToggle={() => toggle(r)} />
  ))}
</FilterAccordion>

{/* Disabled with hint */}
<FilterAccordion variant="sidebar" icon={<Tag />} label="Tags"
  isOpen={false} onToggle={() => {}} disabled disabledHint="Select an industry first">
  ...
</FilterAccordion>
```

---

## SidebarPanel

### WHY
Every sticky sidebar (filter panel, TOC, side nav, settings) needs the same container pattern: sticky positioning relative to the header, max-height for viewport-fit scrolling, elevation (border + shadow), rounded corners, a fixed header zone, a scrollable body, and a fixed footer zone. Without a DS molecule, each page hand-codes its own `<aside>` with bespoke positioning that drifts across pages.

### WHAT
A three-zone container: **header** (sticky top, `--black-50` bg) + **scrollable body** (flex-1, `.scrollbar-hide`) + **footer** (sticky bottom, `--black-50` bg). Hidden below configurable breakpoint.

**Visual spec:**
- Width: `w-60` (240px), flex-shrink-0
- Sticky top: `72px` (header height) — configurable
- Max height: `calc(100vh - stickyTop - 16px)`
- Border: `1px solid rgba(0,0,0,0.08)`
- Radius: `10px`
- Shadow: `0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)`
- Background: white
- Header/Footer separator: `1px solid rgba(0,0,0,0.06)`
- Hidden: below `lg` breakpoint (mobile uses sheet/drawer)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | ReactNode | — | Fixed header zone |
| `children` | ReactNode | required | Scrollable body content |
| `footer` | ReactNode | — | Fixed footer zone |
| `stickyTop` | number | 72 | Top offset in px |
| `width` | string | `'w-60'` | Width class |
| `hideBelow` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Hide breakpoint |
| `className` | string | — | Additional CSS classes |
| `scrollRef` | `RefObject<HTMLDivElement>` | — | Ref for scrollable body |

### WHEN
- Use for filter panels (Report Store IndustrySidebar)
- Use for Table of Contents panels (report detail pages)
- Use for side navigation panels (documentation, settings)
- Use for any sticky sidebar that needs header/body/footer zones

### WHEN NOT
- Don't use for full-width sidebars (this is a fixed-width panel)
- Don't use on mobile (hidden by default; use MobileFilterSheet or equivalent)
- Don't use for non-sticky content (use a regular aside)

### WHERE
Atomic level: **Molecule** (container pattern). File: `molecules/SidebarPanel.tsx`. Used by IndustrySidebar.

### HOW
```tsx
import { SidebarPanel } from './molecules';

{/* Filter panel */}
<SidebarPanel
  header={<div className="p-4"><h3>Filters</h3></div>}
  footer={<div className="p-3"><p>1,200+ reports available</p></div>}
>
  <FilterAccordion ...>...</FilterAccordion>
  <FilterAccordion ...>...</FilterAccordion>
</SidebarPanel>

{/* Table of Contents */}
<SidebarPanel stickyTop={80} width="w-56"
  header={<div className="p-3"><h4>On This Page</h4></div>}>
  <nav>
    <a href="#section-1">Introduction</a>
    <a href="#section-2">Methodology</a>
  </nav>
</SidebarPanel>

{/* Settings panel on xl+ only */}
<SidebarPanel hideBelow="xl" width="w-64">
  <SettingsForm />
</SidebarPanel>
```

---

## ActiveFilterChip

### WHY
When users apply multiple filters across different categories (industry, region, year, tag), they need to see what's active and remove individual filters. Each filter type needs a distinct color so users can visually scan "I have 2 region filters and 1 tag filter." Without a DS molecule, each banner builds its own chip rendering with inconsistent colors.

### WHAT
A removable pill chip with color-coding by filter type. Shows label + X remove button.

**Color coding:**

| Type | Background | Border |
|------|-----------|--------|
| `search` | gray 4% | gray 10% |
| `industry` | gray 4% | gray 12% |
| `subIndustry` | purple 6% | purple 14% |
| `tag` | green 6% | green 14% |
| `region` | blue 6% | blue 14% |
| `year` | amber 6% | amber 14% |

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | required | Filter value display text |
| `type` | `ActiveFilterType` | required | Color-code type |
| `onRemove` | `() => void` | required | Remove callback |
| `className` | string | — | Additional CSS classes |

### WHEN
- Use in ListingContextBanner for displaying active filter chips
- Use in any toolbar or banner showing current filter state

### WHEN NOT
- Don't use for toggle selection (use FilterChip)
- Don't use for non-removable tags (use Badge)

### WHERE
Atomic level: **Molecule**. File: `molecules/ActiveFilterChip.tsx`. Used in ListingContextBanner.

### HOW
```tsx
import { ActiveFilterChip } from './molecules';

<div className="flex flex-wrap gap-1.5">
  <ActiveFilterChip label="Global" type="region" onRemove={() => removeRegion('Global')} />
  <ActiveFilterChip label="AI & ML" type="subIndustry" onRemove={() => removeSub('AI & ML')} />
  <ActiveFilterChip label="2024" type="year" onRemove={() => removeYear('2024')} />
  <ActiveFilterChip label='"healthcare"' type="search" onRemove={removeSearch} />
</div>
```

---

## IndustryBadge (EyebrowLabel)

_(Unchanged from v4.1 — see above)_

## CardMetaRow

_(Unchanged from v4.1 — see above)_

## CardFooterRow

_(Unchanged from v4.1 — see above)_

## CardReveal, RevealImage, SkeletonCard, EmptyState, BackToTop, HorizontalScroll, ScrollFade

_(Unchanged from v4.1 — see entries above)_

---

# ORGANISMS

---

## IndustrySidebar

### WHY
Desktop listing pages need a persistent filter panel that stays visible while scrolling through results. The sidebar needs to handle: industry tree navigation with expand/collapse, 4 filter categories (industries, tags, regions, years), cross-category dependencies (tags locked until industry selected), in-panel search, active count badges, and auto-scroll to active selections.

### WHAT
A desktop-only filter organism that composes `SidebarPanel` + `FilterAccordion` + `FilterCheckbox` + `FilterSearchInput`.

**Anatomy:**
```
┌────────────────────────────┐
│  [≡] FILTERS    (5)  × Clear │  ← SidebarPanel.header (sticky)
├────────────────────────────┤
│  [🔍 Search filters... ]    │  ← FilterSearchInput
├────────────────────────────┤
│  [ico] INDUSTRIES  (1) ▶     │  ← FilterAccordion sidebar
│    ▶ Healthcare      2,847 │    ← Tree row (expand/collapse)
│    ▶ Technology      3,215 │    ← Selected: black left-border
│      ├─ AI & ML             │    ← Subcategory (indented)
│      └─ Cloud Computing     │
│    ...                      │
│    + Show all 14 industries │
├────────────────────────────┤
│  [🔒] TAGS       disabled   │  ← Disabled until industry selected
├────────────────────────────┤
│  [ico] REGIONS    (2) ▶     │  ← FilterCheckbox items
├────────────────────────────┤
│  [ico] PUBLISH YEAR (1) ▶   │  ← FilterCheckbox items
├────────────────────────────┤
│  18,500+ reports available  │  ← SidebarPanel.footer (sticky)
└────────────────────────────┘
```

**Special behaviors:**
1. **Search-within-filters:** Typing in FilterSearchInput auto-opens sections with matching items
2. **Industry tree:** Chevron expands subcategories; clicking industry name selects it
3. **Auto-expand:** When subcategories are active, their parent industry auto-expands
4. **Auto-scroll:** After expand animation (220ms delay), scrolls to active subcategory
5. **Show All:** Industries list truncated to 8, expandable to all 14
6. **Tags dependency:** Tags section disabled until an industry is selected

### WHEN
- Use on any desktop listing page with multi-category filtering
- Use when filter categories form a hierarchy (industry → subcategory → tag)

### WHEN NOT
- Don't use on mobile (use MobileFilterBar + MobileFilterSheet)
- Don't use for single-category filtering (overkill)

### WHERE
Atomic level: **Organism**. File: `IndustrySidebar.tsx`. Used in listing mode layout.

---

## MobileFilterSheet

### WHY
Mobile users can't see a desktop sidebar. They need a full-screen drawer that provides spacious filter editing with large touch targets, sort integration, and easy dismissal.

### WHAT
A full-screen drawer that slides from the right, composes `FilterAccordion` (sheet variant) + `FilterChip`, with sticky header/footer.

**Features:**
- Slide-from-right: `translateX(100%) → translateX(0)`, 300ms cubic-bezier
- Body scroll lock: `document.body.style.overflow = 'hidden'` while open
- Focus trap: Tab/Shift+Tab cycles within sheet, Escape closes
- Backdrop: `rgba(0,0,0,0.4)`, click to close
- Max-width: 380px, full height
- Sort integration: Sort options shown as top-level FilterChip section
- Sticky footer: Brand "Show Results" button

### WHEN
- Use on any listing page below `lg` breakpoint
- Use with MobileFilterBar (floating pill that opens this sheet)

### WHEN NOT
- Don't show on desktop (desktop has IndustrySidebar)
- Don't use for non-filter content (use a generic drawer)

### WHERE
Atomic level: **Organism**. File: `MobileFilterSheet.tsx`. Used in App.tsx.

---

## MobileFilterBar

### WHY
Mobile users scrolling through results need persistent filter access. A floating bottom pill is always visible without obscuring content, using glassmorphism to blend with any background.

### WHAT
A centered floating pill at the bottom of the viewport with dark glass background, Filters label, and optional active count badge.

**Visual spec:**
- Position: `fixed bottom-0`, centered, `z-40`
- Padding: `max(1rem, env(safe-area-inset-bottom, 1rem))` for notch phones
- Background: `rgba(10,10,10,0.88)` + `blur(20px) saturate(180%)`
- Shadow: 3-layer (`8px/32px`, `2px/8px`, inset highlight)
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: pill (9999px)
- Badge: `--brand-red` background when active filters exist
- Touch: `active:scale(0.97)` press feedback
- Hidden: `lg:hidden` (desktop has sidebar)

### WHEN
- Use on any listing page that has MobileFilterSheet
- Use below `lg` breakpoint

### WHEN NOT
- Don't use on desktop
- Don't use on pages without filtering

### WHERE
Atomic level: **Molecule**. File: `MobileFilterBar.tsx`. Used in App.tsx.

### HOW
```tsx
import { MobileFilterBar } from './MobileFilterBar';
import { MobileFilterSheet } from './MobileFilterSheet';

const [open, setOpen] = useState(false);

<MobileFilterBar activeFilterCount={3} onOpenFilters={() => setOpen(true)} />
<MobileFilterSheet isOpen={open} onClose={() => setOpen(false)} ... />
```

---

## ListingContextBanner

### WHY
When users activate filters, they need immediate visual feedback showing what's active. The banner also serves as a quick-access point for the selected industry's subcategories.

### WHAT
A two-zone component with 4 possible states:

| State | Zone A (Industry Hero) | Zone B (Filter Chips) |
|-------|----------------------|----------------------|
| Empty (no filters) | hidden | hidden | → renders nothing |
| Industry only | dark banner + subcategory pills | hidden |
| Filters only | hidden | compact chip strip |
| Industry + filters | dark banner + subcategory pills | chip strip below |

**Zone A (Industry Hero):** Dark gradient banner with industry name, report count from selected industry, and horizontally scrollable subcategory pills (using ScrollFade/HorizontalScroll).

**Zone B (Filter Chips):** Light chip strip with color-coded removable chips (using ActiveFilterChip colors) + clear all button.

### WHEN
- Use between HeroSection and the listing grid in listing mode
- Use when any filter, search, or industry selection is active

### WHEN NOT
- Don't use in home/discovery mode (no filters active)
- Don't use for displaying results count (that's in the sort toolbar)

### WHERE
Atomic level: **Organism**. File: `ListingContextBanner.tsx`. Used in App.tsx listing mode.

---

## ReportCard ★ (Canonical — Grid + List Layouts)

_(Unchanged from v4.1 — see full entry above)_

---

# HOOKS

---

## useReportFilters

### WHY
The Report Store has 7 filter dimensions (search, category, industry, sub-industry, tags, regions, years), 2 view modes (home/listing), sort, and pagination. Without a centralized hook, App.tsx would have 20+ useState calls and 15+ handler functions scattered through the component. `useReportFilters` encapsulates everything into one hook.

### WHAT
A custom hook that manages all filter state, derived data, cross-industry consistency rules, and handler functions.

**State managed:**
- `viewMode` — `'home' | 'listing'`
- `searchQuery` + `searchCategory`
- `sidebarIndustry` + `sidebarSubIndustries` + `sidebarTags` + `sidebarRegions` + `sidebarYears`
- `sortBy` — 5 options
- `mobileFilterOpen`
- `currentPage` + pagination

**Derived state:**
- `filteredReports` — all filters + sort applied
- `paginatedReports` — current page slice
- `totalPages`
- `activeFilterCount`

**Cross-industry consistency rules:**
1. When a sub-industry is toggled ON and doesn't belong to the current industry → auto-switch to the sub's parent industry + clear orphaned subs + toast notification
2. When an industry is selected → clear sub-industries that don't belong to the new industry + clear tags (industry-contextual)
3. When industry is deselected → clear tags
4. When no industry is selected and a sub-industry is added → auto-select parent industry

**Scroll behavior:**
- `scrollToListing()` — smooth scrolls to `#listing-area` when transitioning home → listing
- Only scrolls on mode transition, not on subsequent filter changes within listing mode

### WHEN
- Use for any listing page with multi-dimensional filtering
- Use when filters have cross-category dependencies

### WHEN NOT
- Don't use for simple single-filter pages (use local useState)
- Don't use for non-listing pages

### WHERE
File: `hooks/useReportFilters.ts`. Used in App.tsx.

### HOW
```tsx
import { useReportFilters } from './hooks/useReportFilters';

function App() {
  const filters = useReportFilters();

  return (
    <>
      <HeroSection searchQuery={filters.searchQuery}
        onSearchChange={filters.setSearchQuery}
        onSearchSubmit={filters.handleSearchSubmit}
        onPopularClick={filters.handlePopularClick}
        selectedCategory={filters.searchCategory}
        onCategoryChange={filters.setSearchCategory} />

      <IndustrySidebar
        selectedIndustry={filters.sidebarIndustry}
        onIndustrySelect={filters.handleSidebarIndustrySelect}
        onSubcategorySelect={filters.handleSubcategorySelect}
        onClear={filters.handleClearSidebar}
        currentSubIndustries={filters.sidebarSubIndustries}
        onSubIndustriesChange={filters.handleSidebarSubIndustriesChange}
        ... />
    </>
  );
}
```

---

# INTERACTION STATE MATRIX

Complete state documentation for every interactive control in the filter/search system:

| Control | Default | Hover | Checked/Active | Disabled | Focus-Visible | Pressed |
|---------|---------|-------|---------------|----------|---------------|----------|
| **FilterCheckbox** | white box, 18% border, 50% text | 2.5% row bg | dark fill, white ✓, 3% bg, 60% left-border, 85% text | 50% opacity, not-allowed | 2px brand-red ring | — |
| **FilterChip** | white bg, 8% border, 55% text, 400wt | 4% bg, 14% border | 6% bg, 20% border, 600wt, Check ✓ | 40% opacity | 2px brand-red ring | scale(0.97) |
| **FilterSearchInput** | 8% border | — | 20% border (has value) | — | brand-red ring on container | — |
| **FilterAccordion (sidebar)** | transparent, 45% label | 4% bg | 2.5% bg, count badge | 55% opacity, Lock | global focus-visible | — |
| **FilterAccordion (sheet)** | transparent | active:bg-black/2% | count badge visible | — | global focus-visible | — |
| **ActiveFilterChip** | color-coded bg/border | X darkens | — | — | — | X hover bg 6% |
| **Industry tree row** | transparent, 50% text | 2% bg, 85% text | black 3px left-border, 4% bg, 90% text | — | global focus-visible | — |
| **Subcategory row** | transparent, 40% text | 2.5% bg, 85% text | 5% bg, 2px left-border, 90% text | — | global focus-visible | — |
| **Expand chevron button** | transparent | 6% bg | rotated 90° | — | global focus-visible | — |
| **MobileFilterBar pill** | dark glass 88% | — | brand-red count badge | — | — | scale(0.97) |
| **Clear All button** | 40% text | 80% text | — | — | global focus-visible | — |
| **Show All industries** | 45% text | 70% text | — | — | global focus-visible | — |

---

# DECISION FLOWCHARTS

---

## Which Filter Component Should I Use?

```
Am I building a filter/selection UI?
  YES |
      Is it a DESKTOP sidebar panel?
        YES |
            Do I need the container (sticky, elevation, header/footer)?
              YES -> Use SidebarPanel (wraps everything)
            Do I need collapsible sections?
              YES -> Use FilterAccordion variant="sidebar"
            Do I need multi-select checkboxes?
              YES -> Use FilterCheckbox (compact, left-border accent)
            Do I need search-within-panel?
              YES -> Use FilterSearchInput
        NO  |
      Is it a MOBILE filter drawer?
        YES |
            Use MobileFilterSheet (full organism) which composes:
              FilterAccordion variant="sheet" + FilterChip
            Trigger with MobileFilterBar (floating pill)
        NO  |
      Am I showing ACTIVE filter state (removable chips)?
        YES -> Use ActiveFilterChip (color-coded by type)
        NO  |
      Am I building a chip-based MULTI-SELECT?
        YES -> Use FilterChip (40px+ touch target, toggle states)
        NO  -> Use FilterCheckbox (compact, sidebar-optimized)
```

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

## Which Scroll, Loading, or Animation Component?

_(Unchanged from v4.1 — see scroll/loading/animation flowcharts above)_

---

# FILTER SYSTEM ARCHITECTURE

## Component Composition Diagram

```
useReportFilters (hook — all state + handlers)
    │
    ├─── HeroSection
    │       └── Search bar (inline) ── search query + category
    │       └── Popular search chips ── handlePopularClick
    │
    ├─── IndustrySidebar (organism, lg+ only)
    │       ├── SidebarPanel (container pattern)
    │       │     ├── header: Filters title + active count + Clear All
    │       │     ├── body: scrollable filter sections
    │       │     └── footer: total report count
    │       ├── FilterSearchInput (search within filters)
    │       ├── FilterAccordion[sidebar] × 4 (Industries, Tags, Regions, Years)
    │       │     └── FilterCheckbox × N per section
    │       └── Industry tree rows (custom — expand/collapse/select)
    │
    ├─── ListingContextBanner (organism)
    │       ├── Zone A: Industry hero + subcategory pills
    │       └── Zone B: ActiveFilterChip × N + Clear All
    │
    ├─── MobileFilterBar (molecule, <lg only)
    │       └── Floating pill → opens MobileFilterSheet
    │
    └─── MobileFilterSheet (organism, <lg only)
            ├── FilterAccordion[sheet] × 5 (Sort, Industry, Segments, Region, Year)
            │     └── FilterChip × N per section
            ├── Sticky header: title + count + Clear All + Close
            └── Sticky footer: Button[brand] "Show Results"
```

## Data Flow

```
useReportFilters
    │
    ├── Source of truth for ALL filter state
    │
    ├── IndustrySidebar reads & writes via controlled props
    │     (currentSubIndustries, onSubIndustriesChange, etc.)
    │
    ├── MobileFilterSheet reads & writes via same controlled props
    │
    ├── ListingContextBanner reads filter state + provides remove handlers
    │
    └── filteredReports = useMemo(apply all filters + sort)
          └── paginatedReports = filteredReports.slice(page)
                └── ReportCard × N renders from paginatedReports
```

## Cross-Platform Parity

| Feature | Desktop (IndustrySidebar) | Mobile (MobileFilterSheet) |
|---------|-------------------------|---------------------------|
| Industry select | Tree row click | FilterChip toggle |
| Sub-industry select | Tree expand + subcategory button | FilterChip toggle (contextual section) |
| Region/Year select | FilterCheckbox | FilterChip |
| Tag select | FilterCheckbox (disabled until industry) | Not shown (simplified) |
| Search within filters | FilterSearchInput | Not shown (simplified) |
| Sort | External toolbar | Integrated top section |
| Clear all | Header button | Header button |
| Active count | Per-section badges + header total | Per-section badges + header total |

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
   - Add useReportFilters hook for state management
   - Add ViewToggle for list/grid switch
   - Add ReportCard with layout={viewMode} for cards
   - Add SkeletonCard with variant={viewMode} for loading
   - Add IndustrySidebar for desktop filters (composes SidebarPanel)
   - Add MobileFilterBar + MobileFilterSheet for mobile filters
   - Add ListingContextBanner for active filter display
   - Add EmptyState for zero results
   - Add BackToTop for long scrolling
   - Wrap each card in CardReveal for entrance animations

4. For editorial/content pages:
   - Use FeaturedResearch pattern for hero + side grid
   - Use HorizontalScroll for card carousels
   - Use ScrollFade for tab bars
   - Use StatCard / DataHighlightCard for data sections

5. For any page with a sidebar:
   - Use SidebarPanel for the container (sticky, elevation, scroll)
   - Use FilterAccordion for collapsible sections
   - Use FilterCheckbox or FilterChip for selections
   - Use FilterSearchInput if >8 items need searching

6. Final checks:
   - All icons use iconColors.content or iconColors.utility
   - All report cards use ReportCard (not deprecated ReportGridCard)
   - Touch targets meet 44px minimum on mobile
   - SkeletonCard variant matches ViewToggle viewMode
   - EmptyState has recovery action
   - BackToTop positioned to clear MobileFilterBar
   - prefers-reduced-motion respected
   - focus-visible rings on all interactive elements
   - Filter state managed by useReportFilters (or equivalent hook)
```

---

## Component Triad: ViewToggle ↔ ReportCard ↔ SkeletonCard

_(Unchanged from v4.1 — see alignment table above)_

---

**Last Updated:** March 11, 2026
**Design System Version:** 4.2
**Repository:** vsoffice001-cloud/Design-System-vs-26
**Companion Docs:** `COMPONENT_GUIDELINES_4WH.md`, `ai-context/CORE.md`
