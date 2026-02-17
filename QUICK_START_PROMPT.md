# ⚡ QUICK START PROMPT - Copy & Paste This

**Use this shortened version when you need to quickly start a new Figma Make page**

---

## 📋 PASTE THIS INTO FIGMA MAKE

```
Follow our design system from vsoffice001-cloud/Design-System-vs-26:

TYPOGRAPHY (Major Third 1.25x):
• Labels: 12.8px (--text-xs)
• Body: 16px (--text-sm) ← 90% of text
• Section h2: 39px (--text-2xl)
• Hero h1: 48.8px (--text-3xl)
• TOC/Nav: 14px (--text-nav)

COLORS:
• Black #000000 - Hero, Resources sections
• White #ffffff - Default sections
• Warm #f5f2f1 - Challenges, Methodology
• Red #b01f24 - CTAs ONLY (sparingly)

BUTTONS:
• Default size: md (42px height, 16px font)
• Navbar size: sm (36px height, 14px font)
• Hero size: lg (48px) - big landing pages ONLY
• Shimmer: Always active (brand signature)
• Arrow: Only for urgent CTAs redirecting to forms

SECTIONS:
• Alternate: Black → White → Warm → White
• Padding: py-16 md:py-24
• Max width: max-w-6xl mx-auto
• Gap between cards: gap-6 (24px)

CARDS (4+ cards):
• Title: 20px (--text-base)
• Body: 14px (--text-compact)

CARDS (2-3 cards):
• Title: 25px (--text-lg)
• Body: 16px (--text-sm)

BADGES:
• Section labels: minimal + sm (11px, 23px height)
• Step pills: pill + sm + warm + bordered + shimmer
• Info labels: minimal + xs (9-10px, 18px height)
• Shimmer: Warm theme uses warm-tinted (subtle)

ACCESSIBILITY:
• IconOnly buttons need ariaLabel
• Focus: 2px black outline
• Min touch: 40px

Use existing components from /src/app/components/
Quality target: 9.5/10 (Stripe/Material Design level)
```

---

## 🎯 BUTTON QUICK COPY-PASTE

```tsx
// Standard CTA (most common)
<Button variant="brand">Get Started</Button>

// Hero CTA (big pages only)
<Button variant="brand" size="lg" showArrow>Transform Business</Button>

// Navbar (compact)
<Button variant="brand" size="sm">Sign Up</Button>

// Text + Arrow Link
<CTALink href="/learn">Explore More</CTALink>

// Inline paragraph link
<InlineLink href="/about">our approach</InlineLink>
```

---

## 📐 SECTION TEMPLATE

```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-xs uppercase tracking-[1.8px] text-black/40 mb-4">
      CATEGORY
    </p>
    <h2 className="text-2xl font-semibold mb-6">Section Title</h2>
    <p className="text-sm text-black/70 mb-8">Description</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Your content */}
    </div>
  </div>
</section>
```

---

**Full documentation:** See AI_DESIGN_SYSTEM_PROMPT.md  
**Live examples:** Design System Dashboard  
**Updated:** 2026-02-17