import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Letters",
  description:
    "Personal reflections on Stoicism, clear thinking, and living well by Francis Santander — written as letters, mostly to myself.",
  path: "/letters",
  keywords: [
    "Francis Santander Letters",
    "Stoicism Essays",
    "Philosophy Writing",
    "Stoic Reflections",
    "Clear Thinking",
    "Living Well",
    "Personal Letters",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
