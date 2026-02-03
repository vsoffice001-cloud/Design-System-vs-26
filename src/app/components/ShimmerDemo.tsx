import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from '@/app/components/Button';

/**
 * SHIMMER EFFECT DEMO
 * ====================
 * Test page for the new shimmer gradient animation
 */

export function ShimmerDemo() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-normal mb-4">Shimmer Effect Demo</h1>
          <p className="text-lg text-black/70">
            Hover over buttons to see the gradient shine animation moving across them.
          </p>
        </div>

        {/* Brand Buttons with Shimmer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-normal">Brand Buttons (Red) with Shimmer</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-wrap gap-4">
              <Button variant="brand" size="xl">
                Extra Large Shimmer
              </Button>
              <Button variant="brand" size="lg" icon={<ArrowUpRight size={20} />}>
                Large with Icon
              </Button>
              <Button variant="brand" size="md">
                Medium Shimmer
              </Button>
              <Button variant="brand" size="sm">
                Small Shimmer
              </Button>
            </div>
          </div>
        </section>

        {/* Primary Buttons with Shimmer */}
        <section className="space-y-6">
          <h2 className="text-2xl font-normal">Primary Buttons (Black) with Shimmer</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="xl">
                Extra Large Shimmer
              </Button>
              <Button variant="primary" size="lg" icon={<Download size={20} />}>
                Large with Icon
              </Button>
              <Button variant="primary" size="md">
                Medium Shimmer
              </Button>
              <Button variant="primary" size="sm">
                Small Shimmer
              </Button>
            </div>
          </div>
        </section>

        {/* Custom Duration */}
        <section className="space-y-6">
          <h2 className="text-2xl font-normal">Custom Shimmer Durations</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-black/60 mb-2">Fast (400ms)</p>
                <Button variant="brand" size="lg" shimmerDuration={400}>
                  Fast Shimmer
                </Button>
              </div>
              <div>
                <p className="text-sm text-black/60 mb-2">Default (700ms)</p>
                <Button variant="brand" size="lg">
                  Default Shimmer
                </Button>
              </div>
              <div>
                <p className="text-sm text-black/60 mb-2">Slow (1200ms)</p>
                <Button variant="brand" size="lg" shimmerDuration={1200}>
                  Slow Shimmer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison: With vs Without */}
        <section className="space-y-6">
          <h2 className="text-2xl font-normal">All Buttons Have Shimmer</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-sm font-semibold mb-4 text-black/60">Brand Variant</h3>
              <div className="space-y-4">
                <Button variant="brand" size="lg" icon={<ArrowUpRight size={20} />}>
                  Schedule Demo
                </Button>
                <Button variant="primary" size="lg" icon={<Download size={20} />}>
                  Download Report
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-sm font-semibold mb-4 text-black/60">WITH SHIMMER ✨</h3>
              <div className="space-y-4">
                <Button variant="brand" size="lg" icon={<ArrowUpRight size={20} />}>
                  Schedule Demo
                </Button>
                <Button variant="primary" size="lg" icon={<Download size={20} />}>
                  Download Report
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
