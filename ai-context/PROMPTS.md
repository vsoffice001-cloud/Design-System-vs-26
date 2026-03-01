# Design System — AI Implementation Prompts

**Module:** `ai-context/PROMPTS.md`  
**Version:** 3.3.2  
**For:** Copy-paste into AI tools when building pages

---

## Prompt 1: New Page Build

```
I need to build a new page following our design system. Please:

1. Read ai-context/ modules (CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT)
2. Use typography tokens from theme.css:
   - --text-sm (16px) for body text
   - --text-2xl (39px) for section headings (h2)
   - --text-3xl (48.8px) ONLY for hero h1
3. Use color tokens:
   - --brand-red (#b01f24) ONLY for CTAs
   - --black for hero sections
   - --warm-300 for highlighted sections
4. Use Button component:
   - variant="brand" ONLY for conversion CTAs
   - size="md" as default (42px height)
   - showArrow={true} ONLY for urgency/forms
5. Use CTALink for exploratory navigation
6. Follow section pattern (black → white → warm alternating)

Reference files:
- /src/app/components/Button.tsx
- /src/app/components/CTALink.tsx
- /src/styles/theme.css
```

---

## Prompt 2: Adding a CTA Button

```
Add a CTA button following our design system:

✅ Use Button component from /src/app/components/Button.tsx
✅ Use variant="brand" (Ken Bold Red #b01f24)
✅ Use size="md" (42px height) - DO NOT use lg unless homepage hero
✅ Add showArrow={true} ONLY if redirecting to form/urgency page
✅ Shimmer animation is automatic (always active)

Example for conversion:
<Button variant="brand" showArrow>Get Started Free</Button>

Example for exploration:
<CTALink href="#learn-more">Learn More</CTALink>

DO NOT use red for non-CTA purposes.
```

---

## Prompt 3: Creating a Section

```
Create a new section following our design system pattern:

1. Choose background:
   - bg-black text-white: For hero moments
   - bg-white: For standard content
   - bg-warm-300: For highlighted/alternating sections

2. Typography:
   - Section heading: var(--text-2xl) 39px
   - Body text: var(--text-sm) 16px
   - Labels: var(--text-xs) 12.8px

3. Spacing:
   - py-12 sm:py-16 md:py-20 for standard sections
   - py-24 for hero sections
   - mb-6 (24px) within sections

4. Use Container component for width constraints
5. Use SectionLabel for eyebrow text above headings
```

---

## Prompt 4: Typography Sizing

```
Apply correct typography sizing from our design system:

✅ DO USE (Most Common):
- var(--text-sm) 16px: ALL body text, paragraphs, descriptions
- var(--text-2xl) 39px: ALL section headings (h2)
- var(--text-xs) 12.8px: Labels, metadata, section eyebrows

✅ SPECIAL CASES:
- var(--text-3xl) 48.8px: ONLY hero h1 and final CTA heading
- var(--text-nav) 14px: TOC items, navigation menus
- var(--text-compact) 14px: Compact cards with 4+ items

❌ DO NOT USE:
- Hardcoded pixel values (unless spatial constraint)
- text-3xl for regular section headings (reserved for heroes)
- Random font sizes not in scale

✅ FONT FAMILIES:
- Serif (Noto Serif): Headings h1-h3, hero titles, testimonial quotes
- Sans (DM Sans): Body, buttons, badges, labels, navigation
- NEVER use Serif for body/buttons. NEVER use Sans for headings.
```

---

## Prompt 5: Color Usage

```
Apply colors following our strict 92-5-3 design system rules:

✅ Ken Bold Red (#b01f24) — 5% of page:
- ONLY for CTA buttons (variant="brand")
- ONLY for primary conversion actions
- Example: "Get Started", "Unlock Report", "Schedule Demo"

✅ Black (#000000) + White (#ffffff) + Warm (#f5f2f1) — 92% of page:
- Black for hero backgrounds, primary buttons, body text
- White for standard section backgrounds
- Warm for alternating highlighted sections

✅ Accent colors — 3% of page:
- Purple (#806ce0) for content icons and badge themes
- Periwinkle, Coral for badge/data variety
- Green/Amber/Rose for semantic status only

❌ NEVER:
- Red for decorative purposes
- Red for borders, icons, or general accents
- Gray (use black tints: black/70, black/50, black/8)
- Accent colors for section backgrounds
```

---

## Prompt 6: Button vs CTALink Decision

```
Choose the correct link component:

✅ Use <Button variant="brand" showArrow>:
- Form submissions, signup, report downloads (urgency)
- Schedule meetings, primary conversions
Example: <Button variant="brand" showArrow>Get Started Free</Button>

✅ Use <CTALink>:
- Exploratory navigation, "Learn more" style
- Section jumping, non-urgent discovery
Example: <CTALink href="#methodology">See How We Did It</CTALink>

✅ Use <InlineLink>:
- Links WITHIN paragraphs, interlinking content
Example: Read our <InlineLink href="#study">case study</InlineLink>

✅ Use <Button variant="secondary">:
- Supporting actions alongside primary/brand buttons
- Two-state: neutral at rest, brand-red on hover
Example: <Button variant="secondary">Learn More</Button>
```

---

## Prompt 7: Complete Page Build Checklist

```
Build a complete page with our design system. Follow this checklist:

STRUCTURE:
✅ Import components from /src/app/components/
✅ Follow section alternating pattern (black → white → warm)
✅ Use semantic HTML (section, h1, h2, h3, p)
✅ Wire page-level components (Navbar, ScrollToTop, StickyCTA)

TYPOGRAPHY:
✅ var(--text-3xl) for hero h1 ONLY
✅ var(--text-2xl) for ALL section h2
✅ var(--text-sm) for ALL body text
✅ Font weight 600 for headings, 400 for body
✅ Serif for headings, Sans for body/UI

COLORS:
✅ --brand-red ONLY for CTA buttons
✅ --black for hero backgrounds
✅ --warm-300 for alternating sections
✅ 92-5-3 hierarchy: 92% foundation, 5% brand, 3% accent

COMPONENTS:
✅ <Button variant="brand"> for conversion CTAs
✅ <Button variant="secondary"> for supporting actions (two-state)
✅ <CTALink> for exploratory navigation
✅ <InlineLink> for in-paragraph links
✅ <SectionLabel> for eyebrow text above headings
✅ <Container> for width constraints

ANIMATIONS:
✅ Shimmer on all buttons (automatic)
✅ showArrow={true} ONLY for urgency/forms

FILES TO READ:
1. ai-context/ modules (CORE, TYPOGRAPHY, COLORS, COMPONENTS, LAYOUT)
2. /src/styles/theme.css (tokens)
3. /src/app/components/Button.tsx (button component)
4. /src/app/components/HeroSection.tsx (section reference)
```

---

**v3.3.2 | Part of [ai-context/](.) module system**
