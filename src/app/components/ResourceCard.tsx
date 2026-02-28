/**
 * ResourceCard Component
 * ======================
 * Token-driven card for resource content (articles, case studies, reports).
 * 7 content variants, 2 card styles, 2 color modes.
 * All colors from --rc-* CSS custom properties.
 */

import { useState } from 'react';
import { Badge } from '@/app/components/Badge';

// Types
export type ResourceCardVariant =
  | 'full-featured'
  | 'featured-focus'
  | 'minimal'
  | 'category-featured'
  | 'latest'
  | 'clean'
  | 'standard';

export type ResourceCardStyle = 'default' | 'bordered';
export type ResourceCardMode = 'light' | 'dark';
export type ResourceContentType = 'article' | 'blog' | 'case-study' | 'pov';

export interface ResourceCardProps {
  image: string;
  category?: string;
  date?: string;
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  type?: ResourceContentType;
  isFeatured?: boolean;
  variant?: ResourceCardVariant;
  cardStyle?: ResourceCardStyle;
  mode?: ResourceCardMode;
  aspectRatio?: string;
  className?: string;
}

// Variant Config
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

// Token Helpers
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

// CardBadge — glassmorphism badge overlay
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

// Main Component
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
        '--tw-ring-color': tokens.focusRing,
        '--tw-ring-offset-color': tokens.focusOffset,
      } as React.CSSProperties}
      aria-label={`Read ${type || 'article'}: ${title}`}
    >
      <article className={isBordered ? 'overflow-hidden' : ''}>

        {/* Image Container */}
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

        {/* Text Content */}
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