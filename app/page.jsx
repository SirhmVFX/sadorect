import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import PastProjectsSection from "@/components/PastProjectsSection";
import ServiceSection from "@/components/ServicesSection";
import SoftwareSections from "@/components/SoftwareSections";
import StepsSection from "@/components/StepsSection";
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
        <FrequentlyAskedQuestions />
        <StepsSection />
        <ContactSection />
      </div>
    </>
  );
}
