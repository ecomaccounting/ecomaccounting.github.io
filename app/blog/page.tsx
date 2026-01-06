import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/data1.json";
import TopReads from "@/components/TopReads"
import Breadcrumb from "@/components/BreadcrumbItem";

        


export const metadata: Metadata = {
  title: "Blogs | Insights on eCommerce Accounting, GST & Compliance",
  description:
    "Explore expert blogs from Task360 on accounting, GST, reconciliation, and financial best practices for eCommerce sellers in India.",
  keywords: [
    "eCommerce accounting",
    "GST compliance",
    "online seller finance",
    "tax filing",
    "bookkeeping",
  ],
};

export default function BlogsPage() {
  return (
    <section
      id="blogs"
      className=""
      aria-label="Blog articles on eCommerce accounting and taxation"
    >      
      <div className="container mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">
            Our Blog
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay informed with insights and expert articles on accounting, GST,
            and compliance for eCommerce sellers.
          </p>
        </div>

       <TopReads/>
      </div>
    </section>
  );
}
