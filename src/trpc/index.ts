import { router } from '@/trpc/trpc';
import { user } from '@/trpc/controllers/user';
import { skill } from '@/trpc/controllers/skill';
import { project } from '@/trpc/controllers/project';

export const appRouter = router({
  // user
  createUser: user.createUser,

  // skill
  getAllSkills: skill.getAllSkills,
  addSkill: skill.addSkill,
  getSkillById: skill.getSkillById,
  deleteSkillById: skill.deleteSkillById,

  // project
  addProject: project.addProject,
  getAllProjects: project.getAllProjects,
  getProjectById: project.getProjectById,
  deleteProjectById: project.deleteProjectById,
});

export type AppRouter = typeof appRouter;
