import Link from "next/link";
import {
  AlertTriangle,
  Bot,
  Compass,
  MapPin,
  Route,
  Sparkles,
} from "lucide-react";
import { DogImage } from "@/components/image-placeholder";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { dogs } from "@/data/dogs";
import { cn } from "@/lib/utils";

const aiPicks = [
  {
    dog: dogs.find((dog) => dog.id === "milo") ?? dogs[7],
    shelter: "Sacramento SPCA",
    eta: "12 mins away",
    match: 96,
    color: "bg-[#DDF8E8] text-[#198248]",
  },
  {
    dog: dogs.find((dog) => dog.id === "luna") ?? dogs[4],
    shelter: "Front Street Shelter",
    eta: "16 mins away",
    match: 92,
    color: "bg-[#E4ECFF] text-[#285FD4]",
  },
  {
    dog: dogs.find((dog) => dog.id === "max") ?? dogs[0],
    shelter: "Bradshaw Animal Shelter",
    eta: "18 mins away",
    match: 89,
    color: "bg-[#FFF1CC] text-[#9A6A08]",
  },
];

const lifestyleFilters = [
  { label: "🥾 Hiking Buddy", className: "bg-[#EEF5FF] text-[#245DD8]" },
  { label: "☀️ Beach Friendly", className: "bg-[#FFF7E6] text-[#B75D19]" },
  { label: "🏙 Apartment", className: "bg-[#EAFBF2] text-[#14764B]" },
  { label: "☕ Café Friendly", className: "bg-[#FFF0F2] text-[#B82D4D]" },
];

const mapPins = [
  {
    label: "96% Match",
    dog: "Milo",
    shelter: "Sacramento SPCA",
    top: "31%",
    left: "54%",
    className: "bg-[#5748E8] text-white",
  },
  {
    label: "92% Match",
    dog: "Luna",
    shelter: "Front Street",
    top: "52%",
    left: "72%",
    className: "bg-[#2F75E8] text-white",
  },
  {
    label: "89% Match",
    dog: "Max",
    shelter: "Bradshaw",
    top: "64%",
    left: "37%",
    className: "bg-[#239B64] text-white",
  },
  {
    label: "4 shelters",
    dog: "Search area",
    shelter: "20 min radius",
    top: "22%",
    left: "22%",
    className: "bg-white text-ink ring-1 ring-ink/10",
  },
];

export function PawMatchAiDiscovery() {
  return (
    <section className="mt-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
      <div className="space-y-5">
        <div className="overflow-hidden rounded-[2rem] bg-[#5748E8] p-7 text-white shadow-soft sm:p-9">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            <Sparkles className="h-4 w-4" />
            AI discovery summary
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
            Good afternoon, Amanda!
          </h2>
          <p className="mt-4 text-base leading-7 text-white/88 sm:text-lg">
            I&apos;ve found <strong className="text-white">4 shelters</strong> within 20 mins of Sacramento with{" "}
            <strong className="text-white">12 dogs</strong> that fit your{" "}
            <strong className="text-white">Hiking Buddy</strong> lifestyle.{" "}
            <strong className="text-white">Milo at Sacramento SPCA</strong> is your top match{" "}
            <strong className="text-white">(96%)</strong>.
          </p>
          <Link href="#pawmatch-results" className={buttonStyles("secondary", "mt-7 bg-white px-7 text-[#5748E8] hover:bg-white/90")}>
            View matches
          </Link>
        </div>

        <Card className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold tracking-[-0.03em] text-ink">
              California lifestyle filter
            </h3>
            <Tag>AI tuned</Tag>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {lifestyleFilters.map((filter) => (
              <span
                key={filter.label}
                className={cn("rounded-full px-4 py-2 text-sm font-bold", filter.className)}
              >
                {filter.label}
              </span>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="text-2xl font-bold tracking-[-0.04em] text-ink">
            Today&apos;s AI picks
          </h3>
          <div className="mt-4 space-y-3">
            {aiPicks.map((pick) => (
              <Link
                key={pick.dog.id}
                href={`/pawmatch/${pick.dog.id}`}
                className="flex items-center gap-4 rounded-[1.4rem] border border-ink/[0.07] bg-paper p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <DogImage
                  name={pick.dog.name}
                  palette={pick.dog.palette}
                  image={pick.dog.image}
                  compact
                  className="h-16 w-16 shrink-0 rounded-2xl"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-lg font-bold tracking-[-0.03em] text-ink">
                    {pick.dog.name}, {pick.dog.breed}
                  </p>
                  <p className="truncate text-sm font-semibold text-muted">
                    {pick.shelter} · {pick.eta}
                  </p>
                </div>
                <span className={cn("shrink-0 rounded-full px-3 py-1 text-sm font-bold", pick.color)}>
                  {pick.match}% Match
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Card className="overflow-hidden p-4 sm:p-5">
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.7rem] border border-dashed border-[#B9CBDB] bg-[#EEF4FA] subtle-grid lg:min-h-[760px]">
          <div className="absolute left-5 top-5 z-10 max-w-sm rounded-[1.5rem] bg-white/95 p-5 shadow-soft backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#E26F1C]">
              <AlertTriangle className="h-4 w-4" />
              Weather alert
            </div>
            <p className="mt-3 text-lg font-bold text-ink">Sacramento: 92°F</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-muted">
              AI: Keep walks under 15 mins today. I prioritized shaded parks and nearby meet-and-greets.
            </p>
          </div>

          <div className="absolute bottom-5 left-5 z-10 max-w-md rounded-[1.5rem] bg-ink p-5 text-white shadow-soft">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              <Bot className="h-4 w-4" />
              PawMate AI agent
            </div>
            <p className="mt-3 text-sm leading-6 text-white/88">
              I matched energy level, commute time, shade access, and home size. Milo scores highest because he is food-motivated, playful, and close enough for a low-stress first visit.
            </p>
          </div>

          <div className="absolute left-[12%] top-[48%] h-44 w-44 rounded-full border border-[#5748E8]/20 bg-[#5748E8]/5" />
          <div className="absolute left-[28%] top-[22%] h-80 w-80 rounded-full border border-[#5748E8]/15 bg-white/20" />
          <div className="absolute bottom-[14%] right-[12%] h-64 w-64 rounded-full border border-[#2F75E8]/15 bg-[#2F75E8]/5" />

          <div className="absolute inset-x-12 top-1/2 h-1 -rotate-6 rounded-full bg-white/70" />
          <div className="absolute left-1/2 top-16 h-[68%] w-1 rotate-12 rounded-full bg-white/70" />
          <div className="absolute bottom-20 left-20 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs font-bold text-muted shadow-sm">
            <Route className="h-4 w-4 text-clay" />
            20 min Sacramento radius
          </div>

          {mapPins.map((pin) => (
            <div
              key={`${pin.dog}-${pin.label}`}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className={cn("rounded-full px-4 py-2 text-sm font-bold shadow-soft", pin.className)}>
                {pin.label}
              </div>
              <div className="mx-auto mt-2 w-max rounded-2xl bg-white/90 px-3 py-2 text-center text-xs font-semibold text-ink shadow-sm">
                <span className="block">{pin.dog}</span>
                <span className="block text-muted">{pin.shelter}</span>
              </div>
            </div>
          ))}

          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-full bg-white/60 px-5 py-3 text-center text-lg font-bold text-muted backdrop-blur-sm">
              Map view · AI match layer
            </div>
          </div>

          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-ink shadow-sm">
            <Compass className="h-4 w-4 text-[#5748E8]" />
            Sacramento, CA
          </div>
          <div className="absolute right-5 bottom-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-ink shadow-sm">
            <MapPin className="h-4 w-4 text-clay" />
            4 shelters · 12 matching dogs
          </div>
        </div>
      </Card>
    </section>
  );
}
