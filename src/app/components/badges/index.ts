/**
 * DEPRECATED - BADGES & LABELS DESIGN SYSTEM
 * 
 * This directory is DEPRECATED. The badge system has been unified into:
 * -> /src/app/components/Badge.tsx
 * 
 * Please update your imports:
 * OLD: import { SectionLabel } from '@/app/components/badges';
 * NEW: import { SectionLabel } from '@/app/components/Badge';
 */

// Re-exports from new Badge system (backward compatibility)
export { Badge, Badge as default } from '../Badge';
export { SectionLabel, CategoryBadge as CategoryLabel } from '../Badge';
export { ObjectivePill, ObjectivePillInteractive } from '../Badge';
export { InfoCardLabel } from '../Badge';
export { StepPill } from '../Badge';
export { StatusBadge, CategoryBadge } from '../Badge';

// Type exports
export type { BadgeProps, BadgeVariant, BadgeSize, BadgeTheme, BadgeMode } from '../Badge';

// Legacy component exports (not part of Badge system, specific UI components)
export { InfoCard, HeroInfoCardGrid, StatCard } from './InfoCardLabel';
export type { InfoCardProps } from './InfoCardLabel';
export { SectionLabelWithHeading, PublicationDateLabel } from './SectionLabel';
export type { SectionLabelProps, SectionLabelWithHeadingProps } from './SectionLabel';
export { ObjectivePillGroup } from './ObjectivePill';

// Design tokens
export { BADGE_TOKENS, BADGE_TOKENS as SECTION_LABEL_TOKENS, BADGE_TOKENS as OBJECTIVE_PILL_TOKENS, BADGE_TOKENS as INFO_CARD_LABEL_TOKENS } from '../Badge';
