import Services from "@/components/Services"
import data from "@/data/data1.json";
import Breadcrumb from "@/components/BreadcrumbItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore task360 Services | task360",
  description: "Explore services to simplify accounting, GST, compliance, and financial management for your eCommerce business. Trusted finance experts for online sellers.",
  openGraph: {
    title: "Explore task360 Services",
    description:
      "Talk to trusted finance & compliance experts for eCommerce businesses. Get clarity on GST, accounting, reconciliation, and growth strategy.",
    url: `/services`,
  },
  alternates: {
    canonical: `/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <div className="text-center mb-14">
        <h1 className="">Services for eCommerce Sellers & Growing Businesses</h1>
        <p className="text-lg max-w-2xl mx-auto">
          From startup to scale-up, we handle accounting, GST, compliance, and advisory.
        </p>
      </div>
      <Services services={data.services} />
    </div>
  );
}
