# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Francis Santander, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Deployed on Vercel.

## Positioning

This is **not** a typical developer portfolio or a plain project showcase. Treat it as a **business portfolio and business profile** for a business developer: it presents Francis as someone who builds products and delivers outcomes for clients and businesses, not just someone who writes code. It is still a developer portfolio at its core — it must keep showcasing projects, skills, personal information, and experience — but the framing around that content is business-first.

Rules when adding or changing content, copy, or design:
- **Lead with value, not tech.** Describe projects and experience in terms of the problem solved, the business result, and the client/user benefit; keep the tech stack as supporting detail, not the headline.
- **Business tone.** Copy should be professional, confident, and client-facing — avoid hobbyist/"look what I built" phrasing, developer in-jokes, and tutorial-style language.
- **Present as a business profile.** Hero, about, and contact content should read like a company/professional profile (what is offered, who it is for, how to engage), with a clear call to action to get in touch or hire.
- **Keep the developer showcase intact.** Do not remove or hide projects, skills, experience, or UI/UX case studies to make it "more business" — reframe them instead.
- **Credibility over decoration.** Prefer outcomes, metrics, roles, and client context where available; never invent numbers, clients, or testimonials.
- **Polished, restrained design.** Visual choices should feel like a professional business site (clean, trustworthy, consistent) rather than an experimental coder playground.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint
```

There is no test suite configured in this repo.

## Architecture

**Content is data-driven, not hardcoded.** Nearly all page content (projects, UI/UX case studies, experience, skills, nav links, email) lives in JSON files under `data/` (`PROJECT_DATA.json`, `UIUX_DATA.json`, `EXPERIENCE_DATA.json`, `SKILLS_DATA.json`, `NAV_LINKS.json`, `TECH_STACK.json`, `EMAIL.json`). Components import these JSON files directly and map over them — to add/edit a project, case study, or skill, edit the JSON, not the component. Shapes for this data are defined in `interfaces/index.tsx` (`Project`, `Uiux`, `Experience`, `Skills`).

**Single-page layout with route-mirrored sections.** The home page (`app/(home)/page.tsx`) renders all sections (`hero` — which includes the service cards from `SERVICES_DATA.json` —, `projects` (Featured Projects), `why-me` (`PRINCIPLES_DATA.json`), `process`, `experience`, `uiux`, `skills`, `letters`, `contact`) stacked vertically in one scrollable page, each wrapped in `id="<section>"` divs and a `FadeUp` scroll-reveal animation. `app/(home)/section-rail.tsx` + `hooks/useScrollSpy.ts` drive a fixed side-nav that highlights the active section based on scroll position. The routes under `app/(home)/projects`, `/uiux` (as `designs`), `/experience`, `/skills`, `/contact` are secondary/deep-linkable pages that also exist independently — check both the section component and any matching route page when changing a section's content or behavior.

**Detail pages read the slug client-side.** `app/(home)/designs/[slug]/page.tsx` is a client component (`"use client"`) that uses `useParams()` and `.find()`s the matching entry out of `UIUX_DATA.json` directly, rather than using `generateStaticParams`/server data fetching. Follow this pattern for any similar detail routes.

**Blog ("Letters") is the exception — Markdown, server-rendered.** User-facing, the blog is called **Letters** and lives at `/letters` (`app/(home)/letters/`, home section `id="letters"`); internally, modules keep the generic `blog` name (`lib/blog.ts`, `components/blog/`, `components/home/blog/`, `content/blog/`, `BlogPost*` types). `/blog` and `/blog/:slug` permanently redirect to `/letters` via `next.config.ts`. Posts are `content/blog/<slug>.md` files (currently `letter-1.md`, `letter-2.md`, …) with `title`/`subtitle`/`excerpt`/`date`/`cover` frontmatter; add a post by adding a file. `subtitle` renders as a small uppercase label above the title. A bare `cover` filename (e.g. `letter-1.jpg`) resolves to the Vercel Blob `/letters/` folder (`LETTER_IMAGES_URL` in `lib/blog.ts`); full URLs or `/`-paths are used as-is. `lib/blog.ts` reads them with `fs` + `gray-matter`, so it's server-only: `app/(home)/letters/page.tsx` and `letters/[slug]/page.tsx` are server components (`generateStaticParams`), and client components (e.g. `components/blog/blog-index.tsx`) receive posts as props. Date formatters for client use live in `utils/formatPostDate.ts`. Articles render via `react-markdown` + `remark-gfm` styled with `@tailwindcss/typography` (`prose`).

**Component organization:**
- `components/ui/` — shadcn-generated primitives (button, card, dialog, select, etc.). This project uses shadcn with `iconLibrary: lucide` and style `radix-nova` (see `components.json`) — use the shadcn CLI to add new primitives rather than hand-rolling them, and use `lucide-react` for icons (the `*Icon`-suffixed exports, e.g. `ArrowUpRightIcon`), not another icon set. Lucide v1 has no brand logos, so GitHub/LinkedIn/Instagram come from `components/icons/brand-icons.ts` (old Lucide glyphs via `createLucideIcon`); add any other brand icon there the same way.
- `components/home/<section>/` — one folder per home-page section (e.g. `projects/`, `uiux/`, `experience/`, `skills/`, `contact/`), each with a top-level section component plus a `*-card.tsx` for its repeated item.
- `components/animations/` — shared scroll/entrance animation wrappers (`FadeUp`, `RevealLine`, `ScrambleText`, `CountUp`) built on `framer-motion`. Reuse these for new animated content instead of writing new motion variants inline.

**Styling:** Tailwind CSS 4 with CSS variables (`app/globals.css`), `cn()` (`lib/utils.ts`, clsx + tailwind-merge) for conditional classnames, `class-variance-authority` for component variants. Theming is via `next-themes` (`providers/theme-provider.tsx`), default theme is `dark`, applied via the `class` attribute.

**Path alias:** `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/ui`, `@/data/PROJECT_DATA.json`, `@/lib/utils`.

**SEO/metadata:** Centralized in `config/site.ts` (`siteConfig`) and consumed by `app/layout.tsx` (metadata, JSON-LD Person schema) and `app/sitemap.ts`. Update `siteConfig` rather than editing metadata inline in pages.

**Env vars:** `BLOB_STORE_ID` and `BLOB_READ_WRITE_TOKEN` for Vercel Blob storage (used to host project/image assets referenced by URL in `data/*.json`, e.g. `PROJECT_DATA.json` image URLs).
