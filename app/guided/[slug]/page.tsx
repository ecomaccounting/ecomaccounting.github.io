import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import data from "@/data/data1.json";

export async function generateStaticParams() {
  return data.mapping.map((user) => ({
    slug: user.slug,
  }));
}

export default async function GuidedUserPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  
  console.log(slug);

  const mapping = data.mapping.find(
    (m) => m.slug === slug
  );
  if (!mapping) notFound();

  const label = mapping.title;

  

  const faqIds = mapping.faqIds.split(",").map((id) => id.trim());
  const serviceIds = mapping.serviceIds.split(",").map((id) => id.trim());

  const services = data.services.filter((s) =>
    serviceIds.includes(s.id)
  );

  const faqs = data.faqs.filter((f) =>
    faqIds.includes(String(f.id))
  );

  const isUrgent = label === "Facing a Notice";

  return (
    <main className="pb-24">
      {/* HERO */}
      <section
        className={`py-20 px-4 ${
          isUrgent ? "bg-red-50" : "bg-accent-light"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6
              ${isUrgent ? "bg-red-100 text-red-700" : "bg-accent text-accent"}
            `}
          >
            {isUrgent ? (
              <ShieldAlert className="w-4 h-4" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Personalized for you
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {mapping.heading}
          </h1>

          <p className="mt-6 text-light text-base md:text-lg max-w-2xl mx-auto">
            {mapping.text}
          </p>

          {/* PRIMARY CTA */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/book-consultation"
              className={`primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium
                ${isUrgent ? "bg-red-600 hover:bg-red-700" : "bg-primary hover:bg-accent"}
              `}
            >
              Get Expert Guidance
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium hover:bg-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-20">
        <Services services={services} />
      </section>

      {/* FAQ */}
      <section className="mt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Common Questions at This Stage
            </h2>
            <p className="mt-4 text-light">
              These are the questions we’re most often asked by businesses like yours.
            </p>
          </div>

          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section
        className={`mt-24 py-16 px-4 ${
          isUrgent ? "bg-red-600" : "bg-primary"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center ">
          <h3 className="text-2xl md:text-3xl font-semibold">
            {mapping.ctaText}
          </h3>

          <p className="mt-4  max-w-2xl mx-auto">
            {mapping.ctaText}
          </p>

          <Link
            href="/book-consultation"
            className="success mt-8 inline-flex items-center gap-2   px-6 py-3 rounded-xl font-semibold "
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
