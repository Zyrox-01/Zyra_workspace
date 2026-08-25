import { Accessibility, Lightbulb, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type MissionValue = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const VALUES: MissionValue[] = [
  {
    name: "Simplicity",
    description: "Creating easy-to-use products.",
    icon: Sparkles,
  },
  {
    name: "Innovation",
    description: "Continuously solving meaningful problems.",
    icon: Lightbulb,
  },
  {
    name: "Accessibility",
    description: "Making useful technology available to more people.",
    icon: Accessibility,
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Our Mission"
          title="Technology That Creates Real Impact"
          description="Our mission is to create practical, user-focused technology products that people can rely on every day — tools that respect their time, earn their trust, and make a genuine difference."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.name} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.18)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-foreground">
                  {value.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
