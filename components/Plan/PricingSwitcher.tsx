"use client";

import { useState } from "react";
import Plan from "./Plan"; // Adjust path
import CaseStudyNote from "./CaseStudyNote"; // Adjust path


export default function PricingSwitcher({ categories, pricingData }: { categories: any[], pricingData: any[] }) {
  const [active, setActive] = useState(0);

  const currentCategory = categories[active];
  const filteredPlans = pricingData.filter(p => p.categoryName === currentCategory.categoryName);

  return (
    <>
      {/* Mobile Tabs */}
      <div className="md:hidden sticky top-0 z-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <select
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            className="w-full rounded-lg border px-4 py-3 bg-secondary"
          >
            {categories.map((cat, i) => (
              <option key={cat.categoryName} value={i}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Tabs */}
      <section className="hidden md:block sticky top-0 z-20 bg-background border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.categoryName}
              onClick={() => setActive(i)}
              className={`button px-6 py-2 text-sm font-medium transition-colors ${
                active === i ? "primary" : "secondary"
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-3">{currentCategory.heading}</h2>
          <p className="text-light">{currentCategory.description}</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPlans.map((pkg) => (
            <Plan pkg={pkg} key={pkg.id} />
          ))}
        </div>
        
        {filteredPlans.length > 0 && (
          <CaseStudyNote pkg={filteredPlans[0]} />
        )}
      </section>
    </>
  );
}