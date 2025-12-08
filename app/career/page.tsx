import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/BreadcrumbItem";

export const metadata: Metadata = {
  title: "Careers | GPMJ & Associates",
  description:
    "Join GPMJ & Associates — a boutique Chartered Accountancy firm that values hands-on learning, professional growth, and client-focused excellence.",
  keywords: [
    "CA articleship",
    "CA internship",
    "GPMJ careers",
    "CA firm hiring",
    "CA Intermediate jobs",
    "articleship training",
  ],
};


export default function CareersPage() {
  return (
    <section
      id="careers"
      className=""
      aria-label="Career Opportunities at GPMJ & Associates"
      itemScope
      itemType="https://schema.org/JobPosting"
    >
      <div className="container mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Careers" }]} />
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl   mb-4"
            itemProp="title"
          >
            Careers at GPMJ & Associates
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join our dynamic team of professionals and gain real-world exposure
            across audit, taxation, compliance, and advisory.
          </p>
        </div>

        {/* --- Hiring Highlight Banner --- */}
        <div className="bg-accent rounded-2xl p-8 text-center mb-16 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            ✨ We Are Hiring! ✨
          </h2>
          <p className="text-lg">
            GPMJ & Associates, Indore, is looking for <strong>CA Interns</strong>{" "}
            and <strong>Article Assistants</strong> to join our team.
          </p>
          <p className="mt-4 text-sm opacity-90">
            Know someone who might be a good fit? Referrals are always welcome!
          </p>
        </div>

        {/* --- Job Description --- */}
        <article className="bg-accent rounded-2xl shadow-md p-8 md:p-12 leading-relaxed text-gray-800 space-y-8">
          {/* Section: Overview */}
          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              About the Role
            </h2>
            <p>
              Our boutique CA firm is looking for motivated and ambitious
              students who have cleared <strong>CA Intermediate</strong> to join
              us as <strong>Article Assistants</strong>.
            </p>
          </section>

          {/* Section: What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive audit assignments across diverse industries</li>
              <li>Direct taxation and GST compliance</li>
              <li>Financial statement preparation and analysis</li>
              <li>
                Management Information Systems (MIS) and business advisory
              </li>
              <li>Real client interaction from day one</li>
            </ul>
          </section>

          {/* Section: What Makes Us Different */}
          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              What Makes Us Different
            </h2>
            <p>
              We're a boutique practice that believes in quality over quantity.
              Our approach is client-centric — we work closely with businesses
              to understand their complete financial ecosystem and provide
              holistic solutions. You'll learn how accounting, compliance, and
              business strategy come together in the real world.
            </p>
          </section>

          {/* Section: Requirements */}
          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              What We're Looking For
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>CA Intermediate cleared candidates</li>
              <li>Strong analytical and communication skills</li>
              <li>Genuine interest in learning and professional growth</li>
              <li>Ability to work independently as well as in teams</li>
            </ul>
          </section>

          {/* Section: Duration */}
          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              Duration
            </h2>
            <p>
              Articleship as per <strong>ICAI requirements</strong>.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4 text-lg">
              If you're looking for articleship training that goes beyond the
              routine and prepares you for a successful career in practice or
              industry, we'd love to hear from you.
            </p>

            <Link
              href="mailto:support@ecomaccounting.com?subject=Articleship Application - GPMJ & Associates"
              className="inline-block  px-8 py-3 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
