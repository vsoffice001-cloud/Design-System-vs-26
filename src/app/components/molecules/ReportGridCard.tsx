/**
 * ReportGridCard — Organism
 * DS card anatomy: image → industry badge → title → meta row → footer
 */
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { IndustryBadge } from '@/app/components/molecules/IndustryBadge';
import { CardMetaRow } from '@/app/components/molecules/CardMetaRow';
import { CardFooterRow } from '@/app/components/molecules/CardFooterRow';
import type { ReactNode } from "react";
import type { CardMetaVariant } from '@/app/components/molecules/CardMetaRow';
import { Card } from '@/app/components/Card';

interface ReportGridCardProps {
  id: string;
  image: string;
  title: string;
  industry: string;
  subcat?: string;
  projection?: string | null;
  region: string;
  date: string;
  onClick?: (id: string) => void;
  overlayBadge?: ReactNode;
  aspectRatio?: string;
  className?: string;
  metaVariant?: CardMetaVariant;
}

export function ReportGridCard({ id, image, title, industry, subcat, projection, region, date, onClick, overlayBadge, aspectRatio = "16/9", className, metaVariant = "A" }: ReportGridCardProps) {
  return (
    <Card hover className={`group cursor-pointer overflow-hidden flex flex-col ${className || ""}`} onClick={() => onClick?.(id)}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover img-zoom" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/12 to-transparent pointer-events-none" />
        {overlayBadge}
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        <IndustryBadge>{subcat || industry}</IndustryBadge>
        <h4 className="text-black/85 group-hover:text-black transition-colors line-clamp-2 leading-snug" style={{ fontSize: "var(--text-nav)" }}>
          {title}
        </h4>
        <CardMetaRow projection={metaVariant === "A" ? projection : null} region={region} date={metaVariant === "B" ? date : undefined} variant={metaVariant} />
        {metaVariant === "A" && <CardFooterRow date={date} />}
      </div>
    </Card>
  );
}
