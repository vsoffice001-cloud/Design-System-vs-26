/**
 * SidePanel — Molecule (Container Pattern)
 * DS-compliant sticky sidebar container for filters, TOC, navigation,
 * settings, and any panel that lives alongside main content.
 *
 * Anatomy:
 *   ┌─────────────────────┐
 *   │  HEADER (sticky)    │  ← flex-shrink-0, border-bottom, warm bg
 *   ├─────────────────────┤
 *   │  TOOLBAR (optional) │  ← flex-shrink-0, search input slot
 *   ├─────────────────────┤
 *   │                     │
 *   │  SCROLLABLE BODY    │  ← flex-1, overflow-y-auto, scrollbar-hide
 *   │                     │
 *   ├─────────────────────┤
 *   │  FOOTER (sticky)    │  ← flex-shrink-0, border-top, warm bg
 *   └─────────────────────┘
 *
 * Container Specs:
 *   Width:       w-60 (240px) default, customizable
 *   Position:    sticky, top offset = header height (default 72px)
 *   Max Height:  calc(100vh - topOffset - 16px) — never exceeds viewport
 *   Border:      1px solid rgba(0,0,0,0.08)
 *   Radius:      10px
 *   Shadow:      0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)
 *   Background:  white (body), var(--black-50) (header/footer)
 *   Visibility:  hidden below lg breakpoint (desktop sidebar pattern)
 *
 * Use Cases:
 *   - Filter sidebar (IndustrySidebar)
 *   - Table of Contents (documentation pages)
 *   - Side navigation (settings, account pages)
 *   - Contextual info panel
 */
import type { ReactNode, CSSProperties } from "react";
import { useRef, forwardRef } from "react";

export interface SidePanelProps {
  /** Header content (title, count badge, clear button) */
  header?: ReactNode;
  /** Toolbar content between header and body (e.g., FilterSearchInput) */
  toolbar?: ReactNode;
  /** Scrollable body content (filter sections, nav items, TOC links) */
  children: ReactNode;
  /** Footer content (summary text, action button) */
  footer?: ReactNode;
  /** Sticky top offset in px (matches header height) */
  stickyTop?: number;
  /** Panel width as Tailwind class */
  widthClass?: string;
  /** Hide below this breakpoint (default: lg) */
  showAbove?: "sm" | "md" | "lg" | "xl";
  /** Ref forwarded to the scrollable body div */
  scrollRef?: React.Ref<HTMLDivElement>;
  /** Additional className for <aside> */
  className?: string;
  /** Additional style for <aside> */
  style?: CSSProperties;
}

export const SidePanel = forwardRef<HTMLElement, SidePanelProps>(
  function SidePanel(
    {
      header,
      toolbar,
      children,
      footer,
      stickyTop = 72,
      widthClass = "w-60",
      showAbove = "lg",
      scrollRef,
      className,
      style,
    },
    ref
  ) {
    const breakpointHide: Record<string, string> = {
      sm: "hidden sm:block",
      md: "hidden md:block",
      lg: "hidden lg:block",
      xl: "hidden xl:block",
    };

    return (
      <aside
        ref={ref}
        className={`${widthClass} flex-shrink-0 ${breakpointHide[showAbove]} ${className || ""}`}
        style={style}
      >
        <div
          className="sticky"
          style={{ top: `${stickyTop}px` }}
        >
          <div
            className="overflow-hidden flex flex-col bg-white"
            style={{
              maxHeight: `calc(100vh - ${stickyTop + 16}px)`,
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
            }}
          >
            {/* ── Header ── */}
            {header && (
              <div
                className="p-4 flex-shrink-0"
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  background: "var(--black-50)",
                }}
              >
                {header}
              </div>
            )}

            {/* ── Toolbar (Search, etc.) ── */}
            {toolbar && (
              <div
                className="px-3 py-2.5 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                {toolbar}
              </div>
            )}

            {/* ── Scrollable Body ── */}
            <div
              className="overflow-y-auto flex-1 scrollbar-hide"
              ref={scrollRef}
            >
              {children}
            </div>

            {/* ── Footer ── */}
            {footer && (
              <div
                className="p-3 flex-shrink-0"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  background: "var(--black-50)",
                }}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      </aside>
    );
  }
);
