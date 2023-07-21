import { Separator } from '@/components/ui/separator';
import { SubHeading } from '@/components/ui/sub-heading';
import { DashboardModal } from '@/components/dashboard/DashboardModal';

export const ProjectsContainer = () => {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <SubHeading title="Projects" description={'Manage your projects.'} />
        <DashboardModal
          modalType="project"
          title="Add New Project"
          description="Add new projects and display them in your portfolio."
          button="Add New Project"
        />
      </div>

      <Separator />

      <div></div>
    </div>
  );
};
