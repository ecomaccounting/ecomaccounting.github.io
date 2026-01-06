"use client";

import { useState } from "react";
import Head from "next/head";
import data from "@/data/data1.json";
const faqs = data.faqs;

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

      <section className="max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-light max-w-2xl mx-auto">
            Answers to common questions eCommerce sellers ask about accounting, GST,
            compliance, and business growth.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[var(--border-color)] rounded-2xl overflow-hidden bg-light"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-dark"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="text-accent text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-light leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-accent-light rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-dark mb-3">
            Still have questions?
          </h2>
          <p className="text-light mb-5">
            Book a free consultation and get expert guidance tailored to your
            eCommerce business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-medium hover:bg-[var(--accent)]"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
