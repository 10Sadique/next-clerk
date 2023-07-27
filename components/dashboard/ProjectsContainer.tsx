import Link from 'next/link';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SubHeading } from '@/components/ui/sub-heading';
import { AllProjects } from '@/components/dashboard/AllProjects';

export const ProjectsContainer = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <SubHeading title="Projects" description={'Manage your projects.'} />

        <Link href={'/dashboard/project/new'}>
          <Button size={'sm'} className="font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Add New Project
          </Button>
        </Link>
      </div>

      <Separator />

      <AllProjects />
    </div>
  );
};
