import Link from 'next/link';

import { NavLinks } from '@/components/NavLinks';
import { UserDropdownMenu } from '@/components/UserDropdownMenu';
import { siteConfig } from '@/config/site-config';

export default function Navbar() {
  const { siteName } = siteConfig;

  return (
    <nav className="sticky top-0 z-30 py-2 border-b bg-background">
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
