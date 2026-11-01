export const siteConfig = {
  name: "Francis Beam Santander",
  shortName: "Francis Santander",
  title: {
    default: "Francis Santander — Software Engineer & Founder of Medasin",
    template: "%s | Francis Santander",
  },
  email: "hello@francissantander.com",
  description:
    "Francis Santander is a Software Engineer and Founder of Medasin, based in the Philippines. He works with founders and businesses on full-stack product engineering and UI/UX design — web and mobile products people can rely on.",
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
      "Founder",
      "Medasin",
      "Product Engineer",
      "Full-Stack Product Engineering",
      "Product Designer",
      "Web and Mobile App Developer",
    ] as string[],

    verification: {
      google: "Lrk3FXegFvCIHvKIPTUhZWtOroE7x7SK_D7meyjXt-M",
    },
  },

  person: {
    jobTitle: "Software Engineer & Founder",

    image:
      "https://vrnfzkijigqxzxt1.public.blob.vercel-storage.com/assets/images/francis-img.avif",

    alternateNames: [
      "Francis Santander",
      "Frans Santander",
      "Francis Beam",
      "Santander",
      "Francis",
      "Frans",
    ],
  },

  venture: {
    name: "Medasin",
    url: "https://medasin.app",
    description:
      "A calm productivity app built on the PARA method — one workspace that links planning, focused work, reflection, and notes.",
    // Officially launched; planning began in March 2026
    launchDate: "2026-10-25",
  },

  socials: {
    github: "https://github.com/franssantander",
    linkedin: "https://www.linkedin.com/in/francebeam",
    instagram: "https://www.instagram.com/franss.dev",
  },
} as const;

export const projectInquiryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project inquiry")}`;

export type SiteConfig = typeof siteConfig;
