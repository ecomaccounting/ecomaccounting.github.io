import { Metadata } from "next";
import Services from "@/components/Services"

export const metadata: Metadata = {
  title: "Contact Us | GPMJ & Associates",
  description:
    "Get in touch with GPMJ & Associates for accounting, GST, and compliance services. Call, email, or visit our Mumbai office.",
  keywords: [
    "contact GPMJ",
    "CA firm Mumbai",
    "accounting support",
    "GST help",
    "tax filing contact",
    "bookkeeping services",
  ],
};

export default function ServicesPage() {
  return (
   <Services></Services>
  );
}
