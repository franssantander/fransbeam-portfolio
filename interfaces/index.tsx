export interface Project {
  img: string;
  project_name: string;
  category?: string;
  github?: string;
  description: string;
  link: string;
  techstack?: { icon: string; hasVariant: boolean }[];
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
