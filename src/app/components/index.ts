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
export { Container } from './Container';
export { Navbar } from './Navbar';
export { DesignSystemDashboard } from './DesignSystemDashboard';
export { DesignSystemSidebar } from './DesignSystemSidebar';

// Resource System Components
export { ResourceCard } from './ResourceCard';
export { SubtleVariantSwitcher } from './SubtleVariantSwitcher';

// Case Study Section Components (Organisms)
export { HeroSection } from './HeroSection';
export { ClientContextSection } from './ClientContextSection';
export { ChallengesSection } from './ChallengesSection';
export { EngagementObjectivesSection } from './EngagementObjectivesSection';
export { MethodologySection } from './MethodologySection';
export { ImpactSection } from './ImpactSection';
export { ValuePillarsSection } from './ValuePillarsSection';
export { TestimonialSection } from './TestimonialSection';
export { ResourcesSection } from './ResourcesSection';
export { FinalCTASection } from './FinalCTASection';
export { NextSectionCTA } from './NextSectionCTA';

// Content Components — Foundations
export {
  DocSection,
  ColorsContent,
  TypographyContent,
  SpacingContent,
  LayoutGridContent,
  ElevationContent,
  BorderRadiusContent
} from './FoundationsContent';
// Re-exported "All Tokens" pages (originally from their own files, barrel-exported via FoundationsContent)
export {
  AllColorsPaletteContent,
  AllTypographyTokensContent,
  AllSpacingTokensContent,
  AllLayoutGridTokensContent,
  AllElevationTokensContent,
  AllBorderRadiusTokensContent
} from './FoundationsContent';

// Content Components — Components
export {
  FormInputsContent,
  CardsContent,
  NavigationContent,
  FeedbackContent,
  IconsContent
} from './ComponentsContent';
// Re-exported documentation pages (originally from their own files, barrel-exported via ComponentsContent)
export {
  ButtonDocumentation as ButtonDocumentationPage,
  LinksDocumentation as LinksDocumentationPage,
  BadgeLabelsDocumentation as BadgeLabelsDocumentationPage
} from './ComponentsContent';

// Content Components — Patterns
export {
  PageLayoutsContent,
  ContentPatternsContent,
  BackgroundsContent
} from './PatternsContent';

// Content Components — Motion
export {
  MotionPrinciplesContent,
  DurationScaleContent,
  TransitionsContent,
  MicroInteractionsContent
} from './MotionContent';

// Content Components — Guidelines
export {
  AccessibilityContent,
  ResponsiveDesignContent,
  BestPracticesContent
} from './GuidelinesContent';

// Content Components — Resources
export {
  DownloadsContent,
  CodeSnippetsContent,
  DesignTokensContent
} from './ResourcesContent';

// Utility Components
export { CodeBlockWithCopy } from './CodeBlockWithCopy';
export { CollapsibleSection } from './CollapsibleSection';
export { VariantSwitcher } from './VariantSwitcher';
export { ReadingProgressBar } from './ReadingProgressBar';
export { TableOfContents } from './TableOfContents';

// Modal/Overlay Components
export { ContactModal } from './ContactModal';
export { StickyCTA } from './StickyCTA';