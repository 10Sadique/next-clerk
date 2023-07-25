import { AddProjectForm } from '@/components/forms/AddProjectForm';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddProject() {
  return (
    <div className="py-6 space-y-6 lg:py-8 lg:space-y-8">
      <Link href={'/dashboard'}>
        <Button type="button" variant={'ghost'}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Add New Project</CardTitle>
          <CardDescription>
            Add new projects and display them in your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddProjectForm />
        </CardContent>
      </Card>
    </div>
  );
}
