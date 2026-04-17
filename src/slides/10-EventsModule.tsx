import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import { useDeck } from "@/deck/DeckContext";
import events from "@/assets/events-section.jpg";

const venues = [
  { name: "Burj Plaza", cap: "30,000", type: "Outdoor stage · fountains", uses: "Concerts · launches · fan zones" },
  { name: "Grand Atrium", cap: "8,000", type: "Indoor 4-storey atrium", uses: "Brand reveals · runway · gala" },
  { name: "Fashion Avenue Arena", cap: "1,200", type: "Couture / VIP", uses: "Trunk shows · press dinners" },
  { name: "Ice Rink Floor", cap: "2,500", type: "Convertible Olympic ice", uses: "Awards shows · screenings" },
  { name: "Waterfront Terrace", cap: "3,500", type: "Open-air · Burj views", uses: "Receptions · product reveals" },
];

const timeline = [
  ["01", "Brief", "Submit your moment, audience target, and date window."],
  ["02", "Concept", "We respond in 5 days with venue, layout, programming, and budget."],
  ["03", "Production", "Turnkey delivery — staging, AV, talent, F&B, comms, security."],
  ["04", "Activation", "Live ops, on-site media team, real-time analytics dashboard."],
  ["05", "Report", "Full performance recap: footfall, dwell, social reach, ROI."],
];

export default function EventsModuleSlide() {
  const { goToSlideId } = useDeck();
  return (
    <SlideShell bg="ink" className="text-background">
      <div className="absolute inset-0 opacity-30">
        <img src={events} alt="" className="h-full w-full object-cover anim-kenburns" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />

      <div className="absolute inset-0 z-10 grid grid-cols-12 px-6 lg:px-12 pt-24 pb-28 gap-10">
        <div className="col-span-12 lg:col-span-5 flex flex-col">
          <SlideHeader number="II — C" eyebrow="Sub-module · Events & Venues" className="opacity-90" />
          <h2 className="anim-fade-up delay-100 mt-6 font-display text-5xl lg:text-7xl leading-[0.95]">
            Five venues.<br/>
            <span className="italic">One backstage.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-5 text-background/75 text-base leading-relaxed max-w-md">
            From a 30,000-person fountain plaza to an intimate couture salon, every venue
            inside The Dubai Mall is operated by a single in-house events team — turnkey,
            on a 21-day lead time.
          </p>

          <div className="anim-fade-up delay-400 mt-10 space-y-2">
            {timeline.map(([n, k, d]) => (
              <div key={n} className="grid grid-cols-12 gap-3 border-t border-background/20 pt-3">
                <span className="col-span-1 font-mono-ed text-[10px] tracking-[0.22em] opacity-60">{n}</span>
                <span className="col-span-3 font-display text-lg">{k}</span>
                <span className="col-span-8 text-xs opacity-75 leading-snug">{d}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 anim-fade-up delay-700 flex gap-2">
            <button onClick={() => goToSlideId("contact")} className="deck-btn-accent">Submit a Brief →</button>
            <button onClick={() => goToSlideId("sponsorship-module")} className="deck-btn border-background/70 text-background hover:bg-background hover:text-foreground">
              Sponsorship Tiers
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex flex-col">
          <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-70">The venues</div>
          <div className="mt-4 flex flex-col">
            {venues.map((v, i) => (
              <div
                key={v.name}
                className="anim-slide-right group grid grid-cols-12 items-baseline gap-4 border-t border-background/20 py-5 hover:bg-background/5 px-2 -mx-2 transition-colors cursor-default"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <span className="col-span-1 font-mono-ed text-[10px] tracking-[0.22em] opacity-60">0{i + 1}</span>
                <span className="col-span-4 font-display text-3xl lg:text-4xl">{v.name}</span>
                <span className="col-span-3 font-display text-3xl tabular-nums">{v.cap}</span>
                <span className="col-span-4 text-xs opacity-75">
                  <div className="font-mono-ed uppercase tracking-[0.22em] opacity-90 text-[10px]">{v.type}</div>
                  <div className="mt-1">{v.uses}</div>
                </span>
              </div>
            ))}
            <div className="border-t border-background/20" />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
