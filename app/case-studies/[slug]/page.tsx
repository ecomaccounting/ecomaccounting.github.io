// app/case-studies/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Highlight from "@/components/mdx/Highlight";
import Metrics from "@/components/mdx/Metrics";
import Testimonial from "@/components/mdx/Testimonial";
import data from "@/data/data1.json";
import SectionCard from "@/components/mdx/SectionCard";
import Timeline from "@/components/mdx/Timeline";
import Comparison from "@/components/mdx/Comparison";
import KeyTakeaways from "@/components/mdx/KeyTakeaways";

export async function generateStaticParams() {
    return data.caseStudies.map(c => ({
        slug: c.slug,
    }));
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

const CONTENT_DIR = path.join(process.cwd(), "case-studies");

function getCaseStudy(slug: string) {
    console.log(CONTENT_DIR);
    const folders = fs.readdirSync(CONTENT_DIR);
    console.log(folders);

    const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (fs.existsSync(fullPath)) {
        const file = fs.readFileSync(fullPath, "utf8");
        return matter(file);
    }
    return null;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getCaseStudy(slug);

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
