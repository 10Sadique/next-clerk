import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ImageUploadDropzone } from '@/components/dashboard/ImageUploadDropzone';

type TSkillImageUploadButton = {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
};

export const SkillImageUploadButton = ({
  image,
  setImage,
}: TSkillImageUploadButton) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          variant={'ghost'}
          className={cn(
            'flex items-center justify-center border rounded-md w-36 h-36 bg-zinc-200 dark:bg-zinc-900',
            image ? 'p-5 h-36   bg-white rounded-md' : ''
          )}
        >
          {image === null ? (
            <ImageIcon className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
          ) : (
            <Image
              src={image}
              alt="skill image"
              width={144}
              height={144}
              className="rounded-md "
            />
          )}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <ImageUploadDropzone setImage={setImage} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};
