import { BookOpen, Target, Telescope, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Value = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const VALUES: Value[] = [
  {
    name: "Think Long Term",
    description: "Build products for lasting value.",
    icon: Telescope,
  },
  {
    name: "Solve Real Problems",
    description: "Focus on meaningful everyday challenges.",
    icon: Target,
  },
  {
    name: "Learn Continuously",
    description: "Innovation begins with learning.",
    icon: BookOpen,
  },
  {
    name: "Build Together",
    description: "Great products come from strong collaboration.",
    icon: Users,
  },
];

export function Values() {
  return (
    <section
      id="values"
      className="scroll-mt-20 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Company Values"
          title="What We Stand For"
          description="The principles that guide how ZYRA designs, builds, and grows."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.name} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.18)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-foreground">
                  {value.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
