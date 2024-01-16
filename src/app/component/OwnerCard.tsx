import React from 'react';

export const OwnerCard: React.FC = () => {
    return (
        <div className='w-auto mx-16 rounded-xl bg-gray-100 p-8'>
            <p className='text-xl'>You are the owner of this artwork.</p>
            <p className='text-sm'>Make sure your artworks don't infringe upon the copyrights,</p>
            <p className='text-sm'>moral rights, publicity rights, privacy rights or any other rights of another person or third party.</p>
            <p className='text-sm'>We have a zero tolerance policy regarding intellectual property rights infringement.</p>
            <p className='text-sm font-semibold'>If Displate is made aware that an Artist has infringed the 
            copyright or other intellectual property rights of a third party,
            Displate has the right to terminate the Artist's account and
            remove all of the Artist's content from Displate's website.</p>
            <p>Put simply, stealing other people's work and passing it off as your</p>
            <p>own is against the law and against what Displate stands and will</p>
            <p>stand for. We reserve the right to remove any artwork that</p>
            <p>violates the above rules.</p>
            <p>More about ownership policy.</p>
            <p>Terms of Use.</p>
        </div>
    );
};
