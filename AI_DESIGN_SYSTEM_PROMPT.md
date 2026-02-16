# AI DESIGN SYSTEM PROMPT - Alternative Format

**Repository:** vsoffice001-cloud/Design-System-vs-26  
**Purpose:** Shorter alternative AI prompt for quick project setup

---

## COPY THIS PROMPT

```
USE DESIGN SYSTEM: vsoffice001-cloud/Design-System-vs-26

CRITICAL RULES:

TYPOGRAPHY:
• Body: var(--text-sm) 16px
• Section h2: var(--text-2xl) 39px  
• Hero h1: var(--text-3xl) 48.8px
• Navigation: var(--text-nav) 14px
• NEVER use Tailwind font classes

BUTTONS:
• Import from @/app/components/Button
• Default: size="md" (42px)
• Navbar: size="sm" (36px, 14px font)
• Shimmer: ALWAYS ACTIVE
• Arrow: ONLY for forms/urgency

COLORS:
• Red #b01f24: CTAs ONLY
• Black #000000: Hero sections
• White #ffffff: Standard sections
• Warm #f5f2f1: Alternating sections

LINKS:
• Button: Form submissions, primary actions
• CTALink: Text + arrow exploratory
• InlineLink: Paragraph links only

SPACING:
• Sections: py-16 md:py-24
• Use spacing scale: space-4, space-6, space-12

Build [YOUR REQUEST] following these rules exactly.
```

---

**See Also:** AI_CONTEXT_DESIGN_SYSTEM.md for full documentation
