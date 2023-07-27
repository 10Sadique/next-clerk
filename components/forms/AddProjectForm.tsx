'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../ui/button';
import { ImageUpload } from '../ui/image-upload';
import { Textarea } from '../ui/textarea';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  mainImage: z.string().min(10),
  gitHub: z.string().min(10),
  live: z.string().min(10),
  technologies: z.string().min(10),
});

type ProjectFormType = z.infer<typeof formSchema>;

export const AddProjectForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ProjectFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      mainImage: '',
      gitHub: '',
      live: '',
      technologies: '',
    },
  });

  const onSubmit = (data: ProjectFormType) => {
    try {
      setLoading(true);
      console.log(data);
      console.log(data.description);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value ? [field.value] : []}
                  disabled={loading}
                  onChange={(url) => field.onChange(url)}
                  onRemove={() => field.onChange('')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter project name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gitHub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Repo</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter github repo url"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="live"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter live link"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter project description in MDX"
                      className="h-[128px] resize"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>
                  <FormControl>
                    <Input placeholder="Next.js, Clerk, ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <Link href={'/dashboard'}>
            <Button type="button" variant={'outline'} className="">
              Cancel
            </Button>
          </Link>
          <Button disabled={loading} type="submit" className="w-52">
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Add Project
          </Button>
        </div>
      </form>
    </Form>
  );
};
