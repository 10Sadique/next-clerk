'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';

const formSchema = z.object({
  email: z
    .string()
    .min(3, { message: 'Email is required.' })
    .regex(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'), {
      message: 'Enter valid email address.',
    }),
  password: z
    .string()
    .min(8, { message: 'Password at least have 6 character(s).' })
    .regex(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$'), {
      message:
        'Password must contain at least 1 number(s), 1 uppercase letter(s) and 1 character(s).',
    }),
});

type SignUpSchemaType = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const router = useRouter();

  const { status } = useSession();

  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  const [isLoading, setIsLoading] = useState(false);

  // react hook form
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        ...data,
        callbackUrl: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
        redirect: false,
      });

      if (res?.error) {
        toast.error(res.error);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="at least 8 characters"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} className="w-full font-semibold">
          {isLoading && (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
          )}
          Sign In
        </Button>
      </form>
    </Form>
  );
};
