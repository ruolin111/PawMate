import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-ink/[0.055] px-3 py-1.5 text-xs font-semibold text-ink",
        className,
      )}
      {...props}
    />
  );
}
