import Hero from "@/components/home/Hero";
import Services from "@/components/Services/Services";
import TopClients from "@/components/home/TopClients"
import TestimonialsTicker from "@/components/home/Testimonials";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorksStrip from "@/components/home/HowItWorksStrip";
import GuidedOnboarding from "@/components/home/GuidedOnboarding";
import CaseStudyCarousel from "@/components/home/CaseStudyCarousel1";
import Link from "next/link";

export default function HomePage() {
  const services = data.services.filter((service) => service.parentId === "") as ServiceItem[];
  return (
    <div className="max-w-7xl mx-auto container">
      <Hero />
      <TopClients />
      <section className="py-6">
        <div className="mx-auto px-4 mb-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              How We’ve Helped Businesses Win
            </h2>
            <p className="text-light mt-2 w-full text-center">
              Real case studies showing how startups and eCommerce sellers solved
              critical problems and scaled with confidence.
            </p>
          </div>

        
        </div>
        <CaseStudyCarousel />
        <div className="my-2 items-center mx-auto flex w-full justify-center">
          <Link
            href="/case-studies"
            className="my-4 py-4 text-center text-accent font-semibold hover:underline whitespace-nowrap"
          >
            View all case studies →
          </Link>
          </div>
      </section>
      <HowItWorksStrip />
      <div className="text-center py-10">
        <h2 className="">Services for eCommerce Sellers & Growing Businesses</h2>
        <p className="text-lg text-center">
          From startup to scale-up, we handle accounting, GST, compliance, and advisory.
        </p>
      </div>
      <Services services={services} />
      <GuidedOnboarding />
      <WhyChooseUs />
      <TestimonialsTicker />
    </div >
  );
}