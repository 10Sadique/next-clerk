'use client';

import axios from 'axios';
import { Project } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export const SignleProjectPage = ({ id }: { id: string }) => {
  const [project, setProject] = useState<Project | null>(null);
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

  console.log(project);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full py-52">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">SignleProjectPage</div>
  );
};
