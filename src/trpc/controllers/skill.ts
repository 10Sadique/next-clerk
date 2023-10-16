import { z } from 'zod';

import db from '@/lib/db';
import { privateProcedure, publicProcedure } from '@/trpc/trpc';
import { AddSkillSchema } from '@/trpc/trpcSchema';
import { TRPCError } from '@trpc/server';

export const skill = {
  getAllSkills: publicProcedure.query(async () => {
    const skills = await db.skill.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { success: true, skills };
  }),

  addSkill: privateProcedure
    .input(AddSkillSchema)
    .mutation(async ({ input }) => {
      const skill = await db.skill.create({ data: input });

      return { success: true, skill };
    }),

  getSkillById: privateProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;

      const skill = await db.skill.findUnique({ where: { id } });

      if (!skill) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Skill not found.' });
      }

      return { success: true, skill };
    }),

  deleteSkillById: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const { id } = input;

      const skill = await db.skill.delete({ where: { id } });
      if (!skill) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Skill not found.' });
      }

      return { success: true, message: 'Skill deleted successfully.' };
    }),
};
