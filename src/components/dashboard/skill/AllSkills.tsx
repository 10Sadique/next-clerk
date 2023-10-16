'use client';

import { trpc } from '@/app/_trpc/client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SingleSkillCard } from './SingleSkillCard';
import { SkillsLoading } from './SkillsLoading';

type AllSkillsProps = {
  display: 'THREE' | 'ALL';
};

export const AllSkills = ({ display }: AllSkillsProps) => {
  const { data, isLoading } = trpc.getAllSkills.useQuery(undefined, {
    retry: true,
    retryDelay: 500,
  });

  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 gap-4 mt-4  lg:grid-cols-3 sm:grid-cols-2',
          display === 'THREE' ? 'mb-4' : ''
        )}
      >
        <SkillsLoading />
      </div>
    );
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

  const skills = display === 'THREE' ? data?.skills.slice(0, 3) : data?.skills;

  return (
    <>
      <div
        className={cn(
          'grid grid-cols-1 gap-4 mt-4  lg:grid-cols-3 sm:grid-cols-2',
          display === 'THREE' ? 'mb-4' : ''
        )}
      >
        {skills &&
          skills.map((skill) => (
            <SingleSkillCard key={skill.id} skill={skill} />
          ))}
      </div>

      {display === 'THREE' ? (
        <div className="flex items-center justify-center">
          <Link
            href={'/dashboard/skill/all'}
            className={buttonVariants({ variant: 'secondary' })}
          >
            See All Skills
          </Link>
        </div>
      ) : null}
    </>
  );
};
