import { z } from 'zod';

import db from '@/lib/db';
import { TRPCError } from '@trpc/server';
import { privateProcedure, publicProcedure } from '@/trpc/trpc';
import { AddProjectSchema } from '@/trpc/trpcSchema';

export const project = {
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
};
