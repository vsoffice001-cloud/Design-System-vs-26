# Navbar Responsive Design - Two-State System

## State 1: At Hero Section (isHeroVisible === true)
- Secondary bar (dark) visible with Latest Reports, Procurement, Company, Login
- Main nav (white) below with full navigation

## State 2: After Scrolling Past Hero (isHeroVisible === false)
- Secondary bar hidden
- Login moves from secondary bar to main nav
- More space for content

## Dynamic Behavior

```tsx
{isHeroVisible && <SecondaryBar />}
{!isHeroVisible && <LoginInMainNav />}
```

## Key Features

1. **Conditional Secondary Bar** - Only renders at hero, DOM removed when scrolling
2. **Adaptive Login Placement** - White text in secondary bar, black text in main nav
3. **Smart Space Management** - Resources adapts to available space
4. **Search Bar Responsive Width** - Shows earlier after scrolling

## Performance Optimizations

- Conditional rendering (no display:none overhead)
- Scroll direction hook for hide/show
- CSS transitions only (GPU-accelerated, 60fps)

## Two Figma States Matched:
- State 1 (Container-6015-6818.tsx) = At Hero
- State 2 (WhtMini.tsx) = After Scrolling

**Production ready!**
