import { Navbar } from "@/components/navbar";
import { PawPalDashboard } from "@/components/pawpal-dashboard";

export const metadata = { title: "PawPal" };

export default function PawPalPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC]">
      <Navbar />
      <PawPalDashboard />
    </main>
  );
}
