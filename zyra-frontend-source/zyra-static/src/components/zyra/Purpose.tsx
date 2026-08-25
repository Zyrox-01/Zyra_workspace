import {
  CalendarDays,
  Compass,
  GraduationCap,
  ListChecks,
  MessageCircle,
  Rocket,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Category = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const CATEGORIES: Category[] = [
  {
    name: "Everyday Services",
    description: "Tools that make daily tasks easier.",
    icon: Compass,
  },
  {
    name: "Events & Experiences",
    description: "Better ways to plan and gather.",
    icon: CalendarDays,
  },
  {
    name: "Productivity",
    description: "Focus on what matters most.",
    icon: ListChecks,
  },
  {
    name: "Communication",
    description: "Clearer ways to stay connected.",
    icon: MessageCircle,
  },
  {
    name: "Education",
    description: "Learning that's easier to reach.",
    icon: GraduationCap,
  },
  {
    name: "Smart Digital Tools",
    description: "Small tools, big time savings.",
    icon: SlidersHorizontal,
  },
  {
    name: "Future Innovation",
    description: "Whatever people need next.",
    icon: Rocket,
  },
];

export function Purpose() {
  return (
    <section id="purpose" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Our Purpose"
          title="Our Purpose"
          description="Our purpose is to identify common everyday problems and create digital solutions that genuinely improve people's lives. We look across the areas where technology can help most:"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.18)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-foreground">
                  {category.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
