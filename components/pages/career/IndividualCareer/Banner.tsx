import { cn } from '@/utils/cn';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineStairs } from 'react-icons/md';
import { TbCurrencyRupeeNepalese } from 'react-icons/tb';

import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonTitle from '@/components/common/CommonTitle';

const IndividualCareerBanner = () => {
  return (
    <BannerWrapper
      image='https://images.unsplash.com/photo-1605622713668-fc5d98d5becc?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      className='bg-lightShad2'
    >
      <div
        className={cn('flex max-w-[616px] flex-col items-center justify-center gap-6 xl:max-w-[650px] xl:items-start')}
      >
        <CommonTitle title={'UI/UX Designer'} className='text-center capitalize xl:text-left' />
        <div className='flex flex-wrap items-center gap-4 '>
          <div className='flex flex-row items-center gap-2'>
            <MdOutlineStairs className='text-xl' />
            <p className='text-lg text-primary'>Senior</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <IoMdTime className='text-xl' />
            <p className='text-lg text-primary'>Full Time</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <IoLocationOutline className='text-xl' />
            <p className='text-lg text-primary'>Radhe Radhe Bhaktapur</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <TbCurrencyRupeeNepalese className='text-xl' />
            <p className='text-lg text-primary'>30,000 - 50,000</p>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default IndividualCareerBanner;
