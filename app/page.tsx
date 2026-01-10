import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import GuidedOnboarding from "@/components/GuidedOnboarding";


export default function HomePage() {
  const services = data.services.filter((service) => service.parentId === "") as ServiceItem[];
  return (
    <div className="max-w-7xl mx-auto container">
      <Hero />
      <HowItWorksStrip />
      <TopClients />
      <GuidedOnboarding />
      <div className="text-center mb-14">
        <h2 className="">Services for eCommerce Sellers & Growing Businesses</h2>
        <p className="text-lg max-w-2xl mx-auto">
          From startup to scale-up, we handle accounting, GST, compliance, and advisory.
        </p>
      </div>
      <Services services={services} />
      <WhyChooseUs />
      <TestimonialsTicker />


    </div >
  );
}