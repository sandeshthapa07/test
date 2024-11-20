import Image from 'next/image';
import moment from 'moment';
import { IoMdShare } from 'react-icons/io';
import { LuClock10 } from 'react-icons/lu';

import { type CreatedBy } from '@/types/insights/insights';
import CommonParargraph from '@/components/common/CommonParargraph';

const AuthorDetails = ({ details }: { details: CreatedBy }) => {
  return (
    <div className='flex w-full flex-col gap-6'>
      <p className='text-2xl font-black text-mainBlack'>Author Details</p>
      <div className='flex flex-col gap-6 rounded-2xl bg-lightShad2 p-6'>
        <div className='flex flex-wrap items-center gap-8 whitespace-nowrap text-lg text-primary'>
          <div className='flex flex-row items-center gap-2'>
            <Image
              src={details?.image ? details?.image : '/icons/insight_icon.png'}
              alt='author'
              width={100}
              height={100}
              className='size-6 rounded-full object-cover'
            />
            <p>{details?.name}</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <LuClock10 />
            <p>{moment(details?.createdAt).format('DD MMM YYYY')}</p>
          </div>
          <div className='relative'>
            <button className='relative flex flex-row items-center gap-2'>
              <IoMdShare />
              <p>Share</p>
            </button>
          </div>
        </div>
        <CommonParargraph text={details?.description} />
      </div>
    </div>
  );
};

export default AuthorDetails;
