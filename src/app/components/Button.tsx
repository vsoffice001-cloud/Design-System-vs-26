import { ReactNode, useState, useRef, cloneElement, isValidElement } from 'react';
import { Loader2 } from 'lucide-react';
import { AnimatedArrow } from '@/app/components/AnimatedArrow';

/**
 * Button Component
 * 
 * A comprehensive, reusable button system following VS Design System principles.
 * Features: Shimmer effects (always active), animated arrows (urgency CTAs), 
 * ripple effects, multiple variants, sizes, and accessible states.
 * 
 * Design System Best Practices:
 * - ✅ Prop-driven API for maximum flexibility
 * - ✅ Accessible (ARIA labels, focus states, keyboard navigation)
 * - ✅ Motion respect (prefers-reduced-motion support)
 * - ✅ Consistent token usage (CSS variables from theme.css)
 * - ✅ Separated concerns (shimmer hook, AnimatedArrow component)
 * 
 * Signature Interactions:
 * - Shimmer: ALWAYS active on all buttons (right-to-left sweep on hover)
 * - Arrow: ONLY for urgency CTAs (forms, redirects with time pressure)
 * 
 * @param variant - Visual style: 'primary' | 'secondary' | 'ghost' | 'brand'
 * @param size - Button size: 'sm' | 'md' | 'lg' | 'xl'
 * @param background - Context: 'light' | 'dark' (affects secondary/ghost colors)
 * @param fullWidth - Expand to full container width
 * @param icon - Optional icon element (left or right)
 * @param iconPosition - Icon placement: 'left' | 'right'
 * @param iconOnly - Icon-only mode (square button, no text)
 * @param loading - Show loading spinner
 * @param disabled - Disabled state
 * @param ripple - Material-style ripple effect on click
 * @param shimmerDuration - Shimmer animation duration in ms (default: 700)
 * @param showArrow - Show AnimatedArrow for urgency CTAs (default: false)
 * @param onClick - Click handler
 * @param className - Additional CSS classes
 * @param type - HTML button type
 * @param ariaLabel - Accessibility label
 * 
 * @example
 * ```tsx
 * // Primary CTA with arrow (urgency)
 * <Button variant="brand" showArrow onClick={handleSubmit}>
 *   Get Started
 * </Button>
 * 
 * // Secondary button with icon
 * <Button variant="secondary" icon={<Download />}>
 *   Download
 * </Button>
 * 
 * // Icon-only button
 * <Button variant="ghost" iconOnly icon={<Settings />} ariaLabel="Settings" />
 * ```
 */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'brand';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonBackground = 'light' | 'dark';

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  background?: ButtonBackground;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  shimmerDuration?: number;
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

interface RippleType {
  x: number;
  y: number;
  size: number;
  key: number;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md', // Changed from 'lg' to 'md' as base default
  background = 'light',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  iconOnly = false,
  loading = false,
  disabled = false,
  ripple = true,
  shimmerDuration = 700,
  showArrow = false,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const [ripples, setRipples] = useState<RippleType[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Icon sizing based on button size
  const iconSizeMap = {
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
  };
  const iconSize = iconSizeMap[size];

  // Gap spacing based on button size
  const gapMap = {
    sm: 'gap-1.5',
    md: 'gap-2',
    lg: 'gap-2.5',
    xl: 'gap-3',
  };
  const gapSize = gapMap[size];

  // Arrow color based on variant
  const getArrowColor = () => {
    if (variant === 'primary' || variant === 'brand') return 'white';
    if (variant === 'secondary') {
      if (background === 'dark') return 'white';
      return isHovering ? 'var(--brand-red)' : 'rgba(0,0,0,0.7)';
    }
    if (variant === 'ghost') return background === 'dark' ? 'white' : 'black';
    return 'black';
  };

  // Handle ripple effect
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple || disabled || loading) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: RippleType = {
      x,
      y,
      size,
      key: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 600);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (onClick && !disabled && !loading) {
      onClick();
    }
  };

  // Base styles
  const baseStyles = `group relative inline-flex items-center justify-center ${gapSize} font-medium tracking-[0.0875px] transition-all duration-300 rounded-[5px] overflow-hidden whitespace-nowrap`;
  
  // Size variants
  const sizeStyles = {
    sm: iconOnly 
      ? 'w-[var(--button-height-sm)] h-[var(--button-height-sm)] p-0' 
      : 'px-[var(--button-px-sm)] h-[var(--button-height-sm)] min-w-[var(--button-min-width-sm)]',
    md: iconOnly 
      ? 'w-[var(--button-height-md)] h-[var(--button-height-md)] p-0' 
      : 'px-[var(--button-px-md)] h-[var(--button-height-md)] min-w-[var(--button-min-width-md)]',
    lg: iconOnly 
      ? 'w-[var(--button-height-lg)] h-[var(--button-height-lg)] p-0' 
      : 'px-[var(--button-px-lg)] h-[var(--button-height-lg)] min-w-[var(--button-min-width-lg)]',
    xl: iconOnly 
      ? 'w-[var(--button-height-xl)] h-[var(--button-height-xl)] p-0' 
      : 'px-[var(--button-px-xl)] h-[var(--button-height-xl)]',
  };
  
  const fontSizeStyles = {
    sm: { fontSize: 'var(--button-font-sm)' },
    md: { fontSize: 'var(--button-font-md)' },
    lg: { fontSize: 'var(--button-font-md)' },
    xl: { fontSize: 'var(--button-font-lg)' },
  };
  
  // Variant styles
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return 'text-white disabled:opacity-50';
    }
    if (variant === 'brand') {
      return 'text-white disabled:opacity-50';
    }
    if (variant === 'secondary') {
      if (background === 'dark') {
        return 'bg-white/10 text-white border border-white/30 hover:border-white hover:bg-white/[0.15] active:bg-white/[0.2] disabled:border-white/10 disabled:text-white/40';
      }
      return 'bg-white border disabled:text-black/40';
    }
    if (variant === 'ghost') {
      if (background === 'dark') {
        return 'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:bg-white/10 disabled:border-white/10 disabled:text-white/40';
      }
      return 'bg-transparent text-black border border-black/20 hover:border-black/40 hover:bg-black/5 active:bg-black/10 disabled:border-black/10 disabled:text-black/40';
    }
    return '';
  };

  const variantStyles = getVariantStyles();
  
  // Background gradients
  const primaryBgStyle = variant === 'primary' ? {
    ...fontSizeStyles[size],
    backgroundImage: 'linear-gradient(90deg, #141016, #656565, #141016)',
    boxShadow: isHovering ? '0 4px 12px rgba(0, 0, 0, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.15)'
  } : {};

  const brandBgStyle = variant === 'brand' ? { 
    ...fontSizeStyles[size],
    backgroundImage: 'linear-gradient(90deg, #b01f24, #eb484e, #b01f24)',
    boxShadow: isHovering ? '0 12px 32px rgba(176, 31, 36, 0.25)' : '0 4px 16px rgba(176, 31, 36, 0.15)'
  } : {};

  const secondaryGhostStyle = (variant === 'secondary' || variant === 'ghost') ? {
    ...fontSizeStyles[size],
    ...(variant === 'secondary' && background !== 'dark' ? {
      color: isHovering ? 'var(--brand-red)' : 'rgba(0,0,0,0.7)',
      borderColor: isHovering ? 'var(--brand-red)' : 'rgba(0,0,0,0.12)',
      boxShadow: isHovering 
        ? '0 4px 16px rgba(176, 31, 36, 0.12)' 
        : '0 2px 8px rgba(0,0,0,0.04)',
      transition: 'color 300ms ease-out, border-color 300ms ease-out, box-shadow 300ms ease-out',
    } : {}),
  } : {};
  
  const inlineStyle = variant === 'primary' ? primaryBgStyle : variant === 'brand' ? brandBgStyle : secondaryGhostStyle;
  
  const widthStyles = fullWidth ? 'w-full' : iconOnly ? '' : 'w-full sm:w-auto';
  const stateStyles = (disabled || loading) ? 'cursor-not-allowed' : 'cursor-pointer';
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles} ${widthStyles} ${stateStyles} ${className}`;
  
  // Spinner component
  const Spinner = () => (
    <Loader2 
      size={iconSize}
      strokeWidth={2.5}
      className="animate-spin flex-shrink-0" 
    />
  );

  // Icon wrapper
  const IconWrapper = ({ children }: { children: ReactNode }) => {
    if (isValidElement(children)) {
      return cloneElement(children as React.ReactElement<any>, {
        size: iconSize,
        strokeWidth: 2,
        className: 'flex-shrink-0'
      });
    }
    return <span className="inline-flex items-center flex-shrink-0">{children}</span>;
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedStyles}
      style={inlineStyle}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      
      {/* ✨ SHIMMER EFFECT - ALWAYS ACTIVE - Absolute overlay that slides left on hover */}
      {(variant === 'primary' || variant === 'brand') && (
        <div
          className={`absolute inset-0 w-[200%] bg-gradient-to-r pointer-events-none transition-transform ease-out motion-reduce:transition-none ${
            variant === 'brand' 
              ? 'from-[#b01f24] via-[#eb484e] to-[#b01f24]' 
              : 'from-[#141016] via-[#656565] to-[#141016]'
          } ${isHovering ? '-translate-x-1/2' : 'translate-x-0'}`}
          style={{ transitionDuration: `${shimmerDuration}ms` }}
        />
      )}
      
      {/* ✨ SHIMMER EFFECT - SECONDARY VARIANT - Neutral → Brand Red on hover */}
      {variant === 'secondary' && (
        <div
          className={`absolute inset-0 w-[200%] pointer-events-none transition-transform ease-out motion-reduce:transition-none ${isHovering ? '-translate-x-1/2' : 'translate-x-0'}`}
          style={{ 
            transitionDuration: `${shimmerDuration}ms`,
            backgroundImage: isHovering 
              ? `linear-gradient(to right, transparent, rgba(176, 31, 36, 0.08), transparent)`
              : `linear-gradient(to right, transparent, ${background === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.8)'}, transparent)`
          }}
        />
      )}
      
      {variant === 'ghost' && (
        <div
          className={`absolute inset-0 w-[200%] pointer-events-none transition-transform ease-out motion-reduce:transition-none ${
            background === 'dark'
              ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
              : 'bg-gradient-to-r from-transparent via-black/10 to-transparent'
          } ${isHovering ? '-translate-x-1/2' : 'translate-x-0'}`}
          style={{ transitionDuration: `${shimmerDuration}ms` }}
        />
      )}
      
      {/* Loading Spinner */}
      {loading && (
        <span className="relative z-10">
          <Spinner />
        </span>
      )}
      
      {/* Left Icon */}
      {!loading && (icon || showArrow) && iconPosition === 'left' && (
        <span className="relative z-10 flex items-center">
          {showArrow ? (
            <AnimatedArrow size={iconSize} color={getArrowColor()} isHovered={isHovering} />
          ) : (
            <IconWrapper>{icon}</IconWrapper>
          )}
        </span>
      )}
      
      {/* Button Text */}
      {!iconOnly && children && (
        <span className="relative z-10 inline-flex items-center whitespace-nowrap">
          {children}
        </span>
      )}
      
      {/* Icon Only */}
      {iconOnly && !loading && (icon || showArrow) && (
        <span className="relative z-10 flex items-center justify-center">
          {showArrow ? (
            <AnimatedArrow size={iconSize} color={getArrowColor()} isHovered={isHovering} />
          ) : (
            <IconWrapper>{icon}</IconWrapper>
          )}
        </span>
      )}
      
      {/* Right Icon */}
      {!loading && (icon || showArrow) && iconPosition === 'right' && !iconOnly && (
        <span className="relative z-10 flex items-center">
          {showArrow ? (
            <AnimatedArrow size={iconSize} color={getArrowColor()} isHovered={isHovering} />
          ) : (
            <IconWrapper>{icon}</IconWrapper>
          )}
        </span>
      )}

      {/* Focus Ring */}
      <span className="absolute inset-0 rounded-[5px] ring-2 ring-black ring-offset-2 opacity-0 focus-visible:opacity-100 pointer-events-none" />
    </button>
  );
}