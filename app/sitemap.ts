export const dynamic = "force-static";

// app/sitemap.ts

import type { ServiceItem } from "@/data/types";
import data from "@/data/data1.json";
import blogData from "@/data/blog.json";
import {BlogPost} from "@/data/types";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // --- Category URLs ---
  const serviceUrls = data.services.map((srv: ServiceItem) => ({
    url: `${baseUrl}/services/${srv.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));  
  
  // --- Blogs URLs ---
  // const blogsUrls = blogData.blogPosts.map((b: BlogPost) => ({
  //   url: `${baseUrl}/blog/${b.slug}`,
  //   lastModified: new Date().toISOString(),
  //   changeFrequency: "weekly",
  //   priority: 0.7,
  // }));

  // --- Static pages ---
  const staticUrls = [
    "/",
    "/about",
    "/blog",
    "/contact-us",
    "/career",
    "/clients",
    "/our-team",
    "/services",

  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // --- Combine all ---
  return [...staticUrls, ...serviceUrls];
}