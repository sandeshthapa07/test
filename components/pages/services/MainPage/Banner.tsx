import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';

import { type BannerSection } from '@/types/service';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonTitle from '@/components/common/CommonTitle';

const Banner = async () => {
  const data = await fetchData<BannerSection>('/services/hero-section');

  return (
    <BannerWrapper image={data?.bgImage} className='bg-lightShad2'>
      <div
        className={cn(
          'flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start'
        )}
      >
        <CommonTitle title={data?.title} className='text-center capitalize xl:text-left' />
      </div>
    </BannerWrapper>
  );
};

export default Banner;
