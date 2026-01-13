"use client"
import { useState } from "react";
import data from "@/data/data1.json";
import { ServicePackage } from "@/data/types";
import Plan from "@/components/Plan/Plan";
import CaseStudyNote from "@/components/Plan/CaseStudyNote";

const groupedData = data.pricing.reduce((acc, current) => {
  // Check if we have already processed this category
  if (!acc[current.categoryName]) {
    acc[current.categoryName] = {
      categoryName: current.categoryName,
      heading: current.heading,
      description: current.description,
      // You can add other 'top 1' fields here
    };
  }
  return acc;
}, {} as Record<string, Partial<ServicePackage>>);

// Convert the object back into an array of unique categories
const categories = Object.values(groupedData);

//const categories = pricing.;

export default function PlansPage() {
  const [active, setActive] = useState(0);

  return (
    <main className="">
      {/* Hero */}
      <section className="bg-accent py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="max-w-3xl mx-auto text-lg text-light">
          Choose the perfect plan for your business stage. All plans include expert support and proven processes that have helped sellers scale to ₹50+ Cr.
        </p>
      </section>

      {/* Tabs */}
      {/* Mobile */}
      <div className="md:hidden sticky top-0 z-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <select
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            className="w-full rounded-lg border px-4 py-3 text-sm bg-secondary"
          >
            {categories.map((cat, i) => (
              <option key={cat.categoryName} value={i}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop */}
      <section className="hidden md:block sticky top-0 z-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.categoryName}
              onClick={() => setActive(i)}
              className={`button px-6 py-2 text-sm font-medium ${active === i ? "primary" : "secondary"
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
          <h2 className="text-3xl font-semibold mb-3">{categories[active].heading}</h2>
          <p className="text-light">{categories[active].description}</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.pricing.filter(p => p.categoryName == categories[active].categoryName)
            .map((pkg) => (
              <Plan pkg={pkg} key={pkg.id} />
            ))}
        </div>
        <CaseStudyNote pkg={data.pricing.filter(p => p.categoryName == categories[active].categoryName)[0]} key={1}/>
      </section>
    </main>
  );
}



