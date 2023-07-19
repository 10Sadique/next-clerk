import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SubHeading } from '@/components/ui/sub-heading';
import { Separator } from '@/components/ui/separator';

export const ProjectsContainer = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <SubHeading title="Projects" description={'Manage your projects.'} />
        <Button size={'sm'} className="font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Add New Project
        </Button>
      </div>

      <Separator />

      <div></div>
    </div>
  );
};
