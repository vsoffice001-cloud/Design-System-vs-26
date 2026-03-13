/**
 * VS Design System — Component Library Exports
 * v4.2
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
export { Badge, SectionLabel } from './Badge';
export type { BadgeVariant, BadgeSize, BadgeTheme, BadgeMode, BadgeProps } from './Badge';
export { StepPill, ObjectivePill, ObjectivePillInteractive } from './Badge';
export { InfoCardLabel, CategoryBadge, StatusBadge, InfoBadge, MutedBadge, ClickableBadge } from './Badge';
export { BADGE_TOKENS } from './Badge';

export { Label } from './Label';
export type { LabelVariant } from './Label';

// 💡 ATOMS (v4.0 — Report Store)
export { Tooltip } from './Tooltip';
export { ViewToggle } from './ViewToggle';
export type { ViewMode } from './ViewToggle';
export { FadeInSection } from './FadeInSection';
export { FilterCheckbox } from './FilterCheckbox';
export { FilterChip } from './FilterChip';
export { FilterSearchInput } from './FilterSearchInput';
export { IconBadge } from './IconBadge';
export { CategoryListItem } from './CategoryListItem';

// 🧱 MOLECULES (v4.0 — Report Store)
export {
  IndustryBadge,
  CardMetaRow,
  CardFooterRow,
  ReportGridCard,
  HorizontalScroll,
  ScrollFade,
  AnalystPickCardB,
  StatCard,
  DataHighlightCard,
  EmptyState,
  BackToTop,
  SkeletonCard,
  CardReveal,
  RevealImage,
  FilterAccordion,
  SidebarPanel,
  ActiveFilterChip,
  CategoryListCard,
} from './molecules';
export type {
  CardMetaVariant,
  FilterAccordionVariant,
  ActiveFilterType,
  CategoryListCardItem,
  CategoryListCardProps,
} from './molecules';

// 🏛️ REPORT STORE ORGANISMS (v4.2)
export { ReportCard } from './ReportCard';
export type { ReportCardData, ReportCardVariant } from './ReportCard';
export { ReportStoreHero } from './ReportStoreHero';
export { FeaturedResearch } from './FeaturedResearch';
export { IndustrySectorsGrid } from './IndustrySectorsGrid';
export { IndustryReportSection } from './IndustryReportSection';
export { IndustrySidebar } from './IndustrySidebar';
export { FiltersPanel } from './FiltersPanel';
export { ListingContextBanner } from './ListingContextBanner';
export { MobileFilterSheet } from './MobileFilterSheet';
export { MobileFilterBar } from './MobileFilterBar';
export { CustomResearchCTA } from './CustomResearchCTA';
export { RecommendedForYou } from './RecommendedForYou';
export { AnalystPicks } from './AnalystPicks';
export { TrendingStatistics } from './TrendingStatistics';
export { DailyDataHighlights } from './DailyDataHighlights';
export { QuickAccess } from './QuickAccess';
export { TopDownloads } from './TopDownloads';
export { TrendingTopics } from './TrendingTopics';
export { ExploreByRegion } from './ExploreByRegion';
export { Testimonials } from './Testimonials';
export { UpcomingReports } from './UpcomingReports';
export { NewsletterSignup } from './NewsletterSignup';

// 📄 REPORT STORE TEMPLATE (v4.2)
// export { ReportStorePage } from './ReportStorePage';

// 🪝 HOOKS (v4.2 — Report Store)
export {
  useReportFilters,
  useProgressiveLoad,
  useCrossfade,
  useMountTransition,
} from './hooks';

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

// Resource System Components (Case Study)
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

// 📐 LAYOUT & SECTION COMPONENTS (v3.3, evolved v4.0)
export { SectionHeading } from './SectionHeading';
export { SectionWrapper } from './SectionWrapper';
export { Card } from './Card';
export type { CardVariant, CardPadding, CardShadow } from './Card';

// ⬆️ SCROLL COMPONENTS (v3.3)
export { ScrollToTop } from './ScrollToTop';
export { ScrollProgress } from './ScrollProgress';

// 🎨 ICON COLOR SYSTEM (v3.3)
export { iconColors, getIconColor } from './iconColors';
export type { IconColorType } from './iconColors';
export { industryIconMap } from './industryIconMap';

// Modal/Overlay Components
export { ContactModal } from './ContactModal';
export { StickyCTA } from './StickyCTA';
