import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Francis Santander. Let's work together on your next project. Available for full-time software engineering roles and collaborations.",
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
  alternates: {
    canonical: "https://francissantander.com/contact",
  },
  openGraph: {
    title: "Contact | Francis Beam Santander",
    description:
      "Get in touch with Francis Santander. Let's work together on your next project. Available for full-time software engineering roles and collaborations.",
    url: "https://francissantander.com/contact",
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
