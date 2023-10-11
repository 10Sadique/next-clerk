import { DashboardModal } from '@/components/dashboard/DashboardModal';
import { Separator } from '@/components/ui/separator';
import { SubHeading } from '@/components/ui/sub-heading';

export const SkillsContainer = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <SubHeading title="Skills" description={'Manage your skills.'} />

        <DashboardModal
          modalType="skill"
          title="Add New Skill"
          description="Add new skill and display them in your portfolio."
          button="Add New Skill"
        />
      </div>

      <Separator />

      <div></div>
    </div>
  );
};
