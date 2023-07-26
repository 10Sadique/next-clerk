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
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../ui/button';
import { ImageUpload } from '../ui/image-upload';
import { Textarea } from '../ui/textarea';
import MDEditor from '@uiw/react-md-editor';

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  mainImage: z.string().min(10),
  gitHub: z.string().min(10),
  live: z.string().min(10),
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
    },
  });

  const onSubmit = (data: ProjectFormType) => {
    console.log(data);
    console.log(data.description);
  };

  const handleEditorChange = (value: string) => {
    form.setValue('description', value);
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
                    <MDEditor
                      className="!bg-background"
                      hideToolbar
                      placeholder="Enter project description"
                      value={form.watch('description')}
                      onChange={(value) => handleEditorChange(value!)}
                      preview="edit"
                    />
                  </FormControl>
                  {/* <Textarea
                    {...field}
                    placeholder="Enter project description"
                  /> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Sumbit</Button>
      </form>
    </Form>
  );
};
