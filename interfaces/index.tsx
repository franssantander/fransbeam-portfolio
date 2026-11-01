export interface CaseStudy {
  problem: string;
  built: string;
  para: { name: string; icon: string; summary: string; examples: string[] }[];
  flow: { label: string; value: string }[];
  features: { icon: string; title: string; body: string }[];
}

export interface Project {
  img: string;
  project_name: string;
  category?: string;
  github?: string;
  description: string;
  link: string;
  techstack?: { icon: string; name: string; hasVariant: boolean }[];
  hidden?: boolean;
  status?: string;
  role?: string;
  tagline?: string;
  headline?: string;
  lede?: string;
  visual?: string;
  highlights?: string[];
  cta?: { label: string; href: string };
  case_study?: CaseStudy;
}

export interface Service {
  index: string;
  icon: string;
  title: string;
  audience: string;
  hook: string;
  tags: string[];
  href: string;
}

export interface UiuxImages {
  hero: string;
  palette: string;
  typography: string;
  wireframe: string;
  outcomes: string[];
}

export interface Uiux {
  slug: string;
  img: string;
  project_name: string;
  category: string;
  type: string;
  year: string;
  description: string;
  overview: string;
  tools: string[];
  images: UiuxImages;
}

export interface Experience {
  img: string;
  company_name: string;
  position: string;
  years_active: string;
  employment_type: string;
  experiences: string[];
}

export interface Skills {
  icon: string;
  name: string;
  category?: string;
  hasVariant: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  cover: string;
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
