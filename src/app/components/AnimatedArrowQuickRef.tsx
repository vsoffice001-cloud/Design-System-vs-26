/**
 * ANIMATED ARROW - QUICK REFERENCE CARD
 * ======================================
 * 
 * Copy-paste ready examples for the AnimatedArrow component.
 */

export function AnimatedArrowQuickRef() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-normal mb-6">AnimatedArrow - Quick Reference</h1>
      
      {/* Basic Usage */}
      <div className="border border-black/8 rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-3">1. Basic Usage</h2>
        <div className="bg-black/5 rounded p-4 font-mono text-sm">
          <pre>{`import { AnimatedArrow } from '@/app/components/AnimatedArrow';

// Default
<AnimatedArrow />

// Custom size
<AnimatedArrow size={24} />

// Custom color
<AnimatedArrow color="#b01f24" />

// Inherit parent color
<AnimatedArrow color="currentColor" />`}</pre>
        </div>
      </div>

      {/* Props Table */}
      <div className="border border-black/8 rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-3">Props Reference</h2>
        <table className="w-full text-sm">
          <thead className="border-b border-black/10">
            <tr className="text-left">
              <th className="py-2 font-semibold">Prop</th>
              <th className="py-2 font-semibold">Type</th>
              <th className="py-2 font-semibold">Default</th>
              <th className="py-2 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            <tr>
              <td className="py-2 font-mono text-xs">size</td>
              <td className="py-2 text-black/60">number</td>
              <td className="py-2 font-mono text-xs">20</td>
              <td className="py-2 text-black/60">Icon size in pixels</td>
            </tr>
            <tr>
              <td className="py-2 font-mono text-xs">color</td>
              <td className="py-2 text-black/60">string</td>
              <td className="py-2 font-mono text-xs">"currentColor"</td>
              <td className="py-2 text-black/60">Icon color</td>
            </tr>
            <tr>
              <td className="py-2 font-mono text-xs">strokeWidth</td>
              <td className="py-2 text-black/60">number</td>
              <td className="py-2 font-mono text-xs">2</td>
              <td className="py-2 text-black/60">Icon stroke width</td>
            </tr>
            <tr>
              <td className="py-2 font-mono text-xs">duration</td>
              <td className="py-2 text-black/60">number</td>
              <td className="py-2 font-mono text-xs">300</td>
              <td className="py-2 text-black/60">Animation duration (ms)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono text-xs">className</td>
              <td className="py-2 text-black/60">string</td>
              <td className="py-2 font-mono text-xs">""</td>
              <td className="py-2 text-black/60">Additional CSS classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
