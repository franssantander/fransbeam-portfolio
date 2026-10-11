import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import BlogCard from "./blog-card";
import { getAllPosts } from "@/lib/blog";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function Blog() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <h1 className="text-muted-foreground">
            <ScrambleText text="Recent" delay={0} />
          </h1>
          <h1>
            <ScrambleText text="Letters" delay={0.1} />
          </h1>
        </div>
        <Link
          href="/letters"
          className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-1 font-ibm"
        >
          All letters
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
