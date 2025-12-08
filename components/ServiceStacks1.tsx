"use client";

import servicesData from "@/data/servicesData.json";
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

      <div className="flex overflow-x-auto snap-x snap-mandatory w-full scroll-smooth">
  {sections.map((section, index) => {
    const Icon = section.icon
                ? (LucideIcons[section.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
                : null;
    const bg = section.banner; // add to JSON

    return (
      <div
        key={index}
        className="min-w-full h-[420px] relative snap-start rounded-2xl overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

        <div className="relative p-10 text-white max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="w-7 h-7" />}
            <h2 className="text-3xl font-semibold">{section.name}</h2>
          </div>

          <p className="text-lg opacity-90 mb-6">{section.shortDescription}</p>

          <ul className="space-y-2 mb-6">
            {servicesData.services
              .filter(child => child.parentId === section.id)
              .slice(0, 3)
              .map(child => (
                <li key={child.id} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  {child.name}
                </li>
              ))}
          </ul>

          <Link href={`/services/${section.id}`} className="px-5 py-2 bg-white text-black rounded-lg font-medium">
            Explore {section.name}
          </Link>
        </div>
      </div>
    );
  })}
</div>

    </section>
  );
}
