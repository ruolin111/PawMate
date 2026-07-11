import Link from "next/link";
import { ArrowLeft, Building2, Mail, MapPin, PawPrint } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { DogCard } from "@/components/dog-card";
import { InteractiveAction } from "@/components/interactive-action";
import { buttonStyles } from "@/components/ui/button";
import { shelterDogs } from "@/data/dogs";

export const metadata = { title: "Sacramento Animal Shelter" };

export default function ShelterPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <Link href="/pawmatch" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to PawMatch
        </Link>

        <header className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-8 text-white shadow-soft sm:p-10 lg:p-12">
          <span className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[45px] border-white/[0.035]" />
          <span className="absolute bottom-0 right-28 h-32 w-32 rounded-t-full bg-mist/[0.08]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-[1.7rem] bg-mist text-ink shadow-lg">
                <Building2 className="h-11 w-11" strokeWidth={1.4} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-butter">Verified local shelter</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">Sacramento Animal Shelter</h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/65">
                  <MapPin className="h-4 w-4" /> Sacramento, CA · 4.2 miles away
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <InteractiveAction label="Follow" doneLabel="Following" icon="follow" variant="secondary" />
              <a href="mailto:hello@sacramentoshelter.example" className={buttonStyles("secondary", "border-white/20 bg-white text-ink hover:bg-cream")}>
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
          <div className="relative mt-9 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
            {[["12", "dogs listed"], ["1.4k", "followers"], ["8", "adopted this month"]].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-xl font-bold sm:text-2xl">{value}</strong>
                <span className="mt-1 block text-xs text-white/55">{label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="mt-14 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Meet the residents</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Dogs in our care</h2>
          </div>
          <div className="hidden items-center gap-2 text-sm font-semibold text-muted sm:flex"><PawPrint className="h-4 w-4" /> Updated today</div>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shelterDogs.map((dog) => <DogCard key={dog.id} dog={dog} />)}
        </div>
      </section>
    </main>
  );
}
