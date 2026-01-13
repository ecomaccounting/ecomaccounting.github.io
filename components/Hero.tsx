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
const tabs = ["Amazon", "Flipkart", "Website"];

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
      className="relative py-12 px-4">
      <h1 className="leading-tight">
        Simple Finance for eCommerce Sellers
      </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-14 items-center">
        {/* LEFT */}

        <div className="space-y-10">
          <div className="space-y-4">


            <h2 className="text-xl md:text-2xl">
              Focus on growth — we handle your{" "}
              <span className="text-highlight underline inline-block min-w-[140px] text-left font-semibold">
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
                href="/contact-us"
                className="button ok pulse px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-7 w-7" />
                Check What You Need (2 mins)
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="button secondary px-6 py-4 rounded-2xl flex items-center justify-center gap-2"
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
        <div className="relative mr-4">
          <div className="bg border-default  rounded-2xl shadow-xl p-6 sm:p-8">
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
                  className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer button ${activeTab === tab ? "primary" : "secondary"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <DashboardContent activeTab={activeTab} />
          </div>

          {/* Accent badge */}
          <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg overflow-hidden">
            <TrendingUp
              className="h-5 w-5 animate-[trending-up_2s_infinite_ease-in-out]"
            />
          </div>

          {/* Add this to your Global CSS or a Tailwind config file */}
          <style jsx global>{`
  @keyframes trending-up {
    0%, 100% {
      transform: translate(0, 0);
      opacity: 1;
    }
    50% {
      transform: translate(2px, -4px);
      opacity: 0.8;
    }
  }
`}</style>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- */

function DashboardContent({ activeTab }: { activeTab: string }) {
  const data: Record<string, { label: string; value: string }[]> = {
    Amazon: [
      { label: "Sales", value: "₹1.5 Cr" },
      { label: "Commission", value: "₹22.5L (15%)" },
      { label: "Shipping", value: "₹9L" },
      { label: "Promotion", value: "₹4L" },
      { label: "Net Revenue", value: "₹1.145Cr" },
      { label: "Margin", value: "₹76.3%" },
    ],
    Flipkart: [
      { label: "Sales", value: "₹90L" },
      { label: "Commission", value: "₹10.8L (12%)" },
      { label: "Shipping", value: "₹5.4L" },
      { label: "Promotion", value: "₹2L" },
      { label: "Net Revenue", value: "₹71.8L" },
      { label: "Margin", value: "₹79.8%" },
    ],
    Meesho: [
      { label: "Sales", value: "₹45L" },
      { label: "Commission", value: "₹4.5L (10%)" },
      { label: "Shipping", value: "₹2.7L" },
      { label: "Promotion", value: "₹1.5L" },
      { label: "Net Revenue", value: "₹36.3L" },
      { label: "Margin", value: "₹80.7%" },
    ],
    "Website": [
      { label: "Sales", value: "₹15L" },
      { label: "Payment Gateway", value: "₹1.5L (3%)" },
      { label: "Shipping", value: "₹0.9L" },
      { label: "Net Revenue", value: "₹12.6L" },
      { label: "Margin", value: "₹84%" },
    ]
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
