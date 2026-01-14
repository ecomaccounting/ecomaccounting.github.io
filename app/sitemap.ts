export const dynamic = "force-static";
import type { ServiceItem } from "@/data/types";
import data from "@/data/data1.json";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // --- Category URLs ---
  const serviceUrls = data.services.map((srv: ServiceItem) => ({
    url: `${baseUrl}/services/${srv.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const userTypeUrls = data.mapping.map((srv) => ({
    url: `${baseUrl}/guided/${srv.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const caseStudiesUrls = data.caseStudies.map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));


  // --- Static pages ---
  const staticUrls = [
    "/",
    "/our-team",
    "/contact-us",
    "/clients",
    "/services",
    "/faq",
    "/pricing",
    "/case-studies",
    "/privacy-policy",
    "/terms-of-service"

  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // --- Combine all ---
  return [...staticUrls, ...serviceUrls, ...userTypeUrls, ...caseStudiesUrls];
}