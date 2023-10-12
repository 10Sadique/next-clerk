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
          <Card key={idx} className="w-[330px] h-[348.81px]">
            <CardHeader>
              <Skeleton className="w-[120px] h-6" />
            </CardHeader>
            <CardContent>
              <Skeleton className="w-[280px] h-[186.81px]" />
            </CardContent>
            <CardFooter>
              <Skeleton className="w-[116.09px] h-10" />
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
