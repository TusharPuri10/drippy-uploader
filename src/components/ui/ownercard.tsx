import React from 'react';

export const Ownercard: React.FC = () => {
  return (
    <div className='w-5/6 mx-16 rounded-xl bg-gray-100 p-8'>
      <p className='text-xl font-semibold'>You are the owner of this artwork.</p>
      <div className='py-8'>
        <p className='text-sm pb-2 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-12 h-6 text-green-600 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Make sure your artworks don't infringe upon the copyrights,
          moral rights, publicity rights, privacy rights or any other rights of another person or third party.
        </p>
        <p className='text-sm pb-2 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-6 text-red-600 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          We have a zero tolerance policy regarding intellectual property rights infringement.
        </p>
        <div className='text-sm font-semibold py-2 pl-8'>
          <p>If Displate is made aware that an Artist has infringed the copyright or other intellectual property rights of a third party, Displate has the right to terminate the Artist's account and remove all of the Artist's content from Displate's website.</p>
        </div>
        <p className='text-sm px-2 py-2 pl-8'>
          Put simply, stealing other people's work and passing it off as your own is against the law and against what Displate stands and will stand for. We reserve the right to remove any artwork that violates the above rules.
        </p>
      </div>
      <hr className="h-px bg-gray-300 my-4 border-0" />
      <p>More about ownership policy:</p>
      <p className='text-blue-500 font-semibold'>Terms of Use</p>
    </div>
  );
};
