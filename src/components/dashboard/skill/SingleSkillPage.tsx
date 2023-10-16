'use client';

import { trpc } from '@/app/_trpc/client';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { SkillDeleteButton } from './SkillDeleteButton';

type TSingleSkillPage = {
  skillId: string;
};
export const SingleSkillPage = ({ skillId }: TSingleSkillPage) => {
  const { data, isLoading } = trpc.getSkillById.useQuery({
    id: skillId,
  });

  if (isLoading)
    return (
      <div className="flex justify-between">
        <div className="flex gap-4 rounded-md">
          <Skeleton className="w-[140px] h-[140px]" />
          <div>
            <Skeleton className="w-32 h-12 mb-4" />
            <Skeleton className="w-[73.31px] h-9 rounded-full" />
          </div>
        </div>
        <Skeleton className="w-12 h-10" />
      </div>
    );

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="p-5 rounded-md h-[140px] w-[140px] dark:bg-white bg-zinc-200 grid place-items-center">
          <Image
            src={data?.skill.image!}
            alt={data?.skill.name!}
            height={100}
            width={100}
          />
        </div>

        <div>
          <h2 className="mb-4 text-5xl font-bold">{data?.skill.name}</h2>
          <span className="px-5 py-2 font-semibold rounded-full bg-muted">
            {data?.skill.level}%
          </span>
        </div>
      </div>

      <SkillDeleteButton id={data?.skill.id!} />
    </div>
  );
};
