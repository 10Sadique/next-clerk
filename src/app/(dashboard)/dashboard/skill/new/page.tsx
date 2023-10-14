import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AddSkillForm } from '@/components/forms/AddSkillForm';

export default function Page() {
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
          <CardTitle>Add New Skill</CardTitle>
          <CardDescription>
            Add new skill and display them in your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddSkillForm />
        </CardContent>
      </Card>
    </div>
  );
}
