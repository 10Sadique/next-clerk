import { SignleProjectPage } from '@/components/dashboard/SignleProjectPage';

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
