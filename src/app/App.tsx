import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DesignSystemDashboard } from '@/app/components/DesignSystemDashboard';
import { FigmaButtonComparison } from '@/app/components/FigmaButtonComparison';
import { ShimmerDemo } from '@/app/components/ShimmerDemo';
import { ArrowAnimationTest } from '@/app/components/ArrowAnimationTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Design System Dashboard Route */}
        <Route path="/" element={<DesignSystemDashboard />} />
        
        {/* Figma Comparison Tool */}
        <Route path="/figma-comparison" element={<FigmaButtonComparison />} />
        
        {/* Shimmer Effect Demo */}
        <Route path="/shimmer-demo" element={<ShimmerDemo />} />
        
        {/* Arrow Animation Test */}
        <Route path="/arrow-animation-test" element={<ArrowAnimationTest />} />
        
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;