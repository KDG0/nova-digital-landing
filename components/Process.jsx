"use client";

import { processSteps } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Process() {
  const containerRef = useScrollReveal();

  return (
    <section id="process" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section header */}
        <div className="scroll-reveal mb-20 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-cabinet)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            From insight to{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              impact.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/60">
            A proven four-phase methodology that turns complexity into clarity
            and ambition into results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 md:hidden" />

          {/* Connecting line - desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent via-primary to-accent/30 md:block" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`scroll-reveal relative flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-sm font-bold text-white shadow-lg shadow-accent/25">
                    {step.step}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="rounded-2xl border border-primary/5 bg-surface p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 md:p-8">
                    <h3 className="font-[family-name:var(--font-cabinet)] text-2xl font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-primary/60">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
