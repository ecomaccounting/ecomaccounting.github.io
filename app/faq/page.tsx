"use client";

import { useState } from "react";
import Head from "next/head";

const faqs = [
  {
    question: "What services do you provide specifically for eCommerce sellers?",
    answer:
      "We provide end-to-end services for eCommerce sellers including bookkeeping & accounting, GST registration and filing, TDS/TCS compliance, income tax returns, marketplace reconciliation, MIS & P&L analysis, Virtual CFO services, and business registrations. We work with sellers on Amazon, Flipkart, Meesho, Myntra, and other platforms.",
  },
  {
    question: "I'm just starting my eCommerce business. What registrations do I need?",
    answer:
      "You typically need business entity registration, GST registration, a current bank account, PAN, MSME registration (optional), and trademark registration. We handle the complete process for you seamlessly.",
  },
  {
    question: "Is GST registration mandatory for selling on Amazon or Flipkart?",
    answer:
      "Yes. GST registration is mandatory for inter-state sales and for selling on most eCommerce marketplaces, irrespective of turnover. It also allows you to claim input tax credit and stay compliant.",
  },
  {
    question: "What GST returns are applicable to eCommerce sellers?",
    answer:
      "ECommerce sellers generally file GSTR-1, GSTR-3B, annual GSTR-9, and if applicable GSTR-9C. Marketplaces file GSTR-8 for TCS. We manage all filings and reconciliations for you.",
  },
  {
    question: "Why is marketplace reconciliation important?",
    answer:
      "Reconciliation ensures that sales, returns, commissions, TCS, and actual bank receipts match marketplace reports and GST data. This prevents notices, missed credits, and incorrect profitability reporting.",
  },
  {
    question: "Do small eCommerce sellers also need professional bookkeeping?",
    answer:
      "Yes. Even small sellers benefit from proper bookkeeping for GST compliance, income tax filing, loan eligibility, and understanding real profitability. We offer affordable plans for every growth stage.",
  },
  {
    question: "Can you help if my past books or GST filings are pending?",
    answer:
      "Absolutely. We specialize in financial clean-up projects including reconstruction of books, reconciliation, and filing of pending GST returns and ITRs to bring you back to full compliance.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "You can start with a free consultation call. After understanding your needs, we share a proposal, onboard you, set up systems, and start managing your accounting and compliance end-to-end.",
  },
];

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
