import { fetchData } from '@/utils/getData';

import { type BenefitsSection } from '@/types/service';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import BenefitCard from './BenefitCard';

const Benefits = async () => {
  const data = await fetchData<BenefitsSection>('/services/benefits');

  return (
    <div className='common-padding flex items-center justify-center bg-lightShad2 py-14 md:py-20 xl:py-24'>
      <div className='flex w-full flex-col items-center justify-center gap-14 xl:w-2/3 xl:flex-row xl:gap-16'>
        <div className='flex flex-col items-center gap-12 xl:w-2/5 xl:items-start'>
          <div className='flex flex-col items-center gap-8 xl:items-start'>
            <div className='flex flex-col items-center gap-2 xl:items-start'>
              <CommonChip text={data?.sectionTitle} />
              <CommonTitle title={data?.mainTitle} />
            </div>
            <CommonParargraph text={data?.description} className='text-center xl:text-left' />
          </div>
          <CommonButton href='/contact-us' text='Get a free quote' className='mx-auto xl:mx-0' />
        </div>
        <div className='flex w-full flex-col gap-8 rounded-3xl bg-secondary p-8 text-white xl:w-3/5'>
          {data?.keyPoints?.map((item, index) => <BenefitCard key={item.id} data={item} index={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
