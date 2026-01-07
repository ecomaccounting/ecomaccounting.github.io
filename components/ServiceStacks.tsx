"use client";

import servicesData from "@/data/data1.json";
import Link from "next/link";
import * as LucideIcons from "lucide-react"; // import all icons dynamically

export default function ServiceStacks() {
  const sections = servicesData.services.filter(srv => srv.parentId === "");

  return (
    <section id="services" className="py-16">
      <h2 className="text-4xl mb-8 text-center">Our Services</h2>
      <p className="text-lg max-w-2xl mx-auto text-center">
        Comprehensive accounting and tax solutions designed for eCommerce and small businesses.
      </p>

      {/* Horizontal scroll container with snap */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full px-4 py-10 scroll-smooth [&>*]:snap-start">
        {sections.map((section, index) => {
          const IconComp = section.icon
            ? (LucideIcons[section.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
            : null;

          return (
            <div key={index} className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] p-6 bg-accent rounded-lg shadow-sm">
              <Link href={`/services/${section.id}`} className="group flex items-center gap-2 mb-3">
                {/* Section Icon */}
                {IconComp && <IconComp className="w-5 h-5 transition" />}
                <h2 className="text-2xl">{section.name}</h2>
              </Link>

              <p className="max-w-2xl text-base mb-6">{section.shortDescription}</p>

              {/* Top 3 children */}
              <div className="flex flex-col gap-4">
                {servicesData.services
                  .filter(child => child.parentId === section.id)
                  .slice(0, 3)
                  .map((child, idx) => {
                    const ChildIcon = child.icon
                      ? (LucideIcons[child.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
                      : null;

                    return (
                      <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                        {/* Link wraps only icon + heading */}
                        <Link
                          href={`/services/${child.id}`}
                          className="group flex items-center gap-2"
                        >
                          {ChildIcon && (
                            <ChildIcon className="w-4 h-4  transition" />
                          )}
                          <h3 className="text-lg transition">{child.name}</h3>
                        </Link>

                        {/* Short description outside the link */}
                        <p className="text-sm text-gray-600 mt-1">{child.shortDescription}</p>
                      </div>
                    );
                  })}

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
