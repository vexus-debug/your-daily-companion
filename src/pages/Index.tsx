import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryPreviewSection from "@/components/GalleryPreviewSection";
import LocationsSection from "@/components/LocationsSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TechnologySection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <LocationsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
