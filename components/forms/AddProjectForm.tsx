'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
});

export const AddProjectForm = () => {
  return <div>AddProjectForm</div>;
};
