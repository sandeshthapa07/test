import Image from 'next/image';

import CommonTitle from '@/components/common/CommonTitle';

const Banner = ({ title, coverImage }: { title: string; coverImage: string }) => {
  return (
    <div className='common-padding flex flex-col items-center justify-center gap-10 bg-lightShad2 py-14 xl:gap-12'>
      <div className='flex flex-[1_0_0] flex-col items-start justify-center gap-2 2xxl:w-2/3'>
        <p className='text-primary'>Design</p>
        <CommonTitle title={title} className='text-start' />
      </div>
      <div className='flex flex-[1_0_0] flex-col items-center justify-center gap-6 2xxl:w-2/3'>
        <Image
          src={coverImage}
          alt='banner'
          width={2000}
          height={1080}
          className='h-[50rem] w-full rounded-2xl object-cover'
        />
      </div>
    </div>
  );
};

export default Banner;
