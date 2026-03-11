/**
 * FilterChip — Atom
 * DS-compliant toggle chip for mobile filter sheets, tag selectors,
 * and any multi-select choice group.
 *
 * Interaction States:
 *   Default:    White bg, 8% border, 55% text, normal weight
 *   Hover:      4% bg tint, 14% border
 *   Active:     6% bg, 20% border, shadow-sm, 600 weight, Check icon prefix
 *   Active+Hover: 8% bg
 *   Focus-Visible: 2px solid brand-red ring, 2px offset
 *   Pressed:   Active:scale(0.97) via Tailwind
 *
 * Touch target: min-h-[40px] for mobile compliance (44px with padding).
 */
import { Check } from "lucide-react";

export interface FilterChipProps {
  /** Display label */
  label: string;
  /** Controlled active state */
  active: boolean;
  /** Toggle callback */
  onToggle: () => void;
  /** Optional count displayed after label */
  count?: number | string;
  /** Additional className */
  className?: string;
}

export function FilterChip({
  label,
  active,
  onToggle,
  count,
  className,
}: FilterChipProps) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 px-3 py-2 transition-all min-h-[40px] outline-none active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)] focus-visible:ring-offset-2 ${
        active ? "shadow-sm" : ""
      } ${className || ""}`}
      style={{
        fontSize: "var(--text-xs)",
        borderRadius: "var(--radius-element, 5px)",
        border: `1px solid ${
          active ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.08)"
        }`,
        background: active ? "rgba(0,0,0,0.06)" : "white",
        color: active ? "var(--text-primary, #1a1a1c)" : "rgba(0,0,0,0.55)",
        fontWeight: active ? 600 : 400,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = active
          ? "rgba(0,0,0,0.08)"
          : "rgba(0,0,0,0.04)";
        if (!active) {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(0,0,0,0.14)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = active
          ? "rgba(0,0,0,0.06)"
          : "white";
        if (!active) {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(0,0,0,0.08)";
        }
      }}
      onClick={onToggle}
    >
      {active && <Check className="h-3 w-3 flex-shrink-0" />}
      <span className="truncate">{label}</span>
      {count != null && (
        <span
          className="text-black/25 tabular-nums flex-shrink-0"
          style={{ fontSize: "var(--text-2xs)" }}
        >
          {count}
        </span>
      )}
    </button>
  );
}
