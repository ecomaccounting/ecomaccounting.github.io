import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopReads from "@/components/TopReads"
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function HomePage() {
  const services = data.services.filter((service) => service.parentId === "") as ServiceItem[];
  return (
    <>
      <Hero />
      <TopClients/>
      {/* <ServiceStacks/> */}
      <Services services={services} />
      <WhyChooseUs />
       <TestimonialsTicker />
       
    </>
  );
}