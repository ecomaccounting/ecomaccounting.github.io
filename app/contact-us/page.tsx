import type { Metadata } from "next";
import Breadcrumb from "@/components/BreadcrumbItem";
import Contact from "@/components/Contact"
import Consultation from "@/components/Consultation"

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Get in touch with task360 for accounting, GST, and compliance services. Call, email, or visit our office.",

  keywords: [
    "clients",
    "task360",
    "accounting clients",
    "eCommerce accounting",
    "tax clients",
    "business partners",
  ],

  openGraph: {
    title: "Contact Us | task360",
    description:
      "Get in touch with task360 for accounting, GST, and compliance services. Call, email, or visit our office.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    siteName: "task360",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`,
        width: 1200,
        height: 630,
        alt: "Contact Us – task360",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | task360",
    description:
      "Get in touch with task360 for accounting, GST, and compliance services. Call, email, or visit our office.",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/img/og/og-task360.png`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Contact/>
        <Consultation />        
      </div>
    </div>
  );
}