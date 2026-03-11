/**
 * ActiveFilterChip — Atom
 * DS-compliant removable chip showing an active filter value.
 * Used in filter context banners, active filter strips, and any
 * "selected tags" display area.
 *
 * Color-coded by filter type:
 *   search:      Neutral gray
 *   subIndustry: Purple tint
 *   tag:         Green tint
 *   region:      Blue tint
 *   year:        Amber tint
 *
 * Interaction States:
 *   Default:     Type-colored bg + border, 70% text
 *   Hover (X):   X button bg darkens from 6% to 15%
 *   Focus-Visible: 2px solid brand-red ring on the whole chip
 */
import { X } from "lucide-react";

export type FilterType = "search" | "subIndustry" | "tag" | "region" | "year";

export interface ActiveFilterChipProps {
  /** Filter type — determines color */
  type: FilterType;
  /** Display label */
  label: string;
  /** Remove callback */
  onRemove: () => void;
  /** Additional className */
  className?: string;
}

const chipStyles: Record<FilterType, { bg: string; border: string }> = {
  search:      { bg: "rgba(0,0,0,0.04)",        border: "rgba(0,0,0,0.1)" },
  subIndustry: { bg: "rgba(128,108,224,0.06)",   border: "rgba(128,108,224,0.14)" },
  tag:         { bg: "rgba(16,185,129,0.06)",    border: "rgba(16,185,129,0.14)" },
  region:      { bg: "rgba(59,130,246,0.06)",    border: "rgba(59,130,246,0.14)" },
  year:        { bg: "rgba(245,158,11,0.06)",    border: "rgba(245,158,11,0.14)" },
};

const chipLabels: Record<FilterType, string> = {
  search: "Search",
  subIndustry: "Sub-Industry",
  tag: "Tag",
  region: "Region",
  year: "Year",
};

export function ActiveFilterChip({
  type,
  label,
  onRemove,
  className,
}: ActiveFilterChipProps) {
  const style = chipStyles[type];

  return (
    <span
      className={`inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)] focus-visible:ring-offset-1 ${className || ""}`}
      style={{
        fontSize: "var(--text-2xs)",
        background: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: "var(--radius-element, 5px)",
        color: "rgba(0,0,0,0.7)",
      }}
      tabIndex={0}
    >
      <span
        className="uppercase tracking-[0.05em] flex-shrink-0"
        style={{ fontSize: "var(--badge-xs-font, 10px)", color: "rgba(0,0,0,0.3)" }}
      >
        {chipLabels[type]}
      </span>
      <span className="truncate" style={{ maxWidth: "180px" }}>
        {label}
      </span>
      <button
        className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full transition-all ml-0.5 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)]"
        style={{ background: "rgba(0,0,0,0.06)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(0,0,0,0.06)";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        aria-label={`Remove ${chipLabels[type]} filter: ${label}`}
      >
        <X className="h-2.5 w-2.5" color="rgba(0,0,0,0.45)" />
      </button>
    </span>
  );
}
