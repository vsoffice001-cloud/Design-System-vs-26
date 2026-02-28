# Link & CTA Component System

## Component Overview

### 1. **Button** (`/src/app/components/Button.tsx`)
Full-featured button component with shimmer effects and optional arrow animation.

### 2. **CTALink** (`/src/app/components/CTALink.tsx`)
Lightweight text+arrow link with unified hover behavior for urgency CTAs.

### 3. **InlineLink** (`/src/app/components/InlineLink.tsx`)
Subtle paragraph link with red underline for content interlinking.

## Quick Start

```tsx
import { Button, CTALink, InlineLink } from '@/app/components';

<Button variant="brand" showArrow>Get Started</Button>
<CTALink href="/contact" variant="brand">Contact Us</CTALink>
<p>Read our <InlineLink href="/docs">documentation</InlineLink></p>
```

## Decision Tree

- Primary action (form, modal)? -> **Button**
- High-urgency CTA (redirect)? -> **CTALink** or Button with showArrow
- Paragraph cross-reference? -> **InlineLink**

**Status:** Production Ready
**Maintainer:** VS Design System Team
