import Link from "next/link";
import { Dog, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PawMate home"
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-ink text-white shadow-sm">
        <Dog className="h-6 w-6" strokeWidth={1.8} />
        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-clay ring-2 ring-paper">
          <Heart className="h-2.5 w-2.5 fill-white text-white" />
        </span>
      </span>
      <span className="text-xl font-extrabold tracking-[-0.04em]">PawMate</span>
    </Link>
  );
}
