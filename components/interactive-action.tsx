"use client";

import { useState } from "react";
import { Check, Heart, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InteractiveAction({
  label,
  doneLabel = "You’re in",
  icon = "check",
  variant = "primary",
}: {
  label: string;
  doneLabel?: string;
  icon?: "check" | "heart" | "follow";
  variant?: "primary" | "secondary";
}) {
  const [done, setDone] = useState(false);
  const Icon = icon === "heart" ? Heart : icon === "follow" ? UserPlus : Check;

  return (
    <Button
      variant={variant}
      onClick={() => setDone((value) => !value)}
      aria-pressed={done}
    >
      <Icon className={`h-4 w-4 ${done && icon === "heart" ? "fill-current" : ""}`} />
      {done ? doneLabel : label}
    </Button>
  );
}
