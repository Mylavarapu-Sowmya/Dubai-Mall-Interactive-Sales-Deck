import { SlideShell, CinematicBackdrop, SlideHeader } from "@/deck/SlideShell";
import attractions from "@/assets/attractions-section.jpg";
import fountain from "@/assets/fountain-views.jpg";

const items = [
  { n: "01", k: "Dubai Aquarium", v: "10M-litre tank · 33,000 marine animals", note: "World's largest suspended aquarium" },
  { n: "02", k: "VR Park", v: "75,000 sq ft · 30 attractions", note: "Largest indoor VR park on earth" },
  { n: "03", k: "KidZania", v: "80 role-play experiences", note: "Family anchor · 4hr+ dwell" },
  { n: "04", k: "The Dubai Ice Rink", v: "Olympic-size · concert capable", note: "Doubles as 2,000-cap event floor" },
  { n: "05", k: "The Dubai Fountain", v: "275m show · 6,600 lights", note: "Most-watched free attraction in MENA" },
];

export default function AttractionsSlide() {
  return (
    <SlideShell bg="ink" className="text-background">
      <CinematicBackdrop src={attractions} alt="Dubai Aquarium" overlay={0.6} />

      <div className="absolute inset-0 z-10 grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-6 px-6 lg:px-12 pt-28 pb-32 flex flex-col justify-between">
          <div>
            <SlideHeader number="06 — 07" eyebrow="Attractions & Entertainment" className="opacity-90" />
            <h2 className="anim-fade-up delay-100 mt-8 font-display text-6xl lg:text-8xl leading-[0.92]">
              Not a mall.<br/>
              <span className="italic">A theme park</span><br/>that sells handbags.
            </h2>
            <p className="anim-fade-up delay-200 mt-8 max-w-lg text-base lg:text-lg text-background/80 leading-relaxed">
              Five flagship attractions inside one footprint generate the dwell time and
              repeat visitation that turn every retail tenant into a weekly habit, not a
              tourist stop.
            </p>
          </div>
          <div className="anim-fade-up delay-400 mt-10">
            <span className="font-display italic text-2xl opacity-90">"The Dubai Mall is the only retail asset on earth where a shopper, a family, and a tourist arrive on the same morning — and stay until midnight."</span>
            <div className="mt-3 font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">— Emaar Malls Annual Report</div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 relative">
          <div className="absolute inset-0 lg:inset-auto lg:right-12 lg:top-28 lg:bottom-32 lg:w-full max-w-md ml-auto px-6 lg:px-0 flex flex-col justify-center gap-3">
            {items.map((it, i) => (
              <div
                key={it.k}
                className="anim-slide-right group flex items-baseline gap-5 border-b border-background/20 pb-3"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <span className="font-mono-ed text-[10px] tracking-[0.22em] opacity-60 tabular-nums">{it.n}</span>
                <div className="flex-1">
                  <div className="font-display text-2xl">{it.k}</div>
                  <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-70">{it.v}</div>
                </div>
                <span className="hidden xl:inline text-xs opacity-50">{it.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative corner image */}
      <img src={fountain} alt="" className="hidden lg:block absolute bottom-12 left-12 w-32 h-44 object-cover opacity-90 anim-fade-up delay-700" />
    </SlideShell>
  );
}
