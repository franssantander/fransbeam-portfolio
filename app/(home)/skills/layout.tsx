import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technical Skills",
  description:
    "Explore my technical skillset across frontend and backend development. Proficient in Next.js, React, TypeScript, Laravel architecture, and UI/UX design.",
  path: "/skills",
  keywords: [
    "Francis Santander Skills",
    "Frontend Development",
    "Backend Development",
    "Backend Architecture",
    "React Developer",
    "Next.js Developer",
    "Laravel Engineer",
    "Laravel Developer",
    "TypeScript & React",
    "Tailwind CSS Specialist",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
