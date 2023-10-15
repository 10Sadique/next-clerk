import bcrypt from 'bcrypt';

import db from '@/lib/db';
import { TRPCError } from '@trpc/server';
import { publicProcedure } from '@/trpc/trpc';
import { AddUserSchema } from '@/trpc/trpcSchema';

export const user = {
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
};
