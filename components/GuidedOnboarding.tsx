"use client";
import data from "@/data/data1.json"
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GuidedOnboarding() {
  return (
    <section className="py-20 px-4 bg-accent-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Let’s Personalize This for You
          </h2>
          <p className="mt-4 text-light text-base md:text-lg">
            What best describes you? This helps us show only the services
            relevant to your stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.mapping.map((item) => {
            //const Icon = item.icon;
            const Icon = (LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>)

            return (
              <Link
                key={item.title}
                href={`/guided/${item.slug}`}
                className={`
                  group rounded-2xl border p-6 
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  ${item.slug === "facing-a-notice" ? "border-red-200 hover:border-red-400" : "border-border"}
                `}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      rounded-xl p-3
                      ${item.slug === "facing-a-notice" ? "bg-red-50 text-red-600" : "bg-accent text-accent"}
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <ArrowRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-light leading-relaxed">
                  {item.description}
                </p>

                <span
                  className={`
                    mt-6 inline-block text-sm font-medium
                    ${item.slug === "facing-a-slug" ? "text-red-600" : "text-accent"}
                  `}
                >
                  Continue →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
