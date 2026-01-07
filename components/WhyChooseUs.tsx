import React from "react";

const reasons = [
  {
    title: "Pure eCommerce Focus",
    description:
      "We work exclusively with online sellers. Our systems, processes, and thinking are built for marketplace-led businesses — not generic accounting.",
  },
  {
    title: "Deep Marketplace Knowledge",
    description:
      "From Amazon and Flipkart to Meesho and D2C platforms, we understand settlement reports, fee structures, and platform-specific compliance in depth.",
  },
  {
    title: "Built for Complexity",
    description:
      "Multi-platform reconciliation, GST with TCS/TDS, and true profitability by channel — we turn operational complexity into financial clarity.",
  },
  {
    title: "Technology-Driven Execution",
    description:
      "Automated integrations, cloud-based access, and structured workflows ensure accuracy, speed, and complete visibility across your business.",
  },
  {
    title: "Partners in Growth",
    description:
      "We don’t just file returns. We anticipate issues, identify optimisation opportunities, and support you from first sale to scale.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-accent p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-3">
            Why Choose Task360
          </h2>
          <p className="max-w-2xl">
            We chose depth over breadth. By specialising exclusively in
            eCommerce, we deliver clarity, control, and confidence to online
            sellers navigating complex financial ecosystems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-light border border-[var(--border-color)] rounded-xl p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                <div>
                  <h3 className="font-medium mb-1  text-accent">
                    {item.title}
                  </h3>
                  <p className="">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 text-sm ">
          Not generalists. Not just service providers.{" "}
          <span className="text-accent font-medium">
            Focused specialists and long-term partners.
          </span>
        </div>
      </div>
    </section>
  );
}
