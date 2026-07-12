import Link from "next/link";
import { Heart, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import type { Dog } from "@/data/dogs";
import { DogImage } from "@/components/image-placeholder";
import { InteractiveAction } from "@/components/interactive-action";
import { buttonStyles } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export function DogProfile({ dog }: { dog: Dog }) {
  return (
    <div className="grid gap-9 lg:grid-cols-[1.06fr_.94fr] lg:gap-14">
      <div>
        <DogImage
          name={dog.name}
          palette={dog.palette}
          image={dog.image}
          className="aspect-[5/4] w-full rounded-[2rem] shadow-card sm:rounded-[2.5rem]"
        />
        <div className="mt-3 grid grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((item) => (
            <DogImage
              key={item}
              name={dog.name}
              palette={dog.palette}
              image={dog.image}
              compact
              className={`aspect-square w-full rounded-2xl ${item > 0 ? "opacity-75" : "ring-2 ring-ink ring-offset-2 ring-offset-cream"}`}
            />
          ))}
        </div>
      </div>

      <section className="flex flex-col justify-center">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Ready to meet you</p>
            <h1 className="mt-2 text-5xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">{dog.name}</h1>
            <p className="mt-2 text-lg capitalize text-muted">{dog.age} · {dog.breed}</p>
          </div>
          <InteractiveAction
            label="Save"
            doneLabel="Saved"
            icon="heart"
            variant="secondary"
          />
        </div>

        <Link
          href="/shelters/sacramento-animal-shelter"
          className="mt-7 flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-paper p-4 transition hover:border-ink/15 hover:shadow-card"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-mist text-ink">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-muted">Cared for by</span>
            <span className="block text-sm font-bold text-ink">Sacramento Animal Shelter</span>
          </span>
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {dog.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <p className="mt-7 text-[1.05rem] leading-8 text-muted">{dog.description}</p>

        <div className="mt-7 flex flex-wrap items-center gap-5 border-y border-ink/[0.08] py-5 text-sm font-semibold text-ink/70">
          <span className="flex items-center gap-2"><Heart className="h-4 w-4" /> {dog.saves} saves</span>
          <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> {dog.comments} comments</span>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:hello@sacramentoshelter.example?subject=${encodeURIComponent(`I’d like to meet ${dog.name}`)}`}
            className={buttonStyles("primary", "px-7")}
          >
            Contact shelter
          </a>
          <InteractiveAction label="Save dog" doneLabel="Saved to your list" icon="heart" variant="secondary" />
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
          <MapPin className="h-4 w-4 text-clay" /> {dog.location}
        </p>
      </section>
    </div>
  );
}
