import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress"

interface ArtworkCardProps {
    file: File;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ file }) => {

    const handleRemove = () => {
        // Handle remove logic here
    };

    return (
        <div className="relative card w-52 h-80 border border-2 border-blue-400 shadow-lg bg-gray-100 mx-4 my-2">
            <button className="cross-button absolute right-0 p-1" onClick={handleRemove}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
            <div className="card-content">
                <div key={file.name} className='flex flex-col items-center px-4 pt-6 pb-2'>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="*"
                        className="object-scale-down w-28 h-40 border-2 border-dashed border-blue-200 "
                    />
                </div>
                <div className='px-4 py-2 text-sm font-semibold text-gray-700 space-y-2'>
                    <p className='font-semibold'>{file.name}</p>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
