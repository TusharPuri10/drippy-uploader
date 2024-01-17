'use client'
 
import { useRouter } from 'next/navigation'
import Dropzone from 'react-dropzone'
import { Button } from "@/components/ui/button"
import React from 'react';
import { fileState } from '@/app/recoilContextProvider';
import { useSetRecoilState } from 'recoil';
import { Accept, DropzoneOptions } from 'react-dropzone';

export const Droparea: React.FC = () => {

  const router = useRouter()
  const setFile = useSetRecoilState(fileState); 
  const dropzoneOptions: DropzoneOptions = {
    accept: {
      'image/*': ['.png'],
    },
  };

  return (
    <div className="w-1/2">
      <Dropzone
      {...dropzoneOptions}
      onDrop={acceptedFiles => {
        const isImage = acceptedFiles.every(file => {
          const isJpg = file.type === 'image/jpeg' || file.type === 'image/jpg';
          const isPng = file.type === 'image/png';
      
          return isJpg || isPng;
        });
        if (acceptedFiles.length > 0 && isImage) {
          console.log(acceptedFiles);
          setFile(acceptedFiles);
          router.push('/uploads');
        } else {
          console.log("Please upload only images.");
          // You may want to provide some user feedback, e.g., show an error message.
        }
      }}>
      {({getRootProps, getInputProps}) => (
          <section>
          <div {...getRootProps()} className="flex flex-col items-center h-60 w-full border-4 border-gray-400 border-dotted rounded-xl">
              <input {...getInputProps()} />
              <Button className="text-md bg-blue-500 hover:bg-blue-600 text-white mt-16 rounded-xl">Add artwork</Button>
              <p className="mt-6 text-gray-500" >or drop and drag your artwork here</p>
          </div>
          </section>
      )}
      </Dropzone>
    </div>

  );
};
