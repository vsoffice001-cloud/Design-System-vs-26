import { useState } from 'react';
import { DocSection } from '@/app/components/FoundationsContent';
import { Button } from '@/app/components/Button';
import { Label } from '@/app/components/Label';
import { 
  Copy, Check, ChevronRight, Search, Lock, Download, Settings, Bell, 
  Eye, Edit, Trash2, Send, CheckCircle, XCircle, AlertCircle, Info, 
  Home, Menu, X, Mail, User 
} from 'lucide-react';

// 🎯 UNIFIED BUTTON DOCUMENTATION (Single comprehensive page)
export { ButtonDocumentation } from '@/app/components/ButtonDocumentation';

// 🎯 LINKS & CTAs DOCUMENTATION (CTALink + InlineLink)
export { LinksDocumentation } from '@/app/components/LinksDocumentation';

// 🎯 BADGES & LABELS DOCUMENTATION (Badge + Label)
export { BadgeLabelsDocumentation } from '@/app/components/BadgeLabelsDocumentation';

/**
 * COMPONENTS CONTENT
 * ==================
 * All content for the Components tab including:
 * - Buttons (unified documentation)
 * - Form Inputs
 * - Cards
 * - Navigation
 * - Feedback
 * - Icons
 */

// ============================================
// HELPER COMPONENTS
// ============================================

function ComponentPreview({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden mb-6">
      <div className="bg-black/[0.02] px-6 py-4 border-b border-black/8">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        {description && <p className="text-xs text-black/60">{description}</p>}
      </div>
      <div className="p-8 bg-white">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-black/5 rounded-lg p-4 border border-black/8">
      <button
        onClick={copyCode}
        className="absolute top-3 right-3 p-2 rounded bg-white/80 hover:bg-white transition-colors"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="text-xs font-mono text-black/80 overflow-x-auto pr-12">
        {code}
      </pre>
    </div>
  );
}

function SpecTable({ 
  specs 
}: { 
  specs: { property: string; value: string; description: string }[] 
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-black/20">
            <th className="text-left p-3 text-sm font-bold">Property</th>
            <th className="text-left p-3 text-sm font-bold">Value</th>
            <th className="text-left p-3 text-sm font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, idx) => (
            <tr key={idx} className="border-b border-black/8">
              <td className="p-3 font-mono text-xs">{spec.property}</td>
              <td className="p-3 text-sm">{spec.value}</td>
              <td className="p-3 text-sm text-black/60">{spec.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// FORM INPUTS CONTENT
// ============================================

export function FormInputsContent() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [checkboxStates, setCheckboxStates] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  return (
    <div className="space-y-12">
      <DocSection
        title="Form Inputs"
        why="Forms are critical for user input - they must be clear, accessible, and provide helpful feedback"
        what="Complete form input system including the Label component, text inputs, textareas, selects, checkboxes, and radio buttons"
        when="Use for all user input scenarios - contact forms, settings, search, filters"
      >
        <p className="text-black/70">
          All form inputs follow consistent styling and include proper states for focus, error, disabled, and success.
          The <strong>Label component</strong> (Label.tsx) lives here as a form-focused semantic element.
        </p>
      </DocSection>

      {/* ========================================== */}
      {/* LABEL COMPONENT (Form-Only)                */}
      {/* ========================================== */}
      <section>
        <div className="mb-8 pb-4 border-b border-black/10">
          <h3 className="text-xl font-normal mb-2">Label Component</h3>
          <p className="text-sm text-black/60">
            Semantic &lt;label&gt; element for form inputs — provides accessibility, required indicators, and helper text
          </p>
        </div>

        {/* Label 4W+H */}
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-3">Label Quick Reference</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
            <div>
              <strong>WHAT:</strong> 3 variants (default, secondary, required) + helper text support
            </div>
            <div>
              <strong>WHY:</strong> Accessible form guidance with semantic HTML &lt;label&gt; element
            </div>
            <div>
              <strong>WHEN:</strong> Every form input should have an associated Label
            </div>
            <div>
              <strong>IMPORT:</strong> <code className="px-1 py-0.5 bg-green-100 rounded text-xs">import &#123; Label &#125; from '@/app/components/Label'</code>
            </div>
          </div>
          <div className="mt-3 p-3 bg-green-100 rounded text-xs text-green-800">
            <strong>NOT for section headers!</strong> For section labels above headings, use{' '}
            <code className="px-1 py-0.5 bg-green-200 rounded">SectionLabel</code> from Badge.tsx
            (documented on the Badges & Section Labels page).
          </div>
        </div>

        {/* Label Variants */}
        <ComponentPreview
          title="All Label Variants"
          description="3 form label types for different contexts"
        >
          <div className="space-y-6 max-w-md">
            <div>
              <Label htmlFor="demo-default">Default Label (Standard Form Input)</Label>
              <input
                id="demo-default"
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>

            <div>
              <Label htmlFor="demo-secondary" variant="secondary">Secondary Label (Less Emphasis)</Label>
              <input
                id="demo-secondary"
                type="text"
                placeholder="Optional field..."
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>

            <div>
              <Label htmlFor="demo-required" required>Required Label (With Asterisk)</Label>
              <input
                id="demo-required"
                type="text"
                placeholder="Required field..."
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>
          </div>
        </ComponentPreview>

        {/* Label Variant Reference Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black/20">
                <th className="text-left p-3 text-sm font-bold">Variant</th>
                <th className="text-left p-3 text-sm font-bold">Style</th>
                <th className="text-left p-3 text-sm font-bold">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/8">
                <td className="p-3 font-mono text-xs">default</td>
                <td className="p-3 text-sm">16px, medium weight, black</td>
                <td className="p-3 text-sm text-black/60">Standard form input labels (most common)</td>
              </tr>
              <tr className="border-b border-black/8">
                <td className="p-3 font-mono text-xs">secondary</td>
                <td className="p-3 text-sm">16px, normal weight, black/70</td>
                <td className="p-3 text-sm text-black/60">Less important labels, optional fields</td>
              </tr>
              <tr className="border-b border-black/8">
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3 text-sm">Same as default + red asterisk</td>
                <td className="p-3 text-sm text-black/60">Mandatory form fields (or use required prop)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Labels with Helper Text */}
        <ComponentPreview
          title="Helper Text Support"
          description="Optional descriptive text below the label for additional guidance"
        >
          <div className="space-y-6 max-w-md">
            <div>
              <Label
                htmlFor="email-demo"
                required
                helperText="We'll never share your email with anyone"
              >
                Email Address
              </Label>
              <input
                id="email-demo"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>

            <div>
              <Label
                htmlFor="username-demo"
                helperText="Choose a unique username (3-20 characters)"
              >
                Username
              </Label>
              <input
                id="username-demo"
                type="text"
                placeholder="username"
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>
          </div>
        </ComponentPreview>

        {/* Complete Form Example with Labels */}
        <ComponentPreview
          title="Complete Form with Label Component"
          description="Semantic, accessible form structure using Label"
        >
          <form className="max-w-md space-y-6">
            <div>
              <Label htmlFor="form-name" required>Full Name</Label>
              <input
                id="form-name"
                type="text"
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>

            <div>
              <Label
                htmlFor="form-email"
                required
                helperText="We'll send a confirmation to this email"
              >
                Email Address
              </Label>
              <input
                id="form-email"
                type="email"
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>

            <div>
              <Label
                htmlFor="form-bio"
                variant="secondary"
                helperText="Tell us a bit about yourself (optional)"
              >
                Bio
              </Label>
              <textarea
                id="form-bio"
                rows={3}
                className="w-full px-4 py-2 border border-black/10 rounded"
              />
            </div>
          </form>
        </ComponentPreview>

        {/* Label Code Example */}
        <CodeBlock code={`import { Label } from '@/app/components/Label';

// Default form label
<Label htmlFor="email">Email Address</Label>
<input id="email" type="email" />

// Required field (two ways)
<Label htmlFor="password" required>Password</Label>
<Label htmlFor="password" variant="required">Password</Label>

// With helper text
<Label 
  htmlFor="username" 
  helperText="Choose a unique username (3-20 characters)"
>
  Username
</Label>
<input id="username" type="text" />

// Secondary label (optional field)
<Label htmlFor="bio" variant="secondary">Bio (Optional)</Label>
<textarea id="bio" />

// MIGRATION NOTE: If you were using Label variant="section",
// that has moved to Badge.tsx:
// import { SectionLabel } from '@/app/components/Badge';
// <SectionLabel theme="brand">KEY INSIGHTS</SectionLabel>`} />
      </section>

      {/* Text Inputs */}
      <section>
        <h3 className="text-xl font-normal mb-6">Text Input</h3>
        
        <ComponentPreview title="Standard Text Input">
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-4 py-3 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/20 transition-all"
              />
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Input with Icon">
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/20 transition-all"
                />
              </div>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Input States">
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-2">Error State</label>
              <input
                type="text"
                placeholder="Invalid input"
                className="w-full px-4 py-3 border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <p className="text-xs text-red-600 mt-1">This field is required</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Success State</label>
              <input
                type="text"
                value="Valid input"
                readOnly
                className="w-full px-4 py-3 border-2 border-green-500 rounded-md focus:outline-none"
              />
              <p className="text-xs text-green-600 mt-1">Looks good!</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-black/40">Disabled State</label>
              <input
                type="text"
                placeholder="Disabled input"
                disabled
                className="w-full px-4 py-3 border border-black/10 rounded-md bg-black/5 text-black/40 cursor-not-allowed"
              />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Textarea */}
      <section>
        <h3 className="text-xl font-normal mb-6">Textarea</h3>
        
        <ComponentPreview title="Multi-line Text Input">
          <div className="max-w-md">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Enter your message..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/20 transition-all resize-y"
            />
            <p className="text-xs text-black/40 mt-1">{textareaValue.length} / 500 characters</p>
          </div>
        </ComponentPreview>
      </section>

      {/* Select */}
      <section>
        <h3 className="text-xl font-normal mb-6">Select Dropdown</h3>
        
        <ComponentPreview title="Dropdown Menu">
          <div className="max-w-md">
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full px-4 py-3 border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/20 transition-all bg-white appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
              }}
            >
              <option value="option1">United States</option>
              <option value="option2">United Kingdom</option>
              <option value="option3">Canada</option>
              <option value="option4">Australia</option>
              <option value="option5">Germany</option>
            </select>
          </div>
        </ComponentPreview>
      </section>

      {/* Checkboxes */}
      <section>
        <h3 className="text-xl font-normal mb-6">Checkboxes</h3>
        
        <ComponentPreview title="Checkbox Group">
          <div className="space-y-3">
            {Object.entries(checkboxStates).map(([key, checked]) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setCheckboxStates({ ...checkboxStates, [key]: e.target.checked })}
                  className="w-5 h-5 border-2 border-black/20 rounded checked:bg-black checked:border-black cursor-pointer"
                />
                <span className="text-sm group-hover:text-black/80 transition-colors">
                  Option {key.slice(-1)}
                </span>
              </label>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Radio Buttons */}
      <section>
        <h3 className="text-xl font-normal mb-6">Radio Buttons</h3>
        
        <ComponentPreview title="Radio Group">
          <div className="space-y-3">
            {['small', 'medium', 'large'].map((size) => (
              <label key={size} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  className="w-5 h-5 border-2 border-black/20 cursor-pointer"
                />
                <span className="text-sm group-hover:text-black/80 transition-colors capitalize">
                  {size}
                </span>
              </label>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-xl font-normal mb-6">Usage Example</h3>
        
        <CodeBlock code={`// Text input with icon
<div className="relative">
  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-3 border border-black/10 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-black/20"
  />
</div>

// Checkbox
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    className="w-5 h-5 border-2 border-black/20 rounded 
               checked:bg-black checked:border-black"
  />
  <span className="text-sm">Accept terms</span>
</label>`} />
      </section>
    </div>
  );
}

// ============================================
// CARDS CONTENT
// ============================================

export function CardsContent() {
  return (
    <div className="space-y-12">
      <DocSection
        title="Card Components"
        why="Cards group related information and provide clear visual boundaries for content sections"
        what="Flexible card system with various layouts and content patterns"
        when="Use for organizing content, displaying items in grids, feature showcases"
      >
        <p className="text-black/70">
          Cards are one of the most versatile components - they adapt to different content types while maintaining consistency.
        </p>
      </DocSection>

      {/* Basic Cards */}
      <section>
        <h3 className="text-xl font-normal mb-6">Basic Cards</h3>
        
        <ComponentPreview title="Simple Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-black/8 rounded-lg p-6 hover:border-black/15 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">Card Title {i}</h4>
                <p className="text-sm text-black/60">
                  This is a simple card with a title and description text.
                </p>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Feature Cards */}
      <section>
        <h3 className="text-xl font-normal mb-6">Feature Cards</h3>
        
        <ComponentPreview title="Cards with Icons">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Download size={24} />, title: 'Download', desc: 'Export your data anytime' },
              { icon: <Settings size={24} />, title: 'Customize', desc: 'Make it your own' },
              { icon: <Bell size={24} />, title: 'Notifications', desc: 'Stay informed' },
            ].map((item, i) => (
              <div key={i} className="border border-black/8 rounded-lg p-6 hover:border-black/15 transition-all">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Interactive Cards */}
      <section>
        <h3 className="text-xl font-normal mb-6">Interactive Cards</h3>
        
        <ComponentPreview title="Clickable Cards with Actions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="border border-black/8 rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-48 bg-black/5"></div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2 group-hover:text-[var(--brand-red)] transition-colors">
                    Project Title {i}
                  </h4>
                  <p className="text-sm text-black/60 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" iconOnly icon={<Eye size={16} />} ariaLabel="View" />
                    <Button variant="ghost" size="sm" iconOnly icon={<Edit size={16} />} ariaLabel="Edit" />
                    <Button variant="ghost" size="sm" iconOnly icon={<Trash2 size={16} />} ariaLabel="Delete" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-xl font-normal mb-6">Usage Example</h3>
        
        <CodeBlock code={`// Feature card with icon
<div className="border border-black/8 rounded-lg p-6 hover:border-black/15 transition-all">
  <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
    <Download size={24} />
  </div>
  <h4 className="font-semibold mb-2">Download</h4>
  <p className="text-sm text-black/60">
    Export your data anytime
  </p>
</div>`} />
      </section>
    </div>
  );
}

// ============================================
// NAVIGATION CONTENT
// ============================================

export function NavigationContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-12">
      <DocSection
        title="Navigation Components"
        why="Navigation helps users understand where they are and move efficiently through the interface"
        what="Navigation patterns including navbars, breadcrumbs, tabs, and pagination"
        when="Use for site navigation, content organization, and wayfinding"
      >
        <p className="text-black/70">
          Clear navigation is essential for usability - it should always be accessible and indicate current location.
        </p>
      </DocSection>

      {/* Navbar */}
      <section>
        <h3 className="text-xl font-normal mb-6">Navigation Bar</h3>
        
        <ComponentPreview title="Horizontal Navbar">
          <nav className="flex items-center justify-between p-4 border border-black/8 rounded-lg">
            <div className="flex items-center gap-8">
              <div className="font-semibold">Brand</div>
              <div className="flex gap-6">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <a key={item} href="#" className="text-sm hover:text-black/70 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <Button variant="primary" size="sm">Sign In</Button>
          </nav>
        </ComponentPreview>
      </section>

      {/* Breadcrumbs */}
      <section>
        <h3 className="text-xl font-normal mb-6">Breadcrumbs</h3>
        
        <ComponentPreview title="Breadcrumb Navigation">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-black/60 hover:text-black transition-colors">Home</a>
            <ChevronRight size={16} className="text-black/40" />
            <a href="#" className="text-black/60 hover:text-black transition-colors">Products</a>
            <ChevronRight size={16} className="text-black/40" />
            <span className="text-black font-medium">Category</span>
          </nav>
        </ComponentPreview>
      </section>

      {/* Tabs */}
      <section>
        <h3 className="text-xl font-normal mb-6">Tabs</h3>
        
        <ComponentPreview title="Tab Navigation">
          <div>
            <div className="flex gap-1 border-b border-black/10">
              {['Overview', 'Details', 'Reviews', 'FAQ'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === i 
                      ? 'text-black' 
                      : 'text-black/60 hover:text-black/80'
                  }`}
                >
                  {tab}
                  {activeTab === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="p-6 border border-black/8 border-t-0 rounded-b-lg">
              <p className="text-sm text-black/70">
                Content for {['Overview', 'Details', 'Reviews', 'FAQ'][activeTab]} tab
              </p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Pagination */}
      <section>
        <h3 className="text-xl font-normal mb-6">Pagination</h3>
        
        <ComponentPreview title="Page Navigation">
          <div className="flex items-center justify-center gap-2">
            <button className="px-3 py-2 border border-black/10 rounded hover:bg-black/5 transition-colors">
              Previous
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded transition-colors ${
                  page === 2
                    ? 'bg-black text-white'
                    : 'border border-black/10 hover:bg-black/5'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-2 border border-black/10 rounded hover:bg-black/5 transition-colors">
              Next
            </button>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
}

// ============================================
// FEEDBACK CONTENT
// ============================================

export function FeedbackContent() {
  return (
    <div className="space-y-12">
      <DocSection
        title="Feedback Components"
        why="Users need immediate feedback for their actions - success, error, warning, or informational messages"
        what="Alert boxes, badges, progress indicators, and toast notifications"
        when="Use to communicate system status, validation results, or important information"
      >
        <p className="text-black/70">
          Feedback components should be clear, timely, and actionable when possible.
        </p>
      </DocSection>

      {/* Alerts */}
      <section>
        <h3 className="text-xl font-normal mb-6">Alert Messages</h3>
        
        <ComponentPreview title="Alert Variants">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-green-900 mb-1">Success</h4>
                <p className="text-sm text-green-800">Your changes have been saved successfully.</p>
              </div>
              <button className="text-green-600 hover:text-green-800">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-blue-900 mb-1">Information</h4>
                <p className="text-sm text-blue-800">Please review the updated terms of service.</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-amber-900 mb-1">Warning</h4>
                <p className="text-sm text-amber-800">Your session will expire in 5 minutes.</p>
              </div>
              <button className="text-amber-600 hover:text-amber-800">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-red-900 mb-1">Error</h4>
                <p className="text-sm text-red-800">Unable to process your request. Please try again.</p>
              </div>
              <button className="text-red-600 hover:text-red-800">
                <X size={18} />
              </button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Badges */}
      <section>
        <h3 className="text-xl font-normal mb-6">Badges</h3>
        
        <ComponentPreview title="Status Badges">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">New</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">Pending</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Declined</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Archived</span>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Notification Badges">
          <div className="flex gap-6">
            <div className="relative">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <Mail size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">12</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Progress */}
      <section>
        <h3 className="text-xl font-normal mb-6">Progress Indicators</h3>
        
        <ComponentPreview title="Progress Bar">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Upload Progress</span>
                <span className="text-black/60">65%</span>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-black rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Processing</span>
                <span className="text-black/60">100%</span>
              </div>
              <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-xl font-normal mb-6">Usage Example</h3>
        
        <CodeBlock code={`// Success alert
<div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <h4 className="font-semibold text-sm text-green-900 mb-1">Success</h4>
    <p className="text-sm text-green-800">Your changes have been saved.</p>
  </div>
</div>

// Badge
<span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
  Active
</span>`} />
      </section>
    </div>
  );
}

// ============================================
// ICONS CONTENT
// ============================================

export function IconsContent() {
  const iconCategories = [
    {
      category: 'Actions',
      icons: [
        { Icon: Download, name: 'Download' },
        { Icon: Send, name: 'Send' },
        { Icon: Edit, name: 'Edit' },
        { Icon: Trash2, name: 'Trash2' },
        { Icon: Search, name: 'Search' },
        { Icon: Settings, name: 'Settings' },
      ]
    },
    {
      category: 'Status',
      icons: [
        { Icon: CheckCircle, name: 'CheckCircle' },
        { Icon: XCircle, name: 'XCircle' },
        { Icon: AlertCircle, name: 'AlertCircle' },
        { Icon: Info, name: 'Info' },
      ]
    },
    {
      category: 'Navigation',
      icons: [
        { Icon: ChevronRight, name: 'ChevronRight' },
        { Icon: Home, name: 'Home' },
        { Icon: Menu, name: 'Menu' },
        { Icon: X, name: 'X' },
      ]
    },
    {
      category: 'Communication',
      icons: [
        { Icon: Mail, name: 'Mail' },
        { Icon: Bell, name: 'Bell' },
        { Icon: User, name: 'User' },
      ]
    },
  ];

  return (
    <div className="space-y-12">
      <DocSection
        title="Icon System"
        why="Icons provide visual cues and improve scannability - they should be consistent in style and size"
        what="Using Lucide React for a comprehensive, consistent icon library"
        when="Use for actions, status indicators, navigation, and visual embellishment"
        where="Buttons, navigation, form inputs, alerts, cards"
      >
        <p className="text-black/70 mb-4">
          We use <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Lucide Icons</a> - 
          a beautiful, consistent open-source icon library with 1000+ icons.
        </p>
      </DocSection>

      {/* Icon Sizes */}
      <section>
        <h3 className="text-xl font-normal mb-6">Icon Sizes</h3>
        
        <ComponentPreview title="Size Variations">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Download size={16} className="mx-auto mb-2" />
              <p className="text-xs text-black/60">16px</p>
            </div>
            <div className="text-center">
              <Download size={20} className="mx-auto mb-2" />
              <p className="text-xs text-black/60">20px</p>
            </div>
            <div className="text-center">
              <Download size={24} className="mx-auto mb-2" />
              <p className="text-xs text-black/60">24px</p>
            </div>
            <div className="text-center">
              <Download size={32} className="mx-auto mb-2" />
              <p className="text-xs text-black/60">32px</p>
            </div>
            <div className="text-center">
              <Download size={48} className="mx-auto mb-2" />
              <p className="text-xs text-black/60">48px</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Icon Categories */}
      {iconCategories.map(({ category, icons }) => (
        <section key={category}>
          <h3 className="text-xl font-normal mb-6">{category} Icons</h3>
          
          <ComponentPreview title={`${category} icon set`}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {icons.map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-4 border border-black/8 rounded-lg hover:bg-black/5 transition-colors">
                  <Icon size={24} />
                  <p className="text-xs text-center font-mono text-black/60">{name}</p>
                </div>
              ))}
            </div>
          </ComponentPreview>
        </section>
      ))}

      {/* Usage */}
      <section>
        <h3 className="text-xl font-normal mb-6">Usage Example</h3>
        
        <CodeBlock code={`import { Download, Send, CheckCircle } from 'lucide-react';

// In a button
<Button variant="primary" icon={<Download size={20} />}>
  Download
</Button>

// Standalone
<Download size={24} className="text-black/60" />

// In an alert
<div className="flex items-center gap-2">
  <CheckCircle size={20} className="text-green-600" />
  <span>Success message</span>
</div>`} />
      </section>

      {/* Guidelines */}
      <section>
        <h3 className="text-xl font-normal mb-6">Icon Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-black/8 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600" />
              Do
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>• Use consistent sizes (16, 20, 24px)</li>
              <li>• Match icon color to surrounding text</li>
              <li>• Use descriptive aria-labels for icon-only buttons</li>
              <li>• Align icons with text baseline</li>
            </ul>
          </div>
          
          <div className="p-6 border border-black/8 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <XCircle size={18} className="text-red-600" />
              Don't
            </h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li>• Mix different icon libraries</li>
              <li>• Use icons without labels for complex actions</li>
              <li>• Make icons too small (&lt;16px)</li>
              <li>• Use decorative icons excessively</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}