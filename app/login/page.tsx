import Link from "next/link";
import { ArrowLeft, Chrome, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonStyles } from "@/components/ui/button";

const fieldClass =
  "h-12 w-full rounded-2xl border border-ink/10 bg-white pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-muted/65 focus:border-sage focus:ring-4 focus:ring-sage/10";

export const metadata = { title: "Create your account" };

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream px-5 py-6 sm:px-8">
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-peach/55 blur-3xl" />
      <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-mist/80 blur-3xl" />
      <header className="relative mx-auto flex max-w-[1320px] items-center justify-between">
        <Logo />
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink">
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to home</span>
        </Link>
      </header>

      <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-[1120px] place-items-center py-12 lg:grid-cols-2 lg:gap-20">
        <div className="hidden lg:block">
          <span className="inline-flex rounded-full bg-mist px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/70">Your dog’s day, made lighter</span>
          <h1 className="mt-6 max-w-lg text-6xl font-bold leading-[1.02] tracking-[-0.06em] text-ink">
            Care is a lot to carry. Let’s share it.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            Build routines, ask better questions, and meet the dog people already in your neighborhood.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["bg-peach", "bg-butter", "bg-mist"].map((color) => (
                <span key={color} className={`grid h-11 w-11 place-items-center rounded-full border-4 border-cream ${color}`}>
                  <span className="h-3 w-3 rounded-full bg-ink/40" />
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-ink/70">Join a kinder local dog network</p>
          </div>
        </div>

        <section className="w-full max-w-md rounded-[2rem] border border-white/80 bg-paper p-6 shadow-soft sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Welcome to PawMate</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Create your account</h2>
          <p className="mt-2 text-sm leading-6 text-muted">A calmer dog-care routine starts here.</p>

          <form action="/pawpal" className="mt-7 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Name</span>
              <span className="relative block">
                <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input required name="name" placeholder="Alex Morgan" autoComplete="name" className={fieldClass} />
              </span>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Email</span>
              <span className="relative block">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input required type="email" name="email" placeholder="alex@example.com" autoComplete="email" className={fieldClass} />
              </span>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink">Password</span>
              <span className="relative block">
                <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input required minLength={6} type="password" name="password" placeholder="At least 6 characters" autoComplete="new-password" className={fieldClass} />
              </span>
            </label>
            <button type="submit" className={buttonStyles("primary", "mt-2 w-full")}>Sign up</button>
          </form>

          <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-muted/70">
            <span className="h-px flex-1 bg-ink/10" /> or <span className="h-px flex-1 bg-ink/10" />
          </div>

          <Link href="/pawpal" className={buttonStyles("secondary", "w-full")}>
            <Chrome className="h-4 w-4" /> Continue with Google
          </Link>
          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/pawpal" className="font-bold text-ink underline decoration-clay/50 underline-offset-4">Log in</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
