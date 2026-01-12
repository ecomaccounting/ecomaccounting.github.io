import Link from "next/link";
import data from "@/data/data1.json"
const launchCaseStudies  = data.caseStudies.filter(c => c.Service==="Launch");
const operateCaseStudies  = data.caseStudies.filter(c => c.Service==="Operate");
const growCaseStudies  = data.caseStudies.filter(c => c.Service==="Grow");


export default function CaseStudiesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">eCommerce Seller Case Studies</h1>
        <p className="text-lg text-muted max-w-3xl">
          Real-world success stories showcasing how Task360 helps Amazon, Flipkart,
          Meesho, and D2C sellers launch, operate, and scale with confidence.
        </p>
        <p className="mt-4 text-sm text-muted">
          <strong>Format:</strong> Problem → Solution → Results
        </p>
      </header>

      {/* Launch */}
      <Section title="Launch – Building the Foundation" items={launchCaseStudies} />

      {/* Operate */}
      <Section title="Operate – Running Smoothly" items={operateCaseStudies} />

      {/* Grow */}
      <Section title="Grow – Scaling & Expansion" items={growCaseStudies} />
    </main>
  );
}

function Section({ title, items }: { title: string; items: { title: string; slug: string }[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <li
            key={item.slug}
            className="border border-border-color rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium mb-3">{item.title}</h3>
            <Link
              href={`/case-studies/${item.slug}`}
              className="text-accent font-medium"
            >
              Read Case Study →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
