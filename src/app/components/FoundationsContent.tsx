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

/**
 * FOUNDATIONS CONTENT
 * All content for the Foundations tab including:
 * Colors, Typography, Spacing, Layout & Grid, Elevation, Border Radius
 */

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
  const colors: Record<string, string> = {
    purple: 'bg-purple-50 text-purple-900 border-purple-200',
    blue: 'bg-blue-50 text-blue-900 border-blue-200',
    green: 'bg-green-50 text-green-900 border-green-200',
    red: 'bg-red-50 text-red-900 border-red-200',
    amber: 'bg-amber-50 text-amber-900 border-amber-200',
    gray: 'bg-gray-50 text-gray-900 border-gray-200',
  };
  return (
    <div className={`px-4 py-3 rounded-md border ${colors[color]}`}>
      <span className="font-mono text-xs font-bold mr-2">{label}:</span>
      <span className="text-sm">{content}</span>
    </div>
  );
}

function ColorCard({ name, token, value, usage, wcag }: any) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-32 relative group cursor-pointer" style={{ background: value }} onClick={copyToClipboard}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
          {copied ? <Check size={24} className="text-white" /> : <Copy size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="font-semibold text-sm mb-1">{name}</p>
        <p className="font-mono text-xs text-black/60 mb-2">{value}</p>
        {wcag && <p className="text-xs text-green-600 mb-2">WCAG {wcag}</p>}
        <p className="text-xs text-black/60 mb-3">{usage}</p>
        <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80">var({token})</code>
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
        <p className="text-xs text-green-600 mb-2">WCAG AAA ({contrast})</p>
      </div>
      <p className="text-xs text-black/60 mb-2"><strong>USAGE:</strong> {usage}</p>
      <p className="text-xs text-black/50 mb-3"><strong>WHERE:</strong> {where}</p>
      <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80">var({token})</code>
    </div>
  );
}

function CodeExample({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copyCode = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative mt-4 bg-black/5 rounded-lg p-4 border border-black/8">
      <button onClick={copyCode} className="absolute top-3 right-3 p-2 rounded bg-white/80 hover:bg-white transition-colors">
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="text-xs font-mono text-black/80 overflow-x-auto pr-12">{code}</pre>
    </div>
  );
}

function TypeScaleDemo({ token, pixels, usage, where }: any) {
  return (
    <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6 hover:bg-black/[0.04] transition-colors">
      <div className="flex items-end justify-between mb-4">
        <p style={{ fontSize: `var(${token})`, lineHeight: 1.3 }}>The quick brown fox</p>
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
      <DocSection title="Color System - Core Principle" why="Every color has semantic meaning. Using defined design tokens ensures consistency, accessibility (WCAG AAA), and maintains the minimalist editorial aesthetic through color restraint." what="Pure black/white foundation (92%+) with strategic Ken Bold Red accent (5% max) and accent colors for gradients only (3% max)" when="Use for all components, sections, and interactive elements. Always reference design tokens, never arbitrary colors." whenNot="Never use random Tailwind colors (text-gray-600, bg-blue-100), hardcoded hex values, or create new gray shades outside the system" where="Throughout entire design system" how="Start with semantic tokens, limit brand red to 5% of page, use accent colors in gradients at 5-20% opacity only">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-blue-900">Color Usage Rules</h3>
          <ul className="space-y-2 text-sm text-blue-900">
            <li><strong>Brand Red (#b01f24):</strong> Maximum 5% of any page - CTAs, critical alerts only</li>
            <li><strong>Accent Colors:</strong> Maximum 3% total - gradients at 5-20% opacity, shadows only</li>
            <li><strong>Black/White/Warm:</strong> 92%+ of design - backgrounds, text, borders, structure</li>
          </ul>
        </div>
      </DocSection>

      <DocSection title="Brand Colors - Ken Bold Red" why="Brand identity color - bold, confident, action-oriented. Limited to 5% of any page for maximum impact." what="Primary brand red (#b01f24) with hover and active states" when="Primary CTAs, critical alerts, key brand moments" whenNot="Section backgrounds, large content areas, body text, decorative elements" where="Hero CTAs, Sticky CTA, Primary buttons, Inline links (on hover)" how="Use as button background, apply hover state on interaction, combine with white text for contrast">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorCard name="Brand Red" token="--brand-red" value="#b01f24" usage="Primary CTAs, brand identity" wcag="4.54:1 on white" />
          <ColorCard name="Brand Red Hover" token="--brand-red-hover" value="#8f191e" usage="Button hover states" wcag="5.77:1 on white" />
          <ColorCard name="Brand Red Active" token="--brand-red-active" value="#6e1317" usage="Button active/pressed states" wcag="7.41:1 on white" />
        </div>
        <CodeExample code={`// Button with brand red
<button style={{ background: 'var(--brand-red)', color: '#ffffff' }}>Schedule a Demo</button>

.cta-button { background: var(--brand-red); }
.cta-button:hover { background: var(--brand-red-hover); }
.cta-button:active { background: var(--brand-red-active); }`} />
      </DocSection>

      <DocSection title="2. Warm Editorial Colors" why="Warm neutrals add sophistication and editorial feel without being distracting." what="Subtle section backgrounds that add warmth without distraction" when="Section backgrounds for subtle highlighting, Alternative to pure white for visual rhythm" whenNot="Primary text color, Interactive elements, More than 2-3 sections per page" where="Challenges section (--warm-300), Methodology section (--warm-200)" how="Alternate with pure white sections for rhythm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="border-b-2 border-black/20"><th className="text-left p-3 text-sm font-bold">Token</th><th className="text-left p-3 text-sm font-bold">Hex</th><th className="text-left p-3 text-sm font-bold">Usage</th><th className="text-left p-3 text-sm font-bold">Visual</th></tr></thead>
            <tbody>
              {[{t:'--warm-50',h:'#fefdfd',u:'Final CTA background'},{t:'--warm-200',h:'#f9f7f6',u:'Methodology section'},{t:'--warm-300',h:'#f5f2f1',u:'Challenges section'},{t:'--warm-500',h:'#eae5e3',u:'Borders, separators'},{t:'--warm-700',h:'#c8bcb8',u:'Timeline nodes'}].map(w=><tr key={w.t} className="border-b border-black/8"><td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">{w.t}</code></td><td className="p-3"><code className="font-mono text-xs text-black/60">{w.h}</code></td><td className="p-3 text-sm">{w.u}</td><td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{background:w.h}}></div></td></tr>)}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="3. Accent Colors - STRATEGIC USE" why="Accent colors add subtle visual interest WITHOUT breaking minimalist restraint. Used ONLY in gradients (5-20% opacity) and shadows." what="5 accent colors (Purple, Periwinkle, Coral, Amber, Green)" when="Gradient backgrounds at 5-20% opacity, Decorative shadows" whenNot="NEVER as solid backgrounds, NEVER for text, NEVER for CTAs" where="Hero gradient overlay (purple 8%), Card hover states" how="Maximum 3% total usage across entire page">
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-red-900 mb-3">CRITICAL USAGE RULES</h3>
          <ul className="space-y-2 text-sm text-red-900">
            <li><strong>Maximum 3%</strong> of any page - combined usage of all accent colors</li>
            <li><strong>Gradients ONLY</strong> - use at 5-20% opacity, never solid fills</li>
            <li><strong>Never for CTAs</strong> - always use Brand Red (#b01f24)</li>
          </ul>
        </div>
        <div className="space-y-8">
          {[{name:'Purple',hex:'#806ce0',rgb:'128, 108, 224',meaning:'Professional depth, creativity',usage:'Hero gradients (8%), card shadows (15-24%)'},{name:'Periwinkle',hex:'#9fa8da',rgb:'159, 168, 218',meaning:'Trustworthiness, reliability',usage:'Card hover states (12%)'},{name:'Coral',hex:'#ff8a80',rgb:'255, 138, 128',meaning:'Approachable warmth, energy',usage:'Team sections (8-10%)'},{name:'Amber',hex:'#ffc107',rgb:'255, 193, 7',meaning:'Optimism, clarity',usage:'Insight sections (6-8%)'},{name:'Green',hex:'#66bb6a',rgb:'102, 187, 106',meaning:'Growth, success',usage:'Impact sections (10%)'}].map(c=>(
            <div key={c.name} className="border border-black/8 rounded-lg p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="h-24 rounded-lg mb-4" style={{background:`linear-gradient(135deg, rgba(${c.rgb}, 0.12), rgba(${c.rgb}, 0.08))`}}></div>
                  <p className="font-semibold mb-1">{c.name}</p>
                  <p className="font-mono text-xs text-black/60 mb-2">{c.hex}</p>
                  <p className="text-sm text-black/60 mb-3"><strong>MEANING:</strong> {c.meaning}</p>
                  <p className="text-sm text-black/60"><strong>USAGE:</strong> {c.usage}</p>
                </div>
                <div>
                  <code className="block bg-black/5 rounded px-2 py-1 text-[10px] font-mono text-black/80 whitespace-pre">{`background: linear-gradient(
  135deg,
  rgba(${c.rgb},0.12),
  rgba(${c.rgb},0.08)
);`}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Pure Colors - Black & White Foundation" why="Pure black and white create maximum contrast and editorial clarity" what="Absolute black (#000000) and white (#ffffff)" when="Section backgrounds (alternating pattern), high-contrast text" whenNot="Never use pure black for body text (use rgba(0,0,0,0.90) instead)" where="Hero section (black), Resources section (black), Standard sections (white)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg overflow-hidden"><div className="h-32 bg-black"></div><div className="p-4 bg-white"><p className="font-semibold text-sm mb-1">Pure Black</p><p className="font-mono text-xs text-black/60">#000000</p></div></div>
          <div className="border border-black/8 rounded-lg overflow-hidden"><div className="h-32 bg-white border-b border-black/8"></div><div className="p-4 bg-white"><p className="font-semibold text-sm mb-1">Pure White</p><p className="font-mono text-xs text-black/60">#ffffff</p></div></div>
        </div>
      </DocSection>

      <DocSection title="Semantic Text Colors (WCAG AAA)" why="Every text color passes WCAG AAA (7:1+) for maximum accessibility" what="4-tier opacity system using black base for light, white base for dark" when="All text content" whenNot="Don't use dark text on dark backgrounds">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">On Light Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TextColorCard name="Primary" token="--text-primary" value="rgba(0,0,0,0.90)" contrast="17.1:1" usage="Main headings, body text" where="Hero title, section headings" />
              <TextColorCard name="Secondary" token="--text-secondary" value="rgba(0,0,0,0.70)" contrast="11.4:1" usage="Supporting text" where="Descriptions" />
              <TextColorCard name="Tertiary" token="--text-tertiary" value="rgba(0,0,0,0.60)" contrast="8.9:1" usage="Labels, metadata" where="Section labels, timestamps" />
              <TextColorCard name="Subtle" token="--text-subtle" value="rgba(0,0,0,0.45)" contrast="5.9:1" usage="Decorative text" where="Watermarks" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">On Dark Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{n:'Primary On Dark',v:'rgba(255,255,255,0.95)',c:'18.1:1',u:'Headings on black'},{n:'Secondary On Dark',v:'rgba(255,255,255,0.70)',c:'11.7:1',u:'Body text on black'},{n:'Tertiary On Dark',v:'rgba(255,255,255,0.50)',c:'7.4:1',u:'Metadata on black'}].map(t=><div key={t.n} className="border border-black/8 rounded-lg p-6 bg-black"><p className="text-4xl mb-2" style={{color:t.v}}>Aa</p><p className="font-semibold text-sm mb-1 text-white">{t.n}</p><p className="text-xs text-green-400 mb-2">WCAG ({t.c})</p><p className="text-xs text-white/70"><strong>USAGE:</strong> {t.u}</p><code className="block bg-white/10 rounded px-2 py-1 text-[10px] font-mono text-white/80 mt-2">{t.v}</code></div>)}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Border Colors & Dividers" why="Subtle borders create separation without harsh lines" what="Black opacity variants (5%, 8%, 10%, 15%, 20%)" when="Card outlines, section dividers, input borders" where="Card borders (8%), Section dividers (10%)">
        <div className="space-y-4">
          {[{o:'5%',v:'rgba(0,0,0,0.05)',u:'Barely visible dividers'},{o:'8%',v:'rgba(0,0,0,0.08)',u:'Card borders - MOST USED'},{o:'10%',v:'rgba(0,0,0,0.10)',u:'Section dividers'},{o:'15%',v:'rgba(0,0,0,0.15)',u:'Input borders, hover states'},{o:'20%',v:'rgba(0,0,0,0.20)',u:'Active/focused states'}].map(b=><div key={b.o} className="flex items-center gap-4 p-4 bg-white border border-black/8 rounded-lg"><div className="w-24 h-16 border-2 rounded" style={{borderColor:b.v}}></div><div className="flex-1"><p className="font-semibold text-sm mb-1">Black {b.o}</p><p className="font-mono text-xs text-black/60 mb-1">{b.v}</p><p className="text-xs text-black/50">{b.u}</p></div></div>)}
        </div>
      </DocSection>

      <DocSection title="Section Background Pattern" why="Alternating backgrounds create visual rhythm" what="Strategic pattern alternating between pure black, pure white, and warm off-white" when="All major page sections" where="See table below">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="border-b-2 border-black/20"><th className="text-left p-3 text-sm font-bold">Section</th><th className="text-left p-3 text-sm font-bold">Background</th><th className="text-left p-3 text-sm font-bold">Visual</th></tr></thead>
            <tbody>
              {[{s:'Hero',c:'#000000'},{s:'Client Context',c:'#ffffff'},{s:'Challenges',c:'#f5f2f1'},{s:'Engagement Objectives',c:'#ffffff'},{s:'Value Pillars',c:'#ffffff'},{s:'Methodology',c:'#f5f2f1'},{s:'Impact',c:'#ffffff'},{s:'Testimonial',c:'#ffffff'},{s:'Resources',c:'#000000'},{s:'Final CTA',c:'#ffffff'}].map(i=><tr key={i.s} className="border-b border-black/8"><td className="p-3 text-sm">{i.s}</td><td className="p-3"><code className="font-mono text-xs bg-black/5 px-2 py-1 rounded">{i.c}</code></td><td className="p-3"><div className="w-16 h-8 border border-black/8 rounded" style={{background:i.c}}></div></td></tr>)}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Complete Color Palette Reference" why="Comprehensive master reference of every color token" what="All 10 color families with complete 50-900 scales" when="Use when selecting colors for new features" whenNot="Don't create colors outside this system" how="Find use case -> Select family -> Choose shade">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <h3 className="font-semibold text-purple-900 mb-3">Master Color Index</h3>
          <p className="text-sm text-purple-900 mb-3">This section contains <strong>EVERY color token</strong> in the design system.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-purple-900">
            {['Ken Bold Red (Brand)','Coral (Warmth)','Warm (Editorial)','Purple (Premium)','Periwinkle (Trust)','Perano (Calm)','Green (Success)','Amber (Warning)','Rose (Error)','Black (Neutrals)'].map(c=><div key={c} className="font-semibold">{c}</div>)}
          </div>
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
    { token: '--text-sm', pixels: '16px', usage: 'Body text, descriptions - MOST USED', where: 'All paragraph content' },
    { token: '--text-base', pixels: '20px', usage: 'Large body, card titles', where: 'Card headings with 4+ cards' },
    { token: '--text-xl', pixels: '31.25px', usage: 'Subsection headings (h3)', where: 'Methodology steps, objective titles' },
    { token: '--text-2xl', pixels: '39px', usage: 'Section headings (h2)', where: 'Client Context, Challenges, Impact' },
    { token: '--text-3xl', pixels: '48.8px', usage: 'Hero headings (h1) - HERO ONLY', where: 'Hero Section title, Final CTA heading' },
  ];

  return (
    <div className="space-y-12">
      <DocSection title="Type Scale - Major Third (1.25 Ratio)" why="Mathematical progression creates harmonious visual hierarchy. Major Third (1.25x) ratio provides clear distinction between sizes while maintaining readability." what="Each size is 1.25x the previous size, starting from 16px base" when="Use for all typography - headings, body text, labels." where="Throughout all 9 sections of the case study">
        <div className="space-y-4">
          {typeScale.map((type) => <TypeScaleDemo key={type.token} {...type} />)}
        </div>
      </DocSection>

      {/* Font Pairing System */}
      <DocSection title="Font Pairing System" why="Two-font pairing creates editorial contrast: serif headings communicate authority and craft, sans-serif body ensures readability and modern feel. This sans+serif combination is the gold standard of editorial design (NYT, Medium, The Atlantic)." what="DM Sans (sans-serif) for body/UI + Noto Serif (serif) for headings/display. Three CSS tokens: --font-sans, --font-serif, --font-mono" when="ALWAYS use Serif for h1-h3 section headings, hero titles, testimonial quotes, large display numbers. ALWAYS use Sans for body text, buttons, badges, labels, navigation, forms, metadata." whenNot="NEVER use Serif for buttons, badges, labels, navigation, form inputs. NEVER use Sans for hero titles or section headings. NEVER introduce a 3rd custom typeface.">
        <div className="space-y-6">
          <div className="border-2 border-black/15 rounded-lg overflow-hidden">
            <div className="p-6 bg-black/[0.02] border-b border-black/8">
              <h4 className="font-semibold text-sm">Live Font Pairing Preview</h4>
              <p className="text-xs text-black/60 mt-1">How our two fonts work together in practice</p>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <p className="text-xs text-black/40 uppercase tracking-[1.8px] mb-2" style={{ fontFamily: 'var(--font-sans)' }}>CASE STUDY</p>
                <h2 className="mb-3" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 300 }}>Strategic Market Intelligence</h2>
                <p className="text-black/70 leading-[1.7]" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)' }}>A comprehensive analysis of market dynamics, competitive positioning, and growth opportunities for enterprise-scale transformation.</p>
              </div>
              <div className="border-l-2 border-black/10 pl-6">
                <blockquote className="text-black/80 italic leading-[1.6]" style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-base)' }}>"The insights delivered transformed our approach to the market entirely."</blockquote>
                <p className="text-xs text-black/50 mt-2" style={{ fontFamily: 'var(--font-sans)' }}>-- Sarah Chen, VP of Strategy</p>
              </div>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="p-4 bg-black/[0.02] border-b border-black/8"><h4 className="font-semibold text-sm">Component-to-Font Mapping</h4></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-black/15"><th className="text-left p-3 text-xs font-bold">Element</th><th className="text-left p-3 text-xs font-bold">Font Family</th><th className="text-left p-3 text-xs font-bold">Weight</th><th className="text-left p-3 text-xs font-bold">Token</th><th className="text-left p-3 text-xs font-bold">Rationale</th></tr></thead>
                <tbody>
                  {[
                    { element: 'Hero h1', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Maximum editorial impact' },
                    { element: 'Section h2', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Authority without heaviness' },
                    { element: 'Subsection h3', font: 'Noto Serif', weight: '400 (Normal)', token: '--font-serif', rationale: 'Slightly heavier for smaller size' },
                    { element: 'Body paragraphs', font: 'DM Sans', weight: '400 (Normal)', token: '--font-sans', rationale: 'Geometric sans for readability' },
                    { element: 'Section labels', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'All-caps tracking, functional clarity' },
                    { element: 'Buttons', font: 'DM Sans', weight: '500-700', token: '--font-sans', rationale: 'UI chrome must be sans-serif' },
                    { element: 'Badges', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Small functional elements need sans' },
                    { element: 'Navigation', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Wayfinding = functional = sans' },
                    { element: 'Form labels', font: 'DM Sans', weight: '500 (Medium)', token: '--font-sans', rationale: 'Forms are functional UI' },
                    { element: 'Testimonial quotes', font: 'Noto Serif', weight: '400 (Normal)', token: '--font-serif', rationale: 'Italic serif for editorial quotes' },
                    { element: 'Large numbers', font: 'Noto Serif', weight: '300 (Light)', token: '--font-serif', rationale: 'Impact metrics, statistical display' },
                    { element: 'Card titles', font: 'DM Sans', weight: '600 (Semi-bold)', token: '--font-sans', rationale: 'Cards are UI components' },
                    { element: 'Code/data', font: 'System mono', weight: '400', token: '--font-mono', rationale: 'Monospace for technical content' },
                    { element: 'Metadata/tags', font: 'DM Sans', weight: '400-500', token: '--font-sans', rationale: 'Small functional text' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/8 last:border-0">
                      <td className="p-3 text-sm font-semibold">{row.element}</td>
                      <td className="p-3 text-sm" style={{ fontFamily: row.font === 'Noto Serif' ? 'var(--font-serif)' : row.font === 'System mono' ? 'var(--font-mono)' : 'var(--font-sans)' }}>{row.font}</td>
                      <td className="p-3 text-xs font-mono text-black/60">{row.weight}</td>
                      <td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.token}</code></td>
                      <td className="p-3 text-xs text-black/60">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Correct Pairings</h4>
              <ul className="space-y-2 text-sm text-green-900">
                <li>Serif 300 heading + Sans 400 body</li><li>Serif 400 quote + Sans 500 attribution</li><li>Sans 500 label + Serif 300 display heading</li><li>Sans 700 button + Sans 400 description</li><li>Sans 500 badge + Sans 400 card body</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-3">Incorrect Pairings</h4>
              <ul className="space-y-2 text-sm text-red-900">
                <li>Serif body text (unreadable at 16px long-form)</li><li>Sans hero heading (loses editorial authority)</li><li>Serif button text (functional elements need sans)</li><li>Serif navigation (wayfinding must be sans)</li><li>Mixing Serif weights 300+500 on same heading</li>
              </ul>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8"><span className="text-sm font-semibold">CSS Token Usage</span></div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]"><code className="text-xs font-mono text-black/80">{`/* Font family tokens in theme.css */
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
</blockquote>`}</code></pre>
          </div>
        </div>
      </DocSection>

      <DocSection title="Font Weight System" why="Limited weight variations create consistency" what="Two primary weights: Regular (400) for body, Semi-bold (600) for emphasis">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="text-2xl mb-4" style={{fontWeight:400}}>Regular (400)</p><p className="text-sm text-black/60">Body text, paragraphs, descriptions</p></div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="text-2xl mb-4" style={{fontWeight:600}}>Semi-bold (600)</p><p className="text-sm text-black/60">Headings, labels, navigation, emphasis</p></div>
        </div>
      </DocSection>

      <DocSection title="Letter Spacing (Tracking)" why="Fine-tuning for optical balance" what="Context-specific tracking adjustments">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="text-xs text-black/60 mb-3">All-Caps Labels</p><p style={{letterSpacing:'1.8px',textTransform:'uppercase',fontSize:'12.8px'}} className="mb-4">CASE STUDY</p><p className="text-xs text-black/50"><strong>Tracking:</strong> 1.8px</p></div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="text-xs text-black/60 mb-3">Hero Headings</p><p style={{letterSpacing:'-0.5px',fontSize:'32px'}} className="mb-4">Large Title</p><p className="text-xs text-black/50"><strong>Tracking:</strong> -0.5px</p></div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="text-xs text-black/60 mb-3">Normal Text</p><p style={{letterSpacing:'0',fontSize:'16px'}} className="mb-4">Standard Text</p><p className="text-xs text-black/50"><strong>Tracking:</strong> 0</p></div>
        </div>
      </DocSection>

      <DocSection title="Custom Font Sizes (Outside Scale)" why="Some contexts require specific pixel sizes outside the mathematical scale" what="Dedicated tokens for 12px and 14px use cases" when="Use when the Major Third scale doesn't provide the right size" whenNot="Don't use for standard headings or body text">
        <div className="space-y-6">
          <div className="border-2 border-blue-500 bg-blue-50/50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div><h4 className="text-lg font-semibold text-blue-900 mb-1">14px Token Family</h4><p className="text-sm text-blue-800">Three semantic tokens, same value - different purposes</p></div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono">0.875rem = 14px</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{t:'--text-nav',l:'Navigation elements',items:['TOC item titles','CTA descriptions','Navigation menus','Compact interfaces'],demo:'Table of Contents Item',demoWeight:'font-medium'},{t:'--text-compact',l:'Compact body text',items:['Challenge cards (4+)','Dense content areas','Secondary paragraphs','Prevent text wrapping'],demo:'Compact body paragraph',demoWeight:''},{t:'--button-font-sm',l:'Small button text',items:['Navbar CTAs','Compact buttons','TOC "Unlock" buttons','Secondary actions'],demo:null,demoWeight:''}].map(item=>(
                <div key={item.t} className="bg-white border border-blue-200 rounded-lg p-4">
                  <code className="text-sm font-mono text-blue-700 block mb-2">{item.t}</code>
                  <p className="text-sm text-black/70 mb-3">{item.l}</p>
                  <ul className="text-xs text-black/60 space-y-1">{item.items.map(i=><li key={i}>{i}</li>)}</ul>
                  <div className="mt-4 pt-3 border-t border-blue-100">
                    {item.demo ? <p style={{fontSize:'var(--text-nav)'}} className={`text-black ${item.demoWeight}`}>{item.demo}</p> : <button className="px-4 py-2 bg-black text-white rounded" style={{fontSize:'var(--button-font-sm)'}}>Small Button</button>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-900 text-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Why Three Tokens for Same Value?</p>
              <p className="text-xs leading-relaxed">Semantic naming improves code readability. When you see <code className="bg-blue-800 px-1 rounded">var(--text-nav)</code>, you know it's for navigation. If we later adjust navigation text independently, we change one token without affecting buttons or compact body text.</p>
            </div>
          </div>
          <div className="bg-black/[0.02] border border-black/10 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div><h4 className="text-lg font-semibold text-black mb-1">12px Token</h4><code className="text-sm font-mono text-black/60">--text-2xs</code></div>
              <div className="bg-black text-white px-3 py-1 rounded text-sm font-mono">0.75rem = 12px</div>
            </div>
            <p className="text-sm text-black/70 mb-4">For micro labels when 12.8px (--text-xs) is too large</p>
            <ul className="text-sm text-black/60 space-y-2 mb-4"><li>Navbar text</li><li>Micro labels in tight spaces</li><li>Copyright text</li></ul>
            <div className="bg-white border border-black/10 rounded-lg p-4"><p style={{fontSize:'var(--text-2xs)'}} className="text-black">Navbar Menu Item</p></div>
          </div>
          <div className="border border-black/10 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] p-4 border-b border-black/10"><h4 className="font-semibold">Decision Matrix: When to Use Custom Sizes</h4></div>
            <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b border-black/10"><th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Use Case</th><th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Token</th><th className="text-left p-4 text-sm font-semibold bg-black/[0.02]">Why Custom</th></tr></thead>
              <tbody>
                {[{u:'TOC Item Titles',t:'var(--text-nav)',w:'Navigation needs compact readability'},{u:'Small Button Text',t:'var(--button-font-sm)',w:'Navbar height constraint'},{u:'Challenge Cards (4+)',t:'var(--text-compact)',w:'Prevents wrapping'},{u:'Navbar Menu',t:'var(--text-2xs)',w:'Fits 60px navbar height'},{u:'CTA Descriptions',t:'var(--text-nav)',w:'Compact but readable sub-text'}].map((r,i)=><tr key={i} className="border-b border-black/8"><td className="p-4 text-sm">{r.u}</td><td className="p-4 font-mono text-xs">{r.t}</td><td className="p-4 text-sm text-black/60">{r.w}</td></tr>)}
              </tbody></table></div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Line Height System" why="Proper line height improves readability">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="font-mono text-sm mb-2">Headings</p><p className="text-2xl font-bold mb-3">1.2-1.3</p><p className="text-xs text-black/60">Tight, impactful</p></div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="font-mono text-sm mb-2">Body Text</p><p className="text-2xl font-bold mb-3">1.6-1.7</p><p className="text-xs text-black/60">Comfortable reading</p></div>
          <div className="bg-black/[0.02] border border-black/8 rounded-lg p-6"><p className="font-mono text-sm mb-2">Labels</p><p className="text-2xl font-bold mb-3">1.4-1.5</p><p className="text-xs text-black/60">Compact but clear</p></div>
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
      <DocSection title="10-Step Spacing Scale" why="Consistent spacing creates rhythm and visual harmony." what="Base-10 system (4px, 8px, 12px...) up to 96px" when="Use for margins, padding, gaps" where="All spacing decisions"><SpacingScaleVisualization /></DocSection>
      <DocSection title="Margin vs Padding Decision Tree" why="Understanding when to use margin vs padding prevents layout issues"><MarginPaddingGuide /></DocSection>
      <DocSection title="Component Spacing Examples" why="Real examples show how spacing scale applies"><ComponentSpacingExamples /></DocSection>
      <DocSection title="List & Form Spacing" why="Lists and forms need special spacing considerations"><ListFormSpacingDemo /></DocSection>
      <DocSection title="Responsive Spacing Strategy" why="Spacing should adapt to screen size"><ResponsiveSpacingDemo /></DocSection>
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
      <DocSection title="Container Width System" why="Content width directly impacts readability (Baymard Institute: 50-75 chars/line optimal). Wider containers lose focus, narrower containers feel cramped. A tiered system matches content type to optimal width." what="5 container widths via CSS tokens: --container-page (1200px), --container-content (1000px), --container-narrow (900px), --container-prose (700px), --container-compact (600px)" when="Use --container-page for outer shells/navbars, --container-content for standard sections, --container-narrow for CTAs/testimonials, --container-prose for body text measure, --container-compact for descriptions" whenNot="NEVER let body text run wider than 700px. NEVER use --container-page for content sections.">
        <div className="space-y-6">
          <div className="border border-black/8 rounded-lg p-6 bg-black/[0.02] space-y-4">
            <p className="text-sm text-black/60 mb-2">Container Width Hierarchy (scaled to fit)</p>
            {[{token:'--container-page',width:'1200px',pct:'100%',color:'bg-black/10',usage:'Page shell, navbar, hero backgrounds'},{token:'--container-content',width:'1000px',pct:'83.3%',color:'bg-black/15',usage:'Standard sections, card grids'},{token:'--container-narrow',width:'900px',pct:'75%',color:'bg-black/20',usage:'CTAs, testimonials, forms'},{token:'--container-prose',width:'700px',pct:'58.3%',color:'bg-black/25',usage:'Body text, paragraphs (~65-75 chars)'},{token:'--container-compact',width:'600px',pct:'50%',color:'bg-black/30',usage:'Descriptions, tight reading'}].map(c=>(
              <div key={c.token}>
                <div className="flex items-center gap-3 mb-1"><code className="text-xs font-mono text-black/70 w-48 flex-shrink-0">{c.token}</code><span className="text-xs text-black/50">{c.width}</span></div>
                <div className={`${c.color} rounded h-8 flex items-center px-3`} style={{width:c.pct}}><span className="text-xs text-white mix-blend-difference">{c.usage}</span></div>
              </div>
            ))}
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="p-4 bg-black/[0.02] border-b border-black/8"><h4 className="font-semibold text-sm">Section-to-Container Mapping</h4></div>
            <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b-2 border-black/15"><th className="text-left p-3 text-xs font-bold">Page Section</th><th className="text-left p-3 text-xs font-bold">Container</th><th className="text-left p-3 text-xs font-bold">Width</th><th className="text-left p-3 text-xs font-bold">Text Measure</th><th className="text-left p-3 text-xs font-bold">Tailwind Pattern</th></tr></thead>
              <tbody>
                {[{s:'Navbar / Footer',c:'--container-page',w:'1200px',m:'N/A',t:'max-w-[var(--container-page)]'},{s:'Hero Section',c:'--container-content',w:'1000px',m:'--container-prose',t:'max-w-[var(--container-content)]'},{s:'Client Context',c:'--container-content',w:'1000px',m:'--container-prose',t:'max-w-[var(--container-content)]'},{s:'Challenges (cards)',c:'--container-content',w:'1000px',m:'N/A (cards)',t:'max-w-[var(--container-content)]'},{s:'Methodology',c:'--container-content',w:'1000px',m:'--container-compact',t:'max-w-[var(--container-content)]'},{s:'Impact / Results',c:'--container-content',w:'1000px',m:'--container-prose',t:'max-w-[var(--container-content)]'},{s:'Value Pillars',c:'--container-content',w:'1000px',m:'--container-prose',t:'max-w-[var(--container-content)]'},{s:'Testimonial',c:'--container-narrow',w:'900px',m:'Full width',t:'max-w-[var(--container-narrow)]'},{s:'Final CTA',c:'--container-narrow',w:'900px',m:'--container-prose',t:'max-w-[var(--container-narrow)]'},{s:'Resources (cards)',c:'--container-content',w:'1000px',m:'--container-prose',t:'max-w-[var(--container-content)]'},{s:'Insights / Blog',c:'--container-narrow',w:'900px',m:'--container-prose',t:'max-w-[var(--container-narrow)]'}].map((row,idx)=><tr key={idx} className="border-b border-black/8 last:border-0"><td className="p-3 text-sm font-semibold">{row.s}</td><td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.c}</code></td><td className="p-3 text-sm text-black/60">{row.w}</td><td className="p-3"><code className="text-xs font-mono text-black/50">{row.m}</code></td><td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.t}</code></td></tr>)}
              </tbody></table></div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8"><span className="text-sm font-semibold">Standard Section Pattern (Token-Based)</span></div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]"><code className="text-xs font-mono text-black/80">{`/* Standard content section */
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 md:px-8">
    <p className="max-w-[var(--container-prose)]">Body text...</p>
  </div>
</section>

/* Focused CTA section */
<section className="py-12 sm:py-16 md:py-20">
  <div className="max-w-[var(--container-narrow)] mx-auto px-4 sm:px-6 md:px-8 text-center">
    <h2>Ready to get started?</h2>
  </div>
</section>`}</code></pre>
          </div>
        </div>
      </DocSection>

      <DocSection title="Responsive Padding Scale" why="Horizontal padding must scale with viewport" what="3-step mobile-first padding: 16px -> 24px -> 32px. Tokenized as --padding-mobile, --padding-tablet, --padding-desktop">
        <div className="border border-black/8 rounded-lg overflow-hidden"><div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b-2 border-black/15 bg-black/[0.02]"><th className="text-left p-3 text-xs font-bold">Breakpoint</th><th className="text-left p-3 text-xs font-bold">Viewport</th><th className="text-left p-3 text-xs font-bold">Padding</th><th className="text-left p-3 text-xs font-bold">Tailwind</th><th className="text-left p-3 text-xs font-bold">Token</th><th className="text-left p-3 text-xs font-bold">Rationale</th></tr></thead>
          <tbody>
            {[{bp:'Mobile',vp:'0-639px',px:'16px',tw:'px-4',token:'--padding-mobile',r:'Maximum content area'},{bp:'Tablet',vp:'640-1023px',px:'24px',tw:'sm:px-6',token:'--padding-tablet',r:'Comfortable margins'},{bp:'Desktop',vp:'1024px+',px:'32px',tw:'md:px-8',token:'--padding-desktop',r:'Generous editorial white space'},{bp:'Wide',vp:'1280px+',px:'Auto (mx-auto)',tw:'mx-auto',token:'N/A',r:'Content centers'}].map((row,idx)=><tr key={idx} className="border-b border-black/8 last:border-0"><td className="p-3 text-sm font-semibold">{row.bp}</td><td className="p-3 text-sm text-black/60">{row.vp}</td><td className="p-3 text-sm">{row.px}</td><td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.tw}</code></td><td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.token}</code></td><td className="p-3 text-xs text-black/60">{row.r}</td></tr>)}
          </tbody></table></div></div>
      </DocSection>

      <DocSection title="Mobile-First Design Principles" why="60%+ of web traffic is mobile. Designing mobile-first ensures core experience works on constrained devices, then progressively enhances for larger screens." what="UX law-driven approach: Fitts's Law (touch targets), Miller's Law (cognitive load), Hick's Law (choice reduction), Proximity principle (grouping), progressive disclosure">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{law:"Fitts's Law",rule:'Touch targets minimum 44x44px. Space interactive elements 8px+ apart.',mobile:'Buttons full-width, generous tap areas',desktop:'Buttons auto-width, tighter spacing acceptable'},{law:"Miller's Law",rule:'Limit visible items to 5-9 chunks. Progressive disclosure on mobile.',mobile:'1-2 cards visible, swipe for more',desktop:'3-4 cards in grid, all visible'},{law:"Hick's Law",rule:'Fewer choices = faster decisions. Simplify navigation on mobile.',mobile:'Hamburger menu, 1 CTA per screen',desktop:'Full nav, multiple CTAs acceptable'},{law:'Proximity',rule:'Related items grouped tightly. Use spacing to show relationships.',mobile:'Tighter gaps (16px), vertical stacking',desktop:'Wider gaps (24-32px), horizontal layouts'}].map((item,idx)=>(
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
            <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b-2 border-black/15"><th className="text-left p-3 text-xs font-bold">Viewport</th><th className="text-left p-3 text-xs font-bold">Columns</th><th className="text-left p-3 text-xs font-bold">Layout Pattern</th><th className="text-left p-3 text-xs font-bold">Tailwind</th><th className="text-left p-3 text-xs font-bold">Section Padding (Y)</th></tr></thead>
              <tbody>
                {[{vp:'0-639px (Mobile)',cols:'1 column',pattern:'Full-width stacked',tw:'grid-cols-1',py:'py-12 (48px)'},{vp:'640-767px (Large Mobile)',cols:'1-2 columns',pattern:'Cards side-by-side',tw:'sm:grid-cols-2',py:'sm:py-16 (64px)'},{vp:'768-1023px (Tablet)',cols:'2-3 columns',pattern:'Sidebar layouts, card grids',tw:'md:grid-cols-2 lg:grid-cols-3',py:'md:py-20 (80px)'},{vp:'1024px+ (Desktop)',cols:'3-4 columns',pattern:'Full grid, sidebar+content',tw:'lg:grid-cols-3 xl:grid-cols-4',py:'md:py-20 (80px)'},{vp:'1280px+ (Wide)',cols:'4-6 columns',pattern:'Content centers, generous whitespace',tw:'Content max-widths kick in',py:'md:py-20 (80px)'}].map((row,idx)=><tr key={idx} className="border-b border-black/8 last:border-0"><td className="p-3 text-sm font-semibold">{row.vp}</td><td className="p-3 text-sm">{row.cols}</td><td className="p-3 text-xs text-black/60">{row.pattern}</td><td className="p-3"><code className="text-xs font-mono bg-blue-50 px-2 py-1 rounded text-blue-800">{row.tw}</code></td><td className="p-3"><code className="text-xs font-mono text-black/50">{row.py}</code></td></tr>)}
              </tbody></table></div>
          </div>

          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8"><span className="text-sm font-semibold">Mobile-First Code Pattern</span></div>
            <pre className="p-4 overflow-x-auto bg-black/[0.02]"><code className="text-xs font-mono text-black/80">{`/* CORRECT: Mobile-first (start small, add breakpoints up) */
<div className="
  grid grid-cols-1          /* Mobile: 1 column (default) */
  sm:grid-cols-2            /* 640px+: 2 columns */
  lg:grid-cols-3            /* 1024px+: 3 columns */
  gap-4 sm:gap-6 md:gap-8  /* Gap scales with viewport */
">

/* CORRECT: Padding scales mobile-first */
<div className="px-4 sm:px-6 md:px-8">

/* WRONG: Desktop-first (don't do this) */
<div className="grid-cols-4 md:grid-cols-2 sm:grid-cols-1">`}</code></pre>
          </div>
        </div>
      </DocSection>

      <DocSection title="Grid System" why="A flexible grid system ensures consistent layouts" what="12-column responsive grid with customizable gaps">
        <div className="space-y-6">
          <div className="p-6 bg-black/[0.02] border border-black/8 rounded-lg">
            <p className="text-sm text-black/60 mb-4">12-Column Grid Example</p>
            <div className="grid grid-cols-12 gap-4">{Array.from({length:12}).map((_,i)=><div key={i} className="h-20 bg-[var(--brand-red)] rounded flex items-center justify-center text-white text-xs">{i+1}</div>)}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Halves (6-6)</p><div className="grid grid-cols-2 gap-2"><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Thirds (4-4-4)</p><div className="grid grid-cols-3 gap-2"><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
            <div className="p-4 border border-black/8 rounded-lg"><p className="text-sm font-semibold mb-2">Sidebar (8-4)</p><div className="grid grid-cols-3 gap-2"><div className="col-span-2 h-16 bg-black/10 rounded"></div><div className="h-16 bg-black/10 rounded"></div></div></div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Responsive Breakpoints" why="Standard Tailwind breakpoints ensure consistent responsive behavior" what="Mobile-first approach with 5 breakpoints">
        <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr className="border-b-2 border-black/20"><th className="text-left p-3 text-sm font-bold">Breakpoint</th><th className="text-left p-3 text-sm font-bold">Prefix</th><th className="text-left p-3 text-sm font-bold">Min Width</th><th className="text-left p-3 text-sm font-bold">Device</th><th className="text-left p-3 text-sm font-bold">Columns</th><th className="text-left p-3 text-sm font-bold">Container</th></tr></thead>
          <tbody>
            {[{bp:'Mobile (default)',prefix:'(none)',width:'0px',device:'Small phones',cols:'1',container:'Full width'},{bp:'Small',prefix:'sm:',width:'640px',device:'Large phones / Small tablets',cols:'1-2',container:'Full width'},{bp:'Medium',prefix:'md:',width:'768px',device:'Tablets',cols:'2-3',container:'Full width'},{bp:'Large',prefix:'lg:',width:'1024px',device:'Laptops / Small desktops',cols:'3-4',container:'max-w tokens kick in'},{bp:'Extra Large',prefix:'xl:',width:'1280px',device:'Desktops',cols:'4-6',container:'Centered with mx-auto'}].map((row,idx)=><tr key={idx} className="border-b border-black/8"><td className="p-3 text-sm font-semibold">{row.bp}</td><td className="p-3"><code className="font-mono text-sm bg-blue-50 px-2 py-1 rounded text-blue-800">{row.prefix}</code></td><td className="p-3 font-mono text-sm">{row.width}</td><td className="p-3 text-sm text-black/60">{row.device}</td><td className="p-3 text-sm">{row.cols}</td><td className="p-3 text-xs text-black/60">{row.container}</td></tr>)}
          </tbody></table></div>
      </DocSection>

      <DocSection title="Z-Index Strategy" why="Organized z-index prevents layering issues" what="Layered system with designated ranges">
        <div className="space-y-3">
          {[{layer:'Base Content',range:'0',usage:'Default page content'},{layer:'Dropdowns',range:'10',usage:'Dropdown menus, tooltips'},{layer:'Sticky Elements',range:'20',usage:'Sticky headers, CTAs'},{layer:'Modals',range:'30',usage:'Modal dialogs'},{layer:'Notifications',range:'40',usage:'Toast messages, alerts'},{layer:'Critical',range:'50',usage:'Urgent overlays'}].map(item=><div key={item.layer} className="flex items-center justify-between p-4 bg-white border border-black/8 rounded-lg"><div><p className="font-semibold text-sm mb-1">{item.layer}</p><p className="text-xs text-black/60">{item.usage}</p></div><code className="font-mono text-sm bg-black/5 px-3 py-1 rounded">z-{item.range}</code></div>)}
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
          <div className="p-8 bg-white rounded-lg" style={{boxShadow:'0 1px 3px rgba(0,0,0,0.08)'}}><p className="font-semibold mb-2">Subtle</p><p className="text-sm text-black/60 mb-4">Cards, hover states</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 1px 3px rgba(0,0,0,0.08)</code></div>
          <div className="p-8 bg-white rounded-lg" style={{boxShadow:'0 4px 12px rgba(0,0,0,0.12)'}}><p className="font-semibold mb-2">Medium</p><p className="text-sm text-black/60 mb-4">Dropdowns, tooltips</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 4px 12px rgba(0,0,0,0.12)</code></div>
          <div className="p-8 bg-white rounded-lg" style={{boxShadow:'0 12px 24px rgba(0,0,0,0.16)'}}><p className="font-semibold mb-2">Strong</p><p className="text-sm text-black/60 mb-4">Modals, overlays</p><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded block">0 12px 24px rgba(0,0,0,0.16)</code></div>
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
        <p className="text-lg text-black/70 mb-4">Complete incremental border radius system from sharp corners to fully rounded elements. Our scale uses <strong>5px increments</strong> for consistent, scalable corner rounding.</p>
        <div className="flex items-center gap-4"><span className="text-sm text-black/60">5px increment pattern</span><span className="text-sm text-black/60">Size-matched radius values</span><span className="text-sm text-black/60">From 0px to 9999px (full)</span></div>
      </div>

      <DocSection title="Border Radius Scale" why="Consistent corner rounding creates visual cohesion" what="Incremental radius scale: 0, 2.5, 5, 10, 15, 20, 25, 30, 35... up to full (9999px)" when="Use larger radius values for larger components; 5px is the most common" whenNot="Don't over-round small elements or mix radius values within groups" how="Match radius to component size">
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Primary Scale</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[{size:'None',value:'0px',usage:'Sharp corners',token:'radius-0'},{size:'Minimal',value:'2.5px',usage:'Logos, icons',token:'radius-2xs'},{size:'Small',value:'5px',usage:'Buttons, inputs',token:'radius-xs',highlight:true},{size:'Medium',value:'10px',usage:'Cards, panels',token:'radius-sm'},{size:'Full',value:'9999px',usage:'Pills, badges',token:'radius-full'}].map(item=><div key={item.size} className={`text-center border rounded-lg p-4 ${item.highlight?'bg-yellow-50 border-yellow-300':'bg-white border-black/8'}`}><div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 mx-auto mb-3" style={{borderRadius:item.value}}></div><p className="font-semibold text-sm mb-1">{item.size}</p><p className="text-xs text-black/60 mb-1 font-mono">{item.value}</p><p className="text-xs text-black/50 mb-2">{item.usage}</p><code className="text-[10px] bg-black/5 px-2 py-0.5 rounded">{item.token}</code></div>)}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Extended Scale</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[{size:'Medium-Large',value:'15px',usage:'Feature cards',token:'radius-md'},{size:'Large',value:'20px',usage:'Hero cards',token:'radius-lg'},{size:'X-Large',value:'25px',usage:'Large modals',token:'radius-xl'},{size:'2X-Large',value:'30px',usage:'Premium panels',token:'radius-2xl'},{size:'3X-Large',value:'35px',usage:'Hero sections',token:'radius-3xl'}].map(item=><div key={item.size} className="text-center border border-black/8 bg-white rounded-lg p-4"><div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/40 mx-auto mb-3" style={{borderRadius:item.value}}></div><p className="font-semibold text-sm mb-1">{item.size}</p><p className="text-xs text-black/60 mb-1 font-mono">{item.value}</p><p className="text-xs text-black/50 mb-2">{item.usage}</p><code className="text-[10px] bg-black/5 px-2 py-0.5 rounded">{item.token}</code></div>)}
          </div>
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-3">Scale Logic - 5px Increments</h4>
          <p className="text-sm text-blue-900 mb-3">Our border radius scale follows a <strong>5px increment pattern</strong>:</p>
          <div className="bg-white rounded-lg p-4 font-mono text-sm text-blue-900 mb-4">0px -&gt; 2.5px -&gt; 5px -&gt; 10px -&gt; 15px -&gt; 20px -&gt; 25px -&gt; 30px -&gt; 35px -&gt; ... -&gt; 9999px (full)</div>
          <ul className="space-y-2 text-sm text-blue-900">
            <li><strong>Start at 0</strong> for sharp corners</li>
            <li><strong>2.5px jump</strong> for logos and tiny elements</li>
            <li><strong>5px increments</strong> from 5px onwards</li>
            <li><strong>Full (9999px)</strong> for circular elements</li>
          </ul>
        </div>
      </DocSection>

      <DocSection title="Component Usage Examples" why="Clear examples show how radius scales with component size" what="Real-world demonstrations">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-4">Buttons & CTAs</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2"><button className="w-full px-4 py-2 bg-black text-white text-sm rounded-[5px]">Small Button</button><p className="text-xs text-black/60 text-center">5px</p></div>
              <div className="space-y-2"><button className="w-full px-6 py-3 bg-black text-white rounded-[5px]">Standard Button</button><p className="text-xs text-black/60 text-center">5px</p></div>
              <div className="space-y-2"><button className="w-full px-8 py-4 bg-black text-white rounded-[10px]">Large Button</button><p className="text-xs text-black/60 text-center">10px</p></div>
              <div className="space-y-2"><button className="w-full px-6 py-3 bg-black text-white rounded-full">Pill Button</button><p className="text-xs text-black/60 text-center">Full (9999px)</p></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Cards & Containers</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-black/8 bg-white rounded-[5px] p-4"><h5 className="font-semibold text-sm mb-2">Small Card</h5><p className="text-xs text-black/60 mb-3">5px border radius</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-xs (5px)</code></div>
              <div className="border border-black/8 bg-white rounded-[10px] p-5"><h5 className="font-semibold mb-2">Medium Card</h5><p className="text-xs text-black/60 mb-3">10px border radius</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-sm (10px)</code></div>
              <div className="border border-black/8 bg-white rounded-[20px] p-6"><h5 className="font-semibold mb-2">Large Card</h5><p className="text-xs text-black/60 mb-3">20px border radius</p><code className="text-[10px] bg-black/5 px-2 py-1 rounded">radius-lg (20px)</code></div>
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

      <DocSection title="Usage Guidelines" why="Consistent radius application maintains visual harmony" what="Rules for selecting appropriate border radius">
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-semibold text-green-900 mb-3">DO</h4>
            <ul className="space-y-2 text-sm text-green-900">
              <li><strong>Match radius to size</strong> - Larger components can handle larger radius</li>
              <li><strong>Use 5px as default</strong> - Standard buttons, inputs, and small cards</li>
              <li><strong>Be consistent within groups</strong> - All buttons same radius</li>
              <li><strong>Use full radius for pills</strong> - Badges, avatars, dots</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-semibold text-red-900 mb-3">DON'T</h4>
            <ul className="space-y-2 text-sm text-red-900">
              <li><strong>Don't over-round small elements</strong> - 30px on a small button looks unprofessional</li>
              <li><strong>Don't mix radius within groups</strong> - All nav buttons should match</li>
              <li><strong>Don't use random values</strong> - Stick to the scale</li>
              <li><strong>Don't ignore context</strong> - Tiny icons don't need large radius</li>
            </ul>
          </div>
        </div>
      </DocSection>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="font-semibold text-purple-900 mb-4">Quick Reference - When to Use Each Radius</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-200"><h4 className="font-semibold text-sm mb-3">Small Elements (5px)</h4><ul className="space-y-1 text-xs text-black/70"><li>Buttons (standard size)</li><li>Text inputs</li><li>Small cards</li><li>Dropdowns</li><li>Tooltips</li></ul></div>
          <div className="bg-white rounded-lg p-4 border border-purple-200"><h4 className="font-semibold text-sm mb-3">Medium Elements (10-15px)</h4><ul className="space-y-1 text-xs text-black/70"><li>Medium cards</li><li>Panels</li><li>Modals</li><li>Form groups</li><li>Feature sections</li></ul></div>
          <div className="bg-white rounded-lg p-4 border border-purple-200"><h4 className="font-semibold text-sm mb-3">Large Elements (20-35px)</h4><ul className="space-y-1 text-xs text-black/70"><li>Hero cards</li><li>Large modals</li><li>Dashboard panels</li><li>Feature images</li><li>Landing sections</li></ul></div>
          <div className="bg-white rounded-lg p-4 border border-purple-200"><h4 className="font-semibold text-sm mb-3">Circular (9999px full)</h4><ul className="space-y-1 text-xs text-black/70"><li>Pills & badges</li><li>Avatars</li><li>Dots (pagination)</li><li>Circular buttons</li><li>Status indicators</li></ul></div>
        </div>
      </div>
    </div>
  );
}