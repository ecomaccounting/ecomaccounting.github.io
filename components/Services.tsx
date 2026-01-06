"use client";
import {ServiceItem} from "@/data/types";
import Link from "next/link";
import {  FileText} from "lucide-react";
import { iconMap } from "@/data/types";

export default function Services({ services }: { services: ServiceItem[] }) {  

  // Map service names to icons

  return (
    <section
      id="services"
      className="py-5"
      aria-label="Accounting and tax services offered by the firm"
    >
      <div className="container mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-14">
          <h2 className="text-4xl mb-4 ">
            Our Services
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            Comprehensive accounting and tax solutions designed for eCommerce and small businesses.
          </p>
        </div>

        {/* --- Service Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = iconMap[service.name] || FileText;
            return (
              <div
                key={service.name}
                className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* --- Icon and title --- */}
                <div className="mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl  mb-3">
                    {service.name}
                  </h3>
                  {service.shortDescription && (
                    <p className="mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>
                  )}
                </div>

                {/* --- Highlights --- */}
                <div className="space-y-2">
                  <ul className="list-disc pl-5 marker:text-accent">
                    {service.highlights.slice(0, 3).map((item:string, i:number) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- CTA (Link) --- */}
                <div className="mt-6">
                  <Link
                    href={`/services/${service.id}`}
                    className="block  py-2 px-4 rounded-lg  transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
