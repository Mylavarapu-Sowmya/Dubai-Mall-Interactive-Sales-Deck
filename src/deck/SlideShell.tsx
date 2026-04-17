import { ReactNode } from "react";

/**
 * SlideShell — base layout for every slide.
 * Full viewport, paper background, optional grain overlay.
 */
export function SlideShell({
  children,
  className = "",
  bg = "paper",
}: {
  children: ReactNode;
  className?: string;
  bg?: "paper" | "ink" | "warm" | "transparent";
}) {
  const bgClass =
    bg === "ink" ? "bg-foreground text-background" :
    bg === "warm" ? "bg-paper-warm" :
    bg === "transparent" ? "" : "bg-paper";
  return (
    <section className={`relative w-full h-full overflow-hidden ${bgClass} ${className}`}>
      {children}
    </section>
  );
}

/** Cinematic full-bleed image with subtle ken-burns. */
export function CinematicBackdrop({
  src,
  alt,
  overlay = 0.35,
  position = "center",
}: { src: string; alt: string; overlay?: number; position?: string }) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover anim-kenburns"
        style={{ objectPosition: position }}
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, hsl(0 0% 0% / ${overlay * 0.6}) 0%, hsl(0 0% 0% / ${overlay}) 60%, hsl(0 0% 0% / ${overlay * 1.3}) 100%)` }}
      />
    </div>
  );
}

/** Editorial number/eyebrow header used inside slides. */
export function SlideHeader({
  number,
  eyebrow,
  className = "",
}: { number?: string; eyebrow?: string; className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {number && <span className="font-mono-ed text-[11px] tracking-[0.22em] opacity-70">{number}</span>}
      <span className="hairline h-px w-10 opacity-50" />
      {eyebrow && <span className="font-mono-ed text-[11px] uppercase tracking-[0.22em] opacity-70">{eyebrow}</span>}
    </div>
  );
}
