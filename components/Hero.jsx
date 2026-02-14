import { clientBadges } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-surface pt-20 md:pt-0"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-[0.03]" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent/5 blur-[80px] animate-pulse-glow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,27,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,27,75,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full py-20 md:py-0">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent">
              Now accepting Q1 2026 clients
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-[family-name:var(--font-cabinet)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We build digital
            <br />
            experiences that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                convert.
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-accent/10 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/60 md:text-xl">
            Strategy, design, and development under one roof. We help ambitious
            brands turn clicks into customers and data into growth.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Get a Free Audit
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-0.5"
            >
              See Our Work
            </a>
          </div>

          {/* Client badges */}
          <div className="mt-16 border-t border-primary/10 pt-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary/40">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap gap-3">
              {clientBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/10 bg-white/60 px-4 py-2 text-xs font-medium text-primary/50 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Side decorative element */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="relative h-80 w-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
            <div className="glass-light relative h-full w-full rounded-3xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-primary/50">Live Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-end justify-between">
                    <span className="text-xs text-primary/40">Revenue</span>
                    <span className="font-[family-name:var(--font-cabinet)] text-xl font-bold text-primary">$1.2M</span>
                  </div>
                  {/* Mini chart bars */}
                  <div className="flex items-end gap-1 h-24">
                    {[40, 55, 45, 60, 75, 65, 80, 90, 85, 95, 88, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M3 5l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs font-semibold">+240% vs last quarter</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-primary/5 p-3">
                    <p className="text-xs text-primary/40">Conversion</p>
                    <p className="font-[family-name:var(--font-cabinet)] text-lg font-bold">4.8%</p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-3">
                    <p className="text-xs text-primary/40">ROAS</p>
                    <p className="font-[family-name:var(--font-cabinet)] text-lg font-bold">3.2x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
