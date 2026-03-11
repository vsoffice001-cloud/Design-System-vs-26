/**
 * FilterSearchInput — Atom
 * DS-compliant compact search input for sidebar filters, TOC search,
 * and any panel-level search-within-content.
 *
 * Interaction States:
 *   Empty:         8% border, utility-color icon, placeholder 25% opacity
 *   Typing:        20% border (darker), text appears, clear (X) button shows
 *   Focused:       20% border, no additional ring (container handles focus)
 *   Focus-Visible: 2px solid brand-red ring, 2px offset
 *
 * Dimensions: Compact — inner padding px-2.5 py-2, font --text-2xs (12px).
 * Icon: Search (lucide) at iconColors.utility.
 * Clear: X button appears only when value is non-empty.
 */
import { Search, X } from "lucide-react";
import { iconColors } from "./iconColors";

export interface FilterSearchInputProps {
  /** Controlled value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Aria label for the input */
  ariaLabel?: string;
  /** Additional className for the wrapper */
  className?: string;
}

export function FilterSearchInput({
  value,
  onChange,
  placeholder = "Search filters...",
  ariaLabel = "Search filter options",
  className,
}: FilterSearchInputProps) {
  return (
    <div
      className={`flex items-center gap-2 px-2.5 py-2 bg-white transition-all focus-within:ring-2 focus-within:ring-[var(--brand-red,#c0392b)] focus-within:ring-offset-1 ${className || ""}`}
      style={{
        borderRadius: "var(--radius-inner, 3px)",
        border: value
          ? "1px solid rgba(0,0,0,0.2)"
          : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Search
        className="h-3.5 w-3.5 flex-shrink-0"
        color={iconColors.utility}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="flex-1 bg-transparent outline-none text-black/70 placeholder:text-black/25"
        style={{ fontSize: "var(--text-2xs)" }}
      />
      {value && (
        <button
          className="flex-shrink-0 text-black/30 hover:text-black/60 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)] focus-visible:ring-offset-1 rounded-sm"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
