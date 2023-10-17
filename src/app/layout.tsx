import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import { NavbarProvider } from '@/providers/navbar-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/providers/toast-provider';
import './globals.css';
import { useServerSession } from '@/hooks/useServerSession';
import { AuthProvider } from '@/providers/auth-provider';
import { TRPCProvider } from '@/providers/trpc-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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
      <TRPCProvider>
        <html lang="en">
          <body className={cn(space.className, 'scrollbar')}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <Toaster />
              <NavbarProvider />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </TRPCProvider>
    </AuthProvider>
  );
}
