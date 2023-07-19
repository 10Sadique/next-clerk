'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useSignIn, isClerkAPIResponseError } from '@clerk/nextjs';
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
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();

  // react hook form
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignUpSchemaType) => {
    setIsLoading(true);
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        });

        await setActive({ session: result.createdSessionId });

        router.push('/');
        toast.success('Signed in.');
      } catch (err) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    });
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
                <Input
                  type="email"
                  placeholder="Enter email address"
                  {...field}
                />
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
                  placeholder="Enter password"
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
