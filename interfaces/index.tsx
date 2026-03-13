export interface Project {
  img: string;
  project_name: string;
  category?: string;
  github?: string;
  description: string;
  link: string;
  techstack?: { icon: string; hasVariant: boolean }[];
}

export interface UiuxProject {
  img: string;
  project_name: string;
  category?: string;
  description: string;
  link: string;
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
