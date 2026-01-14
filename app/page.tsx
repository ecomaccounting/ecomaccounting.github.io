import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopClients from "@/components/TopClients"
import TestimonialsTicker from "@/components/Testimonials";
import data from "@/data/data1.json";
import { ServiceItem } from "@/data/types";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorksStrip from "@/components/HowItWorksStrip";
import GuidedOnboarding from "@/components/GuidedOnboarding";
import CaseStudyCarousel from "@/components/CaseStudyCarousel1";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "task360 – Simple Finance for eCommerce & Growing Businesses",
  description: "Accounting, GST, tax & compliance services for eCommerce sellers and growing businesses. Focus on growth while we handle finance.",

  applicationName: "task360",

  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "eCommerce accounting",
    "GST services",
    "Financial services for online sellers",
    "bookkeeping services",
    "tax compliance India",
    "startup finance",
  ],

  authors: [{ name: "task360" }],
  creator: "task360",
  publisher: "task360",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    title: "task360",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    siteName: "task360",
    title: "task360 – Simple Finance for eCommerce & Growing Businesses",
    description:
      "Professional accounting, GST, tax & compliance services for eCommerce sellers and startups.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`,
        width: 1200,
        height: 630,
        alt: "task360 – Simple Finance for eCommerce & Growing Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "task360 – Simple Finance for eCommerce & Growing Businesses",
    description:
      "Accounting, GST, tax & compliance services for eCommerce sellers and startups.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `/`,
  },
};


export default function HomePage() {
  const services = data.services.filter((service) => service.parentId === "") as ServiceItem[];
  return (
    <div className="max-w-7xl mx-auto container">
      <Hero />
      <TopClients />
      <section className="py-10">
        <div className="mx-auto px-4 mb-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              How We’ve Helped Businesses Win
            </h2>
            <p className="text-light mt-2 max-w-2xl">
              Real case studies showing how startups and eCommerce sellers solved
              critical problems and scaled with confidence.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="text-accent font-semibold hover:underline whitespace-nowrap"
          >
            View all case studies →
          </Link>
        </div>
        <CaseStudyCarousel />
      </section>
      <HowItWorksStrip />
      <div className="text-center mb-14 py-10">
        <h2 className="">Services for eCommerce Sellers & Growing Businesses</h2>
        <p className="text-lg max-w-2xl ">
          From startup to scale-up, we handle accounting, GST, compliance, and advisory.
        </p>
      </div>
      <Services services={services} />
      <GuidedOnboarding />
      <WhyChooseUs />
      <TestimonialsTicker />



    </div >
  );
}