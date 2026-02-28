# Navbar Responsive Design System

## Responsive Breakpoints

### Mobile (< 640px)
- Logo scaled to 18px, Main Nav hidden (hamburger), CTA in mobile menu

### Small Tablet (640px - 768px)
- Full logo, Hamburger menu, CTA visible in header

### Tablet (768px - 1024px)
- Hamburger menu, CTA visible "Schedule a Demo"

### Desktop (1024px - 1280px)
- Full horizontal nav: Services, Industries, Resources
- Search icon, Schedule Demo

### Large Desktop (1280px+)
- Secondary bar visible, Full search bar, All features active

## Component Visibility Matrix

| Component | Mobile | Tablet | Desktop | XL |
|-----------|--------|--------|---------|----|
| Secondary Bar | Hidden | Hidden | Hidden | Visible |
| Services Nav | Menu | Menu | Visible | Visible |
| Search Bar | Hidden | Hidden | Hidden | Visible |
| Schedule Demo | Menu | Visible | Visible | Visible |
| Hamburger | Visible | Visible | Hidden | Hidden |

## Button System Integration

- Desktop CTA: `<Button variant="brand" size="sm">`
- Mobile CTA: `<Button variant="brand" size="md" fullWidth>`

**Component:** `/src/app/components/Navbar.tsx`
**Dependencies:** Button, lucide-react icons
