import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SkillProgress } from '@/components/ui/skill-progress';

type TSingleSkillCard = {
  skill: {
    name: string;
    id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    level: string;
  };
};

export const SingleSkillCard = ({ skill }: TSingleSkillCard) => {
  return (
    <Link href={`/dashboard/skill/${skill.id}`} className="border rounded-md">
      <div className="flex gap-5 p-5">
        <div className="w-24 h-24 rounded-md dark:bg-white bg-zinc-200">
          <Image
            src={skill.image}
            alt={skill.name}
            quality={100}
            width={80}
            height={80}
            priority={true}
            loading="eager"
            className="w-full h-full p-4 rounded-md"
            unoptimized={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-lg font-bold">{skill.name}</h2>
          <SkillProgress className="mb-2" value={parseInt(skill.level)} />
          <span className="px-3 py-1 text-xs rounded-full bg-muted">
            {skill.level}%
          </span>
        </div>
      </div>
    </Link>
  );
};
