import { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/data/servicesData.json";
import {ServiceItem} from "@/data/types";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  FileBarChart,
  Layers,
  CreditCard,
  Building2,
  Briefcase,
} from "lucide-react";


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
const services = servicesData.services.filter(s => s.parentId===service.id);
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

      {/* --- Service Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
          {services.map((service) => {
            //const Icon = iconMap[service.name] || FileText;
            //const slug = slugify(service.name);

            return (
              <div
                key={service.name}
                className="bg-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* --- Icon and title --- */}
                <div className="mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    {/* // <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" /> */}
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
                    {service.highlights?.slice(0, 3).map((item, i) => (
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


    </section>
  );
}
