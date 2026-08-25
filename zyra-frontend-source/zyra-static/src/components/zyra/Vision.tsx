import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section
      id="vision"
      className="scroll-mt-20 overflow-hidden border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Future Vision
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-7xl">
            This Is Just The Beginning.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            ZYRA aims to grow into a company that develops multiple impactful
            digital products across different industries — while staying focused
            on what matters most: solving real human problems. Every product we
            ship, every feature we refine, and every idea we explore moves us
            one step further. We're early, we're focused, and we're building for
            the long term.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
