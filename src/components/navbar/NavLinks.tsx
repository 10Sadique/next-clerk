'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4 text-sm font-semibold text-zinc-600 dark:text-zinc-200 ">
      <Link
        className={clsx(
          pathname === '/#home' && 'dark:text-white text-zinc-950',
          'hover:dark:text-[#9089fc]'
        )}
        href={'#home'}
      >
        Home
      </Link>
      <Link
        className={clsx(
          pathname === '/#about' && 'dark:text-white text-zinc-950',
          'hover:dark:text-[#9089fc]'
        )}
        href={'#about'}
      >
        About
      </Link>
    </div>
  );
};
