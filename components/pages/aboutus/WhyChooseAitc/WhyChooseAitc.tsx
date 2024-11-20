import { fetchData } from '@/utils/getData';

import { type OurMissionWhyChooseAitcResponse } from '@/types/aboutus/banner';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const WhyChooseAitc = async () => {
  const { sectionTitle, mainTitle, description, features } = await fetchData<OurMissionWhyChooseAitcResponse>(
    '/about-us/our-mission-section'
  );
  return (
    <section className='common-padding mx-auto flex max-w-[1354px] flex-col  gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
      <div className='flex w-full flex-col gap-8 xmd:px-10'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} className='text-center' />
        </div>
        <CommonParargraph text={description} className='text-center' />
      </div>
      <div className='grid grid-cols-1 place-items-center gap-8 xmd:grid-cols-2 lg:grid-cols-3'>
        {features.map((item) => (
          <Card key={item?.id} title={item.title} icon={item?.icon} description={item?.description} />
        ))}
      </div>
      <CommonButton text='Be a partner' href='/' />
    </section>
  );
};

export default WhyChooseAitc;
