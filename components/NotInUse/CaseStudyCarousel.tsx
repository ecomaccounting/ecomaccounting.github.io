"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data1 from "@/data/data1.json";





export default function CaseStudyCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const userInteracted = useRef(false);
  const interval = 4000;
  const data = data1.caseStudies;

  const total = data.length;

  const goNext = () => {
    userInteracted.current = true;
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    userInteracted.current = true;
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (userInteracted.current) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interval, total]);

  const item = data[index];

  return (
    <section className="relative max-w-6xl mx-auto px-2">
      <div
        className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500">
        <div className="grid md:grid-cols-2 gap-6 items-center p-2 md:p-4">
          {/* Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={`/img/case-study/${item.slug}.png`}
              alt={item.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <span className="inline-block text-sm font-semibold text-accent">
              {item.Service}
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-dark">
              {item.title}
            </h3>

            <p className="text-lg text-light">
              {item.description}
            </p>

            <Link
              href={`/case-studies/${item.slug}/`}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              onClick={() => (userInteracted.current = true)}
            >
              Read full case study →
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 space-y-3">
        {/* Desktop controls */}
        <div className="hidden md:flex items-center justify-between">
          <button
            onClick={goPrev}
            aria-label="Previous case study"
            className="px-4 py-2 rounded-lg bg-accent-light text-accent font-medium"
          >
            ← Prev
          </button>

          <div className="flex gap-2">
            {data.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${i === index
                    ? "highlight scale-125"
                    : "bg-accent opacity-40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next case study"
            className="px-4 py-2 rounded-lg bg-accent-light text-accent font-medium"
          >
            Next →
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center justify-between">
          <button
            onClick={goPrev}
            aria-label="Previous case study"
            className="button secondary px-3 py-2 rounded-full bg-accent font-medium"
          >
            ←
          </button>

          <span className="text-sm text-light font-medium">
            {index + 1} / {data.length}
          </span>

          <button
            onClick={goNext}
            aria-label="Next case study"
            className="button secondary px-3 py-2 rounded-full bg-accent font-medium"
          >
            →
          </button>
        </div>
      </div>

    </section>
  );
}
