"use client";
import { ServiceItem } from "@/data/types";
import Link from "next/link";
import { FileText } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function Services({ services }: { services: ServiceItem[] }) {



  return (
    <section
      id="services"
      className="py-5"
      aria-label="Accounting and tax services offered by the firm">
      <div className="container mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center mb-14">
          <h2 className="">
            Services for eCommerce Sellers & Growing Businesses
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            From startup to scale-up, we handle accounting, GST, compliance, and advisory—so you can focus on growing your business.
          </p>
        </div>

        {/* --- Service Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.filter((service) => service.id.length > 2).map((service) => {
            const Icon = service.icon
              ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
              : FileText;

            return (
              <div
                key={service.name}
                // ADDED: flex flex-col
                className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group flex flex-col h-full"
              >
                <div className="mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    {Icon ? (
                      <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                    ) : (
                      <FileText className="h-8 w-8 text-blue-600" />
                    )}
                  </div>

                  <h3 className="">{service.name}</h3>
                  {service.shortDescription && (
                    <p className="mb-4 line-clamp-3">{service.shortDescription}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <ul className="list-disc pl-5 marker:text-accent">
                    {service.highlights.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* MODIFIED: mt-auto pushes this div to the bottom */}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/services/${service.id}`}
                    className="primary text-center block py-2 px-4 rounded-lg transition-colors"
                    title={`Click to learn more about ${service.name} service`}
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
