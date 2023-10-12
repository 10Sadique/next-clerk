import db from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse('Missing fields.', { status: 400 });
  }

  const userExists = await db.user.findUnique({ where: { email } });

  if (userExists) {
    return new NextResponse('Email already exists.', { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json({ success: true, user });
}
