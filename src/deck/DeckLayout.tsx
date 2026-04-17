import { ReactNode, Suspense, useEffect, useRef } from "react";
import { useDeck } from "./DeckContext";
import { TopChrome, BottomControls, ProgressRail, FloatingIndexButton } from "./DeckChrome";
import { ChapterMenu } from "./ChapterMenu";

function SlideFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-paper">
      <div className="flex flex-col items-center gap-4 anim-fade-in">
        <div className="h-px w-16 bg-foreground/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-accent anim-loading-bar" />
        </div>
        <span className="font-mono-ed text-[10px] uppercase tracking-[0.3em] opacity-60">
          Loading chapter
        </span>
      </div>
    </div>
  );
}

export function DeckLayout({ children }: { children?: ReactNode }) {
  const { current, currentIndex, direction } = useDeck();
  const stageRef = useRef<HTMLDivElement>(null);

  // re-trigger entrance animations on slide change
  useEffect(() => {
    if (!stageRef.current) return;
    const cls = direction === 1 ? "anim-slide-in-right" : "anim-slide-in-left";
    stageRef.current.classList.remove("anim-slide-in-right", "anim-slide-in-left");
    void stageRef.current.offsetWidth;
    stageRef.current.classList.add(cls);
  }, [currentIndex, direction]);

  const SlideComp = current.slide.component;

  return (
    <div className="fixed inset-0 bg-background text-foreground overflow-hidden">
      <ProgressRail />
      <TopChrome />
      <ChapterMenu />
      <FloatingIndexButton />

      <div ref={stageRef} key={current.slide.id} className="absolute inset-0 anim-slide-in-right">
        <Suspense fallback={<SlideFallback />}>
          <SlideComp />
        </Suspense>
      </div>

      <BottomControls />
      {children}
    </div>
  );
}
