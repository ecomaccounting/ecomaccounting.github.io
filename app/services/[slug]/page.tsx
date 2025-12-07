import { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/data/servicesData.json";
import {ServiceItem} from "@/data/types";

// --- Generate static params for SSG ---
export async function generateStaticParams() {
  return servicesData.services.map((service: ServiceItem) => ({
    slug: service.id
  }));
}

// --- Generate SEO metadata dynamically ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find(
    (s:ServiceItem) => s.id=== slug
  );

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name}`,
    description: service.shortDescription?.substring(0, 160),
    keywords: [service.name],
    openGraph: {
      title: service.name,
      description: service.name,
      type: "article",
    },
  };
}

// --- Page Component ---
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.services.find(
    (s: ServiceItem) => s.id === slug
  );

  if (!service) return notFound();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* --- Header --- */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl  mb-4">
            {service.name}
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            {service.longDescription}
          </p>
        </header>

        {/* --- Highlights Section --- */}
        <div className="bg-accent shadow-md rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
            Key Highlights
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.highlights?.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 font-medium"
              >
                <span className="text-xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
