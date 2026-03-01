# YASH Case Study - Technical Handover Documentation

> **⚠️ STALENESS WARNING (March 1, 2026)**
>
> This document was written February 17, 2026 and has **not been updated** since.
> Several sections contain outdated or incorrect information:
>
> | Section | Issue | Current Source of Truth |
> |---------|-------|------------------------|
> | Color System | Lists `--warm-rust`, `--cool-navy` etc. — these don't exist | `src/styles/theme.css` (92-5-3 palette) |
> | Typography Scale | Shows `--text-base: 1rem (16px)` — actually `1.25rem (20px)` | `theme.css` Typography Scale section |
> | Badge Props | Shows 5 wrong variants (`solid`, `outlined`, `filled`, `frosted`) | `Badge.tsx` — actual: `minimal`, `rounded`, `pill` |
> | Button Props | Missing shimmer, arrow, variant details | `Button.tsx` + `BUTTON_SYSTEM.md` |
> | File Structure | Lists non-existent files (`animations.css`, `hero.css`, `inline-link.css`) | `PROJECT_STRUCTURE.md` or `GITHUB_REPO_MANIFEST.md` |
> | Container | Shows 3 width presets — actually 5 | `Container.tsx` |
>
> **For accurate current information, read these instead:**
> 1. `DESIGN_SYSTEM_UPDATES.md` — Latest patches (v3.3.2)
> 2. `COMPONENT_GUIDELINES_4WH.md` — 4W+H for every component
> 3. `design-system-checklist.md` — File map
> 4. `QUICK_START_PROMPT.md` — Copy-paste AI prompt
>
> This file is kept for historical reference only. A full rewrite is planned.

---

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

> ⚠️ **OUTDATED** — See `PROJECT_STRUCTURE.md` or `GITHUB_REPO_MANIFEST.md` for current file listing.

---

## 🎨 Design System

> ⚠️ **OUTDATED** — Color variables, typography scale, and spacing values below are incorrect.
> See `src/styles/theme.css` for current tokens.

### Color System

**Brand Colors:**
```css
--brand-red: #b01f24;           /* Primary brand identity */
```

### Typography Scale (Major Third - 1.25 Ratio)

> ⚠️ Values below are from an older version. See `theme.css` for current scale.

### Border Radius System

```css
--radius-image: 2.5px;   /* For images */
--radius-button: 5px;    /* For buttons and small cards */
--radius-card: 10px;     /* For big cards */
```

---

## 🧩 Component Library

> ⚠️ **OUTDATED** — Component APIs below do not match current implementations.
> See `COMPONENT_GUIDELINES_4WH.md` and `BADGES_DOCUMENTATION.md` for current APIs.

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

All components are built mobile-first with progressive enhancement.

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm package manager

### Installation Steps

```bash
git clone https://github.com/vsoffice001-cloud/Design-System-vs-26.git
cd Design-System-vs-26
pnpm install
pnpm dev
```

---

## 🌐 Deployment Guidelines

### Build Output

```bash
pnpm build
```

Generates optimized static files in `/dist` directory.

---

## 🌍 Browser Support

✅ Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  
✅ Requires: CSS Grid, CSS Custom Properties, ES6+, backdrop-filter

---

## ✅ Accessibility

✅ WCAG AAA compliance for color contrast  
✅ Semantic HTML structure  
✅ ARIA labels on interactive elements  
✅ Keyboard navigation support  

---

**Document Version:** 1.1 (with v3.3.2 staleness warnings)  
**Last Updated:** March 1, 2026  
**Status:** Historical reference — see current docs listed in warning above