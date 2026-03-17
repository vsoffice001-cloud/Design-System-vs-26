import { useState, useEffect, useRef } from 'react';
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
  Circle,
  Menu,
  X
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
  IconsContent,
  FiltersContent
} from '@/app/components/ComponentsContent';
import {
  PageLayoutsContent,
  ReportStorePagesContent,
  SurveysPagesContent,
  ContentPatternsContent,
  BackgroundsContent
} from '@/app/components/PatternsContent';
import { ReportStorePage } from '@/app/components/ReportStorePage';
import { ReportStoreOrganismsShowcase } from '@/app/components/ReportStoreOrganismsShowcase';
import { SurveysDemoContent } from '@/app/components/SurveysDemoContent';
import { SurveysListingDemoContent } from '@/app/components/SurveysListingDemoContent';
import { TemplateDemoContent } from '@/app/components/TemplateDemoContent';
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
 * PROJECT K — DESIGN SYSTEM DASHBOARD
 * ====================================
 * Professional design system dashboard by Vishal Singh Chauhan
 * Version: 4.3 (March 2026)
 * 
 * Structure:
 * 1. Overview - Getting Started
 * 2. Foundations - Design Tokens
 * 3. Components - UI Library
 * 4. Patterns - Design Patterns
 * 5. Motion - Animations
 * 6. Guidelines - Best Practices
 * 7. Resources - Assets & Tools
 *
 * Note: GitHub version uses useState-based tab routing.
 * Figma Make version uses react-router URL params.
 * See GITHUB_REPO_MANIFEST.md for divergence docs.
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
  const [expandedSections, setExpandedSections] = useState<TabId[]>(() => {
    const defaults: TabId[] = ['overview', 'foundations'];
    return defaults;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Scroll main content to top whenever the active page changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    // Auto-expand the active tab's section in sidebar
    if (activeTab && !expandedSections.includes(activeTab)) {
      setExpandedSections(prev => [...prev, activeTab]);
    }
  }, [activeTab, activeSubTab]);

  // Navigation structure
  const navigation: NavigationItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Home size={18} />,
      subItems: [
        { id: 'welcome', label: 'Welcome' },
        { id: 'architecture', label: 'Architecture' },
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
        { id: 'filters', label: 'Filters' },
      ]
    },
    {
      id: 'patterns',
      label: 'Patterns',
      icon: <Grid size={18} />,
      subItems: [
        { id: 'page-layouts', label: 'Consulting Pages' },
        { id: 'report-store-pages', label: 'Report Store Pages' },
        { id: 'report-store-organisms', label: 'RS Organisms' },
        { id: 'report-store-demo', label: 'Report Store Demo' },
        { id: 'report-store-listing', label: 'RS Listing' },
        { id: 'surveys-pages', label: 'Surveys Pages' },
        { id: 'surveys-demo', label: 'Surveys Demo' },
        { id: 'surveys-listing', label: 'Surveys Listing' },
        { id: 'template-demo', label: 'Template Demo' },
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
      if (!expandedSections.includes(tabId)) {
        setExpandedSections(prev => [...prev, tabId]);
      }
    } else {
      const firstSubItem = navigation.find(item => item.id === tabId)?.subItems?.[0];
      if (firstSubItem) {
        setActiveSubTab(firstSubItem.id);
      }
    }
    // Close sidebar on mobile after navigation
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-dvh bg-white flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <aside className={`w-64 border-r border-black/8 bg-white top-0 h-dvh flex flex-col flex-shrink-0 z-50 transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky`}>
        {/* Logo / Header */}
        <div className="px-6 py-6 border-b border-black/8 flex-shrink-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-[5px] flex items-center justify-center">
                <span className="text-white font-semibold" style={{ fontSize: '14px', fontFamily: 'var(--font-serif)' }}>K</span>
              </div>
              <h1 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-normal, 400)' }}>Project K</h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded-[5px] hover:bg-black/5 transition-colors"
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-xs text-black/40 mt-1">Design System by Vishal Singh Chauhan</p>
        </div>

        {/* Search */}
        <div className="px-4 py-4 border-b border-black/8 flex-shrink-0">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="Search components, tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') { setSearchQuery(''); (e.target as HTMLInputElement).blur(); } }}
              className="w-full pl-9 pr-8 py-2 border border-black/10 rounded-[5px] bg-white text-black/90 placeholder:text-black/30 hover:border-black/25 focus:border-black/90 focus:outline-none transition-colors duration-150"
              style={{ fontSize: 'var(--text-xs)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black/30 hover:text-black/60 transition-colors"
              >
                <span style={{ fontSize: '14px', lineHeight: 1 }}>&times;</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4 flex-1 overflow-y-auto">
          {navigation.map((item) => (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => {
                  toggleSection(item.id);
                  handleNavClick(item.id);
                }}
                className={`
                  w-full px-4 py-2 flex items-center justify-between
                  transition-colors hover:bg-black/5
                  ${activeTab === item.id && !item.subItems ? 'bg-black/5 font-medium' : ''}
                `}
                style={{ fontSize: 'var(--text-nav)' }}
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

              {item.subItems && expandedSections.includes(item.id) && (
                <div className="pl-11 pr-4 py-1 space-y-0.5">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleNavClick(item.id, subItem.id)}
                      className={`
                        w-full px-3 py-1.5 text-left rounded-[5px]
                        transition-colors hover:bg-black/5
                        ${activeTab === item.id && activeSubTab === subItem.id 
                          ? 'bg-black/8 font-medium text-black' 
                          : 'text-black/60'
                        }
                      `}
                      style={{ fontSize: 'var(--text-nav)' }}
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
        <div className="px-4 py-4 border-t border-black/8 flex-shrink-0">
          <p className="text-xs text-black/40">Project K &middot; v4.3</p>
          <p className="text-xs text-black/40 mt-1">Last updated: Mar 2026</p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-black/8">
          <div className="max-w-[var(--container-page)] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                {/* Mobile hamburger */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-1.5 -ml-1.5 rounded-[5px] hover:bg-black/5 transition-colors flex-shrink-0"
                  aria-label="Open navigation"
                >
                  <Menu size={20} />
                </button>
                <div className="min-w-0">
                  <h1 className="font-normal truncate" style={{ fontSize: 'var(--text-xl)' }}>
                    {navigation.find(n => n.id === activeTab)?.label}
                  </h1>
                  <p className="text-black/60 mt-0.5 truncate" style={{ fontSize: 'var(--text-nav)' }}>
                    {navigation.find(n => n.id === activeTab)?.subItems?.find(s => s.id === activeSubTab)?.label}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                <Button variant="secondary" size="sm" icon={<Download size={16} />} onClick={() => {
                  const content = document.querySelector('main')?.innerText || '';
                  const blob = new Blob([`Project K Design System v4.3\n${navigation.find(n => n.id === activeTab)?.label} > ${navigation.find(n => n.id === activeTab)?.subItems?.find(s => s.id === activeSubTab)?.label}\nExported: ${new Date().toLocaleDateString()}\n\n${content}`], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `projectk-ds-${activeTab}-${activeSubTab}.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}>
                  <span className="hidden sm:inline">Export</span>
                  <span className="sm:hidden sr-only">Export</span>
                </Button>
                <Button variant="primary" size="sm" onClick={() => window.open('https://github.com/vsoffice001-cloud/Design-System-vs-26', '_blank')}>
                  <span className="hidden sm:inline">View on GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-[var(--container-page)] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
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
    if (subTab === 'welcome') return <WelcomeContent onNavigate={handleNavClick} />;
    if (subTab === 'architecture') return <ArchitectureContent />;
    if (subTab === 'principles') return <PrinciplesContent />;
    if (subTab === 'quickstart') return <QuickStartContent onNavigate={handleNavClick} />;
    if (subTab === 'whats-new') return <WhatsNewContent />;
  }
  // TAB 2: FOUNDATIONS
  if (tab === 'foundations') {
    if (subTab === 'colors') return <ColorsContent />;
    if (subTab === 'all-colors-palette') return <AllColorsPaletteContent />;
    if (subTab === 'typography') return <TypographyContent />;
    if (subTab === 'all-typography-tokens') return <AllTypographyTokensContent />;
    if (subTab === 'spacing') return <SpacingContent />;
    if (subTab === 'all-spacing-tokens') return <AllSpacingTokensContent />;
    if (subTab === 'layout-grid') return <LayoutGridContent />;
    if (subTab === 'all-layout-grid-tokens') return <AllLayoutGridTokensContent />;
    if (subTab === 'elevation') return <ElevationContent />;
    if (subTab === 'all-elevation-tokens') return <AllElevationTokensContent />;
    if (subTab === 'radius') return <BorderRadiusContent />;
    if (subTab === 'all-radius-tokens') return <AllBorderRadiusTokensContent />;
  }
  // TAB 3: COMPONENTS
  if (tab === 'components') {
    if (subTab === 'buttons') return <ButtonDocumentation />;
    if (subTab === 'links-ctas') return <LinksDocumentation />;
    if (subTab === 'badges-labels') return <BadgeLabelsDocumentation />;
    if (subTab === 'forms') return <FormInputsContent />;
    if (subTab === 'cards') return <CardsContent />;
    if (subTab === 'navigation') return <NavigationContent />;
    if (subTab === 'feedback') return <FeedbackContent />;
    if (subTab === 'icons') return <IconsContent />;
    if (subTab === 'filters') return <FiltersContent />;
  }
  // TAB 4: PATTERNS
  if (tab === 'patterns') {
    if (subTab === 'page-layouts') return <PageLayoutsContent />;
    if (subTab === 'report-store-pages') return <ReportStorePagesContent />;
    if (subTab === 'report-store-organisms') return <ReportStoreOrganismsShowcase />;
    if (subTab === 'report-store-demo') return <ReportStorePage initialMode="home" />;
    if (subTab === 'report-store-listing') return <ReportStorePage initialMode="listing" />;
    if (subTab === 'surveys-pages') return <SurveysPagesContent />;
    if (subTab === 'surveys-demo') return <SurveysDemoContent />;
    if (subTab === 'surveys-listing') return <SurveysListingDemoContent />;
    if (subTab === 'template-demo') return <TemplateDemoContent />;
    if (subTab === 'content-patterns') return <ContentPatternsContent />;
    if (subTab === 'backgrounds') return <BackgroundsContent />;
  }
  // TAB 5: MOTION
  if (tab === 'motion') {
    if (subTab === 'motion-principles') return <MotionPrinciplesContent />;
    if (subTab === 'duration-scale') return <DurationScaleContent />;
    if (subTab === 'transitions') return <TransitionsContent />;
    if (subTab === 'micro-interactions') return <MicroInteractionsContent />;
  }
  // TAB 6: GUIDELINES
  if (tab === 'guidelines') {
    if (subTab === 'accessibility') return <AccessibilityContent />;
    if (subTab === 'responsive') return <ResponsiveDesignContent />;
    if (subTab === 'best-practices') return <BestPracticesContent />;
  }
  // TAB 7: RESOURCES
  if (tab === 'resources') {
    if (subTab === 'downloads') return <DownloadsContent />;
    if (subTab === 'code-snippets') return <CodeSnippetsContent />;
    if (subTab === 'tokens-export') return <DesignTokensContent />;
  }
  // Placeholder
  return (
    <div className="py-12 text-center">
      <Lightbulb size={48} className="mx-auto text-black/20 mb-4" />
      <h2 className="text-xl font-normal mb-2">Content Coming Soon</h2>
      <p className="text-black/60">This section is being built. Check back soon!</p>
    </div>
  );
}

// ============================================
// TAB 1: OVERVIEW - CONTENT COMPONENTS
// ============================================

function WelcomeContent({ onNavigate }: { onNavigate: (tabId: TabId, subTabId?: SubTabId) => void }) {
  return (
    <div className="space-y-12">
      {/* 4W+H Framework — Project K */}
      <section className="border border-black/10 rounded-[10px] p-8 bg-[#fafaf9]">
        <h2 className="text-2xl font-normal mb-6">Project K at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-black text-black" /> WHY
            </h3>
            <p className="text-sm text-black/70">
              Creates consistency across three business pillars — Research, Consulting, and Surveys.
              A single source of truth that speeds development, ensures quality, and enables team scalability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-black text-black" /> WHAT
            </h3>
            <p className="text-sm text-black/70">
              Minimalist editorial design system: black/white alternating sections, Major Third typography 
              (1.25 ratio), Ken Bold Red (#b01f24) for CTAs only, 92-5-3 color hierarchy, and 
              two-font pairing (Noto Serif headings + DM Sans body/UI).
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-black text-black" /> WHEN
            </h3>
            <p className="text-sm text-black/70">
              Use for ALL pages across all three pillars. Display pages (Case Studies) use bespoke 
              editorial organisms. Product pages (Report Store, Surveys) use systematic 
              SectionHeading + molecule compositions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-[var(--brand-red)] text-[var(--brand-red)]" /> WHEN NOT
            </h3>
            <p className="text-sm text-black/70">
              Never deviate unless explicitly requested. Don't use brand red for decorative purposes. 
              Don't use Serif for body text or Sans for headings. Don't mix Display and Product page patterns.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Circle size={8} className="fill-black text-black" /> HOW
            </h3>
            <p className="text-sm text-black/70">
              Atoms from /components/ (flat), molecules from /components/molecules/, 
              organisms from /components/organisms/ (30 total), tokens from theme.css. 
              Report Store pages compose entirely from self-contained organisms.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Overview */}
      <section className="border border-black/10 rounded-[10px] p-8">
        <h2 className="text-2xl font-normal mb-2">Three-Pillar Architecture</h2>
        <p className="text-sm text-black/60 mb-6">One design system, three business verticals, two page types.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 border border-black/8 rounded-[5px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-xs font-mono text-black/50">PILLAR 1</span>
            </div>
            <h4 className="font-medium text-sm mb-1">Research</h4>
            <p className="text-xs text-black/60 mb-3">Report Store, market intelligence, data products</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 bg-black/5 rounded-[5px]">Product Pages</span>
              <span className="text-[10px] px-2 py-0.5 bg-black/5 rounded-[5px]">30 RS Organisms</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-[5px]">v4.3 Complete</span>
            </div>
          </div>
          <div className="p-5 border border-black/8 rounded-[5px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-xs font-mono text-black/50">PILLAR 2</span>
            </div>
            <h4 className="font-medium text-sm mb-1">Consulting</h4>
            <p className="text-xs text-black/60 mb-3">Case studies, client showcases, editorial content</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 bg-black/5 rounded-[5px]">Display Pages</span>
              <span className="text-[10px] px-2 py-0.5 bg-black/5 rounded-[5px]">10-Section</span>
            </div>
          </div>
          <div className="p-5 border border-black/8 rounded-[5px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono text-black/50">PILLAR 3</span>
            </div>
            <h4 className="font-medium text-sm mb-1">Surveys</h4>
            <p className="text-xs text-black/60 mb-3">Survey catalog, response dashboards, data collection</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 bg-black/5 rounded-[5px]">Product Pages</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-[5px]">Molecules Built</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section>
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 bg-[var(--brand-red)] text-white text-xs font-medium rounded-full">
              v4.3
            </span>
            <span className="text-xs text-black/40">March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6">
            Welcome to<br />Project K Design System
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/70 leading-relaxed mb-8">
            A unified design system powering three business pillars — Research, Consulting, and Surveys.
            Built on a pure black/white/warm palette with Ken Bold Red (#b01f24) for CTAs, 
            Noto Serif for editorial headings, DM Sans for functional UI. 70+ components, 
            26 molecules, 30 organisms, 1 page template, two page types, one consistent identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-black/8">
        <StatCard number="70+" label="Components" />
        <StatCard number="26" label="Molecules" />
        <StatCard number="30" label="Organisms" />
        <StatCard number="3" label="Pillars" />
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl font-normal mb-6">System Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard icon={<Palette size={24} />} title="92-5-3 Color Hierarchy" description="92% foundation (black/white/warm), 5% brand red (CTAs only), 3% accent (purple, periwinkle, coral)" />
          <FeatureCard icon={<Type size={24} />} title="Two-Font Strategy" description="Noto Serif for editorial headings (h1-h3), DM Sans for body text and all UI elements" />
          <FeatureCard icon={<Sparkles size={24} />} title="Brand Signatures" description="Always-active shimmer on buttons, ArrowUpRight for urgency CTAs, secondary two-state hover" />
          <FeatureCard icon={<Layers size={24} />} title="Three-Pillar Architecture" description="Research, Consulting, Surveys — shared foundations with Display and Product page patterns" />
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickLinkCardButton title="Architecture" description="Three pillars & page types" onClick={() => onNavigate('overview', 'architecture')} />
          <QuickLinkCardButton title="Colors" description="Palette & semantic colors" onClick={() => onNavigate('foundations', 'colors')} />
          <QuickLinkCardButton title="Typography" description="Type scale & hierarchy" onClick={() => onNavigate('foundations', 'typography')} />
          <QuickLinkCardButton title="Components" description="UI component library" onClick={() => onNavigate('components', 'buttons')} />
          <QuickLinkCardButton title="Spacing" description="10-step spacing scale" onClick={() => onNavigate('foundations', 'spacing')} />
          <QuickLinkCardButton title="Motion" description="Animation guidelines" onClick={() => onNavigate('motion', 'motion-principles')} />
          <QuickLinkCardButton title="Consulting Pages" description="Display page patterns" onClick={() => onNavigate('patterns', 'page-layouts')} />
          <QuickLinkCardButton title="Report Store" description="Product page patterns" onClick={() => onNavigate('patterns', 'report-store-pages')} />
          <QuickLinkCardButton title="RS Organisms" description="Interactive showcase (30)" onClick={() => onNavigate('patterns', 'report-store-organisms')} />
          <QuickLinkCardButton title="Surveys" description="Molecules & demo" onClick={() => onNavigate('patterns', 'surveys-pages')} />
          <QuickLinkCardButton title="Template Demo" description="Declarative page assembly" onClick={() => onNavigate('patterns', 'template-demo')} />
        </div>
      </section>
    </div>
  );
}

function ArchitectureContent() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4">Architecture</h1>
        <p className="text-lg text-black/70">
          One design system, three business pillars, two page types. This is the "read this first" 
          for anyone building a new page.
        </p>
      </div>

      {/* Composition Layer Map */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Composition Layer Map</h2>
        <div className="space-y-2 mb-6">
          {[
            { layer: 'TEMPLATES', count: '1', items: 'ProductPageTemplate (declarative page assembly)', bg: 'bg-black', text: 'text-white' },
            { layer: 'ORGANISMS', count: '30', items: '6 cross-pillar + 24 RS-specific', bg: 'bg-black/80', text: 'text-white' },
            { layer: 'MOLECULES', count: '26', items: '19 Report Store + 2 RS additions + 5 Surveys', bg: 'bg-[#806ce0]/15', text: 'text-black' },
            { layer: 'ATOMS', count: '72+', items: 'Button, Badge, CTALink, Label, ViewToggle, SectionHeading...', bg: 'bg-black/5', text: 'text-black' },
            { layer: 'TOKENS', count: '6 files', items: 'Colors, Typography, Spacing, Layout, Elevation, Radius', bg: 'bg-white border border-black/8', text: 'text-black' },
          ].map((l) => (
            <div key={l.layer} className={`rounded-[5px] p-4 ${l.bg} ${l.text} flex items-center gap-4`}>
              <div className="w-24 flex-shrink-0">
                <span className="text-[10px] font-mono opacity-60">{l.layer}</span>
                <p className="text-sm font-medium">{l.count}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs opacity-70 truncate">{l.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Display vs Product Pages */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Display vs Product Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border-l-2 border-black pl-5">
            <h4 className="font-medium text-sm mb-2">Display Pages</h4>
            <p className="text-xs text-black/60 mb-2">Editorial storytelling — bespoke per section</p>
            <ul className="space-y-1">
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-black/40" /> Consulting (Case Studies)</li>
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-black/40" /> Hand-authored, scroll-driven</li>
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-black/40" /> 10-section B/W/Warm sequence</li>
            </ul>
          </div>
          <div className="p-5 border-l-2 border-[#806ce0] pl-5">
            <h4 className="font-medium text-sm mb-2">Product Pages</h4>
            <p className="text-xs text-black/60 mb-2">Data-driven — systematic, composable sections</p>
            <ul className="space-y-1">
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-[#806ce0]/40" /> Research (Report Store), Surveys</li>
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-[#806ce0]/40" /> 30 organisms (6 cross-pillar + 24 RS)</li>
              <li className="text-xs text-black/50 flex items-center gap-2"><Circle size={4} className="fill-[#806ce0]/40" /> Dual-mode (home / listing)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Import Conventions */}
      <section>
        <h2 className="text-2xl font-normal mb-6">Import Conventions</h2>
        <div className="border border-black/8 rounded-[10px] overflow-hidden">
          <div className="bg-black/5 px-4 py-2 border-b border-black/8">
            <span className="text-xs font-mono text-black/60">tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto bg-black/2">
            <code className="text-sm font-mono">{`// Shared atoms — flat imports
import { Button } from '@/app/components/Button';
import { Badge } from '@/app/components/Badge';

// Layout components — flat imports
import { SectionHeading } from '@/app/components/SectionHeading';

// Report Store molecules — from barrel
import { 
  ReportCard, StatCard, SkeletonCard, EmptyState
} from '@/app/components/molecules';`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

function PrinciplesContent() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4">Design Principles</h1>
        <p className="text-lg text-black/70">
          Seven non-negotiable rules that govern every design decision.
        </p>
      </div>
      <div className="space-y-8">
        <PrincipleCard number="01" title="92-5-3 Color Hierarchy" description="The single most important color rule. 92% foundation colors, 5% brand red, 3% accent." principles={['Foundation (92%): Black #000, White #fff, Warm #f5f2f1', 'Brand (5%): Ken Bold Red #b01f24 — CTA buttons ONLY', 'Accent (3%): Purple #806ce0, Periwinkle #c3c6f9, Coral #ea7a5f', 'NEVER use brand red for decorative borders, icons, or general accents']} />
        <PrincipleCard number="02" title="Two-Font Strategy" description="Serif headings for editorial authority, Sans body for functional clarity." principles={['Noto Serif → Headings (h1-h3), hero titles, testimonial quotes', 'DM Sans → Body text, buttons, badges, labels, navigation, forms', 'NEVER use Serif for body text, buttons, or navigation', 'NEVER use Sans for hero headings or section titles']} />
        <PrincipleCard number="03" title="Major Third Typography Scale (1.25\u00d7)" description="Mathematical 1.25 ratio creates harmonious visual hierarchy." principles={['--text-xs (12.8px): Labels, metadata, eyebrows', '--text-sm (16px): ALL body text — 90% of text on every page', '--text-2xl (39px): ALL section headings (h2)', '--text-3xl (48.8px): Hero h1 ONLY']} />
        <PrincipleCard number="04" title="Brand Identity Signatures" description="Three visual signatures: shimmer, arrow animation, secondary two-state." principles={['Shimmer Effect: Always-active 700ms sweep on ALL buttons', 'ArrowUpRight (45\u00b0) ONLY for urgency CTAs — NEVER ArrowRight/ChevronRight on buttons', 'Secondary Two-State: Neutral rest → Brand-red hover']} />
        <PrincipleCard number="05" title="Section Patterns & Page Assembly" description="Display pages use fixed 10-section editorial sequence. Product pages use composable organisms." principles={['Display: HeroSection → ClientContext → Challenges → ... → FinalCTA', 'Product: ProductHero → FeaturedCarousel → StatsRow → BrowseGrid → CTABanner', 'Use ProductPageTemplate for declarative assembly']} />
        <PrincipleCard number="06" title="Inline Style Rules" description="Strict rules for all inline styles to ensure consistency." principles={['All colors must use rgba() format — never hex in inline styles', 'No CSS shorthand for border/background in inline styles', 'Tailwind classes for layout/spacing/transitions only', 'CSS custom properties (var(--brand-red)) for token references']} />
        <PrincipleCard number="07" title="Accessible by Default" description="Every component meets WCAG 2.1 AA minimum." principles={['Minimum 4.5:1 contrast ratios for normal text', 'Semantic HTML with proper heading hierarchy', 'Full keyboard navigation with 2px black outline focus states', 'Touch targets minimum 44px for mobile accessibility']} />
      </div>
    </div>
  );
}

function QuickStartContent({ onNavigate }: { onNavigate: (tabId: TabId, subTabId?: SubTabId) => void }) {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4">Quick Start Guide</h1>
        <p className="text-lg text-black/70">Get up and running with the design system in minutes.</p>
      </div>
      <div className="space-y-6">
        <StepCardButton step="1" title="Understand the Foundations" description="Start with core design tokens: colors, typography, and spacing." action="View Foundations" onClick={() => onNavigate('foundations', 'colors')} />
        <StepCardButton step="2" title="Explore Components" description="Browse our comprehensive component library with live examples." action="Browse Components" onClick={() => onNavigate('components', 'buttons')} />
        <StepCardButton step="3" title="Review Patterns" description="Learn common design patterns for layouts and content organization." action="See Patterns" onClick={() => onNavigate('patterns', 'page-layouts')} />
        <StepCardButton step="4" title="Download Resources" description="Export design tokens, download Figma files, and access code snippets." action="Get Resources" onClick={() => onNavigate('resources', 'downloads')} />
      </div>
      <section>
        <h2 className="text-2xl font-normal mb-6">Import & Use Design Tokens</h2>
        <CodeBlock language="css" code={`/* All tokens live in theme.css */\n@import '@/styles/theme.css';\n\n/* Typography — Major Third 1.25\u00d7 scale */\n.section-heading { font-size: var(--text-2xl); }  /* 39px */\n.body-text       { font-size: var(--text-sm); }   /* 16px */\n.hero-title      { font-size: var(--text-3xl); }  /* 48.8px */\n\n/* Colors — 92-5-3 hierarchy */\n.bg-warm  { background: var(--warm-300); }    /* #f5f2f1 */\n.cta-btn  { background: var(--brand-red); }   /* #b01f24 */`} />
      </section>
    </div>
  );
}

function WhatsNewContent() {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4">What's New</h1>
        <p className="text-lg text-black/70">Latest updates and improvements to the design system.</p>
      </div>
      <div className="space-y-8">
        <ChangelogSection
          version="4.3"
          date="March 2026"
          type="major"
          changes={[{
            category: 'Report Store Clean Rebuild (6 phases)',
            items: [
              'Full clean rebuild: deleted 2 monolithic files, created 34 new files',
              'Self-contained organism architecture: every RS organism encapsulates own data, layout, interactions',
              'ReportStorePage.tsx: single file composing all organisms with mode switching (home/listing)',
              '30 organisms total (6 cross-pillar + 24 RS-specific)',
              'New atoms: IconBadge, CategoryListItem',
              'New molecules: CategoryListCard, LoadMoreSentinel',
              'New hooks: useReportFilters, useProgressiveLoad, useCrossfade, useMountTransition',
            ]
          }, {
            category: 'Project K Branding & Mobile Responsive',
            items: [
              'Full rebrand from "YASH Case Study" to "Project K / Vishal Singh Chauhan"',
              'Mobile-responsive sidebar: fixed lg:sticky with hamburger menu + overlay',
              'Sidebar header: serif "K" monogram with Project K title',
              'Export button generates projectk-ds-*.txt files',
              'View on GitHub button links to repo',
            ]
          }, {
            category: 'DS Audit & Code Fixes',
            items: [
              '7-phase DS audit: 5 code fixes (arrow prop, hex\u2192rgba, hex\u2192var)',
              'NewsletterSignup: ArrowRight \u2192 showArrow prop',
              'Card.tsx: #fff \u2192 rgba(255,255,255,1)',
              'FiltersDocumentation.tsx: full 2100-line interactive filter system docs',
            ]
          }]}
        />
        <ChangelogSection
          version="4.2"
          date="March 2026"
          type="major"
          changes={[{
            category: 'Report Store Pages & Surveys Framework',
            items: [
              'Report Store Pages sub-tab with 8-section home sequence',
              'Surveys elevated to "framework defined" with 5 molecules built',
              'Component Triad formal pattern doc',
              'Patterns tab expanded to 11 sub-tabs',
            ]
          }, {
            category: 'Demos & Organisms',
            items: [
              'Report Store Home Demo: 8-section interactive page',
              'Surveys Home Demo: 6-section interactive page',
              'Surveys Listing Demo: filters + search + ViewToggle + pagination',
              'Report Store Listing Demo: filters + sort + SkeletonCard loading',
              '5 Product Page Organisms: ProductHero, FeaturedCarousel, StatsRow, BrowseGrid, CTABanner',
              'ProductPageTemplate: declarative page assembly with bespoke slots',
              'Template Demo: hypothetical Training pillar via ProductPageTemplate',
            ]
          }, {
            category: 'Routing & Navigation',
            items: [
              'GitHub version uses useState-based tab routing',
              'Figma Make version uses react-router URL params (/:tab/:subTab)',
              'handleNavClick uses setActiveTab/setActiveSubTab for tab switching',
              'Auto-expand: active section auto-expands in sidebar on tab change',
            ]
          }]}
        />
        <ChangelogSection
          version="4.1"
          date="March 2026"
          type="major"
          changes={[{
            category: 'Component Triad & Three-Pillar Architecture',
            items: [
              'ReportCard unified with layout="grid"|"list" prop',
              'ViewToggle \u2194 ReportCard \u2194 SkeletonCard share single viewMode state',
              'Dashboard Welcome rewritten for Research, Consulting, Surveys framing',
              'Architecture sub-tab with three-pillar diagram',
            ]
          }]}
        />
        <ChangelogSection
          version="4.0"
          date="March 2026"
          type="major"
          changes={[{
            category: 'Report Store Molecules (15 components)',
            items: [
              'ReportCard, StatCard, DataHighlightCard, AnalystPickCardB',
              'SkeletonCard, EmptyState, HorizontalScroll, ScrollFade',
              'CardReveal, RevealImage, IndustryBadge, BackToTop',
              'Tooltip, ViewToggle, FadeInSection, SectionHeading',
            ]
          }]}
        />
        <ChangelogSection
          version="3.0.0"
          date="February 2026"
          type="major"
          changes={[{
            category: 'New',
            items: [
              'Badge.tsx unified — 132 combinations (3 variants \u00d7 4 sizes \u00d7 11 themes)',
              '10 convenience wrappers, Layout Container system',
              'Color palette expanded: coral, purple, periwinkle, perano (50-900)',
            ]
          }]}
        />
        <ChangelogSection
          version="1.0.0"
          date="December 2025"
          type="initial"
          changes={[{
            category: 'Initial Release',
            items: [
              'Complete design system with 7 categories',
              'Atomic design methodology, 50+ components',
              'Comprehensive WHY/WHAT/WHERE/WHEN/HOW framework',
            ]
          }]}
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 border border-black/8 rounded-[5px] hover:border-black/20 transition-colors">
      <div className="text-black/80 mb-3">{icon}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-black/60">{description}</p>
    </div>
  );
}

function QuickLinkCardButton({ title, description, onClick }: { title: string; description: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="p-4 border border-black/8 rounded-[5px] hover:border-black/20 hover:bg-black/2 transition-all group">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium mb-1 group-hover:text-[var(--brand-red)] transition-colors">{title}</h3>
          <p className="text-sm text-black/60">{description}</p>
        </div>
        <ChevronRight size={18} className="text-black/40 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}

function PrincipleCard({ number, title, description, principles }: { number: string; title: string; description: string; principles: string[] }) {
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

function StepCardButton({ step, title, description, action, onClick }: { step: string; title: string; description: string; action: string; onClick: () => void }) {
  return (
    <div className="flex gap-6 p-6 border border-black/8 rounded-[5px] hover:border-black/15 transition-colors">
      <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-mono text-lg">{step}</div>
      <div className="flex-1">
        <h3 className="text-xl font-normal mb-2">{title}</h3>
        <p className="text-black/70 mb-4">{description}</p>
        <button className="text-sm font-medium hover:text-[var(--brand-red)] transition-colors inline-flex items-center gap-2" onClick={onClick}>
          {action} <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="border border-black/8 rounded-[10px] overflow-hidden">
      <div className="bg-black/5 px-4 py-2 border-b border-black/8 flex items-center justify-between">
        <span className="text-xs font-mono text-black/60">{language}</span>
        <button onClick={handleCopy} className="text-xs font-medium hover:text-[var(--brand-red)] transition-colors cursor-pointer">
          {copied ? '\u2713 Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-black/2">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}

function ChangelogSection({ version, date, type, changes }: { version: string; date: string; type: 'major' | 'minor' | 'initial'; changes: { category: string; items: string[] }[] }) {
  const typeColors = {
    major: 'bg-[var(--brand-red)] text-white',
    minor: 'bg-black/10 text-black',
    initial: 'bg-black text-white'
  };
  return (
    <div className="border border-black/8 rounded-[5px] p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-normal">Version {version}</h3>
            <span className={`px-2 py-0.5 rounded-[5px] text-xs font-medium ${typeColors[type]}`}>
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
