# AnimatedArrow Component

> A simple, reusable 2-arrow replacement animation for 45-degree arrows

## Quick Start

```tsx
import { AnimatedArrow } from '@/app/components/AnimatedArrow';

<AnimatedArrow />
<AnimatedArrow size={20} color="#b01f24" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 20 | Icon size in pixels |
| color | string | "currentColor" | Icon color |
| strokeWidth | number | 2 | Icon stroke width |
| duration | number | 300 | Animation duration (ms) |
| className | string | "" | Additional CSS classes |

## Animation

- **Arrow 1:** Visible by default -> Exits top-right on hover
- **Arrow 2:** Hidden bottom-left -> Enters center on hover
- **Duration:** 300ms (customizable)
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)

**Production Ready** - Fully Typed - Browser Tested - Documented
