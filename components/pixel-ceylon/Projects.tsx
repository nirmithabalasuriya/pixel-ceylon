import ProjectList from './ProjectList';
import { getPortfolioProjects } from '@/lib/portfolio-projects';

export const revalidate = 60;

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  display_order: number;
  summary?: string;
  image_url?: string;
};

function getProjects(): Project[] {
  return getPortfolioProjects().map((project) => ({
    id: project.id,
    slug: project.slug,
    name: project.name,
    client_type: project.client_type,
    tags: project.tags,
    display_order: project.display_order,
    summary: project.summary,
    image_url: project.image_url,
  }));
}

export default async function Projects() {
  const projects = getProjects();

  return <ProjectList projects={projects} />;
}
