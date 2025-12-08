
import { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/data/servicesData.json";
import { ServiceItem } from "@/data/types";
import Link from "next/link";
import Breadcrumb from "@/components/BreadcrumbItem";
import * as LucideIcons from "lucide-react";

// --- Generate static params for SSG ---
export async function generateStaticParams() {
  return servicesData.services.map((service: ServiceItem) => ({
    slug: service.id,
  }));
}

// --- Generate SEO metadata dynamically ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s: ServiceItem) => s.id === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.shortDescription?.substring(0, 160),
    keywords: [service.name],
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      type: "article",
    },
  };
}

// --- Page Component ---
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.services.find((s: ServiceItem) => s.id === slug);

  if (!service) return notFound();

  // Children services
  const childrenServices = servicesData.services.filter(s => s.parentId === service.id);

  return (
    <section className="">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
          {service.longDescription && (
            <p className="text-lg max-w-3xl mx-auto text-left">{service.longDescription}</p>
          )}
        </header>

        {/* Highlights */}
        {service.highlights?.length > 0 && (
          <div className="bg-accent shadow-md rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Key Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <span className="text-xl text-primary">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Children Services Grid */}
        {childrenServices.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {childrenServices.map(child => {
              const ChildIcon = child.icon
                ? (LucideIcons[child.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
                : null;

              return (
                <div
                  key={child.id}
                  className="bg-light p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition group"
                >
                  {/* Icon + Title */}
                  <Link
                    href={`/services/${child.id}`}
                    className="flex items-center gap-3 mb-4 group-hover:text-primary transition"
                  >
                    {ChildIcon && <ChildIcon className="w-5 h-5 text-primary transition" />}
                    <h3 className="text-xl font-semibold">{child.name}</h3>
                  </Link>

                  {/* Short description */}
                  {child.shortDescription && (
                    <p className="text-sm mb-4 line-clamp-3">{child.shortDescription}</p>
                  )}

                  {/* Highlights */}
                  {child.highlights?.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-sm ">
                      {child.highlights.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/services/${child.id}`}
                    className="inline-block mt-4 py-2 px-4 transition"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
