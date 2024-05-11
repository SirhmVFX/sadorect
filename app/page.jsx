import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import PastProjectsSection from "@/components/PastProjectsSection";
import Products from "@/components/Products";
import ServiceSection from "@/components/ServicesSection";
import SoftwareSections from "@/components/SoftwareSections";
import StepsSection from "@/components/StepsSection";
import TestimonialSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="md:w-5/6 mx-auto">
        <FeaturesSection />
        <Products />
        <ServiceSection />
        <TestimonialSection />
        <SoftwareSections />
        <PastProjectsSection />
        <FrequentlyAskedQuestions />
        <StepsSection />
        <ContactSection />
      </div>
    </>
  );
}
