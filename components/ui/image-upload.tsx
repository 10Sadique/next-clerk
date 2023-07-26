'use client';

import { useMounted } from '@/hooks/useMounted';
import { Button } from './button';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

interface IImageUplaod {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export const ImageUpload: React.FC<IImageUplaod> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const mounted = useMounted();

  if (!mounted) return null;

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative w-full h-[200px] rounded-md overflow-hidden"
          >
            <div className="absolute z-10 top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant={'destructive'}
                size={'icon'}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            <Image src={url} alt="image" fill className="object-cover" />
          </div>
        ))}
      </div>
      {!value.length && (
        <CldUploadWidget onUpload={onUpload} uploadPreset="uwmfuocr">
          {({ open }) => {
            const onClick = () => {
              open();
            };
            return (
              <Button
                type="button"
                disabled={disabled}
                variant={'secondary'}
                onClick={onClick}
                className="w-full h-[200px] rounded-md"
              >
                <ImagePlus className="w-4 h-4 mr-2" />
                Upload an Image
              </Button>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};
