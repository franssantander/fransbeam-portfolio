import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Designs",
  description:
    "Explore my UI/UX design portfolio. A showcase of modern, clean user interfaces and intuitive digital experiences focused on visual clarity and usability.",
  keywords: [
    "Francis Santander Designs",
    "UI/UX Design Portfolio",
    "User Interface Design",
    "User Experience Case Studies",
    "Product Design Frameworks",
    "Web Design Concepts",
    "Clean Minimalist UI",
  ],
  alternates: {
    canonical: "https://francissantander.com/designs",
  },
  openGraph: {
    title: "UI/UX Designs | Francis Beam Santander",
    description:
      "Explore my UI/UX design portfolio. A showcase of modern, clean user interfaces and intuitive digital experiences focused on visual clarity and usability.",
    url: "https://francissantander.com/designs",
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
