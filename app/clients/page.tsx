
import Image from "next/image";
import ClientData from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import type { Metadata } from "next";
import type { Client } from "@/data/types";
import { Building2, Sofa, Stethoscope, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients",

  description:
    "Discover some of the amazing clients we've worked with — from eCommerce startups to established businesses across industries.",

  keywords: [
    "clients",
    "task360",
    "accounting clients",
    "eCommerce accounting",
    "tax clients",
    "business partners",
  ],

  openGraph: {
    title: "Our Clients | task360",
    description:
      "Discover some of the amazing clients we've worked with — from eCommerce startups to established businesses across industries.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/clients`,
    siteName: "task360",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`,
        width: 1200,
        height: 630,
        alt: "Our Clients – task360",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Clients | task360",
    description:
      "Discover some of the amazing clients we've worked with — from eCommerce startups to established businesses across industries.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const clients = ClientData.clients;

export default function ClientsPage() {

  return (
    <section
      id="clients"
      className=""
      aria-label="Our Clients"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="container mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Clients" }]} />
        {/* --- Heading --- */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl mb-4 font-semibold"
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

            <ClientItem client={client} key={client.id} />
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
function ClientItem({ client }: { client: Client }) {
  const hasLogo = client.logo && client.logo.length > 0;
  const clientIconMap: Record<string, React.ElementType> = {
    "Sofa": Sofa,
    "Stethoscope": Stethoscope,
    "User":User,
    default: Building2,
  };
  const Icon =
    clientIconMap[client.icon ?? "default"] ?? clientIconMap.default;
  return (
    <div
      key={client.id}
      className="bg-accent rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Logo */}
      <div className="w-full rounded-xl h-24 mx-auto mb-5 relative"
      style={{
          backgroundColor: client.bgColor.length <= 1 ? "transparent" : client.bgColor // ✅ selective bg
        }}>
        {hasLogo ? (
          <Image
            src={client.title.trim().toLowerCase() === "individual" ? `/img/clients/user.png` : `/img/clients/${client.logo}`}
            alt={`${client.name} logo`}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground pt-10">
            <Icon
              size={48}
              className="opacity-70 group-hover:opacity-100 transition-opacity
              transition-transform duration-300 group-hover:scale-110"
              aria-hidden
            />
            <span className="sr-only">{client.name}</span>
          </div>
        )}
      </div>

      {/* Name + Industry */}
      <h3 className="" itemProp="name">
        {client.name}
      </h3>
      <p className="text-blue-600 font-medium mb-3">
        {client.industry}
      </p>

      {/* Description */}
      <p className="" itemProp="description">
        {client.description}
      </p>
    </div>
  );
}
