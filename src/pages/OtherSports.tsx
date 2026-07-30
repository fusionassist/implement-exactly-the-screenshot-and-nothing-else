import { CTABand, Contact, FAQ, SectionHead, usePageMeta } from "@/components/site";
import { FeatureGrid, Gallery, HowItWorks, PhoneShowcase } from "@/pages/Home";
import cricketHero from "@/assets/cricket-hero.png.asset.json";
import basketballHero from "@/assets/basketball-hero.png.asset.json";


const sports = [
  {
    icon: "🏀",
    name: "Basketball",
    body: "Running points with 1, 2 and 3-point taps, quarter indicator and a count-down or count-up game clock. Ideal for sports halls and community centres.",
  },
  {
    icon: "🏏",
    name: "Cricket",
    body: "Runs and wickets in the familiar format, plus overs. Big digits that stay readable right across the square.",
  },
  {
    icon: "🏑",
    name: "Hockey",
    body: "Home and away goals with halves or quarters, and a clock you can stop and start from the sideline.",
  },
  {
    icon: "🎾",
    name: "Tennis",
    body: "Games and sets per player or pair, with a clear server indicator for club matches and tournaments.",
  },
  {
    icon: "🏸",
    name: "Badminton",
    body: "Rally scoring to 21, best-of-three games and a game counter — indoor panels sized for the hall.",
  },
  {
    icon: "🏐",
    name: "Volleyball",
    body: "Points and set scores for both teams, with sets won carried across the match.",
  },
];

export default function OtherSports() {
  usePageMeta({
    title: "Basketball, Cricket, Hockey, Tennis, Badminton & Volleyball Scoreboards | CluScore",
    description:
      "LED scoreboards for basketball, cricket, hockey, tennis, badminton and volleyball clubs. Phone control over club Wi-Fi, sponsor advertising, Irish assembled and supported.",
    path: "/other-sports",
  });

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
                Other sports
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              One board.{" "}
              <span className="relative whitespace-nowrap">
                Your sport
                <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-primary" />
              </span>
              , your format.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Basketball, cricket, hockey, tennis, badminton and volleyball — the same Irish
              assembled LED panel and phone control, configured for the way your sport keeps score.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
              >
                Get a quote
              </a>
              <a
                href="#sports"
                className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                See the formats →
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
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Indoor / outdoor
                </dt>
                <dd className="mt-1 text-sm font-semibold">Both</dd>
              </div>
            </dl>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-ink shadow-panel">
            <img
              src={cricketHero.url}
              alt="CluScore LED cricket scoreboard showing total, wickets, overs and batsman details"
              className="aspect-[4/3] w-full object-contain"
            />
          </div>

        </div>
      </section>

      <section id="sports" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead
          eyebrow="Sports we cover"
          title="Configured for the way your sport keeps score."
          subtitle="Every format below runs on the same hardware and the same phone control page — we set the scoring logic, clock and periods to suit."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((s) => (
            <div
              key={s.name}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl yellow-bar text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Playing something not listed — handball, athletics, camogie blitzes, multi-sport
          complexes? Tell us the format and we'll configure the board for it.
        </p>
      </section>

      <HowItWorks />
      <PhoneShowcase
        title="The whole match, from the palm of your hand."
        subtitle="The CluScore control page opens in a browser on any smartphone or tablet on the club Wi-Fi, with the scoring buttons set for your sport. No app to install."
        scoreCaption="Score buttons set for your sport."
        ftCaption="Live scoreline in your format."
      />
      <FeatureGrid
        items={[
          ["Sport-specific scoring", "Points, runs, games or sets — set up for your format."],
          ["Configurable clock", "Count up or count down, with halves, quarters or innings."],
          ["Auto-scaling team names", "Long club and school names still fit and stay legible."],
          ["Welcome splash", "Your club crest on power-on."],
          ["Text ad mode", "Sponsor messages, lotto reminders, notices."],
          ["Image ad mode", "Sponsor logos and posters between action."],
          ["Video ad mode", "Looping muted video clips."],
          ["Phone/tablet control", "Any Modern SmartPhone or Tablet will work."],
          ["Indoor or outdoor panels", "Hall-sized panels or weatherproof pitch-side builds."],
          ["Reboots itself", "Auto-starts on power-on, respawns if it crashes."],
          ["Made in Ireland", "Built and supported locally."],
        ]}
        title="Everything the board does — nothing you don't need."
      />
      <Gallery
        heading="Some projects we have completed"
        blurb="The same LED hardware, mounting and phone control we install for GAA clubs — configured for your sport."
        leadTile={{
          src: cricketHero.url,
          label: "Cricket · total, wickets, overs and batsman detail",
          club: "CRICKET",
        }}
        secondTile={{
          src: basketballHero.url,
          label: "Basketball · running points, period and game clock",
          club: "BASKETBALL",
        }}
        thirdTile={{
          src: badmintonHero.url,
          label: "Badminton · rally scoring, games won and match timer",
          club: "BADMINTON",
        }}


      />

      <FAQ
        title="Questions clubs usually ask."
        faqs={[
          {
            q: "Our sport isn't listed — can you still do it?",
            a: "Almost certainly. The scoring logic, clock and period labels are configurable, so tell us the format and we'll set the board up for it.",
          },
          {
            q: "Can one board handle more than one sport?",
            a: "Yes. Multi-sport venues can switch between configured formats from the phone control page.",
          },
          {
            q: "Do you supply indoor panels for halls?",
            a: "Yes. We build hall-sized indoor panels as well as weatherproof pitch-side installs.",
          },
          {
            q: "Do we need internet?",
            a: "No. Everything runs on the venue's local Wi-Fi. Internet is only needed if you want us to update the board remotely.",
          },
          {
            q: "Can we sell advertising on it?",
            a: "Yes. Upload sponsor images, videos or text from your phone; they display between the action and outside match days.",
          },
          {
            q: "Who supports it?",
            a: "Interactive Displays Ireland — remote diagnostics the same day, and on-site visits for hardware issues.",
          },
        ]}
      />
      <CTABand />
      <Contact sport="Other sports" />
    </>
  );
}
