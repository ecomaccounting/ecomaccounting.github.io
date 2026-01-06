import { Metadata } from "next";
import Image from "next/image";
import blogsData from "@/data/data1.json";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadcrumbItem";
import {BlogPost} from "@/data/types"        


// --- Generate static paths for SSG ---
export async function generateStaticParams() {
  return blogsData.blog.map((blog: BlogPost) => ({
    slug: blog.slug,
  }));
}

// --- Generate metadata for SEO ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.blog.find((b: BlogPost) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found | GPMJ & Associates" };

  return {
    title: `${blog.title} | GPMJ & Associates`,
    description: blog.excerpt,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
      type: "article"
      
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

// --- Main Page Component ---
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ Unwrap the async params
  const blog = blogsData.blog.find((b: BlogPost) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <article
      className=""
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <div className="container mx-auto">
        <Breadcrumb items={[{ name: "Home", href: "/" }, 
          { name: "Blog", href:"/blog" },
          { name: blog.title },
          ]} />
        {/* --- Header Section --- */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            itemProp="headline"
          >
            {blog.title}
          </h1>
          <p className="text-sm">
            By{" "}
            <span
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name" className="font-semibold">
                {blog.author}
              </span>
            </span>            
          </p>
        </header>

        {/* --- Blog Image --- */}
        <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden mb-10 shadow-md">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- Blog Content --- */}
        <div
          className="prose lg:prose-lg mx-auto leading-relaxed"
          itemProp="articleBody"
        >
          {blog.content.split("\n").map((para, i) => (
            <p key={i} className="mb-6">
              {para}
            </p>
          ))}
        </div>

        
        <meta itemProp="image" content={blog.image} />
      </div>
    </article>
  );
}
