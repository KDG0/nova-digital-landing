import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Tech Stack
          </span>
          <h2 className="font-[family-name:var(--font-cabinet)] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Built with the{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              best tools.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary/60">
            We use industry-leading platforms and frameworks to deliver
            solutions that scale.
          </p>
        </div>

        {/* Tech badges grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 rounded-xl border border-primary/8 bg-white px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Placeholder icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 transition-colors duration-300 group-hover:from-accent/20 group-hover:to-primary/20">
                <span className="text-xs font-bold text-accent">
                  {tech.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{tech.name}</p>
                <p className="text-xs text-primary/40">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
