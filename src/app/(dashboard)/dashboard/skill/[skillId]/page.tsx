export default function Page({
  params: { skillId },
}: {
  params: { skillId: string };
}) {
  return <div>{skillId}</div>;
}
