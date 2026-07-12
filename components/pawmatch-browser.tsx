"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { DogCard } from "@/components/dog-card";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { dogs } from "@/data/dogs";
import { cn } from "@/lib/utils";

const filters = ["All dogs", "Under 2 years", "Small", "House trained", "Good with kids"];

export function PawMatchBrowser() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All dogs");
  const [showFilters, setShowFilters] = useState(false);

  const visibleDogs = useMemo(() => {
    const term = query.trim().toLowerCase();
    return dogs.slice(0, 8).filter((dog) => {
      const matchesQuery = !term || [dog.name, dog.age, dog.breed, dog.shelter]
        .join(" ")
        .toLowerCase()
        .includes(term);
      const matchesFilter =
        filter === "All dogs" ||
        (filter === "Under 2 years" && ["6mo", "1yo"].includes(dog.age)) ||
        (filter === "Small" && ["terrier", "corgi mix", "poodle mix"].includes(dog.breed)) ||
        (filter === "House trained" && dog.tags.some((tag) => tag.toLowerCase().includes("house trained"))) ||
        (filter === "Good with kids" && dog.tags.some((tag) => tag.toLowerCase().includes("good with kids")));
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div id="pawmatch-results">
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <SearchBar
          placeholder="Search breed, age, location..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="flex-1"
        />
        <Button
          variant={showFilters ? "soft" : "secondary"}
          onClick={() => setShowFilters((value) => !value)}
          aria-expanded={showFilters}
        >
          {showFilters ? <X className="h-4 w-4" /> : <SlidersHorizontal className="h-4 w-4" />}
          Filters
        </Button>
      </div>

      {showFilters && (
        <div className="mt-4 flex flex-wrap gap-2 rounded-3xl border border-ink/[0.07] bg-paper p-4 shadow-card">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition",
                filter === item ? "bg-ink text-white" : "bg-ink/5 text-ink hover:bg-ink/10",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="mt-9 flex items-center justify-between">
        <p className="text-sm font-semibold text-muted">{visibleDogs.length} hopeful neighbors</p>
        {(query || filter !== "All dogs") && (
          <button
            className="text-xs font-bold text-clay hover:underline"
            onClick={() => {
              setQuery("");
              setFilter("All dogs");
            }}
          >
            Clear search
          </button>
        )}
      </div>

      {visibleDogs.length ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleDogs.map((dog) => <DogCard key={dog.id} dog={dog} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-[2rem] border border-dashed border-ink/15 bg-paper px-6 py-20 text-center">
          <p className="text-lg font-bold text-ink">No matches on this trail.</p>
          <p className="mt-2 text-sm text-muted">Try a broader breed, age, or shelter search.</p>
        </div>
      )}
    </div>
  );
}
