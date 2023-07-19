import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignInForm } from '@/components/forms/SignInForm';
import { siteConfig } from '@/lib/site-config';

const SignIn = () => {
  const { siteName } = siteConfig;

  return (
    <div className="container relative flex items-center justify-center h-full">
      <div className="absolute z-10 left-8 top-6 line-clamp-1 lg:hidden">
        <Link href={'/'} className="text-xl font-bold">
          {siteName}
        </Link>
      </div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold ">Sign In</CardTitle>
          <CardDescription className="font-semibold">
            Sign in to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* TODO: Social login button to be added */}
          {/* //... */}

          <SignInForm />
        </CardContent>

        <CardFooter className="text-sm font-semibold  text-muted-foreground">
          <p>
            Don&apos;t have an account?{' '}
            <Link href={'/signup'} className="underline">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
