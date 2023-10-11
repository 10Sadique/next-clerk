import { Image, ImageIcon } from 'lucide-react';

export const ImageUploadButton = () => {
  return (
    <div className="flex items-center justify-center w-full h-32 border rounded-md bg-zinc-100 dark:bg-zinc-900">
      <ImageIcon className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
    </div>
  );
};
