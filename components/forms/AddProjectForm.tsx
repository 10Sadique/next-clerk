'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
});

type ProjectFormType = z.infer<typeof formSchema>;

export const AddProjectForm = () => {
  const form = useForm<ProjectFormType>({
    resolver: zodResolver(formSchema),
  });

  return <div>AddProjectForm</div>;
};
