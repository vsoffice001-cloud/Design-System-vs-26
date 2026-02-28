/**
 * TypeScale Component
 * 
 * Displays the typography scale with live examples.
 * Shows the Major Third (1.25) ratio in action.
 */

import React from 'react';
import { typography } from './tokens';

export interface TypeScaleItemProps {
  token: string;
  sizePx: number;
  sizeRem: string;
  text: string;
  usage?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export function TypeScaleItem({
  token,
  sizePx,
  sizeRem,
  text,
  usage,
  tag = 'p',
}: TypeScaleItemProps) {
  const Tag = tag;
  return (
    <div className="border-b border-black/10 pb-6">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-xs text-black/40">{token} ({sizePx}px / {sizeRem})</p>
        {usage && <span className="text-xs text-black/40 italic">{usage}</span>}
      </div>
      <Tag style={{ fontSize: `var(${token})` }} className="font-bold text-black">{text}</Tag>
    </div>
  );
}

export interface TypeScaleProps {
  variant?: 'full' | 'essential';
  exampleText?: string;
}

export function TypeScale({ 
  variant = 'essential',
}: TypeScaleProps) {
  const essentialScales: TypeScaleItemProps[] = [
    { token: '--text-3xl', sizePx: typography.sizePx['3xl'], sizeRem: typography.size['3xl'], text: 'Hero Heading', usage: 'Hero H1 only', tag: 'h1' },
    { token: '--text-2xl', sizePx: typography.sizePx['2xl'], sizeRem: typography.size['2xl'], text: 'Section Heading', usage: 'Main sections H2', tag: 'h2' },
    { token: '--text-xl', sizePx: typography.sizePx.xl, sizeRem: typography.size.xl, text: 'Subsection Heading', usage: 'Subsections H3', tag: 'h3' },
    { token: '--text-lg', sizePx: typography.sizePx.lg, sizeRem: typography.size.lg, text: 'Card Title (2-3 cards)', usage: 'Large card titles', tag: 'h4' },
    { token: '--text-base', sizePx: typography.sizePx.base, sizeRem: typography.size.base, text: 'Large body text, card titles (4+ cards)', usage: 'Large body', tag: 'p' },
    { token: '--text-sm', sizePx: typography.sizePx.sm, sizeRem: typography.size.sm, text: 'Standard body text, descriptions, paragraphs', usage: 'Standard body', tag: 'p' },
  ];

  const fullScales: TypeScaleItemProps[] = [
    { token: '--text-5xl', sizePx: typography.sizePx['5xl'], sizeRem: typography.size['5xl'], text: 'Massive Heading', usage: 'Rare, massive impact', tag: 'h1' },
    { token: '--text-4xl', sizePx: typography.sizePx['4xl'], sizeRem: typography.size['4xl'], text: 'Extra Large Heading', usage: 'Special moments', tag: 'h1' },
    ...essentialScales,
    { token: '--text-xs', sizePx: typography.sizePx.xs, sizeRem: typography.size.xs, text: 'Labels, metadata, categories, section eyebrows', usage: 'Metadata', tag: 'span' },
  ];

  const scales = variant === 'full' ? fullScales : essentialScales;

  return (
    <div className="space-y-6">
      {scales.map((scale) => (
        <TypeScaleItem key={scale.token} {...scale} />
      ))}
    </div>
  );
}

export function TypeHierarchyExample() {
  return (
    <div className="space-y-4">
      <h1 style={{ fontSize: 'var(--text-3xl)' }} className="font-bold text-black">H1 - Main Heading</h1>
      <div className="pl-4 space-y-4">
        <h2 style={{ fontSize: 'var(--text-2xl)' }} className="font-bold text-black">H2 - Section Heading</h2>
        <div className="pl-4 space-y-4">
          <h3 style={{ fontSize: 'var(--text-xl)' }} className="font-bold text-black">H3 - Subsection Heading</h3>
          <div className="pl-4 space-y-2">
            <h4 style={{ fontSize: 'var(--text-lg)' }} className="font-bold text-black">H4 - Card Title</h4>
            <p style={{ fontSize: 'var(--text-sm)' }} className="text-black/70">Body text - Standard paragraph content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
