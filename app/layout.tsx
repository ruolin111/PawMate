import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PawMate — Better days for dogs and their people",
    template: "%s · PawMate",
  },
  description:
    "AI-powered dog care, local community, and shelter discovery in one warm, helpful place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
