/**
 * SpacingScale Component
 * 
 * Visualizes the spacing scale system (4px base unit).
 */

import React from 'react';
import { spacing } from './tokens';

export interface SpacingScaleItemProps {
  scale: keyof typeof spacing.px;
  showPx?: boolean;
  showRem?: boolean;
  showTailwind?: boolean;
}

export function SpacingScaleItem({
  scale,
  showPx = true,
  showRem = true,
  showTailwind = false,
}: SpacingScaleItemProps) {
  const pxValue = spacing.px[scale];
  const remValue = spacing.rem[scale];

  return (
    <div className="flex items-center gap-4">
      <div 
        className="h-8 bg-black"
        style={{ width: `${pxValue}px` }}
        aria-label={`Spacing: ${pxValue}px`}
      />
      <div className="flex gap-4 text-sm">
        {showRem && (
          <span className="font-mono w-20 text-black">{remValue}</span>
        )}
        {showPx && (
          <span className="text-black/60">{pxValue}px</span>
        )}
        {showTailwind && (
          <span className="text-black/40 font-mono">
            gap-{scale}, p-{scale}
          </span>
        )}
      </div>
    </div>
  );
}

export interface SpacingScaleProps {
  scales?: (keyof typeof spacing.px)[];
  showPx?: boolean;
  showRem?: boolean;
  showTailwind?: boolean;
}

export function SpacingScale({
  scales,
  showPx = true,
  showRem = true,
  showTailwind = false,
}: SpacingScaleProps) {
  const defaultScales: (keyof typeof spacing.px)[] = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];
  const displayScales = scales || defaultScales;

  return (
    <div className="space-y-4">
      {displayScales.map((scale) => (
        <SpacingScaleItem
          key={scale}
          scale={scale}
          showPx={showPx}
          showRem={showRem}
          showTailwind={showTailwind}
        />
      ))}
    </div>
  );
}

export interface SpacingExampleProps {
  gap: keyof typeof spacing.px;
  layout?: 'vertical' | 'horizontal' | 'grid';
  itemCount?: number;
}

export function SpacingExample({
  gap,
  layout = 'horizontal',
  itemCount = 3,
}: SpacingExampleProps) {
  const gapValue = spacing.rem[gap];
  const layoutClasses = {
    vertical: 'flex flex-col',
    horizontal: 'flex',
    grid: 'grid grid-cols-3',
  };

  return (
    <div className="bg-black/5 rounded-[5px] p-6">
      <div className="mb-3 text-xs text-black/60">
        Gap: {spacing.px[gap]}px ({gapValue})
      </div>
      <div 
        className={layoutClasses[layout]}
        style={{ gap: gapValue }}
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="bg-black/20 rounded-[5px] p-4 flex items-center justify-center"
            style={{ minWidth: layout === 'horizontal' ? '80px' : undefined }}
          >
            <span className="text-sm font-bold text-black/60">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionSpacingGuide() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-black/20 pl-4">
        <h4 className="text-sm font-bold text-black mb-2">Section Vertical Padding</h4>
        <div className="space-y-2 text-sm text-black/70">
          <div className="flex justify-between"><span>Mobile:</span><span className="font-mono">py-16 ({spacing.px[16]}px)</span></div>
          <div className="flex justify-between"><span>Desktop:</span><span className="font-mono">py-20 ({spacing.px[20]}px)</span></div>
        </div>
      </div>
      <div className="border-l-4 border-black/20 pl-4">
        <h4 className="text-sm font-bold text-black mb-2">Grid Gaps</h4>
        <div className="space-y-2 text-sm text-black/70">
          <div className="flex justify-between"><span>Standard:</span><span className="font-mono">gap-6 ({spacing.px[6]}px)</span></div>
          <div className="flex justify-between"><span>Large:</span><span className="font-mono">gap-8 ({spacing.px[8]}px)</span></div>
        </div>
      </div>
    </div>
  );
}
