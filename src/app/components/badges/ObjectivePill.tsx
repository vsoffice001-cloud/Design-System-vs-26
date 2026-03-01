/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ⚠️ DEPRECATED - OBJECTIVE PILL COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * @deprecated This component is deprecated. Use the unified Badge system instead.
 * 
 * Migration:
 * ```tsx
 * // OLD (deprecated)
 * import { ObjectivePill, ObjectivePillInteractive } from '@/app/components/badges';
 * 
 * // NEW (recommended)
 * import { ObjectivePill, ObjectivePillInteractive } from '@/app/components/Badge';
 * ```
 * 
 * The new Badge system provides:
 * ✅ Unified API for all badge variants
 * ✅ Consistent theming with design tokens
 * ✅ Better shimmer animation control
 * ✅ Interactive states built-in
 * 
 * Documentation: /src/app/components/BADGE_SYSTEM.md
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * ORIGINAL DOCUMENTATION (For reference only)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A premium badge component for displaying sequential objective numbers with
 * shimmer animation effect. Part of the editorial design system for case studies,
 * blog posts, and long-form content.
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 📚 DOCUMENTATION INDEX
 * ───────────────────────────────────────────────────────────────────────────
 * 1. WHY - Purpose & Design Rationale
 * 2. WHAT - Component Anatomy & Structure
 * 3. WHEN - Usage Guidelines & Scenarios
 * 4. WHERE - Placement & Context
 * 5. HOW - Implementation & Code Examples
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🎯 WHY (PURPOSE & DESIGN RATIONALE)
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * PRIMARY OBJECTIVES:
 * • Visual Hierarchy: Clearly distinguishes objective numbers from content text
 * • Sequential Navigation: Helps users track multiple objectives in order (1→2→3)
 * • Premium Aesthetic: Adds editorial sophistication to case study pages
 * • Micro-interaction: Provides delightful visual feedback during hover/reveal
 * 
 * DESIGN PHILOSOPHY:
 * • Minimalist Editorial: Clean, understated design that doesn't overpower content
 * • Scannable: High letter-spacing and uppercase treatment aids quick scanning
 * • Accessible: WCAG AAA compliant with 4.5:1+ contrast ratios
 * • Performant: Pure CSS animations, no JS required for basic interactions
 * 
 * USER BENEFITS:
 * • Cognitive Load Reduction: Numbered pills help users mentally organize info
 * • Visual Anchors: Provides reference points when jumping between sections
 * • Professional Presentation: Elevates content credibility and polish
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 🛠️ HOW (IMPLEMENTATION)
 * ───────────────────────────────────────────────────────────────────────────
 */

import { CSSProperties } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES & INTERFACES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * ObjectivePill Component Props
 */
export interface ObjectivePillProps {
  /** Objective number (1, 2, 3...) */
  number: number;
  
  /** Visual theme variant */
  variant?: 'light' | 'dark' | 'brand';
  
  /** Enable/disable shimmer animation */
  showShimmer?: boolean;
  
  /** Custom label text (default: "Objective") */
  label?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Trigger shimmer animation programmatically */
  triggerShimmer?: boolean;
  
  /** Accessibility label override */
  ariaLabel?: string;
}

/**
 * Theme configuration for each variant
 */
interface ThemeConfig {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  shimmerColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// DESIGN TOKENS & THEME CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const THEMES: Record<'light' | 'dark' | 'brand', ThemeConfig> = {
  light: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    textColor: 'rgba(0, 0, 0, 0.6)',
    shimmerColor: 'rgba(255, 255, 255, 0.6)',
    hoverBackgroundColor: 'rgba(0, 0, 0, 0.08)',
    hoverBorderColor: 'rgba(0, 0, 0, 0.25)',
  },
  dark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    textColor: 'rgba(255, 255, 255, 0.8)',
    shimmerColor: 'rgba(255, 255, 255, 0.3)',
    hoverBackgroundColor: 'rgba(255, 255, 255, 0.15)',
    hoverBorderColor: 'rgba(255, 255, 255, 0.3)',
  },
  brand: {
    backgroundColor: 'rgba(176, 31, 36, 0.08)',
    borderColor: 'var(--brand-red)',
    textColor: 'var(--brand-red)',
    shimmerColor: 'rgba(255, 255, 255, 0.5)',
    hoverBackgroundColor: 'rgba(176, 31, 36, 0.12)',
    hoverBorderColor: 'var(--brand-red)',
  },
};

const SPACING = {
  paddingX: '16px',
  paddingY: '6px',
  pillGap: '12px',
  marginBottom: '16px',
  marginTop: '28px',
  groupSpacing: '48px',
} as const;

const TYPOGRAPHY = {
  fontSize: 'var(--text-xs)',
  fontWeight: 500,
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  lineHeight: 1,
} as const;

const ANIMATION = {
  transitionDuration: '200ms',
  shimmerDuration: '700ms',
  timingFunction: 'ease-out',
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function ObjectivePill({
  number,
  variant = 'light',
  showShimmer = true,
  label = 'Objective',
  className = '',
  triggerShimmer = false,
  ariaLabel,
}: ObjectivePillProps) {
  const theme = THEMES[variant];
  const displayText = `${label} ${number}`;
  const accessibilityLabel = ariaLabel || `${label} number ${number}`;

  const containerStyles: CSSProperties = {
    display: 'inline-block',
    position: 'relative',
    paddingLeft: SPACING.paddingX,
    paddingRight: SPACING.paddingX,
    paddingTop: SPACING.paddingY,
    paddingBottom: SPACING.paddingY,
    borderRadius: '9999px',
    border: `1px solid ${theme.borderColor}`,
    backgroundColor: theme.backgroundColor,
    overflow: 'hidden',
    transition: `all ${ANIMATION.transitionDuration} ${ANIMATION.timingFunction}`,
  };

  const shimmerStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '50%',
    background: `linear-gradient(90deg, transparent 0%, ${theme.shimmerColor} 50%, transparent 100%)`,
    transform: 'translateX(-100%)',
    pointerEvents: 'none',
    animation: triggerShimmer
      ? `shimmer ${ANIMATION.shimmerDuration} ${ANIMATION.timingFunction}`
      : 'none',
  };

  const textStyles: CSSProperties = {
    position: 'relative',
    zIndex: 10,
    fontSize: TYPOGRAPHY.fontSize,
    fontWeight: TYPOGRAPHY.fontWeight,
    textTransform: TYPOGRAPHY.textTransform,
    letterSpacing: TYPOGRAPHY.letterSpacing,
    color: theme.textColor,
    lineHeight: TYPOGRAPHY.lineHeight,
  };

  return (
    <div
      className={`objective-pill ${className}`}
      style={containerStyles}
      role="status"
      aria-label={accessibilityLabel}
    >
      {showShimmer && (
        <div
          className="shimmer-overlay"
          style={shimmerStyles}
          aria-hidden="true"
        />
      )}
      <span style={textStyles}>
        {displayText}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HOVER VARIANT (WITH SHIMMER TRIGGER)
// ═══════════════════════════════════════════════════════════════════════════

export function ObjectivePillInteractive({
  number,
  variant = 'light',
  label = 'Objective',
  className = '',
  ariaLabel,
}: Omit<ObjectivePillProps, 'showShimmer' | 'triggerShimmer'>) {
  const theme = THEMES[variant];
  const displayText = `${label} ${number}`;
  const accessibilityLabel = ariaLabel || `${label} number ${number}`;

  return (
    <div
      className={`objective-pill objective-pill-interactive ${className}`}
      role="status"
      aria-label={accessibilityLabel}
      style={{
        display: 'inline-block',
        position: 'relative',
        paddingLeft: SPACING.paddingX,
        paddingRight: SPACING.paddingX,
        paddingTop: SPACING.paddingY,
        paddingBottom: SPACING.paddingY,
        borderRadius: '9999px',
        border: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.backgroundColor,
        overflow: 'hidden',
        transition: `all ${ANIMATION.transitionDuration} ${ANIMATION.timingFunction}`,
        cursor: 'default',
      }}
    >
      <div
        className="shimmer-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          width: '50%',
          background: `linear-gradient(90deg, transparent 0%, ${theme.shimmerColor} 50%, transparent 100%)`,
          transform: 'translateX(-100%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <span
        style={{
          position: 'relative',
          zIndex: 10,
          fontSize: TYPOGRAPHY.fontSize,
          fontWeight: TYPOGRAPHY.fontWeight,
          textTransform: TYPOGRAPHY.textTransform,
          letterSpacing: TYPOGRAPHY.letterSpacing,
          color: theme.textColor,
          lineHeight: TYPOGRAPHY.lineHeight,
        }}
      >
        {displayText}
      </span>
      <style>{`
        .objective-pill-interactive:hover {
          background-color: ${theme.hoverBackgroundColor} !important;
          border-color: ${theme.hoverBorderColor} !important;
        }
        
        .objective-pill-interactive:hover .shimmer-overlay {
          animation: shimmer ${ANIMATION.shimmerDuration} ${ANIMATION.timingFunction};
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .objective-pill-interactive,
          .objective-pill-interactive * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

export function ObjectivePillGroup({
  children,
  orientation = 'horizontal',
  className = '',
}: {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <div
      className={`objective-pill-group ${className}`}
      style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        flexWrap: 'wrap',
        gap: SPACING.pillGap,
        alignItems: orientation === 'vertical' ? 'flex-start' : 'center',
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CSS ANIMATIONS (Global Keyframes)
// ═══════════════════════════════════════════════════════════════════════════

export const SHIMMER_ANIMATION_CSS = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}

.objective-pill:hover .shimmer-overlay {
  animation: shimmer 700ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .objective-pill,
  .objective-pill * {
    animation: none !important;
    transition: none !important;
  }
}
`;

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════════════════

export const OBJECTIVE_PILL_TOKENS = {
  themes: THEMES,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  animation: ANIMATION,
} as const;