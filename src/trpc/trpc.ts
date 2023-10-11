import { TRPCError, initTRPC } from '@trpc/server';
import { useAuth } from '@clerk/nextjs';

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const { userId } = useAuth();

  if (!userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      userId,
    },
  });
});

export const router = t.router;
export const privateProcedure = t.procedure.use(isAuth);
export const publicProcedure = t.procedure;
