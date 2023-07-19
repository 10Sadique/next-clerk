import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SubHeading } from '@/components/ui/sub-heading';
import { Separator } from '@/components/ui/separator';

export const SkillsContainer = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <SubHeading title="Skills" description={'Manage your skills.'} />
        <Button size={'sm'} className="font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Add New Skill
        </Button>
      </div>

      <Separator />

      <div></div>
    </div>
  );
};
