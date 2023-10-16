import { BackButton } from '@/components/dashboard/project/BackButton';
import { SingleSkillPage } from '@/components/dashboard/skill/SingleSkillPage';

export default function Page({
  params: { skillId },
}: {
  params: { skillId: string };
}) {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <BackButton />

      <SingleSkillPage skillId={skillId} />
    </div>
  );
}
