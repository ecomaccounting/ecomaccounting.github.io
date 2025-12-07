import HeroBanner from "@/components/HeroBanner";
import ServiceStacks from "@/components/ServiceStacks";
import TopReads from "@/components/TopReads"
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TopClients/>
      <ServiceStacks/>
      {/* <Services/> */}
       <TestimonialsTicker />
       <TopReads/>
    </>
  );
}