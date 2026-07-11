import { HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { PawMatchBrowser } from "@/components/pawmatch-browser";

export const metadata = { title: "PawMatch" };

export default function PawMatchPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">PawMatch · Local shelter dogs</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">
              Someone nearby is waiting to meet you.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Browse adoptable dogs from trusted shelters, save your favorites, and help a good dog get seen.
            </p>
          </div>
          <div className="hidden items-center gap-3 rounded-3xl bg-peach/70 px-5 py-4 text-sm font-semibold text-ink md:flex">
            <HeartHandshake className="h-5 w-5" />
            28 local adoptions this month
          </div>
        </div>
        <PawMatchBrowser />
      </section>
    </main>
  );
}
