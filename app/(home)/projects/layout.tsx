import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of full-stack projects. A showcase of modern web applications combining seamless frontend designs with powerful Laravel backends",
  keywords: [
    "Francis Santander Projects",
    "Full-Stack Web Applications",
    "Full-Stack Developer",
    "Software Developer",
    "Software Enginer",
    "React.js Frontend",
    "Next.js Frontend",
    "Laravel 12 Backend",
    "React Developer Portfolio",
  ],
  alternates: {
    canonical: "https://francissantander.com/projects",
  },
  openGraph: {
    title: "Projects | Francis Beam Santander",
    description:
      "Explore my portfolio of full-stack projects. A showcase of modern web applications combining seamless frontend designs with powerful Laravel backends",
    url: "https://francissantander.com/projects",
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
