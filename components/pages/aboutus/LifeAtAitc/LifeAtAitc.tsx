import { fetchData } from '@/utils/getData';
import { type OurCoreValuesResponse } from '@/types/aboutus/ourcorevalue';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';
import { ScrollingCards } from './ScrollingCards';

const LifeAtAitc = async () => {
  // life at aitc and core values has same types
  const { mainTitle, description, features, sectionTitle } = await fetchData<OurCoreValuesResponse>(
    '/about-us/life-at-aitc-section'
  );

  return (
    <section className='mx-auto flex flex-col items-center gap-10  py-[3.75rem] xmd:gap-[3.25rem]  xmd:py-20 xl:py-[6.25rem] '>
      <div className='common-padding flex  flex-col gap-8 xl:max-w-[70%]'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} className='text-center' />
        </div>
        <CommonParargraph text={description} className='text-center' />
      </div>
      <ScrollingCards>{features?.map((item) => <Card key={item?.id} id={item?.id} url={item?.url} />)}</ScrollingCards>
      <CommonButton text='Join us now' href='/career' />
    </section>
  );
};

export default LifeAtAitc;
