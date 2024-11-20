import Image from 'next/image';

import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const BarrierSection = () => {
  return (
    <>
      <div className='barriers-small flex flex-col items-center justify-center gap-10 py-10 lg:py-24 xl:hidden'>
        <Image src='/images/barrier_small.png' alt='spotlight' width={2000} height={2000} className='size-full' />
        <CommonTitle title='Together, we break barriers' />
        <div className='flex flex-col items-center justify-center gap-4 px-4 text-center lg:px-16'>
          <p className='text-xl font-black text-mainBlack'>We turn challenges into Cutting-edge solutions</p>
          <CommonParargraph text='We understand that true excellence can only be achieved through the collective power of teamwork and the constant pursuit of innovation. These two pillars form the bedrock of our organizational culture, driving us to push boundaries and deliver solutions that redefine industry standards. These core values are not just buzzwords but the driving force behind our success, shaping our journey as we continue to redefine the boundaries of what is possible.' />
        </div>
      </div>
      <div className='barriers-large hidden flex-row justify-around gap-32 px-36 xl:flex'>
        <div className='h-[60dvh]'>
          <Image src='/images/barrier.png' alt='spotlight' width={2000} height={2000} className='size-full' />
        </div>
        <div className='flex w-2/3 flex-col content-center justify-center gap-4'>
          <CommonTitle title='Together, we break barriers' />
          <p className='text-xl font-black text-mainBlack'>We turn challenges into Cutting-edge solutions</p>
          <CommonParargraph
            className='2xl:w-2/3'
            text='We understand that true excellence can only be achieved through the collective power of teamwork and the constant pursuit of innovation. These two pillars form the bedrock of our organizational culture, driving us to push boundaries and deliver solutions that redefine industry standards. These core values are not just buzzwords but the driving force behind our success, shaping our journey as we continue to redefine the boundaries of what is possible.'
          />
        </div>
      </div>
    </>
  );
};

export default BarrierSection;
