import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { DogProfile } from "@/components/dog-profile";
import { Navbar } from "@/components/navbar";
import { dogs, getDog } from "@/data/dogs";

export function generateStaticParams() {
  return dogs.map((dog) => ({ dogId: dog.id }));
}

export default async function DogProfilePage({ params }: { params: Promise<{ dogId: string }> }) {
  const { dogId } = await params;
  const dog = getDog(dogId);
  if (!dog) notFound();

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <Link href="/pawmatch" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to PawMatch
        </Link>
        <DogProfile dog={dog} />
      </section>
    </main>
  );
}
