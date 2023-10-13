import { redirect } from 'next/navigation';
import { SignUpForm } from '@/components/forms/SignUpForm';

const SignUp = () => {
  redirect('/signin');
  return (
    <div className="container flex items-center justify-center h-full">
      <div className="w-[400px]">
        <h1 className="mb-2 text-3xl font-medium">Get started!</h1>
        <p className="mb-6 text-muted-foreground">Create new account</p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
