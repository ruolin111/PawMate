import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Bot,
  Building2,
  CalendarCheck,
  Dog,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { FeatureCard } from "@/components/feature-card";
import { buttonStyles } from "@/components/ui/button";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Never miss care routines",
    copy: "Meals, walks, medicine, and vet notes become one calm, shared rhythm.",
  },
  {
    icon: MapPin,
    title: "Find nearby dog people",
    copy: "Discover the meetups, playdates, and practical help already around you.",
  },
  {
    icon: HeartHandshake,
    title: "Support local shelters",
    copy: "Help more adoptable dogs get seen, saved, and shared with the right homes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream">
      <Navbar showProfile={false} transparent />

      <section className="relative px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="absolute left-[7%] top-12 h-52 w-52 rounded-full bg-peach/35 blur-3xl" />
        <div className="absolute right-[8%] top-32 h-64 w-64 rounded-full bg-mist/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/70 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-clay" />
              A better day, every dog day
            </div>
            <h1 className="max-w-3xl text-balance text-[clamp(3rem,6.2vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.065em] text-ink">
              Personalized care and community,
              <span className="relative ml-3 inline-block text-clay sm:ml-4">
                built for dog owners
                <svg
                  aria-hidden="true"
                  viewBox="0 0 450 20"
                  className="absolute -bottom-3 left-0 w-full text-clay/35"
                  fill="none"
                >
                  <path d="M3 14C99 2 285 3 447 10" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              PawMate is the AI companion that keeps care on track, brings local dog people closer, and helps shelter dogs find their way home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/login" className={buttonStyles("primary", "px-7")}>
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/login" className={buttonStyles("secondary", "px-7")}>
                Log in
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-muted">
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-mist">
                  <Bot className="h-3.5 w-3.5 text-ink" />
                </span>
                Thoughtful AI guidance
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-peach">
                  <HeartHandshake className="h-3.5 w-3.5 text-ink" />
                </span>
                Made for real routines
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px] lg:mx-0">
            <div className="absolute -left-7 top-14 hidden w-40 rotate-[-7deg] rounded-3xl bg-white p-4 shadow-soft sm:block">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold text-ink">
                <BellRing className="h-4 w-4 text-clay" /> Dinner reminder
              </div>
              <p className="text-xs leading-5 text-muted">Biscuit eats around 5:30pm</p>
            </div>
            <div className="absolute -right-6 bottom-16 z-20 hidden w-44 rotate-[6deg] rounded-3xl bg-ink p-4 text-white shadow-soft sm:block">
              <div className="mb-2 flex -space-x-2">
                {["bg-peach", "bg-mist", "bg-butter"].map((color) => (
                  <span key={color} className={`grid h-8 w-8 place-items-center rounded-full border-2 border-ink ${color}`}>
                    <Dog className="h-4 w-4 text-ink" />
                  </span>
                ))}
              </div>
              <p className="text-xs font-semibold leading-5">14 dog people are hiking Saturday</p>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#E8EFEB] p-4 shadow-soft sm:p-6">
              <div className="subtle-grid absolute inset-0 opacity-60" />
              <div className="relative rounded-[2rem] bg-paper p-5 shadow-card sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.17em] text-clay">Today with Biscuit</p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Good morning, Alex</h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-butter">
                    <Dog className="h-7 w-7 text-ink" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["8:00am", "Breakfast", "bg-peach"],
                    ["5:30pm", "Next walk", "bg-mist"],
                    ["All clear", "Medication", "bg-butter"],
                  ].map(([time, label, color]) => (
                    <div key={label} className={`rounded-2xl p-4 ${color}`}>
                      <span className="text-lg font-bold text-ink">{time}</span>
                      <span className="mt-1 block text-xs font-medium text-ink/60">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-3xl border border-ink/[0.07] bg-white p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">PawPal insight</p>
                      <p className="text-xs text-muted">Based on Biscuit’s routine</p>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-muted">
                    It’s warmer today. A walk before dinner will keep her comfortable.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-ink px-4 py-2 text-xs font-bold text-white">Set reminder</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink/5 text-ink">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">One friendly place</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.045em] text-ink sm:text-5xl">
              Everything your dog’s world needs.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={Bot}
              eyebrow="PawPal"
              title="Your AI care agent"
              description="A thoughtful copilot for the small details that make a healthy routine."
              href="/pawpal"
              tone="bg-[#DCEBE6]"
            />
            <FeatureCard
              icon={Building2}
              eyebrow="PawMatch"
              title="Help shelter dogs get seen"
              description="Browse, save, and share wonderful dogs waiting at local shelters."
              href="/pawmatch"
              tone="bg-[#F4D9CA]"
            />
            <FeatureCard
              icon={Users}
              eyebrow="Community"
              title="Connect with dog people nearby"
              description="Find playdates, meetups, useful gear, and trusted neighborhood help."
              href="/community"
              tone="bg-[#F3E3AD]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">How PawMate helps</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-[-0.045em] text-ink sm:text-5xl">
              Less mental load. More good dog days.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="relative text-center">
                <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink shadow-card">
                  <benefit.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <span className="absolute right-4 top-0 text-5xl font-black text-ink/[0.045] sm:right-12 md:right-0">0{index + 1}</span>
                <h3 className="text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">{benefit.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-center text-white shadow-soft sm:px-12 sm:py-16">
            <Sparkles className="mx-auto h-7 w-7 text-butter" />
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Your dog has a whole life. PawMate helps you hold the details.
            </h2>
            <Link href="/login" className={buttonStyles("secondary", "mt-7 border-white/20 bg-white text-ink hover:bg-cream")}>
              Meet your new sidekick <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/[0.07] bg-paper px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <span className="font-bold text-ink">PawMate</span>
          <span>Built for dogs, designed for their people.</span>
          <span>Prototype · 2026</span>
        </div>
      </footer>
    </main>
  );
}
