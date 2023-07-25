import { Separator } from '@/components/ui/separator';
import { SubHeading } from '@/components/ui/sub-heading';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

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

      <div></div>
    </div>
  );
};
