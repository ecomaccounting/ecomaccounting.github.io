import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import TopReads from "@/components/TopReads"

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

export const metadata: Metadata = {
  title: "Blogs | Insights on eCommerce Accounting, GST & Compliance",
  description:
    "Explore expert blogs from GPMJ & Associates on accounting, GST, reconciliation, and financial best practices for eCommerce sellers in India.",
  keywords: [
    "eCommerce accounting",
    "GST compliance",
    "CA blog",
    "online seller finance",
    "tax filing",
    "bookkeeping",
  ],
};

export default function BlogsPage() {
  const blogs: Blog[] = blogsData.blogs;

  return (
    <section
      id="blogs"
      className="py-20"
      aria-label="Blog articles on eCommerce accounting and taxation"
    >
      <div className="container mx-auto px-6 md:px-12">
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
