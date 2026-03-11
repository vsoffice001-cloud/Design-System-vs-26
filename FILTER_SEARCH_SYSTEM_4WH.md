# Filter & Search System — 4W+H Framework
## Complete Reference for Sidebar Panels, Filter Controls, and Search UI

**Version:** 1.0 (March 2026)
**Source Page:** Report Store (Ken Research)
**Design System:** Ken Bold DS v4.1
**Architecture:** Atomic Design (Atoms > Molecules > Organisms)
**Companion Doc:** `REPORT_STORE_COMPONENTS_4WH.md`

---

## PURPOSE

This document covers the **entire filter & search interaction layer** — every control, container, drawer, and state that powers filtering, searching, and sidebar navigation. These components were extracted from monolithic page code into proper atomic design tiers so they can be reused for:

- **Filter sidebars** (Report Store, any catalog/listing page)
- **Table of Contents** (documentation, long-form articles)
- **Side navigation** (settings, account, multi-step flows)
- **Search interfaces** (hero search, in-panel search, global search)

---

## COMPONENT HIERARCHY

```
ATOMS (standalone interactive controls)
├── FilterCheckbox      ← Custom checkbox with left-accent, label, count
├── FilterChip          ← Toggle chip for multi-select (mobile pattern)
├── FilterSearchInput   ← Compact search-within-panel input
└── ActiveFilterChip    ← Removable chip showing active filter value

MOLECULES (composed from atoms)
├── FilterAccordion     ← Collapsible section (desktop + mobile variants)
└── SidePanel           ← Sticky sidebar container (the "frame")

ORGANISMS (composed from molecules + atoms)
├── IndustrySidebar     ← Desktop filter panel (SidePanel + FilterAccordion + FilterCheckbox)
├── MobileFilterSheet   ← Mobile filter drawer (FilterAccordion + FilterChip)
├── MobileFilterBar     ← Floating bottom pill (opens MobileFilterSheet)
└── ListingContextBanner← Active filter display + industry hero (ActiveFilterChip)

HOOKS (state management)
└── useReportFilters    ← All filter/search/sort state + cascade logic
```

---

# ATOMS

---

## FilterCheckbox

### WHY
Filter lists need a custom checkbox that matches the DS aesthetic (not browser-native), provides visual feedback through a left-border accent on selection, and shows optional count badges. Browser checkboxes cannot be styled to match the warm/neutral palette, lack the left-accent pattern, and don’t animate smoothly.

### WHAT
A `role="checkbox"` div with custom indicator (16×16px square), label, and optional count badge.

**Anatomy:**
```
┌───────────────────────────────────┐
││ [✓] Label text              42 │  ← left-border accent when checked
└───────────────────────────────────┘
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | required | Display text |
| `checked` | boolean | required | Controlled checked state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number \| string | — | Right-aligned count badge |
| `indented` | boolean | false | Indent for nested items (28px left padding) |
| `disabled` | boolean | false | Disabled state |
| `className` | string | — | Additional CSS classes |

**Interaction State Matrix:**

| State | Background | Border-Left | Checkbox Border | Checkbox Fill | Label Color | Count Style |
|-------|-----------|-------------|-----------------|---------------|-------------|-------------|
| Default | transparent | 2px transparent | 1.5px rgba(0,0,0,0.18) | white | rgba(0,0,0,0.5) | plain, 20% |
| Hover | rgba(0,0,0,0.025) | 2px transparent | (unchanged) | (unchanged) | (unchanged) | (unchanged) |
| Checked | rgba(0,0,0,0.03) | 2px rgba(0,0,0,0.6) | 1.5px text-primary | text-primary (dark) | rgba(0,0,0,0.85) | pill bg 5%, 45% |
| Checked+Hover | rgba(0,0,0,0.03) | (unchanged) | (unchanged) | (unchanged) | (unchanged) | (unchanged) |
| Focus-Visible | (unchanged) | (unchanged) | (unchanged) | (unchanged) | (unchanged) | (unchanged) |
| Disabled | (unchanged) | (unchanged) | (unchanged) | (unchanged) | (unchanged) | (unchanged) |

**Focus-Visible:** `ring-2 ring-[var(--brand-red)] ring-offset-2`
**Disabled:** `opacity-50 cursor-not-allowed`, no toggle on click/keyboard
**Keyboard:** Enter or Space triggers `onToggle`
**ARIA:** `role="checkbox"`, `aria-checked`, `aria-disabled`, `tabIndex`

### WHEN
- Use in sidebar filter sections (Tags, Regions, Years checkboxes)
- Use in settings panels for on/off options
- Use in TOC for selectable/bookmarkable items
- Use with `indented` for nested subcategory items

### WHEN NOT
- Don’t use for single-select (use radio or FilterChip instead)
- Don’t use on mobile filter sheets (use FilterChip — larger touch target)
- Don’t use inline within text content

### WHERE
Atomic level: **Atom**. Used inside FilterAccordion sections in IndustrySidebar.

### HOW
```tsx
import { FilterCheckbox } from './FilterCheckbox';

<FilterCheckbox label="Global" checked={selectedRegions.has("Global")} onToggle={() => toggleRegion("Global")} count={42} />
<FilterCheckbox label="Digital Health" checked={isChecked} onToggle={toggle} indented />
<FilterCheckbox label="Unavailable" checked={false} onToggle={() => {}} disabled />
```

---

## FilterChip

### WHY
Mobile filter sheets need larger touch targets than checkboxes. FilterChip provides a 40px minimum-height tappable chip that clearly shows selected state with a Check icon prefix, bold text, and shadow — optimized for thumb interaction.

### WHAT
A `<button>` pill with active/inactive states. Active state adds Check icon, bold weight, shadow.

**Anatomy:**
```
Inactive:  [ Healthcare   42 ]   ← white bg, light border
Active:    [✓ Healthcare   42 ]   ← dark bg, border, shadow, bold
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | required | Display text |
| `active` | boolean | required | Active/selected state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number \| string | — | Count after label |
| `className` | string | — | Additional CSS classes |

**Interaction State Matrix:**

| State | Background | Border | Font Weight | Icon | Shadow |
|-------|-----------|--------|-------------|------|--------|
| Default | white | 1px rgba(0,0,0,0.08) | 400 | none | none |
| Hover | rgba(0,0,0,0.04) | 1px rgba(0,0,0,0.14) | 400 | none | none |
| Active | rgba(0,0,0,0.06) | 1px rgba(0,0,0,0.2) | 600 | Check 12px | shadow-sm |
| Active+Hover | rgba(0,0,0,0.08) | (unchanged) | 600 | Check | shadow-sm |
| Focus-Visible | (unchanged) | (unchanged) | (unchanged) | (unchanged) | + ring-2 brand-red |
| Pressed | scale(0.97) | (unchanged) | (unchanged) | (unchanged) | (unchanged) |

### WHEN
- Use in MobileFilterSheet for all filter options
- Use for sort option selection (single-select behavior)
- Use for any multi-select with large touch targets needed

### WHEN NOT
- Don’t use on desktop sidebars (use FilterCheckbox — more compact)
- Don’t use for removable/dismissible chips (use ActiveFilterChip)

### WHERE
Atomic level: **Atom**. Used inside FilterAccordion (mobile variant) in MobileFilterSheet.

### HOW
```tsx
import { FilterChip } from './FilterChip';

<FilterChip label="Healthcare" active={industry === "Healthcare"} onToggle={() => selectIndustry("Healthcare")} count="128" />
<FilterChip label="Newest First" active={sortBy === "Newest First"} onToggle={() => setSort("Newest First")} />
```

---

## FilterSearchInput

### WHY
Sidebar panels with many filter options (50+ industries, 20+ regions) need inline search to find items quickly. This is NOT the hero/global search — it’s a compact, panel-scoped search that filters the visible checkbox/chip items.

### WHAT
A compact input with Search icon, placeholder, and conditional X clear button.

**Anatomy:**
```
┌──────────────────────────┐
│ 🔍 Search filters...    [x]│  ← X only shows when value non-empty
└──────────────────────────┘
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | string | required | Controlled value |
| `onChange` | `(value: string) => void` | required | Change callback |
| `placeholder` | string | `"Search filters..."` | Placeholder text |
| `ariaLabel` | string | `"Search filter options"` | ARIA label |
| `className` | string | — | Wrapper className |

**Interaction State Matrix:**

| State | Border | X Button | Focus Ring |
|-------|--------|----------|------------|
| Empty | 1px rgba(0,0,0,0.08) | hidden | none |
| Typing (has value) | 1px rgba(0,0,0,0.2) | visible | none |
| Focused | 1px rgba(0,0,0,0.2) | (depends on value) | `focus-within:ring-2 brand-red` |

### WHEN
- Use in SidePanel toolbar slot for search-within-filters
- Use in any panel/dropdown with long option lists
- Use in TOC for search-within-headings

### WHEN NOT
- Don’t use as the main page search bar (use the Hero SearchBar pattern)
- Don’t use inline within content

### WHERE
Atomic level: **Atom**. Used in IndustrySidebar toolbar slot via SidePanel.

### HOW
```tsx
import { FilterSearchInput } from './FilterSearchInput';

const [query, setQuery] = useState("");
<FilterSearchInput value={query} onChange={setQuery} placeholder="Search industries..." />
```

---

## ActiveFilterChip

### WHY
When users apply filters, they need to see what’s active and remove individual filters without opening the filter panel. ActiveFilterChip provides a compact, color-coded, removable chip that communicates both the filter type and value at a glance.

### WHAT
A non-interactive span with type label + value text + X remove button. Color-coded by filter type.

**Anatomy:**
```
[ REGION  Global  × ]   ← blue-tinted bg + border
[ TAG     AI      × ]   ← green-tinted bg + border
[ YEAR    2025    × ]   ← amber-tinted bg + border
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `FilterType` | required | Color-coding key |
| `label` | string | required | Filter value text |
| `onRemove` | `() => void` | required | Remove callback |
| `className` | string | — | Additional CSS classes |

**Color Map:**

| Type | Background | Border | Use Case |
|------|-----------|--------|----------|
| `search` | rgba(0,0,0,0.04) | rgba(0,0,0,0.1) | Search query |
| `subIndustry` | rgba(128,108,224,0.06) | rgba(128,108,224,0.14) | Sub-industry filter |
| `tag` | rgba(16,185,129,0.06) | rgba(16,185,129,0.14) | Tag filter |
| `region` | rgba(59,130,246,0.06) | rgba(59,130,246,0.14) | Region filter |
| `year` | rgba(245,158,11,0.06) | rgba(245,158,11,0.14) | Year filter |

### WHEN
- Use in ListingContextBanner for active filter display
- Use in any "active filters" summary strip
- Use when users need to remove individual filters without opening the panel

### WHEN NOT
- Don’t use for toggle selection (use FilterChip — that’s toggle, this is remove)
- Don’t use inside the filter panel itself

### WHERE
Atomic level: **Atom**. Used in ListingContextBanner Zone B.

### HOW
```tsx
import { ActiveFilterChip } from './ActiveFilterChip';

<ActiveFilterChip type="region" label="Global" onRemove={() => removeRegion("Global")} />
<ActiveFilterChip type="search" label='"healthcare AI"' onRemove={clearSearch} />
<ActiveFilterChip type="year" label="2025" onRemove={() => removeYear("2025")} />
```

---

# MOLECULES

---

## FilterAccordion

### WHY
Filter panels need collapsible sections to organize options by category (Industries, Regions, Tags, Years). Without a standard accordion, each panel duplicates expand/collapse logic with inconsistent animations and accessibility. Previously, IndustrySidebar and MobileFilterSheet each had their own separate `FilterSection` — now unified into one component with a `variant` prop.

### WHAT
A collapsible section with icon + label + count badge header and animated content area.

**Desktop variant anatomy:**
```
┌────────────────────────────────────┐
│ [□] INDUSTRIES           (3) ▷ │  ← bordered icon, uppercase, ChevronRight
├────────────────────────────────────┤
│ Content (FilterCheckbox items)      │
└────────────────────────────────────┘
```

**Mobile variant anatomy:**
```
┌────────────────────────────────────┐
│ [■] Industry              3  ▼ │  ← bg icon, normal text, ChevronDown
├────────────────────────────────────┤
│ Flex-wrap chips (FilterChip items)  │
└────────────────────────────────────┘
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | ReactNode | required | Section icon |
| `label` | string | required | Section title |
| `isOpen` | boolean | required | Controlled open state |
| `onToggle` | `() => void` | required | Toggle callback |
| `count` | number | — | Active filter count |
| `children` | ReactNode | required | Section content |
| `disabled` | boolean | false | Disabled (desktop only) |
| `disabledHint` | string | — | Text shown when disabled |
| `variant` | `"desktop" \| "mobile"` | `"desktop"` | Visual variant |
| `className` | string | — | Root className |

**Variant Comparison:**

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Icon container | 24px, bordered square | 28px, bg-only square |
| Label style | Uppercase, tracking 0.08em, --text-2xs | Normal case, --text-nav |
| Chevron | ChevronRight, rotates 90deg | ChevronDown, rotates 180deg |
| Count badge | Black pill with Tooltip | Gray pill, no tooltip |
| Disabled | Yes (Lock icon + hint) | No |
| Content layout | Direct children | Flex-wrap with gap-2 + padding |
| Touch target | py-3 (compact) | py-3.5 (spacious) |
| Pressed state | None | active:bg-black/[0.02] |

**Animation:** `maxHeight 0→600px`, `opacity 0→1`, `200ms cubic-bezier(0.16, 1, 0.3, 1)`

### WHEN
- Use in IndustrySidebar with `variant="desktop"` for all filter sections
- Use in MobileFilterSheet with `variant="mobile"` for all filter sections
- Use in any settings panel for grouped options
- Use in TOC for collapsible heading groups

### WHEN NOT
- Don’t use for single non-collapsible content (just render content directly)
- Don’t nest FilterAccordion inside FilterAccordion

### WHERE
Atomic level: **Molecule**. Used in IndustrySidebar and MobileFilterSheet.

### HOW
```tsx
import { FilterAccordion } from './FilterAccordion';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterChip } from './FilterChip';

{/* Desktop */}
<FilterAccordion variant="desktop" icon={<MapPin />} label="Regions"
  isOpen={regionsOpen} onToggle={() => setRegionsOpen(!regionsOpen)}
  count={selectedRegions.size}>
  {regions.map(r => (
    <FilterCheckbox key={r} label={r} checked={selected.has(r)} onToggle={() => toggle(r)} />
  ))}
</FilterAccordion>

{/* Mobile */}
<FilterAccordion variant="mobile" icon={<MapPin />} label="Region"
  isOpen={regionsOpen} onToggle={() => setRegionsOpen(!regionsOpen)}
  count={selectedRegions.length}>
  {regions.map(r => (
    <FilterChip key={r} label={r} active={selected.includes(r)} onToggle={() => toggle(r)} />
  ))}
</FilterAccordion>

{/* Disabled (desktop) */}
<FilterAccordion variant="desktop" icon={<Tag />} label="Tags"
  isOpen={false} onToggle={() => {}} disabled
  disabledHint="Select an industry first to filter by tags" />
```

---

## SidePanel

### WHY
Multiple page types need a sticky sidebar: filter panels, TOC, side navigation, settings. They all share the same container pattern (sticky positioning, viewport-aware height, header/body/footer anatomy, border/shadow/radius). Without SidePanel, each page hard-codes these container properties, leading to inconsistent sticky offsets, different shadows, and mismatched border radii.

### WHAT
A `<aside>` wrapper with sticky positioning and a 4-zone internal layout.

**Container Spec Table:**

| Property | Value | Token/Variable |
|----------|-------|----------------|
| Width | 240px (w-60) | `widthClass` prop |
| Position | sticky | CSS |
| Top offset | 72px (header height) | `stickyTop` prop |
| Max height | `calc(100vh - 88px)` | Computed from stickyTop |
| Border | 1px solid rgba(0,0,0,0.08) | Matches Card border |
| Border radius | 10px | Matches Card radius |
| Shadow | 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03) | Elevation level 1 |
| Background (body) | white | — |
| Background (header/footer) | var(--black-50) | Warm tint |
| Scrollbar | Hidden (scrollbar-hide class) | — |
| Visibility | `hidden lg:block` | `showAbove` prop |

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | ReactNode | — | Header zone |
| `toolbar` | ReactNode | — | Toolbar zone (search) |
| `children` | ReactNode | required | Scrollable body |
| `footer` | ReactNode | — | Footer zone |
| `stickyTop` | number | 72 | Top offset in px |
| `widthClass` | string | `"w-60"` | Width class |
| `showAbove` | `"sm" \| "md" \| "lg" \| "xl"` | `"lg"` | Breakpoint visibility |
| `scrollRef` | `Ref<HTMLDivElement>` | — | Ref to scrollable area |
| `className` | string | — | Aside className |
| `style` | CSSProperties | — | Aside style |

### WHEN
- Use for filter sidebars (IndustrySidebar)
- Use for Table of Contents (sticky TOC alongside article content)
- Use for side navigation (settings page, account page)
- Use for contextual info panels

### WHEN NOT
- Don’t use for full-width content areas
- Don’t use on mobile (hidden by default; mobile uses sheets/drawers)
- Don’t nest SidePanel inside SidePanel

### WHERE
Atomic level: **Molecule** (container pattern). Used by IndustrySidebar.

### HOW

**As filter sidebar:**
```tsx
import { SidePanel } from './SidePanel';
import { FilterSearchInput } from './FilterSearchInput';
import { FilterAccordion } from './FilterAccordion';

<SidePanel
  header={<div className="flex items-center gap-2"><SlidersHorizontal /> Filters</div>}
  toolbar={<FilterSearchInput value={q} onChange={setQ} />}
  footer={<p>1,200+ reports available</p>}
>
  <FilterAccordion ...>...</FilterAccordion>
  <FilterAccordion ...>...</FilterAccordion>
</SidePanel>
```

**As Table of Contents:**
```tsx
<SidePanel
  stickyTop={80}
  widthClass="w-56"
  header={<h3>On this page</h3>}
>
  {headings.map(h => (
    <a key={h.id} href={`#${h.id}`}
      className={activeId === h.id ? "text-black/90 border-l-2 border-black" : "text-black/40"}
      style={{ paddingLeft: h.level * 12 + 16 }}>
      {h.text}
    </a>
  ))}
</SidePanel>
```

**As side navigation:**
```tsx
<SidePanel
  header={<h3>Settings</h3>}
  showAbove="md"
>
  {navItems.map(item => (
    <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
  ))}
</SidePanel>
```

---

# ORGANISMS

---

## IndustrySidebar

### WHY
The Report Store listing mode needs a comprehensive filter panel with multi-level industry navigation, contextual tags, region selection, year filtering, and real-time search across all filter options. This is the most complex sidebar in the system.

### WHAT
A SidePanel-based organism with 4 FilterAccordion sections + IndustryRow tree.

**Composition:**
```
SidePanel
  header: SlidersHorizontal icon + "Filters" title + active count + clear all
  toolbar: FilterSearchInput
  body:
    FilterAccordion("Industries")
      IndustryRow[] (with expand/collapse for subcategories)
      "+ Show all N industries" button
    FilterAccordion("Tags") [disabled until industry selected]
      FilterCheckbox[]
    FilterAccordion("Regions")
      FilterCheckbox[] (with count)
    FilterAccordion("Publish Year")
      FilterCheckbox[]
  footer: "N+ reports available"
```

**Special Behaviors:**
1. **Search-within-filters:** Typing in FilterSearchInput auto-opens sections with matching results
2. **Auto-expand:** Industries with active subcategories auto-expand their tree
3. **Auto-scroll:** After expanding, scrolls to the first active subcategory
4. **Tags dependency:** Tags section is disabled (Lock icon) until an industry is selected
5. **Progressive disclosure:** Only first 8 industries shown; "Show all" reveals rest

### WHEN
- Use on any listing/catalog page with industry-based filtering
- Use when desktop sidebar filters are needed (lg+ breakpoint)

### WHEN NOT
- Don’t use on mobile (use MobileFilterSheet)
- Don’t use for simple 1-2 filter pages (overkill)

### WHERE
Atomic level: **Organism**. Used in App.tsx listing mode.

---

## MobileFilterSheet

### WHY
Mobile screens can’t show a persistent sidebar. Users need full-screen access to all filters with large touch targets, sort integration, and a clear "Show Results" action.

### WHAT
A slide-from-right drawer with FilterAccordion (mobile variant) + FilterChip.

**Anatomy:**
```
┌──────────────────────────────┐
│ Filters & Sort    (3)  Clear  X │  ← Sticky header
├──────────────────────────────┤
│ Sort By                     ▼ │
│  [Newest] [Oldest] [Popular] │
├──────────────────────────────┤
│ Industry                  1 ▼ │
│  [✓ Healthcare] [Tech] ...   │
├──────────────────────────────┤
│ (more sections...)           │  ← Scrollable body
├──────────────────────────────┤
│      [ Show Results ]        │  ← Sticky footer, brand button
└──────────────────────────────┘
```

**Special Behaviors:**
1. **Focus trap:** Tab/Shift+Tab contained within sheet, Escape closes
2. **Body scroll lock:** `document.body.style.overflow = "hidden"` when open
3. **Backdrop click:** Closes sheet
4. **Slide animation:** `translateX(100%) → translateX(0)` over 300ms
5. **Contextual sub-industries:** Only appear when parent industry is selected

### WHEN
- Use on any listing page with filters, below lg breakpoint
- Use when MobileFilterBar is the trigger

### WHEN NOT
- Don’t show on desktop (lg+, IndustrySidebar handles it)
- Don’t use for non-filter drawers (use a generic drawer pattern)

---

## MobileFilterBar

### WHY
Mobile users scrolling a long listing lose access to filters at the top. This floating pill provides always-visible filter access at the bottom of the viewport.

### WHAT
A `position: fixed` centered pill at viewport bottom with glassmorphism effect.

**Container Spec:**

| Property | Value |
|----------|-------|
| Position | fixed, bottom: `max(1rem, env(safe-area-inset-bottom))` |
| Z-index | 40 |
| Background | rgba(10,10,10,0.88) |
| Backdrop filter | blur(20px) saturate(180%) |
| Border | 1px solid rgba(255,255,255,0.08) |
| Border radius | 9999px (pill) |
| Shadow | 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06) |
| Visibility | lg:hidden |
| Pressed | scale(0.97) |

**Active filter count:** Brand-red badge (min-w-[20px] pill)

---

## ListingContextBanner

### WHY
When filters are active, users need contextual feedback: which industry is focused, which filters are applied, and how many results remain. This banner sits between the toolbar and the card grid.

### WHAT
A dual-zone banner:
- **Zone A (Industry Hero):** Dark gradient background with industry name, report count, description, and subcategory quick-links (HorizontalScroll)
- **Zone B (Filter Chips):** Light strip with ActiveFilterChip items + clear all

**4 States:**

| State | Zone A | Zone B | Render |
|-------|--------|--------|--------|
| 1. No filters, no industry | — | — | Nothing (returns null) |
| 2. Industry only | Dark hero banner | — | Zone A only |
| 3. Filters only (no industry) | — | Chip strip (rounded border) | Zone B only |
| 4. Industry + filters | Dark hero banner | Chip strip (flat top) | Both zones |

---

# HOOKS

---

## useReportFilters

### WHY
Filter state management is complex: 6 filter dimensions (industry, sub-industry, tags, regions, years, search), cross-industry cascade rules, sort options, pagination reset, view mode switching, and individual filter removal. Without a central hook, App.tsx would be 200+ lines of filter state alone.

### WHAT
A custom hook that encapsulates all filter state and returns derived data + handlers.

**State managed:**
- `viewMode`: `"home" | "listing"`
- `searchQuery`, `searchCategory`
- `sidebarIndustry`, `sidebarSubIndustries`, `sidebarTags`, `sidebarRegions`, `sidebarYears`
- `sortBy`, `mobileFilterOpen`, `currentPage`

**Cross-Industry Cascade Rules:**

1. **Rule 1:** When a sub-industry is toggled ON and doesn’t belong to the current industry → auto-switch to that sub’s parent industry, clear orphaned subs, clear tags, show toast
2. **Rule 2:** When an industry is selected → clear any sub-industries that don’t belong to it, clear tags (contextual to old industry)
3. **Rule 3:** When industry is deselected → clear tags (they’re industry-contextual)
4. **Auto-parent:** When sub-industries are added with no industry selected → auto-select the parent industry

**Derived state:**
- `filteredReports`: Full pipeline (search → industry → sub → region → year → tags → category → sort)
- `activeFilterCount`: Count of active filter *groups* (not individual values)
- `paginatedReports`: Sliced for current page

### HOW
```tsx
import { useReportFilters } from './hooks/useReportFilters';

const f = useReportFilters();

// Use in IndustrySidebar
<IndustrySidebar
  selectedIndustry={f.sidebarIndustry}
  onIndustrySelect={f.handleSidebarIndustrySelect}
  onSubcategorySelect={f.handleSubcategorySelect}
  currentSubIndustries={f.sidebarSubIndustries}
  currentRegions={f.sidebarRegions}
  onRegionsChange={f.handleSidebarRegionsChange}
  ...
/>

// Use in ListingContextBanner
<ListingContextBanner
  selectedIndustry={f.sidebarIndustry}
  searchQuery={f.searchQuery}
  onRemoveIndustry={f.removeIndustry}
  onClearAll={f.clearAllFilters}
  ...
/>
```

---

# DECISION FLOWCHARTS

---

## Which Filter Control Should I Use?

```
Am I on desktop (lg+) or mobile (<lg)?

  DESKTOP |
    Am I showing a list of selectable options?
      YES → Use FilterCheckbox (compact, left-accent)
      NO  |
    Am I showing a search-within-filters input?
      YES → Use FilterSearchInput (in SidePanel toolbar slot)
      NO  |
    Am I showing active filter values that can be removed?
      YES → Use ActiveFilterChip (color-coded, X button)
      NO  → Use FilterAccordion variant="desktop" with custom content

  MOBILE |
    Am I showing selectable filter options?
      YES → Use FilterChip (large touch target, toggle)
      NO  |
    Am I grouping filter options?
      YES → Use FilterAccordion variant="mobile"
      NO  → Direct content in MobileFilterSheet
```

## Which Sidebar Container Should I Use?

```
Do I need a sticky sidebar on desktop?
  YES |
    Is it a filter panel?
      YES → SidePanel with FilterAccordion sections
      NO  |
    Is it a Table of Contents?
      YES → SidePanel with heading links
      NO  |
    Is it side navigation?
      YES → SidePanel with nav links
      NO  → SidePanel with custom content
  NO → No SidePanel needed
```

---

# INTERACTION STATE REFERENCE

Quick-reference table for all interactive controls in the filter system:

| Control | Default bg | Hover bg | Selected/Active bg | Focus Ring | Disabled |
|---------|-----------|---------|-------------------|------------|----------|
| FilterCheckbox | transparent | 2.5% black | 3% black + left-accent | brand-red 2px | 50% opacity |
| FilterChip | white | 4% black | 6% black + shadow | brand-red 2px | N/A |
| FilterSearchInput | white | N/A | N/A | brand-red focus-within | N/A |
| ActiveFilterChip | type-colored | N/A (X: 15% black) | N/A | brand-red 2px | N/A |
| FilterAccordion header | transparent | 4% black | 2.5% black (has active) | brand-red 2px | 55% opacity |
| IndustryRow | transparent | 2% black | 4% black + left-border | brand-red 2px | N/A |
| Subcategory button | transparent | 2.5% black | 5% black + left-border | brand-red 2px | N/A |
| MobileFilterBar pill | rgba(10,10,10,0.88) | N/A | N/A | N/A | N/A |
| Clear all button | transparent | text darkens | N/A | brand-red 2px | N/A |

---

**Last Updated:** March 11, 2026
**Design System Version:** 4.1
**Repository:** vsoffice001-cloud/Design-System-vs-26
**Companion Docs:** `REPORT_STORE_COMPONENTS_4WH.md`, `COMPONENT_GUIDELINES_4WH.md`
