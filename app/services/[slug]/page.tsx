import { Metadata } from "next";
import { notFound } from "next/navigation";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import Link from "next/link";
import Breadcrumb from "@/components/BreadcrumbItem";
import * as LucideIcons from "lucide-react";
import Image from "next/image";


// --- Generate static params for SSG ---
export async function generateStaticParams() {
  return data.services.map((service: ServiceItem) => ({
    slug: service.id,
  }));
}

// --- Generate SEO metadata dynamically ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = data.services.find((s: ServiceItem) => s.id === slug);

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
  const service = data.services.find((s: ServiceItem) => s.id === slug);

  if (!service) return notFound();

  // Children services
  const childrenServices = data.services.filter(s => s.parentId === service.id);

  // Get parent icon
  const ParentIcon = service.icon
    ? (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
    : null;

  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />

        {/* Hero Banner Section */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <Image
            src={`/img/services/${service.id}.png`}
            alt={service.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <div className="relative max-w-4xl">
  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-lg -z-10"></div>

  <div className="flex items-center gap-4 mb-4">
    {ParentIcon && (
      <div className="p-3 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl">
        <ParentIcon className="w-8 h-8 text-white" />
      </div>
    )}
    <h1 className="text-4xl md:text-6xl font-bold text-white">
      {service.name}
    </h1>
  </div>

  {/* {service.shortDescription && (
    <p className="text-xl max-w-2xl text-white">
      {service.shortDescription}
    </p>
  )} */}
</div>
          </div>
        </div>

        {/* Long Description Section */}
        {service.longDescription && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-light rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg leading-relaxed opacity-90">{service.longDescription}</p>
            </div>
          </div>
        )}

        {/* Highlights Section */}
        {service.highlights?.length > 0 && (
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.highlights.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-6 bg-accent rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl text-primary">✓</span>
                  </div>
                  <p className="text-base font-medium pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Children Services Section */}
        {childrenServices.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our {service.name} Services</h2>
              <p className="text-lg opacity-75 max-w-2xl mx-auto">
                Explore our comprehensive range of services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {childrenServices.map((child, index) => {
                const ChildIcon = child.icon
                  ? (LucideIcons[child.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)
                  : null;

                const isEven = index % 2 === 0;

                return (
                  <div
                    key={child.id}
                    className="group"
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={`/img/services/${child.id}.png`}
                            alt={child.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 space-y-6">
                        <Link
                          href={`/services/${child.id}`}
                          className="inline-block"
                        >
                          <div className="flex items-center gap-4 mb-4 group-hover:text-primary transition-colors">
                            {ChildIcon && (
                              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                <ChildIcon className="w-7 h-7 text-primary" />
                              </div>
                            )}
                            <h3 className="text-3xl font-bold">{child.name}</h3>
                          </div>
                        </Link>

                        {/* Short description */}
                        {child.shortDescription && (
                          <p className="text-lg leading-relaxed opacity-90">
                            {child.shortDescription}
                          </p>
                        )}

                        {/* Highlights */}
                        {child.highlights?.length > 0 && (
                          <div className="space-y-3 pt-4">
                            {child.highlights.slice(0, 4).map((item, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                  <span className="text-sm text-primary">✓</span>
                                </div>
                                <p className="text-sm opacity-80">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <Link
                          href={`/services/${child.id}`}
                          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Learn More
                          <LucideIcons.ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Divider (except last item) */}
                    {index < childrenServices.length - 1 && (
                      <div className="mt-12 border-t border-border/50" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our {service.name.toLowerCase()} services can help your business grow
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us Today
              <LucideIcons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}