import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      projectId: string;
    };
  }
) {
  const id = params.projectId;

  try {
    const project = await db.project.findFirst({
      where: {
        id,
      },
      include: {
        links: true,
        technologies: true,
      },
    });

    if (!project) {
      return new NextResponse('No project found.', { status: 404 });
    }

    return NextResponse.json({ success: true, project });
  } catch (error) {
    return new NextResponse('Something went wrong, try again later.', {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: {
      projectId: string;
    };
  }
) {
  const id = params.projectId;

  try {
    const project = await db.project.delete({
      where: { id },
      include: { links: true, technologies: true },
    });

    return NextResponse.json({ success: true, project });
  } catch (error) {
    return new NextResponse('Something went wrong, try again later.', {
      status: 500,
    });
  }
}
