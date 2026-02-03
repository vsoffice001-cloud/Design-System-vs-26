# Design System v26

> **Professional Design System Dashboard** — A comprehensive design system built with React, TypeScript, and Tailwind CSS v4, featuring elite design patterns from Stripe, Shopify, and Material Design.

## 🎯 Overview

This design system showcases a minimalist editorial aesthetic with:
- **Black/white alternating sections** for visual rhythm
- **Major Third typography scale** (1.25 ratio) for harmonious hierarchy
- **Ken Bold Red (#b01f24)** as the primary brand CTA color
- **Sophisticated interaction design** with shimmer effects and animated arrows

## 📚 Documentation Structure

The design system is organized into 7 main sections:

1. **Overview** — Introduction and design principles
2. **Foundations** — Typography, colors, spacing, grid, elevation
3. **Components** — Reusable UI components with live examples
4. **Patterns** — Common UI patterns and best practices
5. **Motion** — Animation guidelines and micro-interactions
6. **Guidelines** — Design and development standards
7. **Resources** — Assets, downloads, and additional materials

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vsoffice001-cloud/Design-System-vs-26.git

# Navigate to project directory
cd Design-System-vs-26

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🛠️ Tech Stack

- **React 18.3** — UI library
- **TypeScript** — Type safety
- **Vite 6.3** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS framework
- **Radix UI** — Accessible component primitives
- **Lucide React** — Icon library
- **Motion** — Animation library (formerly Framer Motion)
- **React Router** — Client-side routing

## 📁 Project Structure

```
Design-System-vs-26/
├── src/
│   ├── app/
│   │   ├── components/       # React components
│   │   │   ├── ui/          # Radix UI components
│   │   │   ├── categories/  # Design system categories
│   │   │   └── figma/       # Figma import utilities
│   │   └── hooks/           # Custom React hooks
│   ├── design-system/       # Design tokens and utilities
│   ├── imports/             # Figma imports and SVG assets
│   └── styles/              # Global styles and theme
│       ├── fonts.css        # Font imports
│       ├── tailwind.css     # Tailwind configuration
│       └── theme.css        # CSS custom properties
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## 🎨 Design Tokens

### Typography Scale (Major Third 1.25 Ratio)

```css
--text-xs: 0.8rem;      /* 12.8px */
--text-sm: 1rem;        /* 16px */
--text-base: 1.25rem;   /* 20px */
--text-lg: 1.563rem;    /* 25px */
--text-xl: 1.953rem;    /* 31.25px */
--text-2xl: 2.441rem;   /* 39px */
--text-3xl: 3.052rem;   /* 48.8px */
```

### Color System

**Brand Color**
- Ken Bold Red: `#b01f24` (Primary CTAs only)

**Foundation**
- Pure Black: `#000000`
- Pure White: `#ffffff`

**Accent Colors**
- Warm: `#f5f2f1` (Section backgrounds)
- Purple: `#806ce0` (Premium features)
- Periwinkle: `#c3c6f9` (Trust indicators)
- Perano: `#dfeafa` (Data sections)

## ✨ Core Features

### Button System
- **4 variants**: Primary, Secondary, Ghost, Brand
- **4 sizes**: Small (40px), Medium (48px), Large (56px), XL (64px)
- **Always-active shimmer** effect as brand identity
- **Animated arrow** for urgency CTAs
- **Ripple effect** on click
- **Background-aware** styling (adapts to light/dark backgrounds)

### Design System Dashboard
- **Stripe-style navigation** with 7 main tabs
- **4W+H documentation framework** (What, Why, When, Where, How)
- **Live component examples** with code snippets
- **Responsive layout** with mobile-first approach

## 🎯 Brand Identity Signatures

1. **Shimmer Effect** — Always active on ALL buttons
2. **Arrow Animation** — Only on buttons redirecting to forms/pages (urgency)

## 📄 License

Proprietary - Design system for internal use

## 👥 Authors

**vsoffice001-cloud** — Design System Team

---

**Built with ❤️ using elite design system patterns**