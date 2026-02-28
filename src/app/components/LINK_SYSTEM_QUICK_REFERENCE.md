# Link System Quick Reference

## Three Components, Three Use Cases

### 1. Button - Full Interactive Component
```tsx
<Button variant="brand" showArrow onClick={handleSubmit}>
  Get Started Now
</Button>
```
**When:** Primary actions, forms, modals

### 2. CTALink - Unified Hover Text+Arrow
```tsx
<CTALink href="/contact" variant="brand" size="lg">
  Get Started Today
</CTALink>
```
**When:** Urgency CTAs, redirects, lightweight call-to-actions

### 3. InlineLink - Paragraph Interlinking
```tsx
<p>
  Learn about our <InlineLink href="/methodology">design methodology</InlineLink> here.
</p>
```
**When:** Cross-references, paragraph links, documentation

## Visual Differences

| Component | Arrow? | Urgency |
|-----------|--------|---------|
| Button Brand | Optional | Critical |
| CTALink Brand | Always | High |
| InlineLink | Never | Low |

## Import Paths
```tsx
import { Button, CTALink, InlineLink } from '@/app/components';
import { useShimmer } from '@/app/hooks';
```
