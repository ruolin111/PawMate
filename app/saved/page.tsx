import { BookmarkCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { SavedList } from "@/components/saved-list";

export const metadata = { title: "Saved" };

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Your saved PawMate list</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">
              Keep favorite dogs and helpful posts close.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Everything you save from PawMatch and Community appears here so you can come back when you’re ready.
            </p>
          </div>
          <div className="hidden items-center gap-3 rounded-3xl bg-mist px-5 py-4 text-sm font-semibold text-ink md:flex">
            <BookmarkCheck className="h-5 w-5" />
            Synced on this device
          </div>
        </div>

        <SavedList />
      </section>
    </main>
  );
}
