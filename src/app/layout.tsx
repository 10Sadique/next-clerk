import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NavbarProvider } from '@/providers/navbar-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/providers/toast-provider';
import './globals.css';
import { useServerSession } from '@/hooks/useServerSession';
import { AuthProvider } from '@/providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jafar',
  description: 'Next application with Clerk authentication',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await useServerSession();
  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Toaster />
            <NavbarProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
