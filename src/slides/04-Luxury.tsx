import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import luxury from "@/assets/luxury-section.jpg";
import fashion from "@/assets/fashion-avenue.jpg";

const houses = ["Louis Vuitton", "Chanel", "Hermès", "Dior", "Cartier", "Bvlgari", "Saint Laurent", "Prada", "Tiffany & Co.", "Gucci", "Fendi", "Bottega Veneta"];

export default function LuxurySlide() {
  return (
    <SlideShell bg="warm">
      <div className="absolute inset-0 grid grid-cols-12 gap-0">
        {/* Left image */}
        <div className="col-span-12 lg:col-span-6 relative">
          <img src={luxury} alt="Luxury wing" className="absolute inset-0 h-full w-full object-cover anim-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-paper-warm/40" />
          <div className="absolute bottom-8 left-8 right-8 anim-fade-up delay-300">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] text-background bg-foreground/80 px-2 py-1">Fashion Avenue · 150 brands</span>
          </div>
        </div>

        {/* Right text */}
        <div className="col-span-12 lg:col-span-6 px-6 lg:px-12 py-28 flex flex-col">
          <SlideHeader number="04 — 07" eyebrow="Luxury" />
          <h2 className="anim-fade-up delay-100 mt-8 font-display text-6xl lg:text-7xl leading-[0.95]">
            <span className="italic">Maison</span> after maison.
          </h2>
          <p className="anim-fade-up delay-200 mt-6 max-w-md text-ink-soft text-base lg:text-lg leading-relaxed">
            Fashion Avenue is the largest concentration of luxury under one roof in the Middle East.
            150 maisons, ten flagship duplexes, and the highest spend-per-visitor of any
            luxury district globally — including Avenue Montaigne and Bond Street.
          </p>

          {/* Marquee of houses */}
          <div className="anim-fade-up delay-300 mt-10 -mx-6 lg:-mx-12 overflow-hidden border-y hairline">
            <div className="flex whitespace-nowrap py-6 anim-marquee">
              {[...houses, ...houses].map((h, i) => (
                <span key={i} className="font-display text-3xl italic px-8 opacity-70">
                  {h} <span className="opacity-30">·</span>
                </span>
              ))}
            </div>
          </div>

          <div className="anim-fade-up delay-500 mt-auto pt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="font-display text-5xl tabular-nums">$3,400</div>
              <div className="mt-2 font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">Avg. luxury basket size</div>
            </div>
            <div>
              <div className="font-display text-5xl tabular-nums">38%</div>
              <div className="mt-2 font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">Of mall revenue from luxury wing</div>
            </div>
          </div>
        </div>
      </div>

      {/* secondary image overlap */}
      <img src={fashion} alt="" className="hidden xl:block absolute right-12 bottom-12 w-48 h-64 object-cover anim-fade-up delay-700 shadow-2xl" />
    </SlideShell>
  );
}
