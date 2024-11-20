import Image from 'next/image';
import { fetchData } from '@/utils/getData';

import { type GlobalImpactSection } from '@/types/ourwork/main';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const GlobalImpact = async () => {
  const data = await fetchData<GlobalImpactSection>('/our-work/impact-on-industries');

  return (
    <div className='flex flex-col items-center justify-center gap-10 self-stretch px-6 py-[60px] xl:flex-row xl:gap-24 xl:px-[150px] xl:py-[100px]'>
      <div className='flex w-full flex-col items-center gap-8 self-stretch xl:items-start'>
        <div className='flex w-full flex-col items-center gap-2 self-stretch xl:items-start'>
          <CommonChip text={data?.sectionTitle} />
          <CommonTitle title={data?.mainTitle} />
        </div>
        <CommonParargraph text={data?.description} />
        <CommonButton text='Get a free quote' href='/contact-us' />
      </div>
      <div className='w-full'>
        <Image
          src={data?.bgImage}
          alt='global impact'
          width={1500}
          height={1500}
          className='rounded-3xl object-cover'
        />
      </div>
    </div>
  );
};

export default GlobalImpact;
