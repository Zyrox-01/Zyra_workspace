import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              About ZYRA
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
              Who We Are
            </h2>
            <blockquote className="mt-10 border-l-2 border-foreground pl-6 font-display text-xl leading-relaxed text-foreground md:text-2xl">
              We believe technology should make life simpler, smarter, and more
              accessible.
            </blockquote>
          </Reveal>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:pt-24">
            <Reveal delay={100}>
              <p>
                ZYRA is a technology company dedicated to building useful
                applications and digital services for people. We start with the
                problems people run into every day — and design products that
                solve them with clarity and care.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Rather than focusing on a single product, ZYRA is building an
                ecosystem of multiple applications. Each product stands on its
                own, and each one strengthens the whole.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                EventHub — our platform for event planning and vendor discovery —
                is the first step in that journey, with more products already in
                the works.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
