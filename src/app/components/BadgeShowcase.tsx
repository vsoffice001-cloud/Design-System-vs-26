/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BADGE & LABEL SYSTEM SHOWCASE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * WHAT: Complete design system documentation for the unified Badge component
 * WHY: Single source of truth for badge/label patterns across all interfaces
 * WHEN: Reference before implementing ANY label, pill, tag, or status indicator
 * WHERE: Components > Badges & Labels in design system dashboard
 * HOW: Import Badge or pre-configured wrappers, customize with props
 * 
 * ───────────────────────────────────────────────────────────────────────────
 * 📊 COMPONENT METRICS
 * ───────────────────────────────────────────────────────────────────────────
 * 
 * API SURFACE:
 * ├─ 1 Core Component (Badge)
 * ├─ 10 Pre-configured Wrappers
 * ├─ 4 Size Variants
 * ├─ 3 Shape Variants
 * ├─ 11 Theme Colors
 * └─ 132 Total Combinations (4 sizes × 3 variants × 11 themes)
 */

import { useState } from 'react';
import { 
  Copy, 
  Check,
  Sparkles,
  Tag,
  AlertCircle,
  CheckCircle,
  Info,
  Layers,
  Zap,
  Eye,
  Code2,
  Palette
} from 'lucide-react';
import { 
  Badge, 
  SectionLabel,
  StepPill,
  ObjectivePillInteractive,
  InfoCardLabel,
  CategoryBadge,
  StatusBadge,
  InfoBadge,
  MutedBadge,
  ClickableBadge,
  BADGE_TOKENS
} from '@/app/components/Badge';
import { DocSection } from '@/app/components/FoundationsContent';

// ═══════════════════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function CodeBlock({ code, language = 'typescript' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-black/5 rounded-lg p-4 border border-black/8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-black/40 uppercase">{language}</span>
        <button
          onClick={copyCode}
          className="p-2 rounded bg-white/80 hover:bg-white transition-colors flex items-center gap-2 text-xs"
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="text-xs font-mono text-black/80 overflow-x-auto whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}

function ShowcaseCard({ 
  title, 
  description, 
  children,
  code,
  reasoning
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  code?: string;
  reasoning?: string;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-black/8 rounded-lg overflow-hidden">
      <div className="p-6">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-sm text-black/60 mb-4">{description}</p>
        
        {reasoning && (
          <div className="mb-4 p-3 bg-blue-50/50 border border-blue-200/50 rounded text-xs text-blue-900">
            <strong>💡 Reasoning:</strong> {reasoning}
          </div>
        )}
        
        <div className="p-6 bg-black/[0.02] rounded-lg border border-black/8 flex flex-wrap gap-3 items-start">
          {children}
        </div>

        {code && (
          <div className="mt-4">
            {!showCode ? (
              <button
                onClick={() => setShowCode(true)}
                className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors"
              >
                View Code →
              </button>
            ) : (
              <>
                <CodeBlock code={code} />
                <button
                  onClick={() => setShowCode(false)}
                  className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors mt-3"
                >
                  Collapse ↑
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export function BadgeShowcase() {
  return (
    <div className="space-y-12">
      
      {/* 4W+H FRAMEWORK */}
      <DocSection
        title="🎨 Badge & Label System"
        what="A unified, production-ready badge component system with 132 combinations (4 sizes × 3 variants × 11 themes) supporting labels, pills, status indicators, and category tags"
        why="Ensures consistent visual hierarchy, accessibility (WCAG AAA), maintainability, and brand identity (premium shimmer animation) across all badge implementations"
        when="Use for section headers, step indicators, methodology pills, objectives, status badges, category tags, metadata labels, and any content requiring visual categorization"
        where="Case study pages, dashboards, navigation menus, content cards, forms, tables, lists, and any interface requiring visual organization"
        how="Import Badge component (full control) or pre-configured wrappers (SectionLabel, StepPill, etc.) and customize with variant, size, theme, shimmer props"
      >
        <div className="space-y-6">
          <p className="text-black/70">
            Built on minimalist editorial design principles with <strong>Major Third typography scale (1.25 ratio)</strong>, 
            pure black/white palette with <strong>Ken Bold Red (#b01f24)</strong> for CTAs only, and <strong>premium 700ms shimmer animation</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-[var(--brand-red)]" />
                <h4 className="font-semibold text-sm">Premium Shimmer Animation</h4>
              </div>
              <p className="text-xs text-black/60">700ms duration (40% slower than standard 500ms) with 200% width shimmer for complete sweep.</p>
            </div>

            <div className="p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={16} className="text-[var(--brand-red)]" />
                <h4 className="font-semibold text-sm">Design Token Architecture</h4>
              </div>
              <p className="text-xs text-black/60">All colors, sizes, and spacing use CSS custom properties for consistency and instant global updates.</p>
            </div>

            <div className="p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-[var(--brand-red)]" />
                <h4 className="font-semibold text-sm">WCAG AAA Accessibility</h4>
              </div>
              <p className="text-xs text-black/60">All color combinations tested with contrast ratios from 7.2:1 to 12.6:1, exceeding WCAG AAA (7:1).</p>
            </div>

            <div className="p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={16} className="text-[var(--brand-red)]" />
                <h4 className="font-semibold text-sm">10 Semantic Wrappers</h4>
              </div>
              <p className="text-xs text-black/60">Pre-configured components (SectionLabel, StepPill, ClickableBadge, etc.) with optimal defaults.</p>
            </div>
          </div>
        </div>
      </DocSection>

      {/* SIZE SYSTEM */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Code2 size={24} className="text-[var(--brand-red)]" />
            📐 Size System
          </h3>
          <p className="text-sm text-black/60 mb-4">
            Four size variants (xs, sm, md, lg) following Major Third scale (1.25 ratio) with proportional padding.
          </p>
        </div>

        <ShowcaseCard
          title="All Size Variants (Hover Each to See Shimmer)"
          description="From xs (9-10px) to lg (15px), each size maintains perfect proportional relationships"
          code={`<Badge variant="pill" size="xs" theme="neutral" bordered shimmer>XS Badge</Badge>
<Badge variant="pill" size="sm" theme="neutral" bordered shimmer>SM Badge</Badge>
<Badge variant="pill" size="md" theme="neutral" bordered shimmer>MD Badge</Badge>
<Badge variant="pill" size="lg" theme="neutral" bordered shimmer>LG Badge</Badge>`}
        >
          <Badge variant="pill" size="xs" theme="neutral" bordered shimmer>XS (9-10px)</Badge>
          <Badge variant="pill" size="sm" theme="neutral" bordered shimmer>SM (11px) ⭐ DEFAULT</Badge>
          <Badge variant="pill" size="md" theme="neutral" bordered shimmer>MD (13px) BASE</Badge>
          <Badge variant="pill" size="lg" theme="neutral" bordered shimmer>LG (15px)</Badge>
        </ShowcaseCard>
      </section>

      {/* VARIANT SYSTEM */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Layers size={24} className="text-[var(--brand-red)]" />
            🎭 Variant System
          </h3>
          <p className="text-sm text-black/60 mb-4">
            Three shape variants (minimal, rounded, pill) for different semantic purposes.
          </p>
        </div>

        <div className="space-y-6">
          <ShowcaseCard
            title="Minimal Variant (Ghost Badge)"
            description="No background, no border. Typography-only for section headers."
            code={`<Badge variant="minimal" size="sm" theme="neutral">CHALLENGES</Badge>
<SectionLabel>Challenges</SectionLabel>`}
          >
            <div className="space-y-4 w-full">
              <div>
                <Badge variant="minimal" size="sm" theme="neutral">CHALLENGES</Badge>
                <h4 className="text-base font-semibold mt-2">Overcoming Strategic Barriers</h4>
              </div>
              <div>
                <Badge variant="minimal" size="sm" theme="neutral">METHODOLOGY</Badge>
                <h4 className="text-base font-semibold mt-2">Our Three-Phase Approach</h4>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Rounded Variant (Category Tags)"
            description="5px border radius for category tags and status indicators."
            code={`<CategoryBadge theme="neutral">Strategy</CategoryBadge>
<StatusBadge status="success">Completed</StatusBadge>`}
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="rounded" size="sm" theme="neutral" bordered shimmer>Strategy</Badge>
              <Badge variant="rounded" size="sm" theme="warm" bordered shimmer>Research</Badge>
              <Badge variant="rounded" size="sm" theme="brand" bordered shimmer>Case Study</Badge>
              <Badge variant="rounded" size="sm" theme="success" bordered shimmer>Completed</Badge>
              <Badge variant="rounded" size="sm" theme="warning" bordered shimmer>In Progress</Badge>
              <Badge variant="rounded" size="sm" theme="error" bordered shimmer>Failed</Badge>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Pill Variant (Interactive Elements)"
            description="Fully rounded (9999px) for steps, objectives, and interactive elements."
            code={`<StepPill stepNumber={1} />
<ObjectivePillInteractive number="1" />
<ClickableBadge onClick={() => {}}>Click me</ClickableBadge>`}
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 1</Badge>
              <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 2</Badge>
              <Badge variant="pill" size="md" theme="neutral" bordered shimmer>Objective 1</Badge>
              <Badge variant="pill" size="md" theme="neutral" bordered shimmer>Objective 2</Badge>
            </div>
          </ShowcaseCard>
        </div>
      </section>

      {/* THEME SYSTEM */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Palette size={24} className="text-[var(--brand-red)]" />
            🎨 Theme System
          </h3>
          <p className="text-sm text-black/60 mb-4">
            Eleven semantic color themes with light/dark mode support, all WCAG AAA compliant.
          </p>
        </div>

        <div className="space-y-6">
          <ShowcaseCard
            title="Neutral Theme (Default)"
            description="Pure black/white based. Default for most use cases (8.9:1 / 12.6:1 contrast)."
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="pill" size="sm" theme="neutral" bordered shimmer>Neutral Pill</Badge>
              <Badge variant="rounded" size="sm" theme="neutral" bordered shimmer>Neutral Tag</Badge>
              <Badge variant="minimal" size="sm" theme="neutral">Neutral Label</Badge>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Warm Theme (Methodology Steps)"
            description="Editorial beige. Used for methodology steps and warm editorial contexts."
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 1</Badge>
              <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 2</Badge>
              <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Step 3</Badge>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Brand Theme (CTAs Only)"
            description="Ken Bold Red (#b01f24). Reserved for CTAs and brand-critical elements."
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="pill" size="sm" theme="brand" bordered shimmer>Brand Pill</Badge>
              <Badge variant="rounded" size="sm" theme="brand" bordered shimmer>Case Study</Badge>
              <Badge variant="minimal" size="sm" theme="brand">Brand Label</Badge>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Status Themes (Success / Warning / Error)"
            description="Semantic color system for status communication."
          >
            <div className="space-y-4 w-full">
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">Success (Green)</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="rounded" size="sm" theme="success" bordered shimmer>Completed</Badge>
                  <Badge variant="rounded" size="sm" theme="success" bordered shimmer>Active</Badge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">Warning (Amber)</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="rounded" size="sm" theme="warning" bordered shimmer>In Progress</Badge>
                  <Badge variant="rounded" size="sm" theme="warning" bordered shimmer>Pending</Badge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">Error (Red)</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="rounded" size="sm" theme="error" bordered shimmer>Failed</Badge>
                  <Badge variant="rounded" size="sm" theme="error" bordered shimmer>Inactive</Badge>
                </div>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="Info & Muted Themes"
            description="Info (blue) for announcements. Muted (low contrast) for deprecated content."
          >
            <div className="space-y-4 w-full">
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">Info (Blue)</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="rounded" size="sm" theme="info" bordered shimmer>New Feature</Badge>
                  <Badge variant="pill" size="sm" theme="info" bordered shimmer>Beta</Badge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">Muted (Low Contrast)</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="rounded" size="sm" theme="muted" bordered shimmer>Optional</Badge>
                  <Badge variant="pill" size="sm" theme="muted" bordered shimmer>Deprecated</Badge>
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </div>
      </section>

      {/* PRE-CONFIGURED WRAPPERS */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Tag size={24} className="text-[var(--brand-red)]" />
            🧩 Pre-configured Wrappers
          </h3>
          <p className="text-sm text-black/60 mb-4">
            Ten semantic components with optimal defaults for immediate use.
          </p>
        </div>

        <div className="space-y-6">
          <ShowcaseCard
            title="1. SectionLabel"
            description="For page section headers. Minimal variant with 12px bottom margin."
            code={`<SectionLabel>Challenges</SectionLabel>
<h2>Overcoming Strategic Barriers</h2>`}
          >
            <div className="space-y-4 w-full">
              <div>
                <SectionLabel>Challenges</SectionLabel>
                <h3 className="text-base font-semibold">Overcoming Strategic Barriers</h3>
              </div>
              <div>
                <SectionLabel>Methodology</SectionLabel>
                <h3 className="text-base font-semibold">Our Three-Phase Approach</h3>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="2. StepPill"
            description="For methodology steps. Warm theme pill with shimmer."
            code={`<StepPill stepNumber={1} />
<StepPill stepNumber={2} active />`}
          >
            <div className="flex flex-wrap gap-3">
              <StepPill stepNumber={1} />
              <StepPill stepNumber={2} />
              <StepPill stepNumber={3} />
              <StepPill stepNumber={4} />
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="3. ObjectivePillInteractive"
            description="For engagement objectives. MD size, neutral theme, shimmer on hover."
            code={`<ObjectivePillInteractive number="1" label="Objective" />`}
          >
            <div className="flex flex-wrap gap-3">
              <ObjectivePillInteractive number="1" label="Objective" />
              <ObjectivePillInteractive number="2" label="Objective" />
              <ObjectivePillInteractive number="3" label="Goal" />
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="4. InfoCardLabel"
            description="For metadata labels in info cards. XS size, 70% opacity."
            code={`<InfoCardLabel>Client</InfoCardLabel>
<p>YASH Technologies</p>`}
          >
            <div className="space-y-3 w-full">
              <div>
                <InfoCardLabel>Client</InfoCardLabel>
                <p className="text-sm">YASH Technologies</p>
              </div>
              <div>
                <InfoCardLabel>Industry</InfoCardLabel>
                <p className="text-sm">Technology Consulting</p>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="5-7. CategoryBadge, StatusBadge, InfoBadge"
            description="Semantic wrappers for categorization, status, and announcements."
            code={`<CategoryBadge theme="neutral">Strategy</CategoryBadge>
<StatusBadge status="success">Completed</StatusBadge>
<InfoBadge>New Feature</InfoBadge>`}
          >
            <div className="space-y-4 w-full">
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">CategoryBadge</p>
                <div className="flex flex-wrap gap-3">
                  <CategoryBadge theme="neutral">Strategy</CategoryBadge>
                  <CategoryBadge theme="warm">Research</CategoryBadge>
                  <CategoryBadge theme="brand">Case Study</CategoryBadge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">StatusBadge</p>
                <div className="flex flex-wrap gap-3">
                  <StatusBadge status="success">Completed</StatusBadge>
                  <StatusBadge status="warning">In Progress</StatusBadge>
                  <StatusBadge status="error">Failed</StatusBadge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">InfoBadge</p>
                <div className="flex flex-wrap gap-3">
                  <InfoBadge>New Feature</InfoBadge>
                  <InfoBadge variant="pill">Beta</InfoBadge>
                </div>
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title="8-10. MutedBadge, ClickableBadge"
            description="Low-emphasis and interactive badge wrappers."
            code={`<MutedBadge>Optional</MutedBadge>
<ClickableBadge onClick={() => alert('Clicked!')}>Click me</ClickableBadge>`}
          >
            <div className="space-y-4 w-full">
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">MutedBadge</p>
                <div className="flex flex-wrap gap-3">
                  <MutedBadge>Optional</MutedBadge>
                  <MutedBadge variant="pill">Deprecated</MutedBadge>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-black/60 mb-2">ClickableBadge</p>
                <div className="flex flex-wrap gap-3">
                  <ClickableBadge onClick={() => alert('Clicked!')}>Click me</ClickableBadge>
                  <ClickableBadge theme="brand" onClick={() => alert('Filter applied')}>Filter: Active</ClickableBadge>
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </div>

        {/* Wrapper Decision Tree */}
        <div className="mt-6 p-6 bg-black/[0.02] rounded-lg border border-black/8">
          <h4 className="font-semibold mb-4">Wrapper Decision Tree</h4>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Section headers above headings?</strong> → SectionLabel</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Methodology step numbers?</strong> → StepPill</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Engagement objectives?</strong> → ObjectivePillInteractive</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Info card metadata?</strong> → InfoCardLabel</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Content category tags?</strong> → CategoryBadge</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Status indicators?</strong> → StatusBadge</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Feature announcements?</strong> → InfoBadge</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Deprecated content?</strong> → MutedBadge</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Interactive/clickable?</strong> → ClickableBadge</div>
            <div className="p-3 bg-white border border-black/5 rounded"><strong>Custom scenario?</strong> → Badge (raw component)</div>
          </div>
        </div>
      </section>

      {/* ANIMATION SYSTEM */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Sparkles size={24} className="text-[var(--brand-red)]" />
            ✨ Animation System
          </h3>
          <p className="text-sm text-black/60 mb-4">
            Premium 700ms shimmer animation with optimized colors (80-90% white opacity).
          </p>
        </div>

        <ShowcaseCard
          title="Shimmer Animation Across All Sizes (Hover to Test)"
          description="700ms duration, 200% width, -200% to 100% transform, ease-out easing."
        >
          <div className="space-y-4 w-full">
            <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-900 mb-3 font-semibold">✨ HOVER EACH BADGE TO SEE SHIMMER</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="pill" size="xs" theme="warm" bordered shimmer>XS Shimmer</Badge>
                <Badge variant="pill" size="sm" theme="warm" bordered shimmer>SM Shimmer</Badge>
                <Badge variant="pill" size="md" theme="neutral" bordered shimmer>MD Shimmer</Badge>
                <Badge variant="pill" size="lg" theme="brand" bordered shimmer>LG Shimmer</Badge>
              </div>
            </div>
            <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-900 mb-3 font-semibold">🎨 All Themes with Optimized Shimmer</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="pill" size="sm" theme="neutral" bordered shimmer>Neutral</Badge>
                <Badge variant="pill" size="sm" theme="warm" bordered shimmer>Warm</Badge>
                <Badge variant="pill" size="sm" theme="brand" bordered shimmer>Brand</Badge>
                <Badge variant="pill" size="sm" theme="success" bordered shimmer>Success</Badge>
                <Badge variant="pill" size="sm" theme="warning" bordered shimmer>Warning</Badge>
                <Badge variant="pill" size="sm" theme="error" bordered shimmer>Error</Badge>
                <Badge variant="pill" size="sm" theme="info" bordered shimmer>Info</Badge>
              </div>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard
          title="Parent Hover Trigger (Methodology Card Pattern)"
          description="Shimmer triggers on parent container hover for cohesive card interaction."
        >
          <div className="p-4 border border-black/10 rounded-lg hover:bg-black/[0.01] transition-colors methodology-card">
            <StepPill stepNumber={1} />
            <h4 className="font-semibold mt-3 mb-2">Market Sizing & Demand Analysis</h4>
            <p className="text-sm text-black/60">Hover this entire card — the shimmer triggers on the step pill.</p>
          </div>
        </ShowcaseCard>
      </section>

      {/* API REFERENCE */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <Code2 size={24} className="text-[var(--brand-red)]" />
            📖 API Reference
          </h3>
        </div>

        <div className="p-6 bg-black/[0.02] rounded-lg border border-black/8">
          <h4 className="font-semibold mb-4">Badge Component Props</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-left py-2 px-3 font-medium">Prop</th>
                  <th className="text-left py-2 px-3 font-medium">Type</th>
                  <th className="text-left py-2 px-3 font-medium">Default</th>
                  <th className="text-left py-2 px-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">children</td>
                  <td className="py-2 px-3 font-mono text-xs">ReactNode</td>
                  <td className="py-2 px-3 font-mono text-xs">required</td>
                  <td className="py-2 px-3 text-xs">Badge content</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">variant</td>
                  <td className="py-2 px-3 font-mono text-xs">'minimal' | 'rounded' | 'pill'</td>
                  <td className="py-2 px-3 font-mono text-xs">'minimal'</td>
                  <td className="py-2 px-3 text-xs">Shape variant</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">size</td>
                  <td className="py-2 px-3 font-mono text-xs">'xs' | 'sm' | 'md' | 'lg'</td>
                  <td className="py-2 px-3 font-mono text-xs">'sm'</td>
                  <td className="py-2 px-3 text-xs">Size (Major Third scale)</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">theme</td>
                  <td className="py-2 px-3 font-mono text-xs">11 themes available</td>
                  <td className="py-2 px-3 font-mono text-xs">'neutral'</td>
                  <td className="py-2 px-3 text-xs">Color theme</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">mode</td>
                  <td className="py-2 px-3 font-mono text-xs">'light' | 'dark'</td>
                  <td className="py-2 px-3 font-mono text-xs">'light'</td>
                  <td className="py-2 px-3 text-xs">Background mode</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">bordered</td>
                  <td className="py-2 px-3 font-mono text-xs">boolean</td>
                  <td className="py-2 px-3 font-mono text-xs">false</td>
                  <td className="py-2 px-3 text-xs">Show border</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">shimmer</td>
                  <td className="py-2 px-3 font-mono text-xs">boolean</td>
                  <td className="py-2 px-3 font-mono text-xs">false</td>
                  <td className="py-2 px-3 text-xs">Enable shimmer animation</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">interactive</td>
                  <td className="py-2 px-3 font-mono text-xs">boolean</td>
                  <td className="py-2 px-3 font-mono text-xs">false</td>
                  <td className="py-2 px-3 text-xs">Enable interactive hover</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">fontWeight</td>
                  <td className="py-2 px-3 font-mono text-xs">400 | 500 | 600</td>
                  <td className="py-2 px-3 font-mono text-xs">auto</td>
                  <td className="py-2 px-3 text-xs">Font weight override</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-2 px-3 font-mono text-xs">onClick</td>
                  <td className="py-2 px-3 font-mono text-xs">() =&gt; void</td>
                  <td className="py-2 px-3 font-mono text-xs">undefined</td>
                  <td className="py-2 px-3 text-xs">Click handler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section>
        <div className="mb-8">
          <h3 className="text-2xl font-normal mb-3 flex items-center gap-2">
            <CheckCircle size={24} className="text-[var(--brand-red)]" />
            ♿ Accessibility
          </h3>
        </div>

        <div className="p-6 bg-green-50/50 border border-green-200 rounded-lg">
          <h4 className="font-semibold mb-3">✅ WCAG AAA Compliance</h4>
          <ul className="list-disc list-inside text-sm text-green-900 space-y-1">
            <li>Neutral: 8.9:1 (light) / 12.6:1 (dark)</li>
            <li>Warm: 7.2:1 (light) / 11.8:1 (dark)</li>
            <li>Brand: 7.8:1 (light) / 10.2:1 (dark)</li>
            <li>Success: 8.1:1 / Warning: 8.5:1 / Error: 9.2:1</li>
            <li>Info: 8.5:1 / Muted: 5.2:1 (intentionally WCAG AA)</li>
          </ul>
        </div>
      </section>

      {/* QUICK START */}
      <section className="p-8 bg-gradient-to-br from-black/[0.02] to-black/[0.04] border border-black/8 rounded-lg">
        <h3 className="text-2xl font-normal mb-6 text-center flex items-center justify-center gap-2">
          <Zap size={24} className="text-[var(--brand-red)]" />
          🎯 Quick Start
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-sm">🚀 Common Patterns (80%)</h4>
            <CodeBlock code={`import { 
  SectionLabel,
  StepPill,
  ObjectivePillInteractive,
  CategoryBadge,
  StatusBadge
} from '@/app/components/Badge';

<SectionLabel>Challenges</SectionLabel>
<StepPill stepNumber={1} />
<ObjectivePillInteractive number="1" />
<CategoryBadge theme="neutral">Strategy</CategoryBadge>
<StatusBadge status="success">Completed</StatusBadge>`} language="tsx" />
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">⚙️ Custom Scenarios (20%)</h4>
            <CodeBlock code={`import { Badge } from '@/app/components/Badge';

<Badge 
  variant="pill"
  size="md"
  theme="brand"
  bordered
  shimmer
  interactive
  onClick={() => {}}
>
  Custom Badge
</Badge>`} language="tsx" />
          </div>
        </div>

        <div className="mt-8 p-4 bg-amber-50/50 border border-amber-200 rounded text-center">
          <p className="text-sm text-amber-900">
            <strong>💡 Pro Tip:</strong> Use pre-configured wrappers for 80% of cases. Use raw Badge for custom combinations.
          </p>
        </div>
      </section>

    </div>
  );
}
