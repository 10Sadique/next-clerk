'use client';

import axios from 'axios';
import { toast } from 'sonner';
import { useCallback, useEffect, useState } from 'react';

import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { SingleProjectCard } from '@/components/dashboard/SingleProjectCard';
import { Loader2 } from 'lucide-react';
import { PorjectLoader } from './PorjectLoader';

export const AllProjects = () => {
  const [projects, setProjects] = useState<Project[] | []>([]);
  const [loading, setLoading] = useState(true);

  const getProjects = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/v1/projects');
      setProjects(res.data);
      // setProjects(res.data.slice(0, 3));
    } catch (error) {
      toast.error('Faild to load projects.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className="mt-4">
      {projects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <SingleProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Button variant={'secondary'}>See All Projects</Button>
          </div>
        </>
      ) : null}

      {loading ? <PorjectLoader /> : null}

      {projects.length === 0 && !loading ? (
        <p className="py-6 text-sm font-semibold text-center text-muted-foreground/50">
          No projects found.
        </p>
      ) : null}
    </div>
  );
};
