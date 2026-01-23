import { MDXRemote } from "next-mdx-remote/rsc";
import Highlight from "@/components/mdx/Highlight";
import Metrics from "@/components/mdx/Metrics";
import Testimonial from "@/components/mdx/Testimonial";
import data from "@/data/data1.json";
import SectionCard from "@/components/mdx/SectionCard";
import Timeline from "@/components/mdx/Timeline";
import Comparison from "@/components/mdx/Comparison";
import KeyTakeaways from "@/components/mdx/KeyTakeaways";
import { Metadata } from "next";
import { CaseStudy } from "@/data/types";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";

export async function generateStaticParams() {
    return data.caseStudies.map(c => ({
        slug: c.slug,
    }));
}

// --- Generate SEO metadata dynamically ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = data.caseStudies.find((s: CaseStudy) => s.slug === slug);

  if (!cs) return notFound();

  return {
    title: `${cs.title}`,
    description: cs.description,
    openGraph: {
      title: `${cs.title}`,
      description: cs.description,
      url: `/case-studies/${cs.slug}`,      
    },    
    alternates: {
      canonical: `/case-studies/${slug}/`,
    },
  };
}

const components = {
    Highlight,
    Metrics,
    Testimonial,
    SectionCard,
    Timeline,
    Comparison,
    KeyTakeaways,
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getContent(slug);

    if (!data) {
        return <div className="p-16">Case study not found</div>;
    }

    const { content, data: frontmatter } = data;

    return (
        <main className="max-w-5xl mx-auto px-4 py-16">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
                <p className="text-muted max-w-xl">{frontmatter.description}</p>                
            </header>

            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote source={content} components={components} />
            </article>
        </main>
    );
}