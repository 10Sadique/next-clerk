'use client';
import { z } from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { trpc } from '@/app/_trpc/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SkillImageUploadButton } from '@/components/dashboard/skill/SkillImageUploadButton';

const AddSkillSchema = z.object({
  name: z.string().min(1),
  level: z.string().min(1),
});

export type SkillFormType = z.infer<typeof AddSkillSchema>;

export const AddSkillForm = () => {
  const [skillImage, setSkillImage] = useState<string | null>(null);

  const router = useRouter();

  const form = useForm<SkillFormType>({
    resolver: zodResolver(AddSkillSchema),
    defaultValues: {
      name: '',
      level: '',
    },
  });

  const { mutate: addSkill, isLoading } = trpc.addSkill.useMutation({
    onSuccess: ({ skill, success }) => {
      router.push(`/dashboard/skill/${skill.id}`);
      toast.success('Skill added.');
    },
    onError() {
      toast.error('Something went wrong.');
    },
  });

  const onSubmit = async (data: SkillFormType) => {
    if (skillImage === null) {
      toast.error('No image selected.');
      return;
    }

    addSkill({ ...data, image: skillImage });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div className="flex flex-row gap-4">
          <SkillImageUploadButton image={skillImage} setImage={setSkillImage} />
          <div className="flex-1 space-y-4 ">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Next.js" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="level"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl className="flex items-center">
                      <Input {...field} placeholder="80%" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading} type="submit" className="w-52">
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Add Skill
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
