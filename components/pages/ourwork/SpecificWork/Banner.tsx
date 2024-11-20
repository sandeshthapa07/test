import Image from 'next/image';

import CommonTitle from '@/components/common/CommonTitle';

const Banner = () => {
  return (
    <div className='common-padding flex flex-col gap-14 bg-lightShad2 py-8 sm:py-12 md:flex-row md:items-center md:justify-between'>
      <div className='flex flex-col gap-2 2xxl:w-2/3'>
        <p className='text-lg font-black text-primary'>Rennovation guru</p>
        <CommonTitle title='Revolutionizing living with modern technology' />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-grey '>Client</p>
          <Image
            src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='rennovation_guru_logo'
            width={500}
            height={500}
            className='size-[50px] rounded-2xl object-cover'
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-grey '>Industry</p>
          <p className='text-center text-lg font-medium leading-[150%] tracking-[0.36px] text-mainBlack'>Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
