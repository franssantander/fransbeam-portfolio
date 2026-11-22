import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  IBM_Plex_Mono,
  Spectral,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollRestore } from "@/components/scroll-restore";
import { LoadingScreen } from "@/components/loading-screen";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";
import { schemaIds } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Medasin's display serif, used for its headline in Featured Projects
const spectral = Spectral({
  variable: "--font-spectral-serif",
  subsets: ["latin"],
  weight: ["700"],
});

// The italic of Medasin's CODE taglines, which only the case study uses
const spectralItalic = Spectral({
  variable: "--font-spectral-italic-face",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: siteConfig.title,

  description: siteConfig.description,

  keywords: [...siteConfig.seo.keywords],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  applicationName: siteConfig.name,

  verification: siteConfig.seo.verification,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    title: siteConfig.title.default,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",

    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: siteConfig.title.default,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title.default,
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  formatDetection: {
    telephone: false,
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
                "@graph": [
                  {
                    "@type": "Person",
                    "@id": schemaIds.person,
                    name: siteConfig.name,
                    alternateName: siteConfig.person.alternateNames,
                    url: siteConfig.url,
                    image: siteConfig.person.image,
                    email: `mailto:${siteConfig.email}`,
                    jobTitle: siteConfig.person.jobTitle,
                    worksFor: { "@id": schemaIds.venture },
                    description: siteConfig.description,
                    knowsAbout: [
                      "Full-Stack Product Engineering",
                      "UI/UX Design",
                      "Product Design",
                      "Web Development",
                      "Mobile App Development",
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Laravel",
                    ],
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "PH",
                    },
                    sameAs: Object.values(siteConfig.socials),
                  },
                  {
                    "@type": "Organization",
                    "@id": schemaIds.venture,
                    name: siteConfig.venture.name,
                    url: siteConfig.venture.url,
                    description: siteConfig.venture.description,
                    founder: { "@id": schemaIds.person },
                  },
                  {
                    "@type": "WebSite",
                    "@id": schemaIds.website,
                    name: siteConfig.name,
                    alternateName: siteConfig.shortName,
                    url: siteConfig.url,
                    description: siteConfig.description,
                    inLanguage: "en",
                    publisher: { "@id": schemaIds.person },
                  },
                ],
              }),
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} ${ibmPlexMono.variable} ${spectral.variable} ${spectralItalic.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <LoadingScreen />
            <ScrollRestore />
            <Navbar />
            <div>{children}</div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
