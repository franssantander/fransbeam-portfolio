import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Francis Santander's experience as a full-stack software engineer — building production web apps with Next.js, React, TypeScript, and Laravel alongside great teams.",
  path: "/experience",
  keywords: [
    "Francis Santander Experience",
    "Software Engineer Career",
    "Full-Stack Developer History",
    "Web Engineer Roles",
    "Next.js Laravel Experience",
    "Professional Background",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
