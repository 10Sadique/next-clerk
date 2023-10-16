import { BackButton } from '@/components/dashboard/project/BackButton';

export default function Page({
  params: { skillId },
}: {
  params: { skillId: string };
}) {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <BackButton />
      <div>{skillId}</div>
    </div>
  );
}
