import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { SignInForm } from '@/components/forms/SignInForm';

const SignIn = () => {
  return (
    <div className="container relative flex items-center justify-center h-full">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold ">Sign In</CardTitle>
          <CardDescription className="font-semibold">
            Sign in to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
