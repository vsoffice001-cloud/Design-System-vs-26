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

// Export All Colors Palette component
export { AllColorsPaletteContent } from '@/app/components/AllColorsPaletteContent';

// Export All Typography Tokens component
export { AllTypographyTokensContent } from '@/app/components/AllTypographyTokensContent';

// Export All Spacing Tokens component
export { AllSpacingTokensContent } from '@/app/components/AllSpacingTokensContent';

// Export All Layout & Grid Tokens component
export { AllLayoutGridTokensContent } from '@/app/components/AllLayoutGridTokensContent';

// Export All Elevation Tokens component
export { AllElevationTokensContent } from '@/app/components/AllElevationTokensContent';

// Export All Border Radius Tokens component
export { AllBorderRadiusTokensContent } from '@/app/components/AllBorderRadiusTokensContent';

/**
 * FOUNDATIONS CONTENT
 * ===================
 * All content for the Foundations tab including:
 * - Colors
 * - Typography (NOW WITH 14px CUSTOM SIZES)
 * - Spacing
 * - Layout & Grid
 * - Elevation
 * - Border Radius
 */

// ============================================
// HELPER COMPONENTS
// ============================================

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
        <h2 className="text-2xl font-normal mb-4 text-black">
          {title}
        </h2>
        <div className="space-y-2">
          {why && (
            <InfoBlock label="WHY" content={why} color="purple" />
          )}
          {what && (
            <InfoBlock label="WHAT" content={what} color="blue" />
          )}
          {when && (
            <InfoBlock label="WHEN" content={when} color="green" />
          )}
          {whenNot && (
            <InfoBlock label="WHEN NOT" content={whenNot} color="red" />
          )}
          {where && (
            <InfoBlock label="WHERE" content={where} color="amber" />
          )}
          {how && (
            <InfoBlock label="HOW" content={how} color="gray" />
          )}
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
    <div className={`border rounded-lg p-3 ${colors[color as keyof typeof colors]}`}>
      <div className="text-xs font-bold tracking-wider mb-1">{label}</div>
      <div className="text-sm leading-relaxed">{content}</div>
    </div>
  );
}

function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  const [copied, setCopied] = useState(false);

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative">
      <div 
        className="w-full h-20 rounded-lg mb-3 border border-black/10 cursor-pointer transition-transform hover:scale-105" 
        style={{ backgroundColor: hex }}
        onClick={copyHex}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="text-white drop-shadow-lg" size={24} />
          ) : (
            <Copy className="text-white drop-shadow-lg" size={20} />
          )}
        </div>
      </div>
      <div>
        <div className="font-mono text-sm font-semibold mb-1">{name}</div>
        <div className="font-mono text-xs text-black/50 mb-2">{hex}</div>
        <div className="text-xs text-black/60 leading-snug">{usage}</div>
      </div>
    </div>
  );
}

function TypeScaleDemo({ token, pixels, usage, where }: { token: string; pixels: string; usage: string; where: string }) {
  return (
    <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6 hover:border-black/20 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <div className="flex items-baseline gap-3 mb-3">
            <code className="text-sm font-mono bg-black/5 px-2 py-1 rounded">{token}</code>
            <span className="text-sm text-black/40">{pixels}</span>
          </div>
          <p className="text-sm text-black/70 mb-2">{usage}</p>
          <p className="text-xs text-black/40">
            <strong>Example:</strong> {where}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p 
            className="text-black leading-tight"
            style={{ fontSize: `var(${token})` }}
          >
            The quick brown fox
          </p>
        </div>
      </div>
    </div>
  );
}

// ... (rest of the helper components remain the same - ColorSwatch, etc.)

// ============================================
// TYPOGRAPHY CONTENT (UPDATED WITH 14px SECTION)
// ============================================

export function TypographyContent() {
  const typeScale = [
    { token: '--text-xs', pixels: '12.8px', usage: 'Section labels, metadata ⭐', where: '"CASE STUDY" badge, category tags' },
    { token: '--text-sm', pixels: '16px', usage: 'Body text, descriptions ⭐ MOST USED', where: 'All paragraph content, challenge questions' },
    { token: '--text-base', pixels: '20px', usage: 'Large body, card titles', where: 'Card headings with 4+ cards' },
    { token: '--text-xl', pixels: '31.25px', usage: 'Subsection headings (h3)', where: 'Methodology steps, objective titles' },
    { token: '--text-2xl', pixels: '39px', usage: 'Section headings (h2) ⭐', where: 'Client Context, Challenges, Impact, etc.' },
    { token: '--text-3xl', pixels: '48.8px', usage: 'Hero headings (h1) ⭐ HERO ONLY', where: 'Hero Section title, Final CTA heading' },
  ];

  return (
    <div className="space-y-12">
      <DocSection
        title="Type Scale - Major Third (1.25 Ratio)"
        why="Mathematical progression creates harmonious visual hierarchy. Major Third (1.25x) ratio provides clear distinction between sizes while maintaining readability."
        what="Each size is 1.25× the previous size, starting from 16px base"
        when="Use for all typography - headings, body text, labels. Only deviate for spatial constraints."
        where="Throughout all 9 sections of the case study"
      >
        <div className="space-y-4">
          {typeScale.map((type) => (
            <TypeScaleDemo key={type.token} {...type} />
          ))}
        </div>
      </DocSection>

      {/* Font Weights */}
      <DocSection
        title="Font Weight System"
        why="Limited weight variations create consistency and prevent visual confusion"
        what="Two primary weights: Regular (400) for body, Semi-bold (600) for emphasis"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-2xl mb-4" style={{ fontWeight: 400 }}>Regular (400)</p>
            <p className="text-sm text-black/60">Body text, paragraphs, descriptions, most content</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-2xl mb-4" style={{ fontWeight: 600 }}>Semi-bold (600)</p>
            <p className="text-sm text-black/60">Headings, labels, navigation, emphasis</p>
          </div>
        </div>
      </DocSection>

      {/* Letter Spacing */}
      <DocSection
        title="Letter Spacing (Tracking)"
        why="Fine-tuning for optical balance - large text needs tightening, small all-caps need opening"
        what="Context-specific tracking adjustments"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-xs text-black/60 mb-3">All-Caps Labels</p>
            <p style={{ letterSpacing: '1.8px', textTransform: 'uppercase', fontSize: '12.8px' }} className="mb-4">
              CASE STUDY
            </p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> 1.8px</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-xs text-black/60 mb-3">Hero Headings</p>
            <p style={{ letterSpacing: '-0.5px', fontSize: '32px' }} className="mb-4">
              Large Title
            </p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> -0.5px</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-xs text-black/60 mb-3">Normal Text</p>
            <p style={{ letterSpacing: '0', fontSize: '16px' }} className="mb-4">
              Standard Text
            </p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> 0</p>
          </div>
        </div>
      </DocSection>

      {/* Custom Font Sizes - NEW SECTION FOR 14px */}
      <DocSection
        title="Custom Font Sizes (Outside Scale)"
        why="Some contexts require specific pixel sizes that don't fit the mathematical scale - navigation elements, compact UIs, and spatial constraints"
        what="Dedicated tokens for 12px and 14px use cases"
        when="Use when the Major Third scale doesn't provide the right size for compact navigation, TOC items, or spatial constraints"
        whenNot="Don't use for standard headings or body text - stick to the scale for those"
      >
        <div className="space-y-6">
          {/* 14px Token Family */}
          <div className="border-2 border-blue-500 bg-blue-50/50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-1">14px Token Family</h4>
                <p className="text-sm text-blue-800">Three semantic tokens, same value - different purposes</p>
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono">
                0.875rem = 14px
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* --text-nav */}
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--text-nav</code>
                <p className="text-sm text-black/70 mb-3">Navigation elements</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>✓ TOC item titles</li>
                  <li>✓ CTA descriptions</li>
                  <li>✓ Navigation menus</li>
                  <li>✓ Compact interfaces</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <p style={{ fontSize: 'var(--text-nav)' }} className="text-black font-medium">
                    Table of Contents Item
                  </p>
                </div>
              </div>

              {/* --text-compact */}
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--text-compact</code>
                <p className="text-sm text-black/70 mb-3">Compact body text</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>✓ Challenge cards (4+)</li>
                  <li>✓ Dense content areas</li>
                  <li>✓ Secondary paragraphs</li>
                  <li>✓ Prevent text wrapping</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <p style={{ fontSize: 'var(--text-compact)' }} className="text-black">
                    Compact body paragraph
                  </p>
                </div>
              </div>

              {/* --button-font-sm */}
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--button-font-sm</code>
                <p className="text-sm text-black/70 mb-3">Small button text</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>✓ Navbar CTAs</li>
                  <li>✓ Compact buttons</li>
                  <li>✓ TOC "Unlock" buttons</li>
                  <li>✓ Secondary actions</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <button 
                    className="px-4 py-2 bg-black text-white rounded"
                    style={{ fontSize: 'var(--button-font-sm)' }}
                  >
                    Small Button
                  </button>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="mt-6 bg-blue-900 text-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">💡 Why Three Tokens for Same Value?</p>
              <p className="text-xs leading-relaxed">
                Semantic naming improves code readability and maintainability. When you see <code className="bg-blue-800 px-1 rounded">var(--text-nav)</code>, 
                you immediately know it's for navigation. If we later need to adjust navigation text independently, we can change one token 
                without affecting buttons or compact body text.
              </p>
            </div>
          </div>

          {/* 12px Token */}
          <div className="bg-black/[0.02] border border-black/10 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-lg font-semibold text-black mb-1">12px Token</h4>
                <code className="text-sm font-mono text-black/60">--text-2xs</code>
              </div>
              <div className="bg-black text-white px-3 py-1 rounded text-sm font-mono">
                0.75rem = 12px
              </div>
            </div>
            <p className="text-sm text-black/70 mb-4">
              For micro labels when 12.8px (--text-xs) is too large
            </p>
            <ul className="text-sm text-black/60 space-y-2 mb-4">
              <li>✓ Navbar text</li>
              <li>✓ Micro labels in tight spaces</li>
              <li>✓ Copyright text</li>
            </ul>
            <div className="bg-white border border-black/10 rounded-lg p-4">
              <p style={{ fontSize: 'var(--text-2xs)' }} className="text-black">
                Navbar Menu Item
              </p>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="border border-black/10 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] p-4 border-b border-black/10">
              <h4 className="font-semibold">Decision Matrix: When to Use Custom Sizes</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Use Case</th>
                    <th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Token</th>
                    <th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Why Custom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/8">
                    <td className="p-4 text-sm">TOC Item Titles</td>
                    <td className="p-4 font-mono text-xs">var(--text-nav)</td>
                    <td className="p-4 text-sm text-black/60">Navigation needs to be readable but compact</td>
                  </tr>
                  <tr className="border-b border-black/8 bg-black/[0.01]">
                    <td className="p-4 text-sm">Small Button Text</td>
                    <td className="p-4 font-mono text-xs">var(--button-font-sm)</td>
                    <td className="p-4 text-sm text-black/60">Navbar height constraint (36-40px)</td>
                  </tr>
                  <tr className="border-b border-black/8">
                    <td className="p-4 text-sm">Challenge Cards (4+)</td>
                    <td className="p-4 font-mono text-xs">var(--text-compact)</td>
                    <td className="p-4 text-sm text-black/60">Prevents wrapping, maintains card height</td>
                  </tr>
                  <tr className="border-b border-black/8 bg-black/[0.01]">
                    <td className="p-4 text-sm">Navbar Menu</td>
                    <td className="p-4 font-mono text-xs">var(--text-2xs)</td>
                    <td className="p-4 text-sm text-black/60">Fits 60px navbar height</td>
                  </tr>
                  <tr className="bg-black/[0.01]">
                    <td className="p-4 text-sm">CTA Descriptions</td>
                    <td className="p-4 font-mono text-xs">var(--text-nav)</td>
                    <td className="p-4 text-sm text-black/60">Compact but readable sub-text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Line Height */}
      <DocSection
        title="Line Height System"
        why="Proper line height improves readability and creates comfortable rhythm"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="font-mono text-sm mb-2">Headings</p>
            <p className="text-2xl font-bold mb-3">1.2-1.3</p>
            <p className="text-xs text-black/60">Tight, impactful</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="font-mono text-sm mb-2">Body Text</p>
            <p className="text-2xl font-bold mb-3">1.6-1.7</p>
            <p className="text-xs text-black/60">Comfortable reading</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="font-mono text-sm mb-2">Labels</p>
            <p className="text-2xl font-bold mb-3">1.4-1.5</p>
            <p className="text-xs text-black/60">Compact but clear</p>
          </div>
        </div>
      </DocSection>
    </div>
  );
}

// ... (rest of the file remains unchanged - SpacingContent, etc.)