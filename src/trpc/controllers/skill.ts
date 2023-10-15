import { z } from 'zod';

import db from '@/lib/db';
import { privateProcedure, publicProcedure } from '@/trpc/trpc';
import { AddSkillSchema } from '@/trpc/trpcSchema';

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
};
