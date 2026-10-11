import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  // Keep the root title template so letter pages get "<title> | Francis Santander"
  title: { default: "Letters", template: siteConfig.title.template },
  description:
    "Letters on Stoicism, philosophy, and the craft of building things by Francis Santander.",
  keywords: [
    "Francis Santander Letters",
    "Stoicism Essays",
    "Philosophy Writing",
    "Stoic Reflections",
    "Software Engineering Essays",
    "Building Things",
  ],
  alternates: {
    canonical: "https://francissantander.com/letters",
  },
  openGraph: {
    title: "Letters | Francis Beam Santander",
    description:
      "Letters on Stoicism, philosophy, and the craft of building things by Francis Santander.",
    url: "https://francissantander.com/letters",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
