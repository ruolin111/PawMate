"use client";

import { Heart } from "lucide-react";
import type { MouseEvent } from "react";
import { useSavedItems } from "@/hooks/use-saved-items";
import type { SavedKind } from "@/lib/saved-items";
import { cn } from "@/lib/utils";
import { buttonStyles, type ButtonVariant } from "@/components/ui/button";

export function SaveToggle({
  kind,
  id,
  label = "Save",
  savedLabel = "Saved",
  variant = "secondary",
  className,
  iconOnly = false,
  stopLinkNavigation = false,
}: {
  kind: SavedKind;
  id: string;
  label?: string;
  savedLabel?: string;
  variant?: ButtonVariant;
  className?: string;
  iconOnly?: boolean;
  stopLinkNavigation?: boolean;
}) {
  const { isSaved, toggle } = useSavedItems();
  const saved = isSaved(kind, id);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (stopLinkNavigation) {
      event.preventDefault();
      event.stopPropagation();
    }

    toggle(kind, id);
  }

  if (iconOnly) {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={saved ? `Remove ${kind} from saved list` : `Save ${kind}`}
        aria-pressed={saved}
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full bg-white/85 text-ink shadow-sm backdrop-blur transition hover:scale-105 hover:bg-white",
          saved && "bg-[#F7DED4] text-[#9A4635]",
          className,
        )}
      >
        <Heart className={cn("h-4 w-4", saved && "fill-current")} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      className={buttonStyles(variant, className)}
    >
      <Heart className={cn("h-4 w-4", saved && "fill-current")} />
      {saved ? savedLabel : label}
    </button>
  );
}
