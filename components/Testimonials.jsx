"use client";

import { testimonials } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonials() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="testimonials"
      className="relative bg-white py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section header */}
        <div className="scroll-reveal mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-cabinet)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              ambitious teams.
            </span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="scroll-reveal group relative rounded-2xl border border-primary/5 bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 md:p-8"
            >
              {/* Quote mark */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mb-4 text-accent/20"
              >
                <path
                  d="M12 22c-2.2 0-4-1.8-4-4s1.8-4 4-4c.7 0 1.4.2 2 .5C13.4 11 10.4 8 8 8V4c5.5 0 10 5.4 10 12 0 3.3-2.7 6-6 6zm16 0c-2.2 0-4-1.8-4-4s1.8-4 4-4c.7 0 1.4.2 2 .5C29.4 11 26.4 8 24 8V4c5.5 0 10 5.4 10 12 0 3.3-2.7 6-6 6z"
                  fill="currentColor"
                />
              </svg>

              {/* Quote text */}
              <p className="text-base leading-relaxed text-primary/70 md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-primary/5 pt-6">
                {/* Avatar placeholder */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-sm font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary/50">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
