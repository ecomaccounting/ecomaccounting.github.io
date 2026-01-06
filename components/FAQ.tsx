"use client";

import { useState } from "react";
import { FAQItem } from "@/data/types";


export default function FAQ({faqs}: { faqs: FAQItem[] }   ) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq:FAQItem) => ({
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
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
                    {faqs.map((faq: FAQItem, index:number) => (
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

            </section>
        </>
    );
}
