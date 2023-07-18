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
    <div className="container flex items-center justify-center py-32">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold ">
            Verify your email
          </CardTitle>
          <CardDescription className="font-semibold">
            Enter the code sent to your email.
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
