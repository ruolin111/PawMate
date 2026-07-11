import {
  Bone,
  Dog,
  Footprints,
  PackageOpen,
  Trees,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { CommunityType } from "@/data/community";

const communityIcons = {
  meetup: Trees,
  playdate: Users,
  gear: PackageOpen,
  service: Footprints,
};

export function DogImage({
  name,
  palette,
  className,
  compact = false,
}: {
  name: string;
  palette: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate flex items-end justify-center overflow-hidden bg-gradient-to-br",
        palette,
        className,
      )}
      role="img"
      aria-label={`Pastel portrait placeholder for ${name}`}
    >
      <span className="absolute -left-8 top-6 h-28 w-28 rounded-full bg-white/25" />
      <span className="absolute right-5 top-5 h-12 w-12 rounded-full border border-white/40" />
      <Bone className="absolute right-5 top-5 h-5 w-5 rotate-12 text-white/70" />
      <div className={cn("relative mb-0 text-ink/75", compact ? "h-24 w-24" : "h-48 w-48")}>
        <Dog className="h-full w-full" strokeWidth={1.25} />
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink/70 backdrop-blur-sm">
        Meet {name}
      </span>
    </div>
  );
}

export function CommunityImage({
  type,
  palette,
  className,
}: {
  type: CommunityType;
  palette: string;
  className?: string;
}) {
  const Icon = communityIcons[type];
  return (
    <div
      className={cn(
        "relative isolate grid place-items-center overflow-hidden bg-gradient-to-br",
        palette,
        className,
      )}
      role="img"
      aria-label={`${type} illustration`}
    >
      <span className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-white/25" />
      <span className="absolute -left-5 -top-5 h-24 w-24 rounded-full border-[18px] border-white/20" />
      <Icon className="h-20 w-20 text-ink/70" strokeWidth={1.25} />
    </div>
  );
}
