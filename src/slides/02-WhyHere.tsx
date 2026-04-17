import { SlideShell, SlideHeader } from "@/deck/SlideShell";

const stats = [
  { value: "105M+", label: "Annual visitors", note: "More than Disneyland Resort & Times Square combined" },
  { value: "12M", label: "Sq ft of total area", note: "Equivalent to 200 football pitches" },
  { value: "1,200+", label: "Retail brands", note: "Including 200 luxury flagships" },
  { value: "200+", label: "F&B venues", note: "From Michelin-starred to street icons" },
];

export default function WhyHere() {
  return (
    <SlideShell bg="paper">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: editorial copy */}
        <div className="lg:col-span-5 px-6 lg:px-12 pt-28 lg:pt-32 pb-32 flex flex-col">
          <SlideHeader number="02 — 07" eyebrow="Why this property" />
          <h2 className="anim-fade-up delay-100 mt-10 font-display text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95]">
            A city<br/>
            <span className="italic">within a city.</span>
          </h2>
          <p className="anim-fade-up delay-200 mt-8 text-base lg:text-lg leading-relaxed text-ink-soft max-w-md">
            Anchored by the Burj Khalifa, fed by 14 metro lines and 200 daily flights,
            The Dubai Mall sits at the geographic center of a region serving
            <span className="text-foreground font-medium"> 2 billion consumers within a four-hour flight</span>.
            It is the highest-grossing retail destination on the planet — and the most photographed.
          </p>

          <div className="anim-fade-up delay-300 mt-auto pt-12 flex items-center gap-6">
            <div className="font-mono-ed text-[11px] uppercase tracking-[0.22em] opacity-60">Source · Visit Dubai 2024</div>
            <span className="hairline h-px flex-1 opacity-40 max-w-[12rem]" />
          </div>
        </div>

        {/* Right: stat grid */}
        <div className="lg:col-span-7 relative bg-paper-warm border-l hairline">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative p-8 lg:p-12 flex flex-col justify-between anim-fade-up`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                {/* dividers */}
                {i % 2 === 0 && <div className="absolute right-0 top-8 bottom-8 w-px hairline" />}
                {i < 2 && <div className="absolute left-8 right-8 bottom-0 h-px hairline" />}
                <div>
                  <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">0{i + 1}</span>
                </div>
                <div>
                  <div className="font-display text-6xl lg:text-7xl xl:text-8xl leading-none tabular-nums">{s.value}</div>
                  <div className="mt-3 font-mono-ed text-[11px] uppercase tracking-[0.22em] opacity-70">{s.label}</div>
                  <div className="mt-3 text-sm text-ink-soft max-w-[18rem] leading-snug">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
