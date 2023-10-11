'use client';

import axios from 'axios';
import { toast } from 'sonner';
import { useCallback, useEffect, useState } from 'react';

import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { SingleProjectCard } from '@/components/dashboard/SingleProjectCard';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

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
      {projects.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {projects.map((project) => (
              <SingleProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Button variant={'secondary'}>See All Projects</Button>
          </div>
        </>
      )}

      {loading && (
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[1, 2, 3].map((item, idx) => (
              <Card key={idx} className="w-[330px] h-[348.81px]">
                <CardHeader>
                  <Skeleton className="w-[120px] h-6" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="w-[280px] h-[186.81px]" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="w-[116.09px] h-10" />
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="w-[136.38px] h-10" />
          </div>
        </div>
      )}

      {projects.length === 0 && !loading && (
        <p className="py-6 text-sm font-semibold text-center text-muted-foreground/50">
          No projects found.
        </p>
      )}
    </div>
  );
};
