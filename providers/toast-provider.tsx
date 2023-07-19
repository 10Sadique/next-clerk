'use client';

import { Toaster as RedToaster } from 'sonner';

export const Toaster = () => {
  return (
    <RedToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      }}
      expand={false}
    />
  );
};
