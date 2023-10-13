'use client';

import { SessionProvider } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export const AuthProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/signup') {
    router.push('/signin');
  }
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
