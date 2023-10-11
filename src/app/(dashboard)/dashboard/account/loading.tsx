import { Heading } from '@/components/ui/header';
import { Skeleton } from '@/components/ui/skeleton';

function AccountLoading() {
  return (
    <div className="py-6 lg:py-8">
      <Heading
        title="Account"
        description={'Manage your account settings.'}
        size="sm"
      />
      <div className="grid w-full gap-10 p-6 mt-6 overflow-hidden border rounded-lg lg:mt-8">
        <div className="space-y-2">
          <Skeleton className="w-20 h-5" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-12 w-96" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-12 w-96" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-12 w-96" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-12 w-96" />
        </div>
        <div className="space-y-2">
          <Skeleton className="w-40 h-8" />
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-12 w-96" />
        </div>
      </div>
    </div>
  );
}

export default AccountLoading;
