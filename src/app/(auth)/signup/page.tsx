import Link from 'next/link';

import { SignUpForm } from '@/components/forms/SignUpForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/config/site-config';

const SignUp = () => {
  const { siteName } = siteConfig;
  return (
    <div className="container flex items-center justify-center h-full">
      <div className="absolute z-10 left-8 top-6 line-clamp-1 lg:hidden">
        <Link href={'/'} className="text-xl font-bold">
          {siteName}
        </Link>
      </div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold ">Sign Up</CardTitle>
          <CardDescription className="font-semibold">
            Create new account
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* TODO: Social login button to be added */}
          {/* <OAuthSignIn />
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div> */}
          <SignUpForm />
        </CardContent>

        <CardFooter className="text-sm font-semibold text-muted-foreground">
          <p>
            Already have an account?{' '}
            <Link href={'/signin'} className="underline">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
