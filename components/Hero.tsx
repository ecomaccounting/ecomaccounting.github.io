"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const words = ["books", "taxes", "compliance"];
const tabs = ["Amazon", "Flipkart", "GST"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Amazon");

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-dark">
        Simple Finance for eCommerce & Growing Businesses
      </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-14 items-center">

        {/* LEFT: TEXT FIRST */}
        <div className="space-y-10">

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-dark">
              Focus on growing your online business while we handle your{" "}
              <span className="highlight inline-block min-w-[140px] text-center">
                {words[wordIndex]}
              </span>
            </h2>

            <p className="text-lg md:text-xl max-w-xl">
              Specialized accounting & compliance services for Amazon, Flipkart,
              and other marketplace sellers.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3">
            {[
              "GST Registration & Filing",
              "Marketplace Reconciliation",
              "Tax & Business Compliance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-dark">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="ok px-8 py-3 rounded-lg flex items-center justify-center gap-2 bg-primary text-white hover:bg-accent transition">
              Start Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="cancel border border-primary text-primary px-8 py-3 rounded-lg hover:bg-accent-light transition text-center"            >
              View Services
            </Link>
          </div>


        </div>

        {/* RIGHT: INTERACTIVE DASHBOARD */}
        <div className="relative">

          <div className="bg-background border border-[var(--border-color)] rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              {tabs.map((tab) => (
                <a
                  href={`#${tab}`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition
                    ${activeTab === tab
                      ? "ok"
                      : "cancel"
                    }`}
                >
                  {tab}
                </a>
              ))}
            </div>

            {/* Content */}
            <DashboardContent activeTab={activeTab} />
          </div>

          {/* Success badge */}
          <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- */
/* Sub Components               */
/* ---------------------------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold ">{value}</div>
      <div className="text-sm ">{label}</div>
    </div>
  );
}

function DashboardContent({ activeTab }: { activeTab: string }) {
  const data: Record<string, { label: string; value: string }[]> = {
    Amazon: [
      { label: "Amazon Sales", value: "₹2,45,000" },
      { label: "Fees & Ads", value: "₹38,000" },
      { label: "Net Settlement", value: "₹2,07,000" },
    ],
    Flipkart: [
      { label: "Flipkart Sales", value: "₹1,89,000" },
      { label: "Marketplace Fees", value: "₹29,000" },
      { label: "Net Settlement", value: "₹1,60,000" },
    ],
    GST: [
      { label: "GST Collected", value: "₹54,000" },
      { label: "ITC Available", value: "₹21,000" },
      { label: "GST Payable", value: "₹33,000" },
    ],
  };

  return (
    <div className="space-y-4">
      {data[activeTab].map((row) => (
        <div key={row.label} className="flex justify-between">
          <span className="">{row.label}</span>
          <span className="font-semibold text-dark">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
