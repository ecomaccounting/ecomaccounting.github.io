"use client";

import { FileText, BookOpen, FileBarChart, Layers, CreditCard, Building2, Briefcase } from "lucide-react";
import data from "@/app/data.json";

interface Service {
  name: string;
  text: string;
  highlights: string[];
}

// Map service names to icons
const iconMap: Record<string, any> = {
  "GST Registration & Filing": FileText,
  "Bookkeeping & Accounting": BookOpen,
  "Income Tax Returns": FileBarChart,
  "Marketplace Reconciliation": Layers,
  "Payment Gateway Integration": CreditCard,
  "Business Registration": Building2,
  "Small Business": Briefcase,
};

export default function Services() {
  const services: Service[] = data.services;

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 text-gray-900"
      aria-label="Accounting and tax services offered by the firm"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive accounting and tax solutions designed for eCommerce and small businesses.
          </p>
        </div>

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = iconMap[service.name] || FileText;

            return (
              <div
                key={service.name}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* --- Icon and title --- */}
                <div className="mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.name}
                  </h3>
                  {service.text && (
                    <p className="text-gray-600 mb-4">{service.text}</p>
                  )}
                </div>

                {/* --- Highlights --- */}
                <div className="space-y-2">
                  {service.highlights.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* --- CTA --- */}
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
