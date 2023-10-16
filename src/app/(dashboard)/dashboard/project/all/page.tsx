import { Heading } from '@/components/ui/header';
import { AllProjects } from '@/components/dashboard/project/AllProjects';
import { BackButton } from '@/components/dashboard/project/BackButton';

export default function Page() {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <BackButton />

      <Heading
        title="Projects"
        description={'Manage your projects.'}
        size="sm"
      />
      <div className="mb-6" />
      <AllProjects display="ALL" />
    </div>
  );
}
