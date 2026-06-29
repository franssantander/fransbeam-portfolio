import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Explore my technical skillset across frontend and backend development. Proficient in Next.js, React, TypeScript, Laravel architecture, and UI/UX design.",
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
  alternates: {
    canonical: "https://francissantander.com/skills",
  },
  openGraph: {
    title: "Technical Skills | Francis Beam Santander",
    description:
      "Explore my technical skillset across frontend and backend development. Proficient in Next.js, React, TypeScript, Laravel architecture, and UI/UX design.",
    url: "https://francissantander.com/skills",
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
