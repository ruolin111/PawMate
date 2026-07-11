import { Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { CommunityBrowser } from "@/components/community-browser";

export const metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Your dog-friendly neighborhood</p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">
              More walks. More friends. More ways to help.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Meet friendly dog people, trade useful gear, and find trusted help around Sacramento.
            </p>
          </div>
          <div className="hidden items-center gap-3 rounded-3xl bg-butter/70 px-5 py-4 text-sm font-semibold text-ink md:flex">
            <Users className="h-5 w-5" /> 436 neighbors nearby
          </div>
        </div>
        <CommunityBrowser />
      </section>
    </main>
  );
}
