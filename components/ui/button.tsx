import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "soft";

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-ink text-white shadow-[0_8px_18px_rgba(23,49,73,.18)] hover:bg-[#244660]",
    secondary:
      "border border-ink/15 bg-white text-ink hover:border-ink/30 hover:bg-cream",
    ghost: "text-ink hover:bg-ink/5",
    soft: "bg-[#F7DED4] text-[#9A4635] hover:bg-[#F2CCBE]",
  };

  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles(variant, className)}
      {...props}
    />
  );
}
