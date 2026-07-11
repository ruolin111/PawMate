import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={cn("relative block w-full", className)}>
      <span className="sr-only">Search</span>
      <Search
        aria-hidden="true"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
      />
      <input
        type="search"
        className="h-12 w-full rounded-full border border-ink/10 bg-white pl-12 pr-5 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/80 focus:border-sage focus:ring-4 focus:ring-sage/10"
        {...props}
      />
    </label>
  );
}
