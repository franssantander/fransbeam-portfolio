import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollRestore } from "@/components/scroll-restore";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://francissantander.com"),
  title: "Francis Beam Santander - Full-Stack Engineer",
  description:
    "Portfolio of Francis Beam Santander, a Full-Stack Software Engineer and UI/UX enthusiast specializing in React, Next.js, TypeScript, and Laravel. Building scalable, user-centric web applications.",
  keywords: [
    "Francis Beam Santander",
    "Francis Santander",
    "Frans Santander",
    "Francis",
    "Francis Beam",
    "Santander",
    "Full-Stack Software Engineer",
    "Software Engineer Philippines",
    "Full Stack Developer Philippines",
    "Software Engineer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "TypeScript Developer",
    "UI UX Designer Philippines",
  ],
  verification: {
    google: "Lrk3FXegFvCIHvKIPTUhZWtOroE7x7SK_D7meyjXt-M",
  },
  openGraph: {
    title: "Francis Beam Santander - Full-Stack Engineer",
    description:
      "ortfolio of Francis Beam Santander, a Full-Stack Software Engineer and UI/UX enthusiast specializing in React, Next.js, TypeScript, and Laravel. Building scalable, user-centric web applications.",
    url: "https://francissantander.com",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Francis Beam Santander",
                url: "https://francissantander.com",
                jobTitle: "Full-Stack Software Engineer",
                sameAs: [
                  "https://www.linkedin.com/in/francebeam",
                  "https://github.com/franssantander",
                ],
              }),
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollRestore />
            <Navbar />
            <div>{children}</div>
          </ThemeProvider>
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
