import { ProjectsContainer } from '@/components/dashboard/ProjectsContainer';
import { SkillsContainer } from '@/components/dashboard/SkillsContainer';
import { Heading } from '@/components/ui/header';

function Dashboard() {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <Heading
        title="Dashboard"
        description={'Manage your dashboard.'}
        size="sm"
      />

      <ProjectsContainer />

      <SkillsContainer />
    </div>
  );
}

export default Dashboard;
