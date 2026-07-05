export const siteConfig = {
  name: "Francis Beam Santander",
  shortName: "Francis Santander",
  title: {
    default:
      "Francis Santander — Full-Stack Software Engineer & UI/UX Designer",
    template: "%s | Francis Santander",
  },
  email: "hello@francissantander.com",
  description:
    "I'm Francis Santander — a Full-Stack Software Engineer and UI/UX Designer from the Philippines. I design and develop modern, scalable web and mobile applications.",

  url: "https://francissantander.com",
  ogImage: "/og-image.png",
  locale: "en_US",
  images: {
    og: "/og-image.png",
    favicon: "/favicon.ico",
  },

  seo: {
    keywords: [
      "Francis Beam Santander",
      "Francis Santander",
      "Frans Santander",
      "Full-Stack Software Engineer",
      "Software Engineer Philippines",
      "Full Stack Developer Philippines",
      "React Developer",
      "Next.js Developer",
      "Laravel Developer",
      "TypeScript Developer",
      "UI/UX Designer",
      "UI UX Designer Philippines",
    ] as string[],

    verification: {
      google: "Lrk3FXegFvCIHvKIPTUhZWtOroE7x7SK_D7meyjXt-M",
    },
  },

  person: {
    jobTitle: "Full-Stack Software Engineer & UI/UX Designer",

    alternateNames: [
      "Francis Santander",
      "Frans Santander",
      "Francis Beam",
      "Santander",
      "Francis",
      "Frans",
    ],
  },

  socials: {
    github: "https://github.com/franssantander",
    linkedin: "https://www.linkedin.com/in/francebeam",
    instagram: "https://www.instagram.com/franss.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
