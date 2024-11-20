import { FaRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { type RelatedServices } from '@/types/insights/insights';
import CommonParargraph from '@/components/common/CommonParargraph';

const RelatedService = ({ related }: { related: RelatedServices }) => {
  return (
    <Link href='/insights' className='flex w-full flex-col gap-6'>
      <p className='text-2xl font-black text-mainBlack'>Related Service</p>
      <div className='flex flex-col gap-6 rounded-2xl bg-secondary p-6 text-white'>
        <Image
          src={related?.bgImage}
          alt='spotlight'
          width={700}
          height={500}
          className='h-[15.625rem] w-full rounded-2xl object-cover'
        />
        <div className='flex flex-row items-center gap-4 text-lg font-black'>
          <p>{related?.title}</p>
          <FaRightLong className='text-primary' />
        </div>
        <CommonParargraph text={related?.description} className='text-white' />
      </div>
    </Link>
  );
};

export default RelatedService;
