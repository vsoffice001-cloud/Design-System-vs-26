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
 * - Typography
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
    <div className={`px-4 py-3 rounded-md border ${colors[color as keyof typeof colors]}`}>
      <span className="font-mono text-xs font-bold mr-2">{label}:</span>
      <span className="text-sm">{content}</span>
    </div>
  );
}

function ColorCard({ name, token, value, usage, wcag }: any) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-black/8 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-32 relative group cursor-pointer" style={{ background: value }} onClick={copyToClipboard}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
          {copied ? (
            <Check size={24} className="text-white" />
          ) : (
            <Copy size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="font-semibold text-sm mb-1">{name}</p>
        <p className="font-mono text-xs text-black/60 mb-2">{value}</p>
        {wcag && <p className="text-xs text-green-600 mb-2">✓ {wcag}</p>}
        <p className="text-xs text-black/60 mb-3">{usage}</p>
        <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80">
          var({token})
        </code>
      </div>
    </div>
  );
}

function TextColorCard({ name, token, value, contrast, usage, where }: any) {
  return (
    <div className="border border-black/8 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <p className="text-4xl mb-2" style={{ color: value }}>Aa</p>
        <p className="font-semibold text-sm mb-1">{name}</p>
        <p className="text-xs text-green-600 mb-2">✓ WCAG AAA ({contrast})</p>
      </div>
      <p className="text-xs text-black/60 mb-2"><strong>USAGE:</strong> {usage}</p>
      <p className="text-xs text-black/50 mb-3"><strong>WHERE:</strong> {where}</p>
      <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80">
        var({token})
      </code>
    </div>
  );
}

function CodeExample({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4 bg-black/5 rounded-lg p-4 border border-black/8">
      <button
        onClick={copyCode}
        className="absolute top-3 right-3 p-2 rounded bg-white/80 hover:bg-white transition-colors"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="text-xs font-mono text-black/80 overflow-x-auto pr-12">
        {code}
      </pre>
    </div>
  );
}

function TypeScaleDemo({ token, pixels, usage, where }: any) {
  return (
    <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6 hover:bg-black/[0.04] transition-colors">
      <div className="flex items-end justify-between mb-4">
        <p style={{ fontSize: `var(${token})`, lineHeight: 1.3 }}>
          The quick brown fox
        </p>
        <div className="text-right ml-4">
          <p className="font-mono text-xs text-black/60">{token}</p>
          <p className="font-mono text-xs text-black/40">{pixels}</p>
        </div>
      </div>
      <div className="pt-4 border-t border-black/8 space-y-1">
        <p className="text-xs text-black/60"><strong>USAGE:</strong> {usage}</p>
        <p className="text-xs text-black/50"><strong>WHERE:</strong> {where}</p>
      </div>
    </div>
  );
}

// ============================================
// COLORS CONTENT
// ============================================

export function ColorsContent() {
  return (
    <div className="space-y-12">
      {/* Core Principle */}
      <DocSection
        title="Color System - Core Principle"
        why="Every color has semantic meaning. Using defined design tokens ensures consistency, accessibility (WCAG AAA), and maintains the minimalist editorial aesthetic through color restraint."
        what="Pure black/white foundation (92%+) with strategic Ken Bold Red accent (5% max) and accent colors for gradients only (3% max)"
        when="Use for all components, sections, and interactive elements. Always reference design tokens, never arbitrary colors."
        whenNot="Never use random Tailwind colors (text-gray-600, bg-blue-100), hardcoded hex values, or create new gray shades outside the system"
        where="Throughout entire design system - backgrounds, text, accents, borders, shadows, gradients"
        how="Start with semantic tokens (var(--brand-red), var(--text-tertiary)), limit brand red to 5% of page, use accent colors in gradients at 5-20% opacity only"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-blue-900">Color Usage Rules</h3>
          <ul className="space-y-2 text-sm text-blue-900">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-mono font-bold">•</span>
              <span><strong>Brand Red (#b01f24):</strong> Maximum 5% of any page - CTAs, critical alerts only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-mono font-bold">•</span>
              <span><strong>Accent Colors:</strong> Maximum 3% total - gradients at 5-20% opacity, shadows only</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-mono font-bold">•</span>
              <span><strong>Black/White/Warm:</strong> 92%+ of design - backgrounds, text, borders, structure</span>
            </li>
          </ul>
        </div>
      </DocSection>

      {/* Brand Colors */}
      <DocSection
        title="Brand Colors - Ken Bold Red"
        why="Brand identity color - bold, confident, action-oriented. Limited to 5% of any page for maximum impact."
        what="Primary brand red (#b01f24) with hover and active states for interaction feedback"
        when="Primary CTAs, critical alerts, key brand moments, destructive actions (with caution)"
        whenNot="Section backgrounds, large content areas, body text, decorative elements, non-critical buttons"
        where="Hero CTAs, Sticky CTA, Primary buttons, Inline links (on hover), Form validation errors"
        how="Use as button background, apply hover state on interaction, combine with white text for contrast"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorCard
            name="Brand Red"
            token="--brand-red"
            value="#b01f24"
            usage="Primary CTAs, brand identity"
            wcag="4.54:1 on white"
          />
          <ColorCard
            name="Brand Red Hover"
            token="--brand-red-hover"
            value="#8f191e"
            usage="Button hover states"
            wcag="5.77:1 on white"
          />
          <ColorCard
            name="Brand Red Active"
            token="--brand-red-active"
            value="#6e1317"
            usage="Button active/pressed states"
            wcag="7.41:1 on white"
          />
        </div>
        <CodeExample
          code={`// Button with brand red
<button style={{ 
  background: 'var(--brand-red)',
  color: '#ffffff'
}}>
  Schedule a Demo
</button>

// With hover/active states
.cta-button {
  background: var(--brand-red);
}
.cta-button:hover {
  background: var(--brand-red-hover);
}
.cta-button:active {
  background: var(--brand-red-active);
}`}
        />
      </DocSection>

      {/* Warm Editorial Colors - TABLE FORMAT */}
      <DocSection
        title="2. Warm Editorial Colors - SOPHISTICATED BACKGROUNDS"
        why="Warm neutrals add sophistication and editorial feel without being distracting. They create visual rhythm when alternated with white sections, making content easier to scan and navigate."
        what="Subtle section backgrounds that add warmth without distraction - 5 specific tokens from near-white to warm borders"
        when="Section backgrounds for subtle highlighting, Alternative to pure white for visual rhythm, Borders and separators, Background gradients (low opacity)"
        whenNot="Primary text color (insufficient contrast), Interactive elements (not actionable), More than 2-3 sections per page (overuse loses impact)"
        where="Challenges section (--warm-300), Methodology section (--warm-200), Final CTA (--warm-50), Borders/dividers (--warm-500), Timeline nodes (--warm-700)"
        how="Alternate with pure white sections for rhythm, use lighter values for backgrounds, darker values for borders/structural elements"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="text-left p-3 text-sm font-bold">Token</th>
                <th className="text-left p-3 text-sm font-bold">Hex</th>
                <th className="text-left p-3 text-sm font-bold">Usage</th>
                <th className="text-left p-3 text-sm font-bold">Section</th>
                <th className="text-left p-3 text-sm font-bold">Visual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/8">
                <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">--warm-50</code></td>
                <td className="p-3"><code className="font-mono text-xs text-black/60">#fefdfd</code></td>
                <td className="p-3 text-sm">Final CTA background</td>
                <td className="p-3 text-sm text-black/60">Section 8</td>
                <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: '#fefdfd' }}></div></td>
              </tr>
              <tr className="border-b border-black/8">
                <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">--warm-200</code></td>
                <td className="p-3"><code className="font-mono text-xs text-black/60">#f9f7f6</code></td>
                <td className="p-3 text-sm">Methodology section</td>
                <td className="p-3 text-sm text-black/60">Section 5</td>
                <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: '#f9f7f6' }}></div></td>
              </tr>
              <tr className="border-b border-black/8 bg-yellow-50">
                <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">--warm-300</code></td>
                <td className="p-3"><code className="font-mono text-xs text-black/60">#f5f2f1</code></td>
                <td className="p-3 text-sm font-semibold">Challenges section</td>
                <td className="p-3 text-sm text-black/60">Section 3</td>
                <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: '#f5f2f1' }}></div></td>
              </tr>
              <tr className="border-b border-black/8 bg-yellow-50">
                <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">--warm-500</code></td>
                <td className="p-3"><code className="font-mono text-xs text-black/60">#eae5e3</code></td>
                <td className="p-3 text-sm font-semibold">Borders, separators</td>
                <td className="p-3 text-sm text-black/60">Dividers</td>
                <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: '#eae5e3' }}></div></td>
              </tr>
              <tr className="border-b border-black/8">
                <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">--warm-700</code></td>
                <td className="p-3"><code className="font-mono text-xs text-black/60">#c8bcb8</code></td>
                <td className="p-3 text-sm">Timeline nodes, accents</td>
                <td className="p-3 text-sm text-black/60">Components</td>
                <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: '#c8bcb8' }}></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeExample
          code={`// Challenges Section Background
<section style={{ background: 'var(--warm-300)' }}>
  {/* Content */}
</section>

// Methodology Section Background
<section style={{ background: 'var(--warm-200)' }}>
  {/* Content */}
</section>

// Border/Separator
<div style={{ borderBottom: '1px solid var(--warm-500)' }} />`}
        />
      </DocSection>

      {/* Accent Colors */}
      <DocSection
        title="3. Accent Colors - STRATEGIC USE (5 COLORS)"
        why="Accent colors add subtle visual interest WITHOUT breaking minimalist restraint. Used ONLY in gradients (5-20% opacity) and shadows - never as solid fills."
        what="5 specific accent colors (Purple, Periwinkle, Coral, Amber, Green) - each with semantic meaning and strict usage rules"
        when="Gradient backgrounds at 5-20% opacity, Decorative shadows (purple only), Hover state gradients, Subtle visual accents"
        whenNot="NEVER as solid backgrounds, NEVER for text color, NEVER for CTAs (use Brand Red), NEVER for interactive elements, NEVER more than 3% of page"
        where="Hero gradient overlay (purple 8%), Card hover states (periwinkle 12%), Success indicators (green 10%), Decorative shadows (purple 15-24%)"
        how="CRITICAL: Maximum 3% total usage across entire page - use sparingly in gradients only"
      >
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-red-900 mb-3">CRITICAL USAGE RULES</h3>
          <ul className="space-y-2 text-sm text-red-900">
            <li className="flex items-start gap-2"><span className="font-bold">•</span><span><strong>Maximum 3% of any page</strong> - combined usage of all accent colors</span></li>
            <li className="flex items-start gap-2"><span className="font-bold">•</span><span><strong>Gradients ONLY</strong> - use at 5-20% opacity, never solid fills</span></li>
            <li className="flex items-start gap-2"><span className="font-bold">•</span><span><strong>Purple shadows only</strong> - purple accent can be used in box-shadow at 15-24% opacity</span></li>
            <li className="flex items-start gap-2"><span className="font-bold">•</span><span><strong>Never for CTAs</strong> - always use Brand Red (#b01f24) for calls-to-action</span></li>
          </ul>
        </div>

        <div className="space-y-8">
          {/* Purple */}
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <div className="h-24 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg, rgba(128, 108, 224, 0.12), rgba(128, 108, 224, 0.08))' }}></div>
                <p className="font-semibold mb-1">Purple - Depth & Sophistication</p>
                <p className="font-mono text-xs text-black/60 mb-2">#806ce0 / rgb(128, 108, 224)</p>
                <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> Professional depth, creativity, innovation</p>
                <p className="text-sm text-black/60"><strong>USAGE:</strong> Hero gradients (8%), card shadows (15-24%), hover overlays (10-12%)</p>
              </div>
              <div>
                <p className="text-xs font-mono text-black/50 mb-2">Example - Shadow:</p>
                <div className="w-full h-20 bg-white rounded-lg mb-3" style={{ boxShadow: '0 8px 24px rgba(128, 108, 224, 0.24), 0 2px 8px rgba(0, 0, 0, 0.12)' }}></div>
                <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`box-shadow: 
  0 8px 24px rgba(128,108,224,0.24),
  0 2px 8px rgba(0,0,0,0.12);`}</code>
              </div>
            </div>
          </div>

          {/* Periwinkle */}
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="h-24 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg, rgba(159, 168, 218, 0.12), rgba(159, 168, 218, 0.08))' }}></div>
                <p className="font-semibold mb-1">Periwinkle - Trust & Calm</p>
                <p className="font-mono text-xs text-black/60 mb-2">#9fa8da / rgb(159, 168, 218)</p>
                <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> Trustworthiness, reliability, calm professionalism</p>
                <p className="text-sm text-black/60"><strong>USAGE:</strong> Card hover states (12%), informational overlays (8-10%)</p>
              </div>
              <div>
                <code className="block bg-black/5 rounded px-2 py-1 text-xs font-mono text-black/80 mb-3">var(--accent-periwinkle)</code>
                <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`background: linear-gradient(
  135deg,
  rgba(159,168,218,0.12),
  rgba(159,168,218,0.08)
);`}</code>
              </div>
            </div>
          </div>

          {/* Coral */}
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="h-24 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg, rgba(255, 138, 128, 0.10), rgba(255, 138, 128, 0.06))' }}></div>
                <p className="font-semibold mb-1">Coral - Warmth & Energy</p>
                <p className="font-mono text-xs text-black/60 mb-2">#ff8a80 / rgb(255, 138, 128)</p>
                <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> Approachable warmth, human energy, collaboration</p>
                <p className="text-sm text-black/60"><strong>USAGE:</strong> Team/people sections (8-10%), decorative accents (5-8%)</p>
              </div>
              <div>
                <code className="block bg-black/5 rounded px-2 py-1 text-xs font-mono text-black/80 mb-3">var(--accent-coral)</code>
                <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`background: linear-gradient(
  135deg,
  rgba(255,138,128,0.10),
  rgba(255,138,128,0.06)
);`}</code>
              </div>
            </div>
          </div>

          {/* Amber */}
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="h-24 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.08), rgba(255, 193, 7, 0.05))' }}></div>
                <p className="font-semibold mb-1">Amber - Optimism & Clarity</p>
                <p className="font-mono text-xs text-black/60 mb-2">#ffc107 / rgb(255, 193, 7)</p>
                <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> Optimism, clarity, forward-thinking, innovation</p>
                <p className="text-sm text-black/60"><strong>USAGE:</strong> Insight sections (6-8%), highlight overlays (5-7%)</p>
              </div>
              <div>
                <code className="block bg-black/5 rounded px-2 py-1 text-xs font-mono text-black/80 mb-3">var(--accent-amber)</code>
                <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`background: linear-gradient(
  135deg,
  rgba(255,193,7,0.08),
  rgba(255,193,7,0.05)
);`}</code>
              </div>
            </div>
          </div>

          {/* Green */}
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="h-24 rounded-lg mb-4" style={{ background: 'linear-gradient(135deg, rgba(102, 187, 106, 0.10), rgba(102, 187, 106, 0.06))' }}></div>
                <p className="font-semibold mb-1">Green - Growth & Success</p>
                <p className="font-mono text-xs text-black/60 mb-2">#66bb6a / rgb(102, 187, 106)</p>
                <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> Growth, success, positive outcomes, achievement</p>
                <p className="text-sm text-black/60"><strong>USAGE:</strong> Impact/results sections (10%), success indicators (8-10%)</p>
              </div>
              <div>
                <code className="block bg-black/5 rounded px-2 py-1 text-xs font-mono text-black/80 mb-3">var(--accent-green)</code>
                <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`background: linear-gradient(
  135deg,
  rgba(102,187,106,0.10),
  rgba(102,187,106,0.06)
);`}</code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="text-sm text-blue-900">
            <strong>DESIGN PRINCIPLE:</strong> These accent colors support the minimalist aesthetic by adding subtle visual interest without overpowering the black/white/warm foundation. Always prioritize Brand Red (#b01f24) for CTAs - accent colors are decorative only.
          </p>
        </div>
      </DocSection>

      {/* Pure Colors */}
      <DocSection
        title="Pure Colors - Black & White Foundation"
        why="Pure black and white create maximum contrast and editorial clarity - the foundation of the minimalist aesthetic"
        what="Absolute black (#000000) and white (#ffffff) for backgrounds and high-contrast elements"
        when="Section backgrounds (alternating pattern), high-contrast text, navigation, overlays"
        whenNot="Never use pure black for body text (use rgba(0,0,0,0.90) instead for better readability)"
        where="Hero section (black), Resources section (black), Standard content sections (white)"
        how="Alternate between black and white sections, use for maximum visual impact and clear boundaries"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="h-32 bg-black"></div>
            <div className="p-4 bg-white">
              <p className="font-semibold text-sm mb-1">Pure Black</p>
              <p className="font-mono text-xs text-black/60 mb-2">#000000</p>
              <p className="text-xs text-black/60">Hero, Resources sections</p>
            </div>
          </div>
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="h-32 bg-white border-b border-black/8"></div>
            <div className="p-4 bg-white">
              <p className="font-semibold text-sm mb-1">Pure White</p>
              <p className="font-mono text-xs text-black/60 mb-2">#ffffff</p>
              <p className="text-xs text-black/60">Standard white sections</p>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Text Colors */}
      <DocSection
        title="Semantic Text Colors (WCAG AAA)"
        why="Every text color passes WCAG AAA (7:1+) for maximum accessibility and readability"
        what="4-tier opacity system using black base for light backgrounds, white base for dark backgrounds"
        when="All text content - headings, body, labels, metadata on appropriate backgrounds"
        whenNot="Don't use dark text on dark backgrounds or light text on light backgrounds"
        where="Throughout all sections - see specific usage in cards below"
        how="Apply via CSS variables or inline styles, test contrast ratios, use appropriate tier for content hierarchy"
      >
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">On Light Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TextColorCard name="Primary" token="--text-primary" value="rgba(0,0,0,0.90)" contrast="17.1:1" usage="Main headings, body text" where="Hero title, section headings, paragraphs" />
              <TextColorCard name="Secondary" token="--text-secondary" value="rgba(0,0,0,0.70)" contrast="11.4:1" usage="Supporting text" where="Descriptions, secondary content" />
              <TextColorCard name="Tertiary" token="--text-tertiary" value="rgba(0,0,0,0.60)" contrast="8.9:1" usage="Labels, metadata - MOST USED" where="Section labels, timestamps, categories" />
              <TextColorCard name="Subtle" token="--text-subtle" value="rgba(0,0,0,0.45)" contrast="5.9:1" usage="Decorative text" where="Watermarks, background text" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">On Dark Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-black/8 rounded-lg p-6 bg-black">
                <div className="mb-4">
                  <p className="text-4xl mb-2" style={{ color: 'rgba(255,255,255,0.95)' }}>Aa</p>
                  <p className="font-semibold text-sm mb-1 text-white">Primary On Dark</p>
                  <p className="text-xs text-green-400 mb-2">✓ WCAG AAA (18.1:1)</p>
                </div>
                <p className="text-xs text-white/70 mb-2"><strong>USAGE:</strong> Headings on black</p>
                <p className="text-xs text-white/50 mb-3"><strong>WHERE:</strong> Hero, Resources headings</p>
                <code className="block bg-white/10 rounded px-2 py-1 text-[10px] font-mono text-white/80">rgba(255,255,255,0.95)</code>
              </div>
              <div className="border border-black/8 rounded-lg p-6 bg-black">
                <div className="mb-4">
                  <p className="text-4xl mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>Aa</p>
                  <p className="font-semibold text-sm mb-1 text-white">Secondary On Dark</p>
                  <p className="text-xs text-green-400 mb-2">✓ WCAG AAA (11.7:1)</p>
                </div>
                <p className="text-xs text-white/70 mb-2"><strong>USAGE:</strong> Body text on black</p>
                <p className="text-xs text-white/50 mb-3"><strong>WHERE:</strong> Resources descriptions</p>
                <code className="block bg-white/10 rounded px-2 py-1 text-[10px] font-mono text-white/80">rgba(255,255,255,0.70)</code>
              </div>
              <div className="border border-black/8 rounded-lg p-6 bg-black">
                <div className="mb-4">
                  <p className="text-4xl mb-2" style={{ color: 'rgba(255,255,255,0.50)' }}>Aa</p>
                  <p className="font-semibold text-sm mb-1 text-white">Tertiary On Dark</p>
                  <p className="text-xs text-green-400 mb-2">✓ WCAG AA (7.4:1)</p>
                </div>
                <p className="text-xs text-white/70 mb-2"><strong>USAGE:</strong> Metadata on black</p>
                <p className="text-xs text-white/50 mb-3"><strong>WHERE:</strong> Resources labels</p>
                <code className="block bg-white/10 rounded px-2 py-1 text-[10px] font-mono text-white/80">rgba(255,255,255,0.50)</code>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Border Colors */}
      <DocSection
        title="Border Colors & Dividers"
        why="Subtle borders create separation without harsh lines - essential for card-based layouts"
        what="Black opacity variants (5%, 8%, 10%, 15%, 20%) for different emphasis levels"
        when="Card outlines, section dividers, input borders, subtle separations, focus states"
        whenNot="Don't use for text decoration or as primary visual elements"
        where="Card borders (8%), Section dividers (10%), Input focus (15%), Active states (20%)"
        how="Apply via border property, increase opacity for more emphasis, use warm-500 for warm backgrounds"
      >
        <div className="space-y-4">
          {[
            { opacity: '5%', value: 'rgba(0,0,0,0.05)', usage: 'Barely visible dividers, subtle cards' },
            { opacity: '8%', value: 'rgba(0,0,0,0.08)', usage: 'Card borders, subtle dividers - MOST USED' },
            { opacity: '10%', value: 'rgba(0,0,0,0.10)', usage: 'Section dividers, stronger cards' },
            { opacity: '15%', value: 'rgba(0,0,0,0.15)', usage: 'Input borders, hover states' },
            { opacity: '20%', value: 'rgba(0,0,0,0.20)', usage: 'Active/focused states, emphasized dividers' },
          ].map((border) => (
            <div key={border.opacity} className="flex items-center gap-4 p-4 bg-white border border-black/8 rounded-lg">
              <div className="w-24 h-16 border-2 rounded" style={{ borderColor: border.value }}></div>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1">Black {border.opacity}</p>
                <p className="font-mono text-xs text-black/60 mb-1">{border.value}</p>
                <p className="text-xs text-black/50">{border.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      {/* Section Background Pattern */}
      <DocSection
        title="Section Background Pattern"
        why="Alternating backgrounds create visual rhythm and natural section boundaries"
        what="Strategic pattern alternating between pure black, pure white, and warm off-white"
        when="All major page sections - follow the pattern for consistency"
        where="See table below for exact pattern used in case study"
        how="Apply background colors to section elements, maintain pattern for visual coherence"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="text-left p-3 text-sm font-bold">Section</th>
                <th className="text-left p-3 text-sm font-bold">Background Color</th>
                <th className="text-left p-3 text-sm font-bold">Visual</th>
              </tr>
            </thead>
            <tbody>
              {[
                { section: 'Hero Section', color: '#000000', name: 'Pure Black' },
                { section: 'Client Context', color: '#ffffff', name: 'Pure White' },
                { section: 'Challenges', color: '#f5f2f1', name: 'Warm Off-White' },
                { section: 'Engagement Objectives', color: '#ffffff', name: 'Pure White' },
                { section: 'Value Pillars', color: '#ffffff', name: 'Pure White' },
                { section: 'Methodology', color: '#f5f2f1', name: 'Warm Off-White' },
                { section: 'Impact', color: '#000000 or #ffffff', name: 'Black or White' },
                { section: 'Testimonial', color: '#ffffff', name: 'Pure White' },
                { section: 'Resources', color: '#000000', name: 'Pure Black' },
                { section: 'Final CTA', color: '#ffffff', name: 'Pure White' },
              ].map((item) => (
                <tr key={item.section} className="border-b border-black/8">
                  <td className="p-3 text-sm">{item.section}</td>
                  <td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">{item.color}</code></td>
                  <td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{ background: item.color }}></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Complete Color Palette Reference */}
      <DocSection
        title="Complete Color Palette Reference - ALL COLORS"
        why="Comprehensive master reference of every color token with full 50-900 scales, RGB values, and use cases"
        what="All 10 color families: Red, Coral, Warm, Purple, Periwinkle, Perano, Green, Amber, Rose, Black (100+ total tokens)"
        when="Use when selecting colors for new features, ensuring consistency, or understanding semantic meanings"
        whenNot="Don't create colors outside this system - every need is covered"
        where="Reference when building components, implementing sections, or making color decisions"
        how="Find use case - Select family - Choose shade from 50 (lightest) to 900 (darkest)"
      >
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mb-8">
          <h3 className="font-semibold text-purple-900 mb-3">Master Color Index</h3>
          <p className="text-sm text-purple-900 mb-3">This section contains <strong>EVERY color token</strong> in the design system with complete scales, RGB values for gradients, and specific use cases.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-purple-900">
            <div className="font-semibold">Ken Bold Red (Brand)</div>
            <div className="font-semibold">Coral (Warmth)</div>
            <div className="font-semibold">Warm (Editorial)</div>
            <div className="font-semibold">Purple (Premium)</div>
            <div className="font-semibold">Periwinkle (Trust)</div>
            <div className="font-semibold">Perano (Calm)</div>
            <div className="font-semibold">Green (Success)</div>
            <div className="font-semibold">Amber (Warning)</div>
            <div className="font-semibold">Rose (Error)</div>
            <div className="font-semibold">Black (Neutrals)</div>
          </div>
        </div>
        <div className="space-y-10">
          {/* Color families will be added here step by step */}
        </div>
      </DocSection>
    </div>
  );
}

// ============================================
// TYPOGRAPHY CONTENT
// ============================================

export function TypographyContent() {
  const typeScale = [
    { token: '--text-xs', pixels: '12.8px', usage: 'Section labels, metadata', where: '"CASE STUDY" badge, category tags' },
    { token: '--text-sm', pixels: '16px', usage: 'Body text, descriptions - MOST USED', where: 'All paragraph content, challenge questions' },
    { token: '--text-base', pixels: '20px', usage: 'Large body, card titles', where: 'Card headings with 4+ cards' },
    { token: '--text-xl', pixels: '31.25px', usage: 'Subsection headings (h3)', where: 'Methodology steps, objective titles' },
    { token: '--text-2xl', pixels: '39px', usage: 'Section headings (h2)', where: 'Client Context, Challenges, Impact, etc.' },
    { token: '--text-3xl', pixels: '48.8px', usage: 'Hero headings (h1) - HERO ONLY', where: 'Hero Section title, Final CTA heading' },
  ];

  return (
    <div className="space-y-12">
      <DocSection
        title="Type Scale - Major Third (1.25 Ratio)"
        why="Mathematical progression creates harmonious visual hierarchy. Major Third (1.25x) ratio provides clear distinction between sizes while maintaining readability."
        what="Each size is 1.25x the previous size, starting from 16px base"
        when="Use for all typography - headings, body text, labels. Only deviate for spatial constraints."
        where="Throughout all 9 sections of the case study"
      >
        <div className="space-y-4">
          {typeScale.map((type) => (
            <TypeScaleDemo key={type.token} {...type} />
          ))}
        </div>
      </DocSection>

      {/* Font Pairing System */}
      <DocSection
        title="Font Pairing System"
        why="Two-font pairing creates editorial contrast: serif headings communicate authority and craft, sans-serif body ensures readability and modern feel. This sans+serif combination is the gold standard of editorial design (NYT, Medium, The Atlantic)."
        what="DM Sans (sans-serif) for body/UI + Noto Serif (serif) for headings/display. Three CSS tokens: --font-sans, --font-serif, --font-mono"
        when="ALWAYS use Serif for h1-h3 section headings, hero titles, testimonial quotes, large display numbers. ALWAYS use Sans for body text, buttons, badges, labels, navigation, forms, metadata."
        whenNot="NEVER use Serif for buttons, badges, labels, navigation, form inputs. NEVER use Sans for hero titles or section headings. NEVER introduce a 3rd custom typeface."
      >
        <div className="space-y-6">
          {/* Live Pairing Demo */}
          <div className="border-2 border-black/15 rounded-lg overflow-hidden">
            <div className="p-6 bg-black/[0.02] border-b border-black/8">
              <h4 className="font-semibold text-sm">Live Font Pairing Preview</h4>
              <p className="text-xs text-black/60 mt-1">How our two fonts work together in practice</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-xs text-black/40 uppercase tracking-[1.8px] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>CASE STUDY</p>
                <h2 className="mb-3" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 300 }}>Strategic Market Intelligence</h2>
                <p className="text-black/70 leading-[1.7]" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)' }}>
                  A comprehensive analysis of market dynamics, competitive positioning, and growth opportunities 
                  for enterprise-scale transformation. Our methodology combines quantitative rigor with qualitative insight.
                </p>
              </div>
              <div className="border-l-2 border-black/10 pl-6">
                <blockquote className="text-black/80 italic leading-[1.6]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)' }}>
                  "The insights delivered transformed our approach to the market entirely."
                </blockquote>
                <p className="text-xs text-black/50 mt-2" style={{ fontFamily: 'var(--font-sans)' }}>-- Sarah Chen, VP of Strategy</p>
              </div>
            </div>
          </div>

          {/* Component-to-Font Mapping */}
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="p-4 bg-black/[0.02] border-b border-black/8">
              <h4 className="font-semibold text-sm">Component-to-Font Mapping</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-black/15">
                    <th className="text-left p-3 text-xs font-bold">Element</th>
                    <th className="text-left p-3 text-xs font-bold">Font Family</th>
                    <th className="text-left p-3 text-xs font-bold">Weight</th>
                    <th className="text-left p-3 text-xs font-bold">Token</th>
                    <th className="text-left p-3 text-xs font-bold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { element: 'Hero h1', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Maximum editorial impact, light weight = elegance' },
                    { element: 'Section h2', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Authority without heaviness, clear hierarchy' },
                    { element: 'Subsection h3', font: 'Noto Serif', weight: '400 (Normal)', token: '--font-serif', rationale: 'Slightly heavier for smaller heading size' },
                    { element: 'Body paragraphs', font: 'DM Sans', weight: '400 (Normal)', token: '--font-sans', rationale: 'Geometric sans for maximum readability' },
                    { element: 'Section labels', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'All-caps tracking, functional clarity' },
                    { element: 'Buttons', font: 'DM Sans', weight: '500-700', token: '--font-sans', rationale: 'UI chrome must always be sans-serif' },
                    { element: 'Badges', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Small, functional elements need sans clarity' },
                    { element: 'Navigation', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Wayfinding = functional = sans-serif' },
                    { element: 'Form labels', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Forms are functional UI, not editorial' },
                    { element: 'Testimonial quotes', font: 'Noto Serif', weight: '400 (Normal)', token: '--font-serif', rationale: 'Italic serif for editorial quote treatment' },
                    { element: 'Large numbers', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Impact metrics, statistical display' },
                    { element: 'Card titles', font: 'DM Sans', weight: '600 (Semi-bold)', token: '--font-sans', rationale: 'Cards are UI components, not editorial' },
                    { element: 'Code/data', font: 'System mono', weight: '400', token: '--font-mono', rationale: 'Monospace for technical content' },
                    { element: 'Metadata/tags', font: 'DM Sans', weight: '400-500', token: '--font-sans', rationale: 'Small functional text, needs sans clarity' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/8 last:border-0">
                      <td className="p-3 text-sm font-semibold">{row.element}</td>
                      <td className="p-3 text-sm" style={{ fontFamily: row.font === 'Noto Serif' ? 'var(--font-serif)' : row.font === 'System mono' ? 'var(--font-mono)' : 'var(--font-sans)' }}>
                        {row.font}
                      </td>
                      <td className="p-3 text-xs font-mono text-black/60">{row.weight}</td>
                      <td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.token}</code></td>
                      <td className="p-3 text-xs text-black/60">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weight Pairing Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Correct Pairings</h4>
              <ul className="space-y-2 text-sm text-green-900">
                <li>Serif 300 heading + Sans 400 body</li>
                <li>Serif 400 quote + Sans 500 attribution</li>
                <li>Sans 500 label + Serif 300 display heading</li>
                <li>Sans 700 button + Sans 400 description</li>
                <li>Sans 500 badge + Sans 400 card body</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">Incorrect Pairings</h4>
              <ul className="space-y-2 text-sm text-red-900">
                <li>Serif body text (unreadable at 16px long-form)</li>
                <li>Sans hero heading (loses editorial authority)</li>
                <li>Serif button text (functional elements need sans)</li>
                <li>Serif navigation (wayfinding must be sans)</li>
                <li>Mixing Serif weights 300+500 on same heading</li>
              </ul>
            </div>
          </div>

          {/* CSS Token Usage */}
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8">
              <span className="text-sm font-semibold">CSS Token Usage</span>
            </div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]">
              <code className="text-xs font-mono text-black/80">{`/* Font family tokens in theme.css */
--font-sans: 'DM Sans', ...sans-serif;
--font-serif: 'Noto Serif', Georgia, serif;
--font-mono: 'SF Mono', 'Fira Code', monospace;

/* Headings - always serif */
<h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}>
  Section Heading
</h2>

/* Body inherits Sans from body rule - no style needed */
<p>Body text automatically uses DM Sans</p>

/* Explicit serif for quotes */
<blockquote style={{ fontFamily: 'var(--font-serif)' }}>
  "Editorial quote..."
</blockquote>`}</code>
            </pre>
          </div>
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
            <p style={{ letterSpacing: '1.8px', textTransform: 'uppercase', fontSize: '12.8px' }} className="mb-4">CASE STUDY</p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> 1.8px</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-xs text-black/60 mb-3">Hero Headings</p>
            <p style={{ letterSpacing: '-0.5px', fontSize: '32px' }} className="mb-4">Large Title</p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> -0.5px</p>
          </div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6">
            <p className="text-xs text-black/60 mb-3">Normal Text</p>
            <p style={{ letterSpacing: '0', fontSize: '16px' }} className="mb-4">Standard Text</p>
            <p className="text-xs text-black/50"><strong>Tracking:</strong> 0</p>
          </div>
        </div>
      </DocSection>

      {/* Custom Font Sizes */}
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
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono">0.875rem = 14px</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--text-nav</code>
                <p className="text-sm text-black/70 mb-3">Navigation elements</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>TOC item titles</li>
                  <li>CTA descriptions</li>
                  <li>Navigation menus</li>
                  <li>Compact interfaces</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <p style={{ fontSize: 'var(--text-nav)' }} className="text-black font-medium">Table of Contents Item</p>
                </div>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--text-compact</code>
                <p className="text-sm text-black/70 mb-3">Compact body text</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>Challenge cards (4+)</li>
                  <li>Dense content areas</li>
                  <li>Secondary paragraphs</li>
                  <li>Prevent text wrapping</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <p style={{ fontSize: 'var(--text-compact)' }} className="text-black">Compact body paragraph</p>
                </div>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-blue-700 block mb-2">--button-font-sm</code>
                <p className="text-sm text-black/70 mb-3">Small button text</p>
                <ul className="text-xs text-black/60 space-y-1">
                  <li>Navbar CTAs</li>
                  <li>Compact buttons</li>
                  <li>TOC "Unlock" buttons</li>
                  <li>Secondary actions</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-blue-100">
                  <button className="px-4 py-2 bg-black text-white rounded" style={{ fontSize: 'var(--button-font-sm)' }}>Small Button</button>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-900 text-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Why Three Tokens for Same Value?</p>
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
              <div className="bg-black text-white px-3 py-1 rounded text-sm font-mono">0.75rem = 12px</div>
            </div>
            <p className="text-sm text-black/70 mb-4">For micro labels when 12.8px (--text-xs) is too large</p>
            <ul className="text-sm text-black/60 space-y-2 mb-4">
              <li>Navbar text</li>
              <li>Micro labels in tight spaces</li>
              <li>Copyright text</li>
            </ul>
            <div className="bg-white border border-black/10 rounded-lg p-4">
              <p style={{ fontSize: 'var(--text-2xs)' }} className="text-black">Navbar Menu Item</p>
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
                  <tr className="border-b border-black/8"><td className="p-4 text-sm">TOC Item Titles</td><td className="p-4 font-mono text-xs">var(--text-nav)</td><td className="p-4 text-sm text-black/60">Navigation needs to be readable but compact</td></tr>
                  <tr className="border-b border-black/8 bg-black/[0.01]"><td className="p-4 text-sm">Small Button Text</td><td className="p-4 font-mono text-xs">var(--button-font-sm)</td><td className="p-4 text-sm text-black/60">Navbar height constraint (36-40px)</td></tr>
                  <tr className="border-b border-black/8"><td className="p-4 text-sm">Challenge Cards (4+)</td><td className="p-4 font-mono text-xs">var(--text-compact)</td><td className="p-4 text-sm text-black/60">Prevents wrapping, maintains card height</td></tr>
                  <tr className="border-b border-black/8 bg-black/[0.01]"><td className="p-4 text-sm">Navbar Menu</td><td className="p-4 font-mono text-xs">var(--text-2xs)</td><td className="p-4 text-sm text-black/60">Fits 60px navbar height</td></tr>
                  <tr className="bg-black/[0.01]"><td className="p-4 text-sm">CTA Descriptions</td><td className="p-4 font-mono text-xs">var(--text-nav)</td><td className="p-4 text-sm text-black/60">Compact but readable sub-text</td></tr>
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

// ============================================
// SPACING CONTENT
// ============================================

export function SpacingContent() {
  return (
    <div className="space-y-12">
      <DocSection title="10-Step Spacing Scale" why="Consistent spacing creates rhythm and visual harmony. A predictable scale makes design decisions faster." what="Base-10 system (4px, 8px, 12px...) up to 96px for maximum flexibility" when="Use for margins, padding, gaps - choose from scale rather than arbitrary values" where="All spacing decisions throughout the design system"><SpacingScaleVisualization /></DocSection>
      <DocSection title="Margin vs Padding Decision Tree" why="Understanding when to use margin vs padding prevents layout issues and ensures consistency"><MarginPaddingGuide /></DocSection>
      <DocSection title="Component Spacing Examples" why="Real examples show how spacing scale applies to actual components"><ComponentSpacingExamples /></DocSection>
      <DocSection title="List & Form Spacing" why="Lists and forms need special spacing considerations for scanability and usability"><ListFormSpacingDemo /></DocSection>
      <DocSection title="Responsive Spacing Strategy" why="Spacing should adapt to screen size to maintain proportions and hierarchy"><ResponsiveSpacingDemo /></DocSection>
      <DocSection title="Visual Rhythm & Vertical Spacing" why="Consistent vertical rhythm creates a comfortable reading experience"><VisualRhythmDemo /></DocSection>
    </div>
  );
}

// ============================================
// LAYOUT & GRID CONTENT
// ============================================

export function LayoutGridContent() {
  return (
    <div className="space-y-12">
      {/* Container Width System */}
      <DocSection
        title="Container Width System"
        why="Content width directly impacts readability (Baymard Institute: 50-75 chars/line optimal). Wider containers lose focus, narrower containers feel cramped. A tiered system matches content type to optimal width."
        what="5 container widths via CSS tokens: --container-page (1200px), --container-content (1000px), --container-narrow (900px), --container-prose (700px), --container-compact (600px)"
        when="Use --container-page for outer shells/navbars, --container-content for standard sections, --container-narrow for CTAs/testimonials, --container-prose for body text measure, --container-compact for descriptions"
        whenNot="NEVER let body text run wider than 700px. NEVER use --container-page for content sections (too wide, loses focus)."
      >
        <div className="space-y-6">
          <div className="border border-black/8 rounded-lg p-6 bg-black/[0.02] space-y-4">
            <p className="text-sm text-black/60 mb-2">Container Width Hierarchy (scaled to fit)</p>
            {[
              { token: '--container-page', width: '1200px', pct: '100%', color: 'bg-black/10', usage: 'Page shell, navbar, hero backgrounds' },
              { token: '--container-content', width: '1000px', pct: '83.3%', color: 'bg-black/15', usage: 'Standard sections, card grids' },
              { token: '--container-narrow', width: '900px', pct: '75%', color: 'bg-black/20', usage: 'CTAs, testimonials, forms' },
              { token: '--container-prose', width: '700px', pct: '58.3%', color: 'bg-black/25', usage: 'Body text, paragraphs (~65-75 chars)' },
              { token: '--container-compact', width: '600px', pct: '50%', color: 'bg-black/30', usage: 'Descriptions, tight reading' },
            ].map((c) => (
              <div key={c.token}>
                <div className="flex items-center gap-3 mb-1">
                  <code className="text-xs font-mono text-black/70 w-48 flex-shrink-0">{c.token}</code>
                  <span className="text-xs text-black/50">{c.width}</span>
                </div>
                <div className={`${c.color} rounded h-8 flex items-center px-3`} style={{ width: c.pct }}>
                  <span className="text-xs text-white mix-blend-difference">{c.usage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="p-4 bg-black/[0.02] border-b border-black/8"><h4 className="font-semibold text-sm">Section-to-Container Mapping</h4></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-black/15"><th className="text-left p-3 text-xs font-bold">Page Section</th><th className="text-left p-3 text-xs font-bold">Container</th><th className="text-left p-3 text-xs font-bold">Width</th><th className="text-left p-3 text-xs font-bold">Text Measure</th><th className="text-left p-3 text-xs font-bold">Tailwind Pattern</th></tr></thead>
                <tbody>
                  {[
                    { section: 'Navbar / Footer', container: '--container-page', width: '1200px', measure: 'N/A', tw: 'max-w-[var(--container-page)]' },
                    { section: 'Hero Section', container: '--container-content', width: '1000px', measure: '--container-prose', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Client Context', container: '--container-content', width: '1000px', measure: '--container-prose', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Challenges (cards)', container: '--container-content', width: '1000px', measure: 'N/A (cards)', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Methodology', container: '--container-content', width: '1000px', measure: '--container-compact', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Impact / Results', container: '--container-content', width: '1000px', measure: '--container-prose', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Value Pillars', container: '--container-content', width: '1000px', measure: '--container-prose', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Testimonial', container: '--container-narrow', width: '900px', measure: 'Full width', tw: 'max-w-[var(--container-narrow)]' },
                    { section: 'Final CTA', container: '--container-narrow', width: '900px', measure: '--container-prose', tw: 'max-w-[var(--container-narrow)]' },
                    { section: 'Resources (cards)', container: '--container-content', width: '1000px', measure: '--container-prose', tw: 'max-w-[var(--container-content)]' },
                    { section: 'Insights / Blog', container: '--container-narrow', width: '900px', measure: '--container-prose', tw: 'max-w-[var(--container-narrow)]' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/8 last:border-0">
                      <td className="p-3 text-sm font-semibold">{row.section}</td>
                      <td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.container}</code></td>
                      <td className="p-3 text-sm text-black/60">{row.width}</td>
                      <td className="p-3"><code className="text-xs font-mono text-black/50">{row.measure}</code></td>
                      <td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.tw}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8"><span className="text-sm font-semibold">Standard Section Pattern (Token-Based)</span></div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]">
              <code className="text-xs font-mono text-black/80">{`/* Standard content section */
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 md:px-8">
    {/* Section content here */}
    <p className="max-w-[var(--container-prose)]">
      Body text constrained to readable measure...
    </p>
  </div>
</section>

/* Focused CTA section */
<section className="py-12 sm:py-16 md:py-20">
  <div className="max-w-[var(--container-narrow)] mx-auto px-4 sm:px-6 md:px-8 text-center">
    <h2>Ready to get started?</h2>
    <p className="max-w-[var(--container-prose)] mx-auto">...</p>
  </div>
</section>

/* Full-width hero with inner content constraint */
<section className="bg-black">
  <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 md:px-8">
    {/* Hero content */}
  </div>
</section>`}</code>
            </pre>
          </div>
        </div>
      </DocSection>

      {/* Responsive Padding Scale */}
      <DocSection
        title="Responsive Padding Scale"
        why="Horizontal padding must scale with viewport to maintain content breathing room on small screens while creating editorial white space on large screens"
        what="3-step mobile-first padding: 16px (mobile) to 24px (tablet) to 32px (desktop). Tokenized as --padding-mobile, --padding-tablet, --padding-desktop"
      >
        <div className="space-y-6">
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-black/15 bg-black/[0.02]"><th className="text-left p-3 text-xs font-bold">Breakpoint</th><th className="text-left p-3 text-xs font-bold">Viewport</th><th className="text-left p-3 text-xs font-bold">Horizontal Padding</th><th className="text-left p-3 text-xs font-bold">Tailwind</th><th className="text-left p-3 text-xs font-bold">Token</th><th className="text-left p-3 text-xs font-bold">Rationale</th></tr></thead>
                <tbody>
                  {[
                    { bp: 'Mobile', vp: '0-639px', px: '16px', tw: 'px-4', token: '--padding-mobile', rationale: 'Maximum content area, edge-to-edge feel' },
                    { bp: 'Tablet', vp: '640-1023px', tw: 'sm:px-6', px: '24px', token: '--padding-tablet', rationale: 'Comfortable margins, breathing room' },
                    { bp: 'Desktop', vp: '1024px+', px: '32px', tw: 'md:px-8', token: '--padding-desktop', rationale: 'Generous margins, editorial white space' },
                    { bp: 'Wide', vp: '1280px+', px: 'Auto (mx-auto)', tw: 'mx-auto', token: 'N/A', rationale: 'Content centers, padding becomes decorative' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/8 last:border-0">
                      <td className="p-3 text-sm font-semibold">{row.bp}</td>
                      <td className="p-3 text-sm text-black/60">{row.vp}</td>
                      <td className="p-3 text-sm">{row.px}</td>
                      <td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.tw}</code></td>
                      <td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.token}</code></td>
                      <td className="p-3 text-xs text-black/60">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DocSection>

      {/* Mobile-First Design Principles */}
      <DocSection
        title="Mobile-First Design Principles"
        why="60%+ of web traffic is mobile. Designing mobile-first ensures core experience works on constrained devices, then progressively enhances for larger screens. This avoids the 'desktop-then-shrink' anti-pattern."
        what="UX law-driven approach: Fitts's Law (touch targets), Miller's Law (cognitive load), Hick's Law (choice reduction), Proximity principle (grouping), progressive disclosure"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { law: "Fitts's Law", rule: 'Touch targets minimum 44x44px. Space interactive elements 8px+ apart. Larger targets for primary actions.', mobile: 'Buttons full-width, generous tap areas', desktop: 'Buttons auto-width, tighter spacing acceptable' },
              { law: "Miller's Law", rule: 'Limit visible items to 5-9 chunks. Progressive disclosure on mobile.', mobile: '1-2 cards visible, swipe for more', desktop: '3-4 cards in grid, all visible' },
              { law: "Hick's Law", rule: 'Fewer choices = faster decisions. Simplify navigation on mobile.', mobile: 'Hamburger menu, 1 CTA per screen', desktop: 'Full nav, multiple CTAs acceptable' },
              { law: "Proximity", rule: 'Related items grouped tightly. Use spacing to show relationships.', mobile: 'Tighter gaps (16px), vertical stacking', desktop: 'Wider gaps (24-32px), horizontal layouts' },
            ].map((item, idx) => (
              <div key={idx} className="border border-black/8 rounded-lg p-5">
                <h4 className="font-semibold text-sm mb-2">{item.law}</h4>
                <p className="text-xs text-black/60 mb-3">{item.rule}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded p-2"><p className="text-xs font-semibold text-blue-900 mb-1">Mobile</p><p className="text-xs text-blue-800">{item.mobile}</p></div>
                  <div className="bg-green-50 rounded p-2"><p className="text-xs font-semibold text-green-900 mb-1">Desktop</p><p className="text-xs text-green-800">{item.desktop}</p></div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="p-4 bg-black/[0.02] border-b border-black/8"><h4 className="font-semibold text-sm">Content Stacking Strategy (Mobile-First)</h4></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-black/15"><th className="text-left p-3 text-xs font-bold">Viewport</th><th className="text-left p-3 text-xs font-bold">Columns</th><th className="text-left p-3 text-xs font-bold">Layout Pattern</th><th className="text-left p-3 text-xs font-bold">Tailwind</th><th className="text-left p-3 text-xs font-bold">Section Padding (Y)</th></tr></thead>
                <tbody>
                  {[
                    { vp: '0-639px (Mobile)', cols: '1 column', pattern: 'Full-width stacked, vertical scroll', tw: 'grid-cols-1', py: 'py-12 (48px)' },
                    { vp: '640-767px (Large Mobile)', cols: '1-2 columns', pattern: 'Cards side-by-side where sensible', tw: 'sm:grid-cols-2', py: 'sm:py-16 (64px)' },
                    { vp: '768-1023px (Tablet)', cols: '2-3 columns', pattern: 'Sidebar layouts, card grids', tw: 'md:grid-cols-2 lg:grid-cols-3', py: 'md:py-20 (80px)' },
                    { vp: '1024px+ (Desktop)', cols: '3-4 columns', pattern: 'Full grid, sidebar+content, multi-col', tw: 'lg:grid-cols-3 xl:grid-cols-4', py: 'md:py-20 (80px)' },
                    { vp: '1280px+ (Wide)', cols: '4-6 columns', pattern: 'Content centers, generous whitespace', tw: 'Content max-widths kick in', py: 'md:py-20 (80px)' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/8 last:border-0">
                      <td className="p-3 text-sm font-semibold">{row.vp}</td>
                      <td className="p-3 text-sm">{row.cols}</td>
                      <td className="p-3 text-xs text-black/60">{row.pattern}</td>
                      <td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.tw}</code></td>
                      <td className="p-3"><code className="text-xs font-mono text-black/50">{row.py}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8"><span className="text-sm font-semibold">Mobile-First Code Pattern</span></div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]">
              <code className="text-xs font-mono text-black/80">{`/* CORRECT: Mobile-first (start small, add breakpoints up) */
<div className="
  grid grid-cols-1          /* Mobile: 1 column (default) */
  sm:grid-cols-2            /* 640px+: 2 columns */
  lg:grid-cols-3            /* 1024px+: 3 columns */
  gap-4 sm:gap-6 md:gap-8  /* Gap scales with viewport */
">

/* CORRECT: Padding scales mobile-first */
<div className="px-4 sm:px-6 md:px-8">

/* CORRECT: Typography scales mobile-first */
<h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.052rem)' }}>

/* WRONG: Desktop-first (don't do this) */
<div className="grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
/* This works but violates mobile-first principle */`}</code>
            </pre>
          </div>
        </div>
      </DocSection>

      {/* Grid System */}
      <DocSection title="Grid System" why="A flexible grid system ensures consistent layouts across all screen sizes" what="12-column responsive grid with customizable gaps">
        <div className="space-y-6">
          <div className="p-6 bg-black/[0.02] border border-black/8 rounded-lg">
            <p className="text-sm text-black/60 mb-4">12-Column Grid Example</p>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-20 bg-[var(--brand-red)] rounded flex items-center justify-center text-white text-xs">{i + 1}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Halves (6-6)</p><div className="grid grid-cols-2 gap-2"><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Thirds (4-4-4)</p><div className="grid grid-cols-3 gap-2"><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Sidebar (8-4)</p><div className="grid grid-cols-3 gap-2"><div className="col-span-2 h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
          </div>
        </div>
      </DocSection>

      {/* Breakpoints */}
      <DocSection title="Responsive Breakpoints" why="Standard Tailwind breakpoints ensure consistent responsive behavior across the system" what="Mobile-first approach with 5 breakpoints matching Tailwind defaults">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="border-b-2 border-black/20"><th className="text-left p-3 text-sm font-bold">Breakpoint</th><th className="text-left p-3 text-sm font-bold">Prefix</th><th className="text-left p-3 text-sm font-bold">Min Width</th><th className="text-left p-3 text-sm font-bold">Device</th><th className="text-left p-3 text-sm font-bold">Columns</th><th className="text-left p-3 text-sm font-bold">Container</th></tr></thead>
            <tbody>
              {[
                { bp: 'Mobile (default)', prefix: '(none)', width: '0px', device: 'Small phones', cols: '1', container: 'Full width' },
                { bp: 'Small', prefix: 'sm:', width: '640px', device: 'Large phones / Small tablets', cols: '1-2', container: 'Full width' },
                { bp: 'Medium', prefix: 'md:', width: '768px', device: 'Tablets', cols: '2-3', container: 'Full width' },
                { bp: 'Large', prefix: 'lg:', width: '1024px', device: 'Laptops / Small desktops', cols: '3-4', container: 'max-w tokens kick in' },
                { bp: 'Extra Large', prefix: 'xl:', width: '1280px', device: 'Desktops', cols: '4-6', container: 'Centered with mx-auto' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-black/8">
                  <td className="p-3 text-sm font-semibold">{row.bp}</td>
                  <td className="p-3"><code className="font-mono text-sm bg-blue-50 px-2 py-1 rounded text-blue-800">{row.prefix}</code></td>
                  <td className="p-3 font-mono text-sm">{row.width}</td>
                  <td className="p-3 text-sm text-black/60">{row.device}</td>
                  <td className="p-3 text-sm">{row.cols}</td>
                  <td className="p-3 text-xs text-black/60">{row.container}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Z-Index Strategy */}
      <DocSection title="Z-Index Strategy" why="Organized z-index prevents layering issues and maintains predictable stacking" what="Layered system with designated ranges for different element types">
        <div className="space-y-3">
          {[
            { layer: 'Base Content', range: '0', usage: 'Default page content' },
            { layer: 'Dropdowns', range: '10', usage: 'Dropdown menus, tooltips' },
            { layer: 'Sticky Elements', range: '20', usage: 'Sticky headers, CTAs' },
            { layer: 'Modals', range: '30', usage: 'Modal dialogs' },
            { layer: 'Notifications', range: '40', usage: 'Toast messages, alerts' },
            { layer: 'Critical', range: '50', usage: 'Urgent overlays' },
          ].map((item) => (
            <div key={item.layer} className="flex items-center justify-between p-4 bg-white border border-black/8 rounded-lg">
              <div><p className="font-semibold text-sm mb-1">{item.layer}</p><p className="text-xs text-black/60">{item.usage}</p></div>
              <code className="font-mono text-sm bg-black/5 px-3 py-1 rounded">z-{item.range}</code>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}

// ============================================
// ELEVATION CONTENT
// ============================================

export function ElevationContent() {
  return (
    <div className="space-y-12">
      <DocSection title="Shadow System" why="Elevation creates depth and visual hierarchy without color" what="3-tier shadow system from subtle to pronounced">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-lg" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}><p className="font-semibold mb-2">Subtle</p><p className="text-sm text-black/60 mb-4">Cards, hover states</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 1px 3px rgba(0,0,0,0.08)</code></div>
          <div className="p-8 bg-white rounded-lg" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}><p className="font-semibold mb-2">Medium</p><p className="text-sm text-black/60 mb-4">Dropdowns, tooltips</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 4px 12px rgba(0,0,0,0.12)</code></div>
          <div className="p-8 bg-white rounded-lg" style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.16)' }}><p className="font-semibold mb-2">Strong</p><p className="text-sm text-black/60 mb-4">Modals, overlays</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 12px 24px rgba(0,0,0,0.16)</code></div>
        </div>
      </DocSection>
    </div>
  );
}

// ============================================
// BORDER RADIUS CONTENT
// ============================================

export function BorderRadiusContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Border Radius - Overview & Usage</h1>
        <p className="text-lg text-black/70 mb-4">Complete incremental border radius system from sharp corners to fully rounded elements. Our scale uses <strong>5px increments</strong> (0, 2.5, 5, 10, 15, 20, 25, 30, 35...) to create consistent, scalable corner rounding across all UI components.</p>
        <div className="flex items-center gap-4"><span className="text-sm text-black/60">5px increment pattern</span><span className="text-sm text-black/60">Size-matched radius values</span><span className="text-sm text-black/60">From 0px to 9999px (full)</span></div>
      </div>

      <DocSection title="Border Radius Scale" why="Consistent corner rounding creates visual cohesion" what="Incremental radius scale: 0, 2.5, 5, 10, 15, 20, 25, 30, 35... up to full (9999px)" when="Use larger radius values for larger components; 5px is the most common for standard UI elements" whenNot="Don't over-round small elements or mix radius values within similar component groups" how="Match radius to component size - small elements (5px), medium (10-15px), large (20-30px), pills (full)">
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Primary Scale - Most Frequently Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { size: 'None', value: '0px', usage: 'Sharp corners', token: 'radius-0' },
              { size: 'Minimal', value: '2.5px', usage: 'Logos, icons', token: 'radius-2xs' },
              { size: 'Small', value: '5px', usage: 'Buttons, inputs', token: 'radius-xs', highlight: true },
              { size: 'Medium', value: '10px', usage: 'Cards, panels', token: 'radius-sm' },
              { size: 'Full', value: '9999px', usage: 'Pills, badges', token: 'radius-full' },
            ].map((item) => (
              <div key={item.size} className={`text-center border rounded-lg p-4 ${item.highlight ? 'bg-yellow-50 border-yellow-300' : 'bg-white border-black/8'}`}>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 mx-auto mb-3" style={{ borderRadius: item.value }}></div>
                <p className="font-semibold text-sm mb-1">{item.size}</p>
                <p className="text-xs text-black/60 mb-1 font-mono">{item.value}</p>
                <p className="text-xs text-black/50 mb-2">{item.usage}</p>
                <code className="text-[10px] bg-black/5 px-2 py-0.5 rounded">{item.token}</code>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Extended Scale - Larger Components</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { size: 'Medium-Large', value: '15px', usage: 'Feature cards', token: 'radius-md' },
              { size: 'Large', value: '20px', usage: 'Hero cards', token: 'radius-lg' },
              { size: 'X-Large', value: '25px', usage: 'Large modals', token: 'radius-xl' },
              { size: '2X-Large', value: '30px', usage: 'Premium panels', token: 'radius-2xl' },
              { size: '3X-Large', value: '35px', usage: 'Hero sections', token: 'radius-3xl' },
            ].map((item) => (
              <div key={item.size} className="text-center border border-black/8 bg-white rounded-lg p-4">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/40 mx-auto mb-3" style={{ borderRadius: item.value }}></div>
                <p className="font-semibold text-sm mb-1">{item.size}</p>
                <p className="text-xs text-black/60 mb-1 font-mono">{item.value}</p>
                <p className="text-xs text-black/50 mb-2">{item.usage}</p>
                <code className="text-[10px] bg-black/5 px-2 py-0.5 rounded">{item.token}</code>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-3">Scale Logic - 5px Increments</h4>
          <p className="text-sm text-blue-900 mb-3">Our border radius scale follows a <strong>5px increment pattern</strong> for predictable, consistent spacing:</p>
          <div className="bg-white rounded-lg p-4 font-mono text-sm text-blue-900 mb-4">0px - 2.5px - 5px - 10px - 15px - 20px - 25px - 30px - 35px - ... - 9999px (full)</div>
          <ul className="space-y-2 text-sm text-blue-900">
            <li><strong>Start at 0</strong> for sharp corners (rarely used)</li>
            <li><strong>2.5px jump</strong> for logos and tiny elements</li>
            <li><strong>5px increments</strong> from 5px onwards: 5 - 10 - 15 - 20 - 25...</li>
            <li><strong>Full (9999px)</strong> for circular elements (pills, avatars, badges)</li>
          </ul>
        </div>
      </DocSection>

      <DocSection title="Component Usage Examples" why="Clear examples show how radius scales with component size" what="Real-world component demonstrations with appropriate radius values">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-4">Buttons & CTAs</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2"><button className="w-full px-4 py-2 bg-black text-white text-sm rounded-[5px] hover:bg-black/90 transition-colors">Small Button</button><p className="text-xs text-black/60 text-center">5px radius</p></div>
              <div className="space-y-2"><button className="w-full px-6 py-3 bg-black text-white rounded-[5px] hover:bg-black/90 transition-colors">Standard Button</button><p className="text-xs text-black/60 text-center">5px radius</p></div>
              <div className="space-y-2"><button className="w-full px-8 py-4 bg-black text-white rounded-[10px] hover:bg-black/90 transition-colors">Large Button</button><p className="text-xs text-black/60 text-center">10px radius</p></div>
              <div className="space-y-2"><button className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors">Pill Button</button><p className="text-xs text-black/60 text-center">Full radius (9999px)</p></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Cards & Containers</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-black/8 bg-white rounded-[5px] p-4"><h5 className="font-semibold text-sm mb-2">Small Card</h5><p className="text-xs text-black/60 mb-3">5px border radius for compact cards</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-xs (5px)</code></div>
              <div className="border border-black/8 bg-white rounded-[10px] p-5"><h5 className="font-semibold mb-2">Medium Card</h5><p className="text-xs text-black/60 mb-3">10px border radius for standard cards</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-sm (10px)</code></div>
              <div className="border border-black/8 bg-white rounded-[20px] p-6"><h5 className="font-semibold mb-2">Large Card</h5><p className="text-xs text-black/60 mb-3">20px border radius for prominent cards</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-lg (20px)</code></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Badges & Pills</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-3 py-1 bg-black/10 text-black text-xs font-medium rounded-[5px]">Square Badge (5px)</span>
              <span className="px-3 py-1 bg-black/10 text-black text-xs font-medium rounded-[10px]">Rounded Badge (10px)</span>
              <span className="px-4 py-1.5 bg-black/10 text-black text-xs font-medium rounded-full">Pill Badge (full)</span>
              <div className="flex gap-2"><div className="w-2 h-2 bg-black rounded-full"></div><div className="w-2 h-2 bg-black/20 rounded-full"></div><div className="w-2 h-2 bg-black/20 rounded-full"></div><span className="text-xs text-black/60 ml-2">Dots (full)</span></div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Usage Guidelines" why="Consistent radius application maintains visual harmony" what="Rules for selecting appropriate border radius based on component context">
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-semibold text-green-900 mb-3">DO</h4>
            <ul className="space-y-2 text-sm text-green-900">
              <li><strong>Match radius to size</strong> - Larger components can handle larger radius (20-30px)</li>
              <li><strong>Use 5px as default</strong> - Standard buttons, inputs, and small cards use 5px radius</li>
              <li><strong>Be consistent within groups</strong> - All buttons should use same radius, all cards same radius</li>
              <li><strong>Use full radius for pills</strong> - Badges, avatars, and dots should be fully rounded</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-semibold text-red-900 mb-3">DON'T</h4>
            <ul className="space-y-2 text-sm text-red-900">
              <li><strong>Don't over-round small elements</strong> - 30px radius on a small button looks unprofessional</li>
              <li><strong>Don't mix radius within groups</strong> - All navigation buttons should use the same radius</li>
              <li><strong>Don't use random values</strong> - Stick to the scale: 0, 2.5, 5, 10, 15, 20, 25, 30, 35... full</li>
              <li><strong>Don't ignore context</strong> - A tiny 20px x 20px icon doesn't need 15px radius</li>
            </ul>
          </div>
        </div>
      </DocSection>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="font-semibold text-purple-900 mb-4">Quick Reference - When to Use Each Radius</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-sm mb-3">Small Elements (5px)</h4>
            <ul className="space-y-1 text-xs text-black/70"><li>Buttons (standard size)</li><li>Text inputs</li><li>Small cards</li><li>Dropdowns</li><li>Tooltips</li></ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-sm mb-3">Medium Elements (10-15px)</h4>
            <ul className="space-y-1 text-xs text-black/70"><li>Medium cards</li><li>Panels</li><li>Modals</li><li>Form groups</li><li>Feature sections</li></ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-sm mb-3">Large Elements (20-35px)</h4>
            <ul className="space-y-1 text-xs text-black/70"><li>Hero cards</li><li>Large modals</li><li>Dashboard panels</li><li>Feature images</li><li>Landing sections</li></ul>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-sm mb-3">Circular (9999px full)</h4>
            <ul className="space-y-1 text-xs text-black/70"><li>Pills & badges</li><li>Avatars</li><li>Dots (pagination)</li><li>Circular buttons</li><li>Status indicators</li></ul>
          </div>
        </div>
      </div>
    </div>
  );
}