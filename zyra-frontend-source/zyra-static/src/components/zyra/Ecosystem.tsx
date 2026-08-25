import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Ecosystem nodes around the ZYRA core. Position is a percentage inside
 * the square canvas; the SVG lines below connect the same coordinates.
 */
const NODES = [
  { label: "EventHub", x: 50, y: 4, delay: "0s", active: true },
  { label: "Future Apps", x: 93, y: 50, delay: "1.2s", active: false },
  { label: "Digital Services", x: 50, y: 96, delay: "2.4s", active: false },
  { label: "Innovation Lab", x: 7, y: 50, delay: "3.6s", active: false },
] as const;

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="scroll-mt-20 overflow-hidden border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Ecosystem"
          title="One Company, Many Products"
          description="ZYRA sits at the center of a growing ecosystem — products, services, and experiments that reinforce each other."
        />

        <Reveal className="mt-16">
          <div className="relative mx-auto aspect-square w-full max-w-xl">
            {/* Connection lines + orbit ring */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full text-border"
            >
              {NODES.map((node) => (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke="currentColor"
                  strokeWidth="0.35"
                />
              ))}
              <g className="origin-center animate-rotate-slow">
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.35"
                  strokeDasharray="1.5 2.5"
                />
              </g>
            </svg>

            {/* ZYRA core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-foreground font-display text-sm font-semibold tracking-[0.2em] text-background shadow-[0_20px_50px_-16px_rgba(0,0,0,0.35)] md:h-24 md:w-24 md:text-base">
                ZYRA
              </div>
            </div>

            {/* Satellite nodes */}
            {NODES.map((node) => (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div
                  className={`animate-float whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium tracking-tight shadow-sm md:text-sm ${
                    node.active
                      ? "border-foreground/20 bg-background text-foreground"
                      : "border-border bg-background/80 text-muted-foreground"
                  }`}
                  style={{ animationDelay: node.delay }}
                >
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
