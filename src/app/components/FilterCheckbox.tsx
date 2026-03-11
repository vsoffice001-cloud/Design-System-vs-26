/**
 * FilterCheckbox — Atom
 * DS-compliant custom checkbox for filter panels, TOC selection, and any sidebar list.
 *
 * Interaction States:
 *   Default:       White bg, gray 18% border, 50% text, no left accent
 *   Hover:         2.5% black bg tint
 *   Checked:       Dark fill + white Check icon, 3% bg, 60% left-border accent, 85% text
 *   Checked+Hover: Slightly deeper bg (stays at 3%, accent visible)
 *   Focus-Visible: 2px solid brand-red ring, 2px offset
 *   Disabled:      50% opacity, not-allowed cursor
 *
 * Keyboard: Enter or Space toggles. Fully ARIA-compliant (role="checkbox").
 */
import { Check } from "lucide-react";

export interface FilterCheckboxProps {
  /** Display label */
  label: string;
  /** Controlled checked state */
  checked: boolean;
  /** Toggle callback */
  onToggle: () => void;
  /** Optional right-aligned count or text */
  count?: number | string;
  /** Indent for nested items (subcategories) */
  indented?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional className */
  className?: string;
}

export function FilterCheckbox({
  label,
  checked,
  onToggle,
  count,
  indented,
  disabled,
  className,
}: FilterCheckboxProps) {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`flex items-center gap-2.5 cursor-pointer transition-all duration-100 select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)] focus-visible:ring-offset-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className || ""}`}
      style={{
        padding: indented ? "6px 16px 6px 28px" : "6px 16px",
        background: checked ? "rgba(0,0,0,0.03)" : "transparent",
        borderLeft: checked
          ? "2px solid rgba(0,0,0,0.6)"
          : "2px solid transparent",
      }}
      onMouseEnter={(e) => {
        if (!disabled && !checked) {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(0,0,0,0.025)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLElement).style.background = checked
            ? "rgba(0,0,0,0.03)"
            : "transparent";
        }
      }}
      onClick={() => {
        if (!disabled) onToggle();
      }}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* Custom checkbox indicator */}
      <div
        className="w-4 h-4 flex-shrink-0 flex items-center justify-center transition-all duration-150"
        style={{
          borderRadius: "var(--radius-inner, 3px)",
          border: checked
            ? "1.5px solid var(--text-primary, #1a1a1c)"
            : "1.5px solid rgba(0,0,0,0.18)",
          background: checked ? "var(--text-primary, #1a1a1c)" : "white",
          boxShadow: checked
            ? "0 1px 2px rgba(0,0,0,0.15)"
            : "inset 0 1px 2px rgba(0,0,0,0.04)",
        }}
      >
        {checked && (
          <Check className="h-2.5 w-2.5" color="white" strokeWidth={3} />
        )}
      </div>
      {/* Label */}
      <span
        className="flex-1 text-left truncate transition-colors duration-100"
        style={{
          fontSize: "var(--text-xs)",
          color: checked ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.5)",
        }}
      >
        {label}
      </span>
      {/* Count badge */}
      {count != null && (
        <span
          className="tabular-nums flex-shrink-0 transition-colors duration-100"
          style={{
            fontSize: "var(--text-2xs)",
            color: checked ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.2)",
            background: checked ? "rgba(0,0,0,0.05)" : "transparent",
            padding: checked ? "1px 6px" : "0",
            borderRadius: "9999px",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
