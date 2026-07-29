import SportPage from "@/pages/SportPage";

export default function Rugby() {
  return (
    <SportPage
      path="/rugby"
      metaTitle="Rugby LED Scoreboards | CluScore Ireland"
      metaDescription="LED rugby scoreboards with tries, conversions, penalties and drop goals, phone control over club Wi-Fi and sponsor advertising. Irish assembled and supported."
      eyebrow="Rugby"
      h1={
        <>
          A rugby scoreboard your{" "}
          <span className="relative whitespace-nowrap">
            whole ground
            <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-primary" />
          </span>{" "}
          can read.
        </>
      }
      intro="Running totals, match clock and half indicator on a bright LED panel — updated from any phone on the club Wi-Fi, with sponsor slots between the action."
      stats={[
        ["Made in", "Ireland 🇮🇪"],
        ["Control", "Any Smart Phone"],
        ["Panel size", "1.5–6 m+"],
      ]}
      scoringTitle="Set up for rugby scoring, clock and periods."
      scoringCards={[
        {
          icon: "🏉",
          title: "Tries, cons, pens, drop goals.",
          body: "Add 5, 2 or 3 with a single tap. The board shows the running total for home and away, big and clear from the far touchline.",
        },
        {
          icon: "⏱️",
          title: "Match clock that counts up.",
          body: "40-minute halves with stoppage, start/stop control and a clear half indicator. Adjust anything mid-match from your phone.",
        },
        {
          icon: "💶",
          title: "Sponsor slots at half time.",
          body: "Rotate sponsor logos, videos or scrolling text between periods — a straightforward earner for the club.",
        },
      ]}
      features={[
        ["Rugby scoring", "Running totals with one-tap try, conversion, penalty and drop goal."],
        ["Count-up match clock", "40-minute halves, stoppage time and clear half indicator."],
        ["Auto-scaling team names", "Long club names still fit and stay legible."],
        ["Welcome splash", "Your club crest on power-on."],
        ["Text ad mode", "Sponsor messages, lotto reminders, notices."],
        ["Image ad mode", "Sponsor logos and posters between action."],
        ["Video ad mode", "Looping muted video clips."],
        ["Phone/tablet control", "Any Modern SmartPhone or Tablet will work."],
        ["Standard LED panels", "Irish assembled LED Scoreboards."],
        ["Reboots itself", "Auto-starts on power-on, respawns if it crashes."],
        ["Made in Ireland", "Built and supported locally."],
      ]}
      phoneTitle="The whole match, from the palm of your hand."
      phoneSubtitle="The CluScore control panel opens in a browser on any smartphone or tablet on the club Wi-Fi — configured with rugby scoring instead of goals and points. No app to install."
      scoreCaption="Try, conversion, penalty — one tap."
      ftCaption="Live rugby scoreline."
      faqs={[
        {
          q: "Can it handle rugby scoring properly?",
          a: "Yes. The control page is configured with try, conversion, penalty and drop goal buttons that add the correct value to the running total — no manual arithmetic on the sideline.",
        },
        {
          q: "Does the clock count up like a rugby match?",
          a: "Yes. The timer counts up through 40-minute halves with stoppage, and you can start, stop or correct it from your phone at any time.",
        },
        {
          q: "Will it fit our ground?",
          a: "Panel sizes are flexible, from around 1.5 m × 0.75 m up to 6 m+ for larger grounds. We spec the panel to your wall, stand or freestanding frame.",
        },
        {
          q: "Do we need internet?",
          a: "No. Everything runs on the club's local Wi-Fi. Internet is only needed if you want us to update the board remotely.",
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
  );
}
