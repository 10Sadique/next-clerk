'use client';

import { trpc } from '@/app/_trpc/client';

type AllSkillsProps = {
  display: 'THREE' | 'ALL';
};

export const AllSkills = ({ display }: AllSkillsProps) => {
  const { data, isLoading } = trpc.getAllSkills.useQuery();

  if (isLoading) {
    return <div className="mt-4">Loading...</div>;
  }

  if (data?.skills.length === 0 && !isLoading) {
    return (
      <div>
        <p className="py-6 text-sm font-semibold text-center text-muted-foreground/50">
          No skills found.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {data?.skills.map((skill) => (
        <div key={skill.id}>{skill.name}</div>
      ))}
    </div>
  );
};
