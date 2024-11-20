import React from 'react';
import Image from 'next/image';

const IndustrySegmentCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className='industry-segment-card flex w-fit flex-col gap-6 rounded-2xl bg-gradient-to-b from-[#F8F8FF] to-[#FFF] p-6'>
      <div className='flex flex-row items-center gap-4'>
        <Image src={icon} alt='spotlight' width={200} height={200} className='size-[72px] object-contain' />
        <p className='text-lg font-black text-mainBlack'>{title}</p>
      </div>
      <p className='text-mainBlack'>{description}</p>
    </div>
  );
};

export default IndustrySegmentCard;
