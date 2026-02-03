interface Objective {
  number: string;
  title: string;
  description: string;
}

interface EngagementObjectivesSectionProps {
  objectives: Objective[];
}

export function EngagementObjectivesSection({ objectives }: EngagementObjectivesSectionProps) {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 md:gap-16">
          {/* Left Column - Section Header (Sticky on Desktop) */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="font-medium text-black/40 uppercase tracking-[3px] mb-6 md:mb-8 block" style={{ fontSize: '14px' }}>
              Engagement Value Pillars
            </span>

            <h2 className="leading-[1.15] font-light text-black tracking-tight mb-4 md:mb-6" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.5rem, 4.5vw, var(--text-2xl))' }}>
              Engagement Objectives
            </h2>

            <p className="leading-[1.7] text-black/70" style={{ fontSize: 'var(--text-sm)' }}>
              Strategic consulting objectives designed to provide actionable insights and sustainable competitive advantages
            </p>

            <div className="mt-6 md:mt-8 h-px w-16 bg-black/20" />
          </div>

          {/* Right Column - Objectives Stack */}
          <div className="space-y-10 md:space-y-12">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="group"
              >
                <div className="mb-6">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-white hover:bg-black/[0.02] transition-colors">
                    <span className="font-medium uppercase tracking-[2px] text-black/40" style={{ fontSize: 'var(--text-xs)' }}>
                      Objective {objective.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-normal text-black leading-[1.3] tracking-tight mb-4 group-hover:text-black/80 transition-colors" style={{ fontSize: 'var(--text-xl)' }}>
                  {objective.title}
                </h3>

                <p className="leading-[1.7] text-black/70 transition-colors" style={{ fontSize: 'var(--text-sm)' }}>
                  {objective.description}
                </p>

                {index < objectives.length - 1 && (
                  <div className="mt-12 h-px w-full bg-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}