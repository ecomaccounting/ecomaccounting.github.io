import { Metadata } from "next";
import TestimonialsTicker from "@/components/Testimonials";
import Breadcrumb from "@/components/BreadcrumbItem";
export const metadata: Metadata = {
  title: "About Us | GPMJ & Associates",
  description:
    "Your trusted partner for eCommerce success. We specialize in accounting, taxation, and compliance services tailored for online businesses.",
  keywords: [
    "About GPMJ",
    "CA firm for eCommerce",
    "eCommerce accounting",
    "GST compliance",
    "tax filing",
    "online seller bookkeeping",
  ],
};

// Static Data
const aboutData = {
  heading: "Your Trusted Partner for eCommerce Success",
  text: [
    "We specialize in providing comprehensive accounting and compliance services specifically designed for eCommerce sellers. Our team understands the unique challenges faced by online businesses and marketplace sellers.",
    "From GST compliance to marketplace reconciliation, we handle all your financial needs so you can focus on what you do best — growing your business.",
  ],
  highlights: [
    {
      text: "Certified Professionals",
      description: "Our team consists of qualified CAs and tax experts",
    },
    {
      text: "eCommerce Specialized",
      description: "Deep expertise in online marketplace operations",
    },
    {
      text: "24/7 Support",
      description: "Round-the-clock assistance for urgent queries",
    },
  ],
  testimonials: [
    {
      name: "Naman Naredi",
      title: "Paper Industry",
      feedback:
        "A good man and a great professionalist person in his work.",
    },
    {
      name: "Praneet Sisodiya",
      title:
        "HR / Sales / Growth - Coaching | Mentoring (Client since 2017)",
      feedback:
        "We are associated with CA Arpit Paliwal since 2017. His invaluable contribution, knowledge, and implementation make it all easy for us. Highly approachable and easy to work with. Strongly recommended!",
    },
  ],
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className=""
      aria-label="About Task360"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container mx-auto">
        
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        {/* --- Heading --- */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500"
            itemProp="headline"
          >
            {aboutData.heading}
          </h1>
          {aboutData.text.map((p, i) => (
            <p
              key={i}
              className="text-lg max-w-3xl mx-auto mb-4 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-500"
              itemProp="description"
            >
              {p}
            </p>
          ))}
        </div>

        {/* --- Highlights --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {aboutData.highlights.map((h, i) => (
            <div
              key={i}
              className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold  mb-3">
                {h.text}
              </h3>
              <p className="">{h.description}</p>
            </div>
          ))}
        </div>
        <TestimonialsTicker />

      </div>
    </section>
  );
}
