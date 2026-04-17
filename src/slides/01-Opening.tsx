import { useDeck } from "@/deck/DeckContext";
import { SlideShell } from "@/deck/SlideShell";
import { ChevronDown } from "lucide-react";

export default function OpeningSlide() {
  const { next } = useDeck();
  return (
    <SlideShell bg="ink" className="text-background">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90 anim-fade-in"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Top mark */}
      <div className="absolute top-24 lg:top-28 left-6 lg:left-10 z-10 anim-fade-in">
        <div className="flex items-center gap-3">
          <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] opacity-80">Established 2008 · Downtown Dubai</span>
        </div>
      </div>

      {/* Headline block — bottom-left, editorial */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full px-6 lg:px-10 pb-32 lg:pb-40">
          <div className="max-w-5xl">
            <div className="anim-fade-up delay-200">
              <span className="font-mono-ed text-[11px] uppercase tracking-[0.3em] opacity-80">An Invitation</span>
            </div>
            <h1 className="anim-fade-up delay-300 mt-6 font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] tracking-tight">
              The world<span className="italic font-light">'</span>s most<br/>
              <span className="italic font-light">visited</span> destination.
            </h1>
            <div className="anim-fade-up delay-500 mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p className="max-w-md text-base lg:text-lg leading-relaxed text-background/80">
                12&nbsp;million square feet. 1,200&nbsp;stores. 105&nbsp;million visitors a year.
                The Dubai Mall is not a mall — it is the cultural heart of a city, and the
                most concentrated commercial audience on earth.
              </p>
              <div className="flex items-center gap-6">
                <button onClick={next} className="deck-btn-accent group">
                  Begin Experience
                  <ChevronDown className="h-3 w-3 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side ticker */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10 anim-fade-in delay-700">
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 opacity-70">Reel 01 — Live capture</span>
        <span className="hairline h-16 w-px opacity-40" />
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
      </div>
    </SlideShell>
  );
}
