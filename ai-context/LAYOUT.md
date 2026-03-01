# Design System — Layout & Page Assembly

**Module:** `ai-context/LAYOUT.md`  
**Version:** 3.3.2  
**Source of truth:** `/src/styles/theme.css`, `/src/app/components/Container.tsx`

---

## Spacing System (Base-10 Scale)

### WHY
Predictable 4px increments create rhythm, make design decisions faster, ensure visual harmony.

### WHAT
```css
--space-1: 0.25rem;  /* 4px - Tight spacing */
--space-2: 0.5rem;   /* 8px - Compact */
--space-3: 0.75rem;  /* 12px - Small gaps */
--space-4: 1rem;     /* 16px - Default */
--space-6: 1.5rem;   /* 24px - Medium */
--space-8: 2rem;     /* 32px - Large */
--space-12: 3rem;    /* 48px - Section spacing */
--space-16: 4rem;    /* 64px - Large sections */
--space-20: 5rem;    /* 80px - Very large */
--space-24: 6rem;    /* 96px - Maximum */
```

### WHEN
- `--space-12` (48px) for spacing between sections
- `--space-6` (24px) for spacing within sections
- `--space-4` (16px) for element spacing

### WHEN NOT
- Don't use arbitrary values (stick to scale)
- Don't use Tailwind spacing classes that break scale

---

## Container Width System

### WHY
Consistent width constraints ensure optimal readability. Based on Baymard Institute: 50-75 characters per line is optimal.

### WHAT
```css
--container-page: 75rem;       /* 1200px - Page shell, hero, navbar */
--container-content: 62.5rem;  /* 1000px - Standard sections, card grids */
--container-narrow: 56.25rem;  /* 900px  - CTAs, testimonials, focused */
--container-prose: 43.75rem;   /* 700px  - Paragraph text (~65-70 chars) */
--container-compact: 37.5rem;  /* 600px  - Short descriptions */
```

### Decision Table

| Token | Use Case |
|-------|----------|
| `--container-page` | Outer page shell, full-width heroes, navigation |
| `--container-content` | Standard section content, card grids |
| `--container-narrow` | Focused CTAs, testimonials, forms |
| `--container-prose` | Long-form paragraphs (~65-70 chars at 16px) |
| `--container-compact` | Short descriptions (~55-60 chars at 20px) |

### WHEN NOT
- Don't use `--container-page` for body text (too wide)
- Don't use `--container-compact` for card grids (too narrow)
- Don't hardcode `max-w-[1200px]` — use `max-w-[var(--container-page)]`

### HOW
```tsx
// Standard section layout
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-[var(--container-content)]">
    {/* Section content */}
  </div>
</section>

// Or use Container component:
import { Container } from '@/app/components/Container';
<Container width="content">{/* content */}</Container>
```

---

## Responsive Padding (Mobile-First)

### WHAT
```css
/* Horizontal Padding */
--padding-mobile: 1rem;    /* 16px - Mobile (0-639px) */
--padding-tablet: 1.5rem;  /* 24px - Tablet (640-1023px) */
--padding-desktop: 2rem;   /* 32px - Desktop (1024px+) */

/* Section Vertical Spacing */
--section-py-mobile: 3rem;   /* 48px - py-12 */
--section-py-tablet: 4rem;   /* 64px - sm:py-16 */
--section-py-desktop: 5rem;  /* 80px - md:py-20 */
```

### Standard Pattern
```tsx
<section className="py-12 sm:py-16 md:py-20">
  <div className="px-4 sm:px-6 md:px-8 mx-auto max-w-[var(--container-content)]">
    {/* Content */}
  </div>
</section>
```

### Mobile-First UX Laws
- **Fitts’s Law**: Touch targets min 44px, generous tap spacing
- **Miller’s Law**: Reduce visible options on small screens
- **Content stacking**: 1-col below 640px, 2-col at 768px, 3-col at 1024px+

---

## Section Pattern (Background Alternation)

### Standard Sequence

```
 1. HeroSection              → BLACK
 2. ClientContextSection     → WHITE
 3. ChallengesSection        → WARM (#f5f2f1)
 4. EngagementObjectives     → WHITE
 5. MethodologySection       → WARM
 6. ImpactSection            → WHITE
 7. ValuePillarsSection      → WHITE (border-t separator)
 8. TestimonialSection       → WHITE (border-t separator)
 9. ResourcesSection         → BLACK (dark gradient mesh)
10. FinalCTASection          → WHITE (border-t separator)
```

### Section Templates

```tsx
// Black section (hero moments)
<section className="bg-black text-white py-24">
  <Container width="content">{/* Hero, Final CTA */}</Container>
</section>

// White section (standard content)
<section className="bg-white py-12 sm:py-16 md:py-20">
  <Container width="content">{/* Objectives, Impact */}</Container>
</section>

// Warm section (highlighted content)
<section style={{ background: 'var(--warm-300)' }} className="py-12 sm:py-16 md:py-20">
  <Container width="content">{/* Challenges, Methodology */}</Container>
</section>
```

---

## Page Assembly Guide (v3.3.1)

### Page Shell Template

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

### Section Type Recipes

| Type | Components | Background |
|------|-----------|------------|
| **Hero** | `SectionHeading level={1}`, dual CTAs (brand + ghost), `Container width="content"` | Black |
| **Content + Cards** | `SectionLabel`, `h2`, `Card` in grid, `Container width="content"` | White or Warm |
| **Methodology** | `StepPill` badges, sequential steps, connecting lines | Warm |
| **Metrics** | `useCounter` hook, big display numbers (Serif), stat cards | White |
| **Testimonial** | Serif quote, attribution, `Container width="narrow"` | White (border-t) |
| **Resources** | `ResourceCard` (7 variants), Masonry grid, `useResponsiveGutter` | Black (gradient) |
| **Final CTA** | Brand button, urgency language, `Container width="narrow"` | White (border-t) |

### Component Selection Table

| Need | Component | Import |
|------|-----------|--------|
| Section wrapper | `SectionWrapper` | `@/app/components/SectionWrapper` |
| Heading with eyebrow | `SectionHeading` | `@/app/components/SectionHeading` |
| Width constraint | `Container` | `@/app/components/Container` |
| Content card | `Card` | `@/app/components/Card` |
| Resource card | `ResourceCard` | `@/app/components/ResourceCard` |
| CTA button | `Button` | `@/app/components/Button` |
| Exploratory link | `CTALink` | `@/app/components/CTALink` |
| Inline link | `InlineLink` | `@/app/components/InlineLink` |
| Section label | `SectionLabel` | `@/app/components/Badge` |

### Typography Token Quick Reference

| Element | Token | Size |
|---------|-------|------|
| Hero h1 | `--text-3xl` | 48.8px |
| Section h2 | `--text-2xl` | 39px |
| Subsection h3 | `--text-xl` | 31.25px |
| Body text | `--text-sm` | 16px |
| Labels/eyebrows | `--text-xs` | 12.8px |
| Navigation | `--text-nav` | 14px |

---

## Border Radius Decision Table

| Element | Radius | Token |
|---------|--------|-------|
| Images | 2.5px | `--radius-image` |
| Buttons, small cards, badges | 5px | `--radius-button` |
| Large cards, modals | 10px | `--radius-card` |

---

**v3.3.2 | Part of [ai-context/](.) module system**
