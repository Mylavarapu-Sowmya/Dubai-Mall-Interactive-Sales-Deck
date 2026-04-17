import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import dining from "@/assets/dining-section.jpg";
import souk from "@/assets/souk-al-bahar.jpg";
import chinatown from "@/assets/chinatown.jpg";

const venues = [
  { name: "Cipriani", note: "Italian icon · Dubai debut" },
  { name: "Estiatorio Milos", note: "Greek seafood, sea view" },
  { name: "Hutong", note: "Imperial Chinese · Burj views" },
  { name: "Carbone", note: "NYC fine dining export" },
  { name: "Nobu", note: "Aoki classic · 4 levels" },
  { name: "Avli by Tashas", note: "Mediterranean garden" },
];

export default function DiningSlide() {
  return (
    <SlideShell bg="paper">
      <div className="absolute inset-0 grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-5 px-6 lg:px-12 pt-28 pb-32 flex flex-col">
          <SlideHeader number="05 — 07" eyebrow="Dining & Lifestyle" />
          <h2 className="anim-fade-up delay-100 mt-8 font-display text-6xl lg:text-7xl leading-[0.95]">
            A culinary<br/>
            <span className="italic">capital</span><br/>by accident.
          </h2>
          <p className="anim-fade-up delay-200 mt-6 text-ink-soft text-base lg:text-lg leading-relaxed max-w-md">
            200+ venues. From Michelin imports to street legends, three lakeside districts —
            Souk Al Bahar, The Promenade, and Chinatown — turn a meal into a 4-hour evening
            and a single visit into multi-day stays at the surrounding hotels.
          </p>

          <div className="anim-fade-up delay-400 mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
            {venues.map((v) => (
              <div key={v.name} className="border-t hairline pt-3">
                <div className="font-display text-xl">{v.name}</div>
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60 mt-1">{v.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 relative grid grid-rows-2 grid-cols-2 gap-2 p-6 lg:p-10">
          <img src={dining} alt="Lakeside dining" className="row-span-2 col-span-1 h-full w-full object-cover anim-fade-up delay-200" />
          <img src={souk} alt="Souk Al Bahar" className="h-full w-full object-cover anim-fade-up delay-300" />
          <img src={chinatown} alt="Chinatown district" className="h-full w-full object-cover anim-fade-up delay-400" />
        </div>
      </div>
    </SlideShell>
  );
}
