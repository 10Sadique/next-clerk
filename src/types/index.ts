export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  link: Link;
  technologies: Technology[];
}

export interface Link {
  id: string;
  github: string;
  liveLink: string;
  projectId: string;
}

export interface Technology {
  id: string;
  name: string;
  projectId: string;
}
