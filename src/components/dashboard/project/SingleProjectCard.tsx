import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

export const SingleProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.name}
          height={400}
          width={400}
          className="object-cover  lg:h-[150px] h-full w-full rounded-md"
        />
      </CardContent>
      <CardFooter>
        <Link
          className={buttonVariants({
            className: 'w-full font-semibold text-sm',
            size: 'sm',
          })}
          href={`/dashboard/project/${project.id}`}
        >
          View Project
        </Link>
      </CardFooter>
    </Card>
  );
};
