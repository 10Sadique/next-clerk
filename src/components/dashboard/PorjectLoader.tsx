import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const PorjectLoader = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[1].map((item, idx) => (
          <Card key={idx} className="w-[288px] h-max">
            <CardHeader>
              <Skeleton className="w-[120px] h-6" />
            </CardHeader>
            <CardContent>
              <Skeleton className="lg:w-[240px] lg:h-[135px] h-full w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="w-full h-9 " />
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Skeleton className="w-[136.38px] h-10" />
      </div>
    </div>
  );
};
