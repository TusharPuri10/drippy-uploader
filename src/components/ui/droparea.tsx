'use client'
 
import { useRouter } from 'next/navigation'
import Dropzone from 'react-dropzone'
import { Button } from "@/components/ui/button"
import React from 'react';
import { artworkState } from '@/app/recoilContextProvider';
import { useSetRecoilState } from 'recoil';
import { DropzoneOptions } from 'react-dropzone';

interface File {
  key: string;
  file: File;
  title: string;
  tags: string[];
  description: string;
  category: string;
  type: ("Illustration" | "Photography");
  collection: string;
}

export const Droparea: React.FC = () => {

  const router = useRouter()
  const setArtwork = useSetRecoilState(artworkState); 
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
          const filekey = acceptedFiles[0].name + Date.now().toString();
          // setFile(acceptedFiles);
          setArtwork([
            {
              id: filekey,
              file: acceptedFiles[0],
              title: "",
              tags: [],
              description: "",
              category: "",
              type: "Illustration",
              collection: "",
            }]);
            grecaptcha.enterprise.ready(async () => {
              const token = await grecaptcha.enterprise.execute('6LdYx1MpAAAAAJO3fcaeh4QDJ_Xnt4HNOpmNCaS8', {action: 'verify'});
              // router.push('/uploads');

              const postData = async (url: string, data: any) => {
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });

                console.log(response);
                if (!response.ok) {
                  throw new Error('Failed to send the HTTP POST request.');
                }

                return response.json();
              };

              // ...

              // Inside your Droparea component:
              const sendRequest = async (token: string) => {
                const url = 'https://recaptchaenterprise.googleapis.com/v1/projects/cloudstash-403109/assessments?key=6LdYx1MpAAAAAJO3fcaeh4QDJ_Xnt4HNOpmNCaS8';
                const requestData = {
                  event: {
                    token: token,
                    siteKey: '6LdYx1MpAAAAAJO3fcaeh4QDJ_Xnt4HNOpmNCaS8',
                  },
                };

                try {
                  const response = await postData(url, requestData);
                  console.log(response);
                  // Handle the response as needed
                } catch (error) {
                  console.error(error);
                  // Handle the error
                }
              };

              // Call the sendRequest function with the token value
              sendRequest(token);
            });
        } else {
          console.log("Please upload only images.");
          // You may want to provide some user feedback, e.g., show an error message.
        }
      }}>
      {({getRootProps, getInputProps}) => (
          <section>
          <div {...getRootProps()} className="flex flex-col items-center h-60 w-full border-4 border-gray-400 border-dotted rounded-xl">
              <input {...getInputProps()}/>
              <Button className="text-md bg-blue-500 hover:bg-blue-600 text-white mt-16 rounded-xl">Add artwork</Button>
              <p className="mt-6 text-gray-500" >or drop and drag your artwork here</p>
          </div>
          </section>
      )}
      </Dropzone>
    </div>

  );
};
