import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronLeft } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const metadata: Metadata = {
  title: 'Jafar - Auth',
  description: 'Next application with Clerk authentication',
};

function AuthLayout({ children }: { children: React.ReactNode }) {
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
          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'secondary',
            })}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>
      </AspectRatio>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
