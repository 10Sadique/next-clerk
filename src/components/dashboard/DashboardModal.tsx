import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddProjectForm } from '@/components/forms/AddProjectForm';
import { AddSkillForm } from '@/components/forms/AddSkillForm';

type DashboardModalProps = {
  title: string;
  description: string;
  modalType: 'project' | 'skill';
  button: string;
};

export const DashboardModal: React.FC<DashboardModalProps> = ({
  title,
  description,
  modalType,
  button,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'} className="font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          {button}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {modalType === 'project' && <AddProjectForm />}
        {modalType === 'skill' && <AddSkillForm />}
      </DialogContent>
    </Dialog>
  );
};
