'use client';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ImageIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';

const AddSkillSchema = z.object({
  name: z.string().min(1),
  image: z.string().url().optional(),
  level: z.string().min(1),
});

export type SkillFormType = z.infer<typeof AddSkillSchema>;

export const AddSkillForm = () => {
  const [skillImage, setSkillImage] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm<SkillFormType>({
    resolver: zodResolver(AddSkillSchema),
    defaultValues: {
      name: '',
      image: '',
      level: '',
    },
  });

  const onSubmit = async (data: SkillFormType) => {
    console.log({ ...data, image: 'skill.com' });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center w-32 h-32 border rounded-md bg-zinc-200 dark:bg-zinc-900">
            <ImageIcon className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
          </div>
          <div className="flex-1 space-y-4 ">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Next.js" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="level"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl className="flex items-center">
                      <Input {...field} placeholder="80%" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-auto">
              Add Skill
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
