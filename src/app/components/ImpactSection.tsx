/**
 * ImpactSection Component - Displays metrics with 3 visual variants
 * 
 * VARIANTS:
 * 1. 'metric-with-description' (NEW) - Metric → Label → Description
 *    Example: "₹110 Cr" → "Total Addressable Market" → "Sell-side positioning achieved..."
 *    Typography: value (32-61px) → label (16px medium) → description (16px regular)
 *    Use: When you need large metrics with context and supporting text
 * 
 * 2. 'text-first' - Number Badge → Label → Description
 *    Example: "01" → "Serviceable Market Opportunity" → "Identified ₹129 Cr future SAM..."
 *    Typography: badge (16px) → label (25px) → description (16px)
 *    Use: When text/title is more important than the metric
 * 
 * 3. 'metric-first' (DEFAULT) - Large Value → Small Label
 *    Example: "₹110 Cr" → "TOTAL ADDRESSABLE MARKET"
 *    Typography: value (32-61px) → label (12.8px uppercase)
 *    Use: When metric is primary focus, minimal text needed
 * 
 * Auto-detection: If metrics have descriptions, defaults to 'metric-with-description'
 */

interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
}

interface ImpactSectionProps {
  metrics: ImpactMetric[];
  variant?: 'metric-first' | 'text-first' | 'metric-with-description';
}

export function ImpactSection({ metrics, variant }: ImpactSectionProps) {
  const hasDescriptions = metrics.some(m => m.description);
  let displayVariant = variant;
  if (!displayVariant) {
    displayVariant = hasDescriptions ? 'metric-with-description' : 'metric-first';
  }

  if (displayVariant === 'metric-with-description') {
    return (
      <section className="bg-white py-12 sm:py-16 md:py-20 transition-all duration-500">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <span className="font-medium text-black/40 uppercase tracking-[3px] mb-6 md:mb-8 block" style={{ fontSize: '14px' }}>
              Impact Delivered
            </span>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <h2 className="leading-[1.15] font-light text-black tracking-tight" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.5rem, 4.5vw, var(--text-2xl))' }}>
                Measurable Outcomes
              </h2>
              
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 w-fit"
                style={{ 
                  backgroundColor: 'var(--purple-50)', 
                  border: '1px solid var(--purple-600)',
                  boxShadow: '0 2px 8px rgba(128, 108, 224, 0.08)'
                }}
              >
                <svg className="w-3.5 h-3.5" style={{ color: 'var(--purple-600)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium whitespace-nowrap" style={{ color: 'var(--purple-900)' }}>
                  Data-Backed Results
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 animate-fadeIn" style={{ gridAutoRows: '1fr' }}>
            {metrics.map((metric, index) => (
              <div key={index} className="relative group min-h-full" style={{ animationDelay: `${index * 100}ms` }}>
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 -ml-4 md:-ml-6 hidden md:block" />
                )}

                <div className="flex flex-col h-full space-y-3 md:space-y-4">
                  <div 
                    className="font-light tracking-tight leading-[1.05]" 
                    style={{ 
                      fontFamily: "'Noto Serif', serif", 
                      fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                      color: 'var(--purple-700)',
                      filter: 'drop-shadow(0 2px 8px rgba(128, 108, 224, 0.15))'
                    }}
                  >
                    {metric.value}
                  </div>

                  <div className="text-black/50 uppercase tracking-[2px] font-medium leading-[1.3]" style={{ fontSize: 'var(--text-xs)' }}>
                    {metric.label}
                  </div>

                  {metric.description && (
                    <p className="leading-[1.6] text-black/70 transition-colors flex-grow" style={{ fontSize: 'var(--text-sm)' }}>
                      {metric.description}
                    </p>
                  )}

                  <div className="pt-2 mt-auto">
                    <div className="h-px w-10 bg-black/10 group-hover:w-14 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </section>
    );
  }

  if (displayVariant === 'text-first') {
    return (
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <span className="font-medium text-black/40 uppercase tracking-[3px] mb-6 md:mb-8 block" style={{ fontSize: '14px' }}>
              Impact Delivered
            </span>
            
            <h2 className="leading-[1.15] font-light text-black tracking-tight" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.5rem, 4.5vw, var(--text-2xl))' }}>
              Measurable Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" style={{ gridAutoRows: '1fr' }}>
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="group relative min-h-full"
              >
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 -ml-4 md:-ml-5 hidden md:block" />
                )}

                <div className="flex flex-col h-full space-y-4 md:space-y-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.06] group-hover:bg-black/[0.10] transition-colors">
                    <span className="font-medium text-black/70" style={{ fontSize: 'var(--text-sm)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-normal text-black leading-[1.3] tracking-tight group-hover:text-black/80 transition-colors" style={{ fontSize: 'var(--text-base)' }}>
                    {metric.label}
                  </h3>

                  <p className="leading-[1.6] text-black/70 transition-colors flex-grow" style={{ fontSize: 'var(--text-sm)' }}>
                    {metric.description}
                  </p>

                  <div className="pt-3 mt-auto">
                    <div className="h-0.5 w-12 bg-black/10 group-hover:w-16 group-hover:bg-black/20 transition-all duration-300 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="font-medium text-black/40 uppercase tracking-[3px] mb-6 md:mb-8 block" style={{ fontSize: '14px' }}>
            Impact Delivered
          </span>
          
          <h2 className="leading-[1.15] font-light text-black tracking-tight" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.5rem, 4.5vw, var(--text-2xl))' }}>
            Measurable Outcomes
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16" style={{ gridAutoRows: '1fr' }}>
          {metrics.map((metric, index) => (
            <div key={index} className="relative min-h-full">
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 -ml-4 md:-ml-8 hidden md:block" />
              )}

              <div className="flex flex-col h-full space-y-4 md:space-y-5">
                <div className="font-light text-black tracking-tight leading-[1.05]" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
                  {metric.value}
                </div>

                <div className="text-black/50 uppercase tracking-[1.5px] font-medium leading-[1.4]" style={{ fontSize: 'var(--text-xs)' }}>
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}