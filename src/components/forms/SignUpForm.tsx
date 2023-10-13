'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect, useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { trpc } from '@/app/_trpc/client';
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
  firstName: z.string().min(3, { message: 'First name is required' }),
  lastName: z.string().min(3, { message: 'Last name is required' }),
});

type SignUpSchemaType = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const router = useRouter();

  const { status } = useSession();

  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  // react hook form
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  });

  const { mutate: createUser, isLoading } = trpc.createUser.useMutation({
    onSuccess: () => {
      toast.success('Account successfully created.');
      router.push('/signin');
    },
    onError(opts) {
      toast.error(opts.message);
    },
  });

  const onSubmit = async (vales: SignUpSchemaType) => {
    createUser({
      name: `${vales.firstName} ${vales.lastName}`,
      email: vales.email,
      password: vales.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="john" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
          Continue
        </Button>
      </form>
    </Form>
  );
};
