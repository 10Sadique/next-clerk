import Link from 'next/link';

import { NavLinks } from '@/components/navbar/NavLinks';
import { UserDropdownMenu } from '@/components/navbar/UserDropdownMenu';
import { siteConfig } from '@/config/site-config';

export default function Navbar() {
  const { siteName } = siteConfig;

  return (
    <nav className="sticky top-0 z-30 py-2 border-b bg-background h-[49px] my-auto">
      <div className="container flex items-center justify-between">
        <div>
          <Link href={'/'} className="text-xl font-bold">
            {siteName}
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <NavLinks />
          <UserDropdownMenu />
        </div>
      </div>
    </nav>
  );
}
