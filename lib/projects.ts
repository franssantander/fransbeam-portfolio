import ProjectData from "@/data/PROJECT_DATA.json";
import { Project } from "@/interfaces";

/** Projects shown on the site; entries flagged `hidden` stay in the data for later. */
export const visibleProjects = (ProjectData as Project[]).filter(
  (project) => !project.hidden,
);
