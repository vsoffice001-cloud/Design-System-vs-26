/**
 * ALL BORDER RADIUS TOKENS - COMPLETE REFERENCE
 */

export function AllBorderRadiusTokensContent() {
  return (
    <div className="space-y-8 p-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Complete Border Radius Tokens</h1>
        <p className="text-lg text-black/70 mb-4">
          Incremental border radius system using 5px increments (0, 2.5, 5, 10, 15, 20...) for consistent corner rounding.
        </p>
        <div className="space-y-6 mt-6">
          {[
            { name: 'None', value: '0px', token: 'radius-0', usage: 'Sharp corners' },
            { name: 'Minimal', value: '2.5px', token: 'radius-2xs', usage: 'Logos, icons' },
            { name: 'Small', value: '5px', token: 'radius-xs', usage: 'Buttons, inputs ⭐' },
            { name: 'Medium', value: '10px', token: 'radius-sm', usage: 'Cards, panels ⭐' },
            { name: 'Large', value: '15px', token: 'radius-md', usage: 'Large cards' },
            { name: 'XL', value: '20px', token: 'radius-lg', usage: 'Hero sections' },
            { name: '2XL', value: '25px', token: 'radius-xl', usage: 'Feature blocks' },
            { name: '3XL', value: '30px', token: 'radius-2xl', usage: 'Massive elements' },
            { name: 'Full', value: '9999px', token: 'radius-full', usage: 'Pills, badges, circles ⭐' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-black/8 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{item.token}</code>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.value}</p>
                  <p className="text-xs text-black/60">{item.usage}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                <div className="w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40" style={{borderRadius: item.value}}></div>
              </div>
            </div>
          ))}

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2">💡 Border Radius Principles</h3>
            <ul className="space-y-1 text-sm text-green-900">
              <li>• 5px (radius-xs) is standard for buttons and form inputs</li>
              <li>• 10px (radius-sm) works perfectly for cards and panels</li>
              <li>• Use radius-full for pills, badges, and avatar circles</li>
              <li>• Match radius to component size - larger elements use larger radius</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}