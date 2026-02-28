# Link & CTA System Documentation

## Overview
Comprehensive link and CTA component system following VS Design System principles with three distinct components.

## Component Architecture

### 1. Button Component (`Button.tsx`)
- JSDoc Documentation, Extracted Logic (useShimmer hook)
- Prop-Driven API, Token-Based Styling, Accessibility
- Signature: Shimmer (always active) + Arrow (urgency CTAs only) + Ripple

### 2. CTALink Component (`CTALink.tsx`)
- Unified hover zone for text + arrow
- Two variants: default (black) and brand (Ken Bold Red)
- Three sizes: sm, md, lg

### 3. InlineLink Component (`InlineLink.tsx`)
- Always-visible red underline (#b01f24)
- Hover: text black->red, background transparent->warm-100
- No arrow animation

## Decision Matrix

| Use Case | Component |
|----------|-----------|
| Primary form submission | Button brand + showArrow |
| Download action | Button secondary + icon |
| Cancel/Back | Button ghost |
| Hero CTA | CTALink brand |
| Section link | CTALink default |
| Paragraph cross-reference | InlineLink |

## Shared Infrastructure

### useShimmer Hook (`/src/app/hooks/useShimmer.ts`)
Reusable hover state management for shimmer and hover effects.

```tsx
const { isHovering, handleMouseEnter, handleMouseLeave } = useShimmer(700);
```

## Visual Hierarchy (High -> Low)

1. Button Brand + Arrow
2. CTALink Brand
3. Button Primary
4. CTALink Default
5. Button Secondary
6. InlineLink
7. Button Ghost

**Status:** Production Ready
