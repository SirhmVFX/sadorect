import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import PastProjectsSection from "@/components/PastProjectsSection";
import ServiceSection from "@/components/ServicesSection";
import SoftwareSections from "@/components/SoftwareSections";
import TestimonialSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="w-5/6 mx-auto">
        <FeaturesSection />
        <ServiceSection />
        <TestimonialSection />
        <SoftwareSections />
        <PastProjectsSection />
        <GetStartedSection />
      </div>
    </>
  );
}
