import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-28 pt-40 md:pb-40 md:pt-52"
    >
      {/* Faint dotted grid, faded out with a radial mask */}
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black,transparent)]"
      />
      {/* Soft light glow behind the headline */}
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            A technology company · Est. 2026
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 text-balance font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Building Technology for Everyday Life.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            ZYRA is a technology company focused on creating meaningful digital
            products that simplify everyday experiences and solve real-world
            problems through thoughtful innovation.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              About ZYRA
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={500} className="relative mt-20 flex justify-center md:mt-28">
        <a
          href="#about"
          aria-label="Scroll to About ZYRA"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
