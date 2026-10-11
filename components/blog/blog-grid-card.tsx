import Image from "next/image";
import Link from "next/link";
import { BlogPostMeta } from "@/interfaces";
import { formatMonthYear } from "@/utils/formatPostDate";

export default function BlogGridCard({
  post,
  index,
}: {
  post: BlogPostMeta;
  index: number;
}) {
  return (
    <Link href={`/letters/${post.slug}`} className="group block">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-muted">
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 3}
          />
        )}
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-ibm">
          {post.subtitle || formatMonthYear(post.date)}
        </p>
        <h2 className="font-bold text-lg leading-snug group-hover:text-muted-foreground transition-colors duration-200 font-geist">
          {post.title}
        </h2>
        <p className="text-xs text-muted-foreground tabular-nums font-ibm">
          {formatMonthYear(post.date)} · {post.readingTime} min read
        </p>
      </div>
    </Link>
  );
}
