import Services from "@/components/Services"
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Services | task360 – Simple Finance for eCommerce Businesses",

  description:
    "Explore services to simplify accounting, GST, compliance, and financial management for your eCommerce business. Trusted finance experts for online sellers.",

  keywords: [
    "book consultation",
    "free finance consultation",
    "ecommerce accounting",
    "gst compliance for ecommerce",
    "online seller accounting",
    "virtual cfo ecommerce",
    "task360",
  ],

  openGraph: {
    title: "Explore task360 Services | task360",
    description:
      "Talk to trusted finance & compliance experts for eCommerce businesses. Get clarity on GST, accounting, reconciliation, and growth strategy.",
    url: "https://task360.co/services",
    siteName: "task360",
    images: [
      {
        url: "https://task360.co/img/og/og-book-free-consultation.png",
        width: 1200,
        height: 630,
        alt: "Book Free Consultation – task360",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Explore task360 Services | task360",
    description:
      "Simplify finance, GST, and compliance for your eCommerce business. Explore task360 services.",
    images: ["https://task360.in/og/og-book-consultation.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto">
    <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
   <Services services={data.services} />
   </div>
  );
}
