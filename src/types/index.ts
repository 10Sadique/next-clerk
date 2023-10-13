export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  links: Link[];
  technologies: Technology[];
}

export interface Link {
  github: string;
  liveLink: string;
}

export interface Technology {
  id: string;
  name: string;
}
