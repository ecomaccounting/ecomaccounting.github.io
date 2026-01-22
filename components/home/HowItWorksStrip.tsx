"use client";
import data from "@/data/data1.json";
import { useEffect, useState } from "react";
import { AppIconMap } from "@/lib/appIcons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const STEPS = data.howItWorks;
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
    <section className="py-6 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold text-accent uppercase tracking-widest">
            Our Advisory Framework
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const Icon = AppIconMap[step.icon];
            const isActive = index === active;

            return (
              <button
                key={step.title}
                onClick={() => { setActive(index); setPaused(true); }}
                className={`relative border rounded-2xl p-6 text-left transition-all duration-300
                  ${isActive
                    ? "bg shadow-2xl border-accent scale-105 z-10"
                    : "bg-light hover:bg border-transparent opacity-80"
                  }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-accent" : "bg-light"}`}>
                    <Icon className={`h-7 w-7 ${isActive ? "text-accent" : "text-light"}`} />
                  </div>

                  <div className="flex flex-col justify-end w-full">
                    <span className="text-xs font-bold uppercase tracking-tight text-muted leading-none mb-1 text-end">
                      Step 0{index + 1}
                    </span>
                    {step.subLabel && (
                      <span className="text-xs font-bold text-primary leading-none text-end">
                        {step.subLabel}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mb-2 font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-light leading-relaxed">{step.description}</p>
              </button>
            );
          })}
        </div>

        {/* MOBILE STACKED DECK */}
        <div className="relative md:hidden h-[300px] mt-4">
          {STEPS.map((step, index) => {
            const Icon = AppIconMap[step.icon]; // Fixed mapping
            const offset = (index - active + STEPS.length) % STEPS.length;

            if (offset > 2) return null;

            return (
              <div
                key={step.title}
                className="absolute inset-0 rounded-2xl border bg p-8 shadow-xl transition-all duration-500"
                style={{
                  transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.05})`,
                  zIndex: 10 - offset,
                  opacity: offset === 0 ? 1 : offset === 1 ? 0.6 : 0.3,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Icon className="h-10 w-10 text-highlight" />
                  <span className="text-xs font-black text-muted">0{index + 1}</span>
                </div>

                {step.subLabel && (
                  <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">
                    {step.subLabel}
                  </p>
                )}

                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-light text-sm leading-relaxed">{step.description}</p>

                {offset === 0 && (
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-light">
                    <div
                      className="h-full bg-accent transition-all duration-[3000ms] ease-linear"
                      style={{ width: paused ? '100%' : '100%' }} // You could animate this based on a timer
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE CONTROLS */}
        <div className="mt-12 flex justify-center items-center gap-6 md:hidden">
          <button onClick={() => { prev(); setPaused(true); }} className="p-3 rounded-full border bg shadow-sm">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {STEPS.map((_, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${i === active ? 'bg-accent' : 'bg-light'}`} />
            ))}
          </div>
          <button onClick={() => { next(); setPaused(true); }} className="p-3 rounded-full border bg shadow-sm">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* CASE STUDIES BRIDGE */}
<div className="mt-14 text-center">
  <p className="text-xs uppercase tracking-widest text-muted mb-2">
  Proof from the field
</p>
  <p className="text-sm md:text-base text-light max-w-2xl mx-auto">
    Each step above is drawn from real client engagements —{" "}
    <Link
      href="/case-studies/"
      className="font-semibold text-accent hover:underline underline-offset-4"
    >
      see how it plays out in practice
    </Link>.
  </p>
</div>
    </section>
  );
}