import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Francis Santander about your next web or mobile product. Available for projects and software engineering roles.",
  path: "/contact",
  keywords: [
    "Contact Francis Santander",
    "Hire Full-Stack Engineer",
    "Hire Full-Stack Developer",
    "Hire Software Engineer",
    "Software Developer Philippines",
    "Freelance Web Development",
    "Collaborate with Francis Santander",
    "Software Engineer Remote",
    "Software Developer Remote",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
