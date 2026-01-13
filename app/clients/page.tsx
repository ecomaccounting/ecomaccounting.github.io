
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
  alternates: {
    canonical: `/clients`,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

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
  const displayName = client.brandName || client.name;
  const clientIconMap: Record<string, React.ElementType> = {
    "Sofa": Sofa,
    "Stethoscope": Stethoscope,
    "User": User,
    default: Building2,
  };
  const Icon =
    clientIconMap[client.icon ?? "default"] ?? clientIconMap.default;

  return (
    <div
      className="group relative bg border border-default rounded-2xl p-8 transition-all hover:border-highlight hover:shadow-2xl hover:-translate-y-1"
      itemScope itemType="https://schema.org/Review"
    >

      <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold text-muted border border-default px-2 py-1 rounded">
        {client.industry}
      </span>

      {/* 2. Visual Anchor (Logo or Icon) */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden bg border-4 border-bg shadow-sm group-hover:scale-110 transition-transform"
        style={{ backgroundColor: client.bgColor }}
      >
        {client.logo ? (
          <Image
            src={`/img/clients/${client.logo}`}
            alt={`${displayName} success story`}
            width={80} height={80} className="object-contain p-2"
          />
        ) : (
          <Icon className="text-primary" size={40} />
        )}
      </div>

      {/* 3. Social Proof Content */}
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Organization">
        <h3 className="text-xl font-bold " itemProp="name">{displayName}</h3>
        <meta itemProp="legalName" content={client.name} />
      </div>

      {/* Short, punchy description for SEO keywords */}
      <p className="text-highlight font-semibold mb-4 italic">
        "{client.feedback}"
      </p>

      <p className="text-muted leading-relaxed mb-6">
        {client.description}
      </p>

      {/* 4. The Person Behind the Brand (Trust Factor) */}
      <div className="flex items-center gap-3 pt-6 border-t border-default">
        <div className="text-left">
          <p className="font-bold">{client.title}</p>
          <p className="text-muted">{client.position}</p>
        </div>
      </div>
    </div>
  );
}