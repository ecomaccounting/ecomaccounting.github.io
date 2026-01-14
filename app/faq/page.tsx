import Head from "next/head";
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description: "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | task360",
    description: "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",
    url: `/faq`
  },
  alternates: {
    canonical: `/faq`,
  },
};

const faqs = data.faqs;

export default function FAQPage() {


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQs for eCommerce Sellers | Accounting, GST & Compliance</title>
        <meta
          name="description"
          content="Frequently asked questions for eCommerce sellers covering accounting, GST, TDS/TCS, income tax, reconciliation, and compliance services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQs" }]} />
      <header className="text-center mb-10">
        <h1 className="">
          Frequently Asked Questions
        </h1>
        <p className=" max-w-2xl mx-auto">
          Answers to common questions eCommerce sellers ask about accounting, GST,
          compliance, and business growth.
        </p>
      </header>

      <FAQ faqs={faqs} />
    </>
  );
}
