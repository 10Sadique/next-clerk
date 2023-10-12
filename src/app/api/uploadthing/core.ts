import { getServerSession } from 'next-auth';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

import { authOptions } from '../auth/[...nextauth]/route';
import db from '@/lib/db';

const f = createUploadthing();

export const imageRouter = {
  imageUploader: f({ image: { maxFileSize: '64MB' } })
    .middleware(async ({ req }) => {
      const session = await getServerSession(authOptions);
      const user = await db.user.findUnique({
        where: { email: session?.user?.email! },
      });

      const userId = user?.id;

      if (!userId) throw new Error('Unauthorized');

      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type ImageRouter = typeof imageRouter;
