'use client';

import Link from 'next/link';
import { toast } from 'sonner';

import { trpc } from '@/app/_trpc/client';
import { buttonVariants } from '@/components/ui/button';
import { PorjectLoader } from '@/components/dashboard/project/PorjectLoader';
import { SingleProjectCard } from '@/components/dashboard/project/SingleProjectCard';

type AllProjectsProps = {
  display: 'THREE' | 'ALL';
};

export const AllProjects = ({ display }: AllProjectsProps) => {
  const { data, isLoading } = trpc.getAllProjects.useQuery(undefined, {
    retry: true,
    retryDelay: 500,
    onError: () => {
      toast.error('Failed to load projects.');
    },
  });

  if (isLoading) {
    return (
      <div className="mt-4">
        <PorjectLoader display={display} />
      </div>
    );
  }

  if (data?.projects.length === 0 && !isLoading) {
    return (
      <div>
        <p className="py-6 text-sm font-semibold text-center text-muted-foreground/50">
          No projects found.
        </p>
      </div>
    );
  }

  const projects =
    display === 'THREE' ? data?.projects.slice(0, 3) : data?.projects;

  return (
    <div className="mt-4">
      {data?.projects.length! > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects &&
              projects.map((project) => (
                <SingleProjectCard key={project.id} project={project} />
              ))}
          </div>

          {display === 'THREE' ? (
            <div className="flex items-center justify-center">
              <Link
                href={'/dashboard/project/all'}
                className={buttonVariants({ variant: 'secondary' })}
              >
                See All Projects
              </Link>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
