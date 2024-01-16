import React from 'react';

const tick = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6 text-green-600 mr-3"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const cross = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6 text-red-600 mr-3"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const QualityCard: React.FC = () => {
  return (
    <div className="w-5/6 mx-16 rounded-xl bg-gray-100 p-8">
      <p className="text-xl font-semibold">Your artwork is of high quality.</p>
      <p className="font-semibold pt-6">DO's</p>
      <div className="py-4 space-y-2">
        <p className="text-sm flex items-start">
          {tick}
          Upload only high-quality images in JPG format.
        </p>
        <p className="text-sm flex items-start">
          {tick}
          The file size should be at least 2900 × 4060 px in a 1.4:1 ratio.
        </p>
        <p className="text-sm flex items-start">
          {tick}
          Go for 300 DPI (or more) in RGB mode
        </p>
      </div>
      <p className="font-semibold pt-4">DONT's</p>
      <div className="pt-4 pb-6 space-y-2">
        <p className="text-sm flex items-start">
          {cross}
          Do not place text or content too close to the edge of the design.
        </p>
        <p className="text-sm flex items-start">
          {cross}
          Do not add frames in the composition.
        </p>
        <p className="text-sm flex items-start">
          {cross}
          Do not manually increase the pixel dimensions of images.
        </p>
        <p className="text-sm flex items-start">
          {cross}
          Do not add filters to try and increase the quality of images.
        </p>
      </div>
      <hr className="h-px bg-gray-300 my-4 border-0" />
      <p>More tips on preparing your artworks:</p>
      <p className="text-blue-500 font-semibold">Print guide: How to get your artworks approved?</p>
    </div>
  );
};
