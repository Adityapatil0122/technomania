import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import WhyGreenEnergy from '../components/WhyGreenEnergy';
import AboutPreview from '../components/AboutPreview';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsShowcase from '../components/ProjectsShowcase';
import TestimonialSlider from '../components/TestimonialSlider';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsCounter />
      <WhyGreenEnergy />
      <AboutPreview />
      <ServicesGrid />
      <ProjectsShowcase />
      <TestimonialSlider />
      <CTASection />
    </PageTransition>
  );
}
