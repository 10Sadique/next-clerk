import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ImageUploadDropzone } from '@/components/dashboard/project/ImageUploadDropzone';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

type TImageUploadButton = {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
};

export const ImageUploadButton = ({ image, setImage }: TImageUploadButton) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            'flex items-center justify-center w-full h-32 border rounded-md bg-zinc-100 dark:bg-zinc-900',
            image ? 'p-0 h-max' : ''
          )}
        >
          {image === null ? (
            <ImageIcon className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
          ) : (
            <Image
              src={image}
              alt="image"
              width={1000}
              height={700}
              className="object-cover w-full h-full rounded-md"
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
