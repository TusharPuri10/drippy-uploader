"use client";
import { fileState } from '../recoilContextProvider'
import { useRecoilState } from 'recoil'
import ArtworkCard from '@/components/ui/artworkcard';

export default function Home() {
  const [file, setFile] = useRecoilState(fileState);
  return (
    <div className='flex felx-wrap space-4 p-6'>
      {file.map((file) => (
        <ArtworkCard file={file} />
      ))}
      
    </div>
  )
}
