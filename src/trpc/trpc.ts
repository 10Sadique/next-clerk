import { useServerSession } from '@/hooks/useServerSession';
import db from '@/lib/db';
import { TRPCError, initTRPC } from '@trpc/server';

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const session = await useServerSession();

  const userId = await db.user.findUnique({
    where: { email: session?.user?.email! },
  });

  const user = session?.user;

  if (!userId || !user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      userId,
      user,
    },
  });
});

export const router = t.router;
export const privateProcedure = t.procedure.use(isAuth);
export const publicProcedure = t.procedure;
