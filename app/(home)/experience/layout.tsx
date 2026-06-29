import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore my professional journey as a full-stack engineer. A history of building scalable web apps using Next.js, React, TypeScript, and Laravel.",
  keywords: [
    "Francis Santander Experience",
    "Software Engineer Career",
    "Full-Stack Developer History",
    "Web Engineer Roles",
    "Next.js Laravel Experience",
    "Professional Background",
  ],
  alternates: {
    canonical: "https://francissantander.com/experience",
  },
  openGraph: {
    title: "Experience | Francis Beam Santander",
    description:
      "Explore my professional journey as a full-stack engineer. A history of building scalable web apps using Next.js, React, TypeScript, and Laravel.",
    url: "https://francissantander.com/experience",
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
