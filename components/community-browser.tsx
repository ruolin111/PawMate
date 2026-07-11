"use client";

import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { CommunityCard } from "@/components/community-card";
import { SearchBar } from "@/components/ui/search-bar";
import { communityPosts, type CommunityType } from "@/data/community";
import { cn } from "@/lib/utils";

const categories: Array<{ label: string; value: "all" | CommunityType }> = [
  { label: "All", value: "all" },
  { label: "Meetups", value: "meetup" },
  { label: "Playdates", value: "playdate" },
  { label: "Gear for sale", value: "gear" },
  { label: "Services", value: "service" },
];

export function CommunityBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | CommunityType>("all");

  const visiblePosts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return communityPosts.filter((post) => {
      const matchesType = category === "all" || post.type === category;
      const matchesQuery = !term || [post.title, post.label, post.summary, post.location]
        .join(" ")
        .toLowerCase()
        .includes(term);
      return matchesType && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <SearchBar
          placeholder="Search nearby activities..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="flex-1"
        />
        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-5 text-sm font-semibold text-ink shadow-sm hover:border-ink/20">
          <MapPin className="h-4 w-4 text-clay" /> Near Sacramento, CA
        </button>
      </div>

      <div className="mt-7 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2" role="tablist" aria-label="Community categories">
          {categories.map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={category === item.value}
              key={item.value}
              onClick={() => setCategory(item.value)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition",
                category === item.value
                  ? "bg-ink text-white shadow-sm"
                  : "border border-ink/[0.08] bg-paper text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => <CommunityCard key={post.id} post={post} />)}
      </div>

      {!visiblePosts.length && (
        <div className="mt-7 rounded-[2rem] border border-dashed border-ink/15 bg-paper px-6 py-20 text-center">
          <p className="text-lg font-bold text-ink">Nothing nearby matches yet.</p>
          <p className="mt-2 text-sm text-muted">Try another category or a broader search.</p>
        </div>
      )}
    </>
  );
}
