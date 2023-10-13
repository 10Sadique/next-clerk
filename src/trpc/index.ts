import { z } from 'zod';

import db from '@/lib/db';
import { privateProcedure, publicProcedure, router } from './trpc';

export const appRouter = router({
  getAllSkills: publicProcedure.query(async () => {
    const skills = await db.skill.findMany();

    return { success: true, skills };
  }),
});

export type AppRouter = typeof appRouter;
