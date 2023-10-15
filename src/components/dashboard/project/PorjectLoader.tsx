import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectLoaderProps = {
  display: 'THREE' | 'ALL';
};

export const PorjectLoader = ({ display }: ProjectLoaderProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[1, 2, 3].map((item, idx) => (
          <Card key={idx} className="w-full h-max">
            <CardHeader>
              <Skeleton className="w-[120px] h-6" />
            </CardHeader>
            <CardContent>
              <Skeleton className=" lg:h-[150px] h-full w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="w-full h-9 " />
            </CardFooter>
          </Card>
        ))}
      </div>
      {display === 'THREE' ? (
        <div className="flex items-center justify-center">
          <Skeleton className="w-[136.38px] h-10" />
        </div>
      ) : null}
    </div>
  );
};
