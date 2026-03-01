/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️ DEPRECATED - INFO CARD LABEL COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * @deprecated This component is deprecated. Use the unified Badge system instead.
 * 
 * Migration:
 * ```tsx
 * // OLD (deprecated)
 * import { InfoCardLabel } from '@/app/components/badges';
 * <InfoCardLabel variant="neutral-light">Client</InfoCardLabel>
 * 
 * // NEW (recommended)
 * import { InfoCardLabel } from '@/app/components/Badge';
 * <InfoCardLabel>Client</InfoCardLabel>
 * ```
 * 
 * The new Badge system provides:
 * ✅ Simplified API (no complex variant system)
 * ✅ Consistent with other badge components
 * ✅ Better theme support (light/dark mode)
 * ✅ Design token based
 * 
 * Documentation: /src/app/components/BADGE_SYSTEM.md
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * ORIGINAL DOCUMENTATION (For reference only)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Compact label component for metadata cards (hero info cards, stat cards,
 * feature cards). Uses ultra-small typography with high letter-spacing for
 * maximum information density while maintaining readability.
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🛠️ HOW (IMPLEMENTATION)
 * ───────────────────────────────────────────────────────────────────────────
 */

import { CSSProperties, ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES & INTERFACES
// ═══════════════════════════════════════════════════════════════════════════

export interface InfoCardLabelProps {
  /** Label text (1-3 words recommended) */
  children: ReactNode;
  /** Color variant based on card background */
  variant?: 'light' | 'dark';
  /** Device context (affects sizing) */
  context?: 'mobile' | 'desktop';
  /** Custom color override */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
}

export interface InfoCardProps {
  /** Label text (e.g., "CLIENT") */
  label: string;
  /** Value text (e.g., "Yash Highvoltage Insulators") */
  value: ReactNode;
  /** Visual theme variant */
  variant?: 'light' | 'dark';
  /** Card style type */
  cardType?: 'solid' | 'frosted-glass';
  /** Device context */
  context?: 'mobile' | 'desktop';
  /** Additional CSS classes for card container */
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════════════════

const TYPOGRAPHY = {
  desktop: {
    fontSize: 'clamp(9px, 0.8vw, 10px)',
    marginBottom: 'clamp(6px, 0.6vw, 8px)',
  },
  mobile: {
    fontSize: 'clamp(9px, 2vw, 10px)',
    marginBottom: 'clamp(6px, 1.5vw, 8px)',
  },
  shared: {
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.2px',
    lineHeight: 1,
  },
} as const;

const COLORS = {
  light: 'rgba(0, 0, 0, 0.7)',
  dark: 'rgba(255, 255, 255, 0.7)',
} as const;

const CARD_STYLES = {
  solid: {
    light: {
      background: 'rgba(255, 255, 255, 1)',
      border: 'rgba(0, 0, 0, 0.12)',
      labelColor: 'rgba(0, 0, 0, 0.7)',
      valueColor: 'rgba(0, 0, 0, 1)',
    },
    dark: {
      background: 'rgba(26, 26, 26, 1)',
      border: 'rgba(255, 255, 255, 0.15)',
      labelColor: 'rgba(255, 255, 255, 0.7)',
      valueColor: 'rgba(255, 255, 255, 1)',
    },
  },
  frostedGlass: {
    light: {
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'rgba(0, 0, 0, 0.12)',
      labelColor: 'rgba(0, 0, 0, 0.7)',
      valueColor: 'rgba(0, 0, 0, 1)',
      backdropBlur: '50px',
    },
    dark: {
      background: 'rgba(26, 26, 26, 0.9)',
      border: 'rgba(255, 255, 255, 0.15)',
      labelColor: 'rgba(255, 255, 255, 0.7)',
      valueColor: 'rgba(255, 255, 255, 1)',
      backdropBlur: '50px',
    },
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InfoCardLabel({
  children,
  variant = 'light',
  context = 'desktop',
  color,
  className = '',
  style = {},
}: InfoCardLabelProps) {
  const typography = context === 'desktop' ? TYPOGRAPHY.desktop : TYPOGRAPHY.mobile;
  const baseColor = color || COLORS[variant];

  const labelStyles: CSSProperties = {
    fontSize: typography.fontSize,
    fontWeight: TYPOGRAPHY.shared.fontWeight,
    textTransform: TYPOGRAPHY.shared.textTransform,
    letterSpacing: TYPOGRAPHY.shared.letterSpacing,
    lineHeight: TYPOGRAPHY.shared.lineHeight,
    color: baseColor,
    marginBottom: typography.marginBottom,
    display: 'block',
    ...style,
  };

  return (
    <p
      className={`info-card-label ${className}`}
      style={labelStyles}
    >
      {children}
    </p>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPLETE INFO CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function InfoCard({
  label,
  value,
  variant = 'light',
  cardType = 'solid',
  context = 'desktop',
  className = '',
}: InfoCardProps) {
  const theme = CARD_STYLES[cardType][variant];
  const isFrostedGlass = cardType === 'frosted-glass';

  const padding = context === 'desktop'
    ? 'clamp(12px, 1.2vw, 16px)'
    : 'clamp(12px, 3vw, 16px)';

  const valueFontSize = context === 'desktop'
    ? 'clamp(12px, 1.1vw, 14px)'
    : 'clamp(13px, 3.5vw, 15px)';

  return (
    <div
      className={`info-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: '5px',
        padding: padding,
        border: `1px solid ${theme.border}`,
        overflow: isFrostedGlass ? 'hidden' : 'visible',
        backgroundColor: isFrostedGlass ? 'transparent' : theme.background,
        boxShadow: isFrostedGlass
          ? '0 10px 30px rgba(0, 0, 0, 0.15)'
          : '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      {isFrostedGlass && 'backdropBlur' in theme && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: `blur(${theme.backdropBlur})`,
            WebkitBackdropFilter: `blur(${theme.backdropBlur})`,
            background: theme.background,
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <InfoCardLabel
          variant={variant}
          context={context}
          color={theme.labelColor}
          style={{ marginBottom: context === 'desktop' ? 'clamp(6px, 0.6vw, 8px)' : 'clamp(6px, 1.5vw, 8px)' }}
        >
          {label}
        </InfoCardLabel>
        <p
          className="info-card-value"
          style={{
            fontSize: valueFontSize,
            fontWeight: 600,
            lineHeight: context === 'desktop' ? 1.25 : 1.3,
            color: theme.valueColor,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SPECIALIZED VARIANTS
// ═══════════════════════════════════════════════════════════════════════════

export function HeroInfoCardGrid({
  children,
  variant = 'light',
  context = 'desktop',
  className = '',
}: {
  children: ReactNode;
  variant?: 'light' | 'dark';
  context?: 'mobile' | 'desktop';
  className?: string;
}) {
  const gridClass = context === 'desktop'
    ? 'hidden md:grid grid-cols-4 gap-3 lg:gap-4'
    : 'grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:hidden';

  return (
    <div className={`hero-info-card-grid ${gridClass} ${className}`}>
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  description,
  variant = 'light',
  className = '',
}: {
  label: string;
  value: string | number;
  description?: string;
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const theme = CARD_STYLES.solid[variant];

  return (
    <div
      className={`stat-card ${className}`}
      style={{
        padding: 'clamp(20px, 4vw, 32px)',
        borderRadius: '10px',
        backgroundColor: theme.background,
        border: `1px solid ${theme.border}`,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <InfoCardLabel variant={variant} context="desktop">
        {label}
      </InfoCardLabel>
      <p
        style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 600,
          color: theme.valueColor,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: description ? '12px' : 0,
        }}
      >
        {value}
      </p>
      {description && (
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: variant === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════════════════

export const INFO_CARD_LABEL_TOKENS = {
  typography: TYPOGRAPHY,
  colors: COLORS,
  cardStyles: CARD_STYLES,
} as const;