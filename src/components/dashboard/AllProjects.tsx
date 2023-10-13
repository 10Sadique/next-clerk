'use client';

import { toast } from 'sonner';

import { trpc } from '@/app/_trpc/client';
import { Button } from '@/components/ui/button';
import { PorjectLoader } from '@/components/dashboard/PorjectLoader';
import { SingleProjectCard } from '@/components/dashboard/SingleProjectCard';

export const AllProjects = () => {
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
        <PorjectLoader />
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

  return (
    <div className="mt-4">
      {data?.projects.length! > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.projects.map((project) => (
              <SingleProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Button variant={'secondary'}>See All Projects</Button>
          </div>
        </>
      ) : null}
    </div>
  );
};
