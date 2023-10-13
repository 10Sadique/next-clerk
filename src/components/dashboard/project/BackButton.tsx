'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push('/dashboard')}
      type="button"
      variant={'ghost'}
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      Back
    </Button>
  );
};
