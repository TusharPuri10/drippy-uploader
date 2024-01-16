import { useDropzone } from "react-dropzone";
import Dropzone from 'react-dropzone'
import { Button } from "@/components/ui/button"

export const Droparea = () => {
  return (
    <div className="w-1/3">
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
          <section>
          <div {...getRootProps()} className="flex flex-col items-center h-48 w-full border-4 border-gray-300 border-dotted rounded-xl">
              <input {...getInputProps()} />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-8  rounded-xl">Add artwork</Button>
              <p className="mt-4 text-gray-500" >or drop and drag your artwork here</p>
          </div>
          </section>
      )}
      </Dropzone>
    </div>

  );
};
