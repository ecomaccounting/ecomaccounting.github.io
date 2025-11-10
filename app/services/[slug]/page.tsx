import { Metadata } from "next";
import { notFound } from "next/navigation";
import servicesData from "@/app/Data/services.json";

interface Service {
  name: string;
  text: string;
  highlights: string[];
}

// Utility to generate a slug from the service name
function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

// --- Generate static params for SSG ---
export async function generateStaticParams() {
  return servicesData.services.map((service: Service) => ({
    slug: slugify(service.name),
  }));
}

// --- Generate SEO metadata dynamically ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find(
    (s: Service) => slugify(s.name) === slug
  );

  if (!service) {
    return { title: "Service Not Found | GPMJ & Associates" };
  }

  return {
    title: `${service.name} | GPMJ & Associates`,
    description: service.text.substring(0, 160),
    keywords: [...service.highlights, service.name, "CA Services", "Accounting", "GST", "Tax"],
    openGraph: {
      title: service.name,
      description: service.text,
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
    (s: Service) => slugify(s.name) === slug
  );

  if (!service) return notFound();

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* --- Header --- */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            {service.name}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {service.text}
          </p>
        </header>

        {/* --- Highlights Section --- */}
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
            Key Highlights
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <span className="text-blue-600 text-xl">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
