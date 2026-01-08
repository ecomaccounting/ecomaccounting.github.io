"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  TrendingUp,
  IndianRupee,
  MessageCircle,
  List,
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
    <section
      className="relative py-12"
      style={{ backgroundImage: "url('/img/hero/hero-bg-new.png')" }}
    ><h1 className="leading-tight">
              Simple Finance for eCommerce Sellers
            </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        
        <div className="space-y-10">
          <div className="space-y-4">
            

            <h2 className="text-xl md:text-2xl">
              Focus on growth — we handle your{" "}
              <span className="highlight inline-block min-w-[140px] text-center">
                {words[wordIndex]}
              </span>
            </h2>

            <p className="text-lg max-w-xl text-light">
              Specialized accounting, GST & compliance for Amazon, Flipkart and
              fast-growing online businesses.
            </p>
          </div>

          {/* Proof points */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-blue shrink-0" />
              <span>CA-led compliance built for eCommerce</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue shrink-0" />
              <span>Trusted by 500+ sellers across India</span>
            </div>

            <div className="flex items-center gap-3">
              <IndianRupee className="h-5 w-5 text-blue shrink-0" />
              <span>₹5 Cr+ marketplace transactions handled</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-consultation"
                className="button success font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Check What You Need (2 mins)
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="button secondary flex items-center justify-center gap-2"
              >
                <List className="h-5 w-5" />
                View Services
              </Link>
            </div>

            <p className="text-sm text-light">
              No spam • 2-minute flow • Talk to a real GST expert
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mr-4 ">
          <div className="bg-background border border-[var(--border-color)] rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Context header */}
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold">
                Why Marketplace Reconciliation Matters
              </h3>
              <p className="text-sm text-light">
                Understand deductions, GST & fees — and what actually reaches
                your bank.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer button ${
                    activeTab === tab ? "primary" : "secondary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <DashboardContent activeTab={activeTab} />
          </div>

          {/* Accent badge */}
          <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- */

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
          <span className="text-light">{row.label}</span>
          <span className="font-semibold">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
