import { useState } from "react";
import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import { useDeck } from "@/deck/DeckContext";
import luxury from "@/assets/luxury-section.jpg";
import retail from "@/assets/retail-interior.jpg";
import dining from "@/assets/dining-section.jpg";
import events from "@/assets/events-section.jpg";

const paths = [
  {
    id: "luxury",
    label: "Luxury Flagship",
    image: luxury,
    deck: "Fashion Avenue · Level 2",
    sqft: "8,000 – 22,000 sq ft",
    term: "10 yr · ground & duplex",
    pitch: "Direct adjacency to Cartier, LV, Dior. Largest dedicated luxury wing in MENA. Average basket size $3,400.",
    kpis: [["Avg. spend / visit", "$3,400"], ["Foot traffic / day", "47k"], ["Tourist mix", "78%"]],
    cta: "Request Fashion Avenue floor plan",
  },
  {
    id: "midmarket",
    label: "Mid-Tier Retail",
    image: retail,
    deck: "Grand Atrium · Levels 1-3",
    sqft: "1,200 – 6,000 sq ft",
    term: "5 yr · prime corridors",
    pitch: "Highest converting mainline corridor in the region. Anchored by Galeries Lafayette and Bloomingdale's.",
    kpis: [["Conversion rate", "34%"], ["Avg. dwell", "3h 42m"], ["Repeat visit %", "58%"]],
    cta: "Open mainline leasing pack",
  },
  {
    id: "fb",
    label: "F&B / Lifestyle",
    image: dining,
    deck: "Souk Al Bahar · Promenade · Chinatown",
    sqft: "2,500 – 12,000 sq ft + terraces",
    term: "10 yr · waterfront",
    pitch: "Three lakeside districts with terrace rights and Burj views. Dwell extends 90+ minutes per visit.",
    kpis: [["Evening covers", "12k / night"], ["Lakefront frontage", "1.2 km"], ["Avg. ticket", "$185"]],
    cta: "See waterfront F&B sites",
  },
  {
    id: "popup",
    label: "Pop-up & Activation",
    image: events,
    deck: "12 atrium zones · 4 outdoor stages",
    sqft: "200 – 4,000 sq ft modular",
    term: "1 day – 90 days",
    pitch: "Fastest path to a 287,000-person daily audience. Full media stack included — atrium screens, fountain mapping, social.",
    kpis: [["Activation slots / yr", "180+"], ["Avg. impressions", "2.4M"], ["Lead time", "21 days"]],
    cta: "Book an activation slot",
  },
];

export default function LeasingPathsSlide() {
  const { goToSlideId } = useDeck();
  const [active, setActive] = useState(paths[0].id);
  const a = paths.find((p) => p.id === active)!;
  return (
    <SlideShell bg="paper">
      <div className="absolute inset-0 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5 px-6 lg:px-12 pt-24 pb-28 flex flex-col">
          <SlideHeader number="II — A" eyebrow="Sub-module · Leasing Paths" />
          <h2 className="anim-fade-up delay-100 mt-6 font-display text-5xl lg:text-7xl leading-[0.95]">
            Choose your<br/>
            <span className="italic">tenant story.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-5 text-ink-soft max-w-md">
            Every category has a distinct corridor, audience, and pitch. Select a path
            to see the floor plates, terms, and demographic match for your brand.
          </p>

          <div className="anim-fade-up delay-300 mt-10 flex flex-col">
            {paths.map((p) => {
              const on = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`group flex items-center justify-between border-t hairline py-4 text-left transition-colors ${on ? "text-foreground" : "text-foreground/55 hover:text-foreground"}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-ed text-[10px] tracking-[0.22em] opacity-60 w-10">0{paths.indexOf(p) + 1}</span>
                    <span className={`font-display text-3xl ${on ? "italic" : ""}`}>{p.label}</span>
                  </div>
                  <span className={`font-mono-ed text-[10px] uppercase tracking-[0.22em] transition-opacity ${on ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}>
                    {on ? "selected" : "view"}
                  </span>
                </button>
              );
            })}
            <div className="border-t hairline" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 relative bg-paper-warm">
          <img key={a.image} src={a.image} alt="" className="absolute inset-0 h-full w-full object-cover anim-fade-in opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <div key={a.id} className="anim-fade-up max-w-2xl">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.3em] bg-foreground text-background inline-block px-2 py-1">{a.deck}</div>
              <h3 className="mt-4 font-display text-5xl lg:text-6xl">{a.label}</h3>
              <p className="mt-4 text-base lg:text-lg text-ink-soft max-w-xl leading-relaxed">{a.pitch}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-2xl">
                {a.kpis.map(([k, v]) => (
                  <div key={k} className="border-t border-foreground/30 pt-3">
                    <div className="font-display text-2xl tabular-nums">{v}</div>
                    <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60 mt-1">{k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-ink-soft">
                <span className="font-mono-ed uppercase tracking-[0.22em]">{a.sqft}</span>
                <span className="opacity-40">·</span>
                <span className="font-mono-ed uppercase tracking-[0.22em]">{a.term}</span>
              </div>
              <div className="mt-6 flex gap-2">
                <button onClick={() => goToSlideId("contact")} className="deck-btn-accent">{a.cta} →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
