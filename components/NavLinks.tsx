'use client';

import { useUser } from '@clerk/nextjs';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLinks = () => {
  const pathname = usePathname();
  const user = useUser();

  return (
    <div className="flex items-center gap-4 text-sm font-semibold text-zinc-400 dark:text-zinc-500">
      {user.isSignedIn && (
        <Link
          className={clsx(
            pathname === '/dashboard' && 'dark:text-white text-zinc-950'
          )}
          href={'/dashboard'}
        >
          Dashboard
        </Link>
      )}

      {!user.isSignedIn && (
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
      )}
    </div>
  );
};
