import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServicesSection";
import SoftwareSections from "@/components/SoftwareSections";
import TestimonialSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="w-4/6 mx-auto">
        <FeaturesSection />
        <ServiceSection />
        <TestimonialSection />
        <SoftwareSections />
      </div>
    </>
  );
}
