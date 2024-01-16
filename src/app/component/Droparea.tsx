import { useDropzone } from "react-dropzone";
import Dropzone from 'react-dropzone'
import { Button } from "@/components/ui/button"
import React from 'react';

export const Droparea: React.FC = () => {
  return (
    <div className="w-1/3">
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
          <section>
          <div {...getRootProps()} className="flex flex-col items-center h-52 w-full border-4 border-gray-300 border-dotted rounded-xl">
              <input {...getInputProps()} />
              <Button className="text-md bg-blue-500 hover:bg-blue-600 text-white mt-12  rounded-xl">Add artwork</Button>
              <p className="mt-6 text-gray-500" >or drop and drag your artwork here</p>
          </div>
          </section>
      )}
      </Dropzone>
    </div>

  );
};
