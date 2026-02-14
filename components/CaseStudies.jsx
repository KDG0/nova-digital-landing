"use client";

import { caseStudies } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CaseStudies() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-surface-dark py-24 md:py-32"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[150px]" />
      <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-primary-light/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section header */}
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent-light">
            Case Studies
          </span>
          <h2 className="font-[family-name:var(--font-cabinet)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Results that{" "}
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              speak louder.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            Real growth stories from real clients. No vanity metrics — just
            business impact.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="scroll-reveal group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.08] md:p-8"
            >
              {/* Industry tag */}
              <span className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                {study.industry}
              </span>

              {/* Big metric */}
              <div className="mb-4">
                <span className="font-[family-name:var(--font-cabinet)] text-5xl font-bold text-white md:text-6xl">
                  {study.metric}
                </span>
                <p className="mt-1 text-sm font-medium text-accent-light">
                  {study.metricLabel}
                </p>
              </div>

              {/* Client & description */}
              <h3 className="font-[family-name:var(--font-cabinet)] text-xl font-bold text-white">
                {study.client}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {study.description}
              </p>

              {/* Results list */}
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-4">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <path
                        d="M4 8l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>

              {/* Period badge */}
              <div className="mt-6">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/40">
                  Achieved in {study.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
