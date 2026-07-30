import SportPage from "@/pages/SportPage";
import soccerHero from "@/assets/soccer-hero.png.asset.json";

export default function Soccer() {
  return (
    <SportPage
      heroImage={soccerHero.url}
      path="/soccer"
      metaTitle="CluScore — LED Scoreboards for Soccer Clubs | Irish Assembled"
      metaDescription="Irish assembled LED soccer scoreboards: goals, count-up match clock and half indicator, controlled from any phone on club Wi-Fi, with sponsor advertising slots."
      eyebrow="Soccer"
      h1={
        <>
          A Football scoreboard built for{" "}
          <span className="relative whitespace-nowrap">
            club grounds
            <span className="absolute inset-x-0 -bottom-1 h-2 rounded bg-primary" />
          </span>
          .
        </>
      }
      intro="Goals, match clock and half indicator on a bright LED panel — updated from any phone on the club Wi-Fi, with sponsor slots between the action."
      stats={[
        ["Made in", "Ireland 🇮🇪"],
        ["Control", "Any Smart Phone"],
        ["Panel size", "1.5–6 m+"],
      ]}
      scoringTitle="Simple soccer scoring, clock and halves."
      scoringCards={[
        {
          icon: "⚽",
          title: "Goals, home and away.",
          body: "One tap up, one tap back if the ref waves it off. Big digits that read clearly from the far side of the pitch, day or night.",
        },
        {
          icon: "⏱️",
          title: "45-minute halves plus added time.",
          body: "Count-up clock with start, stop and correction from your phone, and a clear 1st / 2nd half indicator.",
        },
        {
          icon: "💶",
          title: "Sponsor-ready between games.",
          body: "Rotate sponsor images, videos or scrolling text at half time and outside match days.",
        },
      ]}
      features={[
        ["Soccer scoring", "Home and away goals, one tap up or down."],
        ["Count-up match clock", "45-minute halves, added time and half indicator."],
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
      phoneSubtitle="The CluScore control panel opens in a browser on any smartphone or tablet on the club Wi-Fi — configured with soccer scoring instead of goals and points. No app to install."
      scoreCaption="Home goal, away goal — one tap."
      ftCaption="Live soccer scoreline."
      faqs={[
        {
          q: "Can the board be used for underage and adult games?",
          a: "Yes. Half length and clock behaviour are configurable, so the same board suits schoolboy, underage and adult fixtures.",
        },
        {
          q: "Does it show added time?",
          a: "Yes. The clock counts up and keeps running through added time, and you can stop or correct it from your phone.",
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
