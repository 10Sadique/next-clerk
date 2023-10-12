import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { SignUpForm } from '@/components/forms/SignUpForm';

const SignUp = () => {
  return (
    <div className="container flex items-center justify-center h-full">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold ">Sign Up</CardTitle>
          <CardDescription className="font-semibold">
            Create new account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
