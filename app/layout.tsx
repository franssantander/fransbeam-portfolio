import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollRestore } from "@/components/scroll-restore";
import { Analytics } from "@vercel/analytics/next";

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
    "Full-Stack Software Engineer",
    "Software Engineer Philippines",
    "Full Stack Developer Philippines",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "TypeScript Developer",
    "UI UX Designer Philippines",
  ],
  icons: {
    icon: "/favicon.svg",
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
    </>
  );
}
