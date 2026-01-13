import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import GuidedOnboarding from "@/components/GuidedOnboarding";
import CaseStudyCarousel from "@/components/CaseStudyCarousel1";
import Link from "next/link";


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
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              How We’ve Helped Businesses Win
            </h2>
            <p className="text-light mt-2 max-w-2xl">
              Real case studies showing how startups and eCommerce sellers solved
              critical problems and scaled with confidence.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="text-accent font-semibold hover:underline whitespace-nowrap"
          >
            View all case studies →
          </Link>
        </div>

        <CaseStudyCarousel />
        
      </section>


    </div >
  );
}