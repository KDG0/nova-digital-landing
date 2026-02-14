export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 mesh-gradient-cta" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 h-40 w-40 rounded-full bg-white/5 blur-[60px] animate-float" />
      <div className="absolute bottom-1/4 right-10 h-56 w-56 rounded-full bg-accent-light/10 blur-[80px] animate-float-slow" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-sm font-medium text-white/80">
            2 spots left for Q1 2026
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-cabinet)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Ready to{" "}
          <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
            scale?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
          Get a free, no-BS audit of your digital presence. We&apos;ll show you
          exactly where you&apos;re leaving money on the table — and how to fix it.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
          >
            Get Your Free Audit
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
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          >
            Schedule a Call
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8l3 3 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8l3 3 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">30-minute deep dive</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8l3 3 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">Actionable recommendations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
