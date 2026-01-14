import type { Metadata } from "next";
import Breadcrumb from "@/components/BreadcrumbItem";
import Contact from "@/components/Contact"
import Consultation from "@/components/Consultation"

export const metadata: Metadata = {
  title: "Contact Us | task360",
  description: "Get in touch with task360 for accounting, GST, and compliance services. Call, email, or visit our office.",
  openGraph: {
    title: "Contact Us | task360",
    description: "Get in touch with task360 for accounting, GST, and compliance services. Call, email, or visit our office.",
    url: `/contact-us`,
  },
  alternates: {
    canonical: `/contact-us`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Contact />
        <Consultation />
      </div>
    </div>
  );
}