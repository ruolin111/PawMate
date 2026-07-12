import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { CommunityPost } from "@/data/community";
import { CommunityImage } from "@/components/image-placeholder";
import { SaveToggle } from "@/components/save-toggle";
import { Tag } from "@/components/ui/tag";

export function CommunityCard({ post }: { post: CommunityPost }) {
  return (
    <article
      className="group overflow-hidden rounded-[1.6rem] border border-ink/[0.07] bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative">
        <Link href={`/community/${post.id}`} className="block overflow-hidden">
          <CommunityImage
            type={post.type}
            palette={post.palette}
            image={post.image}
            className="aspect-[16/10] w-full transition duration-500 group-hover:scale-[1.025]"
          />
        </Link>
        <SaveToggle kind="community" id={post.id} iconOnly className="absolute right-4 top-4" />
      </div>
      <Link href={`/community/${post.id}`} className="block p-5">
        <div className="flex items-center justify-between gap-3">
          <Tag>{post.label}</Tag>
          <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:rotate-12 group-hover:text-ink" />
        </div>
        <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{post.title}</h3>
        <p className="mt-1 text-sm font-semibold text-ink/70">{post.summary}</p>
        <p className="mt-4 flex items-center gap-1.5 border-t border-ink/[0.07] pt-4 text-xs text-muted">
          <MapPin className="h-3.5 w-3.5" />
          {post.distance}
        </p>
      </Link>
    </article>
  );
}
