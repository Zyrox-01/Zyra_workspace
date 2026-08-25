import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Founder = {
  name: string;
  role: string;
  /** Editable short bio shown under the role. */
  bio: string;
  /**
   * TODO: drop the real portrait URL/path here when ready, e.g.
   * photoSrc: founderTej (imported from src/assets) or "/images/tej.jpg".
   * The card swaps the placeholder for the photo automatically.
   */
  photoSrc?: string;
  photoAlt?: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Tej Pratap Singh",
    role: "Founder & CEO",
    // TODO: replace with a short real bio
    bio: "Short bio coming soon — a few lines about Tej's background and vision for ZYRA will live here.",
    // photoSrc: founderTej,
    photoAlt: "Portrait of Tej Pratap Singh",
  },
  {
    name: "Bhavya Yadav",
    role: "Co-Founder",
    // TODO: replace with a short real bio
    bio: "Short bio coming soon — a few lines about Bhavya's background and role at ZYRA will live here.",
    // photoSrc: founderBhavya,
    photoAlt: "Portrait of Bhavya Yadav",
  },
];

function FounderCard({ founder, delay }: { founder: Founder; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col">
        {/* Portrait — fixed 4:5 frame. Replace the placeholder by setting
            founder.photoSrc above; the <img> below fills this exact box. */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
          {founder.photoSrc ? (
            <img
              src={founder.photoSrc}
              alt={founder.photoAlt ?? `Portrait of ${founder.name}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-border bg-background px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Photo coming soon
              </span>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
            {founder.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground/80">
            {founder.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {founder.bio}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function Founders() {
  return (
    <section id="founders" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="The people behind ZYRA"
          title="Meet The Founders"
          description="ZYRA is led by a small team with a clear point of view. Portraits are on the way — the work speaks first."
        />

        <div className="mx-auto mt-16 grid max-w-3xl gap-10 sm:grid-cols-2 md:mt-20 lg:gap-14">
          {FOUNDERS.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
