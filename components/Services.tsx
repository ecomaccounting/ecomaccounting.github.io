"use client";
import { ServiceItem } from "@/data/types";
import Link from "next/link";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useState } from "react";

// 1. Create a separate component for the Card
function ServiceCard({ service }: { service: ServiceItem }) {
  const [open, setOpen] = useState(false); // Hook is now valid here

  const Icon = service.icon
    ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
    : FileText;

  return (
    <div className="bg p-6 rounded-xl shadow-md transition-all border border-default">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-full text-left p-4 group" // Added padding for better hit area
      >
        {/* TOP ROW: Icon + Heading + Chevron */}
        <div className="flex items-center gap-4 w-full">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 group-hover:bg-blue-600 transition-colors">
            <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
          </div>

          <h3 className="flex-1 text-lg font-semibold leading-snug">
            {service.name}
          </h3>

          {open ? <ChevronUp className="text-muted" /> : <ChevronDown className="text-muted" />}
        </div>

        {/* BOTTOM ROW: Full Width Description */}
        <div className="mt-3 w-full">
          <p className="leading-relaxed">
            {service.shortDescription ?? "Avoid compliance mistakes & stay audit-ready"}
          </p>
        </div>
      </button>

      {open && (
        <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-1">
          <ul className="space-y-2">
            {service.highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link href="/contact-us" className="success text-center py-2 px-3 rounded-lg text-sm font-semibold">
              Free Consultation
            </Link>
            <Link href={`/services/${service.id}`} className="primary text-center py-2 px-3 rounded-lg text-sm">
              Learn More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// 2. The Main Services Component
export default function Services({ services }: { services: ServiceItem[] }) {
  return (
    <section id="services" className="py-5" aria-label="Accounting and tax services">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services
            .filter((service) => service.id.length > 2)
            .map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </section>
  );
}