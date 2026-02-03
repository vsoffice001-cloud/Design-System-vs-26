import { ReactNode, useState, useRef, cloneElement, isValidElement } from 'react';
import { Loader2, ArrowUpRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'brand';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonBackground = 'light' | 'dark';

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  background?: ButtonBackground; // Control button appearance based on background color
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  shimmerDuration?: number; // Shimmer animation duration in ms (default: 700) - Shimmer is ALWAYS active as brand identity
  animatedArrow?: boolean; // Enable looping arrow animation for urgency CTAs (form redirects, page navigation) - Uses hardcoded ArrowUpRight icon
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
  size = 'lg',
  background = 'light',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  iconOnly = false,
  loading = false,
  disabled = false,
  ripple = true,
  shimmerDuration = 700,
  animatedArrow = false,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const [ripples, setRipples] = useState<RippleType[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 🎯 IMPROVED: Icon sizing based on button size with optical correction
  // Using slightly larger icons for better visual balance
  const iconSizeMap = {
    sm: 16,  // 40px button height → 16px icon (40% of height)
    md: 18,  // 48px button height → 18px icon (37.5% of height)
    lg: 20,  // 56px button height → 20px icon (35.7% of height)
    xl: 24,  // 64px button height → 24px icon (37.5% of height)
  };
  const iconSize = iconSizeMap[size];

  // 🎯 IMPROVED: Gap spacing based on button size for optical balance
  // Smaller buttons need proportionally smaller gaps
  const gapMap = {
    sm: 'gap-1.5',    // 6px
    md: 'gap-2',      // 8px
    lg: 'gap-2.5',    // 10px
    xl: 'gap-3',      // 12px
  };
  const gapSize = gapMap[size];

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

    // Remove ripple after animation
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

  // Base styles - always applied with dynamic gap
  const baseStyles = `group relative inline-flex items-center justify-center ${gapSize} font-medium tracking-[0.0875px] transition-all duration-300 rounded-[5px] overflow-hidden whitespace-nowrap`;
  
  // Size variants using CSS custom properties
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
  
  // 🎯 NEW: Background-aware variant styles
  // Primary and brand work on any background
  // Secondary and ghost adapt based on background prop
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return 'text-white disabled:opacity-50';
    }
    if (variant === 'brand') {
      return 'text-white disabled:opacity-50';
    }
    if (variant === 'secondary') {
      // Secondary adapts to background
      if (background === 'dark') {
        return 'bg-white/10 text-white border border-white/20 hover:border-white/40 hover:bg-white/[0.15] active:bg-white/[0.2] disabled:border-white/10 disabled:text-white/40';
      }
      return 'bg-white text-black border border-black/20 hover:border-black/40 hover:bg-black/[0.02] active:bg-black/[0.04] disabled:border-black/10 disabled:text-black/40';
    }
    if (variant === 'ghost') {
      // Ghost adapts to background
      if (background === 'dark') {
        return 'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:bg-white/10 disabled:border-white/10 disabled:text-white/40';
      }
      return 'bg-transparent text-black border border-black/20 hover:border-black/40 hover:bg-black/5 active:bg-black/10 disabled:border-black/10 disabled:text-black/40';
    }
    return '';
  };

  const variantStyles = getVariantStyles();
  
  // Primary variant needs special background handling with dark-to-grey gradient
  const primaryBgStyle = variant === 'primary' ? {
    ...fontSizeStyles[size],
    backgroundImage: 'linear-gradient(90deg, #0a0a0a, #6a6a6a)',
    backgroundSize: '200% 200%',
    backgroundPosition: isHovering ? '100% 50%' : '0% 50%',
    transition: 'background-position 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isHovering ? '0 4px 12px rgba(0, 0, 0, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.15)'
  } : {};

  // Brand variant needs special background handling with gradient
  const brandBgStyle = variant === 'brand' ? { 
    ...fontSizeStyles[size],
    backgroundImage: 'linear-gradient(90deg, var(--red-700), var(--red-500))',
    backgroundSize: '200% 200%',
    backgroundPosition: isHovering ? '100% 50%' : '0% 50%',
    transition: 'background-position 0.3s ease, transform 0.2s ease',
    boxShadow: isHovering ? '0 12px 32px rgba(176, 31, 36, 0.25)' : '0 4px 16px rgba(176, 31, 36, 0.15)'
  } : {};

  // For secondary and ghost, include fontSize in the inline style to avoid conflicts
  const secondaryGhostStyle = (variant === 'secondary' || variant === 'ghost') ? fontSizeStyles[size] : {};

  // Combine gradient styles
  const inlineStyle = variant === 'primary' ? primaryBgStyle : variant === 'brand' ? brandBgStyle : secondaryGhostStyle;
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : iconOnly ? '' : 'w-full sm:w-auto';
  
  // Disabled/Loading styles
  const stateStyles = (disabled || loading) ? 'cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles} ${widthStyles} ${stateStyles} ${className}`;
  
  // 🎯 IMPROVED: Spinner with proper sizing
  const Spinner = () => (
    <Loader2 
      size={iconSize}
      strokeWidth={2.5}
      className="animate-spin flex-shrink-0" 
    />
  );

  // 🎯 IMPROVED: Icon wrapper with consistent sizing and alignment
  const IconWrapper = ({ children }: { children: ReactNode }) => {
    // Clone icon element and ensure consistent size
    if (isValidElement(children)) {
      return cloneElement(children as React.ReactElement<any>, {
        size: iconSize,
        strokeWidth: 2,
        className: 'flex-shrink-0'
      });
    }
    return <span className="inline-flex items-center flex-shrink-0">{children}</span>;
  };

  // 🎯 NEW: Animated Arrow - Hardcoded ArrowUpRight with diagonal loop animation (3-ARROW SYSTEM)
  // When animatedArrow prop is true, this creates THREE hardcoded ArrowUpRight icons in a continuous cascade
  // Arrow 1: Visible at center → exits top-right
  // Arrow 2: Hidden at bottom-left → enters center → exits top-right
  // Arrow 3: Hidden at bottom-left → enters center (takes Arrow 1's place)
  // Duration: 1000ms total cycle with staggered timing for continuous flow
  // Movement: 20px diagonal (translate-5), Always uses ArrowUpRight icon
  const AnimatedArrowWrapper = () => (
    <span className="relative inline-flex items-center justify-center shrink-0" style={{ width: iconSize, height: iconSize }}>
      {/* Arrow 1: Starts visible at center, exits top-right first */}
      <ArrowUpRight 
        size={iconSize}
        strokeWidth={2}
        className="absolute transition-none
                   group-hover:animate-arrow-1-cascade"
      />
      {/* Arrow 2: Starts hidden at bottom-left, enters to center, then exits top-right */}
      <ArrowUpRight 
        size={iconSize}
        strokeWidth={2}
        className="absolute transition-none
                   -translate-x-5 translate-y-5 opacity-0
                   group-hover:animate-arrow-2-cascade"
      />
      {/* Arrow 3: Starts hidden at bottom-left (behind Arrow 2), enters to center last */}
      <ArrowUpRight 
        size={iconSize}
        strokeWidth={2}
        className="absolute transition-none
                   -translate-x-5 translate-y-5 opacity-0
                   group-hover:animate-arrow-3-cascade"
      />
    </span>
  );

  // 🎯 NEW: Shimmer gradient configurations by variant (background-aware)
  const getShimmerGradient = () => {
    if (variant === 'brand') {
      return 'bg-gradient-to-r from-[#b01f24] via-[#eb484e] to-[#b01f24]';
    }
    if (variant === 'primary') {
      return 'bg-gradient-to-r from-[#141016] via-[#656565] to-[#141016]';
    }
    if (variant === 'secondary') {
      if (background === 'dark') {
        return 'bg-gradient-to-r from-white/10 via-white/30 to-white/10';
      }
      // Light background: Subtle warm amber shimmer
      // Uses white → #fef7f0 (warm amber-100) → white
      // UX: Soft, warm, non-dominant - elegant refinement
      return 'bg-gradient-to-r from-white via-[#fef7f0] to-white';
    }
    if (variant === 'ghost') {
      if (background === 'dark') {
        return 'bg-gradient-to-r from-transparent via-white/20 to-transparent';
      }
      return 'bg-gradient-to-r from-transparent via-black/20 to-transparent';
    }
    return '';
  };

  const shimmerGradient = getShimmerGradient();

  return (
    <button 
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={combinedStyles}
      style={inlineStyle}
      aria-label={ariaLabel || (iconOnly ? 'Button' : undefined)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Shimmer Effect Layer */}
      {shimmerGradient && (
        <div
          className={`absolute inset-0 w-[200%] ${shimmerGradient} 
            transition-transform ease-out pointer-events-none 
            group-hover:-translate-x-1/2 motion-reduce:transition-none motion-reduce:transform-none`}
          style={{ transitionDuration: `${shimmerDuration}ms` }}
        />
      )}

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: variant === 'primary' || variant === 'brand' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)',
            animation: 'ripple 600ms ease-out',
          }}
        />
      ))}

      {/* Loading State - Left Icon Position */}
      {loading && iconPosition === 'left' && (
        <span className="relative z-10">
          <Spinner />
        </span>
      )}
      
      {/* Left Icon */}
      {!loading && (icon || animatedArrow) && iconPosition === 'left' && (
        <span className="relative z-10 overflow-visible">
          {animatedArrow ? <AnimatedArrowWrapper /> : <IconWrapper>{icon}</IconWrapper>}
        </span>
      )}
      
      {/* Text Content */}
      {!iconOnly && (
        <span className={`relative z-10 inline-flex items-center ${loading ? 'opacity-70' : ''}`}>
          {children}
        </span>
      )}
      
      {/* Icon Only */}
      {iconOnly && !loading && (icon || animatedArrow) && (
        <span className="relative z-10 overflow-visible">
          {animatedArrow ? <AnimatedArrowWrapper /> : <IconWrapper>{icon}</IconWrapper>}
        </span>
      )}
      
      {/* Loading State - Icon Only */}
      {iconOnly && loading && (
        <span className="relative z-10">
          <Spinner />
        </span>
      )}
      
      {/* Right Icon */}
      {!loading && (icon || animatedArrow) && iconPosition === 'right' && !iconOnly && (
        <span className="relative z-10 overflow-visible">
          {animatedArrow ? <AnimatedArrowWrapper /> : <IconWrapper>{icon}</IconWrapper>}
        </span>
      )}

      {/* Loading State - Right Icon Position */}
      {loading && iconPosition === 'right' && !iconOnly && (
        <span className="relative z-10">
          <Spinner />
        </span>
      )}
    </button>
  );
}