import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Company journey milestones. Append new entries to the end of this
 * array as ZYRA hits them — the layout extends automatically.
 */
const STEPS = [
  {
    title: "Idea",
    description: "Every product starts with a real problem worth solving.",
  },
  {
    title: "Research",
    description:
      "We study how people actually live and work before writing a line of code.",
  },
  {
    title: "Prototype",
    description: "Ideas become tangible through fast, focused prototyping.",
  },
  {
    title: "Product Development",
    description: "We build carefully, with quality and reliability at the core.",
  },
  {
    title: "User Feedback",
    description: "Real users shape what we refine, fix, and improve.",
  },
  {
    title: "Growth",
    description: "Products grow with their communities, one iteration at a time.",
  },
  {
    title: "Multiple Products Ecosystem",
    description: "Where ZYRA is headed: a connected family of useful products.",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Company Journey"
          title="How ZYRA Builds"
          description="The path every ZYRA product follows — from the first idea to a growing ecosystem."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-1/2"
          />

          <ol className="space-y-12 md:space-y-20">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative md:grid md:grid-cols-2 md:gap-20">
                {/* Dot on the line */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-foreground bg-background" />
                </span>

                <Reveal
                  className={
                    i % 2 === 0
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }
                >
                  <div className="pl-8 md:pl-0">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* Room for future milestones */}
          <Reveal>
            <div className="relative mt-12 pl-8 md:mt-20 md:pl-0 md:text-center">
              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2"
              >
                <span className="h-2.5 w-2.5 rounded-full border-2 border-dashed border-muted-foreground bg-background" />
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                More milestones ahead
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
