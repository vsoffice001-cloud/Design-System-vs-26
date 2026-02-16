# 📋 FIGMA MAKE IMPORT PROMPTS
**Copy These Exact Prompts Into New Figma Make Projects**

---

## 🎯 PURPOSE
These are the EXACT prompts to paste into new Figma Make projects to automatically apply the Ken Bold design system. The AI will read these prompts and build pages following all design system rules.

---

## 📦 STEP 1: INITIAL SETUP PROMPT

**Copy this into your FIRST message in a new Figma Make project:**

```
I'm building a page using the Ken Bold Editorial Design System. Before we start, you MUST follow these rules:

🎨 DESIGN SYSTEM RULES:

TYPOGRAPHY (CRITICAL - NEVER USE TAILWIND FONT CLASSES):
- Hero h1: var(--text-3xl) = 48.8px (ONLY for hero)
- Section h2: var(--text-2xl) = 39px (standard section headings)
- Subsection h3: var(--text-xl) = 31.25px
- Body text: var(--text-sm) = 16px (MOST USED)
- Navigation/TOC: var(--text-nav) = 14px
- Labels: var(--text-xs) = 12.8px

❌ NEVER use: text-2xl, text-lg, text-base (Tailwind classes)
✅ ALWAYS use: var(--text-2xl), var(--text-xl), etc.

COLORS:
- Brand Red: #b01f24 (CTAs ONLY - use sparingly)
- Black: #000000 (primary text, hero backgrounds)
- White: #ffffff (primary backgrounds)
- Warm: #f5f2f1 (alternating sections)
- Black tints: #fafafa, #f5f5f5, #e5e5e5, #737373

BUTTONS:
- Default size: md (42px height, 16px font) - use for 90% of buttons
- Navbar size: sm (36px height, 14px font)
- Hero size: lg (48px height) - ONLY for homepage heroes
- ✨ Shimmer: ALWAYS active (never disable)
- ➡️ Arrow: ONLY for forms/urgent CTAs

SPACING:
- Use base-10 scale: gap-4, gap-6, gap-8, p-6, py-16
- Section padding: py-16 md:py-24
- Container: mx-auto px-4 md:px-6 max-w-7xl

LAYOUT:
- Container: <div className="container mx-auto px-4 md:px-6 max-w-7xl">
- Section spacing: py-16 md:py-24
- Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

Do you understand these rules? Reply "Design system loaded ✅" and wait for my page request.
```

---

## 📋 STEP 2: GITHUB IMPORT PROMPT

**If you've already imported components from GitHub, use this:**

```
I've imported the Ken Bold design system components from GitHub (vsoffice001-cloud/Design-System-vs-26).

The following components are already available:
- Button.tsx (with shimmer animation)
- CTALink.tsx (text + arrow links)
- InlineLink.tsx (paragraph links)
- AnimatedArrow.tsx
- theme.css (all design tokens)

CRITICAL RULES:

TYPOGRAPHY:
✅ Hero h1 → className="text-3xl" uses var(--text-3xl) = 48.8px
✅ Section h2 → className="text-2xl" uses var(--text-2xl) = 39px  
✅ Body text → className="text-sm" uses var(--text-sm) = 16px
❌ NEVER use fontSize: "24px" or arbitrary sizes

BUTTONS:
✅ Standard: <Button variant="brand">Click</Button>
✅ Navbar: <Button variant="brand" size="sm">Sign Up</Button>
✅ With arrow: <Button variant="brand" showArrow>Submit</Button>
❌ NEVER use size="lg" by default (only for homepage heroes)

LINKS:
✅ Text CTA: <CTALink href="/demo">Schedule Demo</CTALink>
✅ Paragraph: <InlineLink href="/about">Learn more</InlineLink>
❌ Don't use regular <a> tags for CTAs

Please confirm you understand by listing the key rules, then wait for my page request.
```

---

## 📋 STEP 3: PAGE BUILD PROMPT TEMPLATES

### A. Hero Section Prompt

```
Build a hero section following the Ken Bold design system:

REQUIREMENTS:
- Background: bg-black text-white
- Padding: py-24 md:py-32
- Container: mx-auto px-4 md:px-6 max-w-7xl
- H1: className="text-3xl font-normal mb-6" (uses var(--text-3xl) = 48.8px)
- Subheading: className="text-sm text-white/80 mb-8 max-w-2xl"
- Primary CTA: <Button variant="brand" size="md">Get Started</Button>
- Secondary CTA: <CTALink href="/demo" className="text-white">Watch Demo</CTALink>

CONTENT:
- Title: "[Your Title Here]"
- Subtitle: "[Your Subtitle Here]"
- Primary CTA: "[Your CTA Text]"
- Secondary CTA: "[Your Secondary CTA]"

❌ DO NOT use text-4xl, text-3xl Tailwind classes
✅ USE text-3xl which maps to var(--text-3xl)
```

---

### B. Content Section Prompt

```
Build a content section following the Ken Bold design system:

REQUIREMENTS:
- Background: Alternate between bg-white and bg-warm-300
- Padding: py-16 md:py-24
- Container: mx-auto px-4 md:px-6 max-w-7xl
- H2: className="text-2xl font-normal mb-6" (uses var(--text-2xl) = 39px)
- Body: className="text-sm text-black/70 mb-8"
- Cards: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

CARD REQUIREMENTS (if 3+ cards):
- Card title: className="text-base font-semibold mb-3" (20px)
- Card body: className="text-compact text-black/70" (14px)
- Card container: bg-white border border-black/8 rounded-lg p-6

CONTENT:
- Section heading: "[Your Heading]"
- Section description: "[Your Description]"
- Cards: [List your cards]

❌ DO NOT use text-lg, text-xl for card titles when you have 4+ cards
✅ USE text-base (20px) for card titles when 4+ cards
```

---

### C. Navbar Prompt

```
Build a navbar following the Ken Bold design system:

REQUIREMENTS:
- Position: fixed top-0 w-full z-50
- Background: bg-black text-white
- Height: h-16 (compact when scrolled), h-20 (at top)
- Container: mx-auto px-4 flex items-center justify-between
- Nav links: className="text-2xs hover:text-white/80" (12px)
- CTA button: <Button variant="brand" size="sm">Get Started</Button>

NAVIGATION ITEMS:
- [List your nav items]

Two-state behavior:
- At top: h-20, expanded
- Scrolled: h-16, compact

❌ DO NOT use large buttons in navbar
✅ USE size="sm" for navbar CTAs
```

---

### D. Card Grid Prompt

```
Build a card grid following the Ken Bold design system:

REQUIREMENTS:
- Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[X] gap-6
- Card: bg-white border border-black/8 rounded-lg p-6

IF 4+ CARDS:
- Title: className="text-base font-semibold mb-3" (20px)
- Body: className="text-compact text-black/70" (14px)

IF 2-3 CARDS:
- Title: className="text-lg font-semibold mb-4" (25px)
- Body: className="text-sm text-black/70"

CARDS DATA:
[Provide your card data]

Number of cards: [X]
Grid columns: lg:grid-cols-[X]
```

---

### E. CTA Section Prompt

```
Build a final CTA section following the Ken Bold design system:

REQUIREMENTS:
- Background: bg-black text-white
- Padding: py-16 md:py-24
- Container: mx-auto px-4 md:px-6 max-w-4xl text-center
- Heading: className="text-2xl font-normal mb-6" (NOT text-3xl!)
- Subheading: className="text-sm text-white/80 mb-8"
- CTA Button: <Button variant="brand" size="md" showArrow>

CONTENT:
- Heading: "[Your CTA Heading]"
- Subheading: "[Your Supporting Text]"
- Button text: "[Your CTA]"

❌ DO NOT use var(--text-3xl) - that's only for hero h1
✅ USE var(--text-2xl) for CTA section headings
```

---

## 🎯 STEP 4: COMPONENT-SPECIFIC PROMPTS

### Button Prompt

```
Add a button following the Ken Bold design system:

BUTTON TYPE: [Choose: Primary CTA / Secondary Action / Navbar CTA / Hero CTA]

IF Primary CTA:
<Button variant="brand" size="md">Get Started</Button>

IF Secondary Action:
<Button variant="secondary" size="md">Learn More</Button>

IF Navbar CTA:
<Button variant="brand" size="sm">Sign Up</Button>

IF Hero CTA (homepage only):
<Button variant="brand" size="lg">Transform Your Business</Button>

IF Form Submit:
<Button variant="brand" size="md" showArrow>Submit Application</Button>

RULES:
- ✨ Shimmer is always active (don't disable)
- ➡️ Arrow only for forms/urgent CTAs (showArrow prop)
- 🎯 Default to size="md" (90% of buttons)
```

---

### Link Prompt

```
Add a link following the Ken Bold design system:

LINK TYPE: [Choose: Text CTA / Inline Link / Nav Link]

IF Text CTA (with arrow):
<CTALink href="/demo">Schedule a Demo</CTALink>

IF Inline Paragraph Link:
<p className="text-sm">
  Learn more about{' '}
  <InlineLink href="/methodology">our methodology</InlineLink>
  {' '}in the guide.
</p>

IF Navigation Link:
<a href="#section" className="text-2xs hover:text-white/80">
  Section Name
</a>

RULES:
- Use CTALink for standalone text CTAs with arrows
- Use InlineLink within paragraph text
- Use regular <a> for navigation menus
```

---

### Typography Prompt

```
Apply typography following the Ken Bold design system:

ELEMENT TYPE: [Choose: Hero H1 / Section H2 / Subsection H3 / Body Text / Label]

IF Hero H1:
<h1 className="text-3xl font-normal">
  Title Here
</h1>
// Maps to var(--text-3xl) = 48.8px

IF Section H2:
<h2 className="text-2xl font-normal mb-6">
  Section Heading
</h2>
// Maps to var(--text-2xl) = 39px

IF Subsection H3:
<h3 className="text-xl font-semibold mb-4">
  Subsection
</h3>
// Maps to var(--text-xl) = 31.25px

IF Body Text:
<p className="text-sm text-black/70">
  Paragraph content
</p>
// Maps to var(--text-sm) = 16px

IF Label/Metadata:
<p className="text-xs text-black/60 uppercase tracking-wide">
  Label Text
</p>
// Maps to var(--text-xs) = 12.8px

❌ NEVER: fontSize: "24px" or className="text-lg"
✅ ALWAYS: className="text-2xl" (uses CSS variable)
```

---

## 🚨 CRITICAL REMINDERS FOR AI

**Paste this when AI makes mistakes:**

```
CRITICAL CORRECTIONS NEEDED:

Typography:
❌ You used: className="text-lg" or fontSize: "24px"
✅ Should be: className="text-2xl" (for h2) or className="text-sm" (for body)

Buttons:
❌ You used: size="lg" for standard button
✅ Should be: size="md" (default) or size="sm" (navbar)

Colors:
❌ You used: bg-blue-500 or arbitrary #123456
✅ Should be: bg-black, bg-white, bg-warm-300, or bg-brand-red

Spacing:
❌ You used: gap-[17px] or p-[22px]
✅ Should be: gap-6, p-6 (base-10 scale)

Please fix these and regenerate the component.
```

---

## 📚 QUICK REFERENCE FOR COMMON REQUESTS

### "Build me a landing page"

```
Build a landing page with the Ken Bold design system including:

1. HERO SECTION:
   - bg-black text-white py-24 md:py-32
   - H1: text-3xl (48.8px) - "[Your Title]"
   - Subtitle: text-sm (16px)
   - CTA: <Button variant="brand" size="md">Get Started</Button>

2. FEATURES SECTION:
   - bg-warm-300 py-16 md:py-24
   - H2: text-2xl (39px) - "Features"
   - 3-column card grid
   - Card titles: text-base (20px)

3. TESTIMONIALS:
   - bg-white py-16 md:py-24
   - H2: text-2xl - "What Our Clients Say"
   - 2-column grid
   - Card titles: text-lg (25px)

4. FINAL CTA:
   - bg-black text-white py-16 md:py-24
   - H2: text-2xl (NOT text-3xl!) - "[CTA Heading]"
   - Button: <Button variant="brand" size="md" showArrow>

Follow all design system rules strictly.
```

---

### "Build me a case study page"

```
Build a case study page with the Ken Bold design system including:

SECTIONS (alternating backgrounds):
1. Hero - bg-black
2. Client Context - bg-white
3. Challenges - bg-warm-300
4. Methodology - bg-white
5. Impact - bg-warm-300
6. Final CTA - bg-black

ALL SECTIONS:
- Section H2: text-2xl (39px)
- Body text: text-sm (16px)
- Container: mx-auto px-4 md:px-6 max-w-7xl
- Padding: py-16 md:py-24

SIDEBAR (sticky TOC):
- Position: sticky top-24
- TOC items: text-nav (14px)
- Active state highlighting
- "Unlock" button: size="sm"

Follow the 4W+H component guidelines.
```

---

## ✅ VERIFICATION CHECKLIST

After AI generates code, verify:

```
TYPOGRAPHY:
[ ] Hero uses text-3xl (var(--text-3xl) = 48.8px) ✓
[ ] Sections use text-2xl (var(--text-2xl) = 39px) ✓
[ ] Body uses text-sm (var(--text-sm) = 16px) ✓
[ ] No Tailwind font classes in inline styles ✓

BUTTONS:
[ ] Default buttons use size="md" ✓
[ ] Navbar buttons use size="sm" ✓
[ ] Shimmer is active (not disabled) ✓
[ ] Arrow only on urgent CTAs ✓

COLORS:
[ ] Brand red used sparingly (CTAs only) ✓
[ ] No arbitrary hex colors ✓
[ ] Backgrounds alternate (white/warm) ✓

SPACING:
[ ] Uses base-10 scale (gap-4, gap-6, etc.) ✓
[ ] Section padding: py-16 md:py-24 ✓
[ ] Container: max-w-7xl ✓

If any item fails, paste the "CRITICAL CORRECTIONS NEEDED" prompt above.
```

---

## 📦 FILES TO IMPORT FROM GITHUB

**Before using these prompts, import these files:**

From: `vsoffice001-cloud/Design-System-vs-26`

REQUIRED:
- `/src/styles/theme.css` (all design tokens)
- `/src/app/components/Button.tsx`
- `/src/app/components/CTALink.tsx`
- `/src/app/components/InlineLink.tsx`
- `/src/app/components/AnimatedArrow.tsx`
- `/src/app/hooks/useShimmer.ts`

OPTIONAL (for advanced features):
- `/src/app/components/TableOfContents.tsx`
- `/src/app/components/ReadingProgressBar.tsx`
- `/src/app/components/Navbar.tsx`

---

**Last Updated:** 2026-02-13  
**Design System Version:** 2.0  
**Usage:** Copy prompts into new Figma Make projects for automatic design system compliance
