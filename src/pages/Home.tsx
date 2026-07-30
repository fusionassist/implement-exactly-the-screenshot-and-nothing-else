import heroAsset from "@/assets/hero-moylagh.jpg.asset.json";
import phoneStartUrl from "@/assets/phones/phone_start_screen.jpg";
import phoneTimerUrl from "@/assets/phones/phone_timer_after_start.jpg";
import phoneNamesUrl from "@/assets/phones/phone_uppercase_team_names.jpg";
import phoneAdUrl from "@/assets/phones/phone_text_advert_update.jpg";
import phoneMediaUrl from "@/assets/phones/phone_video_image_advert_settings.jpg";
import phoneFTUrl from "@/assets/phones/phone_realistic_full_time_score_1.jpg";
import install1 from "@/assets/install-10-29.18.jpeg.asset.json";
import install2 from "@/assets/install-10-29.28.jpeg.asset.json";
import install3 from "@/assets/install-10-29.38.jpeg.asset.json";
import install4 from "@/assets/install-10-30.00.jpeg.asset.json";
import install5 from "@/assets/install-10-30.22.jpeg.asset.json";
import install6 from "@/assets/install-10-30.43.jpeg.asset.json";
import moylaghCrest from "@/assets/moylagh_crest.jpg.asset.json";
import { CTABand, Contact, FAQ, SectionHead, usePageMeta } from "@/components/site";

export function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-panel">
      <img
        src={heroAsset.url}
        alt="CluScore LED scoreboard installed at Moylagh GAA showing Moylagh 4-11 v Summerhill 2-5"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "CluScore — LED Scoreboards for GAA Clubs | Made in Ireland",
    description:
      "GAA-native LED scoreboards with goals and points, phone control over club Wi-Fi and sponsor ad slots. Irish assembled, installed and supported nationwide.",
    path: "/",
  });
  return (
    <>
      <Hero />
      <Gallery />
      <WhyCluScore />
      <HowItWorks />
      <PhoneShowcase />
      <Features />
      <Testimonial />
      <FAQ faqs={faqs} />
      <CTABand />
      <Contact sport="GAA" />
    </>
  );
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
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Give your club the{" "}
            <span className="relative whitespace-nowrap">
              scoreboard
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-primary" />
            </span>{" "}
            it deserves.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Real-time GAA scoring, remote phone control, and sponsor ads — on a modern LED panel
            that fits any Club.
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
              <dd className="mt-1 text-sm font-semibold">Any Smart Phone</dd>
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
      body: "Any committee member can update the score, start the clock, swap teams — from the WiFi in the Club. No specialist software.",
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

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  const steps = [
    { n: "1", title: "We install", body: "LED panel with controller, mounted where you want it." },
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

/* ---------------- Phone Showcase ---------------- */
export function PhoneShowcase({
  title = "The whole match, from the palm of your hand.",
  subtitle = "Every screenshot below is the real CluScore control panel — open it on any smartphone or tablet on the club WiFi. No app to install.",
  scoreCaption = "+1 Goal, +1 Point — one tap.",
  ftCaption = "Live GAA-format scoreline.",
}: {
  title?: string;
  subtitle?: string;
  scoreCaption?: string;
  ftCaption?: string;
}) {
  const shots = [
    { src: phoneStartUrl, label: "Score control", caption: scoreCaption },
    { src: phoneTimerUrl, label: "Match timer", caption: "Start, stop, 1st / 2nd half." },
    { src: phoneNamesUrl, label: "Team names", caption: "Set both clubs and go." },
    { src: phoneFTUrl, label: "Full-time score", caption: ftCaption },
    { src: phoneAdUrl, label: "Welcome & ad text", caption: "Update sponsor messages instantly." },
    { src: phoneMediaUrl, label: "Image / video ads", caption: "Upload straight from your phone." },
  ];
  return (
    <section id="phone" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead eyebrow="On your phone" title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((s) => (
          <figure key={s.label} className="group flex flex-col items-center">
            <div className="relative w-full max-w-[240px] overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-panel transition group-hover:-translate-y-1">
              <img src={s.src} alt={s.label} loading="lazy" className="block w-full" />
            </div>
            <figcaption className="mt-4 text-center">
              <div className="text-sm font-bold">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.caption}</div>
            </figcaption>
          </figure>
        ))}
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
    ["Phone/tablet control", "Any Modern SmartPhone or Tablet will work."],
    ["Standard LED panels", "Irish assembled LED Scoreboards."],
    ["Reboots itself", "Auto-starts on power-on, respawns if it crashes."],
    ["Made in Ireland", "Built and supported locally."],
  ];
  return <FeatureGrid items={items as [string, string][]} />;
}

export function FeatureGrid({
  items,
  title = "Everything the board does — nothing you don't need.",
}: {
  items: [string, string][];
  title?: string;
}) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHead eyebrow="Features" title={title} />
      <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {items.map(([t, body]) => (
          <li key={t} className="flex gap-3 border-b border-border pb-5">
            <span
              aria-hidden
              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground"
            >
              ✓
            </span>
            <div>
              <div className="font-semibold">{t}</div>
              <div className="text-sm text-muted-foreground">{body}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
export function Gallery({
  heading = "Some projects we have completed",
  blurb = "Photos from Moylagh GAA and Clann na nGael — score mode, sponsor rotation, and daytime visibility.",
  leadTile,
  secondTile,
}: {
  heading?: string;
  blurb?: string;
  leadTile?: { src: string; label: string; club: string };
  secondTile?: { src: string; label: string; club: string };
}) {
  const baseTiles = [
    { src: install1.url, label: "Match night · Moylagh 4-11 v Summerhill 2-5", club: "MOYLAGH GAA" },
    { src: install3.url, label: "Sponsor & community slot · Ireland Lights Up", club: "MOYLAGH GAA" },
    { src: install2.url, label: "Pitch-side view · full scoreboard mode", club: "MOYLAGH GAA" },
    { src: install6.url, label: "Daylight readable · sponsor rotation", club: "MOYLAGH GAA" },
    { src: install4.url, label: "Clann na nGael · Athboy v Trim", club: "CLANN NA nGAEL" },
    { src: install5.url, label: "Fresh install · Home v Away 0:0", club: "CLANN NA nGAEL" },
  ];
  const tiles = baseTiles.map((t, i) =>
    i === 0 && leadTile ? leadTile : i === 2 && secondTile ? secondTile : t,
  );


  return (
    <section id="gallery" className="border-y border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em]">
              <span className="rounded bg-primary px-2 py-1 text-primary-foreground">Gallery</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{heading}</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-foreground/70">{blurb}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-xl border border-white/10 bg-black"
            >
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
export function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-8 pb-20">
      <div className="text-center text-xs font-bold uppercase tracking-[0.2em]">
        <span className="rounded bg-primary px-2 py-1 text-primary-foreground">Testimonial</span>
      </div>
      <div className="mt-6 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
        <img
          src={moylaghCrest.url}
          alt="Moylagh GAA (C.L.G. Maolach) club crest"
          className="mx-auto h-28 w-auto sm:mx-0 sm:h-32"
        />
        <div>
          <div className="text-4xl leading-none text-primary">"</div>
          <blockquote className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              The addition of the LED scoreboard screen at our grounds has made a huge difference to
              us in terms of both games and advertising options.
            </p>
            <p>
              For games, the LED screen provides a crisp and clear display of the score and game
              timing for both players and spectators, regardless of whether matches are played
              during day or night time.
            </p>
            <p>
              In terms of advertising, the control configuration provides us with great flexibility
              in terms of image or text display and has proved to be a great asset in the club
              grounds well beyond games.
            </p>
            <p>
              The sales and support service provided were excellent and made the entire process of
              supply, installation and follow up seamless — we couldn't be happier with the finished
              product.
            </p>
          </blockquote>
          <div className="mt-6 text-sm font-semibold text-foreground">Joe Melia · Moylagh GAA</div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Will it fit our Club?",
    a: "Panel sizes are flexible. The smallest sensible install is 1.5 m × 0.75 m, and we can go up to 6 m+ for larger Clubs. We'll spec it to your wall.",
  },
  {
    q: "What does it cost?",
    a: "Price varies with panel size, mounting, and installation location. Get in touch for a quote tailored to your specific Club.",
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
    a: "Yes. GAA football and hurling are our main formats, and we also build boards for rugby, soccer, basketball, cricket, hockey, tennis, badminton and volleyball.",
  },
];
