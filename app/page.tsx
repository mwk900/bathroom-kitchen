import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import ServicesSection from '@/components/landing/ServicesSection';
import ProjectShowcase from '@/components/landing/ProjectShowcase';
import ProcessTimeline from '@/components/landing/ProcessTimeline';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CoverageMap from '@/components/landing/CoverageMap';
import CTASection from '@/components/landing/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProjectShowcase />
      <ProcessTimeline />
      <TestimonialsSection />
      <CoverageMap />
      <CTASection />
    </>
  );
}
