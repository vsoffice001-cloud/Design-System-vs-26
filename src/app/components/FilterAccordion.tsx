/**
 * FilterAccordion — Molecule
 * DS-compliant collapsible section for sidebar filters, TOC groups,
 * settings panels, and any panel with grouped expandable sections.
 *
 * Two variants:
 *   "desktop" — Compact. Icon in bordered square, uppercase tracking label,
 *               ChevronRight rotates 90deg. Supports disabled + disabledHint.
 *   "mobile"  — Spacious. Icon in bg-only square, normal text label,
 *               ChevronDown rotates 180deg. No disabled state (mobile shows all).
 *
 * Interaction States (Header Button):
 *   Default:       Transparent bg
 *   Open:          1.5% bg tint
 *   Has Active:    2.5% bg tint, count badge appears, icon container gets border
 *   Hover:         4% bg tint
 *   Disabled:      1.5% bg, 55% opacity, Lock icon, not-allowed cursor
 *   Focus-Visible: 2px solid brand-red ring, 2px offset
 *
 * Content Animation:
 *   Expand:  maxHeight 0→600px over 200ms cubic-bezier(0.16, 1, 0.3, 1)
 *   Collapse: maxHeight 600px→0 + opacity 1→0 over 200ms
 *
 * Composition:
 *   Uses Tooltip (for active count), iconColors (for chevron/lock).
 */
import type { ReactNode } from "react";
import { ChevronRight, ChevronDown, Lock } from "lucide-react";
import { iconColors } from "./iconColors";
import { Tooltip } from "./Tooltip";

export interface FilterAccordionProps {
  /** Section icon (rendered inside icon container) */
  icon: ReactNode;
  /** Section label */
  label: string;
  /** Controlled open state */
  isOpen: boolean;
  /** Toggle callback */
  onToggle: () => void;
  /** Active filter count for this section */
  count?: number;
  /** Section content (checkboxes, chips, etc.) */
  children: ReactNode;
  /** Disabled state — desktop only */
  disabled?: boolean;
  /** Hint text shown when disabled — desktop only */
  disabledHint?: string;
  /** Visual variant */
  variant?: "desktop" | "mobile";
  /** Additional className for root */
  className?: string;
}

export function FilterAccordion({
  icon,
  label,
  isOpen,
  onToggle,
  count,
  children,
  disabled,
  disabledHint,
  variant = "desktop",
  className,
}: FilterAccordionProps) {
  const hasActive = count != null && count > 0;
  const isMobile = variant === "mobile";

  return (
    <div
      className={className}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      {/* ── Header Button ── */}
      <button
        className={`w-full flex items-center transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red,#c0392b)] focus-visible:ring-offset-2 ${
          isMobile
            ? "gap-2.5 py-3.5 px-4 active:bg-black/[0.02]"
            : "gap-2.5 px-4 py-3"
        }`}
        style={{
          background: disabled
            ? "rgba(0,0,0,0.015)"
            : hasActive
              ? "rgba(0,0,0,0.025)"
              : isOpen
                ? "rgba(0,0,0,0.015)"
                : "transparent",
          opacity: disabled ? 0.55 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (!disabled)
            (e.currentTarget as HTMLElement).style.background =
              "rgba(0,0,0,0.04)";
        }}
        onMouseLeave={(e) => {
          if (!disabled)
            (e.currentTarget as HTMLElement).style.background = hasActive
              ? "rgba(0,0,0,0.025)"
              : isOpen
                ? "rgba(0,0,0,0.015)"
                : "transparent";
        }}
        onClick={() => {
          if (!disabled) onToggle();
        }}
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        {/* Icon container */}
        <div
          className={`flex items-center justify-center flex-shrink-0 transition-all ${
            isMobile ? "w-7 h-7" : "w-6 h-6"
          }`}
          style={{
            borderRadius: "var(--radius-element, 5px)",
            ...(isMobile
              ? { background: "rgba(0,0,0,0.03)" }
              : {
                  border: hasActive
                    ? "1px solid rgba(0,0,0,0.2)"
                    : "1px solid rgba(0,0,0,0.08)",
                  background: hasActive ? "rgba(0,0,0,0.04)" : "white",
                }),
          }}
        >
          {icon}
        </div>

        {/* Label */}
        <span
          className={`flex-1 text-left transition-colors ${
            isMobile ? "text-black/70" : "tracking-[0.08em] uppercase"
          }`}
          style={{
            fontSize: isMobile ? "var(--text-nav)" : "var(--text-2xs)",
            color: isMobile
              ? undefined
              : hasActive
                ? "rgba(0,0,0,0.7)"
                : "rgba(0,0,0,0.45)",
          }}
        >
          {label}
        </span>

        {/* Disabled lock icon (desktop only) */}
        {disabled && !isMobile && (
          <Lock className="h-3 w-3 flex-shrink-0" color="rgba(0,0,0,0.2)" />
        )}

        {/* Active count badge */}
        {hasActive && !disabled && (
          isMobile ? (
            <span
              className="min-w-[20px] h-[20px] px-1.5 rounded-full flex items-center justify-center tabular-nums"
              style={{
                fontSize: "10px",
                background: "rgba(0,0,0,0.08)",
                color: "var(--text-primary, #1a1a1c)",
                fontWeight: 600,
              }}
            >
              {count}
            </span>
          ) : (
            <Tooltip text={`${count} selected`} position="top">
              <span
                className="min-w-5 h-5 px-1 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0"
                style={{ fontSize: "var(--badge-xs-font, 10px)" }}
              >
                {count}
              </span>
            </Tooltip>
          )
        )}

        {/* Chevron */}
        {!disabled && (
          isMobile ? (
            <ChevronDown
              className="h-4 w-4 text-black/30 flex-shrink-0 transition-transform"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          ) : (
            <div
              className="w-5 h-5 flex items-center justify-center flex-shrink-0 transition-transform"
              style={{
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <ChevronRight
                className="h-3 w-3"
                color={iconColors.utility}
              />
            </div>
          )
        )}
      </button>

      {/* Disabled hint (desktop only) */}
      {disabled && disabledHint && !isMobile && (
        <div className="px-4 pb-2.5" style={{ marginTop: "-4px" }}>
          <p
            style={{
              fontSize: "var(--text-2xs)",
              color: "rgba(0,0,0,0.3)",
              lineHeight: "1.4",
            }}
          >
            {disabledHint}
          </p>
        </div>
      )}

      {/* ── Collapsible Content ── */}
      {!disabled && (
        <div
          className="overflow-hidden transition-all duration-200"
          style={{
            maxHeight: isOpen ? "600px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {isMobile ? (
            <div className="flex flex-wrap gap-2 px-4 pb-4">{children}</div>
          ) : (
            <div className="pb-0">{children}</div>
          )}
        </div>
      )}
    </div>
  );
}
