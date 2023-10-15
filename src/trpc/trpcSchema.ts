import { z } from 'zod';

export const AddProjectSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  gitHub: z.string().min(10),
  live: z.string().min(10),
  technologies: z.string().min(10),
  mainImage: z.string().optional(),
});

export const AddUserSchema = z.object({
  email: z
    .string()
    .regex(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')),
  password: z
    .string()

    .regex(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$')),
  name: z.string(),
});

export const AddSkillSchema = z.object({
  name: z.string(),
  level: z.string(),
  image: z.string(),
});
