/**
 * ALL LAYOUT & GRID TOKENS - COMPLETE REFERENCE
 */

export function AllLayoutGridTokensContent() {
  return (
    <div className="space-y-8 p-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Complete Layout & Grid Tokens</h1>
        <p className="text-lg text-black/70 mb-4">
          Comprehensive layout system with responsive breakpoints, container widths, grid columns, and z-index layers.
        </p>
        <div className="space-y-6 mt-6">
          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Responsive Breakpoints</h3>
            <div className="space-y-3">
              {[
                { name: 'Mobile (sm)', value: '640px', usage: 'Small devices, phones' },
                { name: 'Tablet (md)', value: '768px', usage: 'Tablets, small laptops' },
                { name: 'Desktop (lg)', value: '1024px', usage: 'Laptops, desktops' },
                { name: 'Wide (xl)', value: '1280px', usage: 'Large desktops' },
                { name: 'Ultra-wide (2xl)', value: '1536px', usage: 'Ultra-wide displays' },
              ].map((bp, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-black/5 pb-2">
                  <span className="font-medium">{bp.name}</span>
                  <code className="text-sm font-mono bg-black/5 px-2 py-1 rounded">{bp.value}</code>
                  <span className="text-xs text-black/60">{bp.usage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Container Max Widths</h3>
            <div className="space-y-2">
              <p><code className="font-mono text-sm bg-black/5 px-2 py-1 rounded">max-w-prose</code> - 680px (optimal reading)</p>
              <p><code className="font-mono text-sm bg-black/5 px-2 py-1 rounded">max-w-container</code> - 1000px (content container)</p>
              <p><code className="font-mono text-sm bg-black/5 px-2 py-1 rounded">max-w-wide</code> - 1200px (dashboard width)</p>
            </div>
          </div>

          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Grid System</h3>
            <p className="text-sm text-black/70 mb-3">Responsive grid: 1 column (mobile) → 2-3 columns (tablet) → 3-4 columns (desktop)</p>
            <div className="grid grid-cols-12 gap-2">
              {Array.from({length: 12}).map((_, idx) => (
                <div key={idx} className="bg-blue-100 border border-blue-300 h-12 flex items-center justify-center text-xs font-mono">{idx+1}</div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Z-Index Layers</h3>
            <div className="space-y-2 text-sm">
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-0</code> - Base layer</p>
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-10</code> - Elevated content</p>
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-20</code> - Dropdowns, tooltips</p>
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-30</code> - Fixed navigation</p>
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-40</code> - Modals, overlays</p>
              <p><code className="font-mono bg-black/5 px-2 py-1 rounded">z-50</code> - Notifications, toasts</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">💡 Layout Principles</h3>
            <ul className="space-y-1 text-sm text-green-900">
              <li>• Mobile-first responsive design approach</li>
              <li>• 1000px max-width for optimal readability</li>
              <li>• 12-column grid system for flexible layouts</li>
              <li>• Consistent z-index layers prevent stacking issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}