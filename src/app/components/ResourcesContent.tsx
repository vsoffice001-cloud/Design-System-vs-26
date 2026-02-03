import { Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

/**
 * RESOURCES CONTENT
 * Downloads, code snippets, and design tokens export
 */

export function DownloadsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Downloads - Design Assets & Resources</h1>
        <p className="text-lg text-black/70 mb-4">
          Download design assets, Figma files, and development resources.
        </p>
      </div>

      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DownloadCard
            title="Figma Design File"
            description="Complete design system with all components, tokens, and documentation"
            fileSize="12.4 MB"
            fileType=".fig"
            icon={<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">F</div>}
          />

          <DownloadCard
            title="Icon Library"
            description="Lucide React icons - 1,000+ icons in SVG format"
            fileSize="2.1 MB"
            fileType=".zip"
            icon={<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">✨</div>}
          />

          <DownloadCard
            title="Design Tokens (JSON)"
            description="Colors, typography, spacing tokens in JSON format"
            fileSize="48 KB"
            fileType=".json"
            icon={<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-mono text-sm">{'{}'}</div>}
          />

          <DownloadCard
            title="Design Tokens (CSS)"
            description="CSS variables for all design tokens"
            fileSize="32 KB"
            fileType=".css"
            icon={<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white font-mono text-lg">CSS</div>}
          />

          <DownloadCard
            title="Typography Specimen"
            description="Complete type scale reference PDF"
            fileSize="1.8 MB"
            fileType=".pdf"
            icon={<div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl">Aa</div>}
          />

          <DownloadCard
            title="Color Swatches"
            description="Complete color palette with hex/RGB values"
            fileSize="256 KB"
            fileType=".ase"
            icon={<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>}
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">📦 Download Guidelines</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>Figma file:</strong> Requires Figma account to open and edit</li>
            <li>• <strong>Design tokens:</strong> Import JSON into your build process or use CSS directly</li>
            <li>• <strong>Icons:</strong> Lucide React icons available via npm: <code className="bg-green-100 px-1 rounded">npm install lucide-react</code></li>
            <li>• <strong>License:</strong> All resources available under MIT license for commercial use</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function DownloadCard({ title, description, fileSize, fileType, icon }: {
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="border border-black/8 rounded-lg p-6 bg-white hover:shadow-md transition-shadow group">
      <div className="flex items-start gap-4 mb-4">
        {icon}
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-black/60">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-xs text-black/60">
          <span>{fileSize}</span>
          <span>{fileType}</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors text-sm group-hover:scale-105 transition-transform">
          <Download size={16} />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

export function CodeSnippetsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Code Snippets - Ready-to-Use Code</h1>
        <p className="text-lg text-black/70 mb-4">
          Copy-paste code snippets for common components and patterns.
        </p>
      </div>

      <section className="space-y-8">
        <CodeSnippetBox
          title="Button Component (React)"
          language="tsx"
          code={`import { Button } from '@/components/Button';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Primary Action
      </Button>
      
      <Button variant="secondary" size="md">
        Secondary Action
      </Button>
    </div>
  );
}`}
        />

        <CodeSnippetBox
          title="Card Component (React)"
          language="tsx"
          code={`function Card({ title, description, image }) {
  return (
    <div className="border border-black/8 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-black/60">{description}</p>
    </div>
  );
}`}
        />

        <CodeSnippetBox
          title="Design Tokens (CSS)"
          language="css"
          code={`:root {
  /* Colors */
  --accent-red: #b01f24;
  --text-primary: #000000;
  --text-secondary: rgba(0, 0, 0, 0.60);
  --bg-primary: #FFFFFF;
  --bg-warm: #f5f2f1;
  
  /* Typography */
  --text-xs: 0.8rem;    /* 12.8px */
  --text-sm: 1rem;      /* 16px */
  --text-base: 1.25rem; /* 20px */
  --text-xl: 1.953rem;  /* 31.25px */
  --text-2xl: 2.441rem; /* 39px */
  
  /* Spacing */
  --space-4: 1rem;    /* 16px */
  --space-6: 1.5rem;  /* 24px */
  --space-12: 3rem;   /* 48px */
  
  /* Border Radius */
  --radius-xs: 5px;
  --radius-sm: 10px;
  --radius-full: 9999px;
}`}
        />

        <CodeSnippetBox
          title="Responsive Grid (Tailwind)"
          language="tsx"
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>`}
        />

        <CodeSnippetBox
          title="Typography Scale Usage"
          language="tsx"
          code={`<div className="space-y-6">
  <h1 style={{ fontFamily: "'Noto Serif', serif", fontSize: '48.8px' }}>
    Hero Heading
  </h1>
  
  <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: '39px' }}>
    Section Heading
  </h2>
  
  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px' }}>
    Body text with clean, readable typography.
  </p>
</div>`}
        />
      </section>
    </div>
  );
}

function CodeSnippetBox({ title, language, code }: { title: string; language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-black/8 rounded-lg overflow-hidden bg-white">
      <div className="bg-black/5 px-6 py-3 border-b border-black/8 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-black/60 mt-0.5">{language}</p>
        </div>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 px-3 py-1.5 bg-white border border-black/10 rounded-md hover:bg-black/5 transition-colors text-sm"
        >
          {copied ? (
            <>
              <Check size={16} className="text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-6 bg-gray-50">
        <pre className="overflow-x-auto">
          <code className="text-xs font-mono text-black/80 leading-relaxed">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export function DesignTokensContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Design Tokens - Complete Token Export</h1>
        <p className="text-lg text-black/70 mb-4">
          Export all design tokens in JSON or CSS format for integration into your workflow.
        </p>
      </div>

      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TokenExportCard
            title="JSON Format"
            description="Structured JSON for build tools and design token transformers"
            format="json"
          />

          <TokenExportCard
            title="CSS Variables"
            description="Ready-to-use CSS custom properties for direct import"
            format="css"
          />

          <TokenExportCard
            title="TypeScript"
            description="Typed constants for TypeScript projects"
            format="ts"
          />

          <TokenExportCard
            title="SCSS Variables"
            description="SCSS/Sass variables for preprocessor workflows"
            format="scss"
          />
        </div>

        <div className="bg-white border border-black/8 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Token Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <TokenCategoryBadge category="Colors" count="100+" color="bg-red-100 text-red-900" />
            <TokenCategoryBadge category="Typography" count="40+" color="bg-blue-100 text-blue-900" />
            <TokenCategoryBadge category="Spacing" count="12" color="bg-green-100 text-green-900" />
            <TokenCategoryBadge category="Border Radius" count="9" color="bg-purple-100 text-purple-900" />
            <TokenCategoryBadge category="Elevation" count="6" color="bg-gray-100 text-gray-900" />
            <TokenCategoryBadge category="Layout" count="8" color="bg-amber-100 text-amber-900" />
            <TokenCategoryBadge category="Animation" count="4" color="bg-pink-100 text-pink-900" />
            <TokenCategoryBadge category="Breakpoints" count="5" color="bg-cyan-100 text-cyan-900" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">📥 Integration Guide</h3>
          <ul className="space-y-2 text-sm text-green-900">
            <li>• <strong>JSON:</strong> Import into Style Dictionary or design token transformers</li>
            <li>• <strong>CSS:</strong> Direct import into stylesheets with @import</li>
            <li>• <strong>TypeScript:</strong> Type-safe token usage in React/Vue components</li>
            <li>• <strong>SCSS:</strong> Use with Sass/SCSS preprocessors for variable interpolation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function TokenExportCard({ title, description, format }: { title: string; description: string; format: string }) {
  const handleExport = () => {
    // Mock export functionality
    console.log(`Exporting tokens in ${format} format`);
  };

  return (
    <div className="border border-black/8 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{title}</h3>
          <code className="text-xs bg-black/5 px-2 py-1 rounded">.{format}</code>
        </div>
        <p className="text-sm text-black/60">{description}</p>
      </div>
      <button
        onClick={handleExport}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors text-sm"
      >
        <Download size={16} />
        <span>Export {format.toUpperCase()}</span>
      </button>
    </div>
  );
}

function TokenCategoryBadge({ category, count, color }: { category: string; count: string; color: string }) {
  return (
    <div className={`${color} rounded-lg p-4 text-center`}>
      <p className="font-semibold text-lg">{count}</p>
      <p className="text-xs mt-1">{category}</p>
    </div>
  );
}