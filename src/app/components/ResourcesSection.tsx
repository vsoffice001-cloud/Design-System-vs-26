import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/Button';
import imgImageTheFutureOfAiInSupplyChainManagement from "figma:asset/52dc2d242efb6fec4b3045208719c859f0824631.png";
import imgImageBuildingResilientSupplyChainsIn2024 from "figma:asset/4fe63e827054e6912bad635b5391ff745e22d77f.png";
import imgImageWarehouseAutomationRoiAndImplementation from "figma:asset/a44aa28887331d03c4dafe9f372fdb0febcdaf66.png";
import imgImageDigitalTransformationInLogistics from "figma:asset/2b0467c7313458787fc41f08fd635142dde3ac18.png";
import imgImageSustainableTransportationSolutions from "figma:asset/62c347c2bc4229776df858579ceda831fbe8f8a2.png";
import imgImageIndustry40AndSmartManufacturing from "figma:asset/3537476d7254fe993352d1d092ac755b514bb596.png";
import imgImageOptimizingLastMileDelivery from "figma:asset/34997642bce0299c69bbed7c2bf1ad28601f1a57.png";
import imgImageBuildingHighPerformanceLogisticsTeams from "figma:asset/701feef993c39372216e98938187e7a5ba9e78d9.png";

interface Resource {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    image: imgImageTheFutureOfAiInSupplyChainManagement,
    category: "TECHNOLOGY",
    date: "Jan 15, '24",
    title: "The Future of AI in Supply Chain Management",
    description: "Exploring how artificial intelligence is revolutionizing logistics operations and predictive analytics."
  },
  {
    image: imgImageBuildingResilientSupplyChainsIn2024,
    category: "INSIGHTS",
    date: "Jan 12, '24",
    title: "Building Resilient Supply Chains in 2024",
    description: "Key strategies for creating agile and resilient logistics networks in an uncertain global economy."
  },
  {
    image: imgImageWarehouseAutomationRoiAndImplementation,
    category: "AUTOMATION",
    date: "Jan 10, '24",
    title: "Warehouse Automation: ROI and Implementation",
    description: "A comprehensive guide to implementing robotic systems and measuring their impact on operations."
  },
  {
    image: imgImageDigitalTransformationInLogistics,
    category: "STRATEGY",
    date: "Jan 8, '24",
    title: "Digital Transformation in Logistics",
    description: "How leading companies are leveraging digital tools to gain competitive advantages."
  },
  {
    image: imgImageSustainableTransportationSolutions,
    category: "SUSTAINABILITY",
    date: "Jan 5, '24",
    title: "Sustainable Transportation Solutions",
    description: "The shift to electric and hybrid fleets: challenges, opportunities, and environmental impact."
  },
  {
    image: imgImageIndustry40AndSmartManufacturing,
    category: "MANUFACTURING",
    date: "Jan 3, '24",
    title: "Industry 4.0 and Smart Manufacturing",
    description: "Integrating IoT and machine learning into production and distribution processes."
  },
  {
    image: imgImageOptimizingLastMileDelivery,
    category: "OPERATIONS",
    date: "Dec 30, '23",
    title: "Optimizing Last-Mile Delivery",
    description: "Innovative approaches to solving the most expensive part of the delivery chain."
  },
  {
    image: imgImageBuildingHighPerformanceLogisticsTeams,
    category: "LEADERSHIP",
    date: "Dec 28, '23",
    title: "Building High-Performance Logistics Teams",
    description: "Best practices for recruiting, training, and retaining top talent in the logistics industry."
  }
];

export function ResourcesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: 'var(--bg-pure-black)' }}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="font-medium text-white/40 uppercase tracking-[3px] mb-6 md:mb-8 block" style={{ fontSize: '14px' }}>
            Related Resources
          </span>
          
          <h2 className="leading-[1.15] font-light text-white tracking-tight mb-4 md:mb-6" style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.5rem, 4.5vw, var(--text-2xl))' }}>
            Industry Insights & Resources
          </h2>
          
          <p className="leading-[1.7] text-white/60 max-w-[700px]" style={{ fontSize: 'var(--text-sm)' }}>
            Expert perspectives and thought leadership on market intelligence, strategic consulting, and transformative business solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {resources.map((resource, index) => (
            <a
              key={index}
              href="#"
              className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-[2.5px] transition-all"
              aria-label={`Read article: ${resource.title}`}
            >
              <article>
                <div className="relative overflow-hidden rounded-[2.5px] mb-4 bg-white/5 aspect-[4/3]">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <div className="mb-3">
                  <span className="font-medium text-white/30 uppercase tracking-[1.5px] block mb-1" style={{ fontSize: 'var(--text-xs)' }}>
                    {resource.category}
                  </span>
                  <span className="text-white/40 block" style={{ fontSize: 'var(--text-xs)' }}>
                    {resource.date}
                  </span>
                </div>

                <h3 className="font-normal text-white leading-[1.35] tracking-tight mb-2 group-hover:text-white/80 transition-colors" style={{ fontSize: 'var(--text-sm)' }}>
                  {resource.title}
                </h3>

                <p className="leading-[1.6] text-white/50 group-hover:text-white/60 transition-colors" style={{ fontSize: 'var(--text-sm)' }}>
                  {resource.description}
                </p>
              </article>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />}
            iconPosition="right"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}