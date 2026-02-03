/**
 * GUIDELINES CONTENT
 * Best practices, accessibility, and responsive design guidelines
 */

export function AccessibilityContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Accessibility - WCAG 2.1 AA Standards</h1>
        <p className="text-lg text-black/70 mb-4">
          Every component meets WCAG 2.1 AA standards minimum, ensuring inclusive experiences for all users.
        </p>
      </div>

      <section className="space-y-8">
        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Color Contrast Requirements</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">✅ Normal Text (16px+)</h3>
              <p className="text-sm text-black/70 mb-2">Minimum 4.5:1 contrast ratio</p>
              <div className="flex gap-4 items-center">
                <div className="bg-black text-white px-4 py-2 rounded text-sm">Black on White (21:1)</div>
                <div className="bg-[var(--accent-red)] text-white px-4 py-2 rounded text-sm">Red on White (5.9:1)</div>
              </div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">✅ Large Text (24px+)</h3>
              <p className="text-sm text-black/70 mb-2">Minimum 3:1 contrast ratio</p>
              <div className="flex gap-4 items-center">
                <div className="bg-black/60 text-white px-4 py-2 rounded text-lg">60% Black (7:1)</div>
                <div className="bg-black/40 text-white px-4 py-2 rounded text-lg">40% Black (4.2:1)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Keyboard Navigation</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">Tab Navigation</p>
                <p className="text-xs text-black/60">All interactive elements accessible via Tab key</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">Focus States</p>
                <p className="text-xs text-black/60">2px ring in black/20 for visible focus indication</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">Skip Links</p>
                <p className="text-xs text-black/60">"Skip to content" link for keyboard users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Screen Reader Support</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">Semantic HTML</p>
                <p className="text-xs text-black/60">Proper heading hierarchy (h1 → h2 → h3)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">ARIA Labels</p>
                <p className="text-xs text-black/60">Descriptive labels for icons and interactive elements</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">✓</div>
              <div>
                <p className="font-semibold text-sm">Alt Text</p>
                <p className="text-xs text-black/60">Descriptive alt text for all images</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Touch Targets (Mobile)</h2>
          <div className="space-y-4">
            <p className="text-sm text-black/70">Minimum 40px × 40px touch targets for mobile accessibility</p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-red-100 border-2 border-red-400 rounded flex items-center justify-center text-xs">
                ❌<br/>Too Small
              </button>
              <button className="w-12 h-12 bg-green-100 border-2 border-green-400 rounded flex items-center justify-center text-xs">
                ✅<br/>Perfect
              </button>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">♿️ Accessibility Checklist</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Contrast:</strong> Test all text/background combinations with contrast checker</li>
            <li>• <strong>Keyboard:</strong> Navigate entire page using only keyboard</li>
            <li>• <strong>Screen readers:</strong> Test with NVDA (Windows) or VoiceOver (Mac)</li>
            <li>• <strong>Zoom:</strong> Ensure page works at 200% zoom</li>
            <li>• <strong>Motion:</strong> Respect prefers-reduced-motion setting</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export function ResponsiveDesignContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Responsive Design - Mobile-First Approach</h1>
        <p className="text-lg text-black/70 mb-4">
          Mobile-first responsive design with breakpoints from 375px (mobile) to 1920px+ (ultra-wide).
        </p>
      </div>

      <section className="space-y-8">
        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Breakpoint System</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <div>
                <p className="font-semibold">Mobile (Base)</p>
                <p className="text-xs text-black/60">Default styles, no media query</p>
              </div>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">375px - 639px</code>
            </div>
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <div>
                <p className="font-semibold">Tablet (sm)</p>
                <p className="text-xs text-black/60">Small tablets, large phones</p>
              </div>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">640px+</code>
            </div>
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <div>
                <p className="font-semibold">Desktop (md)</p>
                <p className="text-xs text-black/60">Tablets, small laptops</p>
              </div>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">768px+</code>
            </div>
            <div className="flex items-center justify-between border-b border-black/5 pb-3">
              <div>
                <p className="font-semibold">Large (lg)</p>
                <p className="text-xs text-black/60">Laptops, desktops</p>
              </div>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">1024px+</code>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Extra Large (xl)</p>
                <p className="text-xs text-black/60">Large desktops, ultra-wide</p>
              </div>
              <code className="text-xs bg-black/5 px-2 py-1 rounded">1280px+</code>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Responsive Grid Patterns</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">Mobile: 1 Column</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-blue-100 h-12 rounded"></div>
                <div className="bg-blue-100 h-12 rounded"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Tablet: 2 Columns</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-100 h-12 rounded"></div>
                <div className="bg-green-100 h-12 rounded"></div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Desktop: 3-4 Columns</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-purple-100 h-12 rounded"></div>
                <div className="bg-purple-100 h-12 rounded"></div>
                <div className="bg-purple-100 h-12 rounded"></div>
                <div className="bg-purple-100 h-12 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">📱 Responsive Principles</h3>
          <ul className="space-y-2 text-sm text-blue-900">
            <li>• <strong>Mobile-first:</strong> Design for mobile, then enhance for larger screens</li>
            <li>• <strong>Fluid typography:</strong> Use clamp() for responsive font sizes</li>
            <li>• <strong>Flexible images:</strong> max-width: 100% for responsive images</li>
            <li>• <strong>Touch-friendly:</strong> 40px minimum touch targets on mobile</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export function BestPracticesContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Best Practices - Design & Development</h1>
        <p className="text-lg text-black/70 mb-4">
          Essential best practices for using the design system effectively.
        </p>
      </div>

      <section className="space-y-8">
        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Component Usage</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-900 mb-1">✅ DO</h3>
              <p className="text-sm text-black/70">Use design tokens (CSS variables) for colors, spacing, typography</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-900 mb-1">❌ DON'T</h3>
              <p className="text-sm text-black/70">Hardcode pixel values or hex colors - always use tokens</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-900 mb-1">✅ DO</h3>
              <p className="text-sm text-black/70">Follow the 5% red rule - Ken Bold Red for CTAs only</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-900 mb-1">❌ DON'T</h3>
              <p className="text-sm text-black/70">Use red decoratively or for large areas - breaks minimalist aesthetic</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Typography Best Practices</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold">✓</div>
              <p className="text-sm">Use Noto Serif for all headings (h1, h2, h3)</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold">✓</div>
              <p className="text-sm">Use DM Sans for body text, UI elements, labels</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold">✓</div>
              <p className="text-sm">Follow Major Third scale - don't create custom sizes</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold">✓</div>
              <p className="text-sm">Maintain proper heading hierarchy (no skipping levels)</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Spacing Best Practices</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">✓</div>
              <p className="text-sm">Use space-4 (16px) as default spacing</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">✓</div>
              <p className="text-sm">Use space-12 (48px) for section separation</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">✓</div>
              <p className="text-sm">Stick to 4px grid - don't use arbitrary values</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-semibold text-amber-900 mb-3">⭐ Golden Rules</h3>
          <ul className="space-y-2 text-sm text-amber-900">
            <li>• <strong>Always use tokens</strong> - Never hardcode values</li>
            <li>• <strong>Test accessibility</strong> - Check contrast, keyboard, screen readers</li>
            <li>• <strong>Mobile-first</strong> - Design for small screens, enhance for large</li>
            <li>• <strong>Consistency</strong> - Follow patterns established in the system</li>
            <li>• <strong>Performance</strong> - Optimize images, minimize animations</li>
          </ul>
        </div>
      </section>
    </div>
  );
}