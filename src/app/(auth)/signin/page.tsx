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
    <div className="container flex items-center justify-center h-full">
      <div className="w-[400px]">
        <h1 className="mb-2 text-3xl font-medium">Welcome back!</h1>
        <p className="mb-6 text-muted-foreground">Sign in to your account</p>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
