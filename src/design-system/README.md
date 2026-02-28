# Design System Components & Utilities

This folder contains reusable design system components, tokens, and utilities that can be imported anywhere in the application.

---

## What's Inside

### **tokens.ts**
All design tokens as TypeScript constants for type-safe usage.

### **ColorSwatch.tsx**
Components for displaying color swatches in documentation and showcases.

### **TypeScale.tsx**
Components for visualizing the typography scale.

### **SpacingScale.tsx**
Components for visualizing spacing values.

### **ComponentCard.tsx**
Wrapper components for showcasing design system elements.

### **index.ts**
Barrel export - import everything from here.

---

## Quick Start

```tsx
import { colors, typography, spacing } from '@/design-system';
import { ColorSwatch, TypeScale, SpacingScale } from '@/design-system';
import { ComponentCard, ComponentGrid } from '@/design-system';
```

---

**Version:** 1.0.0
**Last Updated:** January 21, 2026
