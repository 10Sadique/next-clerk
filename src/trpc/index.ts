import { z } from 'zod';
import { useAuth } from '@clerk/nextjs';

import db from '@/lib/db';
import { router } from './trpc';

export const appRouter = router({});

export type AppRouter = typeof appRouter;
