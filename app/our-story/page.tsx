
import TestimonialsTicker from "@/components/Testimonials";
import Breadcrumb from "@/components/BreadcrumbItem";
import Image from "next/image";
import data from "@/data/data1.json"
import { TeamMember } from "@/data/types";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | task360 – Simple Finance for eCommerce Businesses",

  description:
    "Discover the journey of task360 and how we became experts in eCommerce accounting, GST, and compliance.",

  keywords: [
    "clients",
    "task360",
    "accounting clients",
    "eCommerce accounting",
    "tax clients",
    "business partners",
  ],

  openGraph: {
    title: "Our Story | task360",
    description:
      "Discover the journey of task360 and how we became experts in eCommerce accounting, GST, and compliance.",
    url: "https://task360.co/our-story",
    siteName: "task360",  
    images: [
      {
        url: "https://task360.co/img/og/og-book-free-consultation.png",
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
      "Discover the journey of task360 and how we became experts in eCommerce accounting, GST, and compliance.",
    images: ["https://task360.in/og/og-book-consultation.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};



export default function OurStoryPage() {
  const team: TeamMember[] = data.ourTeam;
  return (
    <div>
      <LocalBusinessSchema />
      <section
        id="about"
        className=""
        aria-label="About Task360"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto">

          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Our Story" }]} />
          {/* Hero Section */}
          <section className="bg-accent py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h1 className="">
                Our Story
              </h1>
              <p className="text-lg md:text-xl  max-w-3xl mx-auto">
                Why we chose to specialize — and why that decision changed everything.
              </p>
            </div>
          </section>

          {/* Why We Chose to Specialize */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="">Why We Chose to Specialize</h2>
              <p className="mb-4">
                We saw an opportunity. <span className="highlight">We went all in.</span>
              </p>
              <p className="mb-4">
                eCommerce was transforming India. Entrepreneurs were building remarkable businesses online. But the financial complexity was real.
              </p>
              <ul className="list-disc pl-6 space-y-2 ">
                <li>GST returns with marketplace‑specific TCS calculations</li>
                <li>Multi‑platform reconciliation across Amazon, Flipkart, Meesho</li>
                <li>Complex fee structures varying by category and platform</li>
                <li>Input tax credit optimization requiring deep platform knowledge</li>
              </ul>
              <p className="mt-6">
                Sellers needed more than accountants. They needed specialists who understood ROAS, conversion rates, and inventory turnover — not just balance sheets.
              </p>
            </div>
          </section>

          {/* Why Specialization */}
          <section className="bg-light py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="">Why Specialization?</h2>
              <p className="mb-4">
                The world rewards depth. We could serve every industry adequately — or serve eCommerce sellers exceptionally.
              </p>
              <p className="font-semibold mb-6">We chose exceptional.</p>
              <ul className="space-y-3">
                <li>→ Mastered marketplace settlement reports</li>
                <li>→ Built expertise in platform‑specific fee structures</li>
                <li>→ Developed specialized reconciliation systems</li>
                <li>→ Created eCommerce‑first compliance frameworks</li>
              </ul>
              <p className="mt-6">
                We didn’t adapt generic accounting practices. We built everything from the ground up for online sellers.
              </p>
            </div>
          </section>

          {/* Our Edge */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-center">Our Edge: Focused Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-accent rounded-2xl">
                  <h3 className="">Pure eCommerce Focus</h3>
                  <p className="">
                    100% of our practice is dedicated to online sellers. Every system, process, and team member is optimized for eCommerce.
                  </p>
                </div>
                <div className="p-6 bg-accent rounded-2xl">
                  <h3 className="">Deep Platform Knowledge</h3>
                  <p className="">
                    Amazon fee changes. Flipkart payment cycles. Meesho commission structures. We track it all.
                  </p>
                </div>
                <div className="p-6 bg-accent rounded-2xl">
                  <h3 className="">Technology Integration</h3>
                  <p className="">
                    Automated marketplace integrations, real‑time dashboards, and cloud‑based access across platforms.
                  </p>
                </div>
                <div className="p-6 bg-accent rounded-2xl">
                  <h3 className="text-xl font-semibold mb-2">Proactive Partnership</h3>
                  <p className="">
                    We identify opportunities early, flag compliance risks in advance, and plan growth before you ask.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Built */}
          <section className="bg-light py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="">What We Built</h2>
              <p className="mb-4">
                Task360 is more than accounting services. It’s a complete financial ecosystem for eCommerce sellers.
              </p>
              <ul className="space-y-3">
                <li>→ Accounting systems designed for marketplace complexity</li>
                <li>→ GST compliance for multi‑state selling</li>
                <li>→ Specialized TCS / TDS management</li>
                <li>→ Platform‑wise profitability analytics</li>
                <li>→ Growth advisory from scaling specialists</li>
              </ul>
            </div>
          </section>

          {/* Closing */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="">The Task360 Difference</h2>
              <p className="mb-4">We transform complexity into clarity.</p>
              <p className="mb-4">We turn compliance into competitive advantage.</p>
              <p className="mb-8">We partner with you from launch to leadership.</p>
              <p className="font-semibold">
                Not generalists. Specialists.<br />
                Not service providers. Growth partners.
              </p>
              <p className="mt-4 text-accent font-semibold">
                Task360 — Your Financial Command Center for eCommerce Success
              </p>
            </div>
          </section>
        </div>
      </section>
      <section
        id="our-team"
        className=""
        aria-label="Meet our Chartered Accountants and team members"
      >
        <div className="container mx-auto">

          <div className="text-center mb-16">
            <h1 className="">
              Our Team
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Experienced professionals committed to simplifying finance, taxation,
              and compliance for businesses across India.
            </p>
          </div>

          {/* --- Team Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <article
                key={member.memberName}
                className="bg-accent rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
                itemScope
                itemType="https://schema.org/Person"
              >
                {/* --- Image --- */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.memberName}`}
                    fill
                    className="
      object-cover
      object-top
      scale-[1.02]
    "
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* subtle edge softener */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/5 pointer-events-none" />
                </div>

                {/* --- Content --- */}
                <div className="flex flex-col flex-grow p-6 text-center md:text-left">
                  <h2
                    className="text-2xl font-semibold mb-3"
                    itemProp="name"
                  >
                    {member.memberName}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    itemProp="description"
                  >
                    {member.description.length > 400
                      ? member.description.slice(0, 400) + "..."
                      : member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsTicker />
    </div>
  );
}
