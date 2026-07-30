import { Link } from "react-router-dom";
import { CTABand, Contact, FAQ, SectionHead, usePageMeta } from "@/components/site";
import { FeatureGrid, Gallery, HowItWorks, PhoneShowcase } from "@/pages/Home";
import heroAsset from "@/assets/hero-moylagh.jpg.asset.json";

export type SportPageProps = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  stats: [string, string][];
  scoringTitle: string;
  scoringCards: { icon: string; title: string; body: string }[];
  features: [string, string][];
  faqs: { q: string; a: string }[];
  phoneTitle?: string;
  phoneSubtitle?: string;
  scoreCaption?: string;
  ftCaption?: string;
  heroImage?: string;
};

export default function SportPage(p: SportPageProps) {
  usePageMeta({ title: p.metaTitle, description: p.metaDescription, path: p.path });
  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 500px at 80% 0%, oklch(0.87 0.18 95 / 0.18), transparent 60%), radial-gradient(800px 400px at 0% 100%, oklch(0.17 0.008 260 / 0.06), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em]">
              <span className="rounded bg-primary px-2 py-1 text-primary-foreground">
                {p.eyebrow}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {p.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
              >
                Get a quote
              </a>
              <Link
                to="/"
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                See our GAA boards →
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {p.stats.map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{dt}</dt>
                  <dd className="mt-1 text-sm font-semibold">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-panel">
            <img
              src={p.heroImage ?? heroAsset.url}
              alt={`CluScore LED scoreboard — the same hardware we supply for ${p.eyebrow.toLowerCase()}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead eyebrow="Scoring" title={p.scoringTitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {p.scoringCards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl yellow-bar text-2xl">
                {c.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <PhoneShowcase
        title={p.phoneTitle}
        subtitle={p.phoneSubtitle}
        scoreCaption={p.scoreCaption}
        ftCaption={p.ftCaption}
      />
      <FeatureGrid items={p.features} />
      <Gallery
        heading="Some projects we have completed"
        blurb="The same LED hardware, mounting and phone control we install for GAA clubs — configured for your sport."
      />
      <FAQ faqs={p.faqs} title="Questions clubs usually ask." />
      <CTABand />
      <Contact sport={p.eyebrow} />
    </>
  );
}
