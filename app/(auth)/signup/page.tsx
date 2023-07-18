import { SignUpForm } from '@/components/forms/SignUpForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="container flex items-center justify-center py-32">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold ">Sign Up</CardTitle>
          <CardDescription className="font-semibold">
            Create new account
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* TODO: Social login button to be added */}
          {/* //... */}
          <SignUpForm />
        </CardContent>

        <CardFooter className="grid text-sm font-semibold text-muted-foreground place-items-center">
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
