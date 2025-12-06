import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import TopReads from "@/components/TopReads"
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TopClients/>
      <Services/>
       <TestimonialsTicker />
       <TopReads/>
    </>
  );
}