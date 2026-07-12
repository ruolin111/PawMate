"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/pawpal", label: "PawPal" },
  { href: "/pawmatch", label: "PawMatch" },
  { href: "/community", label: "Community" },
  { href: "/saved", label: "Saved" },
];

export function Navbar({
  showProfile = true,
  transparent = false,
}: {
  showProfile?: boolean;
  transparent?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "relative z-40 border-b border-ink/[0.07]",
        transparent ? "bg-transparent" : "bg-paper/95 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-ink/[0.07] text-ink"
                    : "text-muted hover:bg-ink/[0.04] hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          {showProfile ? (
            <Link
              href="/pawpal"
              aria-label="Open your profile"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#C7D9D6] text-sm font-bold text-ink ring-4 ring-white"
            >
              AM
            </Link>
          ) : (
            <Link href="/login" className={buttonStyles("secondary", "min-h-10 px-5 py-2")}>
              Log in
            </Link>
          )}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-5 pb-5 shadow-card md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold",
                  pathname.startsWith(link.href) ? "bg-ink/5 text-ink" : "text-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
            {!showProfile && (
              <Link href="/login" className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white">
                Log in
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
