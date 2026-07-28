import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import logoAsset from "@/assets/cluscore-logo.png.asset.json";
import heroAsset from "@/assets/hero-moylagh.jpg.asset.json";

function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-panel">
      <img
        src={heroAsset.url}
        alt="CluScore LED scoreboard installed at Moylagh GAA showing Moylagh 4-11 v Summerhill 2-5"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 font-mono text-[10px] tracking-widest text-highlight">
        MOYLAGH GAA · LIVE
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Gallery />
      <WhyCluScore />
      <HowItWorks />
      <Features />

      <Testimonial />
      <FAQ />
      <CTABand />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Why CluScore", "#why"],
    ["How it works", "#how"],
    ["Features", "#features"],
    ["Gallery", "#gallery"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center">
          <LogoMark />
        </a>

        <nav className="hidden gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground transition hover:opacity-90 md:inline-flex"
        >
          Get a quote
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="rounded-md border border-border px-3 py-2 text-sm font-medium md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-ink-foreground"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="CluScore" className={className} />;
}


/* ---------------- Hero ---------------- */
function Hero() {
  return (
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
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Live at Moylagh GAA
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Give your club the{" "}
            <span className="relative whitespace-nowrap">
              scoreboard
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-primary" />
            </span>{" "}
            it deserves.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Real-time GAA scoring, remote phone control, and sponsor ads — on a
            modern LED panel that fits any clubhouse.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
            >
              Get a quote
            </a>
            <a
              href="#gallery"
              className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              See it in action →
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Made in</dt>
              <dd className="mt-1 text-sm font-semibold">Ireland 🇮🇪</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Control</dt>
              <dd className="mt-1 text-sm font-semibold">Any phone</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Panel size</dt>
              <dd className="mt-1 text-sm font-semibold">1.5–6 m+</dd>
            </div>
          </dl>
        </div>

        <HeroImage />
      </div>
    </section>
  );
}

function ScoreboardMock() {
  return (
    <div className="relative">
      <div className="scoreboard led-dots aspect-[16/10] w-full">
        {/* Half indicator */}
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.3em] text-highlight/80">
          <span>HALF 2</span>
          <span className="rounded bg-highlight px-2 py-0.5 text-highlight-foreground">18:42</span>
        </div>

        {/* Scores */}
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <TeamBlock name="MOYLAGH" goals="2" points="15" />
          <div className="h-24 w-1.5 rounded bg-highlight" />
          <TeamBlock name="ATHBOY" goals="1" points="12" align="right" />
        </div>

        {/* Sponsor ribbon */}
        <div className="mt-4 flex items-center gap-2 rounded border border-highlight/40 bg-black/40 px-3 py-2">
          <span className="rounded bg-highlight px-1.5 py-[1px] text-[9px] font-black tracking-wider text-highlight-foreground">
            SPONSOR
          </span>
          <span className="truncate font-mono text-[11px] tracking-wider text-highlight/90">
            MURPHY'S HARDWARE — PROUD SPONSORS OF MOYLAGH GAA
          </span>
        </div>
      </div>


      {/* Floating "phone control" chip */}
      <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-border bg-card p-3 shadow-lg sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg yellow-bar text-lg">
            📱
          </div>
          <div>
            <div className="text-xs font-semibold">Score updated</div>
            <div className="text-[11px] text-muted-foreground">from Séan's phone · 2s ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamBlock({
  name,
  goals,
  points,
  align = "left",
}: {
  name: string;
  goals: string;
  points: string;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className={`truncate text-sm font-black tracking-[0.15em] text-highlight/90`}>{name}</div>
      <div
        className={`mt-1 flex items-baseline gap-2 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="text-6xl font-black leading-none text-highlight tabular-nums sm:text-7xl">
          {goals.padStart(2, "0")}
        </span>
        <span className="text-3xl font-black text-highlight/80">–</span>
        <span className="text-6xl font-black leading-none text-highlight tabular-nums sm:text-7xl">
          {points.padStart(2, "0")}
        </span>
      </div>

    </div>
  );
}

/* ---------------- Trust bar ---------------- */
function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-6 text-sm text-muted-foreground">
        <span className="font-semibold uppercase tracking-widest text-foreground/70">
          Trusted by
        </span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <ClubBadge name="Moylagh GAA" />
          <span className="text-xs italic text-muted-foreground">
            More clubs coming soon — will yours be next?
          </span>
        </div>
      </div>
    </section>
  );
}

function ClubBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-black text-highlight">
        GAA

      </span>
      <span className="font-semibold text-foreground">{name}</span>
    </div>
  );
}

/* ---------------- Why ---------------- */
function WhyCluScore() {
  const cards = [
    {
      icon: "🎯",
      title: "Built for GAA scoring.",
      body: "Two-digit goals and points, separated properly, exactly the way you'd read it in the paper. No hacking around a soccer scoreboard.",
    },
    {
      icon: "📱",
      title: "Control from your phone.",
      body: "Any committee member can update the score, start the clock, swap teams — from the WiFi in the clubhouse. No specialist software.",
    },
    {
      icon: "💶",
      title: "Sponsor-ready.",
      body: "Between-match slots for sponsor images, videos, or rolling text messages. Turn your scoreboard into a revenue stream.",
    },
  ];
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead
        eyebrow="Why CluScore"
        title="Purpose-built for GAA clubs — not a soccer board with a paint job."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
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
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="text-xs font-bold uppercase tracking-[0.2em]">
        <span className="rounded bg-primary px-2 py-1 text-primary-foreground">{eyebrow}</span>
      </div>

      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "We install",
      body: "LED panel with controller, mounted where you want it.",
    },
    {
      n: "2",
      title: "You control from your phone",
      body: "Simple to use, straight on any smart phone.",
    },
    {
      n: "3",
      title: "It just runs",
      body: "Auto-starts when the panel powers on. No laptop, no cables, no fuss.",
    },
  ];
  return (
    <section id="how" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead eyebrow="How it works" title="Three steps. Then it's just there." />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-border bg-background p-7">
              <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-sm font-black text-highlight">
                {s.n}
              </span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const items = [
    ["GAA-native scoring", "Goals + points, zero-padded, always readable at a glance."],
    ["Period timer + half", "Configurable timer and clear half indicator."],
    ["Auto-scaling team names", "Long club names still fit and stay legible."],
    ["Welcome splash", "Your club crest on power-on."],
    ["Text ad mode", "Sponsor messages, lotto reminders, notices."],
    ["Image ad mode", "Sponsor logos and posters between action."],
    ["Video ad mode", "Looping muted video clips."],
    ["Phone/tablet control", "Any device on the club WiFi."],
    ["Standard LED panels", "Runs on Novastar controllers you can source anywhere."],
    ["Reboots itself", "Auto-starts on power-on, respawns if it crashes."],
    ["Made in Ireland", "Built and supported locally."],
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead eyebrow="Features" title="Everything the board does — nothing you don't need." />
      <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {items.map(([title, body]) => (
          <li key={title} className="flex gap-3 border-b border-border pb-5">
            <span
              aria-hidden
              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground"
            >
              ✓
            </span>
            <div>
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-muted-foreground">{body}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
import install1 from "@/assets/install-10-29.18.jpeg.asset.json";
import install2 from "@/assets/install-10-29.28.jpeg.asset.json";
import install3 from "@/assets/install-10-29.38.jpeg.asset.json";
import install4 from "@/assets/install-10-30.00.jpeg.asset.json";
import install5 from "@/assets/install-10-30.22.jpeg.asset.json";
import install6 from "@/assets/install-10-30.43.jpeg.asset.json";

function Gallery() {
  const tiles = [
    { src: install1.url, label: "Match night · Moylagh 4-11 v Summerhill 2-5", club: "MOYLAGH GAA" },
    { src: install3.url, label: "Sponsor & community slot · Ireland Lights Up", club: "MOYLAGH GAA" },
    { src: install2.url, label: "Pitch-side view · full scoreboard mode", club: "MOYLAGH GAA" },
    { src: install6.url, label: "Daylight readable · sponsor rotation", club: "MOYLAGH GAA" },
    { src: install4.url, label: "Clann na nGael · Athboy v Trim", club: "CLANN NA nGAEL" },
    { src: install5.url, label: "Fresh install · Home v Away 0:0", club: "CLANN NA nGAEL" },
  ];
  return (
    <section id="gallery" className="border-y border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em]">
              <span className="rounded bg-primary px-2 py-1 text-primary-foreground">Gallery</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Installed and lit up at real GAA clubs.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-foreground/70">
            Photos from Moylagh GAA and Clann na nGael — score mode, sponsor rotation, and daytime visibility.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border border-white/10 bg-black">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={t.src}
                  alt={t.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-xs">
                <span className="text-ink-foreground/80">{t.label}</span>
                <span className="shrink-0 rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-highlight/80">
                  {t.club}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Testimonial ---------------- */
function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 text-center">
      <div className="text-5xl leading-none text-primary">"</div>
      <blockquote className="mt-2 text-2xl font-semibold leading-snug sm:text-3xl">
        Testimonial from Moylagh GAA coming soon — the board's already changed how
        we run match days.
      </blockquote>
      <div className="mt-6 text-sm font-semibold text-muted-foreground">
        [Name], [Role] · Moylagh GAA
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Will it fit our clubhouse?",
      a: "Panel sizes are flexible. The smallest sensible install is 1.5 m × 0.75 m, and we can go up to 6 m+ for larger clubhouses. We'll spec it to your wall.",
    },
    {
      q: "What does it cost?",
      a: "Price varies with panel size, mounting, and installation location. Get in touch for a quote tailored to your specific clubhouse.",
    },
    {
      q: "Do we need internet?",
      a: "No. Everything runs on the club's local WiFi. Internet is only needed if you want us to update the board remotely.",
    },
    {
      q: "Who fixes it if it breaks?",
      a: "Interactive Displays Ireland provides support: same-day remote diagnostics via SSH, and on-site visits for hardware issues.",
    },
    {
      q: "Can we run our sponsor logos on it?",
      a: "Yes. Upload images or videos via the phone control page; they display in the ad slots between match action.",
    },
    {
      q: "Can we use it for other sports?",
      a: "Currently GAA football and hurling (goals + points). Other sport formats on request.",
    },
  ];
  return (
    <section id="faq" className="border-y border-border bg-card">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <SectionHead eyebrow="FAQ" title="Questions committees usually ask." />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <span
          aria-hidden
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground transition ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

/* ---------------- CTA band ---------------- */
function CTABand() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Ready to upgrade your scoreboard?
          </h2>
          <p className="mt-2 text-ink-foreground/70">
            Tell us about your clubhouse — we'll come back with a quote.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-95"
          >
            Get a quote for your clubhouse
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-ink-foreground transition hover:bg-white/5"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    club: "",
    county: "",
    contact: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `CluScore enquiry — ${form.club || "New club"} (${form.county || "—"})`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nClub: ${form.club}\nCounty: ${form.county}\nPhone/email: ${form.contact}\n\n${form.message}`
    );
    return `mailto:gerry@fusiontechnologies.ie?subject=${subject}&body=${body}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailto;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHead
            eyebrow="Contact"
            title="Get a quote for your clubhouse."
            subtitle="A few details and we'll be in touch. No obligation, no pressure."
          />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="mt-0.5">📍</span>
              <span>
                <strong>Interactive Displays Ireland</strong>
                <br />
                <span className="text-muted-foreground">Ireland</span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">✉️</span>
              <a
                href="mailto:gerry@fusiontechnologies.ie"
                className="border-b border-primary hover:opacity-80"
              >
                gerry@fusiontechnologies.ie
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your name
              </span>
              <input
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Club
              </span>
              <input
                required
                className={field}
                value={form.club}
                onChange={(e) => setForm({ ...form, club: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                County
              </span>
              <input
                className={field}
                value={form.county}
                onChange={(e) => setForm({ ...form, county: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Phone or email
              </span>
              <input
                required
                className={field}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </span>
            <textarea
              rows={5}
              className={field}
              placeholder="Tell us about your clubhouse — wall size, indoor/outdoor, when you'd want it in place…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
          >
            Send enquiry
          </button>
          {sent && (
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your email app should have opened. If not,{" "}
              <a href={mailto} className="underline">
                click here
              </a>
              .
            </p>
          )}
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Submitting opens your email app addressed to gerry@fusiontechnologies.ie.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center">
            <LogoMark />
          </div>

          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            CluScore is a product of{" "}
            <strong className="text-foreground">Interactive Displays Ireland</strong>. Purpose-built
            LED scoreboards for GAA clubs, made and supported in Ireland.
          </p>
        </div>
        <div className="text-sm sm:text-right">
          <div className="font-semibold">Interactive Displays Ireland</div>
          <div className="mt-1 text-muted-foreground">Ireland</div>
          <a
            href="mailto:gerry@fusiontechnologies.ie"
            className="mt-1 inline-block text-muted-foreground hover:text-foreground"
          >
            gerry@fusiontechnologies.ie
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Interactive Displays Ireland. All rights reserved.</span>
          <span>Made in Ireland 🇮🇪</span>
        </div>
      </div>
    </footer>
  );
}
