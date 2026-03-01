# Quick Start Prompt - Copy & Paste This

**Use this shortened version when you need to quickly start a new Figma Make page**

---

## PASTE THIS INTO FIGMA MAKE

```
Follow our design system from vsoffice001-cloud/Design-System-vs-26:

FONT PAIRING:
• Serif (Noto Serif): Headings h1-h3, hero titles, testimonial quotes, display numbers
• Sans (DM Sans): Body text, UI elements, buttons, badges, labels, navigation, forms
• Mono: Code blocks, metric values, tabular data
• NEVER use Serif for body/buttons/labels. NEVER use Sans for headings.

TYPOGRAPHY (Major Third 1.25x):
• Labels: 12.8px (--text-xs)
• Body: 16px (--text-sm) ← 90% of text
• Section h2: 39px (--text-2xl)
• Hero h1: 48.8px (--text-3xl)
• TOC/Nav: 14px (--text-nav)

CONTAINER WIDTHS (5 semantic presets):
• --container-page: 1200px — Outer page shell, hero, navbar
• --container-content: 1000px — Standard sections, card grids
• --container-narrow: 900px — CTAs, testimonials
• --container-prose: 700px — Long-form paragraphs (~65-70 chars)
• --container-compact: 600px — Short descriptions

COLORS:
• Black #000000 - Hero, Resources sections
• White #ffffff - Default sections
• Warm #f5f2f1 - Challenges, Methodology
• Red #b01f24 - CTAs ONLY (sparingly)
• Accents: purple-600, periwinkle-500, coral-600, perano-500
• Semantic: green-500 (success), amber-500 (warning), rose-500 (error)

BUTTONS:
• Default size: md (42px height, 16px font)
• Navbar size: sm (36px height, 14px font)
• Hero size: lg (48px) - big landing pages ONLY
• Shimmer: Always active (brand signature)
• Arrow: ArrowUpRight (45° diagonal) - ONLY for urgent CTAs to forms
  - showArrow prop on Button, or automatic in CTALink
  - NEVER use ArrowRight or ChevronRight
• Secondary variant (v3.3 two-state):
  - Resting: neutral border rgba(0,0,0,0.12), text rgba(0,0,0,0.7), white shimmer
  - Hover: brand-red border #b01f24, brand-red text, red-tinted shimmer + shadow
  - Dark mode secondary: unchanged (bg-white/10, white text)

BADGES (11 themes, 3 variants, CSS custom property driven):
• Section labels: <SectionLabel theme="brand">KEY INSIGHTS</SectionLabel>
• Step pills: <Badge variant="pill" size="sm" theme="warm" bordered shimmer>STEP 1</Badge>
• Status: <Badge variant="rounded" size="sm" theme="success" bordered>COMPLETE</Badge>
• Chapter labels: <Badge variant="minimal" size="sm" theme="brand" fontWeight={600}>CHAPTER 1</Badge>

LAYOUT COMPONENTS:
• Container.tsx — Semantic width wrapper (page/content/narrow/prose/compact)
• SectionWrapper.tsx — Section layout (background + spacing + max-width)
• SectionHeading.tsx — Heading molecule (eyebrow + h1/h2/h3)
• Card.tsx — Content container (variant/padding/shadow/hover)
• ResourceCard.tsx — Content card (7 variants, 2 modes, 53 --rc-* tokens)

PAGE-LEVEL COMPONENTS (wire once at page root):
• Navbar.tsx — Fixed top nav, 2 states (expanded/compact)
• ReadingProgressBar.tsx — Section-specific progress (case studies)
• ScrollProgress.tsx — Generic scroll progress (any page)
• ScrollToTop.tsx — Floating back-to-top button
• StickyCTA.tsx — Context-aware floating CTA
• ContactModal.tsx — Contact form overlay
• NextSectionCTA.tsx — "Scroll to next" guidance
• TableOfContents.tsx — Sidebar TOC with active highlighting

SECTIONS:
• Alternate: Black → White → Warm → White
• Padding: py-12 sm:py-16 md:py-20
• Responsive gutters: px-4 sm:px-6 md:px-8

ACCESSIBILITY:
• IconOnly buttons need ariaLabel
• Focus: 2px black outline
• Min touch: 44px

Use existing components from /src/app/components/
Quality target: 9.5/10 (Stripe/Material Design level)
```

---

## BUTTON QUICK COPY-PASTE

```tsx
// Standard CTA (most common)
<Button variant="brand">Get Started</Button>

// Urgency CTA with animated arrow (ArrowUpRight diagonal)
<Button variant="brand" showArrow>Schedule Demo</Button>

// Hero CTA (big pages only)
<Button variant="brand" size="lg" showArrow>Transform Business</Button>

// Navbar (compact)
<Button variant="brand" size="sm">Sign Up</Button>

// Secondary (two-state: neutral at rest, brand-red on hover)
<Button variant="secondary">Learn More</Button>
<Button variant="secondary" showArrow>Explore Features</Button>

// Secondary on dark background (unchanged)
<Button variant="secondary" background="dark">Learn More</Button>

// Text + Arrow Link (AnimatedArrow included automatically)
<CTALink href="/learn">Explore More</CTALink>

// Inline paragraph link
<InlineLink href="/about">our approach</InlineLink>
```

---

## PAGE SHELL TEMPLATE

```tsx
import { Navbar } from '@/app/components/Navbar';
import { ReadingProgressBar } from '@/app/components/ReadingProgressBar';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { StickyCTA } from '@/app/components/StickyCTA';
import { ContactModal } from '@/app/components/ContactModal';

export default function ReportPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <ReadingProgressBar />
      <Navbar />
      <main id="main-content">
        {/* Sections here */}
      </main>
      <ScrollToTop />
      <StickyCTA />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
```

---

## SECTION TEMPLATE

```tsx
import { SectionLabel } from '@/app/components/Badge';

<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 md:px-8">
    <SectionLabel theme="brand">CATEGORY</SectionLabel>
    <h2 style={{ fontSize: 'var(--text-2xl)' }} className="font-serif font-light mb-6">
      Section Title
    </h2>
    <p style={{ fontSize: 'var(--text-sm)' }} className="text-black/70 mb-8 max-w-[var(--container-prose)]">
      Description
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Your content */}
    </div>
  </div>
</section>
```

---

**Full documentation:** See `ai-context/` modules (v3.3.2)  
**Component guidelines:** See COMPONENT_GUIDELINES_4WH.md  
**File map (reading order):** See design-system-checklist.md (v2.1)  
**Live examples:** Design System Dashboard  
**Updated:** 2026-03-01
