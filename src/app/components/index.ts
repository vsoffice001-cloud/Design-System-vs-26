/**
 * VS Design System - Component Library Exports
 * 
 * Centralized export file for all design system components.
 * Import components using: import { Button, CTALink, InlineLink } from '@/app/components'
 */

// 🎯 CORE INTERACTIVE COMPONENTS (Link & CTA System)
export { Button } from './Button';
export type { ButtonVariant, ButtonSize, ButtonBackground } from './Button';

export { CTALink } from './CTALink';
export type { CTALinkVariant, CTALinkSize } from './CTALink';

export { InlineLink } from './InlineLink';

// Animation Components
export { AnimatedArrow } from './AnimatedArrow';

// 🏷️ BADGE & LABEL SYSTEM
// Badge.tsx: Unified component for Badges, Section Labels, and Chapter Labels
export { Badge, SectionLabel } from './Badge';
export type { BadgeVariant, BadgeSize, BadgeTheme, BadgeMode, BadgeProps } from './Badge';
// Convenience wrappers (pre-configured Badge patterns)
export { StepPill, ObjectivePill, ObjectivePillInteractive } from './Badge';
export { InfoCardLabel, CategoryBadge, StatusBadge, InfoBadge, MutedBadge, ClickableBadge } from './Badge';
export { BADGE_TOKENS } from './Badge';

// Label.tsx: Semantic <label> for forms (NOT for section headers)
export { Label } from './Label';
export type { LabelVariant } from './Label';

// Demo/Testing Components
export { LinkSystemDemo } from './LinkSystemDemo';
export { ButtonDocumentation } from './ButtonDocumentation';
export { AnimatedArrowDemo } from './AnimatedArrowDemo';
export { ShimmerDemo } from './ShimmerDemo';

// Layout Components
export { Navbar } from './Navbar';
export { DesignSystemDashboard } from './DesignSystemDashboard';
export { DesignSystemSidebar } from './DesignSystemSidebar';

// Content Components
export { FoundationsContent } from './FoundationsContent';
export { ComponentsContent } from './ComponentsContent';
export { PatternsContent } from './PatternsContent';
export { MotionContent } from './MotionContent';
export { GuidelinesContent } from './GuidelinesContent';
export { ResourcesContent } from './ResourcesContent';

// Utility Components
export { CodeBlockWithCopy } from './CodeBlockWithCopy';
export { CollapsibleSection } from './CollapsibleSection';
export { VariantSwitcher } from './VariantSwitcher';
export { ReadingProgressBar } from './ReadingProgressBar';
export { TableOfContents } from './TableOfContents';

// Modal/Overlay Components
export { ContactModal } from './ContactModal';
export { StickyCTA } from './StickyCTA';