import { SlideShell, CinematicBackdrop, SlideHeader } from "@/deck/SlideShell";
import retail from "@/assets/retail-interior.jpg";
import { useDeck } from "@/deck/DeckContext";

export default function RetailSlide() {
  const { goToSlideId } = useDeck();
  return (
    <SlideShell bg="ink" className="text-background">
      <CinematicBackdrop src={retail} alt="The Dubai Mall retail interior" overlay={0.45} position="center" />

      <div className="absolute inset-0 grid grid-cols-12 gap-0 z-10">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-end px-6 lg:px-12 pb-32">
          <SlideHeader number="03 — 07" eyebrow="Retail" className="opacity-90" />
          <h2 className="anim-fade-up delay-100 mt-8 font-display text-6xl lg:text-8xl leading-[0.95]">
            Where every category<br/>
            <span className="italic">finds its flagship.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-8 max-w-xl text-base lg:text-lg text-background/80 leading-relaxed">
            From global luxury houses to first-to-market concepts, The Dubai Mall is
            where brands debut their most ambitious stores in the region — Galeries Lafayette,
            Bloomingdale's, and a curated 150-brand luxury wing that drives 38% of total mall revenue.
          </p>
          <div className="anim-fade-up delay-300 mt-10 flex flex-wrap items-center gap-3">
            <button onClick={() => goToSlideId("leasing-paths")} className="deck-btn border-background/70 text-background hover:bg-background hover:text-foreground">
              Explore Leasing Paths
            </button>
            <button onClick={() => goToSlideId("luxury")} className="font-mono-ed text-[11px] uppercase tracking-[0.22em] opacity-80 hover:opacity-100 underline underline-offset-4">
              See Luxury wing →
            </button>
          </div>
        </div>

        {/* Right: tenant highlights */}
        <div className="hidden lg:flex col-span-5 flex-col justify-end pb-32 pr-12 gap-4">
          {[
            { k: "Foot traffic / day", v: "287,000" },
            { k: "Avg. dwell time", v: "3h 42m" },
            { k: "International visitors", v: "62%" },
            { k: "Retail occupancy", v: "99.4%" },
          ].map((m, i) => (
            <div
              key={m.k}
              className="anim-slide-right border-b border-background/20 pb-4 flex items-baseline justify-between"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-70">{m.k}</span>
              <span className="font-display text-3xl lg:text-4xl tabular-nums">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
