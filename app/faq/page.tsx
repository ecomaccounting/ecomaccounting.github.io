import Head from "next/head";
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import FAQ from "@/components/FAQ";
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
