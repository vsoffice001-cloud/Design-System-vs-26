import { useState } from 'react';
import { 
  ChevronRight, 
  Search, 
  Download, 
  Book,
  Layers,
  Box,
  Grid,
  Sparkles,
  FileText,
  Package,
  Home,
  Palette,
  Type,
  Space,
  Layout,
  Lightbulb,
  Circle
} from 'lucide-react';
import { Button } from '@/app/components/Button';
import {
  ColorsContent,
  AllColorsPaletteContent,
  TypographyContent,
  AllTypographyTokensContent,
  SpacingContent,
  AllSpacingTokensContent,
  LayoutGridContent,
  AllLayoutGridTokensContent,
  ElevationContent,
  AllElevationTokensContent,
  BorderRadiusContent,
  AllBorderRadiusTokensContent
} from '@/app/components/FoundationsContent';
import {
  ButtonDocumentation,
  LinksDocumentation,
  BadgeLabelsDocumentation,
  FormInputsContent,
  CardsContent,
  NavigationContent,
  FeedbackContent,
  IconsContent
} from '@/app/components/ComponentsContent';
import {
  PageLayoutsContent,
  ContentPatternsContent,
  BackgroundsContent
} from '@/app/components/PatternsContent';
import {
  MotionPrinciplesContent,
  DurationScaleContent,
  TransitionsContent,
  MicroInteractionsContent
} from '@/app/components/MotionContent';
import {
  AccessibilityContent,
  ResponsiveDesignContent,
  BestPracticesContent
} from '@/app/components/GuidelinesContent';
import {
  DownloadsContent,
  CodeSnippetsContent,
  DesignTokensContent
} from '@/app/components/ResourcesContent';

/**
 * ELITE DESIGN SYSTEM DASHBOARD
 * ==============================
 * Professional Stripe-style design system showcase
 * 
 * Structure:
 * 1. Overview - Getting Started
 * 2. Foundations - Design Tokens
 * 3. Components - UI Library
 * 4. Patterns - Design Patterns
 * 5. Motion - Animations
 * 6. Guidelines - Best Practices
 * 7. Resources - Assets & Tools
 */

// Types
type TabId = 'overview' | 'foundations' | 'components' | 'patterns' | 'motion' | 'guidelines' | 'resources';
type SubTabId = string;

interface NavigationItem {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  subItems?: {
    id: SubTabId;
    label: string;
  }[];
}

export function DesignSystemDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>('welcome');
  const [expandedSections, setExpandedSections] = useState<TabId[]>(['overview', 'foundations']);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation structure
  const navigation: NavigationItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Home size={18} />,
      subItems: [
        { id: 'welcome', label: 'Welcome' },
        { id: 'principles', label: 'Design Principles' },
        { id: 'quickstart', label: 'Quick Start' },
        { id: 'whats-new', label: "What's New" },
      ]
    },
    {
      id: 'foundations',
      label: 'Foundations',
      icon: <Layers size={18} />,
      subItems: [
        { id: 'colors', label: 'Colors - Overview & Usage' },
        { id: 'all-colors-palette', label: 'All Colors Palette (50-900)' },
        { id: 'typography', label: 'Typography - Overview & Usage' },
        { id: 'all-typography-tokens', label: 'All Typography Tokens (Complete)' },
        { id: 'spacing', label: 'Spacing - Overview & Usage' },
        { id: 'all-spacing-tokens', label: 'All Spacing Tokens (Complete)' },
        { id: 'layout-grid', label: 'Layout & Grid - Overview & Usage' },
        { id: 'all-layout-grid-tokens', label: 'All Layout & Grid Tokens (Complete)' },
        { id: 'elevation', label: 'Elevation - Overview & Usage' },
        { id: 'all-elevation-tokens', label: 'All Elevation Tokens (Complete)' },
        { id: 'radius', label: 'Border Radius - Overview & Usage' },
        { id: 'all-radius-tokens', label: 'All Border Radius Tokens (Complete)' },
      ]
    },
    {
      id: 'components',
      label: 'Components',
      icon: <Box size={18} />,
      subItems: [
        { id: 'buttons', label: 'Buttons' },
        { id: 'links-ctas', label: 'Links & CTAs' },
        { id: 'badges-labels', label: 'Badges & Section Labels' },
        { id: 'forms', label: 'Form Inputs' },
        { id: 'cards', label: 'Cards' },
        { id: 'navigation', label: 'Navigation' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'icons', label: 'Icons' },
      ]
    },
    {
      id: 'patterns',
      label: 'Patterns',
      icon: <Grid size={18} />,
      subItems: [
        { id: 'page-layouts', label: 'Page Layouts' },
        { id: 'content-patterns', label: 'Content Patterns' },
        { id: 'backgrounds', label: 'Backgrounds' },
      ]
    },
    {
      id: 'motion',
      label: 'Motion',
      icon: <Sparkles size={18} />,
      subItems: [
        { id: 'motion-principles', label: 'Principles' },
        { id: 'duration-scale', label: 'Duration Scale' },
        { id: 'transitions', label: 'Transitions' },
        { id: 'micro-interactions', label: 'Micro-interactions' },
      ]
    },
    {
      id: 'guidelines',
      label: 'Guidelines',
      icon: <FileText size={18} />,
      subItems: [
        { id: 'accessibility', label: 'Accessibility' },
        { id: 'responsive', label: 'Responsive Design' },
        { id: 'best-practices', label: 'Best Practices' },
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <Package size={18} />,
      subItems: [
        { id: 'downloads', label: 'Downloads' },
        { id: 'code-snippets', label: 'Code Snippets' },
        { id: 'tokens-export', label: 'Design Tokens' },
      ]
    },
  ];

  const toggleSection = (tabId: TabId) => {
    setExpandedSections(prev => 
      prev.includes(tabId) 
        ? prev.filter(id => id !== tabId)
        : [...prev, tabId]
    );
  };

  const handleNavClick = (tabId: TabId, subTabId?: SubTabId) => {
    setActiveTab(tabId);
    if (subTabId) {
      setActiveSubTab(subTabId);
      // Auto-expand section when clicking
      if (!expandedSections.includes(tabId)) {
        setExpandedSections(prev => [...prev, tabId]);
      }
    } else {
      // If clicking main tab, select first sub-item
      const firstSubItem = navigation.find(item => item.id === tabId)?.subItems?.[0];
      if (firstSubItem) {
        setActiveSubTab(firstSubItem.id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-black/8 bg-white sticky top-0 h-screen overflow-y-auto flex-shrink-0">
        {/* Logo / Header */}
        <div className="px-6 py-6 border-b border-black/8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <Palette size={18} className="text-white" />
            </div>
            <h1 className="font-normal text-lg">Design System</h1>
          </div>
          <p className="text-xs text-black/40 mt-1">YASH Case Study</p>
        </div>

        {/* Search */}
        <div className="px-4 py-4 border-b border-black/8">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-black/10 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          {navigation.map((item) => (
            <div key={item.id} className="mb-1">
              {/* Main nav item */}
              <button
                onClick={() => {
                  toggleSection(item.id);
                  handleNavClick(item.id);
                }}
                className={`
                  w-full px-4 py-2 flex items-center justify-between text-sm
                  transition-colors hover:bg-black/5
                  ${activeTab === item.id && !item.subItems ? 'bg-black/5 font-medium' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-black/60">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.subItems && (
                  <ChevronRight 
                    size={16} 
                    className={`text-black/40 transition-transform ${
                      expandedSections.includes(item.id) ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>

              {/* Sub-items */}
              {item.subItems && expandedSections.includes(item.id) && (
                <div className="pl-11 pr-4 py-1 space-y-0.5">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleNavClick(item.id, subItem.id)}
                      className={`
                        w-full px-3 py-1.5 text-sm text-left rounded-md
                        transition-colors hover:bg-black/5
                        ${activeTab === item.id && activeSubTab === subItem.id 
                          ? 'bg-black/8 font-medium text-black' 
                          : 'text-black/60'
                        }
                      `}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-black/8 mt-8">
          <p className="text-xs text-black/40">Version 3.2.0</p>
          <p className="text-xs text-black/40 mt-1">Last updated: Feb 2026</p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-black/8">
          <div className="max-w-[var(--container-page)] mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-normal">
                  {navigation.find(n => n.id === activeTab)?.label}
                </h1>
                <p className="text-sm text-black/60 mt-0.5">
                  {navigation.find(n => n.id === activeTab)?.subItems?.find(s => s.id === activeSubTab)?.label}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm" icon={<Download size={16} />}>
                  Export
                </Button>
                <Button variant="primary" size="sm">
                  View in Figma
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-[var(--container-page)] mx-auto px-8 py-8">
          {renderContent(activeTab, activeSubTab, handleNavClick)}
        </div>
      </main>
    </div>
  );
}

// Content rendering function
function renderContent(tab: TabId, subTab: SubTabId, handleNavClick: (tabId: TabId, subTabId?: SubTabId) => void) {
  // TAB 1: OVERVIEW
  if (tab === 'overview') {
    if (subTab === 'welcome') {
      return <WelcomeContent onNavigate={handleNavClick} />;
    }
    if (subTab === 'principles') {
      return <PrinciplesContent />;
    }
    if (subTab === 'quickstart') {
      return <QuickStartContent onNavigate={handleNavClick} />;
    }
    if (subTab === 'whats-new') {
      return <WhatsNewContent />;
    }
  }

  // TAB 2: FOUNDATIONS
  if (tab === 'foundations') {
    if (subTab === 'colors') {
      return <ColorsContent />;
    }
    if (subTab === 'all-colors-palette') {
      return <AllColorsPaletteContent />;
    }
    if (subTab === 'typography') {
      return <TypographyContent />;
    }
    if (subTab === 'all-typography-tokens') {
      return <AllTypographyTokensContent />;
    }
    if (subTab === 'spacing') {
      return <SpacingContent />;
    }
    if (subTab === 'all-spacing-tokens') {
      return <AllSpacingTokensContent />;
    }
    if (subTab === 'layout-grid') {
      return <LayoutGridContent />;
    }
    if (subTab === 'all-layout-grid-tokens') {
      return <AllLayoutGridTokensContent />;
    }
    if (subTab === 'elevation') {
      return <ElevationContent />;
    }
    if (subTab === 'all-elevation-tokens') {
      return <AllElevationTokensContent />;
    }
    if (subTab === 'radius') {
      return <BorderRadiusContent />;
    }
    if (subTab === 'all-radius-tokens') {
      return <AllBorderRadiusTokensContent />;
    }
  }

  // TAB 3: COMPONENTS
  if (tab === 'components') {
    if (subTab === 'buttons') {
      return <ButtonDocumentation />;
    }
    if (subTab === 'links-ctas') {
      return <LinksDocumentation />;
    }
    if (subTab === 'badges-labels') {
      return <BadgeLabelsDocumentation />;
    }
    if (subTab === 'forms') {
      return <FormInputsContent />;
    }
    if (subTab === 'cards') {
      return <CardsContent />;
    }
    if (subTab === 'navigation') {
      return <NavigationContent />;
    }
    if (subTab === 'feedback') {
      return <FeedbackContent />;
    }
    if (subTab === 'icons') {
      return <IconsContent />;
    }
  }

  // TAB 4: PATTERNS
  if (tab === 'patterns') {
    if (subTab === 'page-layouts') {
      return <PageLayoutsContent />;
    }
    if (subTab === 'content-patterns') {
      return <ContentPatternsContent />;
    }
    if (subTab === 'backgrounds') {
      return <BackgroundsContent />;
    }
  }

  // TAB 5: MOTION
  if (tab === 'motion') {
    if (subTab === 'motion-principles') {
      return <MotionPrinciplesContent />;
    }
    if (subTab === 'duration-scale') {
      return <DurationScaleContent />;
    }
    if (subTab === 'transitions') {
      return <TransitionsContent />;
    }
    if (subTab === 'micro-interactions') {
      return <MicroInteractionsContent />;
    }
  }

  // TAB 6: GUIDELINES
  if (tab === 'guidelines') {
    if (subTab === 'accessibility') {
      return <AccessibilityContent />;
    }
    if (subTab === 'responsive') {
      return <ResponsiveDesignContent />;
    }
    if (subTab === 'best-practices') {
      return <BestPracticesContent />;
    }
  }

  // TAB 7: RESOURCES
  if (tab === 'resources') {
    if (subTab === 'downloads') {
      return <DownloadsContent />;
    }
    if (subTab === 'code-snippets') {
      return <CodeSnippetsContent />;
    }
    if (subTab === 'tokens-export') {
      return <DesignTokensContent />;
    }
  }

  // Placeholder for other tabs
  return (
    <div className="py-12 text-center">
      <Lightbulb size={48} className="mx-auto text-black/20 mb-4" />
      <h2 className="text-xl font-normal mb-2">Content Coming Soon</h2>
      <p className="text-black/60">
        This section is being built. Check back soon!
      </p>
    </div>
  );
}

// ============================================
// TAB 1: OVERVIEW - CONTENT COMPONENTS
// ============================================

function WelcomeContent({ onNavigate }: { onNavigate: (tabId: TabId, subTabId?: SubTabId) => void }) {
  return (
    <div className="space-y-12">
      {/* WHY/WHAT/WHEN Framework */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-normal mb-6">The 4W+H Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-blue-600 text-blue-600" />
              WHY
            </h3>
            <p className="text-sm text-black/70">
              To establish a consistent, accessible, and scalable design language that accelerates development 
              while maintaining brand identity across all touchpoints.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-blue-600 text-blue-600" />
              WHAT
            </h3>
            <p className="text-sm text-black/70">
              A comprehensive design system featuring 50+ components, design tokens, motion principles, 
              accessibility guidelines, and code snippets—all documented with the 4W+H framework.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-green-600 text-green-600" />
              WHEN
            </h3>
            <p className="text-sm text-black/70">
              Use this system for all digital products requiring consistent brand expression, from marketing 
              sites to complex web applications. Start projects with foundations, build with components.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-red-600 text-red-600" />
              WHEN NOT
            </h3>
            <p className="text-sm text-black/70">
              Don't use for rapid prototyping that requires visual exploration outside brand guidelines, 
              or for projects requiring drastically different aesthetics (e.g., playful, colorful designs).
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-purple-600 text-purple-600" />
              HOW
            </h3>
            <p className="text-sm text-black/70">
              Start with design tokens (colors, typography, spacing), compose components following atomic design, 
              apply motion principles, and validate against accessibility guidelines. Export tokens, import components, 
              reference documentation—all designed for seamless integration.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section>
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--brand-red)] text-white text-xs font-medium rounded-full">
              v3.2.0
            </span>
            <span className="text-xs text-black/40">February 2026</span>
          </div>
          <h1 className="text-5xl font-normal mb-6">
            Welcome to the<br />Design System
          </h1>
          <p className="text-xl text-black/70 leading-relaxed mb-8">
            A comprehensive, production-ready design system built with minimalist editorial aesthetics, 
            featuring a pure black/white/warm palette with Ken Bold Red (#b01f24) accents. Every component 
            documented with WHY, WHAT, WHEN, WHEN NOT, and HOW.
          </p>
          <div className="flex gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              icon={<Book size={20} />}
              onClick={() => onNavigate('overview', 'quickstart')}
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('components', 'buttons')}
            >
              View Components
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-4 gap-6 py-8 border-y border-black/8">
        <StatCard number="50+" label="Components" />
        <StatCard number="7" label="Categories" />
        <StatCard number="7,000+" label="Lines of Code" />
        <StatCard number="WCAG AA" label="Accessible" />
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Key Features</h2>
        <div className="grid grid-cols-2 gap-6">
          <FeatureCard
            icon={<Palette size={24} />}
            title="Minimalist Aesthetic"
            description="Pure black/white palette with Ken Bold Red (#b01f24) for strategic CTAs"
          />
          <FeatureCard
            icon={<Type size={24} />}
            title="Major Third Scale"
            description="Typography system built on 1.25 ratio for perfect vertical rhythm"
          />
          <FeatureCard
            icon={<Layers size={24} />}
            title="Atomic Design"
            description="Organized using atomic design methodology for maximum scalability"
          />
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="4W+H Framework"
            description="Every component documented with WHY, WHAT, WHEN, WHEN NOT, and HOW"
          />
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Quick Links</h2>
        <div className="grid grid-cols-3 gap-4">
          <QuickLinkCardButton title="Colors" description="Palette & semantic colors" onClick={() => onNavigate('foundations', 'colors')} />
          <QuickLinkCardButton title="Typography" description="Type scale & hierarchy" onClick={() => onNavigate('foundations', 'typography')} />
          <QuickLinkCardButton title="Components" description="UI component library" onClick={() => onNavigate('components', 'buttons')} />
          <QuickLinkCardButton title="Spacing" description="10-step spacing scale" onClick={() => onNavigate('foundations', 'spacing')} />
          <QuickLinkCardButton title="Motion" description="Animation guidelines" onClick={() => onNavigate('motion', 'motion-principles')} />
          <QuickLinkCardButton title="Patterns" description="Common design patterns" onClick={() => onNavigate('patterns', 'page-layouts')} />
        </div>
      </section>
    </div>
  );
}

function PrinciplesContent() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-normal mb-4">Design Principles</h1>
        <p className="text-lg text-black/70">
          Core principles that guide every design decision in this system. These principles ensure consistency, 
          accessibility, and a premium editorial aesthetic across all touchpoints.
        </p>
      </div>

      <div className="space-y-8">
        <PrincipleCard
          number="01"
          title="Minimalist Editorial"
          description="Clean, sophisticated, and content-focused design that prioritizes readability and user comprehension with ample breathing room."
          principles={[
            'Black/white foundation with strategic Ken Bold Red (#b01f24) accent (5% usage - CTAs only)',
            'Generous white space and warm off-white (#f5f2f1) sections for visual hierarchy',
            'Typography-first approach with Noto Serif for headlines, DM Sans for body',
            'Content-focused layouts that let the work speak for itself'
          ]}
        />
        
        <PrincipleCard
          number="02"
          title="Hierarchy Through Scale"
          description="Major Third typography scale (1.25 ratio) creates clear, mathematical visual hierarchy from 12.8px to 76px, ensuring perfect readability at every level."
          principles={[
            'Base size: 16px with systematic scaling (xs \u2192 sm \u2192 base \u2192 lg \u2192 xl \u2192 2xl \u2192 3xl \u2192 4xl \u2192 5xl)',
            'Typography scale ensures proportional relationships between all text sizes',
            'Massive hero headings (48-76px) for editorial impact',
            'Responsive type sizing with clamp() for fluid scaling across devices'
          ]}
        />
        
        <PrincipleCard
          number="03"
          title="Sophisticated Interactions"
          description="Purposeful motion serves clear functions\u2014guiding attention, providing feedback, and enhancing spatial understanding without distraction."
          principles={[
            'Four-tier duration system: Instant (100ms), Fast (200ms), Base (300ms), Slow (500ms)',
            'Ease-out (cubic-bezier(0.22, 1, 0.36, 1)) for natural deceleration',
            'Subtle micro-interactions for delight: hover states, gradient shifts, scale transforms',
            'Respects prefers-reduced-motion for accessibility'
          ]}
        />
        
        <PrincipleCard
          number="04"
          title="Atomic Design Methodology"
          description="Systematic component organization from atoms to organisms ensures scalability, reusability, and predictable patterns that reduce cognitive load."
          principles={[
            'Atoms: Buttons, inputs, icons, color swatches',
            'Molecules: Form groups, card headers, navigation items',
            'Organisms: Navigation bars, cards, sections with multiple components',
            'Design tokens for all visual properties (colors, spacing, typography, shadows, border radius)'
          ]}
        />
        
        <PrincipleCard
          number="05"
          title="Accessible by Default"
          description="Every component meets WCAG 2.1 AA standards minimum, ensuring inclusive experiences for all users regardless of abilities or assistive technology."
          principles={[
            'Minimum 4.5:1 contrast ratios for normal text, 3:1 for large text',
            'Semantic HTML with proper heading hierarchy (h1 \u2192 h2 \u2192 h3)',
            'Full keyboard navigation support with visible focus states',
            'Screen reader optimization with ARIA labels and roles',
            'Touch targets minimum 40px \u00d7 40px for mobile accessibility'
          ]}
        />
        
        <PrincipleCard
          number="06"
          title="Systematic Consistency"
          description="Predictable patterns and reusable components create familiarity across the system, making it intuitive for both designers and developers."
          principles={[
            'All design tokens defined as CSS variables and TypeScript constants',
            'Spacing scale based on 4px grid (0.25rem base unit)',
            'Border radius system: small (6px), medium (10px), large (16px), xl (20px)',
            'Comprehensive documentation with WHY/WHAT/WHEN/WHEN NOT/HOW for every component'
          ]}
        />
        
        <PrincipleCard
          number="07"
          title="Scalability & Flexibility"
          description="Components handle varying content volumes (2-10+ items) and adapt responsively across all device sizes from mobile (375px) to ultra-wide (1920px+)."
          principles={[
            'Mobile-first responsive design with breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)',
            'Grid systems that adapt: 1 column mobile \u2192 2-3 columns tablet \u2192 3-4 columns desktop',
            'Flexible components with content constraints (max-width: 1000px for optimal readability)',
            'Components gracefully handle empty states, loading states, and error states'
          ]}
        />
      </div>
    </div>
  );
}

function QuickStartContent({ onNavigate }: { onNavigate: (tabId: TabId, subTabId?: SubTabId) => void }) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-normal mb-4">Quick Start Guide</h1>
        <p className="text-lg text-black/70">
          Get up and running with the design system in minutes.
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="space-y-6">
        <StepCardButton
          step="1"
          title="Understand the Foundations"
          description="Start by familiarizing yourself with our core design tokens: colors, typography, and spacing."
          action="View Foundations"
          onClick={() => onNavigate('foundations', 'colors')}
        />
        
        <StepCardButton
          step="2"
          title="Explore Components"
          description="Browse our comprehensive component library with live examples and code snippets."
          action="Browse Components"
          onClick={() => onNavigate('components', 'buttons')}
        />
        
        <StepCardButton
          step="3"
          title="Review Patterns"
          description="Learn common design patterns for layouts, navigation, and content organization."
          action="See Patterns"
          onClick={() => onNavigate('patterns', 'page-layouts')}
        />
        
        <StepCardButton
          step="4"
          title="Download Resources"
          description="Export design tokens, download Figma files, and access code snippets."
          action="Get Resources"
          onClick={() => onNavigate('resources', 'downloads')}
        />
      </div>

      {/* Code Example */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Import Design Tokens</h2>
        <CodeBlock
          language="css"
          code={`/* Import design tokens */\n@import '@/styles/theme.css';\n\n/* Use CSS variables */\n.my-component {\n  color: var(--text-primary);\n  font-size: var(--text-base);\n  padding: var(--space-md);\n  background: var(--bg-primary);\n}`}
        />
      </section>
    </div>
  );
}

function WhatsNewContent() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-normal mb-4">What's New</h1>
        <p className="text-lg text-black/70">
          Latest updates and improvements to the design system.
        </p>
      </div>

      <div className="space-y-8">
        <ChangelogSection
          version="3.2.0"
          date="February 2026"
          type="minor"
          changes={[
            {
              category: 'New',
              items: [
                'Badge convenience wrappers documentation added to all 3 AI context files',
                'Full 10-wrapper inventory table (SectionLabel, StepPill, ObjectivePill, ObjectivePillInteractive, InfoCardLabel, CategoryBadge, StatusBadge, InfoBadge, MutedBadge, ClickableBadge)',
                'Fixed 6 broken barrel exports in index.ts \u2014 now correctly exports all named content components',
                'Removed dead ButtonAnimationTest import from Dashboard',
                'Version numbers updated across all surfaces (sidebar, hero badge, changelog)',
              ]
            },
            {
              category: 'Documentation',
              items: [
                'DESIGN_SYSTEM_AI_CONTEXT.md updated with full wrapper API reference',
                'AI_DESIGN_SYSTEM_PROMPT.md file structure section expanded with 10 wrapper descriptions',
                'AI_CONTEXT_DESIGN_SYSTEM.md Badge section expanded with convenience wrapper table',
              ]
            }
          ]}
        />

        <ChangelogSection
          version="3.1.0"
          date="February 2026"
          type="minor"
          changes={[
            {
              category: 'Completed',
              items: [
                'Massive local-to-GitHub sync gap fully resolved \u2014 all missing files pushed',
                'GITHUB_REPO_MANIFEST.md created at repo root with comprehensive file inventory',
                '5-batch token formalization migration complete (49 code edits across 17 files, zero regressions)',
                'Stale documentation sweep finished \u2014 all docs verified accurate',
              ]
            },
            {
              category: 'Infrastructure',
              items: [
                'GitHub API push workflow validated for non-terminal Figma Make environment',
                'Migration exceptions documented (AllTypographyTokensContent hardcoded values, ChallengesSection JS card-width calc, ContactModal modal width, PatternsContent demo code string)',
              ]
            }
          ]}
        />

        <ChangelogSection
          version="3.0.0"
          date="February 2026"
          type="major"
          changes={[
            {
              category: 'New',
              items: [
                'Badge.tsx unified component \u2014 132 combinations (3 variants \u00d7 4 sizes \u00d7 11 themes)',
                '10 pre-configured convenience wrappers for common badge patterns',
                'Form-only Label.tsx separated from Badge system (3 variants: default, secondary, required)',
                'Layout Container system with 5 semantic width tokens (page/content/narrow/prose/compact)',
                'Mobile-First Responsive Padding system with 3 breakpoint tokens',
              ]
            },
            {
              category: 'Enhanced',
              items: [
                'Color palette expanded: coral (50-900), purple (50-900), periwinkle (50-900), perano (50-900)',
                'Muted theme added to Badge \u2014 deliberately subdued, distinct from neutral',
                'Secondary button style: white base, warm-500 border, coral-50 shimmer sweep',
                'Font Pairing System formalized: DM Sans (UI) / Noto Serif (editorial) / system mono',
              ]
            },
            {
              category: 'Documentation',
              items: [
                'Three AI context markdown files created at v3.0 (DESIGN_SYSTEM_AI_CONTEXT.md, AI_DESIGN_SYSTEM_PROMPT.md, AI_CONTEXT_DESIGN_SYSTEM.md)',
                'BadgeLabelsDocumentation.tsx comprehensive showcase page',
                'BadgeShowcase.tsx with all 132 combinations rendered',
              ]
            }
          ]}
        />

        <ChangelogSection
          version="2.0.0"
          date="January 2026"
          type="major"
          changes={[
            {
              category: 'New',
              items: [
                'Added comprehensive Motion & Animation system with 4-layer duration scale',
                'New Layout Patterns section with grid systems and z-index strategy',
                'Stripe-style dashboard with side navigation',
                'Interactive component playground'
              ]
            },
            {
              category: 'Enhanced',
              items: [
                'Expanded typography section with responsive sizing examples',
                'Added 6 new spacing helper components',
                'Improved color accessibility documentation',
                'Enhanced button component with more variants'
              ]
            }
          ]}
        />
        
        <ChangelogSection
          version="1.0.0"
          date="December 2025"
          type="initial"
          changes={[
            {
              category: 'Initial Release',
              items: [
                'Complete design system with 7 categories',
                'Atomic design methodology implementation',
                '50+ documented components',
                'Comprehensive WHY/WHAT/WHERE/WHEN/HOW framework'
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-normal mb-1">{number}</div>
      <div className="text-sm text-black/60">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="p-6 border border-black/8 rounded-lg hover:border-black/20 transition-colors">
      <div className="text-black/80 mb-3">{icon}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-black/60">{description}</p>
    </div>
  );
}

function QuickLinkCardButton({ title, description, onClick }: { 
  title: string; 
  description: string; 
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="p-4 border border-black/8 rounded-lg hover:border-black/20 hover:bg-black/2 transition-all group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium mb-1 group-hover:text-[var(--brand-red)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-black/60">{description}</p>
        </div>
        <ChevronRight size={18} className="text-black/40 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}

function PrincipleCard({ 
  number, 
  title, 
  description, 
  principles 
}: { 
  number: string; 
  title: string; 
  description: string;
  principles: string[];
}) {
  return (
    <div className="border-l-2 border-black pl-8">
      <div className="text-sm text-black/40 font-mono mb-2">{number}</div>
      <h3 className="text-2xl font-normal mb-3">{title}</h3>
      <p className="text-black/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {principles.map((principle, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Circle size={6} className="mt-2 fill-black" />
            <span className="text-sm text-black/80">{principle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCardButton({ 
  step, 
  title, 
  description, 
  action,
  onClick
}: { 
  step: string; 
  title: string; 
  description: string;
  action: string;
  onClick: () => void;
}) {
  return (
    <div className="flex gap-6 p-6 border border-black/8 rounded-lg hover:border-black/15 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-mono text-lg">
        {step}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-normal mb-2">{title}</h3>
        <p className="text-black/70 mb-4">{description}</p>
        <button
          className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors inline-flex items-center gap-2"
          onClick={onClick}
        >
          {action}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="border border-black/8 rounded-lg overflow-hidden">
      <div className="bg-black/5 px-4 py-2 border-b border-black/8 flex items-center justify-between">
        <span className="text-xs font-mono text-black/60">{language}</span>
        <button className="text-xs font-medium hover:text-[var(--brand-red)] transition-colors">
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-black/2">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}

function ChangelogSection({ 
  version, 
  date, 
  type, 
  changes 
}: { 
  version: string; 
  date: string;
  type: 'major' | 'minor' | 'initial';
  changes: { category: string; items: string[] }[];
}) {
  const typeColors = {
    major: 'bg-[var(--brand-red)] text-white',
    minor: 'bg-black/10 text-black',
    initial: 'bg-black text-white'
  };

  return (
    <div className="border border-black/8 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-normal">Version {version}</h3>
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColors[type]}`}>
              {type === 'major' ? 'Major' : type === 'minor' ? 'Minor' : 'Initial Release'}
            </span>
          </div>
          <p className="text-sm text-black/60">{date}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {changes.map((change, idx) => (
          <div key={idx}>
            <h4 className="font-medium mb-2">{change.category}</h4>
            <ul className="space-y-2">
              {change.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-sm text-black/70">
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}