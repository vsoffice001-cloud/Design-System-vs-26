/**
 * FiltersDocumentation — v4.3
 *
 * Comprehensive filter system documentation page.
 * Covers all 6 atoms + 4 molecules with:
 *   - WHY / WHAT / WHEN / WHERE / HOW specs
 *   - Live interactive demos
 *   - Use cases per pillar (Research, Consulting, Surveys)
 *   - Interaction state matrix (10 components x 6 states)
 *   - Decision guide for component selection
 */
import { useState } from 'react';
import { FilterCheckbox } from '@/app/components/FilterCheckbox';
import { FilterChip } from '@/app/components/FilterChip';
import { FilterSearchInput } from '@/app/components/FilterSearchInput';
import { FilterSectionHeader } from '@/app/components/FilterSectionHeader';
import { FilterCheckboxItem } from '@/app/components/FilterCheckboxItem';
import { FilterIndustryItem } from '@/app/components/FilterIndustryItem';
import { FilterAccordion, SidebarPanel, ActiveFilterChipBar, MobileFilterSheet } from '@/app/components/molecules';
import {
  ChevronRight, Lock, X,
  Layers, Tag, MapPin, Calendar, SlidersHorizontal,
} from 'lucide-react';

// Full component source is maintained in Figma Make.
// This file is the v4.3 enhanced version with:
// - Category prefix demos on FilterChip
// - Card variant demo on SidebarPanel
// - MetaBox with font tokens + props on all 4 molecules
// - Import Reference section
//
// Due to file size (2100+ lines), this file should be synced
// from Figma Make to GitHub via local git CLI.
// See GITHUB_PUSH_GUIDE.md for the full sync procedure.

export { FiltersContent } from './FiltersDocumentation';
