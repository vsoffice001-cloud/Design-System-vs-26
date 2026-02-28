# ARROW ANIMATION - COMPLETE TECHNICAL EXPLANATION

**Source:** External documentation for CSS-based arrow animation on buttons
**Purpose:** Understanding the mechanics behind the diagonal arrow animation for urgency CTAs

## Conceptual Overview

**Default State:** Button shows text followed by a single arrow icon. Second arrow is hidden.

**On Hover:**
- First arrow animates diagonally upward-right while fading out
- Second arrow fades in and slides into exact position of original arrow

**On Hover Release:** Both arrows reverse to original positions.

## Why Two Arrows?

Using duplicates allows independent control over each element's movement and opacity, avoiding glitches in single-element animations.

## Key Techniques

| Property | Purpose |
|----------|---------|
| Positioning | Wrapper is relative, arrows are absolute to overlap perfectly |
| Transform | Combines translate for movement and rotate for angle |
| Opacity | Fades elements in/out |
| Transition | Applies to transform and opacity for smooth timing |

## Our Implementation

- Two identical `<ArrowUpRight>` icons from Lucide
- 4px movement (more subtle than documented 8px)
- No rotation (icon already diagonal)
- 300ms duration with ease-out
- Shimmer compatible (different layers, no conflicts)

## KEY TAKEAWAYS

1. Two-Arrow Technique required for smooth diagonal movement
2. Transform: translate(8px, -8px) + rotate(45deg) creates diagonal motion
3. Shimmer Compatible: Can layer shimmer gradient animation
4. 300ms Duration: Our brand standard
5. Accessibility: Must include aria-labels and keyboard focus states
