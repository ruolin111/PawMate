import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  tone,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  tone: string;
}) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full overflow-hidden p-2 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
        <div className={`relative min-h-52 overflow-hidden rounded-[1.35rem] p-6 ${tone}`}>
          <span className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-white/25" />
          <div className="mb-12 grid h-12 w-12 place-items-center rounded-2xl bg-white/80 text-ink shadow-sm">
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            {eyebrow}
          </span>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-1.5 max-w-xs text-sm leading-6 text-ink/65">{description}</p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-12">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
