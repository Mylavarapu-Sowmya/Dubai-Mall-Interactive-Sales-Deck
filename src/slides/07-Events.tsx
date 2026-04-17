import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import events from "@/assets/events-section.jpg";
import { useDeck } from "@/deck/DeckContext";

const past = [
  { y: "2024", t: "Cartier Trinity 100yr Activation", d: "60-day takeover · Grand Atrium" },
  { y: "2024", t: "Dior Tales of Time", d: "Immersive timepiece pavilion" },
  { y: "2023", t: "BVLGARI Serpenti Factory", d: "Live craft installation" },
  { y: "2023", t: "Apple Vision Pro EMEA debut", d: "First-to-region experience zone" },
  { y: "2022", t: "FIFA World Cup Fan Festival", d: "Outdoor stage · 200K visitors" },
];

export default function EventsSlide() {
  const { goToSlideId } = useDeck();
  return (
    <SlideShell bg="paper">
      <div className="absolute inset-0 grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-7 relative">
          <img src={events} alt="Brand event activation" className="absolute inset-0 h-full w-full object-cover anim-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
          <div className="absolute top-8 left-8 anim-fade-in delay-300">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] bg-foreground text-background px-2 py-1">Live · Always-on programming</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 px-6 lg:px-12 py-28 flex flex-col">
          <SlideHeader number="07 — 07" eyebrow="Events & Platform" />
          <h2 className="anim-fade-up delay-100 mt-8 font-display text-5xl lg:text-7xl leading-[0.95]">
            A platform,<br/>
            <span className="italic">not a building.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-6 text-ink-soft text-base leading-relaxed max-w-md">
            12 dedicated activation zones. 4 outdoor stages. A 30,000-capacity Burj Plaza.
            Brands don't rent space at The Dubai Mall — they program against the largest
            aggregated audience in global retail.
          </p>

          <div className="anim-fade-up delay-300 mt-8 space-y-3">
            <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">Recent activations</div>
            {past.map((p) => (
              <div key={p.t} className="flex items-baseline gap-4 border-b hairline pb-2">
                <span className="font-mono-ed text-[10px] tracking-[0.22em] opacity-60 tabular-nums">{p.y}</span>
                <div className="flex-1">
                  <div className="font-display text-lg">{p.t}</div>
                  <div className="text-xs text-ink-soft">{p.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="anim-fade-up delay-500 mt-auto pt-8 flex flex-wrap gap-2">
            <button onClick={() => goToSlideId("events-module")} className="deck-btn-accent">Events Module →</button>
            <button onClick={() => goToSlideId("sponsorship-module")} className="deck-btn">Sponsorship</button>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
