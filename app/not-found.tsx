import Link from "next/link";
import { Dog } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonStyles } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 py-12">
      <div className="text-center">
        <Logo className="mb-12 justify-center" />
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[2rem] bg-mist">
          <Dog className="h-12 w-12 text-ink" strokeWidth={1.4} />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">404 · Lost scent</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">This trail ends here.</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-muted">
          The page you’re looking for may have wandered off. Let’s head back home.
        </p>
        <Link href="/" className={buttonStyles("primary", "mt-7")}>
          Back to PawMate
        </Link>
      </div>
    </main>
  );
}
