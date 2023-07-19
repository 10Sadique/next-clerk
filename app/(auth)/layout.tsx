import { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/lib/site-config';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Next Clerk - Auth',
  description: 'Next application with Clerk authentication',
};

function AuthLayout({ children }: { children: React.ReactNode }) {
  const { siteName } = siteConfig;

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <AspectRatio
        ratio={16 / 9}
        className="relative hidden bg-zinc-700 lg:block"
      >
        <Image
          src={'/images/auth-image.webp'}
          alt="auth image"
          fill
          priority
          className="absolute inset-0 object-cover opacity-60"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute z-20 left-8 top-6 line-clamp-1">
          <Link href={'/'} className="text-xl font-bold">
            {siteName}
          </Link>
        </div>
      </AspectRatio>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
