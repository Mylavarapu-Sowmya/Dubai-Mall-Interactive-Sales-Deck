import { SlideShell, SlideHeader } from "@/deck/SlideShell";
import { useDeck } from "@/deck/DeckContext";

const contacts = [
  { team: "Retail Leasing", name: "Leasing Office", email: "leasing@thedubaimall.ae", phone: "+971 4 362 7500" },
  { team: "Brand Partnerships", name: "Partnerships", email: "partners@thedubaimall.ae", phone: "+971 4 362 7510" },
  { team: "Events & Activation", name: "Events Desk", email: "events@thedubaimall.ae", phone: "+971 4 362 7520" },
];

export default function ContactSlide() {
  const { goTo } = useDeck();
  return (
    <SlideShell bg="paper">
      <div className="absolute inset-0 px-6 lg:px-12 pt-24 pb-28 flex flex-col">
        <SlideHeader number="—" eyebrow="The next move" />
        <div className="mt-10 grid grid-cols-12 gap-10 flex-1">
          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <h2 className="anim-fade-up delay-100 font-display text-7xl lg:text-9xl leading-[0.9]">
              Be part of<br/>
              the <span className="italic">most-visited</span><br/>
              place on earth.
            </h2>
            <p className="anim-fade-up delay-200 mt-8 max-w-xl text-ink-soft text-lg leading-relaxed">
              Whether you're a luxury maison, a global brand, or a producer staging the next
              cultural moment — there is a doorway in this mall waiting for your name.
            </p>
            <div className="mt-auto anim-fade-up delay-500 pt-8 flex flex-wrap gap-3">
              <button onClick={() => goTo(0)} className="deck-btn">↺ Restart Experience</button>
              <a href="mailto:leasing@thedubaimall.ae" className="deck-btn-accent">Begin Conversation →</a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
            {contacts.map((c, i) => (
              <div key={c.team} className="anim-fade-up border-t hairline pt-5" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">{c.team}</div>
                <div className="mt-1 font-display text-3xl">{c.name}</div>
                <div className="mt-3 flex flex-col gap-1 text-sm">
                  <a href={`mailto:${c.email}`} className="hover:text-accent transition-colors">{c.email}</a>
                  <span className="text-ink-soft tabular-nums">{c.phone}</span>
                </div>
              </div>
            ))}
            <div className="border-t hairline mt-2 pt-5">
              <div className="font-mono-ed text-[10px] uppercase tracking-[0.22em] opacity-60">In person</div>
              <div className="mt-1 font-display text-2xl">The Dubai Mall · Downtown Dubai · UAE</div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
