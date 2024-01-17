"use client";
import { fileState } from '../recoilContextProvider'
import { useRecoilState } from 'recoil'
import ArtworkCard from '@/components/ui/artworkcard';
import UploadCard from '@/components/ui/uploadcard';
import Editor from '@/components/ui/editor';

export default function Home() {
  const [file, setFile] = useRecoilState(fileState);
  return (
    <div className='bg-gray-100 flex justify-between h-screen p-4'>
      <div className='grid grid-cols-4 grid-flow-row '>
        {file.map((file) => (
          <ArtworkCard file={file} />
        ))}
        <UploadCard />
      </div>
      <div className='fixed right-0 h-screen'>
        <Editor />
      </div>
    </div>
  )
}
