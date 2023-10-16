import { BackButton } from '@/components/dashboard/project/BackButton';
import { AllSkills } from '@/components/dashboard/skill/AllSkills';
import { Heading } from '@/components/ui/header';

export default function Page() {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <BackButton />
      <div>
        <Heading title="Skills" description={'Manage all your skill'} />
        <AllSkills display="ALL" />
      </div>
    </div>
  );
}
