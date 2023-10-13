import { SignleProjectPage } from '@/components/dashboard/project/SignleProjectPage';

export default async function SingleProject({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  return (
    <div>
      <SignleProjectPage id={projectId} />
    </div>
  );
}
