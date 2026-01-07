import Head from "next/head";
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | task360 – Simple Finance for eCommerce Businesses",

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
    url: "https://task360.co/faq",
    siteName: "task360",
    images: [
      {
        url: "https://task360.co/img/og/og-book-free-consultation.png",
        width: 1200,
        height: 630,
        alt: "Contact Us – task360",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | task360",
    description:
      "Get answers to your questions about accounting, GST, and compliance services for eCommerce businesses.",
    images: ["https://task360.in/og/og-book-consultation.png"],
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
      <FAQ faqs={faqs} /> 
    </>
  );
}
