"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Layers,
  Settings,
  Cpu,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const reasons = [
  {
    title: "Pure eCommerce Focus",
    icon: ShoppingCart,
    summary: "We work only with online sellers.",
    description:
      "Our systems, processes, and thinking are built specifically for marketplace-led businesses — not generic accounting.",
    highlights: [
      "Marketplace-first accounting logic",
      "eCommerce-specific compliance handling",
      "No offline / legacy business assumptions",
    ],
  },
  {
    title: "Deep Marketplace Knowledge",
    icon: Layers,
    summary: "We understand how platforms actually work.",
    description:
      "From Amazon and Flipkart to Meesho and D2C platforms, we understand settlement reports, fee structures, and platform-specific compliance in depth.",
  },
  {
    title: "Built for Complexity",
    icon: Settings,
    summary: "We simplify what most CAs avoid.",
    description:
      "Multi-platform reconciliation, GST with TCS/TDS, and true profitability by channel — we turn operational complexity into financial clarity.",
  },
  {
    title: "Technology-Driven Execution",
    icon: Cpu,
    summary: "Automation where it matters.",
    description:
      "Automated integrations, cloud-based access, and structured workflows ensure accuracy, speed, and complete visibility across your business.",
  },
  {
    title: "Partners in Growth",
    icon: TrendingUp,
    summary: "Not just compliance — direction.",
    description:
      "We don’t just file returns. We anticipate issues, identify optimisation opportunities, and support you from first sale to scale.",
  },
];

function ReasonCard({ item }: any) {
  const [open, setOpen] = useState(false);
  const [deepOpen, setDeepOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div className="bg border border-default rounded-xl p-4 shadow-sm m-2">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 text-left cursor-pointer"
      >
        <div className="mt-1 text-accent">
          <Icon size={22} />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-accent">{item.title}</h3>
          <p className="">{item.summary}</p>
        </div>

        <ChevronDown
          size={18}
          className={`mt-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded content */}
      {open && (
        <div className="m-4 pl-9 space-y-3">
          <p>{item.description}</p>

          {/* Optional deep exploration */}
          {item.highlights && (
            <div>
              <button
                onClick={() => setDeepOpen(!deepOpen)}
                className="text-accent font-medium inline-flex items-center gap-1"
              >
                Explore focus areas
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    deepOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {deepOpen && (
                <ul className="mt-2 list-disc pl-5 space-y-1 text-light">
                  {item.highlights.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-light p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2>Why Choose task360?</h2>
          <p className="max-w-2xl">
            We chose depth over breadth. By specialising exclusively in
            eCommerce, we deliver clarity, control, and confidence to online
            sellers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-2 md:grid-cols-2">
          {reasons.map((item, index) => (
            <ReasonCard key={index} item={item} />
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 text-sm">
          Not generalists. Not just service providers.{" "}
          <span className="text-accent font-medium">
            Focused specialists and long-term partners.
          </span>
        </div>
      </div>
    </section>
  );
}
