"use client";

import servicesData from "@/data/servicesData.json";
import Link from "next/link";

export default function ServiceStacks() {
  const sections = servicesData.services
  .filter(srv => srv.parentId === null);

  return (
    <section id="services" className="py-16">
      <h2 className="text-4xl mb-8 text-center">Our Services</h2>
      <p className="text-lg max-w-2xl mx-auto text-center">
        Comprehensive accounting and tax solutions designed for eCommerce and small businesses.
      </p>

      {/* SNAP SCROLL CONTAINER */}
      <div
        className="
          flex gap-6 overflow-x-auto
          snap-x snap-mandatory
          w-full px-4 py-10
          [&>*]:snap-start     /* Ensures snap always applies to children */
          scroll-smooth        /* Smooth scroll */
        "
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] p-6"
          >
            <Link href={`/services/${section.id}`}>
            <h2 className="text-2xl mb-3">{section.name}</h2>
</Link>

            <p className="max-w-2xl text-base mb-8">{section.shortDescription}</p>

            <div className="flex flex-col gap-6">
              {servicesData.services.filter(srv => srv.parentId===section.id)
              .slice(0, 3).map((child, idx) => (
                <Link key={idx} href={`/services/${child.id}`} className="group">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg group-hover:text-blue-600 transition">
                      {child.name}
                    </h3>
                    <p className="text-sm">{child.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
