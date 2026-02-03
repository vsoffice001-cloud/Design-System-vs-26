/**
 * PATTERNS CONTENT
 * Design patterns for layouts, content organization, and backgrounds
 */

export function PageLayoutsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Page Layouts - Layout Patterns</h1>
        <p className="text-lg text-black/70 mb-4">
          Common page layout patterns for consistent structure and hierarchy.
        </p>
      </div>

      <section className="space-y-8">
        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Hero + Content Layout</h2>
          <div className="border-2 border-dashed border-black/10 rounded-lg p-4 space-y-4">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-sm font-mono text-black/60">Hero Section (Full Width)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-lg h-32 flex items-center justify-center">
                <span className="text-sm font-mono text-black/60">Content Block</span>
              </div>
              <div className="bg-blue-100 rounded-lg h-32 flex items-center justify-center">
                <span className="text-sm font-mono text-black/60">Content Block</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-blue-50 border border-blue-200 rounded p-3">
            <strong>USAGE:</strong> Landing pages, product pages, case study intros
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Sidebar + Content Layout</h2>
          <div className="border-2 border-dashed border-black/10 rounded-lg p-4">
            <div className="flex gap-4">
              <div className="bg-purple-100 rounded-lg w-48 h-64 flex items-center justify-center">
                <span className="text-sm font-mono text-black/60">Sidebar Nav</span>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <span className="text-sm font-mono text-black/60">Main Content Area</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-purple-50 border border-purple-200 rounded p-3">
            <strong>USAGE:</strong> Documentation, dashboards, settings pages
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Grid Layout (3-4 Columns)</h2>
          <div className="border-2 border-dashed border-black/10 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({length: 6}).map((_, idx) => (
                <div key={idx} className="bg-green-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-sm font-mono text-black/60">Card {idx+1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-green-50 border border-green-200 rounded p-3">
            <strong>USAGE:</strong> Portfolio galleries, product listings, team pages
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">🏛️ Layout Principles</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Max-width 1000px:</strong> Optimal content container for readability</li>
            <li>• <strong>Responsive:</strong> 1 column (mobile) → 2-3 columns (tablet) → 3-4 columns (desktop)</li>
            <li>• <strong>White space:</strong> Generous padding and margins for breathing room</li>
            <li>• <strong>Hierarchy:</strong> Clear visual flow from hero to content sections</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export function ContentPatternsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Content Patterns - Composition Patterns</h1>
        <p className="text-lg text-black/70 mb-4">
          Reusable content composition patterns for consistent information architecture.
        </p>
      </div>

      <section className="space-y-8">
        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Feature Block Pattern</h2>
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Feature Title</h3>
                <p className="text-sm text-black/70">Description of the feature explaining its value proposition and key benefits to users.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-amber-50 border border-amber-200 rounded p-3">
            <strong>PATTERN:</strong> Icon + Title + Description (left-aligned, horizontal layout)
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Testimonial Pattern</h2>
          <div className="border border-black/8 rounded-lg p-6 bg-warm-50">
            <p className="text-lg italic mb-4" style={{fontFamily: "'Noto Serif', serif"}}>
              "This design system transformed our workflow and enabled us to ship features 3x faster."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black/10 rounded-full"></div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-black/60">Product Designer, Acme Corp</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-blue-50 border border-blue-200 rounded p-3">
            <strong>PATTERN:</strong> Quote (Noto Serif italic) + Avatar + Name + Title
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Stats Block Pattern</h2>
          <div className="grid grid-cols-3 gap-6 border border-black/8 rounded-lg p-6 bg-white">
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">50+</p>
              <p className="text-sm text-black/60">Components</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">7</p>
              <p className="text-sm text-black/60">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">100%</p>
              <p className="text-sm text-black/60">Accessible</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-green-50 border border-green-200 rounded p-3">
            <strong>PATTERN:</strong> Large number + Small label (center-aligned, grid layout)
          </div>
        </div>
      </section>
    </div>
  );
}

export function BackgroundsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Backgrounds - Background Patterns</h1>
        <p className="text-lg text-black/70 mb-4">
          Strategic background usage for section alternation and visual hierarchy.
        </p>
      </div>

      <section className="space-y-8">
        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Section Alternation Pattern</h2>
          <div className="space-y-4">
            <div className="bg-white border border-black/8 rounded-lg p-6 text-center">
              <p className="font-mono text-sm text-black/60">White Section (#FFFFFF)</p>
            </div>
            <div className="rounded-lg p-6 text-center" style={{background: '#f5f2f1'}}>
              <p className="font-mono text-sm text-black/60">Warm Editorial (#f5f2f1)</p>
            </div>
            <div className="bg-white border border-black/8 rounded-lg p-6 text-center">
              <p className="font-mono text-sm text-black/60">White Section (#FFFFFF)</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-amber-50 border border-amber-200 rounded p-3">
            <strong>PATTERN:</strong> Alternate between pure white and warm editorial (#f5f2f1) for section separation
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Gradient Overlays</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg h-32 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(128, 108, 224, 0.12) 0%, rgba(176, 31, 36, 0.08) 100%)'}}>
              <p className="text-xs font-mono">Purple → Red (12% → 8%)</p>
            </div>
            <div className="rounded-lg h-32 flex items-center justify-center" style={{background: 'radial-gradient(circle 600px at 100% 100%, rgba(234, 122, 95, 0.06) 0%, transparent 70%)'}}>
              <p className="text-xs font-mono">Coral Radial (6%)</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-purple-50 border border-purple-200 rounded p-3">
            <strong>USAGE:</strong> Subtle gradient overlays (5-12% opacity) for hero sections and feature blocks
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">🎨 Background Principles</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Alternation:</strong> White → Warm (#f5f2f1) → White for section rhythm</li>
            <li>• <strong>Gradients:</strong> Use sparingly (5-15% opacity max) for premium feel</li>
            <li>• <strong>Never pure gray:</strong> Always use warm editorial tones instead</li>
            <li>• <strong>Contrast:</strong> Maintain WCAG AAA for text on all backgrounds</li>
          </ul>
        </div>
      </section>
    </div>
  );
}