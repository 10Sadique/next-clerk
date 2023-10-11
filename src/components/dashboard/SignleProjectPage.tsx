'use client';

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { buttonVariants } from '../ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

type ITechnology = {
  id: string;
  name: string;
  projectId: string;
};

interface IProject {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  links: {
    github: string;
    id: string;
    liveLink: string;
    projectId: string;
  }[];
  technologies: ITechnology[];
}

export const SignleProjectPage = ({ id }: { id: string }) => {
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);

  const getProjcet = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(`/api/v1/projects/${id}`);
      setProject(res.data.project);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProjcet();
  }, [getProjcet]);

  if (loading) {
    return (
      <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
        <Skeleton className="h-[400px] rounded-md w-full mb-6" />
        <div className="flex items-center justify-between">
          <Skeleton className="mb-3 rounded-md w-60 h-9" />
          <Skeleton className="w-12 h-10" />
        </div>
        <div className="flex items-center mb-3 space-x-4">
          <Skeleton className="h-10 w-[141.23px]" />
          <Skeleton className="h-10 w-[114.52px]" />
        </div>

        <Skeleton className="w-32 h-8" />
        <div className="space-y-4">
          <Skeleton className="w-[100%] h-7" />
          <Skeleton className="w-[80%] h-7" />
          <Skeleton className="w-[70%] h-7" />
          <Skeleton className="w-[90%] h-7" />
        </div>

        <Skeleton className="w-40 h-8" />
        <div className="flex items-center space-x-3">
          <Skeleton className="h-[22px] w-14 rounded-full" />
          <Skeleton className="h-[22px] w-14 rounded-full" />
          <Skeleton className="h-[22px] w-14 rounded-full" />
          <Skeleton className="h-[22px] w-14 rounded-full" />
          <Skeleton className="h-[22px] w-14 rounded-full" />
          <Skeleton className="h-[22px] w-14 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <Image
        src={project?.mainImage!}
        alt={project?.name!}
        width={1400}
        height={500}
        className="object-cover mb-6 rounded-md h-max"
      />

      <div className="flex items-center justify-between">
        <h2 className="mb-3 text-3xl font-bold">{project?.name}</h2>
        <DeleteProjectDialog id={project?.id!} />
      </div>

      <div className="mb-3 space-x-4">
        <Link
          href={project?.links[0].github!}
          target="_blank"
          className={buttonVariants({ className: 'flex items-center' })}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          GitHub Repo
        </Link>
        <Link
          href={project?.links[0].liveLink!}
          target="_blank"
          className={buttonVariants({ className: 'flex items-center' })}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Live Link
        </Link>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Overview</h3>
        <ReactMarkdown className="prose text-foreground">
          {project?.description!}
        </ReactMarkdown>
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold">Technologies</h3>
        <div className="space-x-3">
          {project?.technologies.map((project) => (
            <Badge key={project.id}>{project.name}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
