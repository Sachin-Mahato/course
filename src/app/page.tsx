import HeroSection from "../components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimoninalCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instrcutors from "@/components/Instructures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen mb-4 bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instrcutors />
      <Footer />
    </main>
  );
}
