"use client";

import { useEffect, useState, useRef } from "react";
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setActive((prev) => (prev + 1) % STEPS.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  };

  // Auto play
  useEffect(() => {
    if (paused) return;

    timerRef.current = setTimeout(next, AUTO_DELAY);
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [active, paused]);

  const onUserAction = () => {
    setPaused(true);
    timerRef.current && clearTimeout(timerRef.current);
  };

  return (
    <section
      className="relative bg-accent-light py-16 md:py-20 max-w-7xl mx-auto"
      onMouseEnter={onUserAction}
      onTouchStart={onUserAction}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wide">
            Simple Process
          </p>
          <h2 className="mt-2">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === active;

            return (
              <button
                key={step.title}
                onClick={() => {
                  onUserAction();
                  setActive(index);
                }}
                className={`group relative rounded-2xl border p-6 text-left transition-all duration-300
                  ${
                    isActive
                      ? "bg-accent shadow-xl border-accent scale-[1.02]"
                      : "bg-light hover:bg-accent hover:shadow-md"
                  }`}
              >
                {/* Step number */}
                <span
                  className={`absolute right-4 top-4 text-sm font-semibold transition
                    ${
                      isActive
                        ? "text-accent"
                        : "text-muted group-hover:text-accent"
                    }`}
                >
                  Step {index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition
                    ${
                      isActive
                        ? "bg-accent text-blue"
                        : "bg-accent-light text-accent"
                    }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="text-sm text-light leading-relaxed">
                  {step.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1 w-full overflow-hidden rounded bg-border-color">
                  <div
                    className={`h-full bg-accent transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              onUserAction();
              prev();
            }}
            aria-label="Previous step"
            className="rounded-full border bg-light p-2 hover:bg-accent hover:text-highlight transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => {
              onUserAction();
              next();
            }}
            aria-label="Next step"
            className="rounded-full border bg-light p-2 hover:bg-accent hover:highlight transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
