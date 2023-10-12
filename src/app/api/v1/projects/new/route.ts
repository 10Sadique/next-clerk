import { NextResponse } from 'next/server';

import db from '@/lib/db';
import { ProjectFormType } from '@/components/forms/AddProjectForm';

export async function POST(req: Request) {
  const body: ProjectFormType = await req.json();

  const { description, name, gitHub, live, mainImage, technologies } = body;
  const allTechs = technologies.split(', ');

  const project = await db.project.create({
    data: {
      name,
      description,
      mainImage: mainImage!,
    },
  });

  await db.link.create({
    data: {
      github: gitHub,
      liveLink: live,
      projectId: project.id,
    },
  });

  allTechs.forEach(async (tech) => {
    await db.technology.create({
      data: {
        name: tech,
        projectId: project.id,
      },
    });
  });

  return NextResponse.json(
    {
      success: true,
      project,
      message: 'Project created.',
    },
    { status: 201 }
  );
}
