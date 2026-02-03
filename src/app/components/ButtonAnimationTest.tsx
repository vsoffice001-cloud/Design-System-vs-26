import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app/components/Button';

/**
 * BUTTON ANIMATION TEST - DESIGN SYSTEM DOCUMENTATION
 * ===================================================
 * 
 * 4W+H FRAMEWORK:
 * 
 * WHY:
 * To validate and demonstrate our two core brand identity animations working together:
 * 1. Shimmer effect (ALWAYS active on all buttons - signature brand animation)
 * 2. Arrow animation (ONLY for urgency CTAs - form redirects, page navigation with time sensitivity)
 * 
 * WHAT:
 * Interactive test environment showcasing all button variants (Primary, Brand, Secondary, Ghost)
 * with both animations enabled, across all sizes (sm, md, lg, xl) and backgrounds (light, dark).
 * 
 * WHEN:
 * Use this page to:
 * - Test button animations after making changes to Button.tsx
 * - Demonstrate animation behavior to stakeholders/clients
 * - Verify animations work properly on different backgrounds
 * - Confirm 300ms timing for arrow animation with 700ms shimmer
 * 
 * WHEN NOT:
 * Don't use this for:
 * - Production UI (this is a testing/documentation component)
 * - General button reference (see "Button Variants & States" section instead)
 * - Static visual design (animations only visible on hover/interaction)
 * 
 * HOW:
 * Hover over each button to trigger animations:
 * - Shimmer: Gradient sweep from left to right (700ms)
 * - Arrow: Diagonal exit top-right + enter from bottom-left (300ms, 4px movement)
 * - Arrow uses HARDCODED ArrowUpRight icon (no icon prop needed)
 */

export function ButtonAnimationTest() {
  return (
    <div className="space-y-8">
      {/* 4W+H Documentation Header */}
      <section className="bg-purple-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-4">Button Animations</h1>
        <h2 className="text-xl font-normal mb-6 text-black/80">Shimmer Effect + Arrow Animation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-purple-900">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              WHY
            </h3>
            <p className="text-sm text-black/70">
              Two signature brand animations: (1) Shimmer is ALWAYS active on all buttons as core brand identity. 
              (2) Arrow animation applies ONLY to urgency CTAs (form redirects, time-sensitive pages) to signal immediate action.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-purple-900">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              WHAT
            </h3>
            <p className="text-sm text-black/70">
              Shimmer: Gradient sweep animation (700ms). Arrow: Diagonal exit + enter animation (300ms, 4px). 
              Arrow uses hardcoded ArrowUpRight icon—no icon prop needed when animatedArrow is true.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              WHEN
            </h3>
            <p className="text-sm text-black/70">
              Shimmer: All buttons (100% usage). Arrow: Only urgency CTAs like "Schedule Demo", "Get Started Free", 
              "Book Consultation" where immediate user action drives business value.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              WHEN NOT
            </h3>
            <p className="text-sm text-black/70">
              Arrow: Don't use on general navigation buttons ("Learn More", "View Details"), icon-only buttons, 
              or non-urgent actions. Reserve for high-intent conversion moments only.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-purple-900">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              HOW
            </h3>
            <p className="text-sm text-black/70">
              Implementation: Shimmer uses CSS gradient animation. Arrow uses absolute positioning with two hardcoded 
              ArrowUpRight icons (transform/opacity transitions). Both are hardware-accelerated (GPU), respect 
              prefers-reduced-motion, and run at 60fps for smooth experience.
            </p>
          </div>
        </div>

        <div className="bg-purple-100 border border-purple-300 rounded p-4">
          <p className="text-sm text-purple-900 font-medium mb-2">
            ✨ Hover Instructions:
          </p>
          <p className="text-sm text-purple-900">
            Hover over each button below to see the shimmer gradient sweep (700ms) while the arrow 
            exits top-right and a new arrow enters from bottom-left (300ms, 4px diagonal movement).
          </p>
        </div>
      </section>

      {/* PRIMARY VARIANT - Light Background */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Primary Variant (Dark Gradient)</h3>
        <p className="text-sm text-black/60 mb-4">
          Shimmer: Dark to gray gradient (#0a0a0a → #6a6a6a) | Arrow: White ArrowUpRight with 300ms diagonal animation
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm" animatedArrow>
            Small Primary
          </Button>
          <Button variant="primary" size="md" animatedArrow>
            Medium Primary
          </Button>
          <Button variant="primary" size="lg" animatedArrow>
            Large Primary
          </Button>
          <Button variant="primary" size="xl" animatedArrow>
            Extra Large Primary
          </Button>
        </div>
      </section>

      {/* BRAND VARIANT - Light Background */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Brand Variant (Red Gradient)</h3>
        <p className="text-sm text-black/60 mb-4">
          Shimmer: Red gradient (#b01f24 → #eb484e) | Arrow: White ArrowUpRight with 300ms diagonal animation
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="brand" size="sm" animatedArrow>
            Small Brand
          </Button>
          <Button variant="brand" size="md" animatedArrow>
            Medium Brand
          </Button>
          <Button variant="brand" size="lg" animatedArrow>
            Get Started Free
          </Button>
          <Button variant="brand" size="xl" animatedArrow>
            Schedule Demo
          </Button>
        </div>
      </section>

      {/* SECONDARY VARIANT - Light Background */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Secondary Variant (Warm Amber Gradient)</h3>
        <p className="text-sm text-black/60 mb-4">
          Shimmer: Warm amber gradient (subtle light-tone) | Arrow: Black ArrowUpRight with 300ms diagonal animation
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm" animatedArrow>
            Small Secondary
          </Button>
          <Button variant="secondary" size="md" animatedArrow>
            Medium Secondary
          </Button>
          <Button variant="secondary" size="lg" animatedArrow>
            Learn More
          </Button>
          <Button variant="secondary" size="xl" animatedArrow>
            Explore Features
          </Button>
        </div>
      </section>

      {/* GHOST VARIANT - Dark Background */}
      <section className="bg-black border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">Ghost Variant (Transparent)</h3>
        <p className="text-sm text-white/60 mb-4">
          Shimmer: Subtle white gradient (transparent → white/20 → transparent) | Arrow: White ArrowUpRight with 300ms diagonal animation
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="sm" animatedArrow background="dark">
            Small Ghost
          </Button>
          <Button variant="ghost" size="md" animatedArrow background="dark">
            Medium Ghost
          </Button>
          <Button variant="ghost" size="lg" animatedArrow background="dark">
            Contact Us
          </Button>
          <Button variant="ghost" size="xl" animatedArrow background="dark">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* SECONDARY VARIANT - Dark Background */}
      <section className="bg-black border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">Secondary Variant on Dark</h3>
        <p className="text-sm text-white/60 mb-4">
          Shimmer: White gradient (white/10 → white/30 → white/10) | Arrow: White ArrowUpRight with 300ms diagonal animation
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="sm" animatedArrow background="dark">
            Small Secondary
          </Button>
          <Button variant="secondary" size="md" animatedArrow background="dark">
            Medium Secondary
          </Button>
          <Button variant="secondary" size="lg" animatedArrow background="dark">
            Discover More
          </Button>
          <Button variant="secondary" size="xl" animatedArrow background="dark">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* ICON POSITION TEST */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Icon Position Variations</h3>
        <p className="text-sm text-black/60 mb-4">
          Arrow animations work on both left and right icon positions
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-black/60 mb-3 font-semibold">Icon Right (Default)</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" animatedArrow>
                Primary Right
              </Button>
              <Button variant="brand" size="lg" animatedArrow>
                Brand Right
              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-black/60 mb-3 font-semibold">Icon Left</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" animatedArrow iconPosition="left">
                Primary Left
              </Button>
              <Button variant="brand" size="lg" animatedArrow iconPosition="left">
                Brand Left
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: WITH vs WITHOUT Arrow Animation */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Comparison: Arrow Animation ON vs OFF</h3>
        <p className="text-sm text-black/60 mb-4">
          Both buttons have shimmer (always on), but only urgency CTAs should have arrow animation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs text-black/60 font-semibold">✅ WITH Arrow Animation (Urgency CTAs)</p>
            <div className="space-y-3">
              <Button variant="brand" size="lg" animatedArrow fullWidth>
                Get Started Free
              </Button>
              <Button variant="primary" size="lg" animatedArrow fullWidth>
                Schedule Demo
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-xs text-black/60 font-semibold">⚪ WITHOUT Arrow Animation (General)</p>
            <div className="space-y-3">
              <Button variant="brand" size="lg" icon={<ArrowUpRight />} fullWidth>
                Learn More
              </Button>
              <Button variant="primary" size="lg" icon={<ArrowUpRight />} fullWidth>
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">✅ Animation Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-green-900">
          <div>
            <h4 className="font-semibold mb-2">Shimmer Effect</h4>
            <ul className="space-y-1">
              <li>• <strong>Duration:</strong> 700ms</li>
              <li>• <strong>Easing:</strong> ease-out</li>
              <li>• <strong>Trigger:</strong> Always on hover (all buttons)</li>
              <li>• <strong>Direction:</strong> Left to right</li>
              <li>• <strong>Performance:</strong> GPU-accelerated transform</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Arrow Animation</h4>
            <ul className="space-y-1">
              <li>• <strong>Duration:</strong> 300ms</li>
              <li>• <strong>Easing:</strong> ease-out</li>
              <li>• <strong>Trigger:</strong> Only urgency CTAs on hover</li>
              <li>• <strong>Direction:</strong> Diagonal (↗ exit, ↙ enter)</li>
              <li>• <strong>Movement:</strong> 4px (translate-1)</li>
              <li>• <strong>Performance:</strong> GPU-accelerated transform + opacity</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="space-y-1">
              <li>• <strong>Reduced Motion:</strong> Respects prefers-reduced-motion</li>
              <li>• <strong>Frame Rate:</strong> Smooth 60fps</li>
              <li>• <strong>Contrast:</strong> Maintains WCAG AA standards</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Browser Support</h4>
            <ul className="space-y-1">
              <li>• <strong>Chrome/Edge:</strong> Full support</li>
              <li>• <strong>Firefox:</strong> Full support</li>
              <li>• <strong>Safari:</strong> Full support (iOS 14+)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="bg-white border border-black/8 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Code Example</h3>
        <div className="bg-black/5 rounded p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-black/80">
{`// ✨ Shimmer is ALWAYS active (brand identity)
// 🎯 Arrow animation ONLY for urgency CTAs
// 🚀 Arrow uses HARDCODED ArrowUpRight icon (no icon prop needed)

import { Button } from '@/app/components/Button';

// Urgency CTA - Both animations, no icon prop needed
<Button 
  variant="brand" 
  size="lg" 
  animatedArrow // ← Automatically uses ArrowUpRight icon
>
  Schedule Demo
</Button>

// General button - Shimmer only, custom icon
<Button 
  variant="secondary" 
  size="lg" 
  icon={<Download />} // ← Pass custom icon when NOT using animatedArrow
>
  Download Report
</Button>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
