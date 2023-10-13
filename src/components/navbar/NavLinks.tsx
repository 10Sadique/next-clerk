'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export const NavLinks = () => {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <div className="flex items-center gap-4 text-sm font-semibold text-zinc-400 dark:text-zinc-500">
      {status === 'unauthenticated' ? (
        <>
          <Link
            className={clsx(
              pathname === '/signin' && 'dark:text-white text-zinc-950'
            )}
            href={'/signin'}
          >
            Sign In
          </Link>
          <Link
            className={clsx(
              pathname === '/signup' && 'dark:text-white text-zinc-950'
            )}
            href={'/signup'}
          >
            Sign Up
          </Link>
        </>
      ) : null}
    </div>
  );
};
