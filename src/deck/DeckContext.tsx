import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type Slide = {
  id: string;
  title: string;
  eyebrow?: string;
  component: () => JSX.Element;
};

export type Chapter = {
  id: string;
  label: string;
  number: string;
  slides: Slide[];
};

type DeckContextValue = {
  chapters: Chapter[];
  flatSlides: { chapterId: string; chapterLabel: string; slide: Slide; index: number }[];
  currentIndex: number;
  current: { chapterId: string; chapterLabel: string; slide: Slide; index: number };
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  goToSlideId: (id: string) => void;
  present: boolean;
  togglePresent: () => void;
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
  direction: 1 | -1;
};

const DeckContext = createContext<DeckContextValue | null>(null);

export function useDeck() {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used within DeckProvider");
  return ctx;
}

export function DeckProvider({ chapters, children }: { chapters: Chapter[]; children: ReactNode }) {
  const navigate = useNavigate();
  const params = useParams<{ slideId?: string }>();

  const flatSlides = useMemo(() => {
    const out: DeckContextValue["flatSlides"] = [];
    let i = 0;
    for (const ch of chapters) {
      for (const s of ch.slides) {
        out.push({ chapterId: ch.id, chapterLabel: ch.label, slide: s, index: i++ });
      }
    }
    return out;
  }, [chapters]);

  const initialIndex = useMemo(() => {
    if (!params.slideId) return 0;
    const i = flatSlides.findIndex((f) => f.slide.id === params.slideId);
    return i === -1 ? 0 : i;
  }, [params.slideId, flatSlides]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [present, setPresent] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const dirRef = useRef<1 | -1>(1);

  // Sync with route changes (back/forward buttons, deep links)
  useEffect(() => {
    const i = params.slideId
      ? flatSlides.findIndex((f) => f.slide.id === params.slideId)
      : 0;
    if (i !== -1 && i !== currentIndex) {
      dirRef.current = i > currentIndex ? 1 : -1;
      setCurrentIndex(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slideId]);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= flatSlides.length) return;
    dirRef.current = index > currentIndex ? 1 : -1;
    const target = flatSlides[index];
    navigate(`/deck/${target.slide.id}`);
    setNavOpen(false);
  }, [flatSlides, navigate, currentIndex]);

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);
  const goToSlideId = useCallback((id: string) => {
    const i = flatSlides.findIndex((f) => f.slide.id === id);
    if (i !== -1) goTo(i);
  }, [flatSlides, goTo]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { e.preventDefault(); goTo(0); }
      else if (e.key === "End") { e.preventDefault(); goTo(flatSlides.length - 1); }
      else if (e.key === "Escape") { setNavOpen(false); setPresent(false); }
      else if (e.key.toLowerCase() === "m") setNavOpen((v) => !v);
      else if (e.key.toLowerCase() === "f") setPresent((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, flatSlides.length]);

  const togglePresent = useCallback(() => {
    setPresent((p) => {
      const newVal = !p;
      if (newVal && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (!newVal && document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
      return newVal;
    });
  }, []);

  const value: DeckContextValue = {
    chapters,
    flatSlides,
    currentIndex,
    current: flatSlides[currentIndex],
    goTo,
    next,
    prev,
    goToSlideId,
    present,
    togglePresent,
    navOpen,
    setNavOpen,
    direction: dirRef.current,
  };

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}
