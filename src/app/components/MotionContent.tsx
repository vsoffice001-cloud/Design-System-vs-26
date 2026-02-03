import { useState } from 'react';

/**
 * MOTION CONTENT
 * Animation and motion design documentation
 */

export function MotionPrinciplesContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Motion Principles - Animation Philosophy</h1>
        <p className="text-lg text-black/70 mb-4">
          Purposeful motion that guides attention, provides feedback, and enhances spatial understanding without distraction.
        </p>
      </div>

      <section className="space-y-8">
        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Core Animation Principles</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">1. Purposeful Motion</h3>
              <p className="text-sm text-black/70">Every animation serves a clear function: guiding attention, providing feedback, or enhancing understanding. No motion for decoration.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">2. Natural Easing</h3>
              <p className="text-sm text-black/70">Use ease-out (cubic-bezier(0.22, 1, 0.36, 1)) for natural deceleration that mimics real-world physics.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-2">3. Subtle & Sophisticated</h3>
              <p className="text-sm text-black/70">Animations are barely noticeable but significantly improve perceived performance and polish.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold mb-2">4. Accessibility First</h3>
              <p className="text-sm text-black/70">Respect prefers-reduced-motion media query. Provide static alternatives for all animated content.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">✨ Motion Signature Elements</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Shimmer effect:</strong> ALWAYS active on all buttons (brand identity)</li>
            <li>• <strong>Arrow animation:</strong> ONLY for urgent CTAs (forms, redirects)</li>
            <li>• <strong>Fade-in on scroll:</strong> Content reveals as user scrolls</li>
            <li>• <strong>Hover scale:</strong> Subtle 1.02x scale on interactive elements</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export function DurationScaleContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Duration Scale - Animation Timing</h1>
        <p className="text-lg text-black/70 mb-4">
          4-tier duration system from instant (100ms) to slow (500ms) for consistent animation timing.
        </p>
      </div>

      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DurationDemo duration={100} name="Instant" usage="Tooltips, icon changes" />
          <DurationDemo duration={200} name="Fast" usage="Hover states, button feedback" />
          <DurationDemo duration={300} name="Base" usage="Standard transitions, fades" />
          <DurationDemo duration={500} name="Slow" usage="Page transitions, modals" />
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Duration Guidelines</h2>
          <table className="w-full">
            <thead className="border-b border-black/10">
              <tr>
                <th className="text-left py-2 text-sm font-semibold">Duration</th>
                <th className="text-left py-2 text-sm font-semibold">Value (ms)</th>
                <th className="text-left py-2 text-sm font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/5">
                <td className="py-3"><code className="text-xs bg-black/5 px-2 py-1 rounded">duration-instant</code></td>
                <td className="py-3 text-sm">100ms</td>
                <td className="py-3 text-sm text-black/60">Immediate feedback (tooltips, icon swaps)</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-3"><code className="text-xs bg-black/5 px-2 py-1 rounded">duration-fast</code></td>
                <td className="py-3 text-sm">200ms</td>
                <td className="py-3 text-sm text-black/60">Hover states, button feedback ⭐</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-3"><code className="text-xs bg-black/5 px-2 py-1 rounded">duration-base</code></td>
                <td className="py-3 text-sm">300ms</td>
                <td className="py-3 text-sm text-black/60">Standard transitions ⭐</td>
              </tr>
              <tr>
                <td className="py-3"><code className="text-xs bg-black/5 px-2 py-1 rounded">duration-slow</code></td>
                <td className="py-3 text-sm">500ms</td>
                <td className="py-3 text-sm text-black/60">Page transitions, modals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function DurationDemo({ duration, name, usage }: { duration: number; name: string; usage: string }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), duration + 100);
  };

  return (
    <div className="border border-black/8 rounded-lg p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-black/60">{duration}ms</p>
        </div>
        <button onClick={handleClick} className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-black/90 transition-colors">
          Test
        </button>
      </div>
      <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center relative overflow-hidden">
        <div className={`absolute left-0 top-0 bottom-0 w-full bg-blue-500 transform origin-left ${
          isAnimating ? 'scale-x-100' : 'scale-x-0'
        }`} style={{ transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)` }}></div>
        <span className="relative z-10 text-xs font-mono text-black/60">{usage}</span>
      </div>
    </div>
  );
}

export function TransitionsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Transitions - CSS Transitions</h1>
        <p className="text-lg text-black/70 mb-4">
          Standard CSS transitions for common interactive elements with ease-out timing.
        </p>
      </div>

      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Opacity Fade</h3>
            <div className="bg-gray-100 rounded-lg p-8 hover:opacity-50 transition-opacity duration-300">
              <p className="text-sm text-center text-black/60">Hover to fade</p>
            </div>
            <code className="text-xs bg-black/5 px-2 py-1 rounded mt-3 inline-block">transition: opacity 300ms ease-out</code>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Transform Scale</h3>
            <div className="bg-gray-100 rounded-lg p-8 hover:scale-105 transition-transform duration-200">
              <p className="text-sm text-center text-black/60">Hover to scale</p>
            </div>
            <code className="text-xs bg-black/5 px-2 py-1 rounded mt-3 inline-block">transition: transform 200ms ease-out</code>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Background Color</h3>
            <div className="bg-gray-100 rounded-lg p-8 hover:bg-blue-100 transition-colors duration-300">
              <p className="text-sm text-center text-black/60">Hover to change</p>
            </div>
            <code className="text-xs bg-black/5 px-2 py-1 rounded mt-3 inline-block">transition: background 300ms ease-out</code>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Border Color</h3>
            <div className="border-2 border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors duration-200">
              <p className="text-sm text-center text-black/60">Hover for border</p>
            </div>
            <code className="text-xs bg-black/5 px-2 py-1 rounded mt-3 inline-block">transition: border-color 200ms ease-out</code>
          </div>
        </div>
      </section>
    </div>
  );
}

export function MicroInteractionsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Micro-interactions - Delightful Details</h1>
        <p className="text-lg text-black/70 mb-4">
          Subtle interactions that provide feedback and create moments of delight.
        </p>
      </div>

      <section className="space-y-6">
        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Button Shimmer Effect</h2>
          <div className="inline-block relative group">
            <button className="px-6 py-3 bg-[var(--accent-red)] text-white rounded-md relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              <span className="relative">Hover for Shimmer</span>
            </button>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-red-50 border border-red-200 rounded p-3">
            <strong>BRAND SIGNATURE:</strong> Shimmer effect active on ALL buttons (always on, not just hover)
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Arrow Animation (Urgent CTAs)</h2>
          <button className="px-6 py-3 bg-black text-white rounded-md hover:gap-3 transition-all duration-200 inline-flex items-center gap-2 group">
            <span>Get Started</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <div className="mt-4 text-sm text-black/60 bg-amber-50 border border-amber-200 rounded p-3">
            <strong>USAGE:</strong> ONLY for form submissions and urgent redirects (not all buttons)
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">✨ Micro-interaction Principles</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Feedback:</strong> Immediate visual response to user actions</li>
            <li>• <strong>Subtle:</strong> Noticeable but not distracting</li>
            <li>• <strong>Consistent:</strong> Same interaction patterns across similar elements</li>
            <li>• <strong>Performance:</strong> Use CSS transforms (not position) for 60fps</li>
          </ul>
        </div>
      </section>
    </div>
  );
}