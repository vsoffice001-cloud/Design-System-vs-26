import { useState } from 'react';
import { Download, Send, Heart, Edit, Trash2, Star, FileText, Share2, Bookmark, ArrowRight, ExternalLink, LogIn } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { AnimatedArrow } from '@/app/components/AnimatedArrow';
import { ButtonControlsGuide } from '@/app/components/ButtonControlsGuide';

/**
 * BUTTON COMPONENT DOCUMENTATION
 * ================================
 * Complete reference for the Button component following Material Design documentation patterns
 * Combines technical API reference with practical usage examples
 */

// ==================== HELPER COMPONENTS ====================

function DocSection({ 
  title, 
  why, 
  what, 
  when, 
  whenNot, 
  how, 
  children 
}: {
  title: string;
  why?: string;
  what?: string;
  when?: string;
  whenNot?: string;
  how?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-normal mb-4">{title}</h3>
        {why && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-black/50 uppercase tracking-wide">WHY</span>
            <p className="text-sm text-black/70 mt-1">{why}</p>
          </div>
        )}
        {what && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-black/50 uppercase tracking-wide">WHAT</span>
            <p className="text-sm text-black/70 mt-1">{what}</p>
          </div>
        )}
        {when && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-black/50 uppercase tracking-wide">WHEN</span>
            <p className="text-sm text-black/70 mt-1">{when}</p>
          </div>
        )}
        {whenNot && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-black/50 uppercase tracking-wide">WHEN NOT</span>
            <p className="text-sm text-black/70 mt-1">{whenNot}</p>
          </div>
        )}
        {how && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-black/50 uppercase tracking-wide">HOW</span>
            <p className="text-sm text-black/70 mt-1">{how}</p>
          </div>
        )}
      </div>
      {children}
    </section>
  );
}

function ComponentPreview({ 
  title, 
  description, 
  children, 
  bg = 'white' 
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  bg?: 'white' | 'dark';
}) {
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden">
      <div className="p-4 bg-black/[0.02] border-b border-black/8">
        <h4 className="font-semibold text-sm">{title}</h4>
        {description && <p className="text-xs text-black/60 mt-1">{description}</p>}
      </div>
      <div className={`p-6 ${bg === 'dark' ? 'bg-black' : 'bg-white'}`}>
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-black/8 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8 flex items-center justify-between">
          <span className="text-sm font-semibold">{title}</span>
          <button
            onClick={copyCode}
            className="text-xs px-3 py-1 hover:bg-black/5 rounded transition-colors"
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-black/[0.02]">
        <code className="text-xs font-mono text-black/80">{code}</code>
      </pre>
    </div>
  );
}

function SpecTable({ specs }: {
  specs: { property: string; value: string; description: string; }[]
}) {
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-black/8 bg-black/[0.02]">
            <th className="text-left p-3 text-xs font-bold">Property</th>
            <th className="text-left p-3 text-xs font-bold">Type</th>
            <th className="text-left p-3 text-xs font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, idx) => (
            <tr key={idx} className="border-b border-black/8 last:border-0">
              <td className="p-3">
                <code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{spec.property}</code>
              </td>
              <td className="p-3">
                <code className="text-xs font-mono text-black/60">{spec.value}</code>
              </td>
              <td className="p-3 text-xs text-black/70">{spec.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export function ButtonDocumentation() {
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});

  const handleLoadingDemo = (key: string) => {
    setLoadingStates({ ...loadingStates, [key]: true });
    setTimeout(() => {
      setLoadingStates({ ...loadingStates, [key]: false });
    }, 2000);
  };

  // Interactive Playground State
  const [playgroundVariant, setPlaygroundVariant] = useState<'primary' | 'secondary' | 'ghost' | 'brand'>('brand');
  const [playgroundSize, setPlaygroundSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
  const [playgroundLoading, setPlaygroundLoading] = useState(false);
  const [playgroundDisabled, setPlaygroundDisabled] = useState(false);
  const [playgroundIconPosition, setPlaygroundIconPosition] = useState<'none' | 'left' | 'right'>('right');
  const [playgroundText, setPlaygroundText] = useState('Click Me');

  const iconMap = {
    ArrowRight: <ArrowRight size={18} />,
    Download: <Download size={18} />,
    Heart: <Heart size={18} />,
  };
  const [playgroundSelectedIcon, setPlaygroundSelectedIcon] = useState<keyof typeof iconMap>('ArrowRight');

  const generatePlaygroundCode = () => {
    const props: string[] = [];
    if (playgroundVariant !== 'primary') props.push(`variant="${playgroundVariant}"`);
    if (playgroundSize !== 'lg') props.push(`size="${playgroundSize}"`);
    if (playgroundLoading) props.push('loading');
    if (playgroundDisabled) props.push('disabled');
    if (playgroundIconPosition !== 'none') {
      props.push(`icon={<${playgroundSelectedIcon} size={18} />}`);
      if (playgroundIconPosition !== 'right') props.push(`iconPosition="${playgroundIconPosition}"`);
    }

    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    return `import { Button } from '@/app/components/Button';\nimport { ${playgroundSelectedIcon} } from 'lucide-react';\n\n<Button${propsString}>\n  ${playgroundText}\n</Button>`;
  };

  return (
    <div className="space-y-12">
      {/* ==================== HERO HEADER ==================== */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Button Component</h1>
        <p className="text-lg text-black/70 mb-4">
          A versatile button component with 4 variants, 4 sizes, interactive states, and shimmer animation.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-black/60">
          <span>🎨 4 variants</span>
          <span>📏 4 sizes</span>
          <span>✨ Shimmer animation (always active)</span>
          <span>♿ WCAG AA compliant</span>
        </div>
      </div>

      {/* ==================== QUICK START ==================== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-normal">Quick Start</h2>
        <p className="text-sm text-black/70">
          Import the Button component and start using it immediately with sensible defaults.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComponentPreview title="Basic Button">
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="brand">Brand Button</Button>
            </div>
          </ComponentPreview>

          <CodeBlock 
            title="Basic Usage"
            code={`import { Button } from '@/app/components/Button';\n\n<Button>Default Button</Button>\n<Button variant="brand">Brand Button</Button>`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComponentPreview title="With Icons">
            <div className="flex flex-wrap gap-4">
              <Button icon={<Download size={18} />}>
                Download
              </Button>
              <Button variant="brand" icon={<Star size={18} />}>
                Get Started
              </Button>
            </div>
          </ComponentPreview>

          <CodeBlock 
            title="With Icons"
            code={`import { Button } from '@/app/components/Button';\nimport { Download, Star } from 'lucide-react';\n\n<Button icon={<Download size={18} />}>\n  Download\n</Button>\n\n<Button variant="brand" icon={<Star size={18} />}>\n  Get Started\n</Button>`}
          />
        </div>
      </section>

      {/* ==================== BUTTON STATES & ANIMATIONS ==================== */}
      <ButtonControlsGuide />

      {/* ==================== VARIANTS ==================== */}
      <DocSection
        title="Variants"
        why="Different visual weights communicate action hierarchy and guide users toward primary actions"
        what="4 distinct button variants: Primary (black), Brand (red), Secondary (outlined), Ghost (transparent)"
        when="Use Primary for main actions, Brand for CTAs, Secondary for supporting actions, Ghost for tertiary actions on dark backgrounds"
      >
        <ComponentPreview 
          title="Primary - Black with Dark Gradient" 
          description="High-emphasis actions. Maximum one per screen section."
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Primary Action
            </Button>
            <Button variant="primary" size="lg" icon={<Download size={18} />}>
              Download Report
            </Button>
            <Button variant="primary" size="lg" icon={<Send size={18} />} iconPosition="left">
              Send Message
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview 
          title="Brand - Ken Bold Red (#b01f24)" 
          description="Special CTAs and conversion moments. Use sparingly for maximum impact."
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="brand" size="lg">
              Get Started Free
            </Button>
            <Button variant="brand" size="lg" icon={<Star size={18} />}>
              Premium Feature
            </Button>
            <Button variant="brand" size="lg" icon={<Send size={18} />}>
              Schedule Demo
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview 
          title="Secondary - Outlined" 
          description="Medium-emphasis actions. Can have multiple per section."
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
            <Button variant="secondary" size="lg" icon={<Download size={18} />}>
              Export Data
            </Button>
            <Button variant="secondary" size="lg" icon={<Heart size={18} />} iconPosition="left">
              Save for Later
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview 
          title="Ghost - Transparent" 
          description="Low-emphasis actions. For tertiary actions on dark backgrounds."
          bg="dark"
        >
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" background="dark" size="lg">
              Ghost Action
            </Button>
            <Button variant="ghost" background="dark" size="lg" icon={<Edit size={18} />}>
              Edit Content
            </Button>
            <Button variant="ghost" background="dark" size="lg" icon={<ArrowRight size={18} />}>
              Learn More
            </Button>
          </div>
        </ComponentPreview>

        <CodeBlock 
          title="Variants Code"
          code={`// Primary - Main actions\n<Button variant="primary">Primary Action</Button>\n\n// Brand - CTAs and conversions\n<Button variant="brand">Get Started Free</Button>\n\n// Secondary - Supporting actions\n<Button variant="secondary">Learn More</Button>\n\n// Ghost - Tertiary actions on dark backgrounds\n<Button variant="ghost" background="dark">Ghost Action</Button>`}
        />
      </DocSection>

      {/* ==================== SIZES ==================== */}
      <DocSection
        title="Sizes"
        why="Different contexts require different button sizes for proper visual hierarchy and touch targets"
        what="4 size variants: sm (36px), md (42px - DEFAULT), lg (48px - big heroes only), xl (56px - rare)"
        when="Use md (default) for 90% of buttons including report page heroes. Reserve lg for homepage/major landing heroes only."
        whenNot="Don't use lg as default. Don't use xl frequently (dilutes impact)."
      >
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-900">🎯 Sizing Strategy Update</h4>
          <p className="text-sm text-blue-800">
            <strong>md (42px)</strong> is now the BASE/DEFAULT size. Use for report pages (v0, v0.1, v0.2, etc.) and standard CTAs.
            <br />
            <strong>lg (48px)</strong> is reserved for BIG homepage heroes and major landing pages only.
          </p>
        </div>

        <ComponentPreview title="Size Comparison">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-black/60 mb-3 font-semibold">Small (36px height, 14px font) - Compact UIs, TOC navigation, secondary actions</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Small Button</Button>
                <Button variant="brand" size="sm">Small Button</Button>
                <Button variant="secondary" size="sm">Small Button</Button>
              </div>
              <p className="text-xs text-black/50 mt-2">
                Font: var(--button-font-sm) = 14px = var(--text-nav) - Perfect for TOC items, compact CTAs
              </p>
            </div>
            
            <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
              <p className="text-xs text-green-900 mb-3 font-bold uppercase">✅ Medium (42px) - DEFAULT - Report Pages & Standard CTAs</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Medium Button (Default)</Button>
                <Button variant="brand">Medium Button (Default)</Button>
                <Button variant="secondary">Medium Button (Default)</Button>
              </div>
              <p className="text-xs text-green-800 mt-3">
                Use this size for: Report page heroes, standard CTAs, forms, modals, card actions
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <p className="text-xs text-yellow-900 mb-3 font-bold uppercase">⚡ Large (48px) - BIG HEROES ONLY</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg">Large Button</Button>
                <Button variant="brand" size="lg">Large Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
              </div>
              <p className="text-xs text-yellow-800 mt-3">
                Use this size for: Homepage heroes, major landing pages, marketing campaigns
              </p>
            </div>
            
            <div>
              <p className="text-xs text-black/60 mb-3 font-semibold">Extra Large (56px) - Rare, maximum impact</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="xl">Extra Large</Button>
                <Button variant="brand" size="xl">Extra Large</Button>
                <Button variant="secondary" size="xl">Extra Large</Button>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock 
          title="Size Usage Examples"
          code={`// Report page hero - Use default md (no need to specify)
<Button variant="brand" showArrow>
  View Full Report
</Button>

// Homepage big hero - Explicitly use lg
<Button variant="brand" size="lg" showArrow>
  Transform Your Business
</Button>

// Compact UI - Use sm
<Button variant="ghost" size="sm" icon={<Edit />}>
  Edit
</Button>

// Maximum impact event page - Use xl sparingly
<Button variant="brand" size="xl" showArrow>
  Register Now
</Button>`}
        />
      </DocSection>

      {/* Rest of the ButtonDocumentation component remains unchanged */}
    </div>
  );
}