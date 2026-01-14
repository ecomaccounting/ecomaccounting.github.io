import data from "@/data/data1.json";
import { ServicePackage } from "@/data/types";

import FAQ from "@/components/common/FAQ";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PricingSwitcher from "@/components/Plan/PricingSwitcher";

export const metadata: Metadata = {
  title: "Transparent Pricing for Business & Compliance Services",
  description: "Simple, transparent pricing for business setup, tax filings, accounting, and compliance services. No hidden fees. Built for startups and online sellers.",
  openGraph: {
    title: "Transparent Pricing for Business & Compliance Services",
    description: "Simple, transparent pricing for business setup, tax filings, accounting, and compliance services. No hidden fees. Built for startups and online sellers.",
    url: `/services`,
  },
  alternates: {
    canonical: `/pricing`,
  },
};

const groupedData = data.pricing.reduce((acc, current) => {
  // Check if we have already processed this category
  if (!acc[current.categoryName]) {
    acc[current.categoryName] = {
      categoryName: current.categoryName,
      heading: current.heading,
      description: current.description,
      // You can add other 'top 1' fields here
    };
  }
  return acc;
}, {} as Record<string, Partial<ServicePackage>>);

// Convert the object back into an array of unique categories
const categories = Object.values(groupedData);



export default function PlansPage() {
  const faqs = data.faqs.filter(faq => faq.relatedTo == "Pricing");

  return (
    <main className="">
      {/* Hero */}
      <section className="bg-accent py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="max-w-3xl mx-auto text-lg text-light">
          Choose the perfect plan for your business stage. All plans include expert support and proven processes that have helped sellers scale to ₹50+ Cr.
        </p>
      </section>

      <PricingSwitcher categories={categories} pricingData={data.pricing} />

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-accent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="">Need multiple Services?</h2>
          <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
            We can create a custom package combining multiple strategic services at a bundled price.
          </p>
          <Link
            href="/contact-us"
            className="primary inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/*FAQs*/}
      <header className="text-center mb-10">
        <h2 className="">
          Frequently Asked Questions
        </h2>
        <p className=" max-w-2xl mx-auto">
          Answers to common questions eCommerce sellers ask about accounting, GST,
          compliance, and business growth.
        </p>
      </header>
      <FAQ faqs={faqs} />
    </main>
  );
}



