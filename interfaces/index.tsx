export default interface Project {
  img: string;
  project_name: string;
  category?: string;
  description: string;
  link: string;
}

export default interface Experience {
  img: string;
  company_name: string;
  position: string;
  years_active: string;
  experiences: string[];
}
