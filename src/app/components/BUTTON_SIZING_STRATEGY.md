# Button Sizing Strategy

## Default Size: `md` (Medium) - BASE SIZE

**When to use:**
- Report page hero sections
- Standard CTAs throughout the site
- Form submissions, Modal actions, Card CTAs
- Most use cases (90% of buttons)

## Size Hierarchy

| Size | Height | Use Case |
|------|--------|----------|
| sm | 36px | Secondary actions, table rows, compact UI |
| md | 42px | DEFAULT - Standard CTAs, report pages |
| lg | 48px | Homepage hero, major campaign pages |
| xl | 56px | Extreme hero sections, rare maximum impact |

## Decision Matrix

| Page Type | Hero Button Size |
|-----------|------------------|
| Report Pages | `md` (default) |
| Homepage | `lg` |
| Case Study | `md` |
| Event/Campaign | `xl` |
| Dashboard/App | `sm` or `md` |

**Golden Rule:** `md` is the BASE size. Use it for everything except big homepage heroes (use `lg`) or compact spaces (use `sm`).
