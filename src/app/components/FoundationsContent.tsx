import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import {
  SpacingScaleVisualization,
  MarginPaddingGuide,
  ComponentSpacingExamples,
  ListFormSpacingDemo,
  ResponsiveSpacingDemo,
  VisualRhythmDemo
} from '@/app/components/SpacingHelpers';

export { AllColorsPaletteContent } from '@/app/components/AllColorsPaletteContent';
export { AllTypographyTokensContent } from '@/app/components/AllTypographyTokensContent';
export { AllSpacingTokensContent } from '@/app/components/AllSpacingTokensContent';
export { AllLayoutGridTokensContent } from '@/app/components/AllLayoutGridTokensContent';
export { AllElevationTokensContent } from '@/app/components/AllElevationTokensContent';
export { AllBorderRadiusTokensContent } from '@/app/components/AllBorderRadiusTokensContent';

interface DocSectionProps {
  title: string;
  why?: string;
  what?: string;
  when?: string;
  whenNot?: string;
  where?: string;
  how?: string;
  children: React.ReactNode;
}

export function DocSection({ title, why, what, when, whenNot, where, how, children }: DocSectionProps) {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-normal mb-4 text-black">{title}</h2>
        <div className="space-y-2">
          {why && <InfoBlock label="WHY" content={why} color="purple" />}
          {what && <InfoBlock label="WHAT" content={what} color="blue" />}
          {when && <InfoBlock label="WHEN" content={when} color="green" />}
          {whenNot && <InfoBlock label="WHEN NOT" content={whenNot} color="red" />}
          {where && <InfoBlock label="WHERE" content={where} color="amber" />}
          {how && <InfoBlock label="HOW" content={how} color="gray" />}
        </div>
      </div>
      {children}
    </section>
  );
}

function InfoBlock({ label, content, color }: { label: string; content: string; color: string }) {
  const colors = {
    purple: 'bg-purple-50 text-purple-900 border-purple-200',
    blue: 'bg-blue-50 text-blue-900 border-blue-200',
    green: 'bg-green-50 text-green-900 border-green-200',
    red: 'bg-red-50 text-red-900 border-red-200',
    amber: 'bg-amber-50 text-amber-900 border-amber-200',
    gray: 'bg-gray-50 text-gray-900 border-gray-200',
  };

  return (
    <div className={`px-4 py-3 rounded-lg border ${colors[color as keyof typeof colors]}`}>
      <div className="flex items-start gap-3">
        <span className="font-bold text-xs uppercase tracking-wider shrink-0">{label}</span>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export function ColorsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Colors - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          Minimalist black/white foundation with strategic Ken Bold Red accent and sophisticated warm palette.
        </p>
      </div>

      <DocSection
        title="Color Philosophy"
        why="Minimalist editorial aesthetic demands restraint and precision"
        what="Pure black/white base + Ken Bold Red (#b01f24) accent + warm editorial colors"
        when="Use Red ONLY for CTAs (5% max), warm colors for sophistication"
        whenNot="Never use red for decorative purposes or outside CTAs"
        how="Start with black/white, add Red sparingly for action, warm colors for depth"
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="w-full h-24 bg-black rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-2">Pure Black</h3>
            <code className="text-xs bg-black/5 px-2 py-1 rounded">#000000</code>
            <p className="text-xs text-black/60 mt-2">Hero text, primary content</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="w-full h-24 rounded-lg mb-4" style={{background: '#b01f24'}}></div>
            <h3 className="font-semibold mb-2">Ken Bold Red</h3>
            <code className="text-xs bg-black/5 px-2 py-1 rounded">#b01f24</code>
            <p className="text-xs text-black/60 mt-2">CTAs, buttons (5% max) ⭐</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="w-full h-24 bg-white border-2 border-black/10 rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-2">Pure White</h3>
            <code className="text-xs bg-black/5 px-2 py-1 rounded">#FFFFFF</code>
            <p className="text-xs text-black/60 mt-2">Backgrounds, negative space</p>
          </div>
        </div>
      </DocSection>
    </div>
  );
}

export function TypographyContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Typography - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          Major Third (1.25 ratio) type scale with strategic font pairing: Noto Serif for editorial sophistication, DM Sans for functional clarity.
        </p>
      </div>

      <DocSection
        title="Type Scale - Major Third (1.25)"
        why="Mathematical scaling creates harmonious visual hierarchy"
        what="9-step scale from 12.8px (xs) to 76.3px (5xl) using 1.25 multiplier"
        when="Use Noto Serif for headings, DM Sans for body/UI"
        whenNot="Don't mix font families within same content block"
        how="Base 16px, multiply by 1.25 for each step up the scale"
      >
        <div className="space-y-4">
          <div className="border-b border-black/5 pb-4">
            <p style={{fontFamily: "'Noto Serif', serif", fontSize: '48.8px', lineHeight: 1.2}}>Hero Heading</p>
            <p className="text-xs text-black/60 mt-2">text-3xl - 48.8px / 3.052rem - Most used for h1 ⭐</p>
          </div>
          <div className="border-b border-black/5 pb-4">
            <p style={{fontFamily: "'Noto Serif', serif", fontSize: '39px', lineHeight: 1.3}}>Section Heading</p>
            <p className="text-xs text-black/60 mt-2">text-2xl - 39px / 2.441rem - Section h2 ⭐</p>
          </div>
          <div className="pb-4">
            <p style={{fontFamily: "'DM Sans', sans-serif", fontSize: '16px', lineHeight: 1.7}}>Body text uses DM Sans at 16px for optimal readability and clarity.</p>
            <p className="text-xs text-black/60 mt-2">text-sm - 16px / 1rem - Standard body text ⭐</p>
          </div>
        </div>
      </DocSection>
    </div>
  );
}

export function SpacingContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Spacing - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          10-step spacing scale based on 4px grid system for consistent visual rhythm.
        </p>
      </div>

      <DocSection
        title="Spacing Scale - 4px Base Unit"
        why="4px grid ensures pixel-perfect alignment across all screen densities"
        what="10 spacing values: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48px"
        when="Use space-4 (16px) for default, space-6 (24px) for components, space-12 (48px) for sections"
        whenNot="Avoid arbitrary values - always use scale tokens"
        how="Multiply base 4px unit by scale step (1, 2, 3, 4, 5, 6, 8, 10, 12)"
      >
        <SpacingScaleVisualization />
        <div className="mt-8">
          <ComponentSpacingExamples />
        </div>
      </DocSection>
    </div>
  );
}

export function LayoutGridContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Layout & Grid - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          Responsive 12-column grid system with mobile-first breakpoints.
        </p>
      </div>

      <DocSection
        title="Responsive Grid System"
        why="Flexible grid adapts to all devices while maintaining proportion"
        what="12-column grid: 1 col (mobile) → 2-3 cols (tablet) → 3-4 cols (desktop)"
        when="Use for content layouts, card grids, dashboard layouts"
        whenNot="Don't force grid on single-column text content"
        how="Mobile-first: start 1-col, add breakpoints to expand columns"
      >
        <div className="grid grid-cols-12 gap-2">
          {Array.from({length: 12}).map((_, idx) => (
            <div key={idx} className="bg-purple-100 border border-purple-300 h-12 flex items-center justify-center text-xs font-mono">
              {idx+1}
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}

export function ElevationContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Elevation - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          6-level elevation system using subtle box-shadows for depth.
        </p>
      </div>

      <DocSection
        title="Elevation Scale"
        why="Subtle shadows create depth without breaking minimalist aesthetic"
        what="6 shadow levels from none to 2xl"
        when="Use sm for cards, md for hover, lg+ for modals"
        whenNot="Avoid excessive shadows - maintain minimal feel"
        how="Apply shadow- tokens: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-6">
          {[
            { level: 'Subtle', shadow: '0 1px 2px 0 rgba(0,0,0,0.05)', usage: 'Cards ⭐' },
            { level: 'Low', shadow: '0 1px 3px 0 rgba(0,0,0,0.1)', usage: 'Standard' },
            { level: 'Medium', shadow: '0 4px 6px -1px rgba(0,0,0,0.1)', usage: 'Hover, dropdowns' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg">
              <div className="w-full h-32 bg-white rounded-lg flex items-center justify-center" style={{boxShadow: item.shadow}}>
                <span className="text-sm text-black/40">{item.level}</span>
              </div>
              <p className="text-xs text-black/60 mt-3">{item.usage}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}

export function BorderRadiusContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Border Radius - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">
          Incremental border radius system using 5px increments.
        </p>
      </div>

      <DocSection
        title="Border Radius Scale"
        why="Consistent corner rounding creates visual cohesion"
        what="Incremental scale: 0, 2.5, 5, 10, 15, 20, 25, 30... to full (9999px)"
        when="Use 5px for buttons, 10px for cards, full for pills"
        whenNot="Don't over-round small elements"
        how="Match radius to component size - small (5px), medium (10-15px), large (20-30px)"
      >
        <div className="grid grid-cols-5 gap-6">
          {[
            { name: 'Small', value: '5px', usage: 'Buttons ⭐' },
            { name: 'Medium', value: '10px', usage: 'Cards ⭐' },
            { name: 'Large', value: '15px', usage: 'Panels' },
            { name: 'XL', value: '20px', usage: 'Features' },
            { name: 'Full', value: '9999px', usage: 'Pills ⭐' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 mx-auto mb-3" style={{borderRadius: item.value}}></div>
              <p className="font-semibold text-sm mb-1">{item.name}</p>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">{item.value}</code>
              <p className="text-xs text-black/60 mt-1">{item.usage}</p>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}