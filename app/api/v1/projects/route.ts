import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const projects = await db.project.findMany({
      include: {
        links: true,
        technologies: true,
      },
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return new NextResponse('Something went wrong', { status: 400 });
  }
}
