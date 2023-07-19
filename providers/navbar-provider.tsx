'use client';

import React from 'react';

import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

export const NavbarProvider = () => {
  const pathname = usePathname();

  if (
    pathname === '/signin' ||
    pathname === '/signup' ||
    pathname === '/signup/verify-email'
  )
    return null;

  return <Navbar />;
};
