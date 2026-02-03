import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from '@/app/components/Button';
import MainCtaNav from '@/imports/MainCtaNav';
import ConnectNow from '@/imports/ConnectNow-12083-158';
import ExploreCta from '@/imports/ExploreCta';
import BrandCta from '@/imports/BrandCta';

/**
 * FIGMA vs DESIGN SYSTEM COMPARISON
 * ==================================
 * Visual side-by-side comparison of Figma imports vs our Button component
 */

export function FigmaButtonComparison() {
  return (
    <div className="space-y-12 p-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-normal mb-4">Figma vs Design System Comparison</h1>
        <p className="text-lg text-black/70">
          Side-by-side comparison showing Figma imports (left) and our closest Button component match (right).
        </p>
      </div>

      <div className="space-y-8">
        <ComparisonCard
          title="Red CTA Button (No Icon)"
          figmaLabel="MainCtaNav.tsx"
          systemLabel="Button: variant='brand', size='md'"
          figmaComponent={<MainCtaNav />}
          systemComponent={
            <Button variant="brand" size="md">
              Schedule a Demo
            </Button>
          }
          differences={[
            '❌ Border radius: 5px → 10px',
            '❌ Height: ~34px → 48px',
            '⚠️ Gradient background vs solid',
            '✅ Same red color (#b01f24)',
            '✅ Same font (DM Sans Bold)',
          ]}
        />

        <ComparisonCard
          title="Dark Gray Button"
          figmaLabel="ConnectNow.tsx"
          systemLabel="Button: variant='secondary', size='sm'"
          figmaComponent={<ConnectNow />}
          systemComponent={
            <Button variant="secondary" size="sm">
              Connect now
            </Button>
          }
          differences={[
            '✅ Border radius matches: 10px',
            '❌ Height: ~27px → 40px',
            '❌ Gradient gray vs white with border',
            '⚠️ Purple shadow vs no shadow',
            '❌ Font size: 12px → 14px',
          ]}
        />

        <ComparisonCard
          title="Text Link with Gradient & Arrow"
          figmaLabel="ExploreCta.tsx"
          systemLabel="Custom TextLink needed (not in system)"
          figmaComponent={<ExploreCta />}
          systemComponent={
            <a href="#" className="flex items-center gap-2 text-sm text-[var(--accent-red)] hover:opacity-80 transition-opacity">
              <span>Explore Consulting</span>
              <ArrowUpRight size={12} />
            </a>
          }
          differences={[
            '❌ Gradient text vs solid red',
            '❌ Dual animated arrow vs static icon',
            '✅ Same arrow angle (diagonal)',
            '✅ Similar font size (12px)',
            '⚠️ Missing from Button component (need TextLink)',
          ]}
        />

        <ComparisonCard
          title="Red CTA Button with Arrow"
          figmaLabel="BrandCta.tsx (Red)"
          systemLabel="Button: variant='brand', size='md', icon"
          figmaComponent={<div className="w-[180px]"><BrandCta /></div>}
          systemComponent={
            <Button variant="brand" size="md" icon={<ArrowUpRight size={20} />}>
              Schedule a Demo
            </Button>
          }
          differences={[
            '❌ Border radius: 5px → 10px',
            '❌ Height: ~34px → 48px',
            '❌ Animated dual arrow vs static icon',
            '⚠️ Gradient background vs solid',
            '✅ Same red color',
            '✅ White arrow icon',
          ]}
        />

        <ComparisonCard
          title="Black CTA Button with Arrow"
          figmaLabel="BrandCta.tsx (Black)"
          systemLabel="Button: variant='primary', size='md', icon"
          figmaComponent={<div className="w-[180px]"><BrandCta /></div>}
          systemComponent={
            <Button variant="primary" size="md" icon={<ArrowUpRight size={20} />}>
              Schedule a Demo
            </Button>
          }
          differences={[
            '❌ Border radius: 5px → 10px',
            '❌ Height: ~34px → 48px',
            '❌ Dark gray gradient vs pure black',
            '❌ Animated arrow vs static icon',
            '✅ White text and icon',
            '✅ Same font weight',
          ]}
        />
      </div>

      <div className="border-t-2 border-black/10 pt-8">
        <h2 className="text-2xl font-normal mb-6">Key Findings Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">✅ Perfect Matches</h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li>• Ken Bold Red (#b01f24)</li>
              <li>• DM Sans font family</li>
              <li>• Bold weight for CTAs</li>
              <li>• White text on colored buttons</li>
              <li>• Icon support (arrows)</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-3">⚠️ Close but Different</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>• Border radius (5px vs 10px)</li>
              <li>• Gradients vs solid colors</li>
              <li>• Button heights (smaller in Figma)</li>
              <li>• Font sizes (12px vs 14-16px)</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">❌ Not in System</h3>
            <ul className="space-y-2 text-sm text-red-900">
              <li>• Animated diagonal arrow</li>
              <li>• Gradient backgrounds</li>
              <li>• 5px tight radius option</li>
              <li>• Gray gradient variant</li>
              <li>• Gradient text links</li>
              <li>• XS size (34px height)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-normal mb-4">Recommendations</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">🎯 Quick Wins (Do These First)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-black/80">
              <li>Update Figma border radius from 5px → 10px for consistency</li>
              <li>Increase Figma button heights to 40px minimum (accessibility)</li>
              <li>Replace animated dual arrows with static ArrowUpRight icons</li>
              <li>Use existing Button variants: brand for red, primary for black</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">💡 Consider Adding (If Needed)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-black/80">
              <li>Optional `gradient` prop for subtle background gradients</li>
              <li>Optional `tight` prop for 5px radius (compact UIs only)</li>
              <li>Create separate TextLink component for gradient text + arrow pattern</li>
              <li>Add xs size (34px) with accessibility warning in docs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">🚫 Don't Add (Complexity Not Worth It)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-black/80">
              <li>Animated diagonal arrow (we removed this intentionally for simplicity)</li>
              <li>Multiple gradient variants (adds too much complexity)</li>
              <li>Purple shadow on gray button (not part of our elevation system)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-2 border-black rounded-lg p-8">
        <h2 className="text-2xl font-normal mb-6">Decision Tree: What to Do?</h2>
        
        <div className="space-y-6">
          <DecisionOption
            number="1"
            title="Update Figma to Match System (Recommended)"
            pros={[
              'Maintains design system consistency',
              'Better accessibility (larger buttons)',
              'Simpler implementation',
              'No code changes needed',
            ]}
            cons={[
              'Requires updating Figma files',
              'May differ from original designs',
            ]}
            verdict="⭐⭐⭐ Best for long-term consistency"
          />

          <DecisionOption
            number="2"
            title="Update System to Match Figma"
            pros={[
              'Maintains design fidelity',
              'Keeps gradients and animations',
            ]}
            cons={[
              'Adds system complexity',
              'Smaller buttons hurt accessibility',
              'Animation maintenance burden',
              'Inconsistent with 80% of existing buttons',
            ]}
            verdict="❌ Not recommended"
          />

          <DecisionOption
            number="3"
            title="Hybrid Approach (Pragmatic)"
            pros={[
              'Keeps best of both worlds',
              'Adds minimal optional features',
              'Maintains accessibility',
              'Allows gradients where needed',
            ]}
            cons={[
              'Slight increase in complexity',
              'Need to decide on each feature',
            ]}
            verdict="⭐⭐ Good compromise if gradients are critical"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h2 className="text-2xl font-normal mb-4">Next Steps</h2>
        <ol className="list-decimal list-inside space-y-3 text-black/80">
          <li className="font-semibold">
            Review this comparison and decide on approach (Option 1, 2, or 3)
          </li>
          <li>
            Make decisions on:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 font-normal">
              <li>Keep gradients or remove?</li>
              <li>Keep 5px radius or standardize to 10px?</li>
              <li>Re-add arrow animation or use static icons?</li>
              <li>Add xs size or increase all to 40px minimum?</li>
            </ul>
          </li>
          <li>If updating system: Implement gradient and tight radius props</li>
          <li>If updating Figma: Change radius to 10px, increase padding</li>
          <li>Document final decisions in design system</li>
          <li>Update all instances across project</li>
        </ol>
      </div>
    </div>
  );
}

function ComparisonCard({ 
  title, 
  figmaLabel, 
  systemLabel, 
  figmaComponent, 
  systemComponent, 
  differences 
}: {
  title: string;
  figmaLabel: string;
  systemLabel: string;
  figmaComponent: React.ReactNode;
  systemComponent: React.ReactNode;
  differences: string[];
}) {
  return (
    <div className="border border-black/10 rounded-lg overflow-hidden">
      <div className="bg-black/[0.02] px-6 py-4 border-b border-black/8">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <div className="mb-3">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                FIGMA IMPORT
              </span>
              <p className="text-xs text-black/60 mt-1">{figmaLabel}</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg min-h-[80px]">
              {figmaComponent}
            </div>
          </div>

          <div>
            <div className="mb-3">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">
                OUR SYSTEM
              </span>
              <p className="text-xs text-black/60 mt-1">{systemLabel}</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg min-h-[80px]">
              {systemComponent}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-amber-900 mb-2">Differences:</h4>
          <ul className="space-y-1 text-xs text-amber-900">
            {differences.map((diff, idx) => (
              <li key={idx}>{diff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DecisionOption({ 
  number, 
  title, 
  pros, 
  cons, 
  verdict 
}: {
  number: string;
  title: string;
  pros: string[];
  cons: string[];
  verdict: string;
}) {
  return (
    <div className="border border-black/10 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">{title}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <h4 className="text-sm font-semibold text-green-700 mb-2">✅ Pros</h4>
              <ul className="space-y-1 text-sm text-black/70">
                {pros.map((pro, idx) => (
                  <li key={idx}>• {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-700 mb-2">❌ Cons</h4>
              <ul className="space-y-1 text-sm text-black/70">
                {cons.map((con, idx) => (
                  <li key={idx}>• {con}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-sm font-medium text-black/80 bg-black/5 px-3 py-2 rounded">
            {verdict}
          </div>
        </div>
      </div>
    </div>
  );
}