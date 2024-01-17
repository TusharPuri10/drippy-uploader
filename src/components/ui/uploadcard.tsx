import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress"


const UploadCard: React.FC = () => {

    const handleRemove = () => {
        // Handle remove logic here
    };

    return (
        <div className="relative card w-52 h-80 border border-2 border-dashed border-gray-300 bg-gray-100 mx-4 my-2">
            
            <div className="card-content">
                <div  className='flex flex-col items-center mt-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-12 h-12 text-blue-500">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='mt-2 font-semibold text-sm text-blue-500'>Add more artworks</p>
                    <center className='px-4 mt-8 items-center text-xs text-red-600 font-semibold'>Max number of artworks uploaded per day is 10</center>
                </div>
            </div>
        </div>
    );
};

export default UploadCard;
