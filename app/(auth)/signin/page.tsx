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

const SignIn = () => {
  return (
    <div className="container flex items-center justify-center py-32">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
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

        <CardFooter className="grid text-sm font-semibold text-muted-foreground place-items-center">
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
