import { cn } from '@/utils/cn';

import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Banner = () => {
  const description = 'Market leading managed IT solutions and support for businesses across Nepal ';
  return (
    <BannerWrapper image='https://plus.unsplash.com/premium_photo-1723846948081-098b0f364e93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
      <div
        className={cn(
          'flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start',
          description && 'gap-8'
        )}
      >
        <CommonTitle
          title={'Empower your business with AITCs managed it solutions'}
          className='text-center capitalize xl:text-left'
        />
        <div className='flex flex-col items-center gap-6 xl:items-start'>
          {description && <CommonParargraph text={description} className='text-center lg:text-start' />}{' '}
          <div className='flex flex-row gap-4 '>
            <span className='text-lg font-medium text-primary'>.Innvoate</span>
            <span className='text-lg font-medium text-secondary'>.Inspire</span>
            <span className='text-lg font-medium text-mainBlack'>.Achieve</span>
          </div>
          <CommonButton href='/career' text='View job openings' />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
