import { useState } from 'react';
import { Copy, Check, ChevronRight, Search, Mail, Lock, User, Phone, Calendar, Upload, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { ButtonAnimationTest } from '@/app/components/ButtonAnimationTest';

/**
 * COMPONENTS CONTENT
 * Complete component library documentation
 */

export function ButtonDocumentation() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Buttons - Complete Component Reference</h1>
        <p className="text-lg text-black/70 mb-4">
          Strategic button system with shimmer effects (always on) and arrow animations (urgent actions only).
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Button Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Primary - Ken Bold Red</h3>
            <div className="space-y-3">
              <Button variant="primary" size="lg">Primary Large</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="sm">Primary Small</Button>
            </div>
            <div className="mt-4 text-xs text-black/60 bg-amber-50 border border-amber-200 rounded p-3">
              <strong>WHEN:</strong> CTAs, primary actions, form submissions<br/>
              <strong>SHIMMER:</strong> Always active (brand signature) ⭐
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-4">Secondary - Black Outline</h3>
            <div className="space-y-3">
              <Button variant="secondary" size="lg">Secondary Large</Button>
              <Button variant="secondary" size="md">Secondary Medium</Button>
              <Button variant="secondary" size="sm">Secondary Small</Button>
            </div>
            <div className="mt-4 text-xs text-black/60 bg-blue-50 border border-blue-200 rounded p-3">
              <strong>WHEN:</strong> Secondary actions, cancel, back<br/>
              <strong>SHIMMER:</strong> Subtle on hover
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">💡 Button Usage Principles</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Shimmer effect:</strong> ALWAYS active on all buttons (brand identity signature)</li>
            <li>• <strong>Arrow animation:</strong> ONLY for forms/redirects with urgency (e.g., "Get Started →")</li>
            <li>• <strong>Primary buttons:</strong> Maximum 1-2 per screen section</li>
            <li>• <strong>Touch targets:</strong> Minimum 40px × 40px for mobile accessibility</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-normal mb-6">Interactive Demo</h2>
        <ButtonAnimationTest />
      </section>
    </div>
  );
}

export function FormInputsContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Form Inputs - Input Components</h1>
        <p className="text-lg text-black/70 mb-4">
          Clean, accessible form inputs with consistent styling and validation states.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <label className="block text-sm font-medium mb-2">Text Input</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20" />
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <label className="block text-sm font-medium mb-2">Email Input</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20" />
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <label className="block text-sm font-medium mb-2">Password Input</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20" />
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <label className="block text-sm font-medium mb-2">Textarea</label>
            <textarea placeholder="Enter your message..." rows={4} className="w-full px-4 py-2 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"></textarea>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">✅ Form Input Principles</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Labels:</strong> Always visible, never placeholder-only</li>
            <li>• <strong>Focus states:</strong> 2px ring in black/20 for visibility</li>
            <li>• <strong>Icons:</strong> Use for context (email, password, search)</li>
            <li>• <strong>Validation:</strong> Show errors below input with rose-500 color</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export function CardsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Cards - Container Components</h1>
        <p className="text-lg text-black/70 mb-4">
          Flexible card containers with consistent elevation and hover states.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-medium mb-2">Standard Card</h3>
            <p className="text-sm text-black/60">Basic card with border, padding, and hover shadow.</p>
          </div>

          <div className="shadow-sm rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-medium mb-2">Elevated Card</h3>
            <p className="text-sm text-black/60">Card with subtle shadow elevation (shadow-sm).</p>
          </div>

          <div className="border-2 border-black rounded-lg p-6 bg-white hover:bg-black/2 transition-colors">
            <div className="w-full h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg mb-4"></div>
            <h3 className="text-xl font-medium mb-2">Outlined Card</h3>
            <p className="text-sm text-black/60">Bold border for emphasis and hierarchy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function NavigationContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Navigation - Navigation Components</h1>
        <p className="text-lg text-black/70 mb-4">
          Consistent navigation patterns for wayfinding and hierarchy.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Navigation Patterns</h2>
        <div className="space-y-4">
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-3">Horizontal Navigation</h3>
            <div className="flex gap-6 border-b border-black/10 pb-2">
              <button className="pb-2 border-b-2 border-black font-medium">Overview</button>
              <button className="pb-2 text-black/60 hover:text-black">Features</button>
              <button className="pb-2 text-black/60 hover:text-black">Pricing</button>
              <button className="pb-2 text-black/60 hover:text-black">About</button>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-3">Vertical Navigation (Sidebar)</h3>
            <div className="space-y-1">
              <button className="w-full px-4 py-2 text-left bg-black/8 font-medium rounded-md">Dashboard</button>
              <button className="w-full px-4 py-2 text-left text-black/60 hover:bg-black/5 rounded-md">Projects</button>
              <button className="w-full px-4 py-2 text-left text-black/60 hover:bg-black/5 rounded-md">Team</button>
              <button className="w-full px-4 py-2 text-left text-black/60 hover:bg-black/5 rounded-md">Settings</button>
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <h3 className="font-semibold mb-3">Breadcrumbs</h3>
            <div className="flex items-center gap-2 text-sm">
              <button className="text-black/60 hover:text-black">Home</button>
              <ChevronRight size={16} className="text-black/40" />
              <button className="text-black/60 hover:text-black">Design System</button>
              <ChevronRight size={16} className="text-black/40" />
              <span className="font-medium">Components</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function FeedbackContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Feedback - Status & Alerts</h1>
        <p className="text-lg text-black/70 mb-4">
          Consistent feedback patterns for success, error, warning, and info states.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Alert Types</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-300 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Success</h3>
              <p className="text-sm text-green-800">Your changes have been saved successfully.</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Error</h3>
              <p className="text-sm text-red-800">There was an error processing your request. Please try again.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Warning</h3>
              <p className="text-sm text-amber-800">This action cannot be undone. Please proceed with caution.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 flex items-start gap-3">
            <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Information</h3>
              <p className="text-sm text-blue-800">You can customize your preferences in the settings panel.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function IconsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Icons - Lucide React Icons</h1>
        <p className="text-lg text-black/70 mb-4">
          Using Lucide React for consistent, scalable icon system.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-normal">Icon Sizes</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-white text-center">
            <Search size={16} className="mx-auto mb-2 text-black/80" />
            <p className="text-xs font-mono">16px - Small</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 bg-white text-center">
            <Search size={20} className="mx-auto mb-2 text-black/80" />
            <p className="text-xs font-mono">20px - Base</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 bg-white text-center">
            <Search size={24} className="mx-auto mb-2 text-black/80" />
            <p className="text-xs font-mono">24px - Large</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 bg-white text-center">
            <Search size={32} className="mx-auto mb-2 text-black/80" />
            <p className="text-xs font-mono">32px - XL</p>
          </div>
        </div>

        <h2 className="text-2xl font-normal mt-8">Common Icons</h2>
        <div className="grid grid-cols-6 gap-4">
          {[Search, Mail, Lock, User, Phone, Calendar, Upload, CheckCircle, AlertCircle, Info, ChevronRight, X].map((Icon, idx) => (
            <div key={idx} className="border border-black/8 rounded-lg p-4 bg-white flex items-center justify-center hover:bg-black/2 transition-colors">
              <Icon size={24} className="text-black/80" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}