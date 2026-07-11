import Link from "next/link";
import { Heart } from "lucide-react";
import type { Dog } from "@/data/dogs";
import { DogImage } from "@/components/image-placeholder";
import { Tag } from "@/components/ui/tag";

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link
      href={`/pawmatch/${dog.id}`}
      className="group overflow-hidden rounded-[1.6rem] border border-ink/[0.07] bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative">
        <DogImage
          name={dog.name}
          palette={dog.palette}
          compact
          className="aspect-[4/3] w-full transition duration-500 group-hover:scale-[1.025]"
        />
        {dog.adopted && (
          <Tag className="absolute left-4 top-4 bg-white/90 text-[#567B61] shadow-sm">
            Happily adopted
          </Tag>
        )}
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink shadow-sm backdrop-blur">
          <Heart className="h-4 w-4" />
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-ink">{dog.name}</h3>
            <p className="mt-0.5 text-sm capitalize text-muted">
              {dog.age} · {dog.breed}
            </p>
          </div>
          <span className="pt-1 text-xs font-semibold text-muted">{dog.saves} saves</span>
        </div>
        <p className="mt-4 border-t border-ink/[0.07] pt-4 text-xs font-semibold text-ink/65">
          {dog.shelter}
        </p>
      </div>
    </Link>
  );
}
