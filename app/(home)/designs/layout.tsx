import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "UI/UX Designs",
  description:
    "UI/UX and product design by Francis Santander — interface and brand-led work, from landing pages to product UI, shaped around each business's audience and goals.",
  path: "/designs",
  keywords: [
    "Francis Santander Designs",
    "UI/UX Design Portfolio",
    "User Interface Design",
    "User Experience Case Studies",
    "Product Design",
    "Landing Page Design",
    "Figma UI Design",
    "UI UX Designer Philippines",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
