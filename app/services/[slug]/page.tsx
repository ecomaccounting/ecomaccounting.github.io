
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/Services/ServiceHero";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { ServiceItem } from "@/data/types";
import data from "@/data/data1.json";
import Link from "next/link";
import Breadcrumb from "@/components/common/BreadcrumbItem";
import FAQ from "@/components/common/FAQ";


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

  if (!service) return notFound();

  return {
    title: `${service.title}`,
    description: service.metaDescription,
    openGraph: {
      title: `Explore ${service.name} services | task360`,
      description: service.shortDescription,
      url: `/services/${service.id}`      
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

// --- Page Component ---
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = data.services.find((s: ServiceItem) => s.id === slug);
  if (!service) return notFound();

  const getLineage = (currentId: string | undefined, allServices: ServiceItem[]): ServiceItem[] => {
    if (!currentId) return [];
    const found = allServices.find(s => s.id === currentId);
    if (!found) return [];

    // Recursively find parents and combine them
    return [...getLineage(found.parentId, allServices), found];
  };
  const lineage = getLineage(slug, data.services);
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    ...lineage.map(srv => ({
      name: srv.name,
      href: srv.id === slug ? undefined : `/services/${srv.id}` // Disable link for current page
    }))
  ];

  const faqs = data.faqs.filter(faq => faq.serviceIds.includes(service.id));
  // Children services
  const childrenServices = data.services.filter(s => s.parentId === service.id);

  return (
    <section className="relative">
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />

        <div className="py-5 h-120">

          <ServiceHero
            service={service}
            variant="parent"
            className=""
            key={service.id}
          />
        </div>

        {service.longDescription && (
          <div className="py-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-light rounded-3xl p-8 md:p-12 shadow-md">
                <h2 className="">Overview</h2>
                <p className="text-lg leading-relaxed opacity-90">
                  {service.longDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Highlights Section */}
        {service.highlights?.length > 0 && (
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.longHighlights.map((item, i) => (
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
              <h2 className="">Our {service.name} Services</h2>
              <p className="text-lg opacity-75 max-w-2xl mx-auto">
                Explore our comprehensive range of services tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {childrenServices.map((child, index) => {

                const isEven = index % 2 === 0;

                return (
                  <div
                    key={child.id}
                    className="group"
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                      <div className="h-96 w-full lg:w-1/2">
                        <ServiceHero service={child} variant="child" className="" key={service.id} />
                      </div>
                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 space-y-6">


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
                                  <span className="text-primary">✓</span>
                                </div>
                                <p className="">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <Link
                          href={`/services/${child.id}`}
                          className="primary inline-flex rounded-xl items-center gap-2 mt-6 px-6 py-3  hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>
          </div>
        )}
        <header className="text-center mb-10">
          <h2 className="">
            Frequently Asked Questions
          </h2>
          <p className=" max-w-2xl mx-auto">
            Answers to common questions eCommerce sellers ask about accounting, GST,
            compliance, and business growth.
          </p>
        </header>
        <FAQ faqs={faqs} />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="">Ready to Get Started?</h2>
            <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our {service.name.toLowerCase()} services can help your business grow
            </p>
            <Link
              href="/contact-us"
              className="primary inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}