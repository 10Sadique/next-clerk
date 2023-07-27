import Image from 'next/image';

import { Project } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          className="object-cover w-[280px] h-[186.81px] rounded-md"
        />
      </CardContent>
      <CardFooter>
        <Button>View Project</Button>
      </CardFooter>
    </Card>
  );
};
