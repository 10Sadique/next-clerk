import bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';

import db from '@/lib/db';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'you@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'your password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Enter email or password.');
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('User does not exists.');
        }

        const passwordMatched = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMatched) {
          throw new Error('Wrong password.');
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
