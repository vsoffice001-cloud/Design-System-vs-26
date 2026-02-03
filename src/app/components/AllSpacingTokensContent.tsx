/**
 * ALL SPACING TOKENS - COMPLETE REFERENCE  
 */

export function AllSpacingTokensContent() {
  return (
    <div className="space-y-8 p-8">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Complete Spacing Tokens Reference</h1>
        <p className="text-lg text-black/70 mb-4">
          10-step spacing scale based on 4px grid (0.25rem base unit). Consistent spacing creates visual rhythm and hierarchy.
        </p>
        <div className="space-y-6 mt-6">
          <div className="bg-white border border-black/8 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-black/5 border-b border-black/10">
                <tr>
                  <th className="text-left p-4 font-semibold text-sm">Token</th>
                  <th className="text-left p-4 font-semibold text-sm">Value (px)</th>
                  <th className="text-left p-4 font-semibold text-sm">Value (rem)</th>
                  <th className="text-left p-4 font-semibold text-sm">Visual</th>
                  <th className="text-left p-4 font-semibold text-sm">Usage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { token: 'space-0', px: '0px', rem: '0rem', usage: 'No spacing' },
                  { token: 'space-1', px: '4px', rem: '0.25rem', usage: 'Minimal gap' },
                  { token: 'space-2', px: '8px', rem: '0.5rem', usage: 'Tight spacing' },
                  { token: 'space-3', px: '12px', rem: '0.75rem', usage: 'Small gap ⭐' },
                  { token: 'space-4', px: '16px', rem: '1rem', usage: 'Base spacing ⭐' },
                  { token: 'space-5', px: '20px', rem: '1.25rem', usage: 'Standard gap' },
                  { token: 'space-6', px: '24px', rem: '1.5rem', usage: 'Medium gap ⭐' },
                  { token: 'space-8', px: '32px', rem: '2rem', usage: 'Large gap' },
                  { token: 'space-10', px: '40px', rem: '2.5rem', usage: 'Section spacing' },
                  { token: 'space-12', px: '48px', rem: '3rem', usage: 'XL spacing ⭐' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-black/5 hover:bg-black/[0.02]">
                    <td className="p-4"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{item.token}</code></td>
                    <td className="p-4 text-sm">{item.px}</td>
                    <td className="p-4 text-sm">{item.rem}</td>
                    <td className="p-4"><div className="bg-blue-500" style={{width: item.px, height: '20px'}}></div></td>
                    <td className="p-4 text-xs text-black/60">{item.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">💡 Spacing Principles</h3>
            <ul className="space-y-1 text-sm text-green-900">
              <li>• 4px base unit ensures pixel-perfect alignment</li>
              <li>• space-4 (16px) is the default for most UI spacing</li>
              <li>• space-6 (24px) for component separation</li>
              <li>• space-12 (48px) for section spacing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}