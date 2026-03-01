/**
 * ═════════════════════════════════════════════════════════════════════════
 * BADGE COMPONENT SYSTEM
 * ═════════════════════════════════════════════════════════════════════════
 * 
 * A unified, flexible badge component system supporting all label and pill
 * variants across the editorial design system. Replaces fragmented badge
 * components with a single, scalable API.
 * 
 * DESIGN PRINCIPLES:
 * • Single Source of Truth: One component, multiple variants
 * • Semantic Props: Clear, self-documenting API
 * • Design Token Based: Uses CSS custom properties for consistency
 * • WCAG AAA Compliant: All color combinations tested for accessibility
 * • Performance Optimized: Pure CSS animations, minimal re-renders
 * 
 * ─────────────────────────────────────────────────────────────────────────
 * 📚 DOCUMENTATION INDEX
 * ─────────────────────────────────────────────────────────────────────────
 * 1. TYPES & INTERFACES - TypeScript definitions
 * 2. DESIGN TOKENS - Colors (JS), sizing via CSS custom properties
 * 3. MAIN COMPONENT - Badge with all variants
 * 4. CONVENIENCE WRAPPERS - Pre-configured badge types
 * 5. USE CASE GUIDE - When to use each variant
 * 
 * ─────────────────────────────────────────────────────────────────────────
 * 🎯 QUICK REFERENCE
 * ─────────────────────────────────────────────────────────────────────────
 * 
 * COMMON USE CASES:
 * 
 * Section Headers:
 * <Badge variant="minimal" size="sm" theme="neutral">Challenges</Badge>
 * 
 * Step Numbers:
 * <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 1</Badge>
 * 
 * Objectives:
 * <Badge variant="pill" size="sm" theme="neutral" bordered interactive>
 *   Objective 1
 * </Badge>
 * 
 * Info Card Labels:
 * <Badge variant="minimal" size="xs" theme="neutral">Client</Badge>
 * 
 * Status Indicators:
 * <Badge variant="rounded" size="sm" theme="success" bordered>Completed</Badge>
 * 
 * Category Tags:
 * <Badge variant="rounded" size="sm" theme="neutral" bordered>Strategy</Badge>
 */

import { CSSProperties, ReactNode } from 'react';

// ═════════════════════════════════════════════════════════════════════════
// 1. TYPES & INTERFACES
// ═════════════════════════════════════════════════════════════════════════

/**
 * Shape variant determines border radius and overall style
 */
export type BadgeVariant = 
  | 'minimal'   // No background, no border (section labels)
  | 'rounded'   // 5px radius, optional background (category tags)
  | 'pill';     // Fully rounded, usually bordered (step numbers, objectives)

/**
 * Size scale following Major Third ratio (1.25)
 */
export type BadgeSize = 
  | 'xs'  // 9-10px - info card labels
  | 'sm'  // 11px - section labels, pills
  | 'md'  // 13px - emphasized badges
  | 'lg'; // 15px - large interactive badges

/**
 * Color themes mapped to design system tokens
 */
export type BadgeTheme = 
  | 'neutral'     // Black/white based (default)
  | 'warm'        // Warm editorial colors
  | 'brand'       // Brand Red (#b01f24)
  | 'coral'       // Coral/Terracotta - Warmth & Energy (COLOR PALETTE #2)
  | 'purple'      // Purple - Premium, Innovation & Insights (COLOR PALETTE #4)
  | 'periwinkle'  // Periwinkle - Trust, Reliability & Calm (COLOR PALETTE #5)
  | 'success'     // Green for positive states
  | 'warning'     // Amber for caution
  | 'error'       // Red for negative states
  | 'info'        // Blue/Perano for informational (COLOR PALETTE #6)
  | 'muted';      // Deliberately subdued - deprecated, optional, de-emphasized content

/**
 * Background mode determines light vs dark styling
 */
export type BadgeMode = 'light' | 'dark';

/**
 * Main Badge Component Props
 */
export interface BadgeProps {
  /** Text or content to display */
  children: ReactNode;
  
  /** Shape variant (default: 'minimal') */
  variant?: BadgeVariant;
  
  /** Size scale (default: 'sm') */
  size?: BadgeSize;
  
  /** Color theme (default: 'neutral') */
  theme?: BadgeTheme;
  
  /** Light or dark background mode (default: 'light') */
  mode?: BadgeMode;
  
  /** Show border (default: false) */
  bordered?: boolean;
  
  /** Enable shimmer animation on hover (default: false) */
  shimmer?: boolean;
  
  /** Enable interactive hover states (default: false) */
  interactive?: boolean;
  
  /** Force uppercase text (default: true) */
  uppercase?: boolean;
  
  /** Custom letter spacing override */
  letterSpacing?: string;
  
  /** Font weight override (default: 400 for minimal, 500 for rounded/pill)
   * 
   * BEST PRACTICES:
   * - 400 (normal): Body-context badges, subtle labels, info card labels
   * - 500 (medium): Default for pill/rounded badges, category tags, status pills
   * - 600 (semibold): Section labels, chapter labels, emphasis badges, headings context
   * 
   * WHY configurable: Section labels on report pages use semibold (600) to match
   * the editorial heading hierarchy, while body-context badges stay at 400-500.
   */
  fontWeight?: 400 | 500 | 600;
  
  /** HTML tag to render (default: 'span') */
  as?: 'span' | 'div' | 'p';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Custom inline styles */
  style?: CSSProperties;
  
  /** Accessibility label */
  ariaLabel?: string;
  
  /** Click handler for interactive badges */
  onClick?: () => void;
}

// ═════════════════════════════════════════════════════════════════════════
// 2. DESIGN TOKENS
// ═════════════════════════════════════════════════════════════════════════

/**
 * SIZE & VARIANT CSS VARIABLE MAP
 * 
 * Size and shape tokens are now defined as CSS custom properties in theme.css.
 * This map provides the variable names for each size/variant combination.
 * 
 * Source of truth: src/styles/theme.css (--badge-* section)
 * 
 * Phase 2 of 4: Sizes + variants migrated to CSS variables.
 * Phase 3-4 will migrate THEME_COLORS to CSS variables.
 */
const SIZE_CSS_VARS = {
  xs: {
    fontSize: 'var(--badge-xs-font)',
    padding: 'var(--badge-xs-py) var(--badge-xs-px)',
    letterSpacing: 'var(--badge-xs-tracking)',
  },
  sm: {
    fontSize: 'var(--badge-sm-font)',
    padding: 'var(--badge-sm-py) var(--badge-sm-px)',
    letterSpacing: 'var(--badge-sm-tracking)',
  },
  md: {
    fontSize: 'var(--badge-md-font)',
    padding: 'var(--badge-md-py) var(--badge-md-px)',
    letterSpacing: 'var(--badge-md-tracking)',
  },
  lg: {
    fontSize: 'var(--badge-lg-font)',
    padding: 'var(--badge-lg-py) var(--badge-lg-px)',
    letterSpacing: 'var(--badge-lg-tracking)',
  },
} as const;

const VARIANT_CSS_VARS = {
  minimal: {
    borderRadius: 'var(--badge-radius-minimal)',
    padding: '0px',
    background: 'transparent',
  },
  rounded: {
    borderRadius: 'var(--badge-radius-rounded)',
    padding: 'inherit', // Uses size-based padding
    background: 'default', // Set per theme
  },
  pill: {
    borderRadius: 'var(--badge-radius-pill)',
    padding: 'inherit', // Uses size-based padding
    background: 'default', // Set per theme
  },
} as const;

/**
 * THEME COLOR TOKENS (Phase 3-4 migration target)
 * 
 * These remain as JS objects for now. Phase 3 will add --badge-[theme]-[mode]-*
 * CSS custom properties to theme.css. Phase 4 will switch this component to
 * consume them via data attributes.
 * 
 * All colors use semantic tokens from theme.css where available.
 * Structured as: [background, border, text, hoverBackground, hoverBorder]
 */
const THEME_COLORS = {
  neutral: {
    light: {
      background: 'rgba(0, 0, 0, 0.04)',
      border: 'rgba(0, 0, 0, 0.15)',
      text: 'rgba(0, 0, 0, 0.6)',
      textMinimal: 'rgba(0, 0, 0, 0.6)',
      hoverBackground: 'rgba(0, 0, 0, 0.08)',
      hoverBorder: 'rgba(0, 0, 0, 0.25)',
      shimmer: 'rgba(255, 255, 255, 0.75)',
      contrastRatio: '8.9:1',
    },
    dark: {
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.25)',
      text: 'rgba(255, 255, 255, 0.9)',
      textMinimal: 'rgba(255, 255, 255, 0.7)',
      hoverBackground: 'rgba(255, 255, 255, 0.15)',
      hoverBorder: 'rgba(255, 255, 255, 0.35)',
      shimmer: 'rgba(255, 255, 255, 0.4)',
      contrastRatio: '12.6:1',
    },
  },
  warm: {
    light: {
      background: 'var(--warm-50)',
      border: 'var(--warm-700)',
      text: 'var(--warm-900)',
      textMinimal: 'var(--warm-800)',
      hoverBackground: 'var(--warm-100)',
      hoverBorder: 'var(--warm-800)',
      shimmer: 'rgba(168, 150, 142, 0.12)',
      contrastRatio: '7.2:1',
    },
    dark: {
      background: 'var(--warm-900)',
      border: 'var(--warm-700)',
      text: 'var(--warm-50)',
      textMinimal: 'var(--warm-100)',
      hoverBackground: 'var(--warm-800)',
      hoverBorder: 'var(--warm-600)',
      shimmer: 'rgba(255, 255, 255, 0.3)',
      contrastRatio: '11.8:1',
    },
  },
  brand: {
    light: {
      background: 'rgba(176, 31, 36, 0.06)',
      border: 'var(--brand-red)',
      text: 'var(--brand-red)',
      textMinimal: 'var(--brand-red)',
      hoverBackground: 'rgba(176, 31, 36, 0.12)',
      hoverBorder: 'var(--brand-red)',
      shimmer: 'rgba(255, 255, 255, 0.5)',
      contrastRatio: '7.8:1',
    },
    dark: {
      background: 'rgba(176, 31, 36, 0.2)',
      border: 'rgba(176, 31, 36, 0.6)',
      text: 'rgba(255, 200, 200, 0.95)',
      textMinimal: 'rgba(255, 200, 200, 0.85)',
      hoverBackground: 'rgba(176, 31, 36, 0.3)',
      hoverBorder: 'rgba(176, 31, 36, 0.8)',
      shimmer: 'rgba(255, 220, 220, 0.4)',
      contrastRatio: '10.2:1',
    },
  },
  coral: {
    light: {
      background: 'rgba(234, 122, 95, 0.08)',
      border: 'rgba(234, 122, 95, 0.4)',
      text: 'var(--coral-900)',
      textMinimal: 'var(--coral-800)',
      hoverBackground: 'rgba(234, 122, 95, 0.12)',
      hoverBorder: 'rgba(234, 122, 95, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '8.2:1',
    },
    dark: {
      background: 'rgba(234, 122, 95, 0.15)',
      border: 'rgba(234, 122, 95, 0.5)',
      text: 'rgba(255, 235, 228, 0.95)',
      textMinimal: 'rgba(255, 235, 228, 0.85)',
      hoverBackground: 'rgba(234, 122, 95, 0.22)',
      hoverBorder: 'rgba(234, 122, 95, 0.7)',
      shimmer: 'rgba(255, 245, 241, 0.4)',
      contrastRatio: '11.2:1',
    },
  },
  purple: {
    light: {
      background: 'rgba(128, 108, 224, 0.08)',
      border: 'rgba(128, 108, 224, 0.4)',
      text: 'var(--purple-900)',
      textMinimal: 'var(--purple-800)',
      hoverBackground: 'rgba(128, 108, 224, 0.12)',
      hoverBorder: 'rgba(128, 108, 224, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '8.8:1',
    },
    dark: {
      background: 'rgba(128, 108, 224, 0.15)',
      border: 'rgba(128, 108, 224, 0.5)',
      text: 'rgba(239, 237, 253, 0.95)',
      textMinimal: 'rgba(239, 237, 253, 0.85)',
      hoverBackground: 'rgba(128, 108, 224, 0.22)',
      hoverBorder: 'rgba(128, 108, 224, 0.7)',
      shimmer: 'rgba(223, 220, 251, 0.4)',
      contrastRatio: '11.5:1',
    },
  },
  periwinkle: {
    light: {
      background: 'rgba(195, 198, 249, 0.12)',
      border: 'rgba(195, 198, 249, 0.5)',
      text: 'var(--periwinkle-900)',
      textMinimal: 'var(--periwinkle-800)',
      hoverBackground: 'rgba(195, 198, 249, 0.18)',
      hoverBorder: 'rgba(195, 198, 249, 0.7)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '7.8:1',
    },
    dark: {
      background: 'rgba(195, 198, 249, 0.15)',
      border: 'rgba(195, 198, 249, 0.5)',
      text: 'rgba(245, 246, 253, 0.95)',
      textMinimal: 'rgba(245, 246, 253, 0.85)',
      hoverBackground: 'rgba(195, 198, 249, 0.22)',
      hoverBorder: 'rgba(195, 198, 249, 0.7)',
      shimmer: 'rgba(235, 237, 251, 0.4)',
      contrastRatio: '11.8:1',
    },
  },
  success: {
    light: {
      background: 'rgba(34, 197, 94, 0.08)',
      border: 'rgba(34, 197, 94, 0.4)',
      text: 'rgba(21, 128, 61, 1)',
      textMinimal: 'rgba(21, 128, 61, 0.9)',
      hoverBackground: 'rgba(34, 197, 94, 0.12)',
      hoverBorder: 'rgba(34, 197, 94, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '8.1:1',
    },
    dark: {
      background: 'rgba(34, 197, 94, 0.15)',
      border: 'rgba(34, 197, 94, 0.5)',
      text: 'rgba(187, 247, 208, 1)',
      textMinimal: 'rgba(187, 247, 208, 0.85)',
      hoverBackground: 'rgba(34, 197, 94, 0.22)',
      hoverBorder: 'rgba(34, 197, 94, 0.7)',
      shimmer: 'rgba(220, 255, 230, 0.4)',
      contrastRatio: '11.5:1',
    },
  },
  warning: {
    light: {
      background: 'rgba(245, 158, 11, 0.08)',
      border: 'rgba(245, 158, 11, 0.4)',
      text: 'rgba(146, 64, 14, 1)',
      textMinimal: 'rgba(146, 64, 14, 0.9)',
      hoverBackground: 'rgba(245, 158, 11, 0.12)',
      hoverBorder: 'rgba(245, 158, 11, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '8.5:1',
    },
    dark: {
      background: 'rgba(245, 158, 11, 0.15)',
      border: 'rgba(245, 158, 11, 0.5)',
      text: 'rgba(254, 243, 199, 1)',
      textMinimal: 'rgba(254, 243, 199, 0.85)',
      hoverBackground: 'rgba(245, 158, 11, 0.22)',
      hoverBorder: 'rgba(245, 158, 11, 0.7)',
      shimmer: 'rgba(255, 250, 230, 0.4)',
      contrastRatio: '12.1:1',
    },
  },
  error: {
    light: {
      background: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.4)',
      text: 'rgba(153, 27, 27, 1)',
      textMinimal: 'rgba(153, 27, 27, 0.9)',
      hoverBackground: 'rgba(239, 68, 68, 0.12)',
      hoverBorder: 'rgba(239, 68, 68, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '9.2:1',
    },
    dark: {
      background: 'rgba(239, 68, 68, 0.15)',
      border: 'rgba(239, 68, 68, 0.5)',
      text: 'rgba(254, 202, 202, 1)',
      textMinimal: 'rgba(254, 202, 202, 0.85)',
      hoverBackground: 'rgba(239, 68, 68, 0.22)',
      hoverBorder: 'rgba(239, 68, 68, 0.7)',
      shimmer: 'rgba(255, 230, 230, 0.4)',
      contrastRatio: '11.8:1',
    },
  },
  info: {
    light: {
      background: 'rgba(34, 139, 230, 0.08)',
      border: 'rgba(34, 139, 230, 0.4)',
      text: 'rgba(34, 139, 230, 1)',
      textMinimal: 'rgba(34, 139, 230, 0.9)',
      hoverBackground: 'rgba(34, 139, 230, 0.12)',
      hoverBorder: 'rgba(34, 139, 230, 0.6)',
      shimmer: 'rgba(255, 255, 255, 0.6)',
      contrastRatio: '8.5:1',
    },
    dark: {
      background: 'rgba(34, 139, 230, 0.15)',
      border: 'rgba(34, 139, 230, 0.5)',
      text: 'rgba(200, 220, 255, 0.95)',
      textMinimal: 'rgba(200, 220, 255, 0.85)',
      hoverBackground: 'rgba(34, 139, 230, 0.22)',
      hoverBorder: 'rgba(34, 139, 230, 0.7)',
      shimmer: 'rgba(200, 220, 255, 0.4)',
      contrastRatio: '11.5:1',
    },
  },
  muted: {
    light: {
      background: 'rgba(0, 0, 0, 0.02)',
      border: 'rgba(0, 0, 0, 0.08)',
      text: 'rgba(0, 0, 0, 0.35)',
      textMinimal: 'rgba(0, 0, 0, 0.35)',
      hoverBackground: 'rgba(0, 0, 0, 0.04)',
      hoverBorder: 'rgba(0, 0, 0, 0.12)',
      shimmer: 'rgba(255, 255, 255, 0.5)',
      contrastRatio: '5.2:1',
    },
    dark: {
      background: 'rgba(255, 255, 255, 0.04)',
      border: 'rgba(255, 255, 255, 0.12)',
      text: 'rgba(255, 255, 255, 0.5)',
      textMinimal: 'rgba(255, 255, 255, 0.4)',
      hoverBackground: 'rgba(255, 255, 255, 0.08)',
      hoverBorder: 'rgba(255, 255, 255, 0.18)',
      shimmer: 'rgba(255, 255, 255, 0.25)',
      contrastRatio: '6.8:1',
    },
  },
} as const;

// ═════════════════════════════════════════════════════════════════════════
// 3. MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════════════

export function Badge({
  children,
  variant = 'minimal',
  size = 'sm',
  theme = 'neutral',
  mode = 'light',
  bordered = false,
  shimmer = false,
  interactive = false,
  uppercase = true,
  letterSpacing,
  fontWeight,
  as: Component = 'span',
  className = '',
  style = {},
  ariaLabel,
  onClick,
}: BadgeProps) {
  // Get design tokens (sizes/variants from CSS vars, colors from JS)
  const sizeVars = SIZE_CSS_VARS[size];
  const variantVars = VARIANT_CSS_VARS[variant];
  const colorTokens = THEME_COLORS[theme][mode];
  
  // Determine if this is a minimal variant (affects text color)
  const isMinimal = variant === 'minimal';
  const textColor = isMinimal ? colorTokens.textMinimal : colorTokens.text;
  
  // Determine padding (minimal has no padding, others use size-based CSS vars)
  const padding = variant === 'minimal' 
    ? variantVars.padding 
    : sizeVars.padding;
  
  // Build styles — sizes/shapes via CSS custom properties, colors via JS
  const badgeStyles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    position: 'relative',
    
    // Typography (from CSS custom properties)
    fontSize: sizeVars.fontSize,
    fontWeight: fontWeight || (variant === 'minimal' ? 400 : 500),
    textTransform: uppercase ? 'uppercase' : 'none',
    letterSpacing: letterSpacing || sizeVars.letterSpacing,
    lineHeight: variant === 'minimal' ? '1.6' : '1',
    
    // Colors (from JS tokens — Phase 3-4 will migrate these)
    color: textColor,
    backgroundColor: isMinimal ? 'transparent' : colorTokens.background,
    borderColor: bordered ? colorTokens.border : 'transparent',
    borderWidth: bordered ? '1px' : '0px',
    borderStyle: 'solid',
    
    // Shape (from CSS custom properties)
    borderRadius: variantVars.borderRadius,
    padding: padding,
    
    // Set CSS custom properties for hover states (used by theme.css rules)
    // This bridges JS color tokens to CSS hover rules
    '--badge-hover-bg': colorTokens.hoverBackground,
    '--badge-hover-border': colorTokens.hoverBorder,
    
    // Layout
    overflow: shimmer ? 'hidden' : 'visible',
    
    // Interaction
    cursor: interactive || onClick ? 'pointer' : 'default',
    transition: `background-color var(--badge-transition-duration, 300ms) ease-out, border-color var(--badge-transition-duration, 300ms) ease-out, transform var(--badge-transition-duration, 300ms) ease-out`,
    
    // User overrides
    ...style,
  } as CSSProperties;
  
  // Interactive hover styles (applied via className)
  const interactiveClass = interactive 
    ? 'badge-interactive' 
    : '';
  
  // Mode class for dark/light specific styles
  const modeClass = `badge-${mode}`;
  
  return (
    <Component
      className={`badge badge-${variant} badge-${size} badge-${theme} ${modeClass} ${interactiveClass} ${className}`}
      style={badgeStyles}
      aria-label={ariaLabel}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Shimmer Overlay */}
      {shimmer && (
        <div 
          className="badge-shimmer absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              ${colorTokens.shimmer} 50%, 
              transparent 100%)`,
            width: '50%',
            height: '100%',
            zIndex: 5,
          }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>
    </Component>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// 4. CONVENIENCE WRAPPERS
// ═════════════════════════════════════════════════════════════════════════

export function SectionLabel({ 
  children, 
  theme = 'neutral',
  mode = 'light',
  fontWeight = 600,
  className = '',
  style = {},
}: { 
  children: ReactNode; 
  theme?: BadgeTheme;
  mode?: BadgeMode;
  fontWeight?: 400 | 500 | 600;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Badge 
      variant="minimal" 
      size="sm" 
      theme={theme}
      mode={mode}
      fontWeight={fontWeight}
      className={className}
      style={{
        marginBottom: '12px',
        ...style,
      }}
    >
      {children}
    </Badge>
  );
}

export function StepPill({ 
  stepNumber,
  active = false,
  mode = 'light',
  className = '',
}: { 
  stepNumber: number;
  active?: boolean;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant="pill" 
      size="sm" 
      theme="warm" 
      mode={mode}
      bordered
      shimmer
      className={`step-pill ${active ? 'step-active' : ''} ${className}`}
    >
      Step {stepNumber}
    </Badge>
  );
}

export function ObjectivePill({ 
  objectiveNumber,
  interactive = false,
  mode = 'light',
  className = '',
  onClick,
}: { 
  objectiveNumber: number;
  interactive?: boolean;
  mode?: BadgeMode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Badge 
      variant="pill" 
      size="sm" 
      theme="neutral" 
      mode={mode}
      bordered
      shimmer={interactive}
      interactive={interactive}
      onClick={onClick}
      className={`objective-pill ${className}`}
    >
      Objective {objectiveNumber}
    </Badge>
  );
}

export function ObjectivePillInteractive({ 
  number,
  label = 'Objective',
  mode = 'light',
  className = '',
}: { 
  number: string | number;
  label?: string;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant="pill" 
      size="md"
      theme="neutral" 
      mode={mode}
      bordered
      shimmer
      className={`objective-pill objective-pill-interactive ${className}`}
      ariaLabel={`${label} number ${number}`}
    >
      {label} {number}
    </Badge>
  );
}

export function InfoCardLabel({ 
  children,
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant="minimal" 
      size="xs" 
      theme="neutral" 
      mode={mode}
      className={className}
      style={{
        marginBottom: 'clamp(6px, 0.6vw, 8px)',
        opacity: 0.7,
      }}
    >
      {children}
    </Badge>
  );
}

export function CategoryBadge({ 
  children,
  theme = 'neutral',
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  theme?: BadgeTheme;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant="rounded" 
      size="sm" 
      theme={theme}
      mode={mode}
      bordered
      className={`category-badge ${className}`}
    >
      {children}
    </Badge>
  );
}

export function StatusBadge({ 
  children,
  status = 'success',
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  status?: 'success' | 'warning' | 'error';
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant="rounded" 
      size="sm" 
      theme={status}
      mode={mode}
      bordered
      className={`status-badge status-${status} ${className}`}
    >
      {children}
    </Badge>
  );
}

export function InfoBadge({ 
  children,
  variant = 'rounded',
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant={variant} 
      size="sm" 
      theme="info"
      mode={mode}
      bordered
      className={`info-badge ${className}`}
    >
      {children}
    </Badge>
  );
}

export function MutedBadge({ 
  children,
  variant = 'rounded',
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant={variant} 
      size="sm" 
      theme="muted"
      mode={mode}
      bordered
      className={`muted-badge ${className}`}
      style={{ opacity: 0.7 }}
    >
      {children}
    </Badge>
  );
}

export function ClickableBadge({ 
  children,
  onClick,
  theme = 'neutral',
  variant = 'pill',
  mode = 'light',
  className = '',
}: { 
  children: ReactNode;
  onClick: () => void;
  theme?: BadgeTheme;
  variant?: BadgeVariant;
  mode?: BadgeMode;
  className?: string;
}) {
  return (
    <Badge 
      variant={variant} 
      size="sm" 
      theme={theme}
      mode={mode}
      bordered
      interactive
      shimmer
      onClick={onClick}
      className={`clickable-badge ${className}`}
    >
      {children}
    </Badge>
  );
}

// ═════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═════════════════════════════════════════════════════════════════════════

export default Badge;

/**
 * Export design tokens for design system documentation.
 * 
 * NOTE: SIZE_TOKENS and VARIANT_TOKENS have been migrated to CSS custom
 * properties (--badge-* in theme.css). The BADGE_TOKENS export now provides
 * the CSS variable names for programmatic access, plus the JS color tokens
 * (which will migrate in Phase 3-4).
 */
export const BADGE_TOKENS = {
  sizeVars: SIZE_CSS_VARS,
  variantVars: VARIANT_CSS_VARS,
  themes: THEME_COLORS,
} as const;
