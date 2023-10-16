import { Skeleton } from '@/components/ui/skeleton';

export const SkillsLoading = () => {
  return (
    <>
      {[1, 2, 3].map((item, idx) => (
        <div key={idx} className="border rounded-md">
          <div className="flex gap-5 p-5">
            <Skeleton className="w-24 h-24" />
            <div className="flex-1">
              <Skeleton className="w-2/3 mb-4 h-7" />
              <Skeleton className="w-full h-3 mb-3 rounded-full" />
              <Skeleton className="w-[47.92px] h-[23px] rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
