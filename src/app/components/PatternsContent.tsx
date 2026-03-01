/**
 * PATTERNS CONTENT
 * Design patterns for layouts, content organization, and backgrounds
 */

export function PageLayoutsContent() {
  return (
    <div className="space-y-12">
      <div className="border border-black/10 rounded-lg p-8 bg-[#fafaf9]">
        <h1 className="text-3xl font-normal mb-3">Page Layouts — Canonical Section Pattern</h1>
        <p className="text-lg text-black/70 mb-4">
          Every case study page follows a 10-section sequence alternating Black → White → Warm backgrounds.
          This creates consistent visual rhythm and predictable structure across all pages.
        </p>
      </div>

      {/* 10-Section Sequence Visual */}
      <section>
        <h2 className="text-2xl font-normal mb-6">10-Section Canonical Sequence</h2>
        <div className="space-y-1">
          {[
            { num: 1, name: 'HeroSection', bg: '#000000', text: 'white', label: 'BLACK', note: 'Maximum contrast, editorial drama' },
            { num: 2, name: 'ClientContextSection', bg: '#ffffff', text: 'black', label: 'WHITE', note: 'Clean, readable' },
            { num: 3, name: 'ChallengesSection', bg: '#f5f2f1', text: 'black', label: 'WARM', note: 'Visual break, warmth' },
            { num: 4, name: 'EngagementObjectives', bg: '#ffffff', text: 'black', label: 'WHITE', note: 'Clean' },
            { num: 5, name: 'MethodologySection', bg: '#f5f2f1', text: 'black', label: 'WARM', note: 'Visual break' },
            { num: 6, name: 'ImpactSection', bg: '#ffffff', text: 'black', label: 'WHITE', note: 'Clean' },
            { num: 7, name: 'ValuePillarsSection', bg: '#ffffff', text: 'black', label: 'WHITE + border-t', note: 'Clean (border-t separator)' },
            { num: 8, name: 'TestimonialSection', bg: '#ffffff', text: 'black', label: 'WHITE + border-t', note: 'Clean (border-t separator)' },
            { num: 9, name: 'ResourcesSection', bg: '#0a0a0a', text: 'white', label: 'BLACK (gradient mesh)', note: 'Dark drama, card contrast' },
            { num: 10, name: 'FinalCTASection', bg: '#ffffff', text: 'black', label: 'WHITE + border-t', note: 'Clean (border-t separator)' },
          ].map((section) => (
            <div
              key={section.num}
              className="flex items-center rounded-lg overflow-hidden border border-black/8"
              style={{ background: section.bg }}
            >
              <div className="w-10 h-14 flex items-center justify-center flex-shrink-0 bg-black/10">
                <span className="font-mono text-xs" style={{ color: section.text === 'white' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)' }}>
                  {section.num}
                </span>
              </div>
              <div className="flex-1 px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold" style={{ color: section.text }}>
                    {section.name}
                  </span>
                  <span className="text-xs ml-3" style={{ color: section.text === 'white' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>
                    {section.note}
                  </span>
                </div>
                <code className="text-xs font-mono px-2 py-0.5 rounded" style={{
                  background: section.text === 'white' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  color: section.text === 'white' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
                }}>
                  {section.label}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Type Recipes */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Section Type Recipes</h2>
        <p className="text-sm text-black/60 mb-6">Component-level recipes for building each section type.</p>
        <div className="border border-black/8 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black/15 bg-black/[0.02]">
                  <th className="text-left p-3 text-xs font-bold">Type</th>
                  <th className="text-left p-3 text-xs font-bold">Key Components</th>
                  <th className="text-left p-3 text-xs font-bold">Background</th>
                  <th className="text-left p-3 text-xs font-bold">Container</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Hero', components: 'SectionHeading level={1}, dual CTAs (brand + ghost)', bg: 'Black', container: 'content (1000px)' },
                  { type: 'Content + Cards', components: 'SectionLabel, h2, Card in grid', bg: 'White or Warm', container: 'content (1000px)' },
                  { type: 'Methodology', components: 'StepPill badges, sequential steps, connecting lines', bg: 'Warm', container: 'content (1000px)' },
                  { type: 'Metrics', components: 'useCounter hook, big display numbers (Serif), stat cards', bg: 'White', container: 'content (1000px)' },
                  { type: 'Testimonial', components: 'Serif quote italic, attribution, border-t', bg: 'White (border-t)', container: 'narrow (900px)' },
                  { type: 'Resources', components: 'ResourceCard (7 variants), Masonry grid', bg: 'Black (gradient)', container: 'content (1000px)' },
                  { type: 'Final CTA', components: 'Brand button, urgency language, showArrow', bg: 'White (border-t)', container: 'narrow (900px)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-black/8 last:border-0">
                    <td className="p-3 text-sm font-semibold">{row.type}</td>
                    <td className="p-3 text-sm text-black/70">{row.components}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        row.bg.includes('Black') ? 'bg-black text-white' : 
                        row.bg.includes('Warm') ? 'bg-[#f5f2f1] text-black/70 border border-black/10' : 
                        'bg-white text-black/70 border border-black/10'
                      }`}>{row.bg}</span>
                    </td>
                    <td className="p-3"><code className="text-xs font-mono text-black/60">{row.container}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section Templates */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Section Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8">
              <span className="text-xs font-semibold">Black Section</span>
            </div>
            <pre className="p-4 text-xs font-mono text-black/70 overflow-x-auto">
{`<section className="bg-black
  text-white py-24">
  <Container width="content">
    {/* Hero, Resources */}
  </Container>
</section>`}
            </pre>
          </div>
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8">
              <span className="text-xs font-semibold">White Section</span>
            </div>
            <pre className="p-4 text-xs font-mono text-black/70 overflow-x-auto">
{`<section className="bg-white
  py-12 sm:py-16 md:py-20">
  <Container width="content">
    {/* Standard content */}
  </Container>
</section>`}
            </pre>
          </div>
          <div className="border border-black/8 rounded-lg overflow-hidden">
            <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8">
              <span className="text-xs font-semibold">Warm Section</span>
            </div>
            <pre className="p-4 text-xs font-mono text-black/70 overflow-x-auto">
{`<section style={{
  background: 'var(--warm-300)'
}} className="py-12 sm:py-16
  md:py-20">
  <Container width="content">
    {/* Challenges, Method */}
  </Container>
</section>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Page Shell Template */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Page Shell Template</h2>
        <p className="text-sm text-black/60 mb-4">Every page wraps sections with these utility components.</p>
        <div className="border border-black/8 rounded-lg overflow-hidden">
          <div className="bg-black/[0.02] px-4 py-2 border-b border-black/8">
            <span className="text-xs font-mono text-black/60">tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto bg-black/[0.02]">
            <code className="text-xs font-mono text-black/80">{`import { Navbar } from '@/app/components/Navbar';
import { ReadingProgressBar } from '@/app/components/ReadingProgressBar';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { StickyCTA } from '@/app/components/StickyCTA';
import { ContactModal } from '@/app/components/ContactModal';

export default function ReportPage() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <ReadingProgressBar />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ClientContextSection />
        <ChallengesSection />
        {/* ... remaining sections ... */}
        <FinalCTASection />
      </main>
      <ScrollToTop />
      <StickyCTA />
      <ContactModal isOpen={showContact}
        onClose={() => setShowContact(false)} />
    </>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Component Selection Table */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Component Selection Reference</h2>
        <div className="border border-black/8 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-black/15 bg-black/[0.02]">
                  <th className="text-left p-3 text-xs font-bold">Need</th>
                  <th className="text-left p-3 text-xs font-bold">Component</th>
                  <th className="text-left p-3 text-xs font-bold">Import</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { need: 'Section wrapper', component: 'SectionWrapper', path: '@/app/components/SectionWrapper' },
                  { need: 'Heading with eyebrow', component: 'SectionHeading', path: '@/app/components/SectionHeading' },
                  { need: 'Width constraint', component: 'Container', path: '@/app/components/Container' },
                  { need: 'Content card', component: 'Card', path: '@/app/components/Card' },
                  { need: 'Resource card', component: 'ResourceCard', path: '@/app/components/ResourceCard' },
                  { need: 'CTA button', component: 'Button', path: '@/app/components/Button' },
                  { need: 'Exploratory link', component: 'CTALink', path: '@/app/components/CTALink' },
                  { need: 'Inline link', component: 'InlineLink', path: '@/app/components/InlineLink' },
                  { need: 'Section label', component: 'SectionLabel', path: '@/app/components/Badge' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-black/8 last:border-0">
                    <td className="p-3 text-sm">{row.need}</td>
                    <td className="p-3 text-sm font-semibold font-mono">{row.component}</td>
                    <td className="p-3"><code className="text-xs font-mono bg-black/5 px-2 py-1 rounded">{row.path}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContentPatternsContent() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Content Patterns - Composition Patterns</h1>
        <p className="text-lg text-black/70 mb-4">
          Reusable content composition patterns for consistent information architecture.
        </p>
      </div>

      <section className="space-y-8">
        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Feature Block Pattern</h2>
          <div className="border border-black/8 rounded-lg p-6 bg-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Feature Title</h3>
                <p className="text-sm text-black/70">Description of the feature explaining its value proposition and key benefits to users.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-amber-50 border border-amber-200 rounded p-3">
            <strong>PATTERN:</strong> Icon + Title + Description (left-aligned, horizontal layout)
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Testimonial Pattern</h2>
          <div className="border border-black/8 rounded-lg p-6 bg-warm-50">
            <p className="text-lg italic mb-4" style={{fontFamily: 'var(--font-serif)'}}>
              "This design system transformed our workflow and enabled us to ship features 3x faster."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black/10 rounded-full"></div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-black/60">Product Designer, Acme Corp</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-blue-50 border border-blue-200 rounded p-3">
            <strong>PATTERN:</strong> Quote (Noto Serif italic) + Avatar + Name + Title
          </div>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Stats Block Pattern</h2>
          <div className="grid grid-cols-3 gap-6 border border-black/8 rounded-lg p-6 bg-white">
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">50+</p>
              <p className="text-sm text-black/60">Components</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">7</p>
              <p className="text-sm text-black/60">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-normal mb-2">100%</p>
              <p className="text-sm text-black/60">Accessible</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-black/60 bg-green-50 border border-green-200 rounded p-3">
            <strong>PATTERN:</strong> Large number + Small label (center-aligned, grid layout)
          </div>
        </div>
      </section>
    </div>
  );
}

export function BackgroundsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-lg p-8">
        <h1 className="text-3xl font-normal mb-3">Background System - Sophisticated Gradient Compositions</h1>
        <p className="text-lg text-black/70 mb-4">
          Premium editorial backgrounds inspired by Apple, Stripe, and Linear - subtle gradients that create depth without overwhelming content.
        </p>
      </div>

      {/* Philosophy & Principles */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">🎨 Design Philosophy</h2>
        <div className="space-y-4 text-black/80">
          <p><strong>PRINCIPLE:</strong> Never hinder readability - always subtle, heavily blurred, low opacity</p>
          <p><strong>INSPIRATION:</strong> Apple keynotes, Linear storytelling, Stripe editorial sections, premium case study aesthetics</p>
          <div className="bg-white rounded-lg p-4 mt-4">
            <p className="text-sm font-semibold mb-2">Core Rules:</p>
            <ul className="space-y-1 text-sm">
              <li>✅ Use 2-8% opacity maximum for background blobs</li>
              <li>✅ Apply 60-150px blur for soft, diffused effect</li>
              <li>✅ Position strategically (corners, edges, center)</li>
              <li>✅ Always test with black text on top - must remain readable</li>
              <li>✅ Layer multiple gradients for depth</li>
              <li>✅ Use radial-gradient for natural light effects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4W+H Framework */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">❓</span> WHAT
          </h3>
          <p className="text-sm text-black/70">
            32+ pre-composed gradient backgrounds using our brand color palette (Warm, Red, Coral, Purple, Periwinkle, Perano) 
            with radial gradients at 2-8% opacity, 60-150px blur radius.
          </p>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">❓</span> WHY
          </h3>
          <p className="text-sm text-black/70">
            Creates visual rhythm, section differentiation, and premium editorial feel without compromising readability. 
            Follows industry-leading design patterns from Apple, Stripe, and Linear.
          </p>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">❓</span> WHEN
          </h3>
          <p className="text-sm text-black/70">
            Use gradient backgrounds for: Hero sections, feature blocks, section separation, storytelling moments, 
            premium content areas. Alternate between compositions to create visual rhythm across long pages.
          </p>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">❌</span> WHEN NOT
          </h3>
          <p className="text-sm text-black/70">
            Avoid on: Text-heavy content blocks, data tables, forms requiring high contrast, 
            sections with complex visual elements, areas where maximum readability is critical.
          </p>
        </div>

        <div className="border border-black/8 rounded-lg p-6 bg-white md:col-span-2">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> HOW
          </h3>
          <p className="text-sm text-black/70 mb-3">
            Use CSS variables for complete compositions or combine individual blob components:
          </p>
          <div className="bg-black/5 rounded p-3 font-mono text-xs">
            <p>/* Apply complete composition: */</p>
            <p className="text-blue-600">background: var(--bg-composition-warm-editorial);</p>
            <p className="mt-2">/* Or layer individual blobs: */</p>
            <p className="text-blue-600">background: var(--bg-blob-coral-center), var(--bg-blob-warm-subtle-tl), #fffbf9;</p>
          </div>
        </div>
      </section>

      {/* Color Families */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Color Family Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/8 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-orange-50">
            <h3 className="font-semibold mb-3 text-amber-900">🔥 WARM PALETTE (Energy, Action)</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>• <strong>Red:</strong> Brand identity, urgency, action</li>
              <li>• <strong>Coral:</strong> Warmth, approachability, creativity</li>
              <li>• <strong>Warm:</strong> Editorial sophistication, premium</li>
            </ul>
            <div className="mt-4 text-xs bg-white/60 rounded p-2">
              <strong>USE FOR:</strong> CTAs, hero sections, energy moments
            </div>
          </div>

          <div className="border border-black/8 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="font-semibold mb-3 text-blue-900">❄️ COOL PALETTE (Trust, Calm)</h3>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>• <strong>Purple:</strong> Premium, innovation, insights</li>
              <li>• <strong>Periwinkle:</strong> Trust, reliability, stability</li>
              <li>• <strong>Perano:</strong> Calm, professional, clarity</li>
            </ul>
            <div className="mt-4 text-xs bg-white/60 rounded p-2">
              <strong>USE FOR:</strong> Data sections, methodology, trust-building
            </div>
          </div>
        </div>
      </section>

      {/* Light Background Compositions */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Light Background Compositions (White Base)</h2>
        <p className="text-sm text-black/60 mb-6">
          Subtle warm backgrounds for storytelling and editorial sections. Base color: #fffbf9 (warmest white)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BackgroundSwatch
            name="Dawn Rising"
            variable="--bg-composition-dawn-rising"
            description="Top-left sunrise - gentle beginning"
            gradient="radial-gradient(circle 900px at 8% 12%, rgba(255, 235, 228, 0.5) 0%, rgba(251, 184, 167, 0.04) 40%, transparent 70%), radial-gradient(circle 700px at 0% 0%, rgba(234, 122, 95, 0.04) 0%, transparent 60%), #fffbf9"
            usage="Section intros, narrative openings"
          />

          <BackgroundSwatch
            name="Center Focus"
            variable="--bg-composition-center-focus"
            description="Problems gathering at center with periwinkle contrast"
            gradient="radial-gradient(circle 1000px at 50% 50%, rgba(255, 235, 228, 0.55) 0%, rgba(251, 184, 167, 0.04) 50%, transparent 80%), radial-gradient(circle 800px at 50% 40%, rgba(195, 198, 249, 0.25) 0%, rgba(195, 198, 249, 0.08) 45%, transparent 75%), #fffbf9"
            usage="Challenges, problem statements"
          />

          <BackgroundSwatch
            name="Radiant Burst"
            variable="--bg-composition-radiant-burst"
            description="Success radiating from center"
            gradient="radial-gradient(circle 1100px at 50% 50%, rgba(255, 235, 228, 0.65) 0%, rgba(251, 184, 167, 0.06) 55%, transparent 85%), radial-gradient(circle 800px at 40% 40%, rgba(234, 122, 95, 0.05) 0%, transparent 75%), #fffbf9"
            usage="Impact sections, results, achievements"
          />

          <BackgroundSwatch
            name="Warm Editorial"
            variable="--bg-composition-warm-editorial"
            description="Default warm tint for subtle separation"
            gradient="radial-gradient(circle 600px at 100% 0%, rgba(249, 247, 246, 0.5) 0%, rgba(249, 247, 246, 0.2) 40%, transparent 70%), radial-gradient(circle 600px at 0% 100%, rgba(234, 229, 227, 0.5) 0%, rgba(234, 229, 227, 0.2) 40%, transparent 70%), #ffffff"
            usage="Standard content sections"
          />

          <BackgroundSwatch
            name="Foundation Build"
            variable="--bg-composition-foundation-build"
            description="Bottom-up structure with periwinkle corners"
            gradient="radial-gradient(circle 1000px at 50% 88%, rgba(255, 235, 228, 0.55) 0%, rgba(251, 184, 167, 0.04) 45%, transparent 75%), radial-gradient(circle 750px at 10% 10%, rgba(223, 234, 250, 0.35) 0%, rgba(195, 198, 249, 0.08) 40%, transparent 70%), #fffbf9"
            usage="Methodology, process sections"
          />

          <BackgroundSwatch
            name="Purple Innovation"
            variable="--bg-composition-purple-innovation"
            description="Premium features with purple accent"
            gradient="radial-gradient(circle 550px at 0% 0%, rgba(128, 108, 224, 0.05) 0%, rgba(128, 108, 224, 0.02) 40%, transparent 70%), radial-gradient(circle 750px at 50% 50%, rgba(128, 108, 224, 0.04) 0%, rgba(128, 108, 224, 0.02) 50%, transparent 80%), #fcfbfe"
            usage="Innovation, premium features"
          />
        </div>
      </section>

      {/* Dark Background Compositions */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Dark Background Compositions (Black Base)</h2>
        <p className="text-sm text-black/60 mb-6">
          Premium dark backgrounds with ember glow effects. Base color: #0a0a0a (slightly lighter than pure black)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BackgroundSwatch
            name="Ember Rise"
            variable="--bg-composition-ember-rise"
            description="Bottom-left coral warmth, subtle premium feel"
            gradient="radial-gradient(circle 1100px at 15% 85%, rgba(251, 184, 167, 0.05) 0%, rgba(234, 122, 95, 0.03) 35%, transparent 70%), radial-gradient(circle 900px at 0% 100%, rgba(255, 235, 228, 0.04) 0%, transparent 60%), #0a0a0a"
            usage="Dark hero sections, premium blocks"
            dark
          />

          <BackgroundSwatch
            name="Red Accent Glow"
            variable="--bg-composition-red-accent-glow"
            description="Subtle red energy for CTAs"
            gradient="radial-gradient(circle 1200px at 50% 100%, rgba(220, 38, 38, 0.05) 0%, rgba(220, 38, 38, 0.02) 45%, transparent 80%), radial-gradient(circle 800px at 30% 85%, rgba(251, 184, 167, 0.03) 0%, transparent 65%), #0a0a0a"
            usage="Dark CTA sections, urgent moments"
            dark
          />

          <BackgroundSwatch
            name="Center Burst Dark"
            variable="--bg-composition-center-burst-dark"
            description="Radiant from center, hero spotlight"
            gradient="radial-gradient(circle 1300px at 50% 60%, rgba(251, 184, 167, 0.06) 0%, rgba(234, 122, 95, 0.03) 50%, transparent 85%), radial-gradient(circle 1000px at 50% 55%, rgba(220, 38, 38, 0.02) 0%, transparent 75%), #0a0a0a"
            usage="Dark hero sections with focus"
            dark
          />

          <BackgroundSwatch
            name="Dark Purple Premium"
            variable="--bg-composition-dark-purple-premium"
            description="Purple glow for premium dark sections"
            gradient="radial-gradient(circle 800px at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 60%), #000000"
            usage="Premium features on dark"
            dark
          />

          <BackgroundSwatch
            name="Dual Warmth"
            variable="--bg-composition-dual-warmth"
            description="Coral left + Red right, balanced energy"
            gradient="radial-gradient(circle 1000px at 12% 80%, rgba(251, 184, 167, 0.05) 0%, rgba(234, 122, 95, 0.03) 40%, transparent 75%), radial-gradient(circle 950px at 88% 75%, rgba(220, 38, 38, 0.04) 0%, rgba(220, 38, 38, 0.02) 40%, transparent 70%), #0a0a0a"
            usage="Dark sections with energy balance"
            dark
          />

          <BackgroundSwatch
            name="Black Coral Whisper"
            variable="--bg-composition-black-coral-whisper"
            description="Minimal warmth, maximum sophistication"
            gradient="radial-gradient(circle 1400px at 50% 90%, rgba(255, 235, 228, 0.03) 0%, rgba(251, 184, 167, 0.02) 50%, transparent 85%), #000000"
            usage="Sophisticated dark sections, footer"
            dark
          />
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-green-50 border border-green-200 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">✅ Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-900 mb-3">DO:</h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li>✅ Test with actual content - ensure text remains readable</li>
              <li>✅ Use light backgrounds for text-heavy sections</li>
              <li>✅ Alternate compositions for visual rhythm</li>
              <li>✅ Combine warm + cool for contrast storytelling</li>
              <li>✅ Keep opacity 2-8% maximum</li>
              <li>✅ Use blur radius 60-150px for soft diffusion</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-900 mb-3">DON'T:</h3>
            <ul className="space-y-2 text-sm text-red-900">
              <li>❌ Exceed 8% opacity (overwhelms content)</li>
              <li>❌ Use on data tables or forms</li>
              <li>❌ Combine too many colors (3 max per composition)</li>
              <li>❌ Use saturated colors at full opacity</li>
              <li>❌ Skip readability testing</li>
              <li>❌ Use random colors outside brand palette</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="border border-black/8 rounded-lg p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Implementation Guide</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Method 1: Use Pre-composed Backgrounds</h3>
            <div className="bg-black/5 rounded p-4 font-mono text-sm">
              <p className="text-green-600">{'<section style={{ background: "var(--bg-composition-dawn-rising)" }}>'}</p>
              <p className="ml-4">  {'<div className="max-w-[1200px] mx-auto px-8 py-16">'}</p>
              <p className="ml-8">    Content here...</p>
              <p className="ml-4">  {'</div>'}</p>
              <p>{'</section>'}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Method 2: Layer Individual Blobs</h3>
            <div className="bg-black/5 rounded p-4 font-mono text-sm">
              <p className="text-blue-600">{'background:'}</p>
              <p className="ml-4">  var(--bg-blob-coral-center),</p>
              <p className="ml-4">  var(--bg-blob-warm-subtle-tl),</p>
              <p className="ml-4">  var(--bg-blob-periwinkle-center),</p>
              <p className="ml-4">  #fffbf9;</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Method 3: Inline Gradient (Custom)</h3>
            <div className="bg-black/5 rounded p-4 font-mono text-sm">
              <p className="text-purple-600">{'background:'}</p>
              <p className="ml-4">  {'radial-gradient(circle 800px at 50% 50%,'}</p>
              <p className="ml-4">    {'rgba(234, 122, 95, 0.05) 0%,'}</p>
              <p className="ml-4">    {'transparent 70%),'}</p>
              <p className="ml-4">  #ffffff;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component for Background Swatches
function BackgroundSwatch({ 
  name, 
  variable, 
  description, 
  gradient, 
  usage,
  dark = false 
}: { 
  name: string; 
  variable: string; 
  description: string; 
  gradient: string; 
  usage: string;
  dark?: boolean;
}) {
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-32 flex items-center justify-center relative"
        style={{ background: gradient }}
      >
        <span className={`text-xs font-mono ${dark ? 'text-white/60' : 'text-black/40'}`}>
          {name}
        </span>
        {/* Test Text Overlay */}
        <div className={`absolute top-2 left-2 text-xs ${dark ? 'text-white' : 'text-black'}`}>
          Aa
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm font-semibold mb-1">{name}</p>
        <p className="text-xs text-black/60 mb-2">{description}</p>
        <code className="text-xs bg-black/5 px-2 py-1 rounded block mb-2 font-mono break-all">
          {variable}
        </code>
        <div className="text-xs bg-blue-50 border border-blue-200 rounded px-2 py-1">
          <strong>USE:</strong> {usage}
        </div>
      </div>
    </div>
  );
}
