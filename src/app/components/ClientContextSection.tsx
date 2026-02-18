import yashLogo from "figma:asset/faa51f6035eb6438eb4b8b0be770366215f25dc2.png";
import { AnimatedArrow } from '@/app/components/AnimatedArrow';

// Content block types
type ContentBlock = 
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

interface ClientContextSectionProps {
  contentBlocks?: ContentBlock[];
  showLink?: boolean;
}

export function ClientContextSection({ 
  contentBlocks = [
    {
      type: 'heading',
      text: 'A vertically integrated manufacturer of high-voltage condenser and non-condenser bushings serving utilities, transformer OEMs, and EPC companies across India.'
    },
    {
      type: 'paragraph',
      text: "India's power transmission sector is undergoing accelerated modernization, driven by utility expansions, renewable energy integration, and grid reliability mandates. In this environment, the demand for transformer bushings—especially high-voltage and condenser variants—has become increasingly strategic."
    },
    {
      type: 'paragraph',
      text: 'Yash Highvoltage Insulators is positioned as one of the few domestic players with:'
    },
    {
      type: 'list',
      items: [
        'Deep engineering capability in HV condenser bushings',
        'Vertical integration across ceramic, insulation, and assembly processes',
        'Faster turnaround relative to imported alternatives, especially from Europe',
        'Ability to deliver fully customized and retrofit-grade products'
      ]
    },
    {
      type: 'paragraph',
      text: 'Despite strong product and technical maturity, the leadership faced strategic blind spots around market sizing, competitive positioning, supply chain risks, and investor narrative development.'
    }
  ],
  showLink = true
}: ClientContextSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Label */}
        <div className="mb-8 md:mb-10">
          <span className="font-medium text-black/40 uppercase tracking-[3px]" style={{ fontSize: '14px' }}>
            Client Context
          </span>
        </div>
        
        {/* Company Header - Split Layout on Desktop */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-14 pb-10 md:pb-12 border-b border-black/10">
          {/* Left: Logo & Identity */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-8">
              <img src={yashLogo} alt="YASH Industries Logo" className="h-11 md:h-12 mb-6 rounded-[2.5px]" />
              
              <div className="space-y-3">
                <div>
                  {/* 
                    TYPOGRAPHY RATIONALE: Sidebar Micro Labels
                    - fontSize: 11px (updated from 9.5px for better readability)
                    
                    WHY 11px:
                    1. Sidebar Spatial Constraint: This column is only 33% width (md:col-span-4)
                    2. Better readability than 9.5px while still subtle
                    3. Creates hierarchy: 11px labels → 13px secondary → 17px primary
                    4. Follows "smaller space = smaller type" editorial principle
                    
                    ALTERNATIVE CONSIDERED:
                    - var(--text-xs) (12.8px): Would make labels too prominent in tight sidebar
                    - 9.5px: Too small, hard to read
                    
                    VERDICT: 11px provides optimal sidebar balance and readability
                  */}
                  <span className="font-medium text-black/40 uppercase tracking-[2px] block mb-1" style={{ fontSize: '11px' }}>
                    Client Company
                  </span>
                  
                  {/* 
                    TYPOGRAPHY RATIONALE: Company Name
                    - fontSize: 17px (hardcoded, not using --text-base: 20px)
                    
                    WHY HARDCODED:
                    1. Text Length: "Yash Highvoltage Insulators" is 28 characters
                    2. Wrapping Prevention: 20px would force awkward wrapping in sidebar
                    3. Visual Hierarchy: Larger than industry (13px), smaller than heading (20px)
                    4. Single-line Display: Ensures company name stays on one line
                    
                    ALTERNATIVE CONSIDERED:
                    - var(--text-base) (20px): Tested, causes wrapping on most screens
                    - var(--text-sm) (16px): Too small, loses emphasis
                    
                    VERDICT: 17px is the "Goldilocks size" for this sidebar width
                  */}
                  <h3 className="font-medium text-black leading-[1.3]" style={{ fontSize: '17px' }}>
                    Yash Highvoltage Insulators
                  </h3>
                </div>
                
                <div className="h-px w-12 bg-black/20"></div>
                
                <div>
                  <span className="font-medium text-black/40 uppercase tracking-[2px] block mb-1" style={{ fontSize: '11px' }}>
                    Industry
                  </span>
                  
                  {/* 
                    TYPOGRAPHY RATIONALE: Industry Text
                    - fontSize: 13px (hardcoded, not using --text-sm: 16px)
                    
                    WHY HARDCODED:
                    1. Visual Hierarchy: Creates three-tier hierarchy
                       - Labels (9.5px) < Industry (13px) < Company Name (17px)
                    2. Information Density: Longer descriptive text needs compact size
                    3. Secondary Information: Less important than company name
                    4. Sidebar Balance: Prevents text from dominating narrow space
                    
                    ALTERNATIVE CONSIDERED:
                    - var(--text-sm) (16px): Too large, competes with company name
                    - var(--text-xs) (12.8px): Almost works, but creates awkward gap to 17px
                    
                    VERDICT: 13px creates perfect hierarchical step between 9.5px and 17px
                  */}
                  <p className="text-black/70 leading-[1.5]" style={{ fontSize: '13px' }}>
                    Power Transmission & Electrical Equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Company Overview */}
          <div className="md:col-span-8">
            {contentBlocks.map((block, index) => {
              if (block.type === 'heading' && index === 0) {
                return (
                  <div key={index}>
                    <span className="font-medium text-black/40 uppercase tracking-[2px] block mb-4" style={{ fontSize: '11px' }}>
                      Company Overview
                    </span>
                    {/* 
                      TYPOGRAPHY RATIONALE: Lead Paragraph (Editorial Treatment)
                      - fontSize: clamp(19px, 2.8vw, 24px) - Responsive range
                      
                      WHY HARDCODED:
                      1. Responsive Typography: Needs to scale smoothly from mobile to desktop
                      2. Editorial "Lead Paragraph": Larger than body (16px), smaller than heading (25px)
                      3. Precise Range Control:
                         - Minimum 19px: Readable on mobile without being too small
                         - Maximum 24px: Impactful on desktop without overwhelming
                         - 2.8vw: Smooth viewport-based scaling
                      4. Hierarchical Position: Sits between body text and subheadings
                      
                      ALTERNATIVE CONSIDERED:
                      - var(--text-base) (20px): Fixed size, no responsive scaling
                      - clamp(1rem, 2.5vw, var(--text-lg)): Range too wide (16px-25px)
                      
                      WHY THIS SPECIFIC RANGE:
                      Testing showed:
                      - 16px-25px: Too jarring on mobile-to-desktop transition
                      - 18px-22px: Not enough visual impact
                      - 19px-24px: Perfect balance of readability and prominence
                      
                      VERDICT: Keep clamp() for editorial lead paragraph treatment
                      Note: This is a "featured paragraph" pattern common in editorial design
                    */}
                    <p 
                      className="leading-[1.45] font-normal text-black" 
                      style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(19px, 2.8vw, 24px)' }}
                    >
                      {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Market Context - Narrative Flow */}
        <div className="mb-12 md:mb-14">
          <div className="mb-6 md:mb-8">
            <span className="font-medium text-black/40 uppercase tracking-[2px]" style={{ fontSize: '11px' }}>
              Market Context
            </span>
          </div>
          
          <div className="space-y-5 md:space-y-6">
            {contentBlocks.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p 
                    key={index} 
                    className="leading-[1.7] text-black/70 max-w-[780px]" 
                    style={{ fontSize: 'var(--text-sm)' }}
                  >
                    {block.text}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Key Capabilities - Feature Grid */}
        <div className="mb-12 md:mb-14">
          {contentBlocks.map((block, index) => {
            if (block.type === 'list') {
              return (
                <div key={index}>
                  <div className="mb-6 md:mb-8">
                    <span className="font-medium text-black/40 uppercase tracking-[2px] block mb-2" style={{ fontSize: '11px' }}>
                      Competitive Advantages
                    </span>
                    <h4 className="font-normal text-black leading-[1.3]" style={{ fontFamily: "'Noto Serif', serif", fontSize: '20px' }}>
                      Key Capabilities & Differentiators
                    </h4>
                  </div>
                  
                  {/* Capabilities as stacked cards with better visual hierarchy */}
                  <div className="space-y-3 md:space-y-4">
                    {block.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="group relative bg-black/[0.015] hover:bg-black/[0.03] border-l-2 border-black/10 hover:border-black/30 pl-5 pr-4 py-4 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          {/* Minimal Number Prefix */}
                          <span 
                            className="font-medium text-black/30 group-hover:text-black/50 transition-colors duration-300 flex-shrink-0 pt-0.5" 
                            style={{ fontSize: '13px', fontFamily: "'Noto Serif', serif", minWidth: '24px' }}
                          >
                            {String(itemIndex + 1).padStart(2, '0')}
                          </span>
                          
                          {/* Content */}
                          <p 
                            className="leading-[1.6] text-black/70 group-hover:text-black/90 transition-colors duration-300 flex-1" 
                            style={{ fontSize: 'var(--text-sm)' }}
                          >
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Strategic Challenge - Highlighted */}
        <div className="relative">
          {contentBlocks.map((block, index) => {
            if (block.type === 'paragraph' && index === contentBlocks.length - 1) {
              return (
                <div key={index}>
                  <div className="mb-4 md:mb-6">
                    <span className="font-medium text-black/40 uppercase tracking-[2px]" style={{ fontSize: '11px' }}>
                      Strategic Challenge
                    </span>
                  </div>
                  
                  <div className="relative bg-[#f5f2f1] text-black rounded-[5px] p-8 md:p-10 overflow-hidden">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    
                    <div className="relative">
                      <p 
                        className="leading-[1.6] text-black/70 max-w-[700px]" 
                        style={{ fontSize: 'var(--text-sm)' }}
                      >
                        {block.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* CTA - Refined */}
        {showLink && (
          <div className="mt-12 md:mt-14 pt-10 md:pt-12 border-t border-black/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-medium text-black/40 mb-1" style={{ fontSize: 'var(--text-xs)' }}>
                  Want to learn more?
                </p>
                <p className="text-black/70 leading-[1.6]" style={{ fontSize: 'var(--text-xs)' }}>
                  Explore the complete company profile and industry insights
                </p>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white rounded-[5px] font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 whitespace-nowrap overflow-hidden"
                style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.3px' }}
              >
                <span>View Full Profile</span>
                <AnimatedArrow size={16} color="white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}