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

function Section({ title, items }: { title: string; items: { title: string; slug: string; imageUrl: string }[] }) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {items.map((item) => (
          <Link 
            key={item.slug} 
            href={`/case-studies/${item.slug}`}
            className="group block no-underline"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-4">
              <img
                src={`/img/case-study/${item.slug}.png`}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted text-sm">{item.description1}</p>
              <span className="inline-flex items-center text-sm font-medium text-accent">
                Read full case Study
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
