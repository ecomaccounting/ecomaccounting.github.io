"use client";

import { useEffect, useState } from "react";
import {
  UploadCloud,
  FileCheck2,
  Smile,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const STEPS = [
  {
    title: "Share your data",
    description:
      "Upload your reports, invoices, or grant us secure access. No chaos, no confusion.",
    icon: UploadCloud,
  },
  {
    title: "We reconcile & file",
    description:
      "We handle bookkeeping, GST, compliance, and reconciliations accurately and on time.",
    icon: FileCheck2,
  },
  {
    title: "You get clarity & peace",
    description:
      "Clean numbers, zero surprises, and confidence to grow your business.",
    icon: Smile,
  },
];

const AUTO_DELAY = 3000;

export default function HowItWorksStrip() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setActive((a) => (a + 1) % STEPS.length);
  const prev = () => setActive((a) => (a - 1 + STEPS.length) % STEPS.length);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, AUTO_DELAY);
    return () => clearTimeout(id);
  }, [active, paused]);

  

  return (
    <section
      className="bg-accent-light py-10 px-4"


    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            Simple Process
          </p>
          <h2 className="mt-2">How It Works</h2>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === active;

            return (
              <button
                key={step.title}
                onClick={() => { setActive(index); setPaused(true); }}
                className={`border border-default rounded-2xl shadow-2xl p-6 text-left transition-all scale-[1.02]
                  ${isActive
                    ? "bg-accent shadow-xl border-accent "
                    : "bg hover:bg-accent"
                  }`}
              >
                <span className={`absolute right-4 top-4 text-sm font-semibold transition`} > Step {index + 1} </span>
                <Icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-light">{step.description}</p>
              </button>
            );
          })}
        </div>

        {/* MOBILE STACKED DECK */}
        <div className="relative md:hidden h-[260px]">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const offset = (index - active + STEPS.length) % STEPS.length;

            if (offset > 2) return null;

            return (
              <button
                key={step.title}
                onClick={() => setActive(index)}
                className={`absolute inset-0 rounded-2xl border bg-light p-6 text-left transition-all duration-500 bg-accent                  `}
                style={{
                  transform: `
                    translateY(${offset * 14}px)
                    scale(${1 - offset * 0.05})
                  `,
                  zIndex: 10 - offset,
                  opacity: offset === 2 ? 0.5 : 1,
                }}
              >
                <span className={`absolute right-4 top-4 text-sm font-semibold transition`} > Step {index + 1} </span>
                <Icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-light">{step.description}</p>

                {/* Progress */}
                {offset === 0 && (
                  <div className="mt-4 h-1 w-full overflow-hidden rounded bg-border-color">
                    <div className="h-full w-full bg-accent" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE CONTROLS ONLY */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            onClick={() => { prev(); setPaused(true); }}
            className="rounded-full border bg-light p-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => { next(); setPaused(true); }}
            className="rounded-full border bg-light p-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
