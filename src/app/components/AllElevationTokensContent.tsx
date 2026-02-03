/**
 * ALL ELEVATION TOKENS - COMPLETE REFERENCE
 */

export function AllElevationTokensContent() {
  return (
    <div className="space-y-8 p-8">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Complete Elevation Tokens</h1>
        <p className="text-lg text-black/70 mb-4">
          6-level elevation system using box-shadow to create depth and hierarchy. Subtle shadows maintain minimalist aesthetic.
        </p>
        <div className="space-y-6 mt-6">
          {[
            { level: '0 - None', shadow: 'none', usage: 'Flat elements, no elevation', token: 'shadow-none' },
            { level: '1 - Subtle', shadow: '0 1px 2px 0 rgba(0,0,0,0.05)', usage: 'Slight lift, cards ⭐', token: 'shadow-sm' },
            { level: '2 - Low', shadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)', usage: 'Standard cards ⭐', token: 'shadow' },
            { level: '3 - Medium', shadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)', usage: 'Hover states, dropdowns', token: 'shadow-md' },
            { level: '4 - High', shadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', usage: 'Modals, popovers', token: 'shadow-lg' },
            { level: '5 - Higher', shadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)', usage: 'Floating panels', token: 'shadow-xl' },
            { level: '6 - Highest', shadow: '0 25px 50px -12px rgba(0,0,0,0.25)', usage: 'Maximum elevation', token: 'shadow-2xl' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-black/8 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1">{item.level}</h3>
                  <code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{item.token}</code>
                </div>
                <span className="text-xs text-black/60">{item.usage}</span>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="w-48 h-32 bg-white rounded-lg flex items-center justify-center" style={{boxShadow: item.shadow}}>
                  <span className="text-sm text-black/40">Preview</span>
                </div>
              </div>
              <p className="mt-3 text-xs font-mono text-black/60 bg-black/5 p-2 rounded">
                {item.shadow}
              </p>
            </div>
          ))}

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">💡 Elevation Principles</h3>
            <ul className="space-y-1 text-sm text-green-900">
              <li>• Use subtle shadows (sm, md) for most UI elements</li>
              <li>• Higher elevations (lg, xl) for modals and overlays</li>
              <li>• Avoid excessive shadows - maintain minimalist feel</li>
              <li>• shadow-sm is perfect for standard card elevation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}