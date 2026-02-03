/**
 * ALL TYPOGRAPHY TOKENS - COMPLETE REFERENCE
 * Complete typography token reference page
 */

export function AllTypographyTokensContent() {
  return (
    <div className="space-y-8 p-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Complete Typography Tokens Reference</h1>
        <p className="text-lg text-black/70 mb-4">
          Comprehensive typography reference with all type scales (xs → 5xl), font weights, 
          line heights, letter spacing, and usage examples.
        </p>
        <div className="space-y-4 mt-6">
          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Type Scale - Major Third (1.25 Ratio)</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-xs</span>
                <span className="text-sm">12.8px / 0.8rem</span>
                <span className="text-xs text-black/60">Labels, metadata</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-sm</span>
                <span className="text-sm">16px / 1rem</span>
                <span className="text-xs text-black/60">Body text ⭐</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-base</span>
                <span className="text-sm">20px / 1.25rem</span>
                <span className="text-xs text-black/60">Large body</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-lg</span>
                <span className="text-sm">25px / 1.563rem</span>
                <span className="text-xs text-black/60">Subheadings</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-xl</span>
                <span className="text-sm">31.25px / 1.953rem</span>
                <span className="text-xs text-black/60">Card titles ⭐</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-2xl</span>
                <span className="text-sm">39px / 2.441rem</span>
                <span className="text-xs text-black/60">Section headers ⭐</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-3xl</span>
                <span className="text-sm">48.8px / 3.052rem</span>
                <span className="text-xs text-black/60">Page headers ⭐</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span className="font-mono text-sm">text-4xl</span>
                <span className="text-sm">61px / 3.815rem</span>
                <span className="text-xs text-black/60">Hero alternative</span>
              </div>
              <div className="flex items-center justify-between pb-2">
                <span className="font-mono text-sm">text-5xl</span>
                <span className="text-sm">76.3px / 4.768rem</span>
                <span className="text-xs text-black/60">Hero headlines</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Font Families</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-1" style={{fontFamily: "'Noto Serif', serif"}}>Noto Serif</p>
                <p className="text-sm text-black/60">Editorial headings (h1, h2, h3), quotes, testimonials</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{fontFamily: "'DM Sans', sans-serif"}}>DM Sans</p>
                <p className="text-sm text-black/60">Body text, UI elements, buttons, labels, data</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/8 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Font Weights</h3>
            <div className="space-y-2">
              <p><span className="font-normal">Normal (400)</span> - Body text, descriptions</p>
              <p><span className="font-medium">Medium (500)</span> - Labels, emphasized text</p>
              <p><span className="font-bold">Bold (700)</span> - Headings, strong emphasis</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">💡 Quick Reference</h3>
            <ul className="space-y-1 text-sm text-green-900">
              <li>• Use Noto Serif for all headings (h1, h2, h3)</li>
              <li>• Use DM Sans for body text and UI elements</li>
              <li>• text-sm (16px) is the standard body size</li>
              <li>• Major Third (1.25) ratio ensures harmonious scaling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}