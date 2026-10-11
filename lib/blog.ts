import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostMeta } from "@/interfaces";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;
// Letter covers live on Vercel Blob as /letters/<file>, e.g. "letter-1.jpg"
const LETTER_IMAGES_URL =
  "https://vrnfzkijigqxzxt1.public.blob.vercel-storage.com/letters";

function toIsoDate(value: unknown): string {
  // YAML parses unquoted dates (2026-10-07) as Date objects
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function resolveCover(value: unknown): string {
  const cover = String(value ?? "").trim();
  if (!cover) return "";
  if (cover.startsWith("http") || cover.startsWith("/")) return cover;
  return `${LETTER_IMAGES_URL}/${cover}`;
}

function readPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    subtitle: data.subtitle ?? "",
    excerpt: data.excerpt ?? "",
    date: toIsoDate(data.date),
    cover: resolveCover(data.cover),
    readingTime: Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readPost(file.replace(/\.md$/, "")))
    .filter((post): post is BlogPost => !!post)
    .map(({ slug, title, subtitle, excerpt, date, cover, readingTime }) => ({
      slug,
      title,
      subtitle,
      excerpt,
      date,
      cover,
      readingTime,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Guard against path traversal via the URL slug
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  return readPost(slug);
}
