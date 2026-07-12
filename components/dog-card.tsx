import Link from "next/link";
import type { Dog } from "@/data/dogs";
import { DogImage } from "@/components/image-placeholder";
import { SaveToggle } from "@/components/save-toggle";
import { Tag } from "@/components/ui/tag";

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <article
      className="group overflow-hidden rounded-[1.6rem] border border-ink/[0.07] bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative">
        <Link href={`/pawmatch/${dog.id}`} className="block overflow-hidden">
          <DogImage
            name={dog.name}
            palette={dog.palette}
            image={dog.image}
            compact
            className="aspect-[4/3] w-full transition duration-500 group-hover:scale-[1.025]"
          />
        </Link>
        {dog.adopted && (
          <Tag className="absolute left-4 top-4 bg-white/90 text-[#567B61] shadow-sm">
            Happily adopted
          </Tag>
        )}
        <SaveToggle kind="dog" id={dog.id} iconOnly className="absolute right-4 top-4" />
      </div>
      <Link href={`/pawmatch/${dog.id}`} className="block p-5">
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
      </Link>
    </article>
  );
}
