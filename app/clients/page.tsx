import { Metadata } from "next";
import Image from "next/image";
import ClientData from "@/data/data.json";

export const metadata: Metadata = {
  title: "Our Clients | GPMJ & Associates",
  description:
    "Discover some of the amazing clients we've worked with — from eCommerce startups to established businesses across industries.",
  keywords: [
    "clients",
    "GPMJ & Associates",
    "accounting clients",
    "eCommerce accounting",
    "tax clients",
    "business partners",
  ],
};
const clients = ClientData.clients;

export default function ClientsPage() {
  return (
    <section
      id="clients"
      className="py-20"
      aria-label="Our Clients"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* --- Heading --- */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl mb-4"
            itemProp="headline"
          >
            Our Clients
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Trusted by eCommerce entrepreneurs, startups, and established
            businesses across India.
          </p>
        </div>

        {/* --- Clients Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-accent rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group"
              itemScope
              itemType="https://schema.org/Organization"
            >
              {/* Logo */}
              <div className="w-24 h-24 mx-auto mb-5 relative">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Name + Industry */}
              <h3 className="text-xl font-semibold  mb-1" itemProp="name">
                {client.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {client.industry}
              </p>

              {/* Description */}
              <p className="text-sm" itemProp="description">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Footer line --- */}
        <div className="text-center mt-16 ">
          <p>
            Want to join our growing list of happy clients?{" "}
            <a
              href="/contact-us"
              className="text-blue-600 font-medium hover:underline"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
