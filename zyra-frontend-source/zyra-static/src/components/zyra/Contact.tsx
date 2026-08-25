import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE, SOCIAL_LINKS } from "./config";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background blur-3xl"
            />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
                Let's Build The Future Together.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Whether you're a user with an idea, a partner with a vision, or
                someone who wants to build with us — we'd love to hear from you.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Partnership%20with%20ZYRA`}
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Partner With ZYRA
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Joining%20ZYRA`}
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Join Our Journey
                </a>
              </div>

              <div className="mt-10 flex flex-col items-center gap-5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
