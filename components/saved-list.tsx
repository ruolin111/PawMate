"use client";

import Link from "next/link";
import { BookmarkCheck, Heart, Search } from "lucide-react";
import { CommunityCard } from "@/components/community-card";
import { DogCard } from "@/components/dog-card";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSavedItems } from "@/hooks/use-saved-items";
import { communityPosts } from "@/data/community";
import { dogs } from "@/data/dogs";

function pluralize(count: number, singular: string, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function SavedList() {
  const { items } = useSavedItems();

  const savedDogs = dogs.filter((dog) => items.dogs.includes(dog.id));
  const savedPosts = communityPosts.filter((post) => items.community.includes(post.id));
  const total = savedDogs.length + savedPosts.length;

  if (!total) {
    return (
      <Card className="mx-auto mt-10 max-w-3xl p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-peach/70 text-ink">
          <BookmarkCheck className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-ink">
          Your saved list is waiting for a few favorites.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
          Save shelter dogs you want to revisit and community posts you want to act on later. They’ll show up here.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/pawmatch" className={buttonStyles("primary")}>
            <Heart className="h-4 w-4" />
            Browse dogs
          </Link>
          <Link href="/community" className={buttonStyles("secondary")}>
            <Search className="h-4 w-4" />
            Explore community
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="mt-10 space-y-12">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Saved total</p>
          <p className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink">{total}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Dogs</p>
          <p className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink">{savedDogs.length}</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Community</p>
          <p className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink">{savedPosts.length}</p>
        </Card>
      </div>

      {savedDogs.length ? (
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">PawMatch favorites</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-ink">
                {pluralize(savedDogs.length, "dog")} saved
              </h2>
            </div>
            <Link href="/pawmatch" className="text-sm font-bold text-clay hover:underline">
              Browse more dogs
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {savedDogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </section>
      ) : null}

      {savedPosts.length ? (
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Community saves</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-ink">
                {pluralize(savedPosts.length, "post")} saved
              </h2>
            </div>
            <Link href="/community" className="text-sm font-bold text-clay hover:underline">
              Find more nearby
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savedPosts.map((post) => (
              <CommunityCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
