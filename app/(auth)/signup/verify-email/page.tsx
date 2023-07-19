import { VerifyEmailForm } from '@/components/forms/VerifyEmailForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const VerifyEmail = () => {
  return (
    <div className="container flex items-center justify-center h-full">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold ">Verify email</CardTitle>
          <CardDescription className="font-semibold">
            Verify your email address to complete your account creation
          </CardDescription>
        </CardHeader>

        <CardContent>
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;
