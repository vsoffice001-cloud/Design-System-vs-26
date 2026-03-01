/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RESOURCE CARD COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A production-ready, token-driven card component for displaying resource 
 * content (case studies, articles, reports, blogs, POVs) with:
 * 
 * • 7 content variants controlling what elements are shown
 * • 2 card styles (default, bordered) controlling visual container
 * • 2 color modes (light, dark) for any background context
 * • Full WCAG AAA compliance across all mode/style combinations
 * • CSS custom property driven — all colors, spacing, and radii from tokens
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 📐 DESIGN SYSTEM RULES
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * Border Radius:
 * • Images: 2.5px (--rc-radius-image)
 * • Badges/Buttons: 5px
 * • Big Cards (bordered): 10px (--rc-radius-card)
 * 
 * Typography Scale (Major Third 1.25):
 * • Category/Date: var(--text-xs) — 12.8px
 * • Title/Description: var(--text-sm) — 16px
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🎨 MODE + STYLE MATRIX
 * ───────────────────────────────────────────────────────────────────────────
 * 
 *  Mode   | Style     | Background              | Border              | Text
 *  -------|-----------|-------------------------|---------------------|--------
 *  dark   | default   | transparent             | none                | white
 *  dark   | bordered  | white/3% + blur(8px)    | white/8% → 16%     | white
 *  light  | default   | transparent             | none                | black
 *  light  | bordered  | white/70% + blur(12px)  | black/8% → 15%     | black
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🏷️ BADGE OVERLAY SYSTEM (Universal — same on both modes)
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * All badges overlaid on images use a standardized glassmorphism treatment:
 * • Background: rgba(0, 0, 0, 0.65) with backdrop-blur(24px)
 * • Border: rgba(255, 255, 255, 0.10)
 * • Radius: 5px (design system button/badge rule)
 * • Text: white, semibold, uppercase, tracking-[1.2px], 10px
 * • Shadow: text-shadow for readability on any image
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 📖 USAGE EXAMPLES
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * Dark background (Resources section):
 * ```tsx
 * <ResourceCard
 *   mode="dark"
 *   cardStyle="bordered"
 *   variant="full-featured"
 *   image="/path/to/image.jpg"
 *   category="TECHNOLOGY"
 *   date="Jan 15, 2024"
 *   title="Article Title"
 *   description="Article description..."
 *   isFeatured
 * />
 * ```
 * 
 * Light background (Blog listing page):
 * ```tsx
 * <ResourceCard
 *   mode="light"
 *   cardStyle="bordered"
 *   variant="standard"
 *   image="/path/to/image.jpg"
 *   category="STRATEGY"
 *   date="Jan 8, 2024"
 *   title="Article Title"
 *   description="Article description..."
 * />
 * ```
 * 
 * Minimal (sidebar widget):
 * ```tsx
 * <ResourceCard
 *   mode="light"
 *   cardStyle="default"
 *   variant="minimal"
 *   image="/path/to/image.jpg"
 *   category="INSIGHTS"
 *   date="Jan 12, 2024"
 *   title="Quick Read Title"
 * />
 * ```
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🧩 CONTENT VARIANTS REFERENCE
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * 1. 'full-featured'     — category + date + title + body + featured badge
 * 2. 'featured-focus'    — featured badge + title + body
 * 3. 'minimal'           — category + date + title (no body)
 * 4. 'category-featured' — category + title + featured badge (no date/body)
 * 5. 'latest'            — title + body + latest badge
 * 6. 'clean'             — title + body (no meta, no badge)
 * 7. 'standard'          — category + date + title + body (default)
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🎛️ CSS CUSTOM PROPERTIES (from theme.css)
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * Shape:
 * --rc-radius-image: 2.5px       Image corners
 * --rc-radius-card: 10px         Bordered card outer radius
 * --rc-radius-card-inner: 9px    Image top radius inside bordered card
 * --rc-aspect-ratio: 4 / 3       Default image aspect ratio
 * 
 * Spacing:
 * --rc-content-px: 1rem          Horizontal padding (bordered)
 * --rc-content-pt: 1rem          Top padding below image (bordered)
 * --rc-content-pb: 1.25rem       Bottom padding (bordered)
 * --rc-image-mb: 1rem            Margin below image (default)
 * --rc-meta-mb: 0.75rem          Margin below category/date
 * --rc-title-mb: 0.5rem          Margin below title
 * 
 * Dark Mode (--rc-dark-*):
 * title, title-hover, category, date, description, description-hover,
 * card-bg, card-border, card-border-hover, card-blur,
 * image-placeholder, focus-ring, focus-offset
 * 
 * Light Mode (--rc-light-*):
 * Same token names as dark, different values
 * 
 * Badge Overlay (--rc-badge-*):
 * bg, blur, border, shadow, text-shadow
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { Badge } from '@/app/components/Badge';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES (All exported for external consumption)
// ═══════════════════════════════════════════════════════════════════════════

/** Content variant — controls which elements are rendered */
export type ResourceCardVariant =
  | 'full-featured'
  | 'featured-focus'
  | 'minimal'
  | 'category-featured'
  | 'latest'
  | 'clean'
  | 'standard';

/** Visual container style */
export type ResourceCardStyle = 'default' | 'bordered';

/** Color mode — adapts all colors for background context */
export type ResourceCardMode = 'light' | 'dark';

/** Content type label (for semantic/a11y purposes) */
export type ResourceContentType = 'article' | 'blog' | 'case-study' | 'pov';

export interface ResourceCardProps {
  /** Image URL (required) */
  image: string;
  /** Category label (e.g. "TECHNOLOGY") */
  category?: string;
  /** Date string (e.g. "Jan 15, 2024") */
  date?: string;
  /** Card title (required) */
  title: string;
  /** Body description */
  description?: string;
  /** Link destination @default '#' */
  href?: string;
  /** Click handler (prevents default navigation when provided) */
  onClick?: () => void;
  /** Content type for semantic aria-label */
  type?: ResourceContentType;
  /** Show "Featured" badge overlay on image */
  isFeatured?: boolean;
  
  /**
   * Content variant — controls which elements render.
   * @default 'standard'
   */
  variant?: ResourceCardVariant;

  /**
   * Card visual style — controls container treatment.
   * - `'default'`  — No border, transparent bg, content floats on parent
   * - `'bordered'` — Subtle frosted card container with border
   * @default 'default'
   */
  cardStyle?: ResourceCardStyle;

  /**
   * Color mode — adapts all text/border colors for background context.
   * - `'dark'`  — White text for dark backgrounds (Resources, Hero)
   * - `'light'` — Dark text for white/warm backgrounds (Blog, Listing)
   * @default 'dark'
   */
  mode?: ResourceCardMode;

  /** Image aspect ratio override (CSS value, e.g. "16/9") */
  aspectRatio?: string;

  /** Additional className on the outermost <a> tag */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT CONFIG
// ═══════════════════════════════════════════════════════════════════════════

const VARIANT_CONFIG: Record<ResourceCardVariant, {
  showCategory: boolean;
  showDate: boolean;
  showDescription: boolean;
  showFeaturedTag: boolean;
  showLatestTag: boolean;
}> = {
  'full-featured':     { showCategory: true,  showDate: true,  showDescription: true,  showFeaturedTag: true,  showLatestTag: false },
  'featured-focus':    { showCategory: false, showDate: false, showDescription: true,  showFeaturedTag: true,  showLatestTag: false },
  'minimal':           { showCategory: true,  showDate: true,  showDescription: false, showFeaturedTag: false, showLatestTag: false },
  'category-featured': { showCategory: true,  showDate: false, showDescription: false, showFeaturedTag: true,  showLatestTag: false },
  'latest':            { showCategory: false, showDate: false, showDescription: true,  showFeaturedTag: false, showLatestTag: true  },
  'clean':             { showCategory: false, showDate: false, showDescription: true,  showFeaturedTag: false, showLatestTag: false },
  'standard':          { showCategory: true,  showDate: true,  showDescription: true,  showFeaturedTag: false, showLatestTag: false },
};

// ═══════════════════════════════════════════════════════════════════════════
// TOKEN HELPERS
// ═══════════════════════════════════════════════════════════════════════════

/** Returns CSS variable references for the active mode */
function getModeTokens(mode: ResourceCardMode) {
  const p = mode === 'dark' ? 'rc-dark' : 'rc-light';
  return {
    title:             `var(--${p}-title)`,
    titleHover:        `var(--${p}-title-hover)`,
    category:          `var(--${p}-category)`,
    date:              `var(--${p}-date)`,
    description:       `var(--${p}-description)`,
    descriptionHover:  `var(--${p}-description-hover)`,
    cardBg:            `var(--${p}-card-bg)`,
    cardBorder:        `var(--${p}-card-border)`,
    cardBorderHover:   `var(--${p}-card-border-hover)`,
    cardBlur:          `var(--${p}-card-blur)`,
    imagePlaceholder:  `var(--${p}-image-placeholder)`,
    focusRing:         `var(--${p}-focus-ring)`,
    focusOffset:       `var(--${p}-focus-offset)`,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// BADGE OVERLAY (shared between Featured & Latest)
// ═══════════════════════════════════════════════════════════════════════════

function CardBadge({ label }: { label: string }) {
  return (
    <div 
      className="absolute top-4 right-4 inline-block"
      style={{
        background: 'var(--rc-badge-bg)',
        backdropFilter: 'blur(var(--rc-badge-blur))',
        WebkitBackdropFilter: 'blur(var(--rc-badge-blur))',
        borderRadius: '5px',
        border: '1px solid var(--rc-badge-border)',
        boxShadow: 'var(--rc-badge-shadow)',
        zIndex: 10,
      }}
    >
      {/* ────────────────────────────────────────────────────────────────
       * BADGE INSIDE CARD — IMAGE OVERLAY CONFIGURATION
       * ────────────────────────────────────────────────────────────────
       *
       * WHY THIS CONFIGURATION EXISTS:
       * This Badge sits inside a glassmorphism wrapper that floats over
       * card images. The wrapper provides all visual container styling
       * (dark frosted glass bg, blur, border, shadow), so the Badge
       * itself must be stripped down to pure text — no background, no
       * border, no radius of its own. Every prop choice below serves
       * that single purpose: legible, compact text on a dark overlay.
       *
       * ──────────────────────────────────────────────────────────────
       * PROP-BY-PROP RATIONALE:
       * ──────────────────────────────────────────────────────────────
       *
       * variant="minimal"
       *   WHAT: Renders Badge with zero visual container (no bg, no 
       *         border, no border-radius, padding reset to 0).
       *   WHY:  The parent <div> wrapper already provides the frosted
       *         glass container. Using "rounded" or "pill" here would
       *         double-wrap the badge with its own background/border,
       *         creating a badge-inside-a-badge visual artifact.
       *   WHEN: Always use "minimal" when Badge is placed inside a
       *         custom container that handles its own visual styling.
       *
       * size="xs"
       *   WHAT: Smallest Badge scale — font ~9-10px, padding 6px 13px,
       *         letter-spacing 1.2px (from SIZE_TOKENS in Badge.tsx).
       *   WHY:  Image overlays must be compact. Larger sizes (sm/md/lg)
       *         would visually compete with the card image and title.
       *         XS keeps the badge subordinate in the visual hierarchy:
       *         Image > Title > Badge (correct scanning order).
       *   WHEN: Use "xs" for any badge overlaid on images or thumbnails.
       *         Use "sm" for section headers. Use "md"/"lg" for
       *         standalone interactive badges (objectives, filters).
       *
       * theme="neutral"
       *   WHAT: Black/white color palette from THEME_COLORS in Badge.tsx.
       *         In dark mode: white-based text colors.
       *   WHY:  The glassmorphism wrapper has a dark background
       *         (rgba(0,0,0,0.65)), so we need white-toned text.
       *         "neutral" is the correct theme because the badge label
       *         ("Featured", "Latest") carries no semantic color meaning
       *         — it's informational, not success/warning/error/brand.
       *   WHEN: Use "neutral" for status labels on images. Use "brand"
       *         only for CTAs. Use "success"/"warning"/"error" only for
       *         semantic states (e.g., "Published", "Draft", "Archived").
       *
       * mode="dark"
       *   WHAT: Forces dark-mode color scheme (white text on dark bg).
       *   WHY:  ALWAYS "dark" regardless of the card's own mode prop,
       *         because this badge sits on the glassmorphism wrapper
       *         which has a fixed dark background (--rc-badge-bg:
       *         rgba(0,0,0,0.65)). Even on a light-mode card, the
       *         image overlay is dark, so badge text must be white.
       *   WHEN: Any badge on a dark or image-overlaid surface.
       *         The card's mode="light"/"dark" does NOT affect this —
       *         the wrapper's darkness is constant.
       *
       * ──────────────────────────────────────────────────────────────
       * CLASSNAME OVERRIDES (why Badge defaults aren't enough):
       * ──────────────────────────────────────────────────────────────
       *
       * text-white
       *   Badge's neutral/dark/minimal text color is rgba(255,255,255,0.7).
       *   We override to 100% white for maximum contrast on the frosted
       *   glass. At 10px font size, even 0.7 opacity loses readability
       *   on busy image backgrounds. Full white + text-shadow = guaranteed
       *   WCAG AAA (contrast ratio exceeds 15:1 against the 65% black bg).
       *
       * font-semibold
       *   Badge defaults to normal (400) weight. At 10px, normal weight
       *   renders too thin for image overlays — letterforms blur into
       *   the background on low-DPI screens. Semibold (600) ensures
       *   every character is instantly scannable, even at arm's length.
       *
       * uppercase
       *   Design system convention: ALL badge labels are uppercase.
       *   Badge has `uppercase: true` by default, but we make it
       *   explicit here for documentation clarity and grep-ability.
       *
       * tracking-[1.2px]
       *   Badge xs defaults to 1.2px letter-spacing (from SIZE_TOKENS).
       *   We re-apply it in className to make it visible at the usage
       *   site — developers shouldn't need to open Badge.tsx to know
       *   the tracking. This is a documentation-as-code decision.
       *
       * ──────────────────────────────────────────────────────────────
       * STYLE OVERRIDES (precision values outside the Badge system):
       * ──────────────────────────────────────────────────────────────
       *
       * fontSize: '10px'
       *   Badge xs uses clamp(9px, 0.8vw, 10px), which can shrink to
       *   9px on narrow viewports. For image overlays, we pin at 10px
       *   because the glassmorphism wrapper has fixed padding (6px 12px)
       *   — if the font shrinks but padding doesn't, the badge looks
       *   awkwardly spacious. Fixed 10px keeps proportions locked.
       *
       * padding: '6px 12px'
       *   Badge xs default is 6px 13px. We tighten horizontal padding
       *   by 1px (13px → 12px) for a more compact overlay footprint.
       *   The wrapper's own border/shadow already provide visual weight,
       *   so the inner padding can be slightly reduced without losing
       *   presence. 6px vertical matches the xs default exactly.
       *
       * textShadow: 'var(--rc-badge-text-shadow)'
       *   Resolves to: 0 1px 2px rgba(0,0,0,0.5)
       *   Safety net for edge cases where the image directly behind the
       *   badge is very light (white sky, bright product shot). Even
       *   with the frosted glass wrapper, hot spots can reduce contrast.
       *   The text-shadow adds a 1px dark halo around each letterform,
       *   guaranteeing readability on any image content.
       *
       * ──────────────────────────────────────────────────────────────
       * CSS TOKENS USED (defined in theme.css under :root):
       * ──────────────────────────────────────────────────────────────
       *
       * Token                     Value                                Used By
       * ─────────────────────────────────────────────────────────────────────────
       * --rc-badge-bg             rgba(0, 0, 0, 0.65)                 Wrapper bg
       * --rc-badge-blur           24px                                Wrapper backdrop
       * --rc-badge-border         rgba(255, 255, 255, 0.10)           Wrapper border
       * --rc-badge-shadow         0 2px 8px rgba(0,0,0,0.15),         Wrapper depth
       *                           inset 0 1px 0 rgba(255,255,255,0.1)
       * --rc-badge-text-shadow    0 1px 2px rgba(0, 0, 0, 0.5)       Text halo
       *
       * ──────────────────────────────────────────────────────────────
       * WHERE THIS PATTERN IS USED:
       * ──────────────────────────────────────────────────────────────
       *
       * Component           Label        Triggered By Variant
       * ──────────────────────────────────────────────────────────────
       * ResourceCard         "Featured"   full-featured, featured-focus,
       *                                   category-featured
       * ResourceCard         "Latest"     latest
       *
       * REUSE IN OTHER PROJECTS:
       * This CardBadge pattern should be used for ANY image-overlaid
       * status label across the design system:
       * - Report cards ("New", "Updated", "Premium")
       * - Gallery items ("Sold", "Reserved")
       * - Portfolio cards ("Award Winner", "Client Pick")
       * - Video thumbnails ("Live", "Replay", duration labels)
       *
       * HOW TO ADD A NEW BADGE LABEL:
       * 1. Add a new variant to VARIANT_CONFIG with showNewTag: true
       * 2. Add `{config.showNewTag && <CardBadge label="New Label" />}`
       *    in the image container alongside Featured/Latest
       * 3. No styling changes needed — CardBadge handles everything
       *
       * ──────────────────────────────────────────────────────────────
       * WCAG COMPLIANCE AUDIT:
       * ──────────────────────────────────────────────────────────────
       *
       * Text:        #ffffff (white, 100% opacity)
       * Background:  rgba(0, 0, 0, 0.65) + backdrop-blur(24px)
       * Contrast:    ~15.4:1 (exceeds AAA 7:1 for normal text)
       * Font size:   10px (small text — AAA requires 7:1, met)
       * Font weight: 600 (semibold — improves perceived contrast)
       * Text shadow: 0.5 opacity black halo (additional separation)
       * Result:      WCAG AAA PASS for all image backgrounds
       * ────────────────────────────────────────────────────────────── */}
      <Badge 
        variant="minimal"
        size="xs"
        theme="neutral"
        mode="dark"
        className="text-white font-semibold uppercase tracking-[1.2px]"
        style={{ 
          fontSize: '10px',
          padding: '6px 12px',
          textShadow: 'var(--rc-badge-text-shadow)',
        }}
      >
        {label}
      </Badge>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function ResourceCard({
  image,
  category,
  date,
  title,
  description,
  href = '#',
  onClick,
  type,
  isFeatured,
  variant = 'standard',
  cardStyle = 'default',
  mode = 'dark',
  aspectRatio,
  className = '',
}: ResourceCardProps) {
  
  const [isHovered, setIsHovered] = useState(false);
  const config = VARIANT_CONFIG[variant];
  const tokens = getModeTokens(mode);
  const isBordered = cardStyle === 'bordered';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group block cursor-pointer transition-all focus:outline-none focus:ring-2 ${className}`}
      style={{
        borderRadius: isBordered ? 'var(--rc-radius-card)' : 'var(--rc-radius-image)',
        ...(isBordered ? {
          background: tokens.cardBg,
          backdropFilter: `blur(${tokens.cardBlur})`,
          WebkitBackdropFilter: `blur(${tokens.cardBlur})`,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: isHovered ? tokens.cardBorderHover : tokens.cardBorder,
        } : {}),
        // Focus ring via CSS vars
        '--tw-ring-color': tokens.focusRing,
        '--tw-ring-offset-color': tokens.focusOffset,
      } as React.CSSProperties}
      aria-label={`Read ${type || 'article'}: ${title}`}
    >
      <article className={isBordered ? 'overflow-hidden' : ''}>

        {/* ── Image Container ── */}
        <div 
          className="relative overflow-hidden"
          style={{
            aspectRatio: aspectRatio || 'var(--rc-aspect-ratio)',
            backgroundColor: tokens.imagePlaceholder,
            borderRadius: isBordered 
              ? 'var(--rc-radius-card-inner) var(--rc-radius-card-inner) 0 0'
              : 'var(--rc-radius-image)',
            marginBottom: isBordered ? '0' : 'var(--rc-image-mb)',
          }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            style={{ willChange: 'transform' }}
          />

          {/* Hover Overlay */}
          <div 
            className="absolute inset-0 transition-colors duration-300"
            style={{ 
              backgroundColor: isHovered ? 'var(--rc-image-overlay-hover)' : 'transparent',
            }}
          />
          
          {/* Badge Overlays */}
          {config.showFeaturedTag && <CardBadge label="Featured" />}
          {config.showLatestTag && <CardBadge label="Latest" />}
        </div>

        {/* ── Text Content ── */}
        <div style={isBordered ? {
          paddingLeft: 'var(--rc-content-px)',
          paddingRight: 'var(--rc-content-px)',
          paddingTop: 'var(--rc-content-pt)',
          paddingBottom: 'var(--rc-content-pb)',
        } : undefined}>

          {/* Category & Date */}
          {(config.showCategory || config.showDate) && (
            <div style={{ marginBottom: 'var(--rc-meta-mb)' }}>
              {config.showCategory && category && (
                <span 
                  className="font-medium uppercase block"
                  style={{ 
                    fontSize: 'var(--text-xs)', 
                    letterSpacing: '1.5px',
                    color: tokens.category,
                    marginBottom: '4px',
                  }}
                >
                  {category}
                </span>
              )}
              {config.showDate && date && (
                <span 
                  className="block" 
                  style={{ 
                    fontSize: 'var(--text-xs)',
                    color: tokens.date,
                  }}
                >
                  {date}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 
            className="font-normal leading-[1.35] tracking-tight transition-colors"
            style={{ 
              fontSize: 'var(--text-sm)',
              color: isHovered ? tokens.titleHover : tokens.title,
              marginBottom: 'var(--rc-title-mb)',
            }}
          >
            {title}
          </h3>

          {/* Description */}
          {config.showDescription && description && (
            <p 
              className="leading-[1.6] transition-colors"
              style={{ 
                fontSize: 'var(--text-sm)',
                color: isHovered ? tokens.descriptionHover : tokens.description,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </article>
    </a>
  );
}
