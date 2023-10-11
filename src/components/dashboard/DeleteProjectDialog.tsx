import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '../ui/button';
import { Trash2 } from 'lucide-react';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

interface IDeleteProjectDialog {
  id: string;
}

export const DeleteProjectDialog: React.FC<IDeleteProjectDialog> = ({ id }) => {
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/projects/${id}`);

      if (data.success) {
        toast.success('Project deleted successfully.');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            project and remove project data from servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className={buttonVariants({ variant: 'destructive' })}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
