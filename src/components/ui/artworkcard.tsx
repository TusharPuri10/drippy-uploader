import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { artwork, artworkState, selectedArt } from '@/app/recoilContextProvider'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useEffect } from 'react';

const ArtworkCard: React.FC<artwork> = (artwork: artwork) => {
    const [artworklist, setArtwork] = useRecoilState(artworkState); // [artwork, setArtwork
    const handleRemove = () => {
        const newartworklist = artworklist.filter((artworkitem) => {
            return artworkitem.id !== artwork.id;
        });
        setArtwork(newartworklist);
    };
    const [selectedArtID, setSelectedArt] = useRecoilState(selectedArt); // [artwork, setArtwork

    useEffect(() => {
        if (artworklist.length > 0) {
          setSelectedArt(artworklist[artworklist.length - 1].id);
        }
      }, [artworklist]);

    return (
        <div className={` ${((selectedArtID === artwork.id) )? "ring-1 ring-blue-500 ":""} relative card w-52 h-80 shadow-lg bg-gray-100 mx-4 my-2`}>
            <button className="cross-button absolute right-0 p-1" onClick={handleRemove}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
            <div className="card-content" onClick={()=>setSelectedArt(artwork.id)}>
                <div key={artwork.file.name} className='flex flex-col items-center px-4 pt-6 pb-2'>
                    <img
                        src={URL.createObjectURL(artwork.file)}
                        alt="*"
                        className="object-scale-down w-28 h-40 border-2 border-dashed border-blue-200 "
                    />
                </div>
                <div className='px-4 py-2 text-sm font-semibold text-gray-700 space-y-2'>
                    <p className='font-semibold'>{artwork.file.name}</p>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p>Added</p>
                    </div>
                    <Progress value={5} className="bg-gray-300 h-1 mt-1" indicatorColor='bg-red-600' />
                    <div style={{ fontSize: '11px' }} className='justify-between flex flex-row'>
                        <p className='text-gray-600'>Artwork Description</p>
                        <p className='text-red-600'>0%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkCard;
