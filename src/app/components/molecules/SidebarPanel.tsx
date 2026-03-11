/**
 * SidebarPanel — Molecule (Container Pattern)
 * Ken Bold DS v4.1
 *
 * Reusable sticky sidebar container for:
 *   - Filter panels (Report Store)
 *   - Table of Contents (report detail pages)
 *   - Side navigation (documentation pages)
 *   - Settings panels
 *
 * Visual spec:
 *   Width:     w-60 (240px), flex-shrink-0
 *   Sticky:    top: stickyTop (default 72px = header height)
 *   MaxHeight: calc(100vh - stickyTop - 16px)
 *   Border:    1px solid rgba(0,0,0,0.08)
 *   Radius:    10px (--rc-radius-card)
 *   Shadow:    0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)
 *   Background: white
 *   Header/Footer bg: var(--black-50) with 6% border separators
 *   Scrollbar: hidden (.scrollbar-hide)
 *   Hidden:    below lg breakpoint (mobile uses sheet/drawer)
 */
import type { ReactNode } from "react";

export interface SidebarPanelProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  stickyTop?: number;
  width?: string;
  hideBelow?: "sm" | "md" | "lg" | "xl";
  className?: string;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

export function SidebarPanel({
  header,
  children,
  footer,
  stickyTop = 72,
  width = "w-60",
  hideBelow = "lg",
  className,
  scrollRef,
}: SidebarPanelProps) {
  const hideClass =
    hideBelow === "sm" ? "hidden sm:block"
    : hideBelow === "md" ? "hidden md:block"
    : hideBelow === "xl" ? "hidden xl:block"
    : "hidden lg:block";

  return (
    <aside className={`${width} flex-shrink-0 ${hideClass} ${className || ""}`}>
      <div className="sticky" style={{ top: `${stickyTop}px` }}>
        <div
          className="overflow-hidden flex flex-col bg-white"
          style={{
            maxHeight: `calc(100vh - ${stickyTop + 16}px)`,
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.03)",
          }}
        >
          {header && (
            <div
              className="flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "var(--black-50)" }}
            >
              {header}
            </div>
          )}
          <div className="overflow-y-auto flex-1 scrollbar-hide" ref={scrollRef}>
            {children}
          </div>
          {footer && (
            <div
              className="flex-shrink-0"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "var(--black-50)" }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
