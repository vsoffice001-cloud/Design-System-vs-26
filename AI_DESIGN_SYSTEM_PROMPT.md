# 🤖 AI DESIGN SYSTEM PROMPT
**FOR FIGMA MAKE AI ASSISTANTS**

Use this prompt when creating new pages to automatically follow our design system.

---

## 📋 COPY-PASTE THIS PROMPT FOR NEW FIGMA MAKE FILES

```
I'm working on a new page for our design system. Please follow these established patterns:

## DESIGN SYSTEM CONTEXT

**Repository:** vsoffice001-cloud/Design-System-vs-26
**Design Philosophy:** Minimalist editorial aesthetic with black/white alternating sections
**Typography:** Major Third scale (1.25 ratio), DM Sans + Noto Serif font pairing
**Color Palette:** Pure black (#000000), white (#ffffff), Ken Bold Red (#b01f24) for CTAs ONLY

## CORE DESIGN TOKENS

### Font Pairing System (Two-Font Strategy)
Our design uses contrast pairing: geometric sans-serif (DM Sans) for functionality, classic serif (Noto Serif) for editorial authority.

FONT TOKENS:
- --font-sans: 'DM Sans' — Body text, UI elements, buttons, badges, labels, navigation, forms
- --font-serif: 'Noto Serif' — Headings (h1-h3), display text, hero titles, testimonial quotes
- --font-mono: system monospace — Code blocks, data tables, technical values

PAIRING RULES:
✅ Serif for headings, display text, quotes, large editorial numbers
✅ Sans for body text, UI chrome, buttons, badges, navigation, forms
✅ Mono for code blocks, metric values, tabular data
❌ NEVER use Serif for body text, buttons, labels, or navigation
❌ NEVER use Sans for hero headings or section titles
❌ NEVER mix more than 2 custom typefaces

### Typography Scale (Major Third 1.25x)
- --text-xs: 12.8px - Section labels, metadata, badges
- --text-sm: 16px - Body text (MOST USED - 90% of content)
- --text-base: 20px - Large body, card titles (4+ cards)
- --text-xl: 31.25px - Subsection headings (h3)
- --text-2xl: 39px - Section headings (h2) - DEFAULT for sections
- --text-3xl: 48.8px - Hero headings (h1) - HERO ONLY

### Custom Font Sizes (14px/12px)
WHY: Spatial constraints need specific sizes outside the scale
WHEN: Navigation, TOC items, compact UIs, navbar buttons
TOKENS:
- --text-nav: 14px - TOC items, CTA descriptions, navigation menus
- --text-compact: 14px - Compact body text (4+ cards)
- --button-font-sm: 14px - Small buttons (navbar, TOC CTAs)
- --text-2xs: 12px - Micro labels, navbar text

### Container Width System
Five semantic container widths for consistent content constraints.

TOKENS:
- --container-page: 1200px — Full page shell, hero backgrounds, navbar
- --container-content: 1000px — Standard sections, card grids, main content
- --container-narrow: 900px — CTAs, testimonials, focused content
- --container-prose: 700px — Long-form paragraphs (~65-70 chars at 16px)
- --container-compact: 600px — Tight descriptions, methodology blurbs

READABILITY (Baymard Institute):
- Optimal line length: 50-75 characters per line
- At 16px body: ~700px (--container-prose) = ideal
- Never exceed 80 chars per line

### Responsive Padding (Mobile-First)
HORIZONTAL PADDING:
- Mobile (0-639px): 16px (px-4)
- Tablet (640-1023px): 24px (px-6)
- Desktop (1024px+): 32px (px-8)

SECTION VERTICAL SPACING:
- Mobile: 48px (py-12)
- Tablet: 64px (sm:py-16)
- Desktop: 80px (md:py-20)

MOBILE-FIRST UX LAWS:
- Fitts's Law: Touch targets min 44px
- Miller's Law: Reduce visible options on small screens
- Hick's Law: Simpler choices on mobile = faster decisions
- Content stacking: 1-col below 640px, 2-col at 768px, multi-col at 1024px+

### Color System
PRIMARY COLORS:
- --black: #000000 - Primary text, hero backgrounds
- --white: #ffffff - Primary backgrounds
- --brand-red: #b01f24 - CTAs ONLY (use sparingly)
- --brand-red-hover: #8f181d
- --brand-red-active: #771419

WARM ACCENTS:
- --warm-300: #f5f2f1 - Section backgrounds (Challenges, Methodology)
- --warm-500: #eae5e3 - Borders, dividers
- --warm-600: #d9d1ce - Timeline elements

WHEN TO USE:
✅ Black sections: Hero, Resources, alternating pattern
✅ White sections: Default, Client Context, Impact
✅ Warm sections: Challenges, Methodology (highlight sections)
✅ Red: CTAs ONLY - "Get Started", "Unlock Report", primary actions

WHEN NOT TO USE:
❌ Don't use red for headings, body text, or decorative elements
❌ Don't mix multiple accent colors in one section
❌ Don't use gradients except for CTA buttons

### Spacing Scale (Base-10 System)
- --space-1: 4px
- --space-2: 8px
- --space-3: 12px
- --space-4: 16px
- --space-6: 24px
- --space-8: 32px
- --space-12: 48px
- --space-16: 64px
- --space-24: 96px

USAGE:
- Gap between cards: --space-6 (24px)
- Section padding top: --space-16 or --space-24
- Card internal padding: --space-6 or --space-8
- Element spacing: Use scale values, avoid arbitrary spacing

## BUTTON SYSTEM

### 4 Variants
1. PRIMARY (Black) - Main actions, maximum one per section
2. BRAND (Red #b01f24) - CTAs, conversion moments, use sparingly
3. SECONDARY (White + Warm Border) - Supporting actions, multiple allowed
4. GHOST (Transparent) - Tertiary actions on dark backgrounds

### 4 Sizes
- sm: 36px height, 14px font - Navbar, TOC buttons
- md: 42px height, 16px font - DEFAULT for 90% of buttons
- lg: 48px height, 18px font - Homepage heroes ONLY
- xl: 56px height, 18px font - Rare, maximum impact

### CRITICAL RULES
✅ Shimmer animation is ALWAYS active (our brand signature)
✅ Arrow animation ONLY for buttons redirecting to forms/pages with urgency
✅ Default size is md (42px) - use lg sparingly for big heroes only
✅ IconOnly buttons require ariaLabel for accessibility

CODE EXAMPLES:
```tsx
// Standard CTA (most common)
<Button variant="brand" size="md">Get Started</Button>

// Hero CTA (big landing pages only)
<Button variant="brand" size="lg" showArrow>Transform Your Business</Button>

// Navbar CTA (compact)
<Button variant="brand" size="sm">Sign Up</Button>

// Secondary action
<Button variant="secondary" size="md">Learn More</Button>
```

## LINK SYSTEM

### 3 Link Components

1. **Button Component** (extracted useShimmer hook)
   - Primary/Brand/Secondary/Ghost variants
   - Always has shimmer animation
   - Sizes: sm/md/lg/xl

2. **CTALink Component** (text + arrow combinations)
   - Unified hover: text AND arrow move together
   - Arrow animates 4px right on hover
   - Use for "Learn More →" style links
   ```tsx
   <CTALink href="/learn-more">
     Explore Case Studies
   </CTALink>
   ```

3. **InlineLink Component** (paragraph interlinking)
   - Brand red underline
   - Warm-100 background on hover
   - For inline text links
   ```tsx
   <InlineLink href="/methodology">
     our approach
   </InlineLink>
   ```

WHEN TO USE WHICH:
- Full CTA → Button component
- Text + Arrow → CTALink
- Inline paragraph link → InlineLink

## SECTION PATTERNS

### Black/White Alternating
PATTERN:
1. Hero (Black)
2. Client Context (White)
3. Challenges (Warm)
4. Engagement Objectives (White)
5. Methodology (Warm)
6. Value Pillars (White)
7. Impact (White)
8. Testimonial (White)
9. Resources (Black)
10. Final CTA (Black)

WHY: Creates rhythm, prevents monotony, guides user's eye
RULE: Never have two same-colored sections adjacent

### Section Structure Template
```tsx
<section className="py-16 md:py-24 bg-[CHOOSE: white/black/var(--warm-300)]">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Label - use SectionLabel from Badge.tsx */}
    <SectionLabel theme="brand">SECTION CATEGORY</SectionLabel>
    
    {/* Section Heading (39px - h2) */}
    <h2 className="text-2xl font-semibold mb-6">
      Section Title
    </h2>
    
    {/* Body Content (16px) */}
    <p className="text-sm text-black/70 mb-8">
      Description paragraph using --text-sm (16px)
    </p>
    
    {/* Cards/Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Your content */}
    </div>
  </div>
</section>
```

## CARD PATTERNS

### Standard Card
```tsx
<div className="bg-white border border-black/8 rounded-lg p-6 hover:border-black/20 transition-colors">
  {/* Icon (optional) */}
  <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
    <IconComponent size={24} />
  </div>
  
  {/* Card Title (20px if 4+ cards, 25px if 2-3 cards) */}
  <h3 className="text-base font-semibold mb-3">
    Card Title
  </h3>
  
  {/* Card Description (16px standard, 14px if 4+ cards) */}
  <p className="text-sm text-black/70">
    Card description text
  </p>
</div>
```

WHY 4+ CARDS RULE:
- 4+ cards → Use 20px titles (--text-base) + 14px body (--text-compact)
- 2-3 cards → Use 25px titles (--text-lg) + 16px body (--text-sm)
REASON: More cards = need compact sizing to prevent overwhelming height

## RESPONSIVE GUIDELINES

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Spacing Adjustments
```tsx
className="py-12 md:py-16 lg:py-24"  // Section padding
className="px-4 md:px-6 lg:px-8"     // Horizontal padding
className="gap-4 md:gap-6 lg:gap-8"  // Grid gaps
```

### Typography Responsiveness
```tsx
// Hero headings - responsive clamp
className="text-[clamp(2rem,5vw,3.052rem)]"

// Section headings - mostly fixed at 39px
className="text-2xl"  // 39px

// Body text - fixed at 16px
className="text-sm"   // 16px
```

## ANIMATION RULES

### Shimmer Effect
WHY: Core brand signature (like Apple's polish)
WHERE: ALL buttons automatically
WHEN: Always active, no exceptions
HOW: Automatic via Button component, 700ms duration

### Arrow Animation
WHY: Indicates forward movement to forms/urgent pages
WHERE: ONLY buttons that redirect to forms or urgent actions
WHEN: User hovers on CTA
HOW: `showArrow` prop on Button component
```tsx
<Button variant="brand" showArrow>
  View Full Report
</Button>
```

WHEN NOT TO USE ARROW:
❌ Navigation links (use CTALink instead)
❌ Secondary actions without urgency
❌ Icon-only buttons

### Hover States
- Buttons: Shimmer intensifies, slight scale (1.02)
- Cards: Border color darkens (black/8 → black/20)
- Links: Underline + background color
- CTALink: Text + arrow move together 4px right

## ACCESSIBILITY REQUIREMENTS

### WCAG AA Compliance
✅ Color contrast: 4.5:1 minimum
✅ Focus indicators: 2px black outline + 2px offset
✅ Touch targets: 40px minimum (sm buttons are 36px but have padding)
✅ Icon-only buttons: Require ariaLabel prop
✅ Keyboard navigation: All interactive elements focusable
✅ Reduced motion: Respects prefers-reduced-motion

### Code Examples
```tsx
// Icon-only button (GOOD)
<Button 
  variant="primary" 
  iconOnly 
  icon={<Download size={20} />}
  ariaLabel="Download annual report PDF"
/>

// Icon-only button (BAD - missing ariaLabel)
<Button iconOnly icon={<Download size={20} />} />
```

## COMMON MISTAKES TO AVOID

❌ Using lg button size as default (use md)
❌ Using red for anything other than CTAs
❌ Hardcoding font sizes instead of using CSS variables
❌ Using arbitrary spacing (use --space-* scale)
❌ Forgetting shimmer animation (it's always on)
❌ Adding arrow to every button (only urgent redirects)
❌ Using --text-3xl for section headings (hero only)
❌ Adjacent sections with same background color
❌ Icon-only buttons without ariaLabel

## 4W+H FRAMEWORK (Use for all decisions)

### WHY
Purpose and reasoning behind the choice

### WHAT
Technical specification of what's being implemented

### WHEN
Scenarios where this pattern should be used

### WHEN NOT
Anti-patterns and scenarios to avoid

### HOW
Implementation code and examples

## FILE STRUCTURE

```
/src/app/components/
  - Button.tsx (main button with shimmer)
  - CTALink.tsx (text + arrow links)
  - InlineLink.tsx (paragraph links)
  - AnimatedArrow.tsx (arrow component)
  - Badge.tsx (badges, SectionLabel, chapter labels - 11 themes)
  - Label.tsx (form-only semantic labels - 3 variants)
  
/src/styles/
  - theme.css (all design tokens + coral palette)
  - fonts.css (DM Sans import)
  
/src/app/hooks/
  - useShimmer.ts (shimmer animation)
```

## QUALITY CHECKLIST

Before completing any page, verify:

✅ All font sizes use CSS variables (no hardcoded px except spatial constraints)
✅ Button shimmer is active (automatic via Button component)
✅ Arrow animation only on urgent CTAs
✅ Sections alternate black/white/warm correctly
✅ Cards use correct title size (20px for 4+, 25px for 2-3)
✅ Spacing uses --space-* tokens from scale
✅ Red color ONLY for CTAs, not decorative
✅ IconOnly buttons have ariaLabel
✅ Focus states are visible (2px outline)
✅ Hover states are smooth (transition-colors)
✅ 4W+H framework applied to custom decisions
✅ Component follows existing patterns from dashboard

## DECISION MATRIX

| Element Type | Font Size | Color | Spacing |
|--------------|-----------|-------|---------|
| Section Label | --text-xs (12.8px) | black/40 | mb-4 |
| Section Heading | --text-2xl (39px) | black | mb-6 |
| Body Paragraph | --text-sm (16px) | black/70 | mb-8 |
| Card Title (4+) | --text-base (20px) | black | mb-3 |
| Card Title (2-3) | --text-lg (25px) | black | mb-3 |
| Card Body (4+) | --text-compact (14px) | black/70 | - |
| Card Body (2-3) | --text-sm (16px) | black/70 | - |
| TOC Item | --text-nav (14px) | black | - |
| Button sm | --button-font-sm (14px) | varies | - |
| Button md | --button-font-md (16px) | varies | - |
| CTA Description | --text-nav (14px) | black/60 | - |

## EXAMPLE COMPLETE SECTION

```tsx
import { SectionLabel } from '@/app/components/Badge';

<section className="py-16 md:py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Label - use SectionLabel component */}
    <SectionLabel theme="brand">OUR SERVICES</SectionLabel>
    
    {/* Heading */}
    <h2 className="text-2xl font-semibold mb-6 text-black">
      What We Offer
    </h2>
    
    {/* Description */}
    <p className="text-sm text-black/70 mb-12 max-w-2xl">
      Comprehensive solutions designed to transform your business through 
      strategic consulting and innovative technology.
    </p>
    
    {/* Cards (4+ cards = compact sizing) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div 
          key={service.id}
          className="bg-white border border-black/8 rounded-lg p-6 hover:border-black/20 transition-colors"
        >
          <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
            <service.icon size={24} className="text-black" />
          </div>
          
          {/* 20px title (4+ cards) */}
          <h3 className="text-base font-semibold mb-3 text-black">
            {service.title}
          </h3>
          
          {/* 14px body (4+ cards) */}
          <p className="text-compact text-black/70 mb-4">
            {service.description}
          </p>
          
          <CTALink href={service.link}>
            Learn More
          </CTALink>
        </div>
      ))}
    </div>
    
    {/* Section CTA */}
    <div className="mt-12 text-center">
      <Button variant="brand" size="md">
        View All Services
      </Button>
    </div>
  </div>
</section>
```

## UPDATED RULES (Feb 2026)

1. **14px Token Family** - Three semantic tokens for navigation
   - var(--text-nav) for TOC items, navigation menus
   - var(--text-compact) for compact body text
   - var(--button-font-sm) for small buttons

2. **Section Heading Size** - Changed from 48.8px to 39px
   - Old: --text-3xl for section h2
   - New: --text-2xl for section h2
   - --text-3xl ONLY for hero h1

3. **Button Default Size** - Changed from lg to md
   - Old: lg (48px) as default
   - New: md (42px) as default
   - lg (48px) ONLY for big homepage heroes

4. **Link System** - Unified into 3 components
   - Button: Full CTAs with shimmer
   - CTALink: Text + arrow combinations
   - InlineLink: Paragraph inline links

## FINAL INSTRUCTION FOR AI

When building a new page:

1. ✅ Read this prompt FIRST
2. ✅ Use existing components from /src/app/components/
3. ✅ Follow color patterns (black/white/warm alternation)
4. ✅ Use CSS variables from theme.css (no hardcoded sizes)
5. ✅ Apply 4W+H framework for custom decisions
6. ✅ Check decision matrix for typography sizing
7. ✅ Verify accessibility (focus states, ariaLabel, contrast)
8. ✅ Test responsive behavior (mobile/tablet/desktop)
9. ✅ Ensure shimmer is active on all buttons
10. ✅ Use arrow animation ONLY for urgent CTAs

QUALITY TARGET: 9.5/10 minimum (Stripe/Shopify/Material Design level)
```

---

## 📝 NOTES FOR TEAM

- This prompt is AI-readable and optimized for Figma Make
- Copy the entire code block above when starting new pages
- AI will automatically follow our design system
- No need to explain every detail - it's all documented here

**Last Updated:** 2026-02-28  
**Version:** 3.2  
**Status:** ✅ PRODUCTION READY