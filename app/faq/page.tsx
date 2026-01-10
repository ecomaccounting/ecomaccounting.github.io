import Head from "next/head";
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs)",

  description:
    "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",

  keywords: [
    "clients",
    "task360",
    "accounting clients",
    "eCommerce accounting",
    "tax clients",
    "business partners",
  ],

  openGraph: {
    title: "Frequently Asked Questions (FAQs) | task360",
    description:
      "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`,
    siteName: "task360",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`,
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions – task360",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | task360",
    description:
      "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`],
  },

  robots: {
    index: true,
    follow: true,
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
