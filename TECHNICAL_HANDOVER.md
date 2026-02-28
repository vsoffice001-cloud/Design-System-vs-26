# YASH Case Study - Technical Handover Documentation

**Project:** Evaluating India's Transformer Bushing Market for IPO Readiness - ₹110 Cr.  
**Date:** February 17, 2026  
**Version:** 1.0 - Production Ready

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [File Structure](#file-structure)
4. [Design System](#design-system)
5. [Component Library](#component-library)
6. [Styling Architecture](#styling-architecture)
7. [Responsive Behavior](#responsive-behavior)
8. [Installation & Setup](#installation--setup)
9. [Deployment Guidelines](#deployment-guidelines)
10. [Browser Support](#browser-support)

---

## 🎯 Project Overview

This is a premium case study web page featuring:

- **Minimalist editorial aesthetic** with black/white alternating sections
- **Massive typography** using Major Third scale (1.25 ratio)
- **Generous whitespace** with 1000px max content width
- **Strict border radius system** (2.5px images, 5px buttons, 10px cards)
- **WCAG AAA compliance** with semantic color tokens
- **Fully responsive** mobile-first design

### Key Features

✅ 4 Hero Section variants (Light, Dark, Alt White, Alt Dark)  
✅ Rich editorial color palettes for backgrounds  
✅ Universal badge system with glassmorphism overlays  
✅ Sticky navigation with reading progress  
✅ Smooth scroll animations  
✅ Modal system (Contact, Search)  
✅ Resources section with multiple card variants  

---

## ⚙️ Technical Stack

```json
{
  "framework": "React 18",
  "language": "TypeScript",
  "styling": "Tailwind CSS v4",
  "build": "Vite",
  "icons": "Lucide React",
  "package-manager": "npm/pnpm"
}
```

### Key Dependencies

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS v4** - Utility-first CSS
- **Lucide React** - Icon System
- **Vite** - Build Tool

---

## 📁 File Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                           # Main application entry
│   │   ├── components/
│   │   │   ├── HeroSection.tsx               # Hero with 4 variants
│   │   │   ├── ClientContextSection.tsx      # Client background
│   │   │   ├── ChallengesSection.tsx         # Market challenges
│   │   │   ├── EngagementObjectivesSection.tsx
│   │   │   ├── MethodologySection.tsx        # Approach details
│   │   │   ├── ImpactSection.tsx             # Results & metrics
│   │   │   ├── ClientEndorsementSection.tsx  # Testimonial
│   │   │   ├── FinalCTASection.tsx           # Bottom CTA
│   │   │   ├── ResourcesSection.tsx          # Masonry grid section wrapper
│   │   │   ├── Navbar.tsx                    # Sticky navigation
│   │   │   ├── StickyCTA.tsx                 # Floating CTA button
│   │   │   ├── ReadingProgressBar.tsx        # Progress indicator
│   │   │   ├── ContactModal.tsx              # Contact form modal
│   │   │   ├── SearchModal.tsx               # Search overlay
│   │   │   ├── Badge.tsx                     # Universal badge component
│   │   │   ├── Button.tsx                    # Button component
│   │   │   ├── ResourceCard.tsx              # Token-driven card (7 variants, 2 modes)
│   │   │   ├── FrostedCard.tsx               # Glassmorphism card
│   │   │   ├── InlineLink.tsx                # Styled links
│   │   │   ├── BackgroundHighlight.tsx       # Highlighted backgrounds
│   │   │   ├── MegaMenu.tsx                  # Navigation mega menu
│   │   │   ├── Container.tsx                 # Layout container (3 width tiers)
│   │   │   ├── SubtleVariantSwitcher.tsx     # Design review variant toggle
│   │   │   ├── badges/
│   │   │   │   ├── InfoCardLabel.tsx         # Info card badges
│   │   │   │   ├── ObjectivePill.tsx         # Objective badges
│   │   │   │   ├── SectionLabel.tsx          # Section labels
│   │   │   │   └── index.ts                  # Badge exports
│   │   │   └── ui/                           # shadcn/ui components
│   │   └── hooks/
│   │       ├── useActiveSection.ts           # Section tracking
│   │       ├── useCounter.ts                 # Animated counters
│   │       ├── useHeroVisibility.ts          # Hero visibility
│   │       ├── useMagneticEffect.ts          # Magnetic button effect
│   │       ├── useReadingProgress.ts         # Reading progress
│   │       ├── useResponsiveGutter.tsx       # Responsive grid gutters
│   │       ├── useScrollAnimation.ts         # Scroll animations
│   │       ├── useScrollDirection.ts         # Scroll direction
│   │       └── useSectionProgress.ts         # Section progress
│   └── styles/
│       ├── index.css                         # Main stylesheet
│       ├── theme.css                         # Design tokens
│       ├── tailwind.css                      # Tailwind base
│       ├── animations.css                    # Animation utilities
│       ├── fonts.css                         # Font imports
│       ├── hero.css                          # Hero-specific styles
│       └── inline-link.css                   # Link styles
├── package.json                              # Dependencies
└── vite.config.ts                            # Vite configuration
```

---

## 🎨 Design System

### Color System

**Brand Colors:**
```css
--brand-red: #b01f24;           /* Primary brand identity */
```

**Editorial Warm Palette:**
```css
--warm-rust: #c44536;           /* Warm accent */
--warm-terracotta: #d4835c;     /* Secondary warm */
--warm-sand: #e8a87c;           /* Light warm */
--warm-cream: #f5d5b8;          /* Lightest warm */
```

**Editorial Cool Palette:**
```css
--cool-navy: #1a3a52;           /* Deep cool */
--cool-slate: #4a6b7c;          /* Mid cool */
--cool-steel: #7a9aaa;          /* Light cool */
--cool-mist: #b8cdd9;           /* Lightest cool */
```

**Neutrals:**
```css
--neutral-black: #000000;       /* Pure black */
--neutral-charcoal: #1a1a1a;    /* Near black */
--neutral-graphite: #2d2d2d;    /* Dark gray */
--neutral-ash: #666666;         /* Mid gray */
--neutral-silver: #999999;      /* Light gray */
--neutral-platinum: #cccccc;    /* Lighter gray */
--neutral-fog: #e5e5e5;         /* Very light gray */
--neutral-snow: #f5f5f5;        /* Off white */
--neutral-white: #ffffff;       /* Pure white */
```

### Typography Scale (Major Third - 1.25 Ratio)

```css
--text-xs: 0.64rem;      /* 10.24px */
--text-sm: 0.8rem;       /* 12.8px */
--text-base: 1rem;       /* 16px */
--text-md: 1.25rem;      /* 20px */
--text-lg: 1.5625rem;    /* 25px */
--text-xl: 1.953rem;     /* 31.25px */
--text-2xl: 2.441rem;    /* 39.06px */
--text-3xl: 3.052rem;    /* 48.83px */
--text-4xl: 3.815rem;    /* 61.04px */
--text-5xl: 4.768rem;    /* 76.29px */
--text-6xl: 5.96rem;     /* 95.37px */
--text-7xl: 7.451rem;    /* 119.22px */
--text-8xl: 9.313rem;    /* 149.02px */
```

### Border Radius System

```css
--radius-image: 2.5px;   /* For images */
--radius-button: 5px;    /* For buttons and small cards */
--radius-card: 10px;     /* For big cards */
```

### Spacing System

```css
--max-width: 1000px;     /* Maximum content width */
--gutter: 24px;          /* Default spacing */
```

---

## 🧩 Component Library

### 1. Badge Component (`Badge.tsx`)

Universal badge system with multiple variants and themes.

**Props:**
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outlined' | 'minimal' | 'filled' | 'frosted';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  theme?: 'neutral' | 'warm' | 'cool' | 'primary';
  mode?: 'light' | 'dark';
  className?: string;
  style?: React.CSSProperties;
}
```

**Usage:**
```tsx
// Featured badge with glassmorphism overlay
<Badge 
  variant="minimal"
  size="xs"
  theme="neutral"
  mode="dark"
  className="text-white font-semibold uppercase tracking-[1.2px]"
  style={{ 
    fontSize: '10px',
    padding: '6px 12px',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
  }}
>
  Featured
</Badge>
```

### 2. Button Component (`Button.tsx`)

Premium button with multiple variants and hover states.

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
```

**Usage:**
```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```

### 3. ResourceCard Component (`ResourceCard.tsx`)

Token-driven card component with 7 content variants, 2 card styles, and 2 color modes.
All colors from `--rc-*` CSS custom properties — zero Tailwind color classes.

**Key Features:**
- 7 content variants via declarative `VARIANT_CONFIG` record
- 2 card styles: `default` (transparent) and `bordered` (frosted glass)
- 2 color modes: `dark` (white text) and `light` (dark text)
- React state-driven hover interactions (no ref-based listeners)
- Image aspect ratio: **4:3** for resource cards, **3:2** for report cards
- Shared `CardBadge` sub-component for glassmorphism badge overlays
- Full WCAG AAA compliance across all mode/style combinations

**Variants:**
1. `full-featured` - Category + date + title + body + featured badge
2. `featured-focus` - Featured badge + title + body
3. `minimal` - Category + date + title
4. `category-featured` - Category + title + featured badge
5. `latest` - Title + body + latest badge
6. `clean` - Title + body
7. `standard` - Category + date + title + body (default)

**Badge Overlay (CardBadge — token-driven):**
```tsx
// Wrapper: glassmorphism container from --rc-badge-* tokens
// Badge: variant="minimal" size="xs" theme="neutral" mode="dark" (always dark)
// All styling via CSS custom properties — see RESOURCE_CARD_DOCUMENTATION.md
<CardBadge label="Featured" />
```

For complete documentation including all 70+ tokens, mode matrix, CardBadge prop rationale,
and aspect ratio standards, see:
-> **[RESOURCE_CARD_DOCUMENTATION.md](./RESOURCE_CARD_DOCUMENTATION.md)** (v3.0)

### 4. ResourcesSection Component (`ResourcesSection.tsx`)

Complete section wrapper for displaying ResourceCards in a responsive Masonry grid.

**Key Features:**
- Dual-mode backgrounds (6-layer dark gradient mesh / warm editorial light)
- Container integration (1000px max-width via `<Container>` component)
- Responsive Masonry grid: 1 col / 2 col@640px / 3 col@1024px
- Responsive gutters: 24px mobile -> 32px desktop (via `useResponsiveGutter` hook)
- Built-in `SubtleVariantSwitcher` for card style toggling
- Fully customizable: title, description, CTA, resources data, column config

**Usage:**
```tsx
// Dark mode (case study page)
<ResourcesSection mode="dark" cardStyle="bordered" enableVariantSwitcher />

// Light mode (blog listing)
<ResourcesSection
  mode="light"
  cardStyle="bordered"
  title="Latest Insights"
  sectionLabel="Blog"
  ctaLabel="View All Posts"
/>
```

### 5. Container Component (`Container.tsx`)

Single source of truth for all container max-widths and responsive gutters.

**Width Presets:**
- `content` - 1000px (`--container-content`) — body sections (default)
- `nav` - 1200px (`--container-nav`) — navbar, mega menu
- `narrow` - 900px (`--container-narrow`) — final CTA, endorsement

**Responsive Gutters:** `px-4 sm:px-6 md:px-8` (16px -> 24px -> 32px)

### 6. HeroSection Component

Four background variants with rich editorial compositions:

**Variants:**
- `light` - White background with warm accents
- `dark` - Black background with cool accents  
- `alt-white` - Off-white with different warm palette
- `alt-dark` - Dark with different cool palette

**Usage:**
```tsx
<HeroSection 
  variant="dark"
  title="Evaluating India's Transformer Bushing Market for IPO Readiness"
  subtitle="₹110 Cr."
/>
```

---

## 💅 Styling Architecture

### Tailwind CSS v4

Using **Tailwind v4** with custom theme tokens in `/src/styles/theme.css`.

**IMPORTANT:**  
❌ **Do NOT create** `tailwind.config.js` - we use Tailwind v4's CSS-first approach  
❌ **Avoid using** Tailwind font size classes (`text-2xl`) - use CSS variables  
❌ **Avoid using** Tailwind font weight classes (`font-bold`) - use design system weights  
✅ **Use** semantic color tokens from theme.css  
✅ **Use** CSS variables for typography (`var(--text-xl)`)  
✅ **Use** inline Tailwind for spacing, layout, and utilities  

### Font Imports

All font imports MUST be added to `/src/styles/fonts.css` only.

```css
/* Example font import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

### Custom Animations

Defined in `/src/styles/animations.css`:

- `fadeIn` - Fade in animation
- `slideUp` - Slide up animation
- `slideDown` - Slide down animation
- `scaleIn` - Scale in animation
- `shimmer` - Shimmer effect

---

## 📱 Responsive Behavior

### Breakpoints

```css
sm:  640px   /* Tablets */
md:  768px   /* Small desktops */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large */
```

### Mobile-First Approach

All components are built mobile-first with progressive enhancement:

```tsx
// Mobile default, then tablet+
<div className="text-sm md:text-base lg:text-lg">
  Content
</div>
```

### Responsive Typography

Typography scales automatically using CSS clamp:

```css
font-size: clamp(var(--text-sm), 2vw, var(--text-lg));
```

### Navigation Behavior

- **Mobile:** Hamburger menu with full-screen overlay
- **Desktop:** Horizontal navigation with mega menu

### Content Width

```css
max-width: 1000px;  /* Centered content */
margin: 0 auto;
padding: 0 24px;    /* Gutter spacing */
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm package manager

### Installation Steps

```bash
# 1. Clone repository
git clone [repository-url]
cd yash-case-study

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Start development server
npm run dev
# or
pnpm dev

# 4. Build for production
npm run build
# or
pnpm build

# 5. Preview production build
npm run preview
# or
pnpm preview
```

### Environment Variables

No environment variables required for static deployment.

---

## 🌐 Deployment Guidelines

### Build Output

```bash
npm run build
```

Generates optimized static files in `/dist` directory.

### Deployment Platforms

**Recommended:**
- Vercel (zero-config)
- Netlify (zero-config)
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Static Hosting

Upload contents of `/dist` folder to any static hosting provider.

### Performance Optimization

✅ Images optimized and lazy-loaded  
✅ Code splitting enabled  
✅ CSS minified and purged  
✅ Tree-shaking enabled  
✅ Gzip/Brotli compression recommended  

---

## 🌍 Browser Support

### Supported Browsers

✅ Chrome 90+ (Desktop & Mobile)  
✅ Firefox 88+ (Desktop & Mobile)  
✅ Safari 14+ (Desktop & Mobile)  
✅ Edge 90+ (Desktop)  
✅ Samsung Internet 14+  

### Required Features

- CSS Grid
- CSS Custom Properties (variables)
- ES6+ JavaScript
- Flexbox
- backdrop-filter (for glassmorphism)

### Polyfills

No polyfills required for target browsers.

---

## 📚 Key Technical Notes

### Badge System

For **complete badge documentation** including all variants, sizes, themes, and specialized components, see:
➡️ **[BADGES_DOCUMENTATION.md](./BADGES_DOCUMENTATION.md)** - Complete badge system reference

**Quick badge reference:**
- Main component: `/src/app/components/Badge.tsx`
- Specialized badges: `/src/app/components/badges/`
- 3 variants: minimal, rounded, pill
- 4 sizes: xs, sm, md, lg
- 6 themes: neutral, warm, brand, success, warning, error
- WCAG AAA compliant
- Pre-configured wrappers: SectionLabel, StepPill, ObjectivePill, InfoCardLabel

### ResourceCard Component

For **complete ResourceCard documentation** including all 7 variants and badge overlay system, see:
➡️ **[RESOURCE_CARD_DOCUMENTATION.md](./RESOURCE_CARD_DOCUMENTATION.md)** - Complete ResourceCard reference

**Quick ResourceCard reference:**
- Component: `/src/app/components/ResourceCard.tsx`
- Section wrapper: `/src/app/components/ResourcesSection.tsx`
- 7 content variants via declarative `VARIANT_CONFIG` record
- 2 card styles: `default` (transparent), `bordered` (frosted glass)
- 2 color modes: `dark` (white text), `light` (dark text)
- 70+ `--rc-*` CSS custom properties — zero Tailwind color classes
- `CardBadge` sub-component for glassmorphism badge overlays
- Image aspect ratio: **4:3** for resource cards, **3:2** for report cards
- Glassmorphism badge overlay with exact specifications
- Badge padding: `6px 12px`, font size: `10px`
- WCAG AAA compliant across all mode/style combinations

### Image Handling

**For Figma-imported images:**
```tsx
// Raster images use figma:asset scheme (NO path prefix)
import img from "figma:asset/abc123.png";

// SVGs use relative file paths
import svgPaths from "../imports/svg-xyz.ts";
```

**For new images:**
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="https://images.unsplash.com/..." 
  alt="Description"
/>
```

### Protected Files

❌ **DO NOT MODIFY:**
- `/src/app/components/figma/ImageWithFallback.tsx` (system component)
- `/pnpm-lock.yaml` (package lock file)

### Accessibility

✅ WCAG AAA compliance for color contrast  
✅ Semantic HTML structure  
✅ ARIA labels on interactive elements  
✅ Keyboard navigation support  
✅ Screen reader friendly  
✅ Focus visible indicators  

### Performance Targets

- **First Contentful Paint:** < 1.8s
- **Largest Contentful Paint:** < 2.5s  
- **Time to Interactive:** < 3.8s
- **Cumulative Layout Shift:** < 0.1

---

## 🐛 Troubleshooting

### Issue: Styles not applying

**Solution:** Ensure `theme.css` is imported in `index.css`:
```css
@import './theme.css';
```

### Issue: Images not loading

**Solution:** Verify correct import scheme:
- Figma assets: `figma:asset/filename.png` (no path)
- Local SVGs: Relative paths from component

### Issue: Fonts not rendering

**Solution:** Check `/src/styles/fonts.css` for proper imports

### Issue: Build errors

**Solution:** Clear cache and reinstall:
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## 📞 Support & Questions

For technical questions or clarifications about implementation:

1. Review this documentation thoroughly
2. Check component files for inline documentation
3. Refer to design system tokens in `theme.css`
4. Test in target browsers before deployment

---

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed successfully
- [ ] Development server runs without errors
- [ ] Production build completes successfully
- [ ] All pages render correctly
- [ ] Navigation works on mobile and desktop
- [ ] Modals open and close properly
- [ ] Images load correctly
- [ ] Fonts display properly
- [ ] Responsive behavior verified on multiple devices
- [ ] Accessibility tested with screen reader
- [ ] Performance metrics within targets
- [ ] Cross-browser testing completed

---

**Document Version:** 1.1  
**Last Updated:** February 28, 2026  
**Status:** ✅ Production Ready