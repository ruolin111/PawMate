import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { CommunityImage } from "@/components/image-placeholder";
import { InteractiveAction } from "@/components/interactive-action";
import { SaveToggle } from "@/components/save-toggle";
import { ShareButton } from "@/components/share-button";
import { Tag } from "@/components/ui/tag";
import { communityPosts, getCommunityPost } from "@/data/community";

export function generateStaticParams() {
  return communityPosts.map((post) => ({ postId: post.id }));
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  const post = getCommunityPost(postId);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <section className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <Link href="/community" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to Community
        </Link>

        <div className="grid overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-paper shadow-soft lg:grid-cols-[1.02fr_.98fr] lg:rounded-[2.5rem]">
          <CommunityImage
            type={post.type}
            palette={post.palette}
            image={post.image}
            className="min-h-[320px] w-full lg:min-h-[660px]"
          />
          <article className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <Tag className="mb-5 w-fit bg-ink text-white">{post.label}</Tag>
            <h1 className="text-balance text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg font-bold text-clay">{post.detail}</p>

            <div className="mt-7 space-y-3 border-y border-ink/[0.08] py-6 text-sm text-muted">
              <p className="flex items-start gap-3"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-ink" /> {post.detail}</p>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink" /> {post.location}</p>
              {post.type === "service" && (
                <p className="flex items-center gap-3"><Star className="h-4 w-4 fill-butter text-[#C09A2D]" /> Available weekday afternoons</p>
              )}
            </div>

            <p className="mt-7 text-[1.05rem] leading-8 text-muted">{post.description}</p>

            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-cream p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-ink">
                <UserRound className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-xs font-semibold text-muted">{post.hostLabel}</span>
                <span className="block text-sm font-bold text-ink">{post.host}</span>
              </div>
              {post.type === "service" && <ShieldCheck className="ml-auto h-5 w-5 text-sage" aria-label="Verified provider" />}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <InteractiveAction label={post.action} doneLabel={post.type === "gear" || post.type === "service" ? "Request sent" : "You’re going"} />
              {post.type === "meetup" ? (
                <ShareButton title={post.title} />
              ) : null}
              <SaveToggle
                kind="community"
                id={post.id}
                label={post.type === "gear" ? "Save listing" : "Save post"}
                savedLabel={post.type === "gear" ? "Listing saved" : "Post saved"}
              />
            </div>

            <div className="mt-7 flex items-center gap-5 text-xs font-semibold text-muted">
              {post.type === "gear" ? <span className="flex items-center gap-2"><Heart className="h-4 w-4" /> 12 saves</span> : <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Friendly replies encouraged</span>}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
