/**
 * ProductPageTemplate — Template (cross-pillar)
 *
 * Declarative page template for Product pages (Report Store, Surveys).
 * Accepts configuration objects for each section zone and renders
 * the full organism stack with optional bespoke sections injected
 * between fixed zones.
 */
import type { ReactNode } from 'react';
import { ProductHero, type ProductHeroProps } from './ProductHero';
import { FeaturedCarousel, type FeaturedCarouselProps } from './FeaturedCarousel';
import { StatsRow, type StatsRowProps } from './StatsRow';
import { BrowseGrid, type BrowseGridProps } from './BrowseGrid';
import { CTABanner, type CTABannerProps } from './CTABanner';

export interface ProductPageTemplateProps {
  hero: ProductHeroProps;
  featured: FeaturedCarouselProps;
  stats?: StatsRowProps;
  browse: BrowseGridProps<any>;
  cta: CTABannerProps;
  afterStats?: ReactNode;
  afterBrowse?: ReactNode;
  beforeCta?: ReactNode;
}

export function ProductPageTemplate({
  hero, featured, stats, browse, cta, afterStats, afterBrowse, beforeCta,
}: ProductPageTemplateProps) {
  return (
    <>
      <ProductHero {...hero} />
      <FeaturedCarousel {...featured} />
      {stats && <StatsRow {...stats} />}
      {afterStats}
      <BrowseGrid {...browse} />
      {afterBrowse}
      {beforeCta}
      <CTABanner {...cta} />
    </>
  );
}
