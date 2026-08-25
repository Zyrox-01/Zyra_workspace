import { ArrowUpRight, CalendarDays, Lock, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Available products. Add more entries here as ZYRA ships them —
 * the grid grows automatically.
 */
type Product = {
  name: string;
  status: string;
  description: string;
  icon: LucideIcon;
  // TODO: point at the product page when it exists
  href: string;
};

const PRODUCTS: Product[] = [
  {
    name: "EventHub",
    status: "In Development",
    description:
      "A digital platform designed to simplify event planning, vendor discovery, and event-related services.",
    icon: CalendarDays,
    href: "#",
  },
];

/**
 * Future product placeholders. Replace a name and fill in the details
 * when the product is ready to announce.
 */
const FUTURE_PRODUCTS = [
  "Future App 01",
  "Future App 02",
  "Future App 03",
  "Future App 04",
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Products"
          title="Products by ZYRA"
          description="ZYRA is the parent company behind a growing family of digital products. This is where the ecosystem starts."
        />

        {/* Available products */}
        <Reveal className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Available Products
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.2)] md:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background">
                        <product.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                          {product.name}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-chart-4" />
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-3 md:flex-col md:items-end">
                    <a
                      href={product.href}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <span className="inline-flex cursor-not-allowed items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Future products */}
        <Reveal className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Future Products
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FUTURE_PRODUCTS.map((name, i) => (
            <Reveal key={name} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-border bg-secondary/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground">
                  <Lock className="h-4 w-4" />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Coming Soon
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
