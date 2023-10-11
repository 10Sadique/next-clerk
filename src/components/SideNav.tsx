'use client';

import { cn } from '@/lib/utils';
import { FileCode, Settings, User } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideNav = () => {
  const pathname = usePathname();
  const routes = [
    {
      id: 1,
      label: 'Account',
      href: '/dashboard/account',
      icon: <User className="w-4 h-4 mr-2" />,
    },
    {
      id: 2,
      label: 'Dashboard',
      href: '/dashboard',
      icon: <FileCode className="w-4 h-4 mr-2" />,
    },
    {
      id: 3,
      label: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <div className="flex flex-col w-full gap-2">
      {routes.map((route) => (
        <Link
          key={route.id}
          href={route.href}
          className={cn(
            'flex items-center px-2 py-1 border border-transparent rounded-md hover:bg-muted hover:text-foreground',
            pathname === route.href && 'bg-muted text-foreground'
          )}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </div>
  );
};
