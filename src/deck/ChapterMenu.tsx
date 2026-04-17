import { useDeck } from "./DeckContext";
import { X } from "lucide-react";

export function ChapterMenu() {
  const { chapters, navOpen, setNavOpen, goToSlideId, current } = useDeck();
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm transition-opacity duration-500 ${navOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setNavOpen(false)}
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-xl z-50 bg-paper text-foreground border-r hairline transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-8 lg:px-12 py-6 border-b hairline">
            <div className="flex flex-col">
              <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">The Dubai Mall</span>
              <span className="font-display text-2xl italic">Index of Chapters</span>
            </div>
            <button onClick={() => setNavOpen(false)} aria-label="Close index" className="hover:opacity-60 transition-opacity">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-8 lg:px-12 py-8 no-scrollbar">
            <ol className="space-y-10">
              {chapters.map((ch, i) => (
                <li key={ch.id}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono-ed text-[11px] tracking-[0.22em] opacity-60 tabular-nums">{ch.number}</span>
                    <span className="hairline h-px flex-1 opacity-40" />
                    <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">{ch.label}</span>
                  </div>
                  <ul className="space-y-2 pl-12">
                    {ch.slides.map((s) => {
                      const active = current.slide.id === s.id;
                      return (
                        <li key={s.id}>
                          <button
                            onClick={() => goToSlideId(s.id)}
                            className={`group flex items-baseline gap-4 text-left w-full py-1.5 ${active ? "text-foreground" : "text-foreground/60 hover:text-foreground"} transition-colors`}
                          >
                            <span className={`font-display text-2xl lg:text-3xl ${active ? "italic" : ""}`}>{s.title}</span>
                            {active && <span className="font-mono-ed text-[10px] tracking-[0.22em] opacity-60">— viewing</span>}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ol>
          </nav>

          <div className="px-8 lg:px-12 py-5 border-t hairline flex items-center justify-between">
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">Press <kbd className="border hairline px-1.5 py-0.5 mx-1">M</kbd> to toggle</span>
            <span className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">Use ← → to navigate</span>
          </div>
        </div>
      </aside>
    </>
  );
}
