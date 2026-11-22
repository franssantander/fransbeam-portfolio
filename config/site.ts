export const siteConfig = {
  name: "Francis Beam Santander",
  shortName: "Francis Santander",
  title: {
    default: "Francis Santander — Software Engineer & UI/UX Designer",
    template: "%s | Francis Santander",
  },
  email: "hello@francissantander.com",
  description:
    "Francis Santander is a Software Engineer and UI/UX Designer based in the Philippines, and the founder of Medasin. He works with founders and businesses to design and build web and mobile products people can rely on.",
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
    jobTitle: "Software Engineer & UI/UX Designer",

    image:
      "https://vrnfzkijigqxzxt1.public.blob.vercel-storage.com/assets/images/francis-profile.avif",

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
      "Medasin is a calm second brain built on the CODE method: capture ideas, organize them with PARA, distill what matters, and express it as work you can share.",
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
