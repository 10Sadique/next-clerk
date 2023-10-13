import { z } from 'zod';
import bcrypt from 'bcrypt';
import { TRPCError } from '@trpc/server';

import db from '@/lib/db';
import { privateProcedure, publicProcedure, router } from './trpc';
import { AddProjectSchema, AddUserSchema } from './trpcSchema';

export const appRouter = router({
  createUser: publicProcedure
    .input(AddUserSchema)
    .mutation(async ({ input }) => {
      const { email, name, password } = input;

      if (!name || !email || !password) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Missing fields.',
        });
      }

      const userExists = await db.user.findUnique({ where: { email } });

      if (userExists) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'This email already in use.',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await db.user.create({
        data: { email, name, hashedPassword },
      });

      return { success: true, user };
    }),

  getAllSkills: publicProcedure.query(async () => {
    const skills = await db.skill.findMany();

    return { success: true, skills };
  }),

  addProject: privateProcedure
    .input(AddProjectSchema)
    .mutation(async ({ input }) => {
      const { description, gitHub, live, name, technologies, mainImage } =
        input;

      const allTechs = technologies.split(', ');

      const project = await db.project.create({
        data: {
          name,
          description,
          mainImage: mainImage!,
        },
      });

      await db.link.create({
        data: {
          github: gitHub,
          liveLink: live,
          projectId: project.id,
        },
      });

      allTechs.forEach(async (tech) => {
        await db.technology.create({
          data: {
            name: tech,
            projectId: project.id,
          },
        });
      });

      return { success: true, project, message: 'Project created.' };
    }),

  getAllProjects: publicProcedure.query(async () => {
    const projects = await db.project.findMany({
      include: {
        technologies: {
          select: {
            id: true,
            name: true,
          },
        },
        links: {
          select: {
            github: true,
            liveLink: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { success: true, projects };
  }),

  getProjectById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const project = await db.project.findUnique({
        where: { id: input.id },
        include: {
          technologies: {
            select: {
              id: true,
              name: true,
            },
          },
          links: {
            select: {
              github: true,
              liveLink: true,
            },
          },
        },
      });

      if (!project) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }

      return { success: true, project };
    }),

  deleteProjectById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await db.project.delete({ where: { id: input.id } });

      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
