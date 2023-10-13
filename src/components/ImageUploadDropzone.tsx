import Dropzone from 'react-dropzone';
import { Cloud, ImageIcon } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { useUploadThing } from '@/lib/uploadthing';
import { Progress } from '@/components/ui/progress';

type TImageUploadDropzone = {
  setImage: Dispatch<SetStateAction<string | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ImageUploadDropzone = ({
  setImage,
  setIsOpen,
}: TImageUploadDropzone) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { startUpload } = useUploadThing('imageUploader');

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        const res = await startUpload(acceptedFile);

        if (res) {
          setImage(res[0].url);
        }

        clearInterval(progressInterval);
        setUploadProgress(100);
        setIsOpen(false);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="h-64 m-4 border border-dashed rounded-lg"
        >
          <div className="flex items-center justify-center h-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/90 dark:hover:bg-zinc-900"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="w-6 h-6 mb-2 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to updoad</span> or drag
                  and drop
                </p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-muted flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200 dark:outline-zinc-700 dark:divide-zinc-700">
                  <div className="grid h-full px-3 py-2 place-items-center">
                    <ImageIcon className="w-4 h-4 text-blue-500" />
                  </div>

                  <div className="h-full px-3 py-2 text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <div className="w-full max-w-xs mx-auto mt-4">
                  <Progress
                    indicatorColor={
                      uploadProgress === 100 ? 'bg-green-500' : ''
                    }
                    value={uploadProgress}
                    className="w-full h-1 bg-zinc-200"
                  />

                  {uploadProgress === 100 ? (
                    <div className="flex items-center justify-center gap-1 pt-2 text-sm text-center text-zinc-700" />
                  ) : null}
                </div>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
