import Link from 'next/link';

import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import ProgramCarousel from '../components/ProgramCarousel';
export default function Home() {
  return (
    
      
    <div>
    
    <Hero />
    <Features />
    <ProgramCarousel/>
    <CTA />
  </div>
  );
}
