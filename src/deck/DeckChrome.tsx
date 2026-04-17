import { useDeck } from "./DeckContext";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Menu, X, LayoutGrid } from "lucide-react";

export function TopChrome() {
  const { present, togglePresent, setNavOpen, navOpen, flatSlides, currentIndex } = useDeck();
  if (present) return null;
  return (
    <header className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-6 lg:px-10 py-5 pointer-events-none">
      <div className="flex items-center gap-6 pointer-events-auto">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="group inline-flex items-center gap-3 px-3 py-2 -ml-3 rounded-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          aria-label="Open chapters menu"
        >
          <span className="grid place-items-center h-7 w-7 border hairline group-hover:border-foreground transition-colors">
            {navOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
          </span>
          <span className="font-mono-ed text-[11px] uppercase tracking-[0.22em]">Index</span>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-3 pointer-events-auto select-none anim-fade-in">
        <span className="font-mono-ed text-[11px] tracking-[0.22em] opacity-60">THE DUBAI MALL</span>
        <span className="hairline h-px w-8 opacity-50" />
        <span className="font-display text-base italic opacity-80">Sales Experience</span>
      </div>

      <div className="flex items-center gap-5 pointer-events-auto">
        <span className="font-mono-ed text-[11px] tracking-[0.22em] opacity-70 tabular-nums">
          {String(currentIndex + 1).padStart(2, "0")} / {String(flatSlides.length).padStart(2, "0")}
        </span>
        <button
          onClick={togglePresent}
          className="grid place-items-center h-7 w-7 border hairline text-foreground/80 hover:text-foreground hover:border-foreground transition-colors"
          aria-label="Present"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  );
}

/** Always-visible floating Index trigger — gives users a permanent way in. */
export function FloatingIndexButton() {
  const { setNavOpen, navOpen, present, flatSlides, currentIndex } = useDeck();
  if (present || navOpen) return null;
  return (
    <button
      onClick={() => setNavOpen(true)}
      className="hidden lg:flex group fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 anim-fade-in delay-500"
      aria-label="Open index"
    >
      <span className="grid place-items-center h-12 w-12 border hairline bg-paper/70 backdrop-blur-md text-foreground/70 group-hover:text-foreground group-hover:border-accent group-hover:bg-paper transition-all duration-300 group-hover:scale-110 shadow-soft">
        <LayoutGrid className="h-4 w-4" />
      </span>
      <span className="font-mono-ed text-[9px] uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity [writing-mode:vertical-rl] rotate-180">
        Index · {String(currentIndex + 1).padStart(2, "0")}/{String(flatSlides.length).padStart(2, "0")}
      </span>
    </button>
  );
}

export function BottomControls() {
  const { prev, next, current, currentIndex, flatSlides, present, togglePresent } = useDeck();
  const atStart = currentIndex === 0;
  const atEnd = currentIndex === flatSlides.length - 1;
  const nextSlide = !atEnd ? flatSlides[currentIndex + 1] : null;
  const prevSlide = !atStart ? flatSlides[currentIndex - 1] : null;

  return (
    <div className="absolute bottom-0 inset-x-0 z-40 px-6 lg:px-10 py-5 flex items-end justify-between gap-4 pointer-events-none">
      <div className="pointer-events-auto max-w-xs hidden sm:block">
        {!present && (
          <div className="flex flex-col gap-1 anim-fade-up">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-50">Now viewing</span>
            <span className="font-display text-2xl leading-none">{current.slide.title}</span>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-50 mt-1">{current.chapterLabel}</span>
          </div>
        )}
      </div>

      <div className="pointer-events-auto flex items-center gap-3 ml-auto">
        {/* Previous — outlined with peek of previous title on hover */}
        <button
          onClick={prev}
          disabled={atStart}
          className="group relative h-12 inline-flex items-center gap-2 pl-3 pr-5 border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="flex flex-col items-start leading-tight">
            <span className="font-mono-ed text-[9px] uppercase tracking-[0.22em] opacity-50">Prev</span>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.18em] max-w-[120px] truncate">
              {prevSlide?.slide.title ?? "Start"}
            </span>
          </span>
          <span className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
        </button>

        {/* Next — gold accent, prominent, with shimmer on hover */}
        <button
          onClick={next}
          disabled={atEnd}
          className="group relative h-12 inline-flex items-center gap-3 pl-5 pr-3 bg-foreground text-background border border-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden shadow-elegant hover:shadow-glow"
          aria-label="Next slide"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <span className="relative flex flex-col items-start leading-tight">
            <span className="font-mono-ed text-[9px] uppercase tracking-[0.22em] opacity-70">Next</span>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.18em] max-w-[140px] truncate">
              {nextSlide?.slide.title ?? "End"}
            </span>
          </span>
          <span className="relative grid place-items-center h-9 w-9 bg-background/15 group-hover:bg-background/25 transition-colors">
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>

        {present && (
          <button
            onClick={togglePresent}
            className="h-12 w-12 ml-2 grid place-items-center border border-foreground/20 hover:border-foreground/80 transition-colors"
            aria-label="Exit fullscreen"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export function ProgressRail() {
  const { flatSlides, currentIndex } = useDeck();
  const pct = ((currentIndex + 1) / flatSlides.length) * 100;
  return (
    <div className="absolute top-0 inset-x-0 h-[2px] z-50 bg-foreground/5">
      <div
        className="h-full bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_100%] anim-shimmer-bg transition-[width] duration-700 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
