import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app/components/Button';

/**
 * ARROW ANIMATION TEST
 * Simple test component to verify arrow animation works
 */

export function ArrowAnimationTest() {
  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Arrow Animation Test</h1>
          <p className="text-black/60">Hover over the buttons to see the arrow animation</p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Brand Variant with Arrow Animation</h2>
            <div className="flex gap-4">
              <Button 
                variant="brand" 
                size="xl" 
                animatedArrow
              >
                Get Started Free
              </Button>
              <Button 
                variant="brand" 
                size="lg" 
                animatedArrow
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Primary Variant with Arrow Animation</h2>
            <div className="flex gap-4">
              <Button 
                variant="primary" 
                size="xl" 
                animatedArrow
              >
                Start Application
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                animatedArrow
              >
                Book Consultation
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Without Arrow Animation (Regular)</h2>
            <div className="flex gap-4">
              <Button 
                variant="brand" 
                size="lg" 
                icon={<ArrowUpRight size={20} />}
              >
                Regular Brand Button
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowUpRight size={20} />}
              >
                Regular Primary Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
