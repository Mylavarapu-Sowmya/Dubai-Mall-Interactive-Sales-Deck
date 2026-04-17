import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import { useDeck } from "@/deck/DeckContext";

const tiers = [
  {
    name: "Atrium",
    price: "From AED 1.2M / yr",
    color: "bg-foreground text-background",
    items: ["Naming rights · 1 of 4 grand atriums", "Year-round logo on directional signage", "4 activation windows / yr", "Quarterly performance dashboard"],
  },
  {
    name: "Platform",
    price: "From AED 4.5M / yr",
    color: "bg-accent text-accent-foreground",
    items: ["All Atrium benefits", "Burj Plaza co-branding rights", "Fountain show product moments", "Always-on app + digital screens", "Dedicated account director"],
  },
  {
    name: "Destination",
    price: "Custom",
    color: "bg-paper-warm border hairline",
    items: ["All Platform benefits", "Full wing or attraction co-naming", "Year-long content & talent program", "Embedded brand pavilion (1,000+ sqft)", "Co-investment in retail extension"],
  },
];

const audience = [
  ["32 yrs", "Median visitor age"],
  ["62%", "International visitors"],
  ["$8,200", "Avg. household income (USD/mo)"],
  ["73%", "Affluent / HNW segment"],
  ["41%", "GCC nationals"],
  ["18%", "China / SE Asia inbound"],
];

export default function SponsorshipSlide() {
  const { goToSlideId } = useDeck();
  return (
    <SlideShell bg="warm">
      <div className="absolute inset-0 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4 px-6 lg:px-12 pt-24 pb-28 border-r hairline flex flex-col">
          <SlideHeader number="II — B" eyebrow="Sub-module · Sponsorship" />
          <h2 className="anim-fade-up delay-100 mt-6 font-display text-5xl lg:text-6xl leading-[0.95]">
            Three tiers.<br/>
            <span className="italic">One audience.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-5 text-ink-soft text-sm leading-relaxed">
            Sponsorship at The Dubai Mall is not a logo placement program — it is media,
            distribution, and physical presence packaged into a single annual platform.
          </p>

          <div className="anim-fade-up delay-300 mt-10 grid grid-cols-2 gap-3">
            {audience.map(([v, k]) => (
              <div key={k} className="border-t hairline pt-3">
                <div className="font-display text-2xl tabular-nums">{v}</div>
                <div className="font-mono-ed text-[9px] uppercase tracking-[0.22em] opacity-60 mt-1">{k}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 anim-fade-up delay-500">
            <button onClick={() => goToSlideId("contact")} className="deck-btn-accent">Talk to Partnerships →</button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 px-6 lg:px-10 pt-24 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={`anim-fade-up flex flex-col p-6 lg:p-8 ${t.color}`}
                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-70">Tier 0{i + 1}</span>
                  <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-70">{i === 1 ? "Most popular" : ""}</span>
                </div>
                <div className="mt-4 font-display text-5xl">{t.name}</div>
                <div className="mt-2 font-mono-ed text-[11px] uppercase tracking-[0.22em] opacity-80">{t.price}</div>
                <ul className="mt-8 space-y-3 text-sm leading-snug">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="opacity-50">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <button onClick={() => goToSlideId("contact")} className={`text-xs uppercase tracking-[0.22em] font-mono-ed underline underline-offset-4 ${i === 1 ? "" : "opacity-80 hover:opacity-100"}`}>
                    Request prospectus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
