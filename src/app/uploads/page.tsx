"use client";
import { artwork, artworkState, selectedArt } from '../recoilContextProvider'
import { useRecoilValue, useRecoilState } from 'recoil'
import ArtworkCard from '@/components/ui/artworkcard';
import UploadCard from '@/components/ui/uploadcard';
import Editor from '@/components/ui/editor';

export default function Home() {
  const artworklist = useRecoilValue(artworkState);
  const [selectedArtID, setSelectedArt] = useRecoilState(selectedArt);
  
  return (
    <div className='flex justify-between p-4' onDoubleClick={()=>setSelectedArt("")}>
      <div className={` ${selectedArtID==="" ? "grid grid-cols-6" : "grid grid-cols-4"} grid-flow-row`}>
        {artworklist.map((artwork: artwork) => (
          <ArtworkCard key={artwork.id} {...artwork}/>
        ))}
        <UploadCard />
      </div>
      {selectedArtID != ""  && <div className='fixed right-0 h-screen'>
        <Editor />
      </div>}
    </div>
  )
}
