import { MdInsertLink } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import CommonParargraph from '@/components/common/CommonParargraph';

const Introduction = ({ id }: { id: string }) => {
  console.log(id, 'id');

  return (
    <div className='specific-work-intro common-section common-padding flex flex-col gap-8'>
      <CommonParargraph text={'sasnd'} />
      <Image
        src='https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='kho'
        width={1920}
        height={1080}
        className='max-h-[43.75rem] w-full rounded-2xl object-cover'
      />
      <div className='flex w-full flex-wrap items-center gap-8'>
        <div className='flex flex-wrap items-center gap-4'>
          <p className='text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack '>Service type</p>
          <p className='rounded-lg bg-lightShad2 p-2 text-mainBlack'>Game Development</p>
        </div>
        <div className='flex flex-wrap items-center gap-6'>
          <Link href='/' target='_blank' className='flex flex-row items-center gap-2'>
            <MdInsertLink />
            <p className='text-lg text-primary'>Mobile app</p>
          </Link>
          <Link href='/' target='_blank' className='flex flex-row items-center gap-2'>
            <MdInsertLink />
            <p className='text-lg text-primary'>Web App</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
