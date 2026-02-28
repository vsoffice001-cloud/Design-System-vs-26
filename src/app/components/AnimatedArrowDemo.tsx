/**
 * ANIMATED ARROW DEMO
 * ====================
 * 
 * Showcase of the AnimatedArrow component in various contexts.
 * Use this as reference for implementing the arrow in your designs.
 */

import { AnimatedArrow } from './AnimatedArrow';

export function AnimatedArrowDemo() {
  return (
    <div className="min-h-screen bg-white p-12 space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-normal mb-3">Animated Arrow Component</h1>
        <p className="text-lg text-black/70">
          Simple 2-arrow replacement animation for 45-degree arrows. Hover to see the animation.
        </p>
      </div>

      {/* Demo Section 1: Standalone Arrows */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-normal mb-6">Standalone Arrows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={16} />
            <p className="text-sm text-black/60">Small (16px)</p>
          </div>
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={20} />
            <p className="text-sm text-black/60">Medium (20px)</p>
          </div>
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={24} />
            <p className="text-sm text-black/60">Large (24px)</p>
          </div>
        </div>
      </section>

      {/* Demo Section 2: In Buttons */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-normal mb-6">In Buttons</h2>
        <div className="space-y-4">
          <button className="px-6 py-3 bg-black text-white rounded-md flex items-center gap-2 hover:bg-black/90 transition-colors">
            <span>View Case Study</span>
            <AnimatedArrow size={18} color="white" />
          </button>
          <button className="px-6 py-3 bg-white text-black border border-black/20 rounded-md flex items-center gap-2 hover:border-black/40 transition-colors">
            <span>Learn More</span>
            <AnimatedArrow size={18} color="black" />
          </button>
          <button 
            className="px-6 py-3 text-white rounded-md flex items-center gap-2 transition-colors"
            style={{ backgroundColor: '#b01f24' }}
          >
            <span>Get Started</span>
            <AnimatedArrow size={18} color="white" />
          </button>
        </div>
      </section>

      {/* Demo Section 3: Color Variations */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-normal mb-6">Color Variations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-black/8 rounded-lg p-6 flex flex-col items-center gap-3">
            <AnimatedArrow size={20} color="#000000" />
            <p className="text-sm text-black/60">Black</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 flex flex-col items-center gap-3">
            <AnimatedArrow size={20} color="#b01f24" />
            <p className="text-sm text-black/60">Brand Red</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 flex flex-col items-center gap-3">
            <AnimatedArrow size={20} color="#806ce0" />
            <p className="text-sm text-black/60">Purple</p>
          </div>
          <div className="border border-black/8 rounded-lg p-6 flex flex-col items-center gap-3">
            <AnimatedArrow size={20} color="#ea7a5f" />
            <p className="text-sm text-black/60">Coral</p>
          </div>
        </div>
      </section>

      {/* Demo Section 4: On Dark Background */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-normal mb-6">On Dark Backgrounds</h2>
        <div className="bg-black rounded-lg p-12 space-y-6">
          <div className="flex items-center gap-3">
            <AnimatedArrow size={20} color="white" />
            <span className="text-white text-lg">White arrow on dark background</span>
          </div>
          <button className="px-6 py-3 bg-white text-black rounded-md flex items-center gap-2 hover:bg-white/90 transition-colors">
            <span>Get in touch</span>
            <AnimatedArrow size={18} color="black" />
          </button>
        </div>
      </section>

      {/* Demo Section 5: Speed Variations */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-normal mb-6">Animation Speed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={20} duration={150} />
            <p className="text-sm text-black/60">Fast (150ms)</p>
          </div>
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={20} duration={300} />
            <p className="text-sm text-black/60">Default (300ms)</p>
          </div>
          <div className="border border-black/8 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <AnimatedArrow size={20} duration={500} />
            <p className="text-sm text-black/60">Slow (500ms)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
