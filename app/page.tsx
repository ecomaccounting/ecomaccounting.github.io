import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import TopReads from "@/components/TopReads"
import TestimonialsTicker from "@/components/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroBanner />
      
      <Services/>
       <TestimonialsTicker />
       <TopReads/>
    </>
  );
}