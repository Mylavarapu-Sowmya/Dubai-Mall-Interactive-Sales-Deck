import { lazy } from "react";
import type { Chapter } from "@/deck/DeckContext";

// Eagerly load the opening slide (first paint), lazy-load the rest for
// faster initial bundle and improved Lighthouse performance.
import OpeningSlide from "@/slides/01-Opening";

const WhyHere = lazy(() => import("@/slides/02-WhyHere"));
const RetailSlide = lazy(() => import("@/slides/03-Retail"));
const LuxurySlide = lazy(() => import("@/slides/04-Luxury"));
const DiningSlide = lazy(() => import("@/slides/05-Dining"));
const AttractionsSlide = lazy(() => import("@/slides/06-Attractions"));
const EventsSlide = lazy(() => import("@/slides/07-Events"));
const LeasingPathsSlide = lazy(() => import("@/slides/08-LeasingPaths"));
const SponsorshipSlide = lazy(() => import("@/slides/09-Sponsorship"));
const EventsModuleSlide = lazy(() => import("@/slides/10-EventsModule"));
const ContactSlide = lazy(() => import("@/slides/11-Contact"));

export const chapters: Chapter[] = [
  {
    id: "overview",
    label: "Overview",
    number: "I",
    slides: [
      { id: "opening", title: "An Invitation", component: OpeningSlide },
      { id: "why-here", title: "Why This Property", component: WhyHere },
      { id: "retail", title: "Retail", component: RetailSlide },
      { id: "luxury", title: "Luxury", component: LuxurySlide },
      { id: "dining", title: "Dining & Lifestyle", component: DiningSlide },
      { id: "attractions", title: "Attractions", component: AttractionsSlide },
      { id: "events", title: "Events & Platform", component: EventsSlide },
    ],
  },
  {
    id: "modules",
    label: "Sub-modules",
    number: "II",
    slides: [
      { id: "leasing-paths", title: "Leasing Paths", component: LeasingPathsSlide },
      { id: "sponsorship-module", title: "Sponsorship Tiers", component: SponsorshipSlide },
      { id: "events-module", title: "Venues & Booking", component: EventsModuleSlide },
    ],
  },
  {
    id: "act",
    label: "The Next Move",
    number: "III",
    slides: [
      { id: "contact", title: "Contact", component: ContactSlide },
    ],
  },
];
