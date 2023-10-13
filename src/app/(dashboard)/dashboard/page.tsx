import { Heading } from '@/components/ui/header';
import { SkillsContainer } from '@/components/dashboard/skill/SkillsContainer';
import { ProjectsContainer } from '@/components/dashboard/project/ProjectsContainer';

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
