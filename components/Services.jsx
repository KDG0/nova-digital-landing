"use client";

import { services } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ServiceIcon({ type }) {
  const icons = {
    code: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    search: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 11h6M11 8v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    chart: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 20V10M12 20V4M6 20v-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    ai: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M12 11v4M8 15h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="1" fill="currentColor" />
        <circle cx="15" cy="7" r="1" fill="currentColor" />
        <path
          d="M5 19a7 7 0 0114 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return icons[type] || icons.code;
}

export default function Services() {
  const containerRef = useScrollReveal();

  return (
    <section id="services" className="relative bg-surface py-24 md:py-32">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section header */}
        <div className="scroll-reveal mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            What we do
          </span>
          <h2 className="font-[family-name:var(--font-cabinet)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Full-stack growth,{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              zero fluff.
            </span>
          </h2>
          <p className="mt-4 text-lg text-primary/60">
            Every service we offer is designed with one goal: measurable results
            that compound over time.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="scroll-reveal group relative rounded-2xl border border-primary/5 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 text-accent transition-all duration-300 group-hover:from-accent group-hover:to-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/25">
                  <ServiceIcon type={service.icon} />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-cabinet)] text-xl font-bold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/55">
                  {service.description}
                </p>

                {/* Metric */}
                <div className="mt-6 flex items-center gap-2 border-t border-primary/5 pt-4">
                  <span className="font-[family-name:var(--font-cabinet)] text-2xl font-bold text-accent">
                    {service.metric}
                  </span>
                  <span className="text-xs text-primary/40">
                    {service.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
